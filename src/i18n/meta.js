import { PAGES } from '../routes';
import { POSTS } from '../data/posts';
import { parseReleaseNotes } from '../data/releaseNotes';

/*
 * Judul, deskripsi, dan nama halaman untuk jejak halaman.
 *
 * Halaman biasa mengambilnya dari `meta` dan `nav` di kamus. Tulisan Kabar
 * tidak punya entri sendiri di sana: judul dan ringkasannya dipakai langsung,
 * supaya <title>, jejak halaman, dan isi tulisan tidak pernah berbeda.
 */

export const fill = (template, values) =>
  template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? `{${key}}`);

const withPeriod = (text) => (/[.!?]$/.test(text) ? text : `${text}.`);

/** "A, B, dan C" atau "A, B, and C". */
function joinList(items, and) {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')}${items.length > 2 ? ',' : ''} ${and} ${items.at(-1)}`;
}

/**
 * Tulisan catatan rilis yang dibuat dari teks "Yang baru" di Google Play,
 * memakai templat `news.auto` di kamus. Daftar perubahannya disalin apa
 * adanya dari Play, termasuk sapaan "kamu" di teks bahasa Indonesia.
 */
function autoPost(t, release) {
  const a = t.news.auto;
  const lang = t.lang.current.toLowerCase();
  const { headline, changes } = parseReleaseNotes(release.notes[lang] ?? '');
  const values = { version: release.version, count: changes.length };

  const areas = [...new Set(changes.map((change) => change.area).filter(Boolean))];
  const overview = areas.length
    ? fill(a.overviewAreas, { ...values, areas: joinList(areas.slice(0, 3), a.and) })
    : fill(a.overview, values);

  return {
    eyebrow: a.eyebrow,
    title: fill(a.title, values),
    summary: headline ? `${fill(a.summaryLead, values)} ${withPeriod(headline)}` : overview,
    intro: `${headline ? withPeriod(headline) : fill(a.introLead, values)} ${a.introSource}`,
    changesTitle: fill(a.changesTitle, values),
    changes,
    closingTitle: a.closingTitle,
    closing: a.closing,
  };
}

/**
 * Isi satu tulisan Kabar. Untuk catatan rilis, isi otomatis dari Play
 * ditimpa oleh apa pun yang ditulis tangan di `news.posts[slug]`, sehingga
 * cukup menulis `title` dan `summary` saja untuk mengganti judulnya.
 */
export function postContent(t, slug) {
  const release = POSTS.find((entry) => entry.slug === slug)?.release;
  const manual = t.news.posts[slug];
  return { slug, ...(release ? autoPost(t, release) : {}), ...manual };
}

/** Isi tulisan bila halaman ini tulisan Kabar, selain itu `null`. */
export function postFor(t, page) {
  const slug = PAGES[page]?.post;
  return slug ? postContent(t, slug) : null;
}

/** Nomor halaman bila ini halaman daftar Kabar kedua dan seterusnya, selain itu `null`. */
export function laterListPage(page) {
  const n = PAGES[page]?.listPage;
  return n > 1 ? n : null;
}

export function pageMeta(t, page) {
  const post = postFor(t, page);
  if (post) return { title: `${post.title} - Himiko Lab`, description: post.summary };
  const n = laterListPage(page);
  if (n) {
    return {
      title: fill(t.news.pageMeta.title, { page: n }),
      description: fill(t.news.pageMeta.description, { page: n }),
    };
  }
  return t.meta[page];
}

export function pageLabel(t, page) {
  const n = laterListPage(page);
  if (n) return fill(t.news.pagination.page, { page: n });
  return postFor(t, page)?.title ?? t.nav[page];
}

/** Tanggal ISO (2026-11-16) menjadi tanggal yang dibaca orang. */
export function formatDate(t, lang, iso) {
  const [year, month, day] = iso.split('-').map(Number);
  const name = t.news.months[month - 1];
  return lang === 'en' ? `${name} ${day}, ${year}` : `${day} ${name} ${year}`;
}

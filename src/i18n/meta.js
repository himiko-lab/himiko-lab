import { PAGES } from '../routes';

/*
 * Judul, deskripsi, dan nama halaman untuk jejak halaman.
 *
 * Halaman biasa mengambilnya dari `meta` dan `nav` di kamus. Tulisan Kabar
 * tidak punya entri sendiri di sana: judul dan ringkasannya dipakai langsung,
 * supaya <title>, jejak halaman, dan isi tulisan tidak pernah berbeda.
 */

/** Isi tulisan bila halaman ini tulisan Kabar, selain itu `null`. */
export function postFor(t, page) {
  const slug = PAGES[page]?.post;
  return slug ? { slug, ...t.news.posts[slug] } : null;
}

export function pageMeta(t, page) {
  const post = postFor(t, page);
  if (post) return { title: `${post.title} - Himiko Lab`, description: post.summary };
  return t.meta[page];
}

export function pageLabel(t, page) {
  return postFor(t, page)?.title ?? t.nav[page];
}

/** Tanggal ISO (2026-11-16) menjadi tanggal yang dibaca orang. */
export function formatDate(t, lang, iso) {
  const [year, month, day] = iso.split('-').map(Number);
  const name = t.news.months[month - 1];
  return lang === 'en' ? `${name} ${day}, ${year}` : `${day} ${name} ${year}`;
}

/*
 * Daftar halaman situs, satu-satunya sumber untuk:
 * - berkas HTML yang ditulis scripts/prerender.js,
 * - canonical, hreflang, dan data terstruktur di src/seo.js,
 * - sitemap.xml,
 * - tautan navigasi dan pengalih bahasa.
 *
 * Menambah halaman berarti menambah satu entri di sini, satu komponen di
 * src/pages, dan teksnya di kedua kamus. Jangan menambah bahasa untuk sebuah
 * halaman sebelum terjemahannya benar-benar ada, sebab hreflang ikut dari sini.
 *
 * Tulisan di halaman Kabar tidak ditulis satu per satu di sini: entrinya
 * dibuat dari src/data/posts.js (yang sebagian besar berasal dari
 * src/data/releases.json) dan ditandai dengan `post` (slug tulisannya).
 * Halaman daftar Kabar ditandai dengan `listPage` (nomor halamannya), dan
 * halaman kedua dan seterusnya juga dibuat otomatis dari jumlah tulisan.
 */
import { NEWS_PAGE_COUNT, POSTS } from './data/posts';

export const LANGS = ['id', 'en'];
export const DEFAULT_LANG = 'id';

// Setiap tulisan baru menggeser isi semua halaman daftar Kabar, jadi semuanya
// memakai tanggal ubah tulisan terbaru.
const NEWS_LASTMOD = ['2026-11-17', ...POSTS.map((post) => post.lastmod)].reduce((a, b) =>
  b > a ? b : a,
);

export const PAGES = {
  home: {
    paths: { id: '/', en: '/en/' },
    lastmod: '2026-11-22',
    priority: { id: '1.0', en: '0.9' },
  },
  morvyn: {
    paths: { id: '/morvyn/', en: '/en/morvyn/' },
    lastmod: '2026-11-22',
    priority: { id: '0.8', en: '0.7' },
  },
  about: {
    paths: { id: '/tentang/', en: '/en/about/' },
    lastmod: '2026-11-17',
    priority: { id: '0.7', en: '0.6' },
  },
  news: {
    listPage: 1,
    paths: { id: '/kabar/', en: '/en/news/' },
    lastmod: NEWS_LASTMOD,
    priority: { id: '0.6', en: '0.5' },
  },
  contact: {
    paths: { id: '/kontak/', en: '/en/contact/' },
    lastmod: '2026-11-17',
    priority: { id: '0.5', en: '0.4' },
  },
  ...Object.fromEntries(
    Array.from({ length: NEWS_PAGE_COUNT - 1 }, (_, i) => i + 2).map((n) => [
      newsListPage(n),
      {
        listPage: n,
        paths: { id: `/kabar/halaman/${n}/`, en: `/en/news/page/${n}/` },
        lastmod: NEWS_LASTMOD,
        priority: { id: '0.4', en: '0.3' },
      },
    ]),
  ),
  ...Object.fromEntries(
    POSTS.map((post) => [
      postPage(post.slug),
      {
        post: post.slug,
        paths: { id: `/kabar/${post.slug}/`, en: `/en/news/${post.slug}/` },
        lastmod: post.lastmod,
        priority: { id: '0.6', en: '0.5' },
      },
    ]),
  ),
};

/** Nama halaman (kunci di PAGES) untuk halaman daftar Kabar ke-`n`. */
export function newsListPage(n) {
  return n === 1 ? 'news' : `news/page/${n}`;
}

/** Nama halaman (kunci di PAGES) untuk sebuah tulisan Kabar. */
export function postPage(slug) {
  return `news/${slug}`;
}

/*
 * GitHub Pages menyajikan 404.html untuk setiap alamat yang tidak ada.
 * Halaman ini tidak masuk sitemap dan diberi noindex.
 */
export const NOT_FOUND = { page: 'notFound', lang: DEFAULT_LANG, path: '/404.html' };

/** Semua halaman yang boleh diindeks, satu entri per bahasa. */
export const ROUTES = Object.entries(PAGES).flatMap(([page, def]) =>
  LANGS.filter((lang) => def.paths[lang]).map((lang) => ({ page, lang, path: def.paths[lang] })),
);

/** Alamat sebuah halaman dalam bahasa tertentu, atau `null` bila belum ada. */
export function pathFor(page, lang) {
  return PAGES[page]?.paths[lang] ?? null;
}

export function findRoute(page, lang) {
  return ROUTES.find((route) => route.page === page && route.lang === lang) ?? null;
}

/** Mencocokkan alamat browser dengan rute, toleran terhadap garis miring akhir. */
export function matchPath(pathname) {
  const clean = pathname.replace(/index\.html$/, '');
  const normalized = clean.endsWith('/') ? clean : `${clean}/`;
  return ROUTES.find((route) => route.path === normalized) ?? null;
}

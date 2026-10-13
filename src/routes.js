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
 */
export const LANGS = ['id', 'en'];
export const DEFAULT_LANG = 'id';

export const PAGES = {
  home: {
    paths: { id: '/', en: '/en/' },
    lastmod: '2026-10-14',
    priority: { id: '1.0', en: '0.9' },
  },
  morvyn: {
    paths: { id: '/morvyn/', en: '/en/morvyn/' },
    lastmod: '2026-10-14',
    priority: { id: '0.8', en: '0.7' },
  },
  about: {
    paths: { id: '/tentang/', en: '/en/about/' },
    lastmod: '2026-10-14',
    priority: { id: '0.7', en: '0.6' },
  },
};

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

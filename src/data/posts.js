/*
 * Daftar tulisan di halaman Kabar, dari yang terbaru.
 *
 * Catatan rilis Morvyn tidak ditulis satu per satu di sini. Setiap entri di
 * src/data/releases.json otomatis menjadi satu tulisan, dan berkas itu
 * ditambahi setiap hari oleh scripts/sync-play-release.mjs dari Google Play.
 * Judul dan isinya dibuat dari teks "Yang baru" di Play (lihat `postContent`
 * di src/i18n/meta.js), kecuali ada tulisan tangan di `news.posts[slug]` pada
 * kamus bahasa, yang selalu didahulukan.
 *
 * `datePublished` adalah tanggal tulisan terbit di situs ini (untuk rilis:
 * hari versi itu terdeteksi di Play), bukan tanggal rilis aplikasinya.
 */
import RELEASES from './releases.json';

/** Slug tulisan untuk satu versi, mis. 1.7.0 menjadi `morvyn-1-7-0`. */
export function releaseSlug(version) {
  return `morvyn-${version.replaceAll('.', '-')}`;
}

// Tanggal ubah terakhir untuk tulisan yang disunting sesudah terbit.
const LASTMOD = {
  'morvyn-1-3-1': '2026-11-17',
};

const RELEASE_POSTS = RELEASES.releases.map((release) => {
  const slug = releaseSlug(release.version);
  return {
    slug,
    release,
    datePublished: release.addedIso,
    lastmod: LASTMOD[slug] ?? release.addedIso,
  };
});

// Tulisan yang bukan catatan rilis: entri { slug, datePublished, lastmod }
// di sini, isinya di `news.posts[slug]` pada kedua kamus.
const OTHER_POSTS = [];

export const POSTS = [...RELEASE_POSTS, ...OTHER_POSTS].sort(
  (a, b) =>
    b.datePublished.localeCompare(a.datePublished) ||
    (b.release?.versionCode ?? 0) - (a.release?.versionCode ?? 0),
);

// Jumlah tulisan per halaman daftar Kabar. Halaman pertama ada di /kabar/,
// selebihnya di /kabar/halaman/2/ dan seterusnya (lihat src/routes.js).
export const NEWS_PAGE_SIZE = 10;

export const NEWS_PAGE_COUNT = Math.max(1, Math.ceil(POSTS.length / NEWS_PAGE_SIZE));

/** Tulisan di halaman daftar Kabar ke-`n` (mulai dari 1). */
export function postsOnPage(n) {
  return POSTS.slice((n - 1) * NEWS_PAGE_SIZE, n * NEWS_PAGE_SIZE);
}

/** Rilis Morvyn terbaru menurut versionCode. */
export const LATEST_RELEASE = RELEASES.releases.reduce((a, b) =>
  b.versionCode > a.versionCode ? b : a,
);

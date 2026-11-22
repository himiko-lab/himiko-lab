// Tautan luar dikumpulkan di satu tempat agar tidak terduplikasi
// antara kamus bahasa Indonesia dan Inggris.
//
// Alamat akun ditulis seragam dalam bentuk `https://www.` bila layanannya
// memakainya, sebab daftar ini juga menjadi `sameAs` di data terstruktur.
import { LATEST_RELEASE } from './posts';

export const SOCIAL = {
  instagram: {
    href: 'https://www.instagram.com/himiko.lab',
    handle: '@himiko.lab',
  },
  tiktok: {
    href: 'https://www.tiktok.com/@himiko.lab',
    handle: '@himiko.lab',
  },
  threads: {
    href: 'https://www.threads.com/@himiko.lab',
    handle: '@himiko.lab',
  },
  pinterest: {
    href: 'https://id.pinterest.com/labhimiko/',
    handle: 'labhimiko',
  },
  youtube: {
    href: 'https://www.youtube.com/@HimikoLab',
    handle: '@HimikoLab',
  },
  facebook: {
    // Halaman belum punya nama pengguna, jadi tautannya memakai id profil.
    href: 'https://www.facebook.com/profile.php?id=61593282388390',
    handle: 'Himiko Lab',
  },
  x: {
    href: 'https://x.com/HimikoLab',
    handle: '@HimikoLab',
  },
  email: {
    href: 'mailto:hi@himikolab.my.id',
    handle: 'hi@himikolab.my.id',
  },
};

export const CONTACT_EMAIL = 'hi@himikolab.my.id';

// Slogan resmi Himiko Lab, sama untuk semua bahasa.
export const SLOGAN = 'Explore Beyond. Build Within.';

export const SITE_URL = 'https://himikolab.my.id';

export const MORVYN_URL = 'https://morvyn.himikolab.my.id';

// Halaman resmi Morvyn per bahasa. Kebijakan privasi punya alamat berbeda
// untuk tiap bahasa, jadi keduanya ditulis lengkap.
export const MORVYN_SITE = {
  id: `${MORVYN_URL}/`,
  en: `${MORVYN_URL}/en/`,
};

export const MORVYN_PRIVACY = {
  id: `${MORVYN_URL}/privasi/`,
  en: `${MORVYN_URL}/en/privacy/`,
};

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.himikolab.morvyn';

// Halaman pengembang Himiko Lab di Google Play, ikut ke `sameAs` di data
// terstruktur. Alamat dari pemilik, 2026-11-17.
export const PLAY_DEVELOPER_URL = 'https://play.google.com/store/apps/dev?id=5875924293723204317';

// Versi Morvyn terkini, dipakai data terstruktur. Ikut otomatis dari rilis
// terbaru di src/data/releases.json, yang disinkronkan dari Google Play.
export const MORVYN_VERSION = LATEST_RELEASE.version;

/*
 * Satu-satunya sakelar status rilis Morvyn di situs ini.
 *
 * Selama `false`, situs menampilkan keterangan prarilis dan tidak menautkan
 * ke Google Play, sebab listing di atas masih membalas 404 (dicek 2026-10-14).
 * Ubah ke `true` HANYA setelah PLAY_STORE_URL bisa dibuka publik. Tombol unduh,
 * teks halaman, dan data terstruktur ikut berubah dari nilai ini.
 */
export const PLAY_STORE_LIVE = true;

# Himiko Lab 🚀

Studio aplikasi dan perangkat digital harian yang minimalis dan modern.

[![Live Demo](https://img.shields.io/badge/Live_Demo-himikolab.my.id-blue?style=for-the-badge)](https://himikolab.my.id/)

## 📝 Tentang
Repositori ini berisi *source code* resmi untuk situs web **Himiko Lab**. Kami percaya bahwa teknologi seharusnya memberikan ketenangan, bukan kerumitan. Kami berfokus pada perancangan aplikasi harian dengan desain intuitif, termasuk aplikasi kami: **Morvyn**, aplikasi keseharian serba-guna.

Situs resmi Morvyn berada di proyek terpisah (`morvyn.himikolab.my.id`). Repositori ini hanya memuat ringkasannya.

## 🗺️ Halaman

| Halaman | Indonesia | Inggris |
| --- | --- | --- |
| Beranda | `/` | `/en/` |
| Ringkasan Morvyn | `/morvyn/` | `/en/morvyn/` |
| Tentang | `/tentang/` | `/en/about/` |
| Kabar | `/kabar/` | `/en/news/` |
| Kabar, halaman berikutnya | `/kabar/halaman/<n>/` | `/en/news/page/<n>/` |
| Tulisan Kabar | `/kabar/<slug>/` | `/en/news/<slug>/` |
| Kontak | `/kontak/` | `/en/contact/` |
| Tidak ditemukan | `/404.html` | (satu berkas, dua bahasa) |

Setiap alamat adalah berkas HTML tersendiri yang sudah berisi teks, sehingga dapat dibuka langsung, dimuat ulang, dan diindeks mesin pencari tanpa menunggu JavaScript.

## 🛠️ Teknologi yang Digunakan
* **[React](https://react.dev/)** - *Library* antarmuka pengguna (UI).
* **[Vite](https://vitejs.dev/)** - *Build tool* yang sangat cepat.
* **[Tailwind CSS](https://tailwindcss.com/)** - *Framework styling* utilitas.
* **[Phosphor Icons](https://phosphoricons.com/)** - Set ikon.

Deploy berjalan otomatis lewat GitHub Actions ke GitHub Pages setiap ada *push* ke `main`.

## 💻 Cara Menjalankan di Komputer Lokal

1. **Clone repositori ini**
   ```bash
   git clone https://github.com/himiko-lab/himiko-lab.git
   ```
2. **Pasang dependensi**
   ```bash
   npm install
   ```
3. **Jalankan dev server**
   ```bash
   npm run dev
   ```
4. **Build dan pratinjau hasil produksi**
   ```bash
   npm run build
   ```
   ```bash
   npm run preview
   ```

Judul, deskripsi, canonical, dan data terstruktur baru ditulis saat build. Periksa hal-hal itu lewat `npm run preview`, bukan dev server.

## 🧭 Struktur yang Perlu Diketahui

* `src/routes.js` - daftar halaman. Menjadi sumber berkas HTML, canonical, hreflang, dan `sitemap.xml`.
* `src/seo.js` - isi `<head>` dan data terstruktur tiap halaman.
* `src/i18n/id.js` dan `src/i18n/en.js` - seluruh teks situs.
* `src/data/links.js` - tautan luar dan sakelar status rilis Morvyn.
* `src/data/releases.json` - riwayat rilis Morvyn dari Google Play, sumber tulisan Kabar dan versi Morvyn.
* `src/data/posts.js` - daftar tulisan Kabar (slug dan tanggal terbit), sebagian besar dibuat dari `releases.json`.
* `scripts/sync-play-release.mjs` - menambah rilis baru dari Google Play ke `releases.json`.
* `scripts/prerender.js` - menulis berkas HTML tiap halaman setelah Vite selesai.

### Ikon situs
`public/favicon.ico` (16, 32, 48 px), `public/icon-192.png`, dan `public/apple-touch-icon.png` (180 px, berlatar putih) dibuat dari `src/assets/images/himiko-logo.svg` lewat `node scripts/make-icons.mjs`, yang butuh `rsvg-convert` (`brew install librsvg`). Hasilnya di-commit, jadi skrip ini hanya perlu dijalankan lagi bila logonya berubah. `public/favicon.png` (512 px) sengaja tidak ikut dibuat ulang, sebab alamatnya dipakai logo Organization di data terstruktur.

### Menambah halaman
1. Tambahkan entri di `PAGES` pada `src/routes.js`.
2. Buat komponennya di `src/pages/` dan daftarkan di `src/App.jsx`.
3. Isi `meta` dan teksnya di kedua kamus bahasa.

### Kabar otomatis dari Google Play
Setiap entri di `src/data/releases.json` otomatis menjadi satu tulisan Kabar dengan slug `morvyn-<versi>` (misalnya `/kabar/morvyn-1-7-0/`). Versi Morvyn di data terstruktur (`MORVYN_VERSION`) juga diambil dari entri terbaru. Teks tiap versi disimpan persis seperti "Yang baru" di Google Play, per bahasa.

Workflow **Sinkron rilis Google Play** (`.github/workflows/sync-play-release.yml`) memeriksa jalur produksi Play setiap hari pukul 08.30 WIB lewat `scripts/sync-play-release.mjs`. Kalau ada versi baru yang tayang (sudah penuh atau sedang peluncuran bertahap), workflow itu menambah entrinya, meng-commit, mendeploy ulang situs, dan membuka issue pengingat untuk meninjau ringkasan Morvyn. Skripnya hanya **membaca** Play: edit yang dibukanya dihapus lagi tanpa pernah di-commit.

Play API hanya memberi rilis yang sedang ada di jalur produksi, bukan riwayatnya. Kalau dua versi terbit di antara dua jadwal, yang lebih lama terlewat dan perlu ditambahkan dengan tangan ke `releases.json`.

Dua kebiasaan yang membuatnya jalan, sama dengan di situs Morvyn:

- **Nama rilis di Play Console memuat nomor versi**, seperti bentuk bawaannya, `40 (1.7.0)`.
- **"Yang baru" ditulis dalam bahasa Indonesia (`id`) dan Inggris (`en-US`).** Kalau salah satu kosong, workflow berhenti dengan pesan yang jelas.

Judul, ringkasan, dan pengantar tulisan otomatis dibuat dari templat `news.auto` di kedua kamus. Baris pertama teks Play yang berupa kalimat (bukan butir) menjadi kalimat utamanya, dan butir berbentuk `Agenda: ...` mendapat label bagian. Untuk mengganti sebagian isinya, misalnya judul yang lebih menarik, tulis kunci yang ingin diganti (`title`, `summary`, dan seterusnya) di `news.posts['morvyn-<versi>']` pada kedua kamus. Tulisan tangan selalu didahulukan.

Untuk mencoba skrip tanpa kunci, siapkan berkas JSON berbentuk balasan `tracks.get` dari Play API, lalu:
```bash
node scripts/sync-play-release.mjs --from-file contoh-track.json --dry-run
```

#### Menyiapkannya (sekali saja)
Google Play Android Developer API dan akun layanannya sudah disiapkan untuk situs Morvyn, dan kunci yang sama bisa dipakai di sini.

1. **GitHub, repositori ini > Settings > Secrets and variables > Actions > New repository secret**. Nama: `PLAY_SERVICE_ACCOUNT_JSON`. Isi: seluruh isi berkas JSON kunci akun layanan.
   Alternatifnya, simpan sekali sebagai **organization secret** di organisasi `himiko-lab` dan bagikan ke repositori ini dan `morvyn-web`, supaya kuncinya hanya ada di satu tempat.
2. **Actions > Sinkron rilis Google Play > Run workflow**. Hasil yang diharapkan: "sudah ada di releases.json", atau versi baru ditambahkan.

Kalau gagal dengan galat 403, lognya menyebut penyebabnya. Paling sering: izin akun layanan di Play Console (Pengguna dan izin, akses ke Morvyn) belum berlaku.

GitHub menonaktifkan jadwal workflow di repositori publik yang 60 hari tidak ada aktivitas, dan mengirim email sebelumnya. Kalau itu terjadi, aktifkan lagi dari tab Actions.

### Halaman daftar Kabar
Daftar Kabar menampilkan `NEWS_PAGE_SIZE` tulisan per halaman (sekarang 10, diatur di `src/data/posts.js`). Halaman pertama ada di `/kabar/`, dan halaman kedua dan seterusnya (`/kabar/halaman/2/`, ...) dibuat otomatis dari jumlah tulisan, lengkap dengan sitemap dan hreflang. Navigasi halaman baru muncul setelah tulisannya lebih dari satu halaman.

### Menambah tulisan Kabar lain
Untuk tulisan yang bukan catatan rilis:
1. Tambahkan entri `{ slug, datePublished, lastmod }` di `OTHER_POSTS` pada `src/data/posts.js`.
2. Isi judul dan isinya di `news.posts` pada kedua kamus bahasa, dengan slug yang sama sebagai kunci.

Alamat, sitemap, jejak halaman, dan data terstruktur `BlogPosting` ikut dari dua langkah itu.

Cantumkan sebuah bahasa di `paths` hanya bila terjemahannya sudah ada, sebab hreflang dan sitemap mengikuti daftar itu.

### Saat Morvyn terbit di Google Play
Ubah `PLAY_STORE_LIVE` menjadi `true` di `src/data/links.js` setelah listing bisa dibuka publik. Tombol unduh, teks ketersediaan, dan data terstruktur ikut berubah dari satu nilai itu.

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
* `scripts/prerender.js` - menulis berkas HTML tiap halaman setelah Vite selesai.

### Menambah halaman
1. Tambahkan entri di `PAGES` pada `src/routes.js`.
2. Buat komponennya di `src/pages/` dan daftarkan di `src/App.jsx`.
3. Isi `meta` dan teksnya di kedua kamus bahasa.

Cantumkan sebuah bahasa di `paths` hanya bila terjemahannya sudah ada, sebab hreflang dan sitemap mengikuti daftar itu.

### Saat Morvyn terbit di Google Play
Ubah `PLAY_STORE_LIVE` menjadi `true` di `src/data/links.js` setelah listing bisa dibuka publik. Tombol unduh, teks ketersediaan, dan data terstruktur ikut berubah dari satu nilai itu.

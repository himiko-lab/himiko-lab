// Membuat ikon situs dari logo SVG Himiko Lab.
//
//   node scripts/make-icons.mjs
//
// Hasilnya ditulis ke public/ dan ikut di-commit, sebab skrip ini butuh
// rsvg-convert (Homebrew: `brew install librsvg`) yang tidak ada di build
// GitHub Actions. Jalankan lagi hanya bila logonya berubah.
//
// Yang dibuat:
// - favicon.ico: 16, 32, dan 48 px dalam satu berkas, di akar situs. Layanan
//   Google dan banyak peramban memintanya langsung tanpa membaca <link>.
// - icon-192.png: 192 px, kelipatan 48 px sesuai syarat favicon Google Search.
// - apple-touch-icon.png: 180 px berlatar putih, sebab iOS mengisi bagian
//   transparan dengan hitam.
//
// favicon.png (512 px) TIDAK dibuat ulang di sini: alamatnya dipakai logo
// Organization di data terstruktur dan harus tetap.
//
// Hanya memakai modul bawaan Node.

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const logoFile = join(root, 'src/assets/images/himiko-logo.svg');
const out = (name) => join(root, 'public', name);

const logo = readFileSync(logoFile, 'utf8');
const viewBox = logo.match(/viewBox="([^"]+)"/)[1];
// Isi logo tanpa pembungkus <svg>, supaya bisa ditaruh di kanvas lain.
const inner = logo.slice(logo.indexOf('>', logo.indexOf('<svg')) + 1, logo.lastIndexOf('</svg>'));

/** SVG berukuran `size` dengan logo selebar `logoSize` di tengahnya. */
function canvas(size, logoSize, background) {
  const offset = (size - logoSize) / 2;
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`,
    background ? `<rect width="${size}" height="${size}" fill="${background}"/>` : '',
    `<svg x="${offset}" y="${offset}" width="${logoSize}" height="${logoSize}" viewBox="${viewBox}"`,
    ' style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">',
    inner,
    '</svg></svg>',
  ].join('');
}

/** PNG dari sebuah SVG, lewat rsvg-convert. */
function png(svg) {
  return execFileSync('rsvg-convert', ['--format=png'], { input: svg, maxBuffer: 1 << 24 });
}

/**
 * Berkas ICO yang tiap ukurannya berisi PNG utuh. Bentuk ini didukung semua
 * peramban modern dan Windows Vista ke atas.
 */
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // dicadangkan
  header.writeUInt16LE(1, 2); // 1 = ikon
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + 16 * images.length;
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // lebar (0 berarti 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // tinggi
    entry.writeUInt8(0, 2); // jumlah warna palet
    entry.writeUInt8(0, 3); // dicadangkan
    entry.writeUInt16LE(1, 4); // bidang warna
    entry.writeUInt16LE(32, 6); // bit per piksel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });

  return Buffer.concat([header, ...entries, ...images.map((image) => image.data)]);
}

const icoSizes = [16, 32, 48];
writeFileSync(
  out('favicon.ico'),
  ico(icoSizes.map((size) => ({ size, data: png(canvas(size, size)) }))),
);

writeFileSync(out('icon-192.png'), png(canvas(192, 192)));

// Logo diperkecil sedikit dari ukuran penuh supaya tidak terpotong sudut
// membulat yang diterapkan iOS.
writeFileSync(out('apple-touch-icon.png'), png(canvas(180, 160, '#ffffff')));

console.log('Ikon ditulis ke public/: favicon.ico (16, 32, 48), icon-192.png, apple-touch-icon.png');

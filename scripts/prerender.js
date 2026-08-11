import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

/**
 * Menyuntikkan hasil render React ke dalam berkas HTML hasil build.
 *
 * Tanpa langkah ini, HTML yang diterima mesin pencari hanya berisi <div id="root">
 * yang kosong, dan seluruh teks baru muncul setelah JavaScript dijalankan.
 * Skrip ini murni Node, tanpa browser, sehingga aman dijalankan di GitHub Actions.
 */

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SSR_ENTRY = resolve(root, 'dist-ssr/entry-server.js');

const PAGES = [
  { lang: 'id', html: resolve(root, 'dist/index.html') },
  { lang: 'en', html: resolve(root, 'dist/en/index.html') },
];

const PLACEHOLDER = '<div id="root"></div>';

if (!existsSync(SSR_ENTRY)) {
  console.error(`[prerender] Bundel SSR tidak ditemukan di ${SSR_ENTRY}`);
  process.exit(1);
}

const { render } = await import(pathToFileURL(SSR_ENTRY).href);

for (const page of PAGES) {
  const template = readFileSync(page.html, 'utf8');

  if (!template.includes(PLACEHOLDER)) {
    console.error(`[prerender] Penanda ${PLACEHOLDER} tidak ada di ${page.html}`);
    process.exit(1);
  }

  const markup = render(page.lang);
  writeFileSync(page.html, template.replace(PLACEHOLDER, `<div id="root">${markup}</div>`));

  console.log(`[prerender] ${page.lang}: ${markup.length.toLocaleString('id-ID')} karakter HTML disuntikkan`);
}

// Bundel SSR hanya alat bantu build, tidak boleh ikut ter-deploy.
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });

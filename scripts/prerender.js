import { readFileSync, writeFileSync, rmSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

/**
 * Menulis satu berkas HTML untuk tiap halaman di src/routes.js.
 *
 * Vite hanya membangun satu dist/index.html. Berkas itu dipakai sebagai cetakan:
 * untuk tiap rute, atribut <html>, isi <head>, dan hasil render React diganti,
 * lalu disimpan di alamatnya sendiri (misalnya dist/tentang/index.html).
 * Tanpa langkah ini, HTML yang diterima mesin pencari hanya berisi
 * <div id="root"> yang kosong, dan halaman selain beranda tidak akan ada.
 *
 * Skrip ini murni Node, tanpa browser, sehingga aman dijalankan di GitHub Actions.
 */

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = resolve(root, 'dist');
const SSR_ENTRY = resolve(root, 'dist-ssr/entry-server.js');

const HTML_TAG = /<html lang="[^"]*"/;
const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
const ROOT_PLACEHOLDER = '<div id="root"></div>';

// Font yang dipakai teks di layar pertama. Dimuat lebih awal supaya judul
// tidak sempat tampil dengan font cadangan lalu bergeser saat font tiba.
const PRELOAD_FONTS = [/^poppins-latin-700-normal-.+\.woff2$/, /^inter-latin-wght-normal-.+\.woff2$/];

function fail(message) {
  console.error(`[prerender] ${message}`);
  process.exit(1);
}

if (!existsSync(SSR_ENTRY)) fail(`Bundel SSR tidak ditemukan di ${SSR_ENTRY}`);

const template = readFileSync(resolve(DIST, 'index.html'), 'utf8');

if (!HTML_TAG.test(template)) fail('Tag <html lang="..."> tidak ada di dist/index.html');
if (!SEO_BLOCK.test(template)) fail('Penanda <!--seo:start--> dan <!--seo:end--> tidak ada di dist/index.html');
if (!template.includes(ROOT_PLACEHOLDER)) fail(`Penanda ${ROOT_PLACEHOLDER} tidak ada di dist/index.html`);

const fontPreloads = PRELOAD_FONTS.map((pattern) => {
  const file = readdirSync(resolve(DIST, 'assets')).find((name) => pattern.test(name));
  if (!file) fail(`Berkas font untuk ${pattern} tidak ada di dist/assets`);
  return `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`;
}).join('\n    ');

const { ROUTES, NOT_FOUND, render, renderHead, renderSitemap } = await import(
  pathToFileURL(SSR_ENTRY).href
);

/** `/` menjadi index.html, `/tentang/` menjadi tentang/index.html, sisanya apa adanya. */
function outputFile(path) {
  return resolve(DIST, `.${path.endsWith('/') ? `${path}index.html` : path}`);
}

for (const route of [...ROUTES, NOT_FOUND]) {
  const markup = render(route);

  // Pengganti berupa fungsi agar tanda "$" di dalam isi tidak ditafsirkan replace().
  const html = template
    .replace(HTML_TAG, () => `<html lang="${route.lang}" data-page="${route.page}"`)
    .replace(SEO_BLOCK, () => `${renderHead(route)}\n\n    ${fontPreloads}`)
    .replace(ROOT_PLACEHOLDER, () => `<div id="root">${markup}</div>`);

  const file = outputFile(route.path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);

  console.log(
    `[prerender] ${route.path} (${route.lang}): ${markup.length.toLocaleString('id-ID')} karakter HTML`,
  );
}

writeFileSync(resolve(DIST, 'sitemap.xml'), renderSitemap());
console.log(`[prerender] sitemap.xml: ${ROUTES.length} alamat`);

// Bundel SSR hanya alat bantu build, tidak boleh ikut ter-deploy.
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });

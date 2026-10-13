import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { LanguageProvider } from './i18n';

export { ROUTES, NOT_FOUND } from './routes';
export { renderHead, renderSitemap } from './seo';

/**
 * Dipakai hanya saat build oleh scripts/prerender.js.
 * Hasilnya disuntikkan ke dalam #root pada berkas HTML, supaya mesin pencari
 * menerima halaman yang sudah berisi teks tanpa harus menjalankan JavaScript.
 */
export function render(route) {
  return renderToString(
    <LanguageProvider route={route}>
      <App />
    </LanguageProvider>,
  );
}

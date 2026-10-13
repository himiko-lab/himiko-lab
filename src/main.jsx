import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import { DICTIONARIES, LanguageProvider, detectRoute } from './i18n';
import './index.css';

const container = document.getElementById('root');
const route = detectRoute();

const tree = (
  <React.StrictMode>
    <LanguageProvider route={route}>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

// Hasil build sudah berisi HTML statis, jadi cukup dihidupkan (hydrate).
// Saat dev server, #root masih kosong sehingga dirender dari nol, dan bahasa
// serta judul yang biasanya ditulis saat build disetel di sini.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  document.documentElement.lang = route.lang;
  document.title = DICTIONARIES[route.lang].meta[route.page].title;
  createRoot(container).render(tree);
}

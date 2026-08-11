import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import { LanguageProvider } from './i18n';
import './index.css';

const container = document.getElementById('root');

const tree = (
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

// Hasil build sudah berisi HTML statis, jadi cukup dihidupkan (hydrate).
// Saat dev server, #root masih kosong sehingga dirender dari nol.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}

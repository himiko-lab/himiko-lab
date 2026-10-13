import React, { createContext, useContext, useMemo } from 'react';
import id from './id';
import en from './en';
import { DEFAULT_LANG, NOT_FOUND, findRoute, matchPath, pathFor } from '../routes';

export const DICTIONARIES = { id, en };

/**
 * Halaman dan bahasa ditentukan oleh berkas HTML yang dimuat, bukan oleh state.
 *
 * Hasil build menandai tiap berkas dengan atribut `lang` dan `data-page` pada
 * <html> (lihat scripts/prerender.js). Keduanya dibaca apa adanya supaya React
 * selalu menghidupkan markup yang sama dengan yang sudah dirender di server.
 * Saat dev server, penanda itu belum ada, jadi alamat browser yang dicocokkan.
 */
export function detectRoute() {
  if (typeof document === 'undefined') return NOT_FOUND;

  const html = document.documentElement;
  const page = html.dataset.page;

  if (page) {
    const lang = (html.lang || '').slice(0, 2).toLowerCase();
    return findRoute(page, lang) ?? NOT_FOUND;
  }

  return matchPath(window.location.pathname) ?? NOT_FOUND;
}

const LanguageContext = createContext(null);

function buildValue(route) {
  const lang = route.lang in DICTIONARIES ? route.lang : DEFAULT_LANG;
  const otherLang = lang === 'id' ? 'en' : 'id';

  return {
    lang,
    page: route.page,
    t: DICTIONARIES[lang],
    /** Alamat halaman lain dalam bahasa yang sedang dibaca. */
    to: (page, hash = '') => `${pathFor(page, lang) ?? pathFor(page, DEFAULT_LANG)}${hash}`,
    /** Halaman yang sama dalam bahasa lain; jatuh ke beranda bila belum ada. */
    otherLangPath: pathFor(route.page, otherLang) ?? pathFor('home', otherLang),
  };
}

export function LanguageProvider({ children, route }) {
  const value = useMemo(() => buildValue(route), [route.page, route.lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useT() {
  return useContext(LanguageContext);
}

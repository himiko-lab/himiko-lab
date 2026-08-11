import React, { createContext, useContext, useMemo } from 'react';
import id from './id';
import en from './en';

const DICTIONARIES = { id, en };
const DEFAULT_LANG = 'id';

/**
 * Bahasa ditentukan oleh halaman yang dimuat, bukan oleh state.
 * `/` menyajikan index.html (lang="id"), `/en` menyajikan en/index.html (lang="en"),
 * jadi cukup baca atribut lang sekali dari dokumen.
 */
export function detectLang() {
  if (typeof document === 'undefined') return DEFAULT_LANG;
  const tag = (document.documentElement.lang || '').slice(0, 2).toLowerCase();
  return tag in DICTIONARIES ? tag : DEFAULT_LANG;
}

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  t: DICTIONARIES[DEFAULT_LANG],
});

/**
 * `lang` hanya diisi saat pre-render di Node, ketika belum ada document.
 * Di browser bahasa dibaca sendiri dari atribut lang halaman.
 */
export function LanguageProvider({ children, lang: forcedLang }) {
  const value = useMemo(() => {
    const lang = forcedLang && forcedLang in DICTIONARIES ? forcedLang : detectLang();
    return { lang, t: DICTIONARIES[lang] };
  }, [forcedLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useT() {
  return useContext(LanguageContext);
}

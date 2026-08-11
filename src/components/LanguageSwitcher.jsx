import React from 'react';
import { Translate } from '@phosphor-icons/react';
import { useT } from '../i18n';

/**
 * Pengalih bahasa berupa tautan biasa, bukan state.
 * `/` adalah halaman Indonesia dan `/en` halaman Inggris, masing-masing HTML
 * tersendiri, sehingga keduanya dapat diindeks mesin pencari.
 */
export default function LanguageSwitcher({ className = '' }) {
  const { t } = useT();

  return (
    <a
      href={t.lang.otherHref}
      aria-label={t.lang.switchLabel}
      className={`inline-flex items-center gap-1.5 rounded-full border border-brand-500/15 bg-white/60 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-brand-500/30 hover:bg-white hover:text-brand-600 ${className}`}
    >
      <Translate size={16} weight="bold" aria-hidden="true" />
      <span className="text-brand-600">{t.lang.current}</span>
      <span className="text-slate-300" aria-hidden="true">
        /
      </span>
      <span>{t.lang.other}</span>
    </a>
  );
}

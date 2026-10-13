import React from 'react';
import { Translate } from '@phosphor-icons/react';
import { useT } from '../i18n';

/**
 * Pengalih bahasa berupa tautan biasa, bukan state.
 * Tiap halaman punya berkas HTML sendiri per bahasa, jadi tautannya menuju
 * halaman yang sama dalam bahasa lain dan keduanya dapat diindeks mesin pencari.
 *
 * `className` wajib memuat kelas display (misalnya `inline-flex`), supaya
 * pemanggil bisa menyembunyikannya di lebar layar tertentu.
 */
export default function LanguageSwitcher({ className = 'inline-flex' }) {
  const { t, otherLangPath } = useT();

  return (
    <a
      href={otherLangPath}
      aria-label={t.lang.switchLabel}
      className={`min-h-10 items-center gap-1.5 rounded-full border border-brand-500/15 bg-white/60 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-brand-500/30 hover:bg-white hover:text-brand-600 ${className}`}
    >
      <Translate size={16} weight="bold" aria-hidden="true" />
      <span className="text-brand-600">{t.lang.current}</span>
      <span className="text-slate-400" aria-hidden="true">
        /
      </span>
      <span>{t.lang.other}</span>
    </a>
  );
}

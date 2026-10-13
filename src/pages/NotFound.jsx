import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { BTN_PRIMARY, EYEBROW, TEXT_LINK } from '../components/styles';
import { pathFor } from '../routes';
import { useT } from '../i18n';

/**
 * Disajikan GitHub Pages untuk alamat yang tidak ada. Berkasnya hanya satu,
 * jadi isinya bahasa Indonesia dengan satu baris untuk pembaca Inggris.
 */
export default function NotFound() {
  const { t, lang, to } = useT();
  const otherLang = lang === 'id' ? 'en' : 'id';

  return (
    <section className="px-6 pb-8 pt-36 sm:pt-44">
      <div className="mx-auto max-w-xl text-center">
        <p className={EYEBROW}>{t.notFound.eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink text-balance sm:text-5xl">
          {t.notFound.title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{t.notFound.body}</p>

        <a href={to('home')} className={`${BTN_PRIMARY} mt-8`}>
          {t.notFound.cta}
          <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </a>

        <p lang={otherLang} className="mt-8 text-sm text-slate-600">
          {t.notFound.otherLang}{' '}
          <a href={pathFor('home', otherLang)} className={TEXT_LINK}>
            {t.notFound.otherLangCta}
          </a>
        </p>
      </div>
    </section>
  );
}

import React from 'react';
import { EYEBROW } from './styles';
import { useT } from '../i18n';

/** Pembuka halaman selain beranda: jejak halaman, judul utama, dan pengantar. */
export default function PageHeader({ eyebrow, title, lead, media, children }) {
  const { t, page, to } = useT();

  return (
    <section className="px-6 pb-12 pt-28 sm:pb-16 sm:pt-36 lg:pt-40">
      <div className="mx-auto max-w-3xl text-center">
        <nav aria-label={t.nav.breadcrumb}>
          <ol className="inline-flex items-center gap-2 text-sm text-slate-600">
            <li>
              <a
                href={to('home')}
                className="underline-offset-4 transition-colors hover:text-brand-600 hover:underline"
              >
                {t.nav.home}
              </a>
            </li>
            <li aria-hidden="true" className="text-slate-400">
              /
            </li>
            <li aria-current="page" className="font-medium text-ink">
              {t.nav[page]}
            </li>
          </ol>
        </nav>

        {media && <div className="mt-8 flex justify-center">{media}</div>}

        <p className={`${EYEBROW} mt-6`}>{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {lead}
        </p>

        {children && (
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

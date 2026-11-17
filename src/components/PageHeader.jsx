import React from 'react';
import { EYEBROW } from './styles';
import { PAGES } from '../routes';
import { pageLabel } from '../i18n/meta';
import { useT } from '../i18n';

const CRUMB_LINK = 'underline-offset-4 transition-colors hover:text-brand-600 hover:underline';

/**
 * Pembuka halaman selain beranda: jejak halaman, judul utama, dan pengantar.
 * `meta` adalah baris kecil di bawah judul, misalnya tanggal sebuah tulisan.
 */
export default function PageHeader({ eyebrow, title, lead, media, meta, children }) {
  const { t, page, to } = useT();
  const isPost = Boolean(PAGES[page]?.post);

  return (
    <section className="px-6 pb-12 pt-28 sm:pb-16 sm:pt-36 lg:pt-40">
      <div className="mx-auto max-w-3xl text-center">
        <nav aria-label={t.nav.breadcrumb}>
          <ol className="inline-flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600">
            <li>
              <a href={to('home')} className={CRUMB_LINK}>
                {t.nav.home}
              </a>
            </li>
            <li aria-hidden="true" className="text-slate-400">
              /
            </li>
            {/* Tulisan Kabar berada satu tingkat di bawah halaman Kabar. Judulnya
                panjang dan sudah menjadi H1, jadi jejaknya berhenti di Kabar. */}
            {isPost ? (
              <li>
                <a href={to('news')} className={CRUMB_LINK}>
                  {t.nav.news}
                </a>
              </li>
            ) : (
              <li aria-current="page" className="font-medium text-ink">
                {pageLabel(t, page)}
              </li>
            )}
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

        {meta && <p className="mt-4 text-sm font-medium text-slate-600">{meta}</p>}

        {children && (
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

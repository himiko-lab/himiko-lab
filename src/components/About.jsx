import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import LogoMark from './LogoMark';
import { BTN_BASE } from './styles';
import { useT } from '../i18n';

/**
 * Ringkasan Himiko Lab di beranda, termasuk arti logo dalam satu kalimat.
 * Cerita lengkap dan penguraian logonya ada di halaman Tentang.
 */
export default function About() {
  const { t, to } = useT();

  return (
    <section id="about" className="scroll-mt-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass-panel-dark rounded-[2rem] p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-500/25 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-violet-500/20 blur-[90px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                {t.about.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
                {t.about.title}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                {t.about.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <a
                href={to('about')}
                className={`${BTN_BASE} mt-8 bg-white text-brand-800 hover:bg-brand-50`}
              >
                {t.about.cta}
                <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </a>
            </div>

            <figure className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <LogoMark
                highlight="both"
                title={t.common.himikoLogoTitle}
                className="h-20 w-auto text-white"
              />
              <figcaption className="mt-5 text-sm leading-relaxed text-slate-300">
                {t.about.logoNote}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

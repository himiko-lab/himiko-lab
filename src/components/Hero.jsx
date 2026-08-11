import React from 'react';
import { ArrowRight, Sparkle } from '@phosphor-icons/react';
import GlassOrnament from './GlassOrnament';
import { useT } from '../i18n';

export default function Hero() {
  const { t } = useT();

  return (
    <section id="home" className="relative px-6 pb-8 pt-28 sm:pt-32 lg:pb-16 lg:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 backdrop-blur">
            <Sparkle size={14} weight="fill" aria-hidden="true" />
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <a
              href="#morvyn"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-colors hover:bg-brand-600 sm:text-base"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={17} weight="bold" aria-hidden="true" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-500/15 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition-colors hover:border-brand-500/30 hover:bg-white sm:text-base"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hidden sm:block">
          <GlassOrnament />
        </div>
      </div>
    </section>
  );
}

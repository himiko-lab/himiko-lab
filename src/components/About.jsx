import React from 'react';
import { useT } from '../i18n';

export default function About() {
  const { t } = useT();

  return (
    <section id="about" className="scroll-mt-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass-panel-dark rounded-[2rem] p-8 sm:p-12 lg:p-16">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-500/25 blur-[90px]" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-violet-500/20 blur-[90px]" />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              {t.about.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              {t.about.title}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {t.about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import LogoMark from './LogoMark';
import { useT } from '../i18n';

const HIGHLIGHTS = ['left', 'slash', 'right'];

export default function LogoMeaning() {
  const { t } = useT();

  return (
    <section id="logo" className="scroll-mt-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            {t.logoMeaning.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t.logoMeaning.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{t.logoMeaning.intro}</p>
        </div>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Logo utuh */}
          <div className="glass-panel-dark rounded-[2rem] p-10 sm:p-14">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/30 blur-[70px]" />
            <div className="relative flex items-center justify-center">
              <LogoMark
                highlight="both"
                title="Logo Himiko Lab"
                className="h-40 w-auto text-white sm:h-48"
              />
            </div>
          </div>

          {/* Penguraian */}
          <div className="grid gap-4 sm:grid-cols-3">
            {t.logoMeaning.steps.map((step, i) => (
              <div key={step.title} className="glass-card lift flex flex-col rounded-3xl p-5">
                <div className="flex items-center justify-between">
                  <LogoMark highlight={HIGHLIGHTS[i]} className="h-12 w-auto text-brand-500" />
                  <span
                    aria-hidden="true"
                    className="font-display text-3xl font-bold leading-none text-brand-200"
                  >
                    {step.symbol}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="font-display text-lg font-medium leading-relaxed text-ink sm:text-xl">
            {t.logoMeaning.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}

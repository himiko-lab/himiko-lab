import React from 'react';
import { Compass, RocketLaunch, PenNib } from '@phosphor-icons/react';
import SectionHeading from './SectionHeading';
import { useT } from '../i18n';

const STEP_ICONS = [Compass, RocketLaunch, PenNib];

export default function Technology() {
  const { t } = useT();

  return (
    <section id="process" className="scroll-mt-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} subtitle={t.tech.subtitle} />

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {t.tech.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <li key={step.title} className="glass-card lift relative rounded-3xl p-7">
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-5 font-display text-5xl font-bold leading-none text-brand-500/10"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon size={22} weight="duotone" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

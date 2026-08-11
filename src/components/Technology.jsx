import React from 'react';
import { Chip } from '@heroui/react/chip';
import { Compass, RocketLaunch, PenNib } from '@phosphor-icons/react';
import { useT } from '../i18n';

const STEP_ICONS = [Compass, RocketLaunch, PenNib];

// Teknologi yang benar-benar dipakai membangun situs ini.
const STACK = ['React', 'Vite', 'Tailwind CSS', 'HeroUI', 'Phosphor Icons'];

export default function Technology() {
  const { t } = useT();

  return (
    <section className="px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            {t.tech.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t.tech.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{t.tech.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {t.tech.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div key={step.title} className="glass-card lift relative rounded-3xl p-7">
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
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            {t.tech.stackLabel}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {STACK.map((item) => (
              <Chip key={item} variant="soft" color="accent" size="sm">
                {item}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

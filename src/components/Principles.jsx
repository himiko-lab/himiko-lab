import React from 'react';
import { ArrowRight, Feather, Lightning, ShieldCheck, PenNib } from '@phosphor-icons/react';
import SectionHeading from './SectionHeading';
import { TEXT_LINK } from './styles';
import { useT } from '../i18n';

const ICONS = [Feather, Lightning, ShieldCheck, PenNib];

export default function Principles() {
  const { t, to } = useT();

  return (
    <section id="principles" className="scroll-mt-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.principles.eyebrow} title={t.principles.title} />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.principles.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={item.title} className="glass-card lift flex flex-col rounded-3xl p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon size={22} weight="duotone" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>

                {/* Hanya prinsip soal data yang punya rincian untuk dirujuk. */}
                {item.linkLabel && (
                  <a href={to('morvyn', '#privasi')} className={`${TEXT_LINK} mt-auto pt-4 text-sm`}>
                    {item.linkLabel}
                    <ArrowRight size={14} weight="bold" aria-hidden="true" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

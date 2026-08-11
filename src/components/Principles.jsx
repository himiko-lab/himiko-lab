import React from 'react';
import { Feather, Lightning, ShieldCheck, PenNib } from '@phosphor-icons/react';
import { useT } from '../i18n';

const ICONS = [Feather, Lightning, ShieldCheck, PenNib];

export default function Principles() {
  const { t } = useT();

  return (
    <section className="px-6">
      <div className="mx-auto max-w-6xl">
        {/*
          Kartu ini sengaja mengalir langsung dari hero tanpa judul terlihat,
          mengikuti referensi desain. Judulnya tetap ada untuk pembaca layar
          dan mesin pencari agar urutan heading tidak melompat dari h1 ke h3.
        */}
        <h2 className="sr-only">{t.principles.title}</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.principles.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={item.title} className="glass-card lift rounded-3xl p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon size={22} weight="duotone" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

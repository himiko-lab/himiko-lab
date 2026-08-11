import React from 'react';
// Impor subpath, bukan barrel, agar hanya komponen ini yang ikut ke bundel.
import { Button } from '@heroui/react/button';
import {
  NotePencil,
  Wallet,
  ListChecks,
  Newspaper,
  CloudSun,
  Repeat,
  CalendarDots,
  ArrowUpRight,
  DownloadSimple,
} from '@phosphor-icons/react';
import morvynLogo from '../assets/images/morvyn-logo.svg';
import { MORVYN_URL } from '../data/links';
import { useT } from '../i18n';

const FEATURE_ICONS = [NotePencil, Wallet, ListChecks, Newspaper, CloudSun, Repeat, CalendarDots];

export default function MorvynShowcase() {
  const { t } = useT();

  return (
    <section id="morvyn" className="scroll-mt-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card rounded-[2rem] p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
            {/* Identitas produk */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                {t.morvyn.eyebrow}
              </span>

              <div className="mt-4 flex items-center gap-4">
                {/* Berkas logo sudah membawa latar putihnya sendiri, jadi wadahnya
                    cukup dibulatkan dan dipotong agar terbaca sebagai ikon aplikasi. */}
                <span className="flex h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border border-brand-500/10 bg-white shadow-lg shadow-brand-500/15">
                  <img src={morvynLogo} alt="Logo Morvyn" className="h-full w-full" />
                </span>
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    {t.morvyn.name}
                  </h2>
                  <p className="text-sm font-medium text-brand-600">{t.morvyn.tagline}</p>
                </div>
              </div>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {t.morvyn.description}
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={MORVYN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-colors hover:bg-brand-600"
                >
                  {t.morvyn.ctaWebsite}
                  <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                </a>

                <Button variant="secondary" isDisabled fullWidth>
                  <DownloadSimple size={16} weight="bold" aria-hidden="true" />
                  {t.morvyn.ctaDownload}
                </Button>
              </div>

              <p className="mt-3 text-xs text-slate-500">{t.morvyn.statusNote}</p>
            </div>

            {/* Fitur */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {t.morvyn.featuresLabel}
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {t.morvyn.features.map((feature, i) => {
                  const Icon = FEATURE_ICONS[i];
                  return (
                    <div
                      key={feature.title}
                      className="lift rounded-2xl border border-brand-500/10 bg-white/70 p-4"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon size={19} weight="duotone" aria-hidden="true" />
                      </span>
                      <h4 className="mt-3 font-display text-sm font-semibold text-ink">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{feature.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

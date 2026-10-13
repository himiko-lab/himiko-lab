import React from 'react';
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react';
import morvynLogo from '../assets/images/morvyn-logo.svg';
import ExternalLink from './ExternalLink';
import PlayStoreStatus from './PlayStoreStatus';
import { FEATURE_ICONS } from './morvynIcons';
import { BTN_PRIMARY, BTN_SECONDARY, EYEBROW } from './styles';
import { MORVYN_SITE, PLAY_STORE_LIVE } from '../data/links';
import { useT } from '../i18n';

/**
 * Pengenalan Morvyn di beranda. Sengaja ringkas: rincian tiap menu dan urusan
 * data ada di halaman /morvyn/, dan penjelasan lengkap di situs resmi Morvyn.
 */
export default function MorvynShowcase() {
  const { t, lang, to } = useT();

  return (
    <section id="morvyn" className="scroll-mt-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card rounded-[2rem] p-6 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
            {/* Identitas produk */}
            <div>
              <p className={EYEBROW}>{t.morvyn.eyebrow}</p>

              <div className="mt-4 flex items-center gap-4">
                {/* Berkas logo sudah membawa latar putihnya sendiri, jadi wadahnya
                    cukup dibulatkan dan dipotong agar terbaca sebagai ikon aplikasi. */}
                <span className="flex h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border border-brand-500/10 bg-white shadow-lg shadow-brand-500/15">
                  <img
                    src={morvynLogo}
                    alt={t.common.morvynLogoAlt}
                    width="64"
                    height="64"
                    className="h-full w-full"
                  />
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

              <ul className="mt-5 flex flex-wrap gap-2">
                {t.morvyn.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-brand-500/15 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3">
                {PLAY_STORE_LIVE && <PlayStoreStatus />}

                <a
                  href={to('morvyn')}
                  className={PLAY_STORE_LIVE ? BTN_SECONDARY : BTN_PRIMARY}
                >
                  {t.morvyn.ctaDetails}
                  <ArrowRight size={16} weight="bold" aria-hidden="true" />
                </a>

                <ExternalLink href={MORVYN_SITE[lang]} className={BTN_SECONDARY}>
                  {t.morvyn.ctaWebsite}
                  <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                </ExternalLink>

                {!PLAY_STORE_LIVE && <PlayStoreStatus />}
              </div>
            </div>

            {/* Fitur */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                {t.morvyn.featuresLabel}
              </h3>

              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {t.morvyn.features.map((feature, i) => {
                  const Icon = FEATURE_ICONS[i];
                  return (
                    <li
                      key={feature.title}
                      className="lift flex gap-3 rounded-2xl border border-brand-500/10 bg-white/70 p-4"
                    >
                      <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon size={19} weight="duotone" aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="font-display text-sm font-semibold text-ink">
                          {feature.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {feature.short}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

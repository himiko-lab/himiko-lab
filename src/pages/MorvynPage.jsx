import React from 'react';
import {
  ArrowUpRight,
  DeviceMobile,
  UserCircle,
  ChartBar,
  Bug,
  SquaresFour,
} from '@phosphor-icons/react';
import morvynLogo from '../assets/images/morvyn-logo.svg';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import ExternalLink from '../components/ExternalLink';
import PlayStoreStatus from '../components/PlayStoreStatus';
import { FEATURE_ICONS } from '../components/morvynIcons';
import { BTN_PRIMARY, BTN_SECONDARY, EYEBROW, TEXT_LINK } from '../components/styles';
import { MORVYN_PRIVACY, MORVYN_SITE, PLAY_STORE_LIVE } from '../data/links';
import { useT } from '../i18n';

// Urutannya mengikuti `morvynPage.privacy.items`:
// isi aplikasi, akun opsional, statistik penggunaan, laporan crash.
const PRIVACY_ICONS = [DeviceMobile, UserCircle, ChartBar, Bug];

/**
 * Ringkasan Morvyn di domain Himiko Lab: apa isinya, bagaimana datanya
 * ditangani, dan ke mana harus pergi untuk rinciannya. Bukan pengganti situs
 * resmi Morvyn, jadi setiap bagian berujung pada tautan ke sana.
 */
export default function MorvynPage() {
  const { t, lang } = useT();
  const m = t.morvynPage;

  const websiteLink = (
    <ExternalLink
      href={MORVYN_SITE[lang]}
      className={PLAY_STORE_LIVE ? BTN_SECONDARY : BTN_PRIMARY}
    >
      {t.morvyn.ctaWebsite}
      <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
    </ExternalLink>
  );

  return (
    <>
      <PageHeader
        eyebrow={m.eyebrow}
        title={m.title}
        lead={m.lead}
        media={
          <span className="flex h-20 w-20 overflow-hidden rounded-3xl border border-brand-500/10 bg-white shadow-lg shadow-brand-500/15">
            <img
              src={morvynLogo}
              alt={t.common.morvynLogoAlt}
              width="80"
              height="80"
              className="h-full w-full"
            />
          </span>
        }
      >
        {PLAY_STORE_LIVE && <PlayStoreStatus />}
        {websiteLink}
        {!PLAY_STORE_LIVE && <PlayStoreStatus />}
      </PageHeader>

      <div className="flex flex-col gap-16 sm:gap-24">
        {/* Sekilas */}
        <section className="px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="sr-only">{m.factsLabel}</h2>
            <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {m.facts.map((fact) => (
                <div key={fact.label} className="glass-card flex flex-col-reverse rounded-3xl p-5 sm:p-6">
                  <dt className="mt-2 text-sm leading-relaxed text-slate-600">{fact.label}</dt>
                  <dd className="font-display text-3xl font-bold tracking-tight text-brand-600 sm:text-4xl">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Delapan menu */}
        <section id="fitur" className="scroll-mt-28 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow={m.features.eyebrow}
              title={m.features.title}
              subtitle={m.features.subtitle}
            />

            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {t.morvyn.features.map((feature, i) => {
                const Icon = FEATURE_ICONS[i];
                return (
                  <li key={feature.title} className="glass-card lift flex gap-4 rounded-3xl p-6">
                    <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <Icon size={22} weight="duotone" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">{feature.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {feature.long}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Catatan yang terhubung */}
        <section className="px-6">
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

              <div className="relative mx-auto max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                  {m.connected.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
                  {m.connected.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                  {m.connected.body}
                </p>
                <p className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                  <SquaresFour
                    size={22}
                    weight="duotone"
                    aria-hidden="true"
                    className="mt-0.5 flex-shrink-0 text-brand-300"
                  />
                  {m.connected.widgets}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data dan privasi */}
        <section id="privasi" className="scroll-mt-28 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow={m.privacy.eyebrow}
              title={m.privacy.title}
              subtitle={m.privacy.subtitle}
            />

            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {m.privacy.items.map((item, i) => {
                const Icon = PRIVACY_ICONS[i];
                return (
                  <li key={item.title} className="glass-card rounded-3xl p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <Icon size={22} weight="duotone" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.body}
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className="mx-auto mt-8 max-w-2xl text-center">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{m.privacy.note}</p>
              <ExternalLink href={MORVYN_PRIVACY[lang]} className={`${TEXT_LINK} mt-4 text-sm sm:text-base`}>
                {t.morvyn.ctaPrivacy}
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
              </ExternalLink>
            </div>
          </div>
        </section>

        {/* Ketersediaan */}
        <section id="ketersediaan" className="scroll-mt-28 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="glass-card rounded-[2rem] p-6 text-center sm:p-12">
              <p className={EYEBROW}>{m.availability.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink text-balance sm:text-4xl">
                {m.availability.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                {PLAY_STORE_LIVE ? m.availability.live : m.availability.soon}
              </p>
              <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                {m.availability.websiteNote}
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                {PLAY_STORE_LIVE && <PlayStoreStatus />}
                {websiteLink}
                {!PLAY_STORE_LIVE && <PlayStoreStatus />}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

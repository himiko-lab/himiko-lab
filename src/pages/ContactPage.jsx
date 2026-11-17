import React from 'react';
import {
  ArrowUpRight,
  ChatCircleText,
  EnvelopeSimple,
  Handshake,
  WarningCircle,
} from '@phosphor-icons/react';
import morvynLogo from '../assets/images/morvyn-logo.svg';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import ChannelList from '../components/ChannelList';
import ExternalLink from '../components/ExternalLink';
import PlayStoreStatus from '../components/PlayStoreStatus';
import { BTN_PRIMARY, BTN_SECONDARY, EYEBROW } from '../components/styles';
import { MORVYN_SITE, PLAY_STORE_LIVE, SOCIAL } from '../data/links';
import { useT } from '../i18n';

// Urutannya mengikuti `contactPage.topics.items`:
// masukan, laporan masalah, kerja sama.
const TOPIC_ICONS = [ChatCircleText, WarningCircle, Handshake];

/**
 * Cara menghubungi Himiko Lab. Daftar akunnya sama dengan yang ada di footer
 * halaman lain, jadi di halaman ini footer tidak mengulanginya.
 */
export default function ContactPage() {
  const { t, lang } = useT();
  const c = t.contactPage;

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} lead={c.lead}>
        <a href={SOCIAL.email.href} className={BTN_PRIMARY}>
          <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
          {SOCIAL.email.handle}
        </a>
      </PageHeader>

      <div className="flex flex-col gap-16 sm:gap-24">
        {/* Keperluan */}
        <section className="px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow={c.topics.eyebrow}
              title={c.topics.title}
              subtitle={c.topics.subtitle}
            />

            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {c.topics.items.map((item, i) => {
                const Icon = TOPIC_ICONS[i];
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

            <div className="mt-8 text-center">
              <a href={SOCIAL.email.href} className={BTN_SECONDARY}>
                <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
                {c.topics.emailCta}
              </a>
            </div>
          </div>
        </section>

        {/* Email dan media sosial */}
        <section className="px-6">
          <div className="mx-auto max-w-6xl">
            <div className="glass-card rounded-[2rem] p-6 text-center sm:p-12">
              <p className={EYEBROW}>{c.channels.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink text-balance sm:text-4xl">
                {c.channels.title}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600">
                {c.channels.subtitle}
              </p>

              <ChannelList className="mt-8" />
            </div>
          </div>
        </section>

        {/* Morvyn di Google Play */}
        <section className="px-6">
          <div className="mx-auto max-w-6xl">
            <div className="glass-card rounded-[2rem] p-6 sm:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
                <div>
                  <p className={EYEBROW}>{c.morvyn.eyebrow}</p>

                  <div className="mt-4 flex items-center gap-4">
                    <span className="flex h-14 w-14 flex-shrink-0 overflow-hidden rounded-2xl border border-brand-500/10 bg-white shadow-lg shadow-brand-500/15">
                      <img
                        src={morvynLogo}
                        alt={t.common.morvynLogoAlt}
                        width="56"
                        height="56"
                        className="h-full w-full"
                      />
                    </span>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                      {c.morvyn.title}
                    </h2>
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                    {c.morvyn.body}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {PLAY_STORE_LIVE && <PlayStoreStatus />}
                  <ExternalLink href={MORVYN_SITE[lang]} className={BTN_SECONDARY}>
                    {t.morvyn.ctaWebsite}
                    <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

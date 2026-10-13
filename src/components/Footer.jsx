import React from 'react';
import {
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
  ThreadsLogo,
  FacebookLogo,
  XLogo,
  PinterestLogo,
  EnvelopeSimple,
  ArrowUpRight,
} from '@phosphor-icons/react';
import himikoLogo from '../assets/images/himiko-logo.svg';
import ExternalLink from './ExternalLink';
import { MORVYN_PRIVACY, MORVYN_SITE, SOCIAL } from '../data/links';
import { useT } from '../i18n';

const CHANNELS = [
  { key: 'instagram', label: 'Instagram', Icon: InstagramLogo, external: true },
  { key: 'tiktok', label: 'TikTok', Icon: TiktokLogo, external: true },
  { key: 'youtube', label: 'YouTube', Icon: YoutubeLogo, external: true },
  { key: 'threads', label: 'Threads', Icon: ThreadsLogo, external: true },
  { key: 'facebook', label: 'Facebook', Icon: FacebookLogo, external: true },
  { key: 'x', label: 'X', Icon: XLogo, external: true },
  { key: 'pinterest', label: 'Pinterest', Icon: PinterestLogo, external: true },
  { key: 'email', label: 'Email', Icon: EnvelopeSimple, external: false },
];

const CHANNEL_CLASS =
  'lift group flex items-center gap-3 rounded-2xl border border-brand-500/10 bg-white/70 p-4 text-left transition-colors hover:border-brand-500/25';

const FOOTER_LINK =
  'inline-flex items-center gap-1 py-1.5 text-sm text-slate-600 underline-offset-4 transition-colors hover:text-brand-600 hover:underline';

function ChannelBody({ label, handle, Icon }) {
  return (
    <>
      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
        <Icon size={20} weight="duotone" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium text-slate-600">{label}</span>
        <span className="block truncate text-sm font-semibold text-ink">{handle}</span>
      </span>
      <ArrowUpRight
        size={15}
        weight="bold"
        aria-hidden="true"
        className="ml-auto flex-shrink-0 text-slate-400 transition-colors group-hover:text-brand-500"
      />
    </>
  );
}

export default function Footer() {
  const { t, lang, to } = useT();

  return (
    <footer id="contact" className="scroll-mt-28 px-6 pb-10 pt-16 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card rounded-[2rem] p-6 text-center sm:p-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t.footer.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600">
            {t.footer.subtitle}
          </p>

          <h3 className="sr-only">{t.footer.socialLabel}</h3>
          {/*
            Delapan kartu selalu mengisi baris penuh, baik dua maupun empat
            kolom. Empat kolom baru dipakai di layar lebar (xl), sebab di bawah
            itu alamat email terpotong.
          */}
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {CHANNELS.map(({ key, label, Icon, external }) => {
              const channel = SOCIAL[key];
              const body = <ChannelBody label={label} handle={channel.handle} Icon={Icon} />;

              return (
                <li key={key}>
                  {external ? (
                    <ExternalLink href={channel.href} className={CHANNEL_CLASS}>
                      {body}
                    </ExternalLink>
                  ) : (
                    <a href={channel.href} className={CHANNEL_CLASS}>
                      {body}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 grid gap-8 px-2 sm:grid-cols-[1.4fr_2fr]">
          <div>
            <a href={to('home')} className="inline-flex items-center gap-2.5">
              <img src={himikoLogo} alt="" width="24" height="24" className="h-6 w-6" />
              <span className="font-display text-sm font-semibold text-ink">Himiko Lab</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              {t.footer.analyticsNote}
            </p>
          </div>

          <nav aria-label={t.footer.linksLabel} className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-sm font-semibold text-ink">{t.footer.groups.studio}</h3>
              <ul className="mt-2">
                <li>
                  <a href={to('home')} className={FOOTER_LINK}>
                    {t.nav.home}
                  </a>
                </li>
                <li>
                  <a href={to('about')} className={FOOTER_LINK}>
                    {t.nav.about}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-semibold text-ink">{t.footer.groups.product}</h3>
              <ul className="mt-2">
                <li>
                  <a href={to('morvyn')} className={FOOTER_LINK}>
                    {t.footer.morvynSummary}
                  </a>
                </li>
                <li>
                  <ExternalLink href={MORVYN_SITE[lang]} className={FOOTER_LINK}>
                    {t.morvyn.ctaWebsite}
                    <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href={MORVYN_PRIVACY[lang]} className={FOOTER_LINK}>
                    {t.footer.morvynPrivacy}
                    <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className="mt-8 border-t border-brand-500/10 px-2 pt-6 text-xs text-slate-600">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}

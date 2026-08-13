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
import { SOCIAL } from '../data/links';
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

export default function Footer() {
  const { t } = useT();

  return (
    <footer id="contact" className="scroll-mt-28 px-6 pb-10 pt-16 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card rounded-[2rem] p-8 text-center sm:p-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t.footer.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600">
            {t.footer.subtitle}
          </p>

          <h3 className="sr-only">{t.footer.socialLabel}</h3>
          {/*
            Delapan kartu mengisi dua baris penuh, jadi tidak ada lagi kolom
            kosong yang perlu ditambal. Kartu email tetap paling akhir karena
            alamatnya paling panjang dan sudah pas di satu kolom.
          */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CHANNELS.map(({ key, label, Icon, external }) => {
              const channel = SOCIAL[key];
              return (
                <a
                  key={key}
                  href={channel.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="lift group flex items-center gap-3 rounded-2xl border border-brand-500/10 bg-white/70 p-4 text-left transition-colors hover:border-brand-500/25"
                >
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Icon size={20} weight="duotone" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium text-slate-400">{label}</span>
                    <span className="block truncate text-sm font-semibold text-ink">
                      {channel.handle}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    weight="bold"
                    aria-hidden="true"
                    className="ml-auto flex-shrink-0 text-slate-300 transition-colors group-hover:text-brand-500"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <img src={himikoLogo} alt="" className="h-6 w-auto" />
            <span className="font-display text-sm font-semibold text-ink">Himiko Lab</span>
          </div>
          <p className="text-xs text-slate-500">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

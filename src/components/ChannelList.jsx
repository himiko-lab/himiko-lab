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
import ExternalLink from './ExternalLink';
import { SOCIAL } from '../data/links';

/*
 * Kartu email dan akun media sosial Himiko Lab. Dipakai footer di semua
 * halaman dan isi halaman Kontak, supaya daftarnya hanya ada di satu tempat.
 */
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

/*
 * Delapan kartu selalu mengisi baris penuh, baik dua maupun empat kolom.
 * Empat kolom baru dipakai di layar lebar (xl), sebab di bawah itu alamat
 * email terpotong.
 */
export default function ChannelList({ className = '' }) {
  return (
    <ul className={`grid gap-3 sm:grid-cols-2 xl:grid-cols-4 ${className}`}>
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
  );
}

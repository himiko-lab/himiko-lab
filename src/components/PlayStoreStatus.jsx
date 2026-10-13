import React from 'react';
import { GooglePlayLogo } from '@phosphor-icons/react';
import ExternalLink from './ExternalLink';
import { BTN_PRIMARY } from './styles';
import { PLAY_STORE_LIVE, PLAY_STORE_URL } from '../data/links';
import { useT } from '../i18n';

/**
 * Status rilis Morvyn di Google Play.
 *
 * Sebelum listing terbit ini hanya keterangan, bukan tombol: tombol nonaktif
 * tidak bisa difokus dan tidak menjelaskan apa-apa, sedangkan tautan ke listing
 * yang belum ada akan berakhir di halaman galat. Setelah PLAY_STORE_LIVE
 * dinyalakan, keterangan ini berubah menjadi tombol unduh.
 */
export default function PlayStoreStatus({ className = '' }) {
  const { t } = useT();

  if (PLAY_STORE_LIVE) {
    return (
      <ExternalLink href={PLAY_STORE_URL} className={`${BTN_PRIMARY} ${className}`}>
        <GooglePlayLogo size={18} weight="fill" aria-hidden="true" />
        {t.morvyn.status.live}
      </ExternalLink>
    );
  }

  return (
    <p
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-dashed border-brand-500/35 bg-brand-50/70 px-5 py-2.5 text-sm font-medium text-brand-700 ${className}`}
    >
      <GooglePlayLogo size={18} weight="fill" aria-hidden="true" />
      {t.morvyn.status.soon}
    </p>
  );
}

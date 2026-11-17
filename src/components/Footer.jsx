import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import himikoLogo from '../assets/images/himiko-logo.svg';
import ExternalLink from './ExternalLink';
import ChannelList from './ChannelList';
import { MORVYN_PRIVACY, MORVYN_SITE, SLOGAN } from '../data/links';
import { useT } from '../i18n';

const FOOTER_LINK =
  'inline-flex items-center gap-1 py-1.5 text-sm text-slate-600 underline-offset-4 transition-colors hover:text-brand-600 hover:underline';

export default function Footer() {
  const { t, lang, page, to } = useT();

  return (
    <footer id="contact" className="scroll-mt-28 px-6 pb-10 pt-16 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        {/* Halaman Kontak sudah memuat daftar yang sama di isinya. */}
        {page !== 'contact' && (
          <div className="glass-card rounded-[2rem] p-6 text-center sm:p-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t.footer.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600">
              {t.footer.subtitle}
            </p>

            <h3 className="sr-only">{t.footer.socialLabel}</h3>
            <ChannelList className="mt-8" />
          </div>
        )}

        <div className="mt-10 grid gap-8 px-2 sm:grid-cols-[1.4fr_2fr]">
          <div>
            <a href={to('home')} className="inline-flex items-center gap-2.5">
              <img
                src={himikoLogo}
                alt={t.common.himikoLogoAlt}
                width="24"
                height="24"
                className="h-6 w-6"
              />
              <span className="font-display text-sm font-semibold text-ink">Himiko Lab</span>
            </a>
            {/* Slogan merek sengaja tidak diterjemahkan, jadi bahasanya ditandai. */}
            <p lang="en" className="mt-3 font-display text-sm font-medium text-slate-600">
              {SLOGAN}
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
                <li>
                  <a href={to('news')} className={FOOTER_LINK}>
                    {t.nav.news}
                  </a>
                </li>
                <li>
                  <a href={to('contact')} className={FOOTER_LINK}>
                    {t.nav.contact}
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

        <div className="mt-8 flex flex-col gap-2 border-t border-brand-500/10 px-2 pt-6 text-xs text-slate-600 sm:flex-row sm:justify-between">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.analyticsNote}</p>
        </div>
      </div>
    </footer>
  );
}

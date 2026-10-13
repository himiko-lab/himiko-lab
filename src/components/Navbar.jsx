import React, { useEffect, useState } from 'react';
import { List, X, ArrowUpRight } from '@phosphor-icons/react';
import himikoLogo from '../assets/images/himiko-logo.svg';
import LanguageSwitcher from './LanguageSwitcher';
import ExternalLink from './ExternalLink';
import { MORVYN_SITE, PLAY_STORE_LIVE, PLAY_STORE_URL } from '../data/links';
import { useT } from '../i18n';

const MENU_ID = 'menu-navigasi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang, page, to } = useT();

  const links = [
    { key: 'home', href: to('home'), label: t.nav.home },
    { key: 'morvyn', href: to('morvyn'), label: t.nav.morvyn },
    { key: 'about', href: to('about'), label: t.nav.about },
    // Footer ada di setiap halaman, jadi kontak cukup berupa jangkar.
    { key: 'contact', href: '#contact', label: t.nav.contact },
  ];

  // Tindakan utama mengikuti status rilis: situs resmi dulu, unduh setelah terbit.
  const action = PLAY_STORE_LIVE
    ? { href: PLAY_STORE_URL, label: t.nav.download }
    : { href: MORVYN_SITE[lang], label: t.nav.morvynSite };

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header>
      <nav
        aria-label={t.nav.label}
        className={`fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2 border border-white/60 backdrop-blur-xl transition-[border-radius,background-color] duration-200 sm:top-6 ${
          // Menu terbuka dibuat hampir solid agar teks di belakangnya tidak mengganggu.
          isOpen ? 'rounded-3xl bg-white/95' : 'rounded-full bg-white/70'
        }`}
        style={{ boxShadow: '0 10px 34px -14px rgba(29,45,105,0.18)' }}
      >
        <div className="px-4 py-2 sm:px-6 sm:py-2.5">
          <div className="flex items-center justify-between gap-4">
            <a
              href={to('home')}
              className="flex flex-shrink-0 items-center gap-2.5 rounded-full transition-opacity hover:opacity-75"
            >
              {/* Nama di sebelahnya sudah menjadi nama tautan, jadi logonya dekoratif. */}
              <img src={himikoLogo} alt="" width="32" height="32" className="h-8 w-8" />
              <span className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                Himiko Lab
              </span>
            </a>

            <div className="hidden items-center gap-7 lg:flex">
              {links.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  aria-current={link.key === page ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                    link.key === page ? 'text-brand-600' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* Di layar sangat sempit pengalih bahasa pindah ke dalam menu. */}
              <LanguageSwitcher className="hidden min-[360px]:inline-flex" />

              <ExternalLink
                href={action.href}
                className="hidden items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 lg:inline-flex"
              >
                {action.label}
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
              </ExternalLink>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={MENU_ID}
                aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-white hover:text-brand-600 lg:hidden"
              >
                {isOpen ? (
                  <X size={22} weight="bold" aria-hidden="true" />
                ) : (
                  <List size={22} weight="bold" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/*
            `invisible` saat tertutup mengeluarkan tautan dari urutan Tab dan dari
            pembaca layar. Tanpa itu menu yang hanya dikecilkan tingginya tetap
            bisa difokus walau tidak terlihat.
          */}
          <div
            id={MENU_ID}
            className={`overflow-hidden transition-all duration-200 ease-in-out lg:hidden ${
              isOpen
                ? 'visible mt-2 max-h-[28rem] border-t border-slate-200/60 pt-3 opacity-100'
                : 'invisible max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-1 pb-2">
              {links.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={link.key === page ? 'page' : undefined}
                  className={`rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-brand-50 hover:text-brand-600 ${
                    link.key === page ? 'bg-brand-50 text-brand-600' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <ExternalLink
                href={action.href}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
              >
                {action.label}
                <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
              </ExternalLink>

              <div className="mt-2 flex items-center gap-2 px-1 min-[360px]:hidden">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

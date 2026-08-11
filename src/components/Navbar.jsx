import React, { useState } from 'react';
import { List, X, ArrowRight } from '@phosphor-icons/react';
import himikoLogo from '../assets/images/himiko-logo.svg';
import LanguageSwitcher from './LanguageSwitcher';
import { useT } from '../i18n';

/*
 * Komponen Navbar dihapus di HeroUI v3. Panduan resminya menyarankan menyusun
 * navigasi dari elemen HTML biasa dengan Tailwind, jadi itu yang dilakukan di sini.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useT();

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#logo', label: t.nav.logo },
    { href: '#morvyn', label: t.nav.morvyn },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2 border border-white/60 bg-white/70 backdrop-blur-xl transition-[border-radius] duration-200 sm:top-6 ${
        isOpen ? 'rounded-3xl' : 'rounded-full'
      }`}
      style={{ boxShadow: '0 10px 34px -14px rgba(29,45,105,0.18)' }}
    >
      <div className="px-4 py-2.5 sm:px-6 sm:py-3">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="flex flex-shrink-0 items-center gap-2.5 rounded-full transition-opacity hover:opacity-75"
          >
            <img src={himikoLogo} alt="Logo Himiko Lab" className="h-8 w-auto" />
            <span className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
              Himiko Lab
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden sm:inline-flex" />

            <a
              href="#morvyn"
              className="hidden items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 lg:inline-flex"
            >
              {t.morvyn.name}
              <ArrowRight size={15} weight="bold" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="rounded-full p-2 text-slate-600 transition-colors hover:bg-white hover:text-brand-600 lg:hidden"
            >
              {isOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-200 ease-in-out lg:hidden ${
            isOpen ? 'mt-3 max-h-96 border-t border-slate-200/60 pt-3 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 pb-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-2 flex items-center gap-2 px-1 sm:hidden">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react';
import morvynLogo from '../assets/images/morvyn-logo.svg';
import PageHeader from '../components/PageHeader';
import LogoMeaning from '../components/LogoMeaning';
import ExternalLink from '../components/ExternalLink';
import { BTN_PRIMARY, BTN_SECONDARY, EYEBROW } from '../components/styles';
import { MORVYN_SITE } from '../data/links';
import { useT } from '../i18n';

export default function AboutPage() {
  const { t, lang, to } = useT();
  const { story, product } = t.aboutPage;

  return (
    <>
      <PageHeader eyebrow={t.aboutPage.eyebrow} title={t.aboutPage.title} lead={t.aboutPage.lead} />

      <div className="flex flex-col gap-16 sm:gap-24">
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
                  {story.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
                  {story.title}
                </h2>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                  {story.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6">
          <div className="mx-auto max-w-6xl">
            <div className="glass-card rounded-[2rem] p-6 sm:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
                <div>
                  <p className={EYEBROW}>{product.eyebrow}</p>

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
                      {product.title}
                    </h2>
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                    {product.body}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a href={to('morvyn')} className={BTN_PRIMARY}>
                    {t.morvyn.ctaDetails}
                    <ArrowRight size={16} weight="bold" aria-hidden="true" />
                  </a>
                  <ExternalLink href={MORVYN_SITE[lang]} className={BTN_SECONDARY}>
                    {t.morvyn.ctaWebsite}
                    <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LogoMeaning />
      </div>
    </>
  );
}

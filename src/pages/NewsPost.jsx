import React from 'react';
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react';
import PageHeader from '../components/PageHeader';
import ExternalLink from '../components/ExternalLink';
import PlayStoreStatus from '../components/PlayStoreStatus';
import { BTN_SECONDARY, TEXT_LINK } from '../components/styles';
import { POSTS } from '../data/posts';
import { MORVYN_SITE, PLAY_STORE_LIVE } from '../data/links';
import { postFor, formatDate } from '../i18n/meta';
import { useT } from '../i18n';

/**
 * Satu tulisan Kabar: pengantar, daftar perubahan, dan penutup yang menautkan
 * ke situs Morvyn dan Google Play. Isinya dari `postFor` (src/i18n/meta.js),
 * yaitu catatan rilis Google Play atau tulisan tangan di kamus.
 */
export default function NewsPost() {
  const { t, lang, page, to } = useT();
  const post = postFor(t, page);
  const { datePublished } = POSTS.find((entry) => entry.slug === post.slug);

  return (
    <article>
      <PageHeader
        eyebrow={post.eyebrow}
        title={post.title}
        lead={post.intro}
        meta={<time dateTime={datePublished}>{formatDate(t, lang, datePublished)}</time>}
      />

      <div className="flex flex-col gap-10 px-6 sm:gap-12">
        {post.changes?.length > 0 && (
          <section className="mx-auto w-full max-w-3xl">
            <div className="glass-card rounded-[2rem] p-6 sm:p-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {post.changesTitle}
              </h2>

              <ul className="mt-6 grid gap-4">
                {post.changes.map((change) => (
                  <li
                    key={change.text}
                    className="rounded-2xl border border-brand-500/10 bg-white/70 p-4 sm:p-5"
                  >
                    {change.area && (
                      <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                        {change.area}
                      </p>
                    )}
                    <p className="text-base leading-relaxed text-slate-700">{change.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="mx-auto w-full max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {post.closingTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600">
            {post.closing}
          </p>

          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            {PLAY_STORE_LIVE && <PlayStoreStatus />}
            <ExternalLink href={MORVYN_SITE[lang]} className={BTN_SECONDARY}>
              {t.morvyn.ctaWebsite}
              <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </ExternalLink>
          </div>

          <a href={to('news')} className={`${TEXT_LINK} mt-8 text-sm sm:text-base`}>
            <ArrowLeft size={15} weight="bold" aria-hidden="true" />
            {t.news.back}
          </a>
        </section>
      </div>
    </article>
  );
}

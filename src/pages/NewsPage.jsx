import React from 'react';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import PageHeader from '../components/PageHeader';
import { EYEBROW, TEXT_LINK } from '../components/styles';
import { NEWS_PAGE_COUNT, postsOnPage } from '../data/posts';
import { PAGES, newsListPage, postPage } from '../routes';
import { fill, formatDate, postContent } from '../i18n/meta';
import { useT } from '../i18n';

const PAGE_LINK =
  'inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border px-4 text-sm font-semibold transition-colors';
const PAGE_IDLE = `${PAGE_LINK} border-brand-500/15 bg-white/70 text-slate-700 hover:border-brand-500/30 hover:bg-white hover:text-brand-600`;
const PAGE_CURRENT = `${PAGE_LINK} border-brand-500 bg-brand-500 text-white`;

/** Tautan ke halaman daftar sebelumnya, nomor halaman, dan berikutnya. */
function Pagination({ current }) {
  const { t, to } = useT();
  const p = t.news.pagination;
  const pages = Array.from({ length: NEWS_PAGE_COUNT }, (_, i) => i + 1);

  return (
    <nav aria-label={p.label} className="mt-10 flex flex-wrap items-center justify-center gap-2">
      {current > 1 && (
        <a href={to(newsListPage(current - 1))} rel="prev" className={PAGE_IDLE}>
          <ArrowLeft size={15} weight="bold" aria-hidden="true" />
          {p.previous}
        </a>
      )}

      <ol className="flex flex-wrap items-center justify-center gap-2">
        {pages.map((n) => (
          <li key={n}>
            <a
              href={to(newsListPage(n))}
              aria-label={fill(p.page, { page: n })}
              aria-current={n === current ? 'page' : undefined}
              className={n === current ? PAGE_CURRENT : PAGE_IDLE}
            >
              {n}
            </a>
          </li>
        ))}
      </ol>

      {current < NEWS_PAGE_COUNT && (
        <a href={to(newsListPage(current + 1))} rel="next" className={PAGE_IDLE}>
          {p.next}
          <ArrowRight size={15} weight="bold" aria-hidden="true" />
        </a>
      )}
    </nav>
  );
}

/**
 * Satu halaman daftar Kabar, dari yang terbaru. Urutannya mengikuti
 * src/data/posts.js, dibagi NEWS_PAGE_SIZE tulisan per halaman.
 */
export default function NewsPage() {
  const { t, lang, page, to } = useT();
  const n = t.news;
  const current = PAGES[page]?.listPage ?? 1;
  const pageInfo =
    NEWS_PAGE_COUNT > 1 ? fill(n.pagination.pageOf, { page: current, total: NEWS_PAGE_COUNT }) : null;

  return (
    <>
      <PageHeader eyebrow={n.eyebrow} title={n.title} lead={n.lead} meta={pageInfo} />

      <section className="px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="sr-only">{n.listLabel}</h2>

          <ul className="grid gap-4">
            {postsOnPage(current).map(({ slug, datePublished }) => {
              const post = postContent(t, slug);
              const href = to(postPage(slug));

              return (
                <li key={slug}>
                  <article className="glass-card lift rounded-3xl p-6 sm:p-8">
                    <p className={EYEBROW}>
                      {post.eyebrow}
                      <span aria-hidden="true"> · </span>
                      <time dateTime={datePublished}>{formatDate(t, lang, datePublished)}</time>
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink text-balance sm:text-2xl">
                      <a href={href} className="underline-offset-4 hover:text-brand-600 hover:underline">
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">{post.summary}</p>
                    {/* Judul di atas sudah menautkan ke tulisan yang sama, jadi
                        tautan ini disembunyikan dari pembaca layar. */}
                    <a
                      href={href}
                      aria-hidden="true"
                      tabIndex={-1}
                      className={`${TEXT_LINK} mt-4 text-sm sm:text-base`}
                    >
                      {n.readMore}
                      <ArrowRight size={15} weight="bold" aria-hidden="true" />
                    </a>
                  </article>
                </li>
              );
            })}
          </ul>

          {NEWS_PAGE_COUNT > 1 && <Pagination current={current} />}
        </div>
      </section>
    </>
  );
}

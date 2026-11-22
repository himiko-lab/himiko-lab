import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import PageHeader from '../components/PageHeader';
import { EYEBROW, TEXT_LINK } from '../components/styles';
import { POSTS } from '../data/posts';
import { postPage } from '../routes';
import { formatDate, postContent } from '../i18n/meta';
import { useT } from '../i18n';

/** Daftar tulisan Kabar, dari yang terbaru. Urutannya mengikuti src/data/posts.js. */
export default function NewsPage() {
  const { t, lang, to } = useT();
  const n = t.news;

  return (
    <>
      <PageHeader eyebrow={n.eyebrow} title={n.title} lead={n.lead} />

      <section className="px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="sr-only">{n.listLabel}</h2>

          <ul className="grid gap-4">
            {POSTS.map(({ slug, datePublished }) => {
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
        </div>
      </section>
    </>
  );
}

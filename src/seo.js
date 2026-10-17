import id from './i18n/id';
import en from './i18n/en';
import { DEFAULT_LANG, LANGS, NOT_FOUND, PAGES, ROUTES, pathFor } from './routes';
import {
  CONTACT_EMAIL,
  SLOGAN,
  MORVYN_SITE,
  MORVYN_URL,
  PLAY_STORE_LIVE,
  PLAY_STORE_URL,
  SITE_URL,
  SOCIAL,
} from './data/links';

/*
 * Isi <head> dan sitemap untuk tiap halaman. Hanya dijalankan saat build oleh
 * scripts/prerender.js, tidak ikut ke bundel browser.
 */

const DICTIONARIES = { id, en };
const OG_LOCALE = { id: 'id_ID', en: 'en_US' };
const LANG_TAG = { id: 'id-ID', en: 'en-US' };

const OG_IMAGE = { url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 };

// Logo Himiko Lab, bukan logo Morvyn: organisasi dan aplikasinya dua entitas.
const ORG_LOGO = { url: `${SITE_URL}/favicon.png`, width: 512, height: 512 };

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
// Sama dengan @id di situs resmi Morvyn, supaya keduanya merujuk entitas yang sama.
const APP_ID = `${MORVYN_URL}/#app`;

const abs = (path) => `${SITE_URL}${path}`;

const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

function organizationNode(t) {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Himiko Lab',
    url: `${SITE_URL}/`,
    logo: { '@type': 'ImageObject', ...ORG_LOGO },
    image: OG_IMAGE.url,
    description: t.meta.organization,
    email: CONTACT_EMAIL,
    slogan: SLOGAN,
    sameAs: Object.entries(SOCIAL)
      .filter(([key]) => key !== 'email')
      .map(([, channel]) => channel.href),
  };
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Himiko Lab',
    url: `${SITE_URL}/`,
    inLanguage: LANGS.map((lang) => LANG_TAG[lang]),
    publisher: { '@id': ORG_ID },
  };
}

function appNode(t) {
  const node = {
    '@type': 'MobileApplication',
    '@id': APP_ID,
    name: 'Morvyn',
    url: MORVYN_SITE.id,
    description: t.meta.app,
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Android',
    inLanguage: LANGS.map((lang) => LANG_TAG[lang]),
    image: `${MORVYN_URL}/logo-morvyn.svg`,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };

  // Tautan unduh dan ketersediaan hanya diklaim setelah listing benar-benar terbit.
  if (PLAY_STORE_LIVE) {
    node.installUrl = PLAY_STORE_URL;
    node.offers = {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
    };
  }

  return node;
}

function breadcrumbNode(route, t) {
  const url = abs(route.path);
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.nav.home, item: abs(pathFor('home', route.lang)) },
      { '@type': 'ListItem', position: 2, name: t.nav[route.page], item: url },
    ],
  };
}

function structuredData(route, t) {
  const url = abs(route.path);
  const meta = t.meta[route.page];
  const isHome = route.page === 'home';
  const showsApp = isHome || route.page === 'morvyn';

  const webPage = {
    '@type': route.page === 'about' ? 'AboutPage' : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    inLanguage: LANG_TAG[route.lang],
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': route.page === 'morvyn' ? APP_ID : ORG_ID },
    primaryImageOfPage: { '@type': 'ImageObject', ...OG_IMAGE },
  };

  if (route.page === 'morvyn') webPage.mainEntity = { '@id': APP_ID };
  if (isHome) webPage.mentions = { '@id': APP_ID };
  if (!isHome) webPage.breadcrumb = { '@id': `${url}#breadcrumb` };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode(t),
      websiteNode(),
      webPage,
      ...(showsApp ? [appNode(t)] : []),
      ...(isHome ? [] : [breadcrumbNode(route, t)]),
    ],
  };
}

/** hreflang hanya untuk bahasa yang halamannya benar-benar ada. */
function alternates(page) {
  const paths = PAGES[page].paths;
  const langs = LANGS.filter((lang) => paths[lang]);
  if (langs.length < 2) return [];

  return [
    ...langs.map((lang) => ({ hreflang: lang, href: abs(paths[lang]) })),
    { hreflang: 'x-default', href: abs(paths[DEFAULT_LANG] ?? paths[langs[0]]) },
  ];
}

export function renderHead(route) {
  const t = DICTIONARIES[route.lang];
  const meta = t.meta[route.page];

  if (route.page === NOT_FOUND.page) {
    return [
      `<title>${esc(meta.title)}</title>`,
      `<meta name="description" content="${esc(meta.description)}" />`,
      '<meta name="robots" content="noindex" />',
    ].join('\n    ');
  }

  const url = abs(route.path);
  const otherLocales = LANGS.filter((lang) => lang !== route.lang && PAGES[route.page].paths[lang]);

  // JSON-LD berada di dalam <script>, jadi "<" di-escape agar tidak bisa menutup tag.
  const jsonLd = JSON.stringify(structuredData(route, t), null, 2).replace(/</g, '\\u003c');

  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    '<meta name="author" content="Himiko Lab" />',
    '<meta name="robots" content="index, follow" />',
    '',
    `<link rel="canonical" href="${esc(url)}" />`,
    ...alternates(route.page).map(
      (alt) => `<link rel="alternate" hreflang="${alt.hreflang}" href="${esc(alt.href)}" />`,
    ),
    '',
    '<meta property="og:type" content="website" />',
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:locale" content="${OG_LOCALE[route.lang]}" />`,
    ...otherLocales.map(
      (lang) => `<meta property="og:locale:alternate" content="${OG_LOCALE[lang]}" />`,
    ),
    '<meta property="og:site_name" content="Himiko Lab" />',
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:image" content="${OG_IMAGE.url}" />`,
    `<meta property="og:image:width" content="${OG_IMAGE.width}" />`,
    `<meta property="og:image:height" content="${OG_IMAGE.height}" />`,
    `<meta property="og:image:alt" content="${esc(t.meta.ogImageAlt)}" />`,
    '',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:site" content="${esc(SOCIAL.x.handle)}" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE.url}" />`,
    `<meta name="twitter:image:alt" content="${esc(t.meta.ogImageAlt)}" />`,
    '',
    `<script type="application/ld+json">\n${jsonLd}\n    </script>`,
  ].join('\n    ');
}

export function renderSitemap() {
  const urls = ROUTES.map((route) => {
    const def = PAGES[route.page];
    const links = alternates(route.page)
      .map(
        (alt) =>
          `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${esc(alt.href)}"/>`,
      )
      .join('\n');

    return [
      '  <url>',
      `    <loc>${esc(abs(route.path))}</loc>`,
      links,
      `    <lastmod>${def.lastmod}</lastmod>`,
      `    <priority>${def.priority[route.lang]}</priority>`,
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n');
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
}

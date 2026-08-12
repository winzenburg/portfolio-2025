#!/usr/bin/env node

/**
 * After Vite build, emit static HTML shells for each article route (and the
 * articles index) with correct <title>, meta, canonical, OG, and JSON-LD.
 *
 * Netlify serves these files for /articles/<slug> before the SPA fallback, so
 * crawlers and social bots see per-page SEO without waiting on client JS.
 * The SPA still hydrates/replaces #root once JS loads.
 */

import fs from "node:fs";
import path from "node:path";
import {
  SITE_ORIGIN,
  escapeHtml,
  extractArticleComponentPaths,
  extractArticlesMetadata,
  extractHelmetSeo,
  parseArticleDateToIso,
  rootDir,
} from "./lib/articles-metadata.mjs";

const DIST_DIR = path.join(rootDir, "dist/public");
const INDEX_HTML_PATH = path.join(DIST_DIR, "index.html");

/**
 * @param {string} html
 * @param {{
 *   title: string;
 *   description: string;
 *   canonical: string;
 *   ogTitle: string;
 *   ogDescription: string;
 *   ogUrl: string;
 *   ogImage: string;
 *   ogType: string;
 *   jsonLd: string | null;
 *   noscriptHeading: string;
 *   noscriptBody: string;
 * }} seo
 */
function applySeoToHtml(html, seo) {
  let next = html;

  next = next.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(seo.title)}</title>`,
  );

  next = replaceOrInsertMeta(next, "name", "description", seo.description);
  next = replaceOrInsertMeta(next, "name", "robots", "index, follow");
  next = replaceOrInsertMeta(next, "property", "og:type", seo.ogType);
  next = replaceOrInsertMeta(next, "property", "og:title", seo.ogTitle);
  next = replaceOrInsertMeta(next, "property", "og:description", seo.ogDescription);
  next = replaceOrInsertMeta(next, "property", "og:url", seo.ogUrl);
  next = replaceOrInsertMeta(next, "property", "og:image", seo.ogImage);
  next = replaceOrInsertMeta(next, "name", "twitter:title", seo.ogTitle);
  next = replaceOrInsertMeta(next, "name", "twitter:description", seo.ogDescription);
  next = replaceOrInsertMeta(next, "name", "twitter:image", seo.ogImage);

  if (/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/.test(next)) {
    next = next.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    );
  } else {
    next = next.replace(
      "</head>",
      `    <link rel="canonical" href="${escapeHtml(seo.canonical)}" />\n  </head>`,
    );
  }

  // Remove prior Article JSON-LD if regenerating; keep Person/WebSite from shell.
  next = next.replace(
    /<script type="application\/ld\+json">\s*\{[\s\S]*?"@type"\s*:\s*"Article"[\s\S]*?\}\s*<\/script>\s*/g,
    "",
  );

  if (seo.jsonLd) {
    next = next.replace(
      "</head>",
      `    <script type="application/ld+json">${seo.jsonLd}</script>\n  </head>`,
    );
  }

  const noscript = `<noscript>
      <article>
        <h1>${escapeHtml(seo.noscriptHeading)}</h1>
        <p>${escapeHtml(seo.noscriptBody)}</p>
        <p><a href="${escapeHtml(seo.canonical)}">${escapeHtml(seo.canonical)}</a></p>
      </article>
    </noscript>`;

  if (next.includes('<div id="root"></div>')) {
    next = next.replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    ${noscript}`,
    );
  } else if (!next.includes("<noscript>")) {
    next = next.replace("</body>", `    ${noscript}\n  </body>`);
  }

  return next;
}

/**
 * @param {string} html
 * @param {"name" | "property"} attr
 * @param {string} key
 * @param {string} content
 */
function replaceOrInsertMeta(html, attr, key, content) {
  const escapedContent = escapeHtml(content);
  const pattern = new RegExp(
    `<meta\\s+${attr}="${escapeRegExp(key)}"\\s+content="[^"]*"\\s*\\/?>`,
  );

  if (pattern.test(html)) {
    return html.replace(
      pattern,
      `<meta ${attr}="${key}" content="${escapedContent}" />`,
    );
  }

  return html.replace(
    "</head>",
    `    <meta ${attr}="${key}" content="${escapedContent}" />\n  </head>`,
  );
}

/**
 * @param {string} value
 */
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * @param {import("./lib/articles-metadata.mjs").ArticleMeta} article
 * @param {string | undefined} componentPath
 */
function resolveArticleSeo(article, componentPath) {
  const fallbackCanonical = `${SITE_ORIGIN}/articles/${article.slug}`;
  const fallbackImage = article.heroImage
    ? `${SITE_ORIGIN}${article.heroImage}`
    : `${SITE_ORIGIN}/images/articles/${article.slug}-hero.webp`;

  /** @type {ReturnType<typeof extractHelmetSeo>} */
  let helmet = {
    title: null,
    description: null,
    ogTitle: null,
    ogDescription: null,
    ogUrl: null,
    ogImage: null,
    ogType: null,
    canonical: null,
    jsonLd: null,
  };

  if (componentPath && fs.existsSync(componentPath)) {
    helmet = extractHelmetSeo(fs.readFileSync(componentPath, "utf-8"));
  }

  const title =
    helmet.title ?? `${article.title} | Ryan Winzenburg`;
  const description = helmet.description ?? article.excerpt;
  const ogTitle = helmet.ogTitle ?? article.title;
  const ogDescription = helmet.ogDescription ?? article.excerpt;
  const ogUrl = helmet.ogUrl ?? fallbackCanonical;
  const ogImage = helmet.ogImage ?? fallbackImage;
  const canonical = helmet.canonical ?? fallbackCanonical;
  const ogType = helmet.ogType ?? "article";

  let jsonLd = helmet.jsonLd;
  if (!jsonLd) {
    jsonLd = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      author: {
        "@type": "Person",
        name: "Ryan Winzenburg",
        url: SITE_ORIGIN,
      },
      datePublished: parseArticleDateToIso(article.date),
      url: canonical,
      image: ogImage,
    });
  }

  return {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage,
    ogType,
    jsonLd,
    noscriptHeading: article.title,
    noscriptBody: article.excerpt,
  };
}

function generateIndexableHtml() {
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    throw new Error(
      `Missing ${path.relative(rootDir, INDEX_HTML_PATH)}. Run vite build first.`,
    );
  }

  const shellHtml = fs.readFileSync(INDEX_HTML_PATH, "utf-8");
  const articles = extractArticlesMetadata();
  const componentPaths = extractArticleComponentPaths();

  let written = 0;
  let missingHelmet = 0;

  for (const article of articles) {
    const componentPath = componentPaths.get(article.slug);
    if (componentPath && fs.existsSync(componentPath)) {
      const helmet = extractHelmetSeo(fs.readFileSync(componentPath, "utf-8"));
      if (!helmet.title) {
        missingHelmet += 1;
        console.warn(`  ⚠ No Helmet title for ${article.slug} — using Articles.tsx fallback`);
      }
    } else {
      missingHelmet += 1;
      console.warn(`  ⚠ Component not found for ${article.slug} — using Articles.tsx fallback`);
    }

    const seo = resolveArticleSeo(article, componentPath);
    const html = applySeoToHtml(shellHtml, seo);
    const outDir = path.join(DIST_DIR, "articles", article.slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
    written += 1;
  }

  // Articles index page
  const articlesIndexSeo = {
    title:
      "Articles on AI Design Workflows, DesignOps & Product Strategy | Ryan Winzenburg",
    description:
      `${articles.length} articles on AI-augmented design workflows, design operations, design systems, UX leadership, and product strategy. Practical insights from 25 years of enterprise design leadership.`,
    canonical: `${SITE_ORIGIN}/articles`,
    ogTitle: "Articles on AI Design Workflows, DesignOps & Product Strategy",
    ogDescription:
      "Practical insights on AI-augmented design, design operations, UX leadership, and product strategy from 25 years of enterprise design leadership.",
    ogUrl: `${SITE_ORIGIN}/articles`,
    ogImage: `${SITE_ORIGIN}/images/articles-hero.webp`,
    ogType: "website",
    jsonLd: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Articles on AI Design Workflows, DesignOps & Product Strategy",
      url: `${SITE_ORIGIN}/articles`,
      description:
        "Practical insights on AI-augmented design, design operations, UX leadership, and product strategy.",
    }),
    noscriptHeading: "Articles on AI Design Workflows, DesignOps & Product Strategy",
    noscriptBody:
      "Practical insights on AI-augmented design, design operations, UX leadership, and product strategy.",
  };

  const articlesIndexDir = path.join(DIST_DIR, "articles");
  fs.mkdirSync(articlesIndexDir, { recursive: true });
  fs.writeFileSync(
    path.join(articlesIndexDir, "index.html"),
    applySeoToHtml(shellHtml, articlesIndexSeo),
    "utf-8",
  );

  console.log(
    `✓ Wrote ${written} article HTML shells + articles index → dist/public/articles/`,
  );
  if (missingHelmet > 0) {
    console.warn(`  (${missingHelmet} used metadata fallbacks)`);
  }
}

try {
  generateIndexableHtml();
} catch (error) {
  console.error(
    "Indexable HTML generation failed:",
    error instanceof Error ? error.message : error,
  );
  process.exit(1);
}

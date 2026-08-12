#!/usr/bin/env node

/**
 * After Vite build, emit static HTML shells for indexable routes with correct
 * <title>, meta, canonical, OG, Twitter, and JSON-LD.
 *
 * Covers articles + main/case-study pages from static-pages.mjs.
 * Netlify serves these files before the 404 catch-all.
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
import {
  STATIC_PAGES,
  staticPageAbsoluteImage,
  staticPageAbsoluteUrl,
} from "./lib/static-pages.mjs";

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
 *   robots: string;
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
  next = replaceOrInsertMeta(next, "name", "robots", seo.robots);
  next = replaceOrInsertMeta(next, "property", "og:type", seo.ogType);
  next = replaceOrInsertMeta(next, "property", "og:title", seo.ogTitle);
  next = replaceOrInsertMeta(next, "property", "og:description", seo.ogDescription);
  next = replaceOrInsertMeta(next, "property", "og:url", seo.ogUrl);
  next = replaceOrInsertMeta(next, "property", "og:image", seo.ogImage);
  next = replaceOrInsertMeta(next, "name", "twitter:card", "summary_large_image");
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

  // Drop prior page-specific JSON-LD types we regenerate; keep Person/WebSite/Org in shell.
  next = next.replace(
    /<script type="application\/ld\+json">\s*\{[\s\S]*?"@type"\s*:\s*"(Article|CollectionPage|BreadcrumbList|CreativeWork|FAQPage)"[\s\S]*?\}\s*<\/script>\s*/g,
    "",
  );

  if (seo.jsonLd) {
    // Support one or more JSON objects concatenated as adjacent script payloads
    const blocks = seo.jsonLd.startsWith("[")
      ? /** @type {unknown[]} */ (JSON.parse(seo.jsonLd)).map((block) => JSON.stringify(block))
      : [seo.jsonLd];
    const scripts = blocks
      .map((block) => `    <script type="application/ld+json">${block}</script>`)
      .join("\n");
    next = next.replace("</head>", `${scripts}\n  </head>`);
  }

  const noscript = `<noscript>
      <article>
        <h1>${escapeHtml(seo.noscriptHeading)}</h1>
        <p>${escapeHtml(seo.noscriptBody)}</p>
        <p><a href="${escapeHtml(seo.canonical)}">${escapeHtml(seo.canonical)}</a></p>
      </article>
    </noscript>`;

  // Replace existing noscript block if regenerating, else insert once.
  if (/<noscript>[\s\S]*?<\/noscript>/.test(next)) {
    next = next.replace(/<noscript>[\s\S]*?<\/noscript>/, noscript);
  } else if (next.includes('<div id="root"></div>')) {
    next = next.replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    ${noscript}`,
    );
  } else {
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
 * @param {string} routePath
 * @param {string} html
 */
function writeShellForPath(routePath, html) {
  if (routePath === "/") {
    fs.writeFileSync(INDEX_HTML_PATH, html, "utf-8");
    return INDEX_HTML_PATH;
  }

  const relative = routePath.replace(/^\//, "");
  const outDir = path.join(DIST_DIR, relative);
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "index.html");
  fs.writeFileSync(outPath, html, "utf-8");
  return outPath;
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

  const title = helmet.title ?? `${article.title} | Ryan Winzenburg`;
  const description = helmet.description ?? article.excerpt;
  const ogTitle = helmet.ogTitle ?? article.title;
  const ogDescription = helmet.ogDescription ?? article.excerpt;
  const ogUrl = helmet.ogUrl ?? fallbackCanonical;
  const ogImage = helmet.ogImage ?? fallbackImage;
  const canonical = helmet.canonical ?? fallbackCanonical;
  const ogType = helmet.ogType ?? "article";

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_ORIGIN}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: `${SITE_ORIGIN}/articles`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonical,
      },
    ],
  };

  /** @type {Record<string, unknown>} */
  const articleLd = helmet.jsonLd
    ? JSON.parse(helmet.jsonLd)
    : {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        datePublished: parseArticleDateToIso(article.date),
        url: canonical,
        image: ogImage,
      };

  // Always attach a consistent Person reference for E-E-A-T / AEO.
  articleLd.author = {
    "@type": "Person",
    "@id": `${SITE_ORIGIN}/#person`,
    name: "Ryan Winzenburg",
    url: SITE_ORIGIN,
    sameAs: [
      "https://www.linkedin.com/in/rwinzenburg/",
      "https://github.com/winzenburg",
      "https://x.com/ryanwinzenburg",
    ],
  };
  if (!articleLd.datePublished) {
    articleLd.datePublished = parseArticleDateToIso(article.date);
  }
  if (!articleLd.dateModified) {
    articleLd.dateModified = articleLd.datePublished;
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
    robots: "index, follow",
    jsonLd: JSON.stringify([breadcrumb, articleLd]),
    noscriptHeading: article.title,
    noscriptBody: article.excerpt,
  };
}

/**
 * @param {import("./lib/static-pages.mjs").StaticPageSeo} page
 */
function resolveStaticPageSeo(page) {
  const canonical = staticPageAbsoluteUrl(page);
  const ogImage = staticPageAbsoluteImage(page);
  const ogType = page.ogType ?? "website";

  /** @type {Record<string, unknown>[]} */
  const jsonLdBlocks = [];

  if (page.path.startsWith("/case-study/")) {
    const name = page.title.split("|")[0]?.trim() ?? page.title;
    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_ORIGIN}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Work",
          item: `${SITE_ORIGIN}/work`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name,
          item: canonical,
        },
      ],
    });
    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name,
      description: page.description,
      url: canonical,
      image: ogImage,
      author: {
        "@type": "Person",
        name: "Ryan Winzenburg",
        url: SITE_ORIGIN,
      },
    });
  } else if (page.path === "/articles") {
    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: page.title,
      url: canonical,
      description: page.description,
    });
  }

  return {
    title: page.title,
    description: page.description,
    canonical,
    ogTitle: page.title,
    ogDescription: page.description,
    ogUrl: canonical,
    ogImage,
    ogType,
    robots: page.noIndex ? "noindex, nofollow" : "index, follow",
    jsonLd: jsonLdBlocks.length > 0 ? JSON.stringify(jsonLdBlocks) : null,
    noscriptHeading: page.title,
    noscriptBody: page.description,
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

  let staticWritten = 0;
  for (const page of STATIC_PAGES) {
    const seo = resolveStaticPageSeo(page);
    const html = applySeoToHtml(shellHtml, seo);
    writeShellForPath(page.path, html);
    staticWritten += 1;
  }

  // 404 shell (explicit)
  const notFoundHtml = applySeoToHtml(shellHtml, {
    title: "Page Not Found | Ryan Winzenburg",
    description: "The page you requested could not be found.",
    canonical: `${SITE_ORIGIN}/404`,
    ogTitle: "Page Not Found | Ryan Winzenburg",
    ogDescription: "The page you requested could not be found.",
    ogUrl: `${SITE_ORIGIN}/404`,
    ogImage: `${SITE_ORIGIN}/images/about-hero.webp`,
    ogType: "website",
    robots: "noindex, nofollow",
    jsonLd: null,
    noscriptHeading: "Page Not Found",
    noscriptBody: "The page you requested could not be found.",
  });
  writeShellForPath("/404", notFoundHtml);
  fs.writeFileSync(path.join(DIST_DIR, "404.html"), notFoundHtml, "utf-8");

  let articleWritten = 0;
  let missingHelmet = 0;

  for (const article of articles) {
    const componentPath = componentPaths.get(article.slug);
    if (!(componentPath && fs.existsSync(componentPath))) {
      missingHelmet += 1;
      console.warn(`  ⚠ Component not found for ${article.slug} — using Articles.tsx fallback`);
    } else {
      const helmet = extractHelmetSeo(fs.readFileSync(componentPath, "utf-8"));
      if (!helmet.title) {
        missingHelmet += 1;
        console.warn(`  ⚠ No Helmet title for ${article.slug} — using Articles.tsx fallback`);
      }
    }

    const seo = resolveArticleSeo(article, componentPath);
    const html = applySeoToHtml(shellHtml, seo);
    writeShellForPath(`/articles/${article.slug}`, html);
    articleWritten += 1;
  }

  console.log(
    `✓ Wrote ${staticWritten} static shells + ${articleWritten} article shells (+ 404.html)`,
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

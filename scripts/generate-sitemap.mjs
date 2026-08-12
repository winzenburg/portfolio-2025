#!/usr/bin/env node

/**
 * Generate client/public/sitemap.xml from static pages + Articles.tsx.
 */

import fs from "node:fs";
import path from "node:path";
import {
  extractArticleComponentPaths,
  extractArticlesMetadata,
  parseArticleDateToIso,
  rootDir,
} from "./lib/articles-metadata.mjs";
import {
  STATIC_PAGES,
  staticPageAbsoluteUrl,
} from "./lib/static-pages.mjs";

/**
 * @param {string} filePath
 * @returns {string | undefined} YYYY-MM-DD from mtime
 */
function fileMtimeIso(filePath) {
  if (!filePath || !fs.existsSync(filePath)) {
    return undefined;
  }
  return fs.statSync(filePath).mtime.toISOString().slice(0, 10);
}

/**
 * Prefer newer of published date vs component file mtime (real refresh signal).
 * @param {string | null} publishedIso
 * @param {string | undefined} mtimeIso
 */
function resolveLastmod(publishedIso, mtimeIso) {
  if (publishedIso && mtimeIso) {
    return publishedIso > mtimeIso ? publishedIso : mtimeIso;
  }
  return mtimeIso ?? publishedIso ?? undefined;
}

function urlEntry({ loc, changefreq, priority, lastmod }) {
  const lastmodLine = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
  return `  <url>
    <loc>${loc}</loc>${lastmodLine}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap() {
  const articles = extractArticlesMetadata();
  if (articles.length === 0) {
    throw new Error("No articles found in Articles.tsx — refusing to write empty sitemap");
  }

  const componentPaths = extractArticleComponentPaths();
  const brandFactsMtime = fileMtimeIso(
    path.join(rootDir, "shared/brand-facts.json"),
  );

  const staticEntries = STATIC_PAGES.filter((page) => !page.noIndex).map((page) => {
    /** @type {string | undefined} */
    let lastmod;
    if (page.path === "/brand-hub") {
      lastmod = brandFactsMtime;
    } else if (page.path === "/about") {
      lastmod = fileMtimeIso(path.join(rootDir, "client/src/pages/About.tsx"));
    }
    return urlEntry({
      loc: staticPageAbsoluteUrl(page),
      changefreq: page.changefreq ?? "monthly",
      priority: page.priority ?? "0.7",
      lastmod,
    });
  });

  const articleEntries = articles.map((article) => {
    const published = parseArticleDateToIso(article.date);
    const componentPath = componentPaths.get(article.slug);
    const mtime = fileMtimeIso(componentPath ?? "");
    const lastmod = resolveLastmod(published, mtime);
    return urlEntry({
      loc: `https://winzenburg.com/articles/${article.slug}`,
      changefreq: "monthly",
      priority: "0.8",
      lastmod,
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Main pages + case studies -->
${staticEntries.join("\n")}

  <!-- Articles (generated from Articles.tsx) -->
${articleEntries.join("\n")}

</urlset>
`;

  const outPath = path.join(rootDir, "client/public/sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf-8");
  console.log(
    `✓ Wrote sitemap with ${staticEntries.length} static URLs + ${articles.length} articles → ${path.relative(rootDir, outPath)}`,
  );
}

try {
  generateSitemap();
} catch (error) {
  console.error("Sitemap generation failed:", error instanceof Error ? error.message : error);
  process.exit(1);
}

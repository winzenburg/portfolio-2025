#!/usr/bin/env node

/**
 * Generate client/public/sitemap.xml from Articles.tsx + known static routes.
 * Run before or as part of the production build so crawlers see every article.
 */

import fs from "node:fs";
import path from "node:path";
import {
  SITE_ORIGIN,
  extractArticlesMetadata,
  parseArticleDateToIso,
  rootDir,
} from "./lib/articles-metadata.mjs";

/** @type {{ loc: string; changefreq: string; priority: string; lastmod?: string }[]} */
const STATIC_URLS = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/work", changefreq: "monthly", priority: "0.9" },
  { loc: "/about", changefreq: "monthly", priority: "0.9" },
  { loc: "/methodology", changefreq: "monthly", priority: "0.8" },
  { loc: "/services", changefreq: "monthly", priority: "0.8" },
  { loc: "/articles", changefreq: "weekly", priority: "0.9" },
  { loc: "/contact", changefreq: "monthly", priority: "0.7" },
  { loc: "/gallery", changefreq: "monthly", priority: "0.6" },
  { loc: "/case-study/cultivate", changefreq: "monthly", priority: "0.8" },
  { loc: "/case-study/kinlet", changefreq: "monthly", priority: "0.8" },
  { loc: "/case-study/saas-design-system", changefreq: "monthly", priority: "0.7" },
  { loc: "/case-study/comcast-design-system", changefreq: "monthly", priority: "0.7" },
  { loc: "/case-study/buildout", changefreq: "monthly", priority: "0.7" },
  { loc: "/case-study/cvs-aetna", changefreq: "monthly", priority: "0.7" },
  { loc: "/case-study/undercurrent", changefreq: "monthly", priority: "0.8" },
  { loc: "/case-study/winzinvest", changefreq: "monthly", priority: "0.8" },
];

function urlEntry({ loc, changefreq, priority, lastmod }) {
  const absolute = `${SITE_ORIGIN}${loc === "/" ? "/" : loc}`;
  const lastmodLine = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
  return `  <url>
    <loc>${absolute}</loc>${lastmodLine}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap() {
  const articles = extractArticlesMetadata();
  if (articles.length === 0) {
    throw new Error("No articles found in Articles.tsx — refusing to write empty sitemap");
  }

  const articleEntries = articles.map((article) => {
    const lastmod = parseArticleDateToIso(article.date) ?? undefined;
    return urlEntry({
      loc: `/articles/${article.slug}`,
      changefreq: "monthly",
      priority: "0.8",
      lastmod,
    });
  });

  const body = [
    ...STATIC_URLS.map(urlEntry),
    "",
    "  <!-- Articles (generated from Articles.tsx) -->",
    ...articleEntries,
  ].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Main pages + case studies -->
${body}

</urlset>
`;

  const outPath = path.join(rootDir, "client/public/sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf-8");
  console.log(
    `✓ Wrote sitemap with ${STATIC_URLS.length} static URLs + ${articles.length} articles → ${path.relative(rootDir, outPath)}`,
  );
}

try {
  generateSitemap();
} catch (error) {
  console.error("Sitemap generation failed:", error instanceof Error ? error.message : error);
  process.exit(1);
}

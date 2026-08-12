/**
 * Shared helpers for reading article metadata from source files.
 * Used by sitemap generation, indexable HTML shells, and validation.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const rootDir = path.resolve(__dirname, "../..");

export const SITE_ORIGIN = "https://winzenburg.com";

/**
 * @typedef {{ id: string; title: string; excerpt: string; date: string; readTime: string; slug: string; category: string; heroImage?: string }} ArticleMeta
 */

/**
 * @returns {ArticleMeta[]}
 */
export function extractArticlesMetadata() {
  const articlesPath = path.join(rootDir, "client/src/pages/Articles.tsx");
  const content = fs.readFileSync(articlesPath, "utf-8");

  const arrayMatch = content.match(/const articles: Article\[\] = \[([\s\S]*?)\];/);
  if (!arrayMatch) {
    throw new Error("Could not find articles array in Articles.tsx");
  }

  const articlesStr = arrayMatch[1];
  /** @type {ArticleMeta[]} */
  const articles = [];

  const articleRegex =
    /\{[\s\S]*?id:\s*"(\d+)"[\s\S]*?title:\s*"([^"]*)"[\s\S]*?excerpt:\s*"([^"]*)"[\s\S]*?date:\s*"([^"]*)"[\s\S]*?readTime:\s*"([^"]*)"[\s\S]*?slug:\s*"([^"]*)"[\s\S]*?category:\s*"([^"]*)"[\s\S]*?heroImage:\s*"([^"]*)"\s*\}/g;

  let match;
  while ((match = articleRegex.exec(articlesStr)) !== null) {
    articles.push({
      id: match[1],
      title: match[2],
      excerpt: match[3],
      date: match[4],
      readTime: match[5],
      slug: match[6],
      category: match[7],
      heroImage: match[8],
    });
  }

  return articles;
}

/**
 * Map article slug → absolute path to the React component file via App.tsx.
 * Supports both eager imports and React.lazy(() => import(...)) routes.
 * @returns {Map<string, string>}
 */
export function extractArticleComponentPaths() {
  const appPath = path.join(rootDir, "client/src/App.tsx");
  const content = fs.readFileSync(appPath, "utf-8");

  /** @type {Map<string, string>} */
  const importToFile = new Map();

  const eagerImportRegex =
    /import\s+(\w+)\s+from\s+"\.\/pages\/articles\/([^"]+)"/g;
  let importMatch;
  while ((importMatch = eagerImportRegex.exec(content)) !== null) {
    const componentName = importMatch[1];
    const fileBase = importMatch[2].replace(/\.tsx$/, "");
    importToFile.set(
      componentName,
      path.join(rootDir, `client/src/pages/articles/${fileBase}.tsx`),
    );
  }

  const lazyImportRegex =
    /const\s+(\w+)\s*=\s*lazy\(\s*\(\)\s*=>\s*import\(\s*"\.\/pages\/articles\/([^"]+)"\s*\)/g;
  let lazyMatch;
  while ((lazyMatch = lazyImportRegex.exec(content)) !== null) {
    const componentName = lazyMatch[1];
    const fileBase = lazyMatch[2].replace(/\.tsx$/, "");
    importToFile.set(
      componentName,
      path.join(rootDir, `client/src/pages/articles/${fileBase}.tsx`),
    );
  }

  /** @type {Map<string, string>} */
  const slugToPath = new Map();

  const eagerRouteRegex =
    /<Route\s+path="\/articles\/([^"]+)"\s+component=\{(\w+)\}/g;
  let routeMatch;
  while ((routeMatch = eagerRouteRegex.exec(content)) !== null) {
    const slug = routeMatch[1];
    const componentName = routeMatch[2];
    const filePath = importToFile.get(componentName);
    if (filePath) {
      slugToPath.set(slug, filePath);
    }
  }

  const lazyRouteRegex =
    /<Route\s+path="\/articles\/([^"]+)"\s*>\s*\{\(\)\s*=>\s*<LazyRoute\s+component=\{(\w+)\}/g;
  let lazyRouteMatch;
  while ((lazyRouteMatch = lazyRouteRegex.exec(content)) !== null) {
    const slug = lazyRouteMatch[1];
    const componentName = lazyRouteMatch[2];
    const filePath = importToFile.get(componentName);
    if (filePath) {
      slugToPath.set(slug, filePath);
    }
  }

  return slugToPath;
}

/**
 * @param {string} dateStr e.g. "January 15, 2025"
 * @returns {string | null} ISO date YYYY-MM-DD
 */
export function parseArticleDateToIso(dateStr) {
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }
  return parsed.toISOString().slice(0, 10);
}

/**
 * Extract SEO fields from a react-helmet-async <Helmet> block in a TSX file.
 * @param {string} tsxContent
 * @returns {{
 *   title: string | null;
 *   description: string | null;
 *   ogTitle: string | null;
 *   ogDescription: string | null;
 *   ogUrl: string | null;
 *   ogImage: string | null;
 *   ogType: string | null;
 *   canonical: string | null;
 *   jsonLd: string | null;
 * }}
 */
export function extractHelmetSeo(tsxContent) {
  const empty = {
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

  const helmetMatch = tsxContent.match(/<Helmet>([\s\S]*?)<\/Helmet>/);
  if (!helmetMatch) {
    return empty;
  }

  const inner = helmetMatch[1];

  const titleMatch = inner.match(/<title>([\s\S]*?)<\/title>/);
  const title = titleMatch ? decodeXmlEntities(titleMatch[1].trim()) : null;

  const description = extractMetaContent(inner, "name", "description");
  const ogTitle = extractMetaContent(inner, "property", "og:title");
  const ogDescription = extractMetaContent(inner, "property", "og:description");
  const ogUrl = extractMetaContent(inner, "property", "og:url");
  const ogImage = extractMetaContent(inner, "property", "og:image");
  const ogType = extractMetaContent(inner, "property", "og:type");

  const canonicalMatch = inner.match(
    /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/>/,
  );
  const canonical = canonicalMatch ? canonicalMatch[1] : null;

  let jsonLd = null;
  const jsonLdMatch = inner.match(
    /<script\s+type="application\/ld\+json">\{JSON\.stringify\(([\s\S]*?)\)\}<\/script>/,
  );
  if (jsonLdMatch) {
    jsonLd = jsObjectLiteralToJson(jsonLdMatch[1].trim());
  }

  return {
    title,
    description,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage,
    ogType,
    canonical,
    jsonLd,
  };
}

/**
 * @param {string} helmetInner
 * @param {"name" | "property"} attr
 * @param {string} value
 * @returns {string | null}
 */
function extractMetaContent(helmetInner, attr, value) {
  const pattern = new RegExp(
    `<meta\\s+${attr}="${escapeRegExp(value)}"\\s+content="([^"]*)"\\s*\\/>`,
  );
  const singleLine = helmetInner.match(pattern);
  if (singleLine) {
    return decodeXmlEntities(singleLine[1]);
  }

  // Multi-line: <meta name="description" content="..." />
  const multiPattern = new RegExp(
    `<meta\\s+${attr}="${escapeRegExp(value)}"\\s+content=\\s*"([^"]*)"\\s*\\/>`,
  );
  const multi = helmetInner.match(multiPattern);
  if (multi) {
    return decodeXmlEntities(multi[1]);
  }

  // JSX multiline with content on following lines
  const loosePattern = new RegExp(
    `<meta[\\s\\S]*?${attr}="${escapeRegExp(value)}"[\\s\\S]*?content=["']([^"']*)["'][\\s\\S]*?\\/>`,
  );
  const loose = helmetInner.match(loosePattern);
  if (loose) {
    return decodeXmlEntities(loose[1]);
  }

  return null;
}

/**
 * Convert a simple JS object literal (as written in Helmet JSON.stringify)
 * into a JSON string. Falls back to null on failure.
 * @param {string} literal
 * @returns {string | null}
 */
function jsObjectLiteralToJson(literal) {
  try {
    // Quote unquoted keys: headline: → "headline":
    let normalized = literal
      .replace(/(\s)([A-Za-z_][A-Za-z0-9_]*)(\s*):/g, '$1"$2"$3:')
      .replace(/,\s*([}\]])/g, "$1");

    // Convert single-quoted strings to double-quoted
    normalized = normalized.replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, (_, inner) => {
      const escaped = inner.replace(/"/g, '\\"');
      return `"${escaped}"`;
    });

    const parsed = JSON.parse(normalized);
    return JSON.stringify(parsed);
  } catch {
    try {
      // eslint-disable-next-line no-new-func
      const value = Function(`"use strict"; return (${literal});`)();
      return JSON.stringify(value);
    } catch {
      return null;
    }
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function decodeXmlEntities(value) {
  return value
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Escape text for HTML attribute/text content.
 * @param {string} value
 * @returns {string}
 */
export function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

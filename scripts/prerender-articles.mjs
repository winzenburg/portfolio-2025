#!/usr/bin/env node

/**
 * Prerender article routes (and /articles index) into the static HTML shells
 * so crawlers see full body text without executing JS.
 *
 * Runs after generate-indexable-html.mjs. Serves dist/public, visits each route
 * with Playwright, and injects the rendered #root HTML into the shell file.
 */

import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { chromium } from "playwright";
import {
  extractArticlesMetadata,
  rootDir,
} from "./lib/articles-metadata.mjs";

const DIST_DIR = path.join(rootDir, "dist/public");
const PORT = Number(process.env.PRERENDER_PORT || 4179);
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 3);
const MIN_ROOT_CHARS = Number(process.env.PRERENDER_MIN_CHARS || 400);

/**
 * @param {string} filePath
 */
function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  /** @type {Record<string, string>} */
  const map = {
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json",
    ".webp": "image/webp",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".xml": "application/xml",
    ".txt": "text/plain; charset=utf-8",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ico": "image/x-icon",
  };
  return map[ext] || "application/octet-stream";
}

/**
 * Resolve a request path to a file under dist/public.
 * @param {string} pathname
 */
function resolveStaticFile(pathname) {
  const decoded = decodeURIComponent(pathname.split("?")[0] || "/");
  const relative = decoded.replace(/^\/+/, "");

  const candidates = [
    path.join(DIST_DIR, relative),
    path.join(DIST_DIR, relative, "index.html"),
  ];

  if (!path.extname(relative)) {
    candidates.unshift(path.join(DIST_DIR, relative, "index.html"));
  }

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }

  return null;
}

function createStaticServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url || "/", `http://127.0.0.1:${PORT}`);
    const filePath = resolveStaticFile(url.pathname);

    if (!filePath) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType(filePath) });
    fs.createReadStream(filePath).pipe(res);
  });
}

/**
 * Replace the contents of <div id="root">...</div>, handling nested divs.
 * @param {string} html
 * @param {string} rootInnerHtml
 */
function injectRootHtml(html, rootInnerHtml) {
  const emptyRoot = '<div id="root"></div>';
  if (html.includes(emptyRoot)) {
    return html.replace(emptyRoot, `<div id="root">${rootInnerHtml}</div>`);
  }

  const openTag = '<div id="root">';
  const start = html.indexOf(openTag);
  if (start === -1) {
    // Allow other attribute order variants
    const match = html.match(/<div\s+id="root"\s*>/);
    if (!match || match.index === undefined) {
      throw new Error('Could not find <div id="root"> in HTML shell');
    }
    return injectAt(html, match.index, match[0].length, rootInnerHtml);
  }

  return injectAt(html, start, openTag.length, rootInnerHtml);
}

/**
 * @param {string} html
 * @param {number} start
 * @param {number} openLen
 * @param {string} rootInnerHtml
 */
function injectAt(html, start, openLen, rootInnerHtml) {
  let pos = start + openLen;
  let depth = 1;

  while (pos < html.length && depth > 0) {
    const nextOpen = html.indexOf("<div", pos);
    const nextClose = html.indexOf("</div>", pos);
    if (nextClose === -1) {
      throw new Error("Unclosed #root div while injecting prerender HTML");
    }

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      pos = nextOpen + 4;
    } else {
      depth -= 1;
      if (depth === 0) {
        return (
          html.slice(0, start) +
          `<div id="root">${rootInnerHtml}</div>` +
          html.slice(nextClose + "</div>".length)
        );
      }
      pos = nextClose + "</div>".length;
    }
  }

  throw new Error("Failed to locate closing tag for #root");
}

/**
 * @param {string} routePath
 */
function shellPathForRoute(routePath) {
  if (routePath === "/") {
    return path.join(DIST_DIR, "index.html");
  }
  return path.join(DIST_DIR, routePath.replace(/^\//, ""), "index.html");
}

/**
 * @param {import('playwright').Page} page
 * @param {string} routePath
 * @param {"article" | "index"} kind
 */
async function prerenderRoute(page, routePath, kind) {
  const url = `http://127.0.0.1:${PORT}${routePath}`;
  // Prefer "load" over "networkidle" — analytics beacons can keep the network busy.
  await page.goto(url, { waitUntil: "load", timeout: 90_000 });

  if (kind === "article") {
    await page.waitForSelector("#root h1", { timeout: 45_000 });
  } else {
    await page.waitForSelector('#root a[href*="/articles/"]', {
      timeout: 45_000,
    });
  }

  await page.waitForFunction(
    (minChars) => {
      const root = document.querySelector("#root");
      if (!root) return false;
      const text = (root.textContent || "").replace(/\s+/g, " ").trim();
      return text.length >= minChars;
    },
    MIN_ROOT_CHARS,
    { timeout: 45_000 },
  );

  // Normalize accidental protocol-relative internal links (e.g. href="//articles").
  await page.evaluate(() => {
    document.querySelectorAll("#root a[href^='//']").forEach((anchor) => {
      const href = anchor.getAttribute("href");
      if (!href) return;
      // Keep real protocol-relative absolute URLs (//example.com/...), fix path-only bugs.
      const rest = href.slice(2);
      const firstSegment = rest.split("/")[0] || "";
      if (!firstSegment.includes(".")) {
        anchor.setAttribute("href", `/${rest}`);
      }
    });
  });

  const rootHtml = await page.$eval("#root", (el) => el.innerHTML);
  const textLen = rootHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
    .length;

  if (textLen < MIN_ROOT_CHARS) {
    throw new Error(
      `${routePath}: prerendered body too short (${textLen} chars)`,
    );
  }

  // Helmet may inject FAQPage (etc.) into <head>; capture those for the shell.
  const jsonLdBlocks = await page.$$eval(
    'script[type="application/ld+json"]',
    (nodes) =>
      nodes
        .map((node) => (node.textContent || "").trim())
        .filter((text) => text.length > 0),
  );

  const shellPath = shellPathForRoute(routePath);
  if (!fs.existsSync(shellPath)) {
    throw new Error(`Missing shell for ${routePath}: ${shellPath}`);
  }

  const shellHtml = fs.readFileSync(shellPath, "utf-8");
  let nextHtml = injectRootHtml(shellHtml, rootHtml);
  nextHtml = mergeFaqJsonLd(nextHtml, jsonLdBlocks);
  fs.writeFileSync(shellPath, nextHtml, "utf-8");

  return { routePath, textLen, shellPath };
}

/**
 * Merge FAQPage JSON-LD from the hydrated page into the static shell head
 * when the shell does not already include it.
 * @param {string} html
 * @param {string[]} jsonLdBlocks
 */
function mergeFaqJsonLd(html, jsonLdBlocks) {
  /** @type {string[]} */
  const faqBlocks = [];

  for (const block of jsonLdBlocks) {
    try {
      const parsed = JSON.parse(block);
      const type = parsed?.["@type"];
      if (type === "FAQPage") {
        faqBlocks.push(JSON.stringify(parsed));
      }
    } catch {
      // Ignore non-JSON Helmet payloads
    }
  }

  if (faqBlocks.length === 0) {
    return html;
  }

  if (html.includes('"@type":"FAQPage"') || html.includes('"@type": "FAQPage"')) {
    return html;
  }

  const scripts = faqBlocks
    .map((block) => `    <script type="application/ld+json">${block}</script>`)
    .join("\n");

  return html.replace("</head>", `${scripts}\n  </head>`);
}

/**
 * @template T
 * @param {T[]} items
 * @param {number} concurrency
 * @param {(item: T, index: number) => Promise<void>} worker
 */
async function mapPool(items, concurrency, worker) {
  let nextIndex = 0;

  async function run() {
    while (nextIndex < items.length) {
      const current = nextIndex;
      nextIndex += 1;
      await worker(items[current], current);
    }
  }

  const runners = Array.from(
    { length: Math.min(concurrency, items.length) },
    () => run(),
  );
  await Promise.all(runners);
}

async function main() {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error(
      `Missing ${path.relative(rootDir, DIST_DIR)}. Run vite build + generate-indexable-html first.`,
    );
  }

  const articles = extractArticlesMetadata();
  /** @type {{ routePath: string; kind: "article" | "index" }[]} */
  const routes = [
    { routePath: "/brand-hub", kind: "article" },
    { routePath: "/about", kind: "article" },
    { routePath: "/articles", kind: "index" },
    ...articles.map((article) => ({
      routePath: `/articles/${article.slug}`,
      kind: /** @type {"article"} */ ("article"),
    })),
  ];

  const server = createStaticServer();
  await new Promise((resolve) => {
    server.listen(PORT, "127.0.0.1", resolve);
  });

  console.log(
    `Prerendering ${routes.length} routes on http://127.0.0.1:${PORT} (concurrency ${CONCURRENCY})…`,
  );

  const browser = await chromium.launch({ headless: true });
  /** @type {Error[]} */
  const failures = [];
  let ok = 0;

  try {
    await mapPool(routes, CONCURRENCY, async (route) => {
      const page = await browser.newPage();
      try {
        const result = await prerenderRoute(page, route.routePath, route.kind);
        ok += 1;
        console.log(
          `  ✓ ${result.routePath} (${result.textLen.toLocaleString()} chars)`,
        );
      } catch (error) {
        const err =
          error instanceof Error ? error : new Error(String(error));
        failures.push(err);
        console.error(`  ✗ ${route.routePath}: ${err.message}`);
      } finally {
        await page.close();
      }
    });
  } finally {
    await browser.close();
    await new Promise((resolve) => {
      server.close(() => resolve(undefined));
    });
  }

  if (failures.length > 0) {
    throw new Error(
      `Prerender failed for ${failures.length}/${routes.length} routes (${ok} ok). First: ${failures[0]?.message}`,
    );
  }

  console.log(`✓ Prerendered ${ok} routes with crawlable body HTML`);
}

try {
  await main();
} catch (error) {
  console.error(
    "Article prerender failed:",
    error instanceof Error ? error.message : error,
  );
  process.exit(1);
}

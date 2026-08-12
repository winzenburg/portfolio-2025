#!/usr/bin/env node

/**
 * Detect newly-added articles by diffing client/src/pages/Articles.tsx
 * against a previous git ref.
 *
 * Used by .github/workflows/notify-new-article.yml to decide whether a push
 * that touched Articles.tsx actually introduced a brand-new article (vs. just
 * editing an existing one, e.g. fixing a typo), so the newsletter workflow
 * only fires once per article - no idempotency log required.
 *
 * Usage:
 *   node scripts/detect-new-articles.js [baseRef]   # default baseRef: HEAD~1
 *
 * Prints one JSON object per line (`{"slug":...,"heroImage":...}`) for every
 * article present in the working tree's Articles.tsx but absent from
 * baseRef's version. Prints nothing (exit 0) if there are none, or if
 * baseRef doesn't exist (e.g. first commit).
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const baseRef = process.argv[2] || 'HEAD~1';
const ARTICLES_REL_PATH = 'client/src/pages/Articles.tsx';

function extractArticleMeta(content) {
  const arrayMatch = content.match(/const articles: Article\[\] = \[([\s\S]*?)\n\];/);
  if (!arrayMatch) return [];

  const objectRegex = /\{\s*id:\s*"[^"]*",\s*title:\s*"(?:[^"\\]|\\.)*",\s*excerpt:\s*"(?:[^"\\]|\\.)*",\s*date:\s*"[^"]*",\s*readTime:\s*"[^"]*",\s*slug:\s*"([^"]*)",\s*category:\s*"[^"]*",\s*heroImage:\s*"([^"]*)"\s*\}/g;

  const results = [];
  let match;
  while ((match = objectRegex.exec(arrayMatch[1])) !== null) {
    results.push({ slug: match[1], heroImage: match[2] });
  }
  return results;
}

function main() {
  const currentContent = fs.readFileSync(path.join(rootDir, ARTICLES_REL_PATH), 'utf-8');
  const currentArticles = extractArticleMeta(currentContent);

  let previousArticles = [];
  try {
    const previousContent = execSync(`git show ${baseRef}:${ARTICLES_REL_PATH}`, {
      cwd: rootDir,
      encoding: 'utf-8',
    });
    previousArticles = extractArticleMeta(previousContent);
  } catch {
    // baseRef or the file at that ref doesn't exist (e.g. first commit) -
    // treating every current article as new would be too aggressive, so bail out.
    console.error(`Could not read ${ARTICLES_REL_PATH} at ${baseRef}; assuming no new articles.`);
    return;
  }

  const previousSlugs = new Set(previousArticles.map((a) => a.slug));
  const newArticles = currentArticles.filter((a) => !previousSlugs.has(a.slug));

  for (const article of newArticles) {
    console.log(JSON.stringify(article));
  }
}

main();

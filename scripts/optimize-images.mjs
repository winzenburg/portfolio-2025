#!/usr/bin/env node

/**
 * Batch image optimization for client/public/images/.
 *
 * Converts every PNG/JPEG under the target directories to WebP, resizing
 * down to a sensible max width for how each category is actually rendered
 * (see CATEGORIES below). Originals are left untouched here - this script
 * only writes new .webp files; a separate pass updates code references and
 * removes the old files once everything is verified to still work.
 *
 * Usage:
 *   node scripts/optimize-images.mjs               # convert everything
 *   node scripts/optimize-images.mjs --dry-run      # report planned sizes, write nothing
 *   node scripts/optimize-images.mjs path/to/one.png  # convert a single file
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const imagesDir = path.join(rootDir, 'client/public/images');

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const explicitTargets = args.filter((a) => !a.startsWith('--'));

// [pathMatcher, maxWidth, quality] - first match wins.
const CATEGORIES = [
  { test: (p) => p.includes('/gallery/'), maxWidth: 960, quality: 76, label: 'gallery' },
  { test: (p) => p.includes('/articles/'), maxWidth: 1400, quality: 80, label: 'article' },
  {
    test: (p) => /(^|\/)(about|articles|contact|home|methodology|services|work|home-hero-editorial)-hero\.(png|jpe?g)$/.test(p),
    maxWidth: 1920,
    quality: 75,
    label: 'page-hero',
  },
  { test: () => true, maxWidth: 1600, quality: 80, label: 'screenshot' },
];

function categorize(relPath) {
  const normalized = '/' + relPath.replace(/\\/g, '/');
  return CATEGORIES.find((c) => c.test(normalized));
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full));
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

async function convertOne(absPath) {
  const relPath = path.relative(imagesDir, absPath);
  const category = categorize(relPath);
  const outPath = absPath.replace(/\.(png|jpe?g)$/i, '.webp');

  const originalSize = fs.statSync(absPath).size;
  if (originalSize === 0) {
    console.log(`  ⚠ skip (0 bytes): ${relPath}`);
    return null;
  }

  const image = sharp(absPath);
  const metadata = await image.metadata();
  const targetWidth = metadata.width && metadata.width > category.maxWidth ? category.maxWidth : undefined;

  if (isDryRun) {
    console.log(`  [dry-run] ${relPath} (${category.label}, ${metadata.width}x${metadata.height} -> max ${category.maxWidth}w, q${category.quality})`);
    return { relPath, originalSize, newSize: null };
  }

  const pipeline = targetWidth ? image.resize({ width: targetWidth, withoutEnlargement: true }) : image;
  await pipeline.webp({ quality: category.quality }).toFile(outPath);

  const newSize = fs.statSync(outPath).size;
  console.log(
    `  ✓ ${relPath} (${category.label}) ${(originalSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB`
  );
  return { relPath, originalSize, newSize };
}

async function main() {
  const targets = explicitTargets.length > 0 ? explicitTargets.map((t) => path.resolve(rootDir, t)) : walk(imagesDir);

  console.log(`${isDryRun ? '[DRY RUN] ' : ''}Converting ${targets.length} image(s) to WebP...\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  let converted = 0;

  for (const target of targets) {
    const result = await convertOne(target);
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize || 0;
      converted++;
    }
  }

  console.log(`\n${converted} file(s) processed.`);
  if (!isDryRun) {
    console.log(`Total: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB -> ${(totalNew / 1024 / 1024).toFixed(1)}MB`);
  }
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});

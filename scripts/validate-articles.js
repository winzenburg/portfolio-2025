#!/usr/bin/env node

/**
 * Article Metadata Validation Script
 *
 * Validates consistency between:
 * - Articles.tsx metadata
 * - Article component files
 * - App.tsx routes
 * - Hero images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function header(message) {
  log(`\n${colors.bold}${'='.repeat(60)}${colors.reset}`);
  log(`${colors.bold}${message}${colors.reset}`);
  log(`${colors.bold}${'='.repeat(60)}${colors.reset}\n`);
}

// Convert slug to PascalCase component name
function slugToPascalCase(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Extract article metadata from Articles.tsx
function extractArticlesMetadata() {
  const articlesPath = path.join(rootDir, 'client/src/pages/Articles.tsx');
  const content = fs.readFileSync(articlesPath, 'utf-8');

  // Extract the articles array using regex
  const arrayMatch = content.match(/const articles: Article\[\] = \[([\s\S]*?)\];/);
  if (!arrayMatch) {
    throw new Error('Could not find articles array in Articles.tsx');
  }

  const articlesStr = arrayMatch[1];
  const articles = [];

  // Parse each article object
  const articleRegex = /\{[\s\S]*?id:\s*"(\d+)"[\s\S]*?title:\s*"([^"]*)"[\s\S]*?excerpt:\s*"([^"]*)"[\s\S]*?date:\s*"([^"]*)"[\s\S]*?readTime:\s*"([^"]*)"[\s\S]*?slug:\s*"([^"]*)"[\s\S]*?category:\s*"([^"]*)"\s*\}/g;

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
    });
  }

  return articles;
}

// Extract date and readTime from article component
function extractComponentMetadata(componentPath) {
  if (!fs.existsSync(componentPath)) {
    return null;
  }

  const content = fs.readFileSync(componentPath, 'utf-8');

  // Extract date - look for patterns like "January 15, 2025" inside <span> or quotes
  // Common patterns:
  // <span>August 14, 2025</span>
  // <time>January 15, 2025</time>
  // "January 15, 2025"
  const dateMatch = content.match(/<(?:span|time)[^>]*>([A-Za-z]+\s+\d+,\s+\d{4})<\/(?:span|time)>/i) ||
                    content.match(/(?:date|time)[^>]*>([A-Za-z]+\s+\d+,\s+\d{4})</i) ||
                    content.match(/"([A-Za-z]+\s+\d+,\s+\d{4})"/);

  // Extract read time - look for patterns like "9 min read" inside <span> or quotes
  // <span>6 min read</span>
  // "8 min read"
  const readTimeMatch = content.match(/<span[^>]*>(\d+\s+min\s+read)<\/span>/i) ||
                        content.match(/"(\d+\s+min\s+read)"/i) ||
                        content.match(/(\d+\s+min\s+read)/i);

  return {
    date: dateMatch ? dateMatch[1] : null,
    readTime: readTimeMatch ? readTimeMatch[1] : null,
  };
}

// Check if route exists in App.tsx
function checkRouteExists(slug) {
  const appPath = path.join(rootDir, 'client/src/App.tsx');
  const content = fs.readFileSync(appPath, 'utf-8');

  const routePattern = new RegExp(`<Route\\s+path="\/articles\/${slug}"`, 'i');
  return routePattern.test(content);
}

// Check if import exists in App.tsx
function checkImportExists(componentName) {
  const appPath = path.join(rootDir, 'client/src/App.tsx');
  const content = fs.readFileSync(appPath, 'utf-8');

  const importPattern = new RegExp(`import\\s+${componentName}\\s+from`, 'i');
  return importPattern.test(content);
}

// Check if hero image exists
function checkHeroImageExists(slug) {
  const possibleExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const imageDir = path.join(rootDir, 'client/public/images/articles');

  for (const ext of possibleExtensions) {
    const imagePath = path.join(imageDir, `${slug}-hero${ext}`);
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      const sizeKB = Math.round(stats.size / 1024);
      return { exists: true, path: imagePath, size: sizeKB };
    }
  }

  return { exists: false };
}

// Main validation function
function validateArticles() {
  header('Article Metadata Validation Report');

  const articles = extractArticlesMetadata();
  log(`Found ${articles.length} articles in Articles.tsx\n`, 'cyan');

  let totalIssues = 0;
  let totalWarnings = 0;
  const results = [];

  articles.forEach((article, index) => {
    const componentName = slugToPascalCase(article.slug);
    const componentPath = path.join(rootDir, `client/src/pages/articles/${componentName}.tsx`);

    log(`\n[${index + 1}/${articles.length}] Validating: ${article.title}`, 'bold');
    log(`  Slug: ${article.slug}`, 'blue');
    log(`  Component: ${componentName}.tsx`, 'blue');

    const issues = [];
    const warnings = [];

    // Check 1: Component file exists
    const componentExists = fs.existsSync(componentPath);
    if (!componentExists) {
      issues.push(`Component file not found: ${componentName}.tsx`);
      log(`  ✗ Component file missing`, 'red');
    } else {
      log(`  ✓ Component file exists`, 'green');
    }

    // Check 2: Route exists in App.tsx
    const routeExists = checkRouteExists(article.slug);
    if (!routeExists) {
      issues.push(`Route missing in App.tsx: /articles/${article.slug}`);
      log(`  ✗ Route missing in App.tsx`, 'red');
    } else {
      log(`  ✓ Route exists in App.tsx`, 'green');
    }

    // Check 3: Import exists in App.tsx
    const importExists = checkImportExists(componentName);
    if (!importExists) {
      issues.push(`Import missing in App.tsx: ${componentName}`);
      log(`  ✗ Import missing in App.tsx`, 'red');
    } else {
      log(`  ✓ Import exists in App.tsx`, 'green');
    }

    // Check 4: Metadata matches
    if (componentExists) {
      const componentMetadata = extractComponentMetadata(componentPath);

      if (componentMetadata.date && componentMetadata.date !== article.date) {
        issues.push(`Date mismatch: Articles.tsx="${article.date}" vs Component="${componentMetadata.date}"`);
        log(`  ✗ Date mismatch: "${article.date}" ≠ "${componentMetadata.date}"`, 'red');
      } else if (componentMetadata.date) {
        log(`  ✓ Date matches: ${article.date}`, 'green');
      } else {
        warnings.push(`Could not extract date from component`);
        log(`  ⚠ Could not extract date from component`, 'yellow');
      }

      if (componentMetadata.readTime && componentMetadata.readTime !== article.readTime) {
        issues.push(`ReadTime mismatch: Articles.tsx="${article.readTime}" vs Component="${componentMetadata.readTime}"`);
        log(`  ✗ ReadTime mismatch: "${article.readTime}" ≠ "${componentMetadata.readTime}"`, 'red');
      } else if (componentMetadata.readTime) {
        log(`  ✓ ReadTime matches: ${article.readTime}`, 'green');
      } else {
        warnings.push(`Could not extract readTime from component`);
        log(`  ⚠ Could not extract readTime from component`, 'yellow');
      }
    }

    // Check 5: Hero image exists
    const heroImage = checkHeroImageExists(article.slug);
    if (!heroImage.exists) {
      issues.push(`Hero image not found: ${article.slug}-hero.[jpg|png|webp]`);
      log(`  ✗ Hero image missing`, 'red');
    } else {
      log(`  ✓ Hero image exists: ${heroImage.size}KB`, 'green');

      // Warning if image is too large
      if (heroImage.size > 200) {
        warnings.push(`Hero image is ${heroImage.size}KB (recommended: <200KB)`);
        log(`  ⚠ Hero image is large: ${heroImage.size}KB (should be <200KB)`, 'yellow');
      }
    }

    totalIssues += issues.length;
    totalWarnings += warnings.length;

    results.push({
      article,
      componentName,
      issues,
      warnings,
    });
  });

  // Summary
  header('Validation Summary');

  if (totalIssues === 0 && totalWarnings === 0) {
    log('✓ All articles passed validation!', 'green');
  } else {
    if (totalIssues > 0) {
      log(`Found ${totalIssues} issue(s) that need fixing:`, 'red');
      results.forEach(result => {
        if (result.issues.length > 0) {
          log(`\n${result.article.title} (${result.article.slug}):`, 'red');
          result.issues.forEach(issue => {
            log(`  • ${issue}`, 'red');
          });
        }
      });
    }

    if (totalWarnings > 0) {
      log(`\nFound ${totalWarnings} warning(s):`, 'yellow');
      results.forEach(result => {
        if (result.warnings.length > 0) {
          log(`\n${result.article.title} (${result.article.slug}):`, 'yellow');
          result.warnings.forEach(warning => {
            log(`  • ${warning}`, 'yellow');
          });
        }
      });
    }
  }

  log(''); // Empty line at end

  // Exit with error code if there are issues
  if (totalIssues > 0) {
    process.exit(1);
  }
}

// Run validation
try {
  validateArticles();
} catch (error) {
  log(`\nValidation failed with error:`, 'red');
  log(error.message, 'red');
  log(error.stack, 'red');
  process.exit(1);
}

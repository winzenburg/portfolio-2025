#!/usr/bin/env node

/**
 * One-shot helper: ensure every article component imports and renders
 * <ArticleAuthorBio /> before the newsletter CTA (or before </article>).
 */

import fs from "node:fs";
import { extractArticleComponentPaths } from "./lib/articles-metadata.mjs";

const IMPORT_LINE =
  'import ArticleAuthorBio from "@/components/ArticleAuthorBio";';

function injectFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  let changed = false;

  if (!content.includes("ArticleAuthorBio")) {
    if (content.includes('from "@/components/NewsletterSignup"')) {
      content = content.replace(
        /import NewsletterSignup from "@\/components\/NewsletterSignup";/,
        `import NewsletterSignup from "@/components/NewsletterSignup";\n${IMPORT_LINE}`,
      );
    } else if (content.includes('from "@/components/ResponsiveNav"')) {
      content = content.replace(
        /import ResponsiveNav from "@\/components\/ResponsiveNav";/,
        `import ResponsiveNav from "@/components/ResponsiveNav";\n${IMPORT_LINE}`,
      );
    } else {
      content = `${IMPORT_LINE}\n${content}`;
    }
    changed = true;
  }

  if (!content.includes("<ArticleAuthorBio")) {
    if (content.includes("<NewsletterSignup")) {
      content = content.replace(
        /(\n)([ \t]*)(<NewsletterSignup[\s\S]*?\/>)/,
        `$1$2<ArticleAuthorBio />\n$2$3`,
      );
      changed = true;
    } else if (content.includes("</article>")) {
      content = content.replace(
        /(\n)([ \t]*)(<\/div>\s*\n\s*<\/article>)/,
        `$1$2<ArticleAuthorBio />\n$2$3`,
      );
      changed = true;
    } else {
      console.warn(`  ⚠ Could not place AuthorBio in ${filePath}`);
      return false;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, "utf-8");
  }
  return changed;
}

const paths = [...extractArticleComponentPaths().values()];
let updated = 0;
for (const filePath of paths) {
  if (!fs.existsSync(filePath)) continue;
  if (injectFile(filePath)) {
    updated += 1;
    console.log(`  ✓ ${filePath.split("/").pop()}`);
  }
}

console.log(`✓ Author bio injected/updated in ${updated} article files`);

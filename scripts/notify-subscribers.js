#!/usr/bin/env node

/**
 * New Article Subscriber Notification
 *
 * Sends a Resend broadcast to the newsletter audience (the same audience
 * powering client/src/components/NewsletterSignup.tsx + netlify/functions/
 * subscribe.ts) announcing a newly published article.
 *
 * By default, targets the article at the top of the array in
 * client/src/pages/Articles.tsx, since new articles are always added there
 * "newest first" per that file's own instructions.
 *
 * Usage:
 *   node scripts/notify-subscribers.js                    # notify about the newest article
 *   node scripts/notify-subscribers.js --slug some-slug    # notify about a specific article
 *   node scripts/notify-subscribers.js --dry-run           # preview the email, send nothing
 *   node scripts/notify-subscribers.js --force             # resend even if already logged as sent
 *   node scripts/notify-subscribers.js --test-email you@example.com
 *                                                          # send a single preview copy to one
 *                                                          # address instead of broadcasting to
 *                                                          # the audience (doesn't touch the sent log)
 *
 * Requires in .env:
 *   NEWSLETTER_RESEND_API_KEY (Resend key for the account that owns the
 *                              "Winzenburg.com" audience + winzenburg.com
 *                              sending domain - distinct from RESEND_API_KEY,
 *                              which is scoped to unrelated LinkedIn content
 *                              automation scripts on a different account)
 *   RESEND_AUDIENCE_ID        (same audience used by subscribe.ts / unsubscribe.ts)
 *   NEWSLETTER_FROM_EMAIL     (optional, defaults to below - must be a Resend-verified domain)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import { Resend } from 'resend';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const dotenvPath = path.join(rootDir, '.env');
if (fs.existsSync(dotenvPath)) {
  dotenv.config({ path: dotenvPath });
}

const SITE_URL = 'https://winzenburg.com';
const LOG_PATH = path.join(rootDir, 'logs', 'newsletter-notifications.json');
const DEFAULT_FROM = 'Ryan Winzenburg <newsletter@winzenburg.com>';

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const force = args.includes('--force');
const slugFlagIndex = args.indexOf('--slug');
const targetSlug = slugFlagIndex !== -1 ? args[slugFlagIndex + 1] : null;
const testEmailFlagIndex = args.indexOf('--test-email');
const testEmail = testEmailFlagIndex !== -1 ? args[testEmailFlagIndex + 1] : null;

/**
 * Parse the "newest first" articles array out of Articles.tsx.
 * Field order is fixed: id, title, excerpt, date, readTime, slug, category, heroImage.
 */
function extractArticles() {
  const articlesPath = path.join(rootDir, 'client/src/pages/Articles.tsx');
  const content = fs.readFileSync(articlesPath, 'utf-8');

  const arrayMatch = content.match(/const articles: Article\[\] = \[([\s\S]*?)\n\];/);
  if (!arrayMatch) {
    throw new Error('Could not find "const articles: Article[] = [...]" in Articles.tsx');
  }

  const objectRegex =
    /\{\s*id:\s*"([^"]*)",\s*title:\s*"((?:[^"\\]|\\.)*)",\s*excerpt:\s*"((?:[^"\\]|\\.)*)",\s*date:\s*"([^"]*)",\s*readTime:\s*"([^"]*)",\s*slug:\s*"([^"]*)",\s*category:\s*"([^"]*)",\s*heroImage:\s*"([^"]*)"\s*\}/g;

  const articles = [];
  let match;
  while ((match = objectRegex.exec(arrayMatch[1])) !== null) {
    articles.push({
      id: match[1],
      title: match[2].replace(/\\"/g, '"'),
      excerpt: match[3].replace(/\\"/g, '"'),
      date: match[4],
      readTime: match[5],
      slug: match[6],
      category: match[7],
      heroImage: match[8],
    });
  }

  return articles;
}

function loadSentLog() {
  try {
    return JSON.parse(fs.readFileSync(LOG_PATH, 'utf-8'));
  } catch {
    return {};
  }
}

function saveSentLog(log) {
  fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });
  fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
}

function buildEmailHtml(article) {
  const articleUrl = `${SITE_URL}/articles/${article.slug}`;
  const heroUrl = article.heroImage
    ? (article.heroImage.startsWith('http') ? article.heroImage : `${SITE_URL}${article.heroImage}`)
    : null;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background-color:#020617; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:600px; margin:0 auto; padding:32px 20px;">
    <div style="text-align:center; margin-bottom:24px;">
      <a href="${SITE_URL}" style="color:#67e8f9; text-decoration:none; font-size:14px; font-weight:600; letter-spacing:0.05em; text-transform:uppercase;">Ryan Winzenburg</a>
    </div>

    <div style="background-color:#0f172a; border:1px solid #1e293b; border-radius:16px; overflow:hidden;">
      ${heroUrl ? `<img src="${heroUrl}" alt="${article.title}" style="width:100%; display:block; max-height:280px; object-fit:cover;" />` : ''}
      <div style="padding:32px;">
        <p style="color:#67e8f9; font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; margin:0 0 12px 0;">
          New Article &middot; ${article.category}
        </p>
        <h1 style="color:#ffffff; font-size:26px; line-height:1.3; margin:0 0 16px 0;">
          ${article.title}
        </h1>
        <p style="color:#cbd5e1; font-size:16px; line-height:1.6; margin:0 0 28px 0;">
          ${article.excerpt}
        </p>
        <p style="color:#64748b; font-size:14px; margin:0 0 28px 0;">
          ${article.date} &middot; ${article.readTime}
        </p>
        <a href="${articleUrl}" style="display:inline-block; background-color:#0891b2; color:#ffffff; text-decoration:none; font-weight:600; font-size:15px; padding:14px 28px; border-radius:10px;">
          Read the full article &rarr;
        </a>
      </div>
    </div>

    <div style="text-align:center; margin-top:32px; color:#475569; font-size:12px; line-height:1.6;">
      <p style="margin:0 0 8px 0;">You're getting this because you subscribed at winzenburg.com.</p>
      <p style="margin:0;"><a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#64748b; text-decoration:underline;">Unsubscribe</a></p>
    </div>
  </div>
</body>
</html>
`.trim();
}

function buildEmailText(article) {
  const articleUrl = `${SITE_URL}/articles/${article.slug}`;
  return `
New Article: ${article.title}
${article.category} · ${article.date} · ${article.readTime}

${article.excerpt}

Read the full article: ${articleUrl}

---
You're getting this because you subscribed at winzenburg.com.
Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}
`.trim();
}

async function main() {
  const apiKey = process.env.NEWSLETTER_RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL || DEFAULT_FROM;

  if (!isDryRun && (!apiKey || !audienceId)) {
    console.error('❌ Missing NEWSLETTER_RESEND_API_KEY or RESEND_AUDIENCE_ID in .env');
    process.exit(1);
  }

  const articles = extractArticles();
  if (articles.length === 0) {
    console.error('❌ No articles found in Articles.tsx');
    process.exit(1);
  }

  const article = targetSlug ? articles.find((a) => a.slug === targetSlug) : articles[0];

  if (!article) {
    console.error(`❌ No article found with slug "${targetSlug}"`);
    process.exit(1);
  }

  console.log(`\n📰 Article: ${article.title}`);
  console.log(`🔗 Slug: ${article.slug}`);
  console.log(`🔧 Mode: ${isDryRun ? 'DRY RUN' : 'LIVE'}\n`);

  const sentLog = loadSentLog();
  if (sentLog[article.slug] && !force && !isDryRun) {
    console.log(`✅ Already notified subscribers about this article on ${sentLog[article.slug].sentAt}.`);
    console.log('   Pass --force to send again.');
    return;
  }

  const subject = `New article: ${article.title}`;
  const html = buildEmailHtml(article);
  const text = buildEmailText(article);

  if (isDryRun) {
    console.log('--- SUBJECT ---');
    console.log(subject);
    console.log('\n--- TEXT PREVIEW ---');
    console.log(text);
    console.log('\n[DRY RUN] Nothing was sent, nothing was logged.');
    return;
  }

  const resend = new Resend(apiKey);

  if (testEmail) {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: testEmail,
      subject: `[TEST] ${subject}`,
      html,
      text,
    });

    if (error || !data) {
      console.error('❌ Failed to send test email:', error);
      process.exit(1);
    }

    console.log(`✅ Test email sent to ${testEmail}.`);
    console.log(`   Email ID: ${data.id}`);
    console.log('   (Not logged as sent - the real broadcast can still go out later.)');
    return;
  }

  const { data: broadcast, error: createError } = await resend.broadcasts.create({
    audienceId,
    from: fromEmail,
    subject,
    html,
    text,
    name: `Article: ${article.title}`,
  });

  if (createError || !broadcast) {
    console.error('❌ Failed to create broadcast:', createError);
    process.exit(1);
  }

  const { error: sendError } = await resend.broadcasts.send(broadcast.id);

  if (sendError) {
    console.error('❌ Broadcast created but failed to send:', sendError);
    console.error(`   You can retry sending broadcast ${broadcast.id} from the Resend dashboard.`);
    process.exit(1);
  }

  sentLog[article.slug] = {
    sentAt: new Date().toISOString(),
    broadcastId: broadcast.id,
  };
  saveSentLog(sentLog);

  console.log(`✅ Broadcast sent to your newsletter audience.`);
  console.log(`   Broadcast ID: ${broadcast.id}`);
  console.log(`   View it at: https://resend.com/broadcasts/${broadcast.id}`);
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});

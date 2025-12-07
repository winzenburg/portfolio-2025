#!/usr/bin/env node

/**
 * Send Weekly LinkedIn Content
 *
 * Automatically sends all LinkedIn posts for a given week via email.
 * Designed to run as a scheduled task (cron/LaunchAgent).
 *
 * Usage:
 *   node scripts/send-weekly-content.js [week-number]
 *   node scripts/send-weekly-content.js 1
 */

import { config } from 'dotenv';
import nodemailer from 'nodemailer';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, basename, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: resolve(__dirname, '../.env') });

// Configuration
const EMAIL_CONFIG = {
  service: process.env.EMAIL_SERVICE || 'gmail',
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
  to: process.env.EMAIL_TO || process.env.EMAIL_USER,
};

// Validate configuration
if (!EMAIL_CONFIG.user || !EMAIL_CONFIG.pass) {
  console.error('❌ Error: Email credentials not configured in .env file');
  process.exit(1);
}

// Get week number from command line or use current date logic
const weekArg = process.argv[2];
let weekNumber;

if (weekArg) {
  weekNumber = parseInt(weekArg, 10);
  if (isNaN(weekNumber) || weekNumber < 1) {
    console.error('❌ Error: Week number must be a positive integer');
    console.error('Usage: node scripts/send-weekly-content.js [week-number]');
    process.exit(1);
  }
} else {
  // Auto-detect week based on current date
  // Assuming Week 1 starts on a specific date (you can configure this)
  const WEEK_1_START = new Date('2025-10-27'); // Monday of Week 1
  const today = new Date();
  const diffTime = Math.abs(today - WEEK_1_START);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  weekNumber = Math.floor(diffDays / 7) + 1;

  // Cap at 12 weeks (per your content calendar)
  weekNumber = Math.min(weekNumber, 12);
}

console.log(`📅 Processing Week ${weekNumber} content...\n`);

// Find all content files for this week
const linkedinPostsDir = resolve(__dirname, './linkedin-posts');
const weekPattern = new RegExp(`week-?${weekNumber}[-_]`, 'i');
const readyToPostPattern = /READY-TO-POST-.*week-?(\d+)[-_]/i;

let contentFiles = [];

if (existsSync(linkedinPostsDir)) {
  const allFiles = readdirSync(linkedinPostsDir);

  contentFiles = allFiles.filter(file => {
    // Match files like: READY-TO-POST-week1-tuesday.txt
    const match = file.match(readyToPostPattern);
    if (match) {
      const fileWeek = parseInt(match[1], 10);
      return fileWeek === weekNumber;
    }
    return false;
  });
}

// If no READY-TO-POST files found, try to find the week content file
if (contentFiles.length === 0) {
  console.log(`⚠️  No READY-TO-POST files found for Week ${weekNumber}`);
  console.log(`Looking for week-${weekNumber}-*.md files...`);

  // Check if we have a week markdown file we can parse
  const weekFile = `week-${weekNumber}-*.md`;
  const weekFiles = readdirSync(linkedinPostsDir).filter(f =>
    f.startsWith(`week-${weekNumber}-`) && f.endsWith('.md')
  );

  if (weekFiles.length > 0) {
    console.log(`📝 Found: ${weekFiles.join(', ')}`);
    console.log(`\n💡 Tip: Create READY-TO-POST-week${weekNumber}-*.txt files first`);
    console.log(`   Then run this script again.\n`);
  } else {
    console.log(`\n❌ No content found for Week ${weekNumber}`);
    console.log(`\nPlease create content files in one of these formats:`);
    console.log(`   - READY-TO-POST-week${weekNumber}-tuesday.txt`);
    console.log(`   - READY-TO-POST-week${weekNumber}-wednesday.txt`);
    console.log(`   - READY-TO-POST-week${weekNumber}-thursday.txt`);
    console.log(`\nOr:`);
    console.log(`   - week-${weekNumber}-[article-name].md (with post sections)\n`);
  }
  process.exit(1);
}

console.log(`📧 Found ${contentFiles.length} post(s) to send:\n`);
contentFiles.forEach(file => console.log(`   ✓ ${file}`));
console.log('');

// Send each file via email
async function sendContentEmail(contentFilePath, fileName) {
  try {
    const absolutePath = resolve(linkedinPostsDir, contentFilePath);
    const content = readFileSync(absolutePath, 'utf-8');

    // Extract post details from filename
    const articleTitle = fileName
      .replace('.txt', '')
      .replace('.md', '')
      .replace('READY-TO-POST-', '')
      .replace(/week-?\d+-?/i, '')
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    let postType = 'LinkedIn Post';
    if (fileName.includes('tuesday') || fileName.includes('article')) {
      postType = 'Tuesday - Complete Article';
    } else if (fileName.includes('wednesday') || fileName.includes('framework')) {
      postType = 'Wednesday - Tactical Framework';
    } else if (fileName.includes('thursday') || fileName.includes('case-study')) {
      postType = 'Thursday - Case Study';
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: EMAIL_CONFIG.service,
      auth: {
        user: EMAIL_CONFIG.user,
        pass: EMAIL_CONFIG.pass,
      },
    });

    // Email content
    const mailOptions = {
      from: EMAIL_CONFIG.user,
      to: EMAIL_CONFIG.to,
      subject: `✅ Week ${weekNumber} Ready for Review: ${articleTitle} (${postType})`,
      text: `
LinkedIn Content Ready for Review - Week ${weekNumber}
========================================================

Article: ${articleTitle}
Post Type: ${postType}
File: ${fileName}

INSTRUCTIONS:
-------------
1. Review the content below
2. If approved: Copy the content between the dividers
3. Go to https://www.linkedin.com
4. Click "Start a post"
5. Paste content
6. Preview and post (or schedule)
7. Engage with comments in first hour

Remember:
- Best times: Tuesday-Thursday, 8-10am or 12-1pm
- Respond to every comment within 2 hours
- Add value in responses, don't just say "thanks"

CONTENT TO POST:
================================================================================

${content}

================================================================================

QUICK CHECKLIST:
----------------
[ ] Content reviewed and approved
[ ] Article link is correct
[ ] Hashtags are relevant
[ ] Posted or scheduled at optimal time
[ ] Ready to engage when it goes live

--
Automated by Portfolio 2025 Content System
Week ${weekNumber} | Generated: ${new Date().toLocaleString()}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 30px -30px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .header .week-badge {
      background-color: rgba(255,255,255,0.2);
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 14px;
      margin-bottom: 8px;
    }
    .meta {
      background-color: #f8fafc;
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 20px;
      border-left: 4px solid #06b6d4;
    }
    .meta-item {
      margin: 5px 0;
    }
    .meta-label {
      font-weight: 600;
      color: #475569;
    }
    .instructions {
      background-color: #eff6ff;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
      border-left: 4px solid #3b82f6;
    }
    .instructions h3 {
      margin-top: 0;
      color: #1e40af;
    }
    .instructions ol {
      margin: 10px 0;
      padding-left: 20px;
    }
    .content-box {
      background-color: #fafafa;
      border: 2px dashed #cbd5e1;
      padding: 20px;
      border-radius: 6px;
      margin: 20px 0;
      font-family: 'Courier New', monospace;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .checklist {
      background-color: #f0fdf4;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
      border-left: 4px solid #22c55e;
    }
    .checklist h3 {
      margin-top: 0;
      color: #15803d;
    }
    .checklist ul {
      list-style: none;
      padding-left: 0;
    }
    .checklist li:before {
      content: "☐ ";
      color: #22c55e;
      font-weight: bold;
      margin-right: 8px;
    }
    .reminder {
      background-color: #fef3c7;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
      border-left: 4px solid #f59e0b;
    }
    .footer {
      text-align: center;
      color: #64748b;
      font-size: 14px;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="week-badge">Week ${weekNumber}</div>
      <h1>✅ LinkedIn Content Ready for Review</h1>
    </div>

    <div class="meta">
      <div class="meta-item"><span class="meta-label">Article:</span> ${articleTitle}</div>
      <div class="meta-item"><span class="meta-label">Post Type:</span> ${postType}</div>
      <div class="meta-item"><span class="meta-label">Week:</span> ${weekNumber}</div>
      <div class="meta-item"><span class="meta-label">File:</span> ${fileName}</div>
      <div class="meta-item"><span class="meta-label">Generated:</span> ${new Date().toLocaleString()}</div>
    </div>

    <div class="instructions">
      <h3>📋 Instructions</h3>
      <ol>
        <li>Review the content below</li>
        <li>If approved: Copy the content from the gray box</li>
        <li>Go to <a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
        <li>Click "Start a post"</li>
        <li>Paste content and preview</li>
        <li>Post immediately or schedule for optimal time</li>
        <li>Engage with comments in first hour</li>
      </ol>
    </div>

    <div class="reminder">
      <strong>⏰ Remember:</strong>
      <ul style="margin: 10px 0 0 0; padding-left: 20px;">
        <li>Best times: Tuesday-Thursday, 8-10am or 12-1pm</li>
        <li>Respond to every comment within 2 hours</li>
        <li>Add value in responses, don't just say "thanks"</li>
      </ul>
    </div>

    <h3>📄 Content to Post:</h3>
    <div class="content-box">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>

    <div class="checklist">
      <h3>✓ Quick Checklist</h3>
      <ul>
        <li>Content reviewed and approved</li>
        <li>Article link is correct</li>
        <li>Hashtags are relevant</li>
        <li>Posted or scheduled at optimal time</li>
        <li>Ready to engage when it goes live</li>
      </ul>
    </div>

    <div class="footer">
      <p>Automated by Portfolio 2025 Content System</p>
      <p>Week ${weekNumber} | ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId, file: fileName, postType };

  } catch (error) {
    return { success: false, error: error.message, file: fileName };
  }
}

// Send all content files
(async function() {
  console.log(`🚀 Sending emails...\n`);

  const results = [];

  for (const file of contentFiles) {
    const result = await sendContentEmail(file, file);
    results.push(result);

    if (result.success) {
      console.log(`✅ Sent: ${result.postType}`);
      console.log(`   File: ${result.file}`);
      console.log(`   Message ID: ${result.messageId}\n`);
    } else {
      console.error(`❌ Failed: ${result.file}`);
      console.error(`   Error: ${result.error}\n`);
    }
  }

  // Summary
  const successCount = results.filter(r => r.success).length;
  const failCount = results.filter(r => !r.success).length;

  console.log('═══════════════════════════════════════════════════');
  console.log(`📊 Summary for Week ${weekNumber}:`);
  console.log(`   ✅ Sent: ${successCount}`);
  if (failCount > 0) {
    console.log(`   ❌ Failed: ${failCount}`);
  }
  console.log(`   📧 To: ${EMAIL_CONFIG.to}`);
  console.log('═══════════════════════════════════════════════════\n');
  console.log('✨ All emails sent! Check your inbox.\n');

  if (failCount > 0) {
    process.exit(1);
  }
})();

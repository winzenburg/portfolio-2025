#!/usr/bin/env node

/**
 * Send Daily LinkedIn Content
 *
 * Automatically sends the appropriate LinkedIn post based on current day.
 * Designed to run as a scheduled task on Tuesday, Wednesday, Thursday mornings.
 *
 * Usage:
 *   node scripts/send-daily-content.js [week-number] [day]
 *   node scripts/send-daily-content.js 1 tuesday
 *   node scripts/send-daily-content.js  (auto-detects week and day)
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

// Get week and day from command line or auto-detect
const weekArg = process.argv[2];
const dayArg = process.argv[3];

let weekNumber;
let postDay;

if (weekArg && dayArg) {
  // Manual mode
  weekNumber = parseInt(weekArg, 10);
  postDay = dayArg.toLowerCase();

  if (isNaN(weekNumber) || weekNumber < 1) {
    console.error('❌ Error: Week number must be a positive integer');
    console.error('Usage: node scripts/send-daily-content.js [week-number] [day]');
    console.error('Example: node scripts/send-daily-content.js 1 tuesday');
    process.exit(1);
  }

  if (!['tuesday', 'thursday'].includes(postDay)) {
    console.error('❌ Error: Day must be tuesday or thursday');
    console.error('   (Wednesday posts have been discontinued in the new strategy)');
    process.exit(1);
  }
} else {
  // Auto-detect mode
  const WEEK_1_START = new Date('2025-01-13'); // Monday of Week 1
  const today = new Date();

  // Detect day of week (0 = Sunday, 1 = Monday, 2 = Tuesday, etc.)
  const dayOfWeek = today.getDay();
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  postDay = dayNames[dayOfWeek];

  // Only run on Tuesday (2) and Thursday (4)
  if (![2, 4].includes(dayOfWeek)) {
    console.log(`ℹ️  Today is ${postDay.charAt(0).toUpperCase() + postDay.slice(1)}`);
    console.log('📅 LinkedIn posts are only sent on Tuesday and Thursday');
    console.log('   (Wednesday posts discontinued in new strategy)');
    console.log('   Nothing to send today. Exiting.');
    process.exit(0);
  }

  // Calculate week number
  const diffTime = Math.abs(today - WEEK_1_START);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  weekNumber = Math.floor(diffDays / 7) + 1;

  // Cap at 12 weeks (per content calendar)
  weekNumber = Math.min(weekNumber, 12);
}

console.log(`📅 Processing Week ${weekNumber} - ${postDay.charAt(0).toUpperCase() + postDay.slice(1)}'s post\n`);

// Find the content file for this specific day
const linkedinPostsDir = resolve(__dirname, '../linkedin-posts');

// Try STRATEGIC- prefix first (new format), fallback to READY-TO-POST- (legacy)
let fileName = `STRATEGIC-week${weekNumber}-${postDay}.txt`;
let filePath = join(linkedinPostsDir, fileName);

if (!existsSync(filePath)) {
  // Try legacy format
  fileName = `READY-TO-POST-week${weekNumber}-${postDay}.txt`;
  filePath = join(linkedinPostsDir, fileName);

  if (!existsSync(filePath)) {
    console.log(`⚠️  No post found for Week ${weekNumber} - ${postDay}`);
    console.log(`   Expected file: STRATEGIC-week${weekNumber}-${postDay}.txt`);
    console.log(`   Or legacy: READY-TO-POST-week${weekNumber}-${postDay}.txt`);
    console.log(`\n💡 Tip: Create the file at:`);
    console.log(`   ${join(linkedinPostsDir, `STRATEGIC-week${weekNumber}-${postDay}.txt`)}`);
    process.exit(1);
  }
}

console.log(`📧 Found post: ${fileName}\n`);

// Send email
async function sendContentEmail(contentFilePath, fileName, weekNum, day) {
  try {
    const content = readFileSync(contentFilePath, 'utf-8');

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
    const dayCapitalized = day.charAt(0).toUpperCase() + day.slice(1);

    if (day === 'tuesday') {
      postType = `${dayCapitalized} - Strategic Business Case`;
    } else if (day === 'thursday') {
      postType = `${dayCapitalized} - Enterprise Case Study`;
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
      subject: `✅ ${dayCapitalized}'s Post Ready: ${articleTitle} (Week ${weekNum})`,
      text: `
LinkedIn Content Ready for Today - Week ${weekNum} ${dayCapitalized}
=====================================================================

Article: ${articleTitle}
Post Type: ${postType}
Week: ${weekNum}
Day: ${dayCapitalized}
File: ${fileName}

INSTRUCTIONS FOR TODAY:
-----------------------
1. Review the content below
2. If approved: Copy the content between the dividers
3. Go to https://www.linkedin.com
4. Click "Start a post"
5. Paste content
6. Preview and post NOW (or schedule for optimal time today)
7. Engage with comments in first hour

Best times today:
- 8-10am or 12-1pm PST

Remember:
- Respond to every comment within 2 hours
- Add value in responses, don't just say "thanks"
- Stay active for first 60-90 minutes after posting

CONTENT TO POST TODAY:
================================================================================

${content}

================================================================================

QUICK CHECKLIST FOR TODAY:
---------------------------
[ ] Content reviewed and approved
[ ] Article link is correct
[ ] Hashtags are relevant
[ ] Posted at optimal time (8-10am or 12-1pm)
[ ] Ready to engage when it goes live

--
Automated by Portfolio 2025 Content System
Week ${weekNum} ${dayCapitalized} | Generated: ${new Date().toLocaleString()}
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
    .header .day-badge {
      background-color: rgba(255,255,255,0.2);
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: 600;
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
    .today-notice {
      background-color: #fef3c7;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
      border-left: 4px solid #f59e0b;
    }
    .today-notice strong {
      color: #92400e;
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
      <div class="day-badge">Week ${weekNum} • ${dayCapitalized}</div>
      <h1>✅ ${dayCapitalized}'s LinkedIn Post Ready!</h1>
    </div>

    <div class="today-notice">
      <strong>📅 Post this today (${dayCapitalized})!</strong><br>
      Best times: 8-10am or 12-1pm PST
    </div>

    <div class="meta">
      <div class="meta-item"><span class="meta-label">Article:</span> ${articleTitle}</div>
      <div class="meta-item"><span class="meta-label">Post Type:</span> ${postType}</div>
      <div class="meta-item"><span class="meta-label">Week:</span> ${weekNum}</div>
      <div class="meta-item"><span class="meta-label">Day:</span> ${dayCapitalized}</div>
      <div class="meta-item"><span class="meta-label">Generated:</span> ${new Date().toLocaleString()}</div>
    </div>

    <div class="instructions">
      <h3>📋 Instructions for Today</h3>
      <ol>
        <li>Review the content below</li>
        <li>If approved: Copy the content from the gray box</li>
        <li>Go to <a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
        <li>Click "Start a post"</li>
        <li>Paste content and preview</li>
        <li>Post NOW or schedule for optimal time today (8-10am or 12-1pm)</li>
        <li>Engage with comments in first hour</li>
      </ol>
    </div>

    <h3>📄 Content to Post Today:</h3>
    <div class="content-box">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>

    <div class="checklist">
      <h3>✓ Today's Checklist</h3>
      <ul>
        <li>Content reviewed and approved</li>
        <li>Article link is correct</li>
        <li>Hashtags are relevant</li>
        <li>Posted at optimal time</li>
        <li>Ready to engage when it goes live</li>
      </ul>
    </div>

    <div class="footer">
      <p>Automated by Portfolio 2025 Content System</p>
      <p>Week ${weekNum} ${dayCapitalized} | ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId, file: fileName, postType, day: dayCapitalized };

  } catch (error) {
    return { success: false, error: error.message, file: fileName };
  }
}

// Send the email
(async function() {
  console.log(`🚀 Sending ${postDay}'s email...\n`);

  const result = await sendContentEmail(filePath, fileName, weekNumber, postDay);

  if (result.success) {
    console.log(`✅ Email sent successfully!`);
    console.log(`📧 To: ${EMAIL_CONFIG.to}`);
    console.log(`📝 Subject: ${result.day}'s Post Ready (Week ${weekNumber})`);
    console.log(`🆔 Message ID: ${result.messageId}`);
    console.log(`\n✨ Check your email and post today!\n`);
  } else {
    console.error(`❌ Failed to send email`);
    console.error(`   Error: ${result.error}\n`);
    process.exit(1);
  }
})();

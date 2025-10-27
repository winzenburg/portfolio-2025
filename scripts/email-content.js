#!/usr/bin/env node

/**
 * Email LinkedIn Content for Review
 *
 * Sends prepared LinkedIn content via email for human review before posting.
 * Usage: node scripts/email-content.js <content-file-path>
 */

import { config } from 'dotenv';
import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';
import { resolve, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: resolve(__dirname, '../.env') });

// Configuration from environment variables
const EMAIL_CONFIG = {
  service: process.env.EMAIL_SERVICE || 'gmail', // 'gmail', 'outlook', 'yahoo', etc.
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
  to: process.env.EMAIL_TO || process.env.EMAIL_USER,
};

// Validate configuration
if (!EMAIL_CONFIG.user || !EMAIL_CONFIG.pass) {
  console.error('❌ Error: Email credentials not configured');
  console.error('\nPlease set environment variables:');
  console.error('  EMAIL_SERVICE=gmail (or outlook, yahoo, etc.)');
  console.error('  EMAIL_USER=your-email@gmail.com');
  console.error('  EMAIL_PASS=your-app-password');
  console.error('  EMAIL_TO=recipient@email.com (optional, defaults to EMAIL_USER)');
  console.error('\nFor Gmail: https://support.google.com/accounts/answer/185833');
  process.exit(1);
}

async function sendContentEmail(contentFilePath) {
  try {
    // Read content file
    const absolutePath = resolve(contentFilePath);

    let content;
    try {
      content = readFileSync(absolutePath, 'utf-8');
    } catch (error) {
      throw new Error(`File not found: ${contentFilePath}`);
    }

    const fileName = basename(contentFilePath);

    // Extract article title from filename or content
    const articleTitle = fileName
      .replace('.txt', '')
      .replace('.md', '')
      .replace('READY-TO-POST-', '')
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Determine post type (Tuesday, Wednesday, Thursday)
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
      subject: `✅ Ready for Review: ${articleTitle} (${postType})`,
      text: `
LinkedIn Content Ready for Review
==================================

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

Need to make edits? Reply to this email with changes or edit the file at:
${absolutePath}

--
Automated by Portfolio 2025 Content System
Generated: ${new Date().toLocaleString()}
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
    .button {
      display: inline-block;
      background-color: #06b6d4;
      color: white;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ LinkedIn Content Ready for Review</h1>
    </div>

    <div class="meta">
      <div class="meta-item"><span class="meta-label">Article:</span> ${articleTitle}</div>
      <div class="meta-item"><span class="meta-label">Post Type:</span> ${postType}</div>
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

    <p style="margin-top: 30px;">
      <strong>Need to make edits?</strong> Reply to this email with changes or edit the file at:<br>
      <code style="background-color: #f1f5f9; padding: 4px 8px; border-radius: 4px;">${absolutePath}</code>
    </p>

    <div class="footer">
      <p>Automated by Portfolio 2025 Content System</p>
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully!');
    console.log(`📧 To: ${EMAIL_CONFIG.to}`);
    console.log(`📝 Subject: Ready for Review: ${articleTitle} (${postType})`);
    console.log(`🆔 Message ID: ${info.messageId}`);
    console.log('\nContent is ready for your review. Check your email!');

  } catch (error) {
    console.error('❌ Error sending email:', error.message);

    if (error.message.includes('Invalid login')) {
      console.error('\n💡 Tip: For Gmail, you need an App Password, not your regular password.');
      console.error('   Generate one at: https://support.google.com/accounts/answer/185833');
    }

    process.exit(1);
  }
}

// Main execution
const contentFile = process.argv[2];

if (!contentFile) {
  console.error('Usage: node scripts/email-content.js <content-file-path>');
  console.error('\nExample:');
  console.error('  node scripts/email-content.js linkedin-posts/READY-TO-POST-design-systems-fail-tuesday.txt');
  process.exit(1);
}

sendContentEmail(contentFile);

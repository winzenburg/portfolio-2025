/**
 * Generate Images using Google AI (Imagen / Gemini)
 * 
 * Workflow:
 * 1. Checks for GOOGLE_API_KEY
 * 2. Parses client/src/pages/Articles.tsx to get article metadata
 * 3. Generates a prompt using Claude (or Gemini)
 * 4. Prints the prompt for use in Google AI Studio
 */

import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const articlesFile = path.join(__dirname, '../client/src/pages/Articles.tsx');
const imagesDir = path.join(__dirname, '../client/public/images/articles');

// Ensure images directory exists
await fs.mkdir(imagesDir, { recursive: true });

async function getArticles() {
  const content = await fs.readFile(articlesFile, 'utf-8');
  
  // Extract the articles array
  const match = content.match(/const articles: Article\[\] = \[([\s\S]*?)\];/);
  if (!match) throw new Error('Could not find articles array in Articles.tsx');
  
  const arrayContent = match[1];
  
  // Parse objects manually since it's TS code, not JSON
  // We'll use regex to match each object block { ... }
  // This is a simple parser, might be brittle if code style changes drastically
  const articleObjects = [];
  const objectRegex = /{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*readTime:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*heroImage:\s*"([^"]+)"\s*}/g;
  
  let m;
  while ((m = objectRegex.exec(arrayContent)) !== null) {
    articleObjects.push({
      id: m[1],
      title: m[2],
      excerpt: m[3],
      date: m[4],
      readTime: m[5],
      slug: m[6],
      category: m[7],
      heroImage: m[8]
    });
  }
  
  return articleObjects;
}

async function generatePrompt(article) {
  const message = await anthropic.messages.create({
    model: 'claude-3-haiku-20240307',
    max_tokens: 1000,
    messages: [{
      role: 'user',
      content: `Generate an image generation prompt for this article:
      Title: ${article.title}
      Excerpt: ${article.excerpt}
      Category: ${article.category}
      
      Style: Editorial illustration, minimalist architectural, small people, pencil/ink aesthetic, cyan (#06b6d4) and coral (#fb7185) accents, clean, professional, negative space.
      
      Return ONLY the prompt text. No "Here is the prompt:" prefix.`
    }]
  });
  return message.content[0].text;
}

async function main() {
  console.log('🎨 Google AI Image Workflow\n');

  if (!GOOGLE_API_KEY) {
    console.error('❌ GOOGLE_API_KEY not found in .env');
    console.log('   Please add it: GOOGLE_API_KEY=your_key_here');
    process.exit(1);
  }

  const articles = await getArticles();
  console.log(`Found ${articles.length} articles in registry.`);

  for (const article of articles) {
    const filename = path.basename(article.heroImage);
    // Handle cases where heroImage might include path
    const localImagePath = path.join(__dirname, '../client/public', article.heroImage);
    
    // Check if image exists
    try {
      await fs.access(localImagePath);
      // console.log(`⏭️  Image exists for: ${article.title}`);
      continue;
    } catch (e) {
      // Image doesn't exist
    }

    console.log(`\n📄 Processing: ${article.title}`);
    console.log(`   (Slug: ${article.slug})`);
    
    const prompt = await generatePrompt(article);
    
    console.log(`   📝 Prompt: ${prompt}`);
    console.log(`   👉 Copy to Google AI Studio.`);
    console.log(`   💾 Save to: client/public${article.heroImage}`);
    
    // Pause to avoid rate limits
    await new Promise(r => setTimeout(r, 1000));
  }
}

main().catch(console.error);

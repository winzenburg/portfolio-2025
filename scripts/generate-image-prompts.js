/**
 * Generate Image Prompts Script
 * 
 * Generates editorial illustration prompts for all articles using Claude.
 * Style: Minimalist architectural, small people, pencil/ink, cyan/coral accents.
 */

import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const articlesDir = path.join(__dirname, '../client/src/pages/articles');
const OUTPUT_FILE = path.join(__dirname, '../image-prompts.json');

const IMAGE_STYLE = `
Style Guide:
- Editorial illustration style
- Minimalist architectural concepts
- Small people interacting with large abstract systems
- Pencil and ink aesthetic on cream paper texture
- Accent colors: Cyan (#06b6d4) and Coral (#fb7185)
- Clean, professional, yet playful
- White/negative space usage is important
- No text in the image
`;

async function generatePromptsForBatch(batch) {
  const message = await anthropic.messages.create({
    model: 'claude-3-haiku-20240307',
    max_tokens: 4000,
    messages: [
      {
        role: 'user',
        content: `I need image generation prompts for these ${batch.length} articles.
        
        ${IMAGE_STYLE}
        
        For each article, generate a specific, creative prompt that visualizes the core concept metaphorically.
        
        Articles:
        ${JSON.stringify(batch, null, 2)}
        
        Return a valid JSON array of objects with these fields:
        - filename: (the filename provided)
        - title: (the article title)
        - prompt: (the full image generation prompt)
        - negative_prompt: "text, watermark, blurry, realistic photo, 3d render, cartoon, anime"
        
        Return ONLY the raw JSON array. No markdown, no explanations. Ensure the JSON is valid and complete.`
      }
    ]
  });

  const content = message.content[0].text.trim();
  // Clean up any markdown code fences
  const jsonStr = content.replace(/^```json\n/, '').replace(/\n```$/, '').replace(/^```\n/, '');
  
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error('Failed to parse JSON for batch:', e);
    console.error('Content:', jsonStr.substring(0, 100) + '...');
    return [];
  }
}

async function generatePrompts() {
  console.log('🎨 Generating Image Prompts for Articles...\n');
  
  const files = await fs.readdir(articlesDir);
  const articleFiles = files.filter(f => f.endsWith('.tsx'));
  
  const articlesData = [];

  for (const file of articleFiles) {
    const content = await fs.readFile(path.join(articlesDir, file), 'utf-8');
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : file.replace('.tsx', '');
    const excerptMatch = content.match(/subtitle:\s*"([^"]+)"/);
    const excerpt = excerptMatch ? excerptMatch[1] : '';
    
    articlesData.push({ file, title, excerpt });
  }

  console.log(`📋 Found ${articlesData.length} articles.`);
  
  const allPrompts = [];
  const BATCH_SIZE = 5;
  
  for (let i = 0; i < articlesData.length; i += BATCH_SIZE) {
    const batch = articlesData.slice(i, i + BATCH_SIZE);
    console.log(`\n🤖 Processing batch ${Math.floor(i/BATCH_SIZE) + 1}/${Math.ceil(articlesData.length/BATCH_SIZE)}...`);
    
    const prompts = await generatePromptsForBatch(batch);
    allPrompts.push(...prompts);
    
    // Small delay to be nice to API
    await new Promise(r => setTimeout(r, 1000));
  }
  
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(allPrompts, null, 2));
  
  console.log(`\n✅ Generated ${allPrompts.length} prompts to ${OUTPUT_FILE}`);
  return allPrompts;
}

generatePrompts().catch(console.error);

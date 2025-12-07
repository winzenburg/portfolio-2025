#!/usr/bin/env node

/**
 * Test Anthropic API Key
 * 
 * Simple script to verify your Anthropic API key is working correctly.
 */

import { config } from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: resolve(__dirname, '../.env') });

const apiKey = process.env.ANTHROPIC_API_KEY;

console.log('🔑 Testing Anthropic API Key...\n');

if (!apiKey) {
  console.error('❌ Error: ANTHROPIC_API_KEY not found in .env file');
  console.error('\nPlease add your Anthropic API key to .env:');
  console.error('  ANTHROPIC_API_KEY=your-api-key-here');
  console.error('\nGet your API key at: https://console.anthropic.com/');
  process.exit(1);
}

if (apiKey === 'your-anthropic-api-key-here') {
  console.error('❌ Error: API key is still set to placeholder value');
  console.error('\nPlease replace "your-anthropic-api-key-here" with your actual API key in .env');
  process.exit(1);
}

console.log(`✅ API Key found (length: ${apiKey.length} characters)`);
console.log(`   Key starts with: ${apiKey.substring(0, 10)}...\n`);

// Initialize Claude client
const anthropic = new Anthropic({
  apiKey: apiKey,
});

// Test with a simple message
console.log('🤖 Testing API connection...\n');

try {
  // Try models in order of preference
  const modelsToTry = [
    'claude-3-5-sonnet-20241022',
    'claude-3-5-sonnet-20240620', 
    'claude-3-sonnet-20240229',
    'claude-3-haiku-20240307' // Fallback that we know works
  ];
  
  let message;
  let model;
  let lastError;
  
  for (const modelToTry of modelsToTry) {
    try {
      model = modelToTry;
      message = await anthropic.messages.create({
        model: model,
        max_tokens: 50,
        messages: [
          {
            role: 'user',
            content: 'Say "API key is working!" in one sentence.',
          },
        ],
      });
      break; // Success, exit loop
    } catch (error) {
      lastError = error;
      if (modelToTry !== modelsToTry[modelsToTry.length - 1]) {
        console.log(`   Trying next model: ${modelToTry}\n`);
      }
    }
  }
  
  if (!message) {
    throw lastError;
  }

  const content = message.content[0];
  if (content.type === 'text') {
    console.log('✅ API Connection Successful!');
    console.log(`\n📝 Response: ${content.text}\n`);
    console.log('🎉 Your Anthropic API key is working correctly!');
    console.log('   You can now use: pnpm generate-linkedin <article-slug> <week-number>\n');
  } else {
    throw new Error('Unexpected response format');
  }
} catch (error) {
  console.error('\n❌ API Connection Failed');
  console.error(`\nError: ${error.message}\n`);
  
  if (error.message.includes('401') || error.message.includes('authentication')) {
    console.error('💡 This usually means:');
    console.error('   - Your API key is incorrect');
    console.error('   - Your API key has been revoked');
    console.error('   - Check your API key at: https://console.anthropic.com/\n');
  } else if (error.message.includes('429')) {
    console.error('💡 This usually means:');
    console.error('   - You\'ve hit rate limits');
    console.error('   - Wait a moment and try again\n');
  } else {
    console.error('💡 Check your internet connection and try again\n');
  }
  
  process.exit(1);
}

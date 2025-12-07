#!/usr/bin/env node

/**
 * Voice and Tone Loader Utility
 * 
 * Shared utility function to load all voice and tone files
 * for use in Claude prompts. Ensures consistency across all
 * content generation scripts.
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Load all voice and tone files from Winzenburg Voice and Tone directory
 * @returns {string} Formatted content string with all voice/tone guidelines
 */
export function loadVoiceAndToneFiles() {
  const voiceToneDir = resolve(__dirname, '../Winzenburg Voice and Tone');
  const filesToLoad = [
    'brand-voice.yaml',
    'voice-practitioner-articles.yaml',
    'VOICE_QUICK_REFERENCE.md',
    'AUTHENTICITY_QUICK_GUIDE.md',
    'authenticity-markers.yaml',
    'linkedin-writing-framework.yaml',
    'voice-linkedin-executive.yaml',
    'linkedin-strategy.yaml',
  ];

  let voiceToneContent = '\n\n=== WINZENBURG VOICE AND TONE GUIDELINES ===\n\n';
  const loadedFiles = [];
  const failedFiles = [];
  
  for (const file of filesToLoad) {
    const filePath = join(voiceToneDir, file);
    if (existsSync(filePath)) {
      try {
        const content = readFileSync(filePath, 'utf-8');
        voiceToneContent += `\n--- ${file} ---\n${content}\n\n`;
        loadedFiles.push(file);
      } catch (error) {
        console.warn(`⚠️  Could not read ${file}: ${error.message}`);
        failedFiles.push(file);
      }
    } else {
      console.warn(`⚠️  File not found: ${file}`);
      failedFiles.push(file);
    }
  }
  
  if (failedFiles.length > 0) {
    console.warn(`\n⚠️  Warning: ${failedFiles.length} voice/tone file(s) could not be loaded: ${failedFiles.join(', ')}`);
  }
  
  if (loadedFiles.length === 0) {
    throw new Error('No voice and tone files could be loaded. Please check the Winzenburg Voice and Tone directory.');
  }
  
  return voiceToneContent;
}

/**
 * Get a system prompt prefix that includes all voice/tone guidelines
 * @param {string} taskDescription - Description of what the AI should do
 * @returns {string} Complete system prompt with voice/tone guidelines
 */
export function getSystemPromptWithVoiceTone(taskDescription) {
  const voiceToneContent = loadVoiceAndToneFiles();
  
  return `${taskDescription}

${voiceToneContent}

=== ADDITIONAL REQUIREMENTS ===

IMPORTANT: The voice and tone guidelines above are your PRIMARY source of truth. Follow them exactly.`;
}

// If run directly, show what files are loaded
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('📚 Loading Voice and Tone files...\n');
  try {
    const content = loadVoiceAndToneFiles();
    console.log('✅ Voice and Tone files loaded successfully!');
    console.log(`📊 Total content length: ${content.length} characters\n`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}




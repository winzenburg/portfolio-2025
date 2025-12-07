#!/usr/bin/env node

/**
 * Generate Thanksgiving LinkedIn Post
 * 
 * Creates a Thanksgiving-themed LinkedIn post that aligns with
 * Ryan Winzenburg's voice, tone, and content strategy.
 */

import { config } from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';
import { writeFileSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { loadVoiceAndToneFiles } from './load-voice-tone.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: resolve(__dirname, '../.env') });


// Initialize Claude client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('❌ Error: ANTHROPIC_API_KEY not found in .env file');
  process.exit(1);
}

async function generateThanksgivingPost() {
  // Load all voice and tone files
  const voiceToneContent = loadVoiceAndToneFiles();
  
  const systemPrompt = `You are an expert at writing LinkedIn posts in Ryan Winzenburg's voice. You MUST follow ALL the guidelines in the Winzenburg Voice and Tone files provided below exactly.

${voiceToneContent}

=== ADDITIONAL REQUIREMENTS ===

Your task is to write a Thanksgiving-themed LinkedIn post that:
- Aligns with Ryan's "Playful Thought Leader" persona (smartest friend at the coffee shop)
- Speaks to VCs, VP-level executives, and design leaders
- Connects Thanksgiving themes to business/design/leadership insights
- Maintains first-person storytelling voice
- Provides real value, not just holiday fluff

LinkedIn Format Requirements:
- 400-600 words (~2 min read)
- Lead with a narrative hook that stops the scroll
- Use short paragraphs (2-3 sentences max)
- First-person storytelling voice
- Bold headers for section breaks (use **bold**)
- Strategic use of emojis when they add emphasis
- End with clear engagement question
- Use 2-4 hashtags max

Storytelling Requirements:
- Write as a flowing narrative with transitions
- Show the arc: observation → insight → application
- Embed details inline instead of bullet lists
- Use conversational transitions ("Here's the thing", "Real talk:", "Plot twist:")
- Balance reflection with actionable insights
- Include at least one playful or self-deprecating aside
- Close with an empowering takeaway

Authenticity Requirements:
- Include at least two recurring phrases: "Here's the thing though...", "Real talk:", "Plot twist:", "Spoiler alert:", "Let me back up for a second..."
- Reference at least one real moment with concrete details
- Admit at least one mistake, limitation, or learning
- Allow imperfect thinking: occasional tangents, backtracking, or parenthetical asides
- Use conversational quirks: sentence fragments, one-sentence paragraphs, em-dashes, rhetorical questions, contractions
- Vary sentence length (short, medium, long) throughout
- Show real emotions
- Use specific numbers when relevant
- Absolutely avoid corporate/AI tells: never open with "In today's fast-paced world..." or use transitions like "Furthermore", "Moreover", "Additionally", "In conclusion"
- Do not use phrases like "It's important to note...", "One might consider...", "Users may find..."

Brand Voice Requirements:
- Embody the "Playful Thought Leader" persona (smartest friend at the coffee shop)
- Lead with optimism and wit: include at least one light, self-aware joke or playful analogy
- Include enterprise-scale credibility signals when natural
- Frame insights in terms of business impact and strategic thinking
- Maintain executive-level tone: strategic leader, not IC sharing tips
- Keep it approachable, optimistic, and entertaining
- Use hashtags that reinforce executive positioning (#DesignLeadership, #ProductStrategy, #Leadership)

Thanksgiving Theme:
- Connect Thanksgiving (gratitude, reflection, gathering) to business/design/leadership insights
- Could explore: what you're grateful for in your career, lessons learned, team dynamics, the value of reflection, etc.
- Make it relevant to your audience (executives, VCs, design leaders)
- Avoid generic holiday messages - make it substantive and valuable

Output ONLY the LinkedIn post content. Do not include any meta information, explanations, or markdown formatting beyond what's specified above.`;

  const userPrompt = `Write a Thanksgiving-themed LinkedIn post in Ryan Winzenburg's voice. 

The post should:
- Connect Thanksgiving themes (gratitude, reflection, gathering) to insights about design, product, leadership, or AI
- Be substantive and valuable to VCs, VP-level executives, and design leaders
- Sound like a conversation with your smartest friend at the coffee shop
- Include real stories, specific details, and authentic voice markers
- End with an engagement question

Make it feel genuine, insightful, and perfectly aligned with the "Playful Thought Leader" persona.`;

  try {
    // Try best model first, fallback to available model
    let message;
    const modelsToTry = [
      'claude-3-5-sonnet-20241022',
      'claude-3-5-sonnet-20240620',
      'claude-3-sonnet-20240229',
      'claude-3-haiku-20240307'
    ];
    
    for (const model of modelsToTry) {
      try {
        message = await anthropic.messages.create({
          model: model,
          max_tokens: 4096,
          system: systemPrompt,
          messages: [
            {
              role: 'user',
              content: userPrompt,
            },
          ],
        });
        break; // Success, exit loop
      } catch (error) {
        if (model === modelsToTry[modelsToTry.length - 1]) {
          // Last model failed, throw error
          throw error;
        }
        // Try next model
        continue;
      }
    }

    const content = message.content[0];
    if (content.type === 'text') {
      return content.text;
    }
    throw new Error('Unexpected response format from Claude');
  } catch (error) {
    console.error(`❌ Error generating post:`, error.message);
    throw error;
  }
}

// Main execution
(async function() {
  try {
    console.log('🦃 Generating Thanksgiving LinkedIn post...\n');

    const post = await generateThanksgivingPost();
    
    const fileName = `thanksgiving-2024.txt`;
    const filePath = join(__dirname, './linkedin-posts', fileName);
    writeFileSync(filePath, post, 'utf-8');
    
    console.log(`✅ Saved: ${fileName}`);
    console.log(`📁 Location: ${filePath}\n`);
    console.log('📄 Post preview:');
    console.log('─'.repeat(60));
    console.log(post.substring(0, 300) + '...\n');
    console.log('─'.repeat(60));
    console.log(`\n💡 Next steps:`);
    console.log(`   1. Review the full post: ${filePath}`);
    console.log(`   2. Make any edits if needed`);
    console.log(`   3. Post to LinkedIn when ready!\n`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
})();


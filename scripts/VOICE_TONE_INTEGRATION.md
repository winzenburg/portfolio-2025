# Voice and Tone Integration

All content generation scripts now automatically load and use **all** files from the `Winzenburg Voice and Tone` directory.

## ✅ Scripts Updated

All scripts that generate content using Claude now include the complete voice and tone guidelines:

1. **`generate-linkedin-from-article.js`** ✅
   - Generates Tuesday and Thursday LinkedIn posts from articles
   - Uses all voice/tone files

2. **`generate-thanksgiving-post.js`** ✅
   - Generates special holiday posts
   - Uses all voice/tone files

## 📚 Voice and Tone Files Loaded

The following files are automatically loaded and included in every Claude prompt:

- `brand-voice.yaml` - Core brand voice and personality
- `VOICE_QUICK_REFERENCE.md` - Quick reference guide
- `AUTHENTICITY_QUICK_GUIDE.md` - Authenticity markers
- `authenticity-markers.yaml` - Detailed authenticity requirements
- `linkedin-writing-framework.yaml` - LinkedIn-specific framework
- `voice-linkedin-executive.yaml` - Executive-level voice guidelines
- `linkedin-strategy.yaml` - LinkedIn content strategy

## 🔧 Shared Utility

A shared utility function ensures consistency:

**`scripts/load-voice-tone.js`**
- Exports `loadVoiceAndToneFiles()` function
- Can be imported by any script that needs voice/tone guidelines
- Automatically loads all files from `Winzenburg Voice and Tone/` directory
- Provides error handling and warnings if files are missing

## 📝 Usage in New Scripts

When creating new content generation scripts, import and use the utility:

```javascript
import { loadVoiceAndToneFiles } from './load-voice-tone.js';

async function generateContent() {
  // Load all voice and tone files
  const voiceToneContent = loadVoiceAndToneFiles();
  
  const systemPrompt = `You are writing content for Ryan Winzenburg. 
  
${voiceToneContent}

=== YOUR SPECIFIC REQUIREMENTS ===
...`;
}
```

## ✨ Benefits

1. **Consistency**: All content follows the same voice and tone guidelines
2. **Maintainability**: Update voice/tone files once, all scripts use the updates
3. **Completeness**: Claude receives full guidelines, not just summaries
4. **Future-proof**: New scripts can easily use the same guidelines

## 🔍 Verification

To verify voice/tone files are loading correctly:

```bash
node scripts/load-voice-tone.js
```

This will show which files were loaded and any warnings.

## 📋 Checklist for New Scripts

When creating a new content generation script:

- [ ] Import `loadVoiceAndToneFiles` from `./load-voice-tone.js`
- [ ] Call `loadVoiceAndToneFiles()` before creating the system prompt
- [ ] Include the voice/tone content in the system prompt
- [ ] Test that files load correctly
- [ ] Verify generated content follows voice/tone guidelines

---

**Last Updated**: All scripts updated to use shared voice/tone loader
**Status**: ✅ All content generation scripts now use complete voice/tone guidelines




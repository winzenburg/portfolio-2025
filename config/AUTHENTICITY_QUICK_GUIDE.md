# Authenticity Quick Guide

**Make AI content sound unmistakably HUMAN**

## The Problem

AI-generated content has telltale signs:
- ❌ Too perfect and polished
- ❌ Generic language: "In today's world..."
- ❌ Overly helpful assistant energy
- ❌ No personality quirks or recurring phrases
- ❌ Perfect structure (every paragraph 3-4 sentences)
- ❌ No mistakes, no rough edges, no tangents

## The Solution: Your Authenticity Markers

### 1. Use YOUR Recurring Phrases

Use a few signature phrases, but **don't over-repeat them across multiple articles**:
- Prefer **0–1 signature phrases per article**.
- Rotate phrasing so openings don’t feel templated (avoid repeating the same hook like "Picture this:" across posts).

Examples (use sparingly):
- "Real talk:"
- "Let me back up for a second..."
- "Not gonna lie:"

**Why it works**: Real humans use the same phrases repeatedly. It's a signature.

### 2. Get SPECIFIC

```diff
- ❌ "I recently tested an AI tool."
+ ✅ "Last Tuesday at 3 PM, I tested Perplexity for 47 minutes."

- ❌ "This saved me a lot of time."
+ ✅ "This turned a 6-hour task into 22 minutes."

- ❌ "Many people struggle with this."
+ ✅ "I asked 23 PMs—19 said this was their #1 pain."
```

**Why it works**: Generic = AI. Specific = Human.

### 3. Admit Mistakes & Limitations

Include at least ONE per article:
- "I screwed this up twice before figuring it out:"
- "I spent $500 learning this the hard way:"
- "First time I tried? Complete disaster:"
- "I haven't tested this at scale, so grain of salt."

**Why it works**: AI tries to be perfect. Humans screw up.

### 4. Show Imperfect Thinking

```markdown
"I tried Perplexity and—wait, I should back up. I'd already wasted
3 hours on Google at this point. Anyway, Perplexity gave me...
OK, before I tell you what it gave me, you need to know what
question I asked, because that's the whole trick."
```

**Why it works**: Real stories backtrack and digress.

### 5. Use Conversational Quirks

- **Fragments**. For emphasis.
- **One-sentence paragraphs**.
- (Parenthetical asides like this!)
- Questions to the reader?
- Em-dashes—they add rhythm
- Start with "And" or "But" (grammar police can cope)
- Contractions everywhere: "don't" not "do not"

**Why it works**: This is how humans actually write when they're being conversational.

### 6. Vary Sentence Length

```markdown
Short.

Medium length to explain something.

Then a really long sentence that digs into the details and shows you're
thinking it through carefully without trying to make everything perfectly
structured and polished.
```

**Why it works**: AI loves consistent rhythm. Humans vary.

### 7. Show Real Emotions

```diff
- ❌ "The results were impressive."
+ ✅ "This blew my mind:"

- ❌ "There were some challenges."
+ ✅ "Not gonna lie, I was frustrated when..."

- ❌ "The outcome was unexpected."
+ ✅ "Plot twist: it actually worked. I was shocked."
```

**Why it works**: Real reactions, not sanitized descriptions.

## What to AVOID (AI Tells)

### Never Start With:
- ❌ "In today's fast-paced world..."
- ❌ "As we all know..."
- ❌ "It's no secret that..."
- ❌ "With the rise of..."
- ❌ "In recent years..."

### Never Use These Transitions:
- ❌ "Furthermore..."
- ❌ "Moreover..."
- ❌ "Additionally..."
- ❌ "Subsequently..."
- ❌ "In conclusion..."

### Never Sound Like This:
- ❌ "It's important to note that..."
- ❌ "One might consider..."
- ❌ "Users may find..."
- ❌ "Consider the following..."

## In Your YAML File

```yaml
# Add to any article YAML:

authenticity_level: "high"  # medium, high, or very_high

authenticity_markers:
  - "use_recurring_phrases"
  - "include_personal_story"
  - "admit_mistake"
  - "conversational_asides"
  - "specific_numbers"

voice_quirks:
  favorite_phrases:
    - "Here's the thing though..."
    - "Plot twist:"
    - "Real talk:"

  style_notes: |
    - Use em-dashes frequently—natural rhythm
    - Parentheticals for asides (like this!)
    - Fragments for emphasis
    - Contractions 90% of the time
```

## Before/After Example

### ❌ AI-Sounding Version

> "In recent years, AI-powered tools have revolutionized the product
> validation process. By leveraging these technologies, product managers
> can significantly reduce the time required to validate market demand.
> Additionally, these tools provide valuable insights. Furthermore,
> proper implementation is crucial for success."

**Problems**:
- Generic opening: "In recent years..."
- Corporate speak: "leveraging", "implementation"
- AI transitions: "Additionally", "Furthermore"
- No personality, no stories, no specifics
- Perfect structure, no rough edges

### ✅ Authentic Version

> "Last month I validated three ideas in the time it used to take me to
> validate one. Not because I got faster at interviews—because I finally
> figured out how to use AI without it hallucinating competitor names that
> don't exist.
>
> (Yes, that happened. Twice.)
>
> Here's the thing though: the AI didn't get better. I just learned which
> questions to ask. And that made all the difference."

**Why it works**:
- Specific timeframe: "Last month"
- Concrete numbers: "three ideas"
- Personal story with mistake: hallucination admission
- Parenthetical aside with humor
- Recurring phrase: "Here's the thing though..."
- Conversational tone, not corporate
- Shows personality and imperfection

## Quick Authenticity Checklist

Before publishing, ask:

- [ ] Does this sound like ME, or could anyone have written it?
- [ ] Did I include at least ONE specific personal story?
- [ ] Are there 2-3 of my recurring phrases?
- [ ] Did I admit at least ONE mistake or limitation?
- [ ] Would I actually say this in conversation?
- [ ] Varied sentence lengths (short, medium, long)?
- [ ] Using contractions ("I've" not "I have")?
- [ ] At least one tangent or aside?
- [ ] No AI tells (check the "avoid" list above)?
- [ ] Shows real emotion (surprise, frustration, excitement)?

If you answered "no" to more than 2, revise for authenticity.

## The Golden Rule

**If you wouldn't say it over coffee with a friend, rewrite it.**

---

Full details: `config/authenticity-markers.yaml`

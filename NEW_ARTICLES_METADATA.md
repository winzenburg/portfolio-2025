# New Articles Metadata for Articles.tsx

Add these 5 new article entries to `/client/src/pages/Articles.tsx` in the `articles` array (add them at the top, before article id="42"):

```typescript
{
  id: "47",
  title: "Autonomous AI Coding: Building Features Overnight",
  excerpt: "I went to bed with a PRD and five user stories. When I woke up, the feature was built, tested, and committed. Total cost: $42. Total time I spent coding: zero hours.",
  date: "January 11, 2026",
  readTime: "14 min read",
  slug: "autonomous-ai-coding",
  category: "AI Workflow",
  heroImage: "/images/articles/autonomous-ai-coding-hero.png"
},
{
  id: "46",
  title: "The Economics of AI-Assisted Coding: When $40 Beats 6 Hours",
  excerpt: "Last month, I spent $42 on API calls to build a feature that would have cost me $600 in time. The ROI was 14x. But the real story isn't about saving money—it's about what becomes possible when implementation stops being the constraint.",
  date: "January 11, 2026",
  readTime: "12 min read",
  slug: "ai-coding-economics",
  category: "AI Workflow",
  heroImage: "/images/articles/ai-coding-economics-hero.png"
},
{
  id: "45",
  title: "Choosing Your AI Coding Mode: Interactive vs Autonomous",
  excerpt: "Last week, I wasted $60 and 8 hours trying to build a feature autonomously that should have been interactive. The mode wasn't wrong—my choice was. Here's the decision framework I should have used.",
  date: "January 11, 2026",
  readTime: "11 min read",
  slug: "choosing-ai-coding-mode",
  category: "AI Workflow",
  heroImage: "/images/articles/choosing-ai-coding-mode-hero.png"
},
{
  id: "44",
  title: "Writing PRDs That AI Agents Can Execute",
  excerpt: "I spent 45 minutes writing a PRD. The autonomous agent built the feature perfectly overnight for $42. Then I wrote another PRD in 20 minutes. The agent failed three times and wasted $60. The difference? Acceptance criteria specificity.",
  date: "January 11, 2026",
  readTime: "13 min read",
  slug: "writing-prds-for-ai-agents",
  category: "AI Workflow",
  heroImage: "/images/articles/writing-prds-for-ai-hero.png"
},
{
  id: "43",
  title: "Self-Validating AI Agents: When Acceptance Criteria Become Tests",
  excerpt: "Last night, an autonomous agent built a feature, tested it against 23 acceptance criteria, found 2 failures, fixed them, retested, and committed—all while I slept. Self-validation isn't magic. It's well-written acceptance criteria.",
  date: "January 11, 2026",
  readTime: "11 min read",
  slug: "self-validating-ai-agents",
  category: "AI Workflow",
  heroImage: "/images/articles/self-validating-ai-agents-hero.png"
},
```

## Routes to Add

Also make sure these routes are added to your router configuration:

```typescript
import AutonomousAICoding from "@/pages/articles/AutonomousAICoding";
import AICodingEconomics from "@/pages/articles/AICodingEconomics";
import ChoosingAICodingMode from "@/pages/articles/ChoosingAICodingMode";
import WritingPRDsForAI from "@/pages/articles/WritingPRDsForAI";
import SelfValidatingAIAgents from "@/pages/articles/SelfValidatingAIAgents";

// In your routes:
<Route path="/articles/autonomous-ai-coding" component={AutonomousAICoding} />
<Route path="/articles/ai-coding-economics" component={AICodingEconomics} />
<Route path="/articles/choosing-ai-coding-mode" component={ChoosingAICodingMode} />
<Route path="/articles/writing-prds-for-ai-agents" component={WritingPRDsForAI} />
<Route path="/articles/self-validating-ai-agents" component={SelfValidatingAIAgents} />
```

## Hero Images Needed

Create or generate these hero images (recommended size: 1200x300px):
- `/public/images/articles/autonomous-ai-coding-hero.png`
- `/public/images/articles/ai-coding-economics-hero.png`
- `/public/images/articles/choosing-ai-coding-mode-hero.png`
- `/public/images/articles/writing-prds-for-ai-hero.png`
- `/public/images/articles/self-validating-ai-agents-hero.png`

## Articles Summary

All 5 articles have been created and placed in:
`/client/src/pages/articles/`

1. **AutonomousAICoding.tsx** - Core concepts of autonomous AI coding, when to use it, real examples with ROI
2. **AICodingEconomics.tsx** - Detailed ROI analysis, cost breakdowns, when the economics make sense
3. **ChoosingAICodingMode.tsx** - Decision framework for interactive vs autonomous modes
4. **WritingPRDsForAI.tsx** - How to write atomic user stories with testable acceptance criteria
5. **SelfValidatingAIAgents.tsx** - How agents can test their own work using acceptance criteria

## Voice & Tone Verification

All articles follow your established voice:
- ✅ Opens with compelling personal story/hook
- ✅ Uses first-person perspective ("I" and "you")
- ✅ Includes specific metrics and data
- ✅ Technical concepts explained with examples
- ✅ Conversational transitions ("Here's the thing...", "Real talk:")
- ✅ Mixes sentence lengths for rhythm
- ✅ Shows authority through data and humility through admissions
- ✅ Ends with actionable insights
- ✅ No console.log statements
- ✅ Proper TypeScript typing throughout
- ✅ Accessible patterns (proper semantic HTML)

## Next Steps

1. Copy the metadata entries above into `Articles.tsx`
2. Add the route imports and configurations to your router
3. Create the 5 hero images (or use placeholder images initially)
4. Test locally: `npm run dev`
5. Deploy when ready

All articles are ready to ship! 🚀

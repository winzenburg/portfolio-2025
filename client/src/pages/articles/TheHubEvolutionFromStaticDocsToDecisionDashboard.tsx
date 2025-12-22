import { ArrowLeft, ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";

export default function Article() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ResponsiveNav currentPage="articles" />

      {/* Article Header */}
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Link */}
          <Link href="/articles">
            <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </a>
          </Link>

          {/* Hero Image Placeholder */}
          <div className="mb-12 rounded-lg overflow-hidden bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/30">
            <div className="aspect-video flex items-center justify-center">
              <p className="text-slate-500 text-sm">Hero image placeholder</p>
            </div>
          </div>

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>December 14, 2024</span>
            <span>•</span>
            <span>7 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Hub Evolution: From Static Docs to Decision Dashboard
            </h1>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
            <ArticleLayout
      title="The Hub Evolution: From Static Docs to Decision Dashboard"
      description="Most docs systems are graveyards. Here's how we built a living strategy layer that surfaces portfolio status, filters ideas, and drives kill/greenlight decisions."
      date="2025-01-21"
      readTime="8 min"
      category="AI Workflow"
    >
      <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
        <p className="lead">
          I used to dread documentation. We'd write comprehensive PRDs, discovery docs, validation plans—all beautifully formatted in Notion. Then they'd sit there, forgotten, while we built the product.
        </p>

        <p>
          Six months later, a new team member would ask "Why did we build it this way?" and we'd scramble to find the doc. If we found it, it was outdated. The decisions had evolved, but the docs hadn't.
        </p>

        <p>
          Documentation felt like a compliance exercise, not a strategic asset.
        </p>

        <p>
          But here's the thing: <strong>the problem wasn't that we documented too much—it was that documentation was static</strong>.
        </p>

        <p>
          So we built the opposite: <strong>The Hub</strong>—a living, real-time portfolio dashboard that surfaces every idea, every doc, every validation result, and every verdict in one searchable interface.
        </p>

        <div className="bg-cyan-900/20 border-l-4 border-blue-400 p-6 my-8">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-slate-200 font-medium mb-2">PULL QUOTE</p>
              <p className="text-slate-200 text-lg italic">
                "The Hub isn't a graveyard of forgotten docs. It's the control center for our entire SaaS creation pipeline."
              </p>
            </div>
          </div>
        </div>

        <p>
          The Hub answers three critical questions at a glance:
        </p>

        <ol>
          <li><strong>What ideas do we have?</strong> (Portfolio scores, verdicts, priority labels)</li>
          <li><strong>Where are they in the pipeline?</strong> (Discovery, Validation, Build, Scale)</li>
          <li><strong>What should we work on next?</strong> (Filters: Top Priority, Proceed, Pivot)</li>
        </ol>

        <p>
          Real talk: it's become our most-used tool. More than Figma. More than GitHub. More than Slack.
        </p>

        <h2>The Problem: Why Most Docs Are Graveyards</h2>

        <p>
          Let me tell you about the pattern I've seen at every company I've worked with.
        </p>

        <h3>The Typical Death Spiral</h3>

        <p>
          <strong>Phase 1: Enthusiasm</strong>
        </p>

        <p>
          Team decides "we need better docs!" Everyone agrees. Someone (usually me, let's be honest) sets up a Notion workspace or Confluence wiki. Templates get created. Guidelines get written.
        </p>

        <p>
          <strong>Phase 2: Initial Effort</strong>
        </p>

        <p>
          The first few projects get comprehensive documentation—discovery notes, PRDs, technical specs, meeting notes, retrospectives. It feels organized. Leadership is happy. "Finally, we're doing this right."
        </p>

        <p>
          <strong>Phase 3: Decay</strong>
        </p>

        <p>
          New projects start. People are busy. Docs get abbreviated:
        </p>

        <ul>
          <li>"TODO: Fill this in later"</li>
          <li>Copy-paste templates with placeholder text still in them</li>
          <li>Quick notes in Slack that never make it to the wiki</li>
          <li>"It's documented in the code comments" (spoiler: it's not)</li>
        </ul>

        <p>
          <strong>Phase 4: Abandonment</strong>
        </p>

        <p>
          Docs are now half-complete, inconsistent, and outdated. Searching returns nothing useful. Engineers stop checking docs before building. Product managers re-ask questions that were already documented.
        </p>

        <p>
          The wiki becomes a graveyard.
        </p>

        <p>
          I've watched this cycle play out at three different companies. It's not a people problem—it's a system problem.
        </p>

        <h3>Why Documentation Dies</h3>

        <p>
          After debugging this pattern for years, here's what kills docs:
        </p>

        <p>
          <strong>No Single Source of Truth</strong>: Docs scattered across Notion, Google Docs, Slack threads, GitHub issues, Figma comments. No one knows where to look, so they just ask in Slack instead.
        </p>

        <p>
          <strong>No Connection to Decisions</strong>: You can't see which features have docs, which don't, or which docs led to actual decisions versus speculation.
        </p>

        <p>
          <strong>No Status Visibility</strong>: Try answering "how many ideas are in validation?" You'll spend 20 minutes manually auditing folders and still not be sure.
        </p>

        <p>
          <strong>No Decision Support</strong>: Docs don't surface verdicts. You have to read the full discovery doc to find the Opportunity Score, read the validation plan to find the thresholds, read the results doc to see if they passed.
        </p>

        <div className="bg-slate-800/30 p-6 rounded-lg my-8">
          <div className="text-sm text-slate-300 mb-2">STATS CARD</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-2xl font-bold text-white">30 minutes</div>
              <div className="text-sm text-slate-300">Time to get portfolio overview (before Hub)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">10 seconds</div>
              <div className="text-sm text-slate-300">Time to get portfolio overview (with Hub)</div>
            </div>
          </div>
        </div>

        <p>
          <strong>Terrible Search</strong>: Most wikis have search that's somehow worse than Google from 2005. Keyword searches return dozens of irrelevant results. No way to filter by doc type or project status.
        </p>

        <p>
          The result? Tribal knowledge. When docs fail, knowledge lives in people's heads.
        </p>

        <ul>
          <li>"Ask Sarah about the pricing strategy"</li>
          <li>"Check Slack for the original requirements"</li>
          <li>"I think we validated that idea but I'm not sure"</li>
        </ul>

        <p>
          Onboarding new team members takes weeks. Critical decisions get re-litigated because no one remembers the original reasoning.
        </p>

        <p>
          I was tired of this pattern. So we built the opposite.
        </p>

        <h2>The Solution: The Hub as a Living Dashboard</h2>

        <p>
          Here's what we built instead: a portfolio dashboard that automatically discovers, indexes, and surfaces all documentation.
        </p>

        <p>
          The Hub doesn't replace docs—it makes them <strong>findable, filterable, and actionable</strong>.
        </p>

        <h3>What You See When You Open the Hub</h3>

        <p>
          Picture this: you open the Hub and immediately see project cards laid out like this:
        </p>

        <div className="bg-slate-800/30 p-6 rounded-lg font-mono text-sm my-6">
          <div className="border border-slate-600 p-4 mb-4">
            <div className="font-bold">🎯 Habit Tracker for Remote Workers</div>
            <div className="mt-2">Score: 32/40 ⭐⭐⭐⭐⭐ Top Priority</div>
            <div>Verdict: ✅ PROCEED</div>
            <div className="mt-2">
              📂 Discovery: 4/4 docs<br/>
              📂 Validation: 7/7 docs<br/>
              📂 Build: 3/8 docs (in progress)
            </div>
            <div className="mt-2">[View Details →]</div>
          </div>
        </div>

        <p>
          Each card shows everything you need to know:
        </p>

        <ul>
          <li><strong>Project name</strong> (extracted from the folder or portfolio score doc)</li>
          <li><strong>Portfolio score</strong> (0-40, with visual stars)</li>
          <li><strong>Priority label</strong> ("Top Priority" ≥30, "High Priority" 25-29, etc.)</li>
          <li><strong>Verdict badge</strong> (PROCEED = green, PIVOT = yellow, KILL = red)</li>
          <li><strong>Doc counts per phase</strong> (Discovery, Validation, Build)</li>
          <li><strong>Link to detail view</strong> (full list of docs)</li>
        </ul>

        <p>
          At the top, filter buttons let you focus:
        </p>

        <div className="bg-slate-800/30 p-4 rounded-lg font-mono text-sm my-6">
          [All Ideas: 16]  [⭐ Top Priority: 7]<br/>
          [✅ Proceed: 7]  [⚠️ Pivot: 9]
        </div>

        <p>
          Click a filter, the list updates instantly. No loading spinners, no API calls. Just immediate focus.
        </p>

        <p>
          Here's the thing that changed everything for us: <strong>the Hub shows you what matters without making you dig for it</strong>.
        </p>

        <h3>How It Actually Works (The Technical Bits)</h3>

        <p>
          Alright, let me get nerdy for a minute. Here's how the Hub works under the hood.
        </p>

        <p>
          <strong>Step 1: Automatic Document Discovery</strong>
        </p>

        <p>
          The Hub API scans our filesystem and finds all the docs automatically:
        </p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono my-6">
          <div className="text-green-400">// Scan /projects folder for project directories</div>
          <div>const projectFolders = fs.readdirSync('projects');</div>
          <br/>
          <div className="text-green-400">// Scan /docs/portfolio for portfolio score files</div>
          <div>const portfolioScores = fs.readdirSync('docs/portfolio');</div>
          <br/>
          <div className="text-green-400">// For each project, find all docs</div>
          <div>const projects = projectFolders.map(folder =&gt; &#123;</div>
          <div>  const discoveryDocs = findDocs(`projects/$&#123;folder&#125;`, 'discovery');</div>
          <div>  const validationDocs = findDocs(`projects/$&#123;folder&#125;`, 'validation');</div>
          <div>  // ...</div>
          <div>&#125;);</div>
        </div>

        <p>
          <strong>Step 2: Extract  from Docs</strong>
        </p>

        <p>
          For each portfolio score doc, we extract the important bits:
        </p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono my-6">
          <div className="text-green-400">// Extract score (regex: "## Score: 32/40")</div>
          <div>const scoreMatch = content.match(/## Score:\s*(\d+)\/40/);</div>
          <div>const score = scoreMatch ? parseInt(scoreMatch[1]) : null;</div>
          <br/>
          <div className="text-green-400">// Extract verdict (regex: "### Verdict: ✅ **PROCEED**")</div>
          <div>const verdictMatch = content.match(/### Verdict:\s*[✅⚠️❌]?\s*\*?\*?([A-Z]+)\*?\*?/i);</div>
        </div>

        <p>
          <strong>Step 3: Sort by Score, Return JSON</strong>
        </p>

        <p>
          We sort everything by score (highest first) and return structured data to the frontend.
        </p>

        <p>
          The frontend filters and renders project cards based on your selection.
        </p>

        <p>
          Plot twist: the whole thing runs in about 200ms. Why? Because we're just reading files, not hitting a database.
        </p>

        <h2>Real-World Impact: The Before and After</h2>

        <p>
          Let me show you what changed when we launched the Hub three months ago.
        </p>

        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg my-8">
          <div className="font-bold text-cyan-400 mb-3">Before Hub</div>
          
          <p className="text-cyan-400 mb-4"><strong>Portfolio management:</strong></p>
          <ul className="text-slate-200 mb-4">
            <li>"How many ideas do we have?" → Count folders manually</li>
            <li>"Which ones are high priority?" → Open each portfolio score doc</li>
            <li>"Which passed validation?" → Search for RESULTS docs, read each one</li>
          </ul>
          <p className="text-slate-200 font-medium">Time: ~30 minutes to get portfolio overview</p>

          <p className="text-cyan-400 mb-2 mt-4"><strong>Decision making:</strong></p>
          <ul className="text-slate-200 mb-4">
            <li>Kill/greenlight meetings required pre-reading 5-10 docs</li>
            <li>Debate about "did we validate that?" (no quick answer)</li>
            <li>Re-scoring ideas because we forgot the original score</li>
          </ul>

          <p className="text-cyan-400 mb-2"><strong>Onboarding:</strong></p>
          <ul className="text-slate-200">
            <li>New team member: "Where do I start?"</li>
            <li>Answer: "Read the Notion wiki, then check the projects folder, then ask if you have questions"</li>
            <li>Time to productivity: 2-3 weeks</li>
          </ul>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg my-8">
          <div className="font-bold text-cyan-400 mb-3">After Hub</div>
          
          <p className="text-cyan-400 mb-4"><strong>Portfolio management:</strong></p>
          <ul className="text-slate-200 mb-4">
            <li>"How many ideas do we have?" → Look at Hub: 16 total</li>
            <li>"Which ones are high priority?" → Filter by "Top Priority": 7 ideas</li>
            <li>"Which passed validation?" → Filter by "Proceed": 7 ideas</li>
          </ul>
          <p className="text-slate-200 font-medium">Time: 10 seconds to get portfolio overview</p>

          <p className="text-cyan-400 mb-2 mt-4"><strong>Decision making:</strong></p>
          <ul className="text-slate-200 mb-4">
            <li>Kill/greenlight meetings start with Hub open (everyone sees same data)</li>
            <li>Click a project card to review docs on the spot</li>
            <li>Verdicts are visible—no need to re-litigate</li>
          </ul>

          <p className="text-cyan-400 mb-2"><strong>Onboarding:</strong></p>
          <ul className="text-slate-200">
            <li>New team member: "Where do I start?"</li>
            <li>Answer: "Open the Hub. Top priority ideas are in green. Click one, read the docs."</li>
            <li>Time to productivity: 3-5 days</li>
          </ul>
        </div>

        <div className="bg-cyan-900/20 border border-cyan-700/50 p-6 rounded-lg my-8">
          <div className="text-sm text-cyan-400 mb-2">ROI CALCULATION</div>
          <div className="text-cyan-300">
            <strong>~25 hours/month saved</strong> on portfolio management + faster decisions + better onboarding = <strong>~$5,000/month value</strong> (for a 3-person team)
          </div>
        </div>

        <p>
          But here's what really changed: <strong>the quality of our decisions</strong>.
        </p>

        <p>
          Before the Hub, kill/greenlight meetings were painful. We'd debate whether we'd already validated something, or what score we'd given an idea, or whether we had the right docs.
        </p>

        <p>
          Now? We open the Hub. Everyone sees the same data. The verdict is right there. If someone wants to revisit a decision, they can click through to see the original reasoning.
        </p>

        <p>
          Decisions happen faster and stick better.
        </p>

        <h2>What We're Building Next</h2>

        <p>
          The current Hub is v1—functional but basic. Here's what's coming that I'm genuinely excited about:
        </p>

        <h3>Full-Text Search Across Everything</h3>

        <p>
          Right now you can only search project names. Soon: search across all docs.
        </p>

        <p>
          Use case: "Where did we document the pricing strategy for the habit tracker?" Search "pricing habit tracker" → get `PRICING-TEST-habit-tracker.md` with highlighted snippets.
        </p>

        <p>
          Implementation: Index all markdown files, use Fuse.js for fuzzy search. Should be ready next month.
        </p>

        <h3>Inline Doc Viewer</h3>

        <p>
          Click a doc name to view it without leaving the Hub. Modal or side panel with markdown rendering, syntax highlighting, the works.
        </p>

        <p>
          This one's going to be huge for decision-making. Imagine reviewing a PRD or validation plan while staying in portfolio context.
        </p>

        <h3>AI Summarization</h3>

        <p>
          Auto-generate project summaries using Claude. "Summarize the validation results for this idea in 3 bullets."
        </p>

        <p>
          I'm skeptical this will work well (AI summaries are usually too generic), but worth testing.
        </p>

        <h3>Analytics Dashboard</h3>

        <p>
          Portfolio health metrics that actually matter:
        </p>

        <ul>
          <li>"How many ideas did we kill this quarter?"</li>
          <li>"What's our average time from Discovery to Build?"</li>
          <li>"Which ideas have the highest scores but haven't moved to validation?"</li>
        </ul>

        <p>
          This could help us spot patterns in what works versus what doesn't.
        </p>

        <h2>How to Build Your Own Hub</h2>

        <p>
          Alright, you're convinced this would help your team. Here's how to build one.
        </p>

        <p>
          Fair warning: this isn't a weekend project. Budget 2-3 weeks if you're building it properly. But the ROI is worth it if you're managing 10+ ideas.
        </p>

        <h3>Step 1: Choose Your Documentation Structure</h3>

        <p>
          This is the most important decision. The Hub only works with consistent naming conventions.
        </p>

        <p>
          Our structure:
        </p>

        <div className="bg-slate-800/30 p-4 rounded-lg font-mono text-sm my-6">
          /docs<br/>
          &nbsp;&nbsp;/portfolio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(PORTFOLIO-SCORE-&lt;slug&gt;.md)<br/>
          &nbsp;&nbsp;/discovery&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(NICHE-INTEL-&lt;slug&gt;.md, PAIN-SIGNALS-&lt;slug&gt;.md)<br/>
          &nbsp;&nbsp;/validation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(VALIDATION-PLAN-&lt;slug&gt;.md, RESULTS-&lt;slug&gt;.md)<br/>
          &nbsp;&nbsp;/engineering&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(PRD-&lt;slug&gt;.md, ADR-&lt;slug&gt;.md)<br/>
          <br/>
          /projects<br/>
          &nbsp;&nbsp;/idea-slug-1<br/>
          &nbsp;&nbsp;/idea-slug-2
        </div>

        <p>
          Key principle: <strong>Consistent naming conventions</strong>. If your docs don't follow patterns, the Hub can't find them.
        </p>

        <h3>Step 2: Build the API to Scan Docs</h3>

        <p>
          We used Next.js App Router with Node.js `fs` module. You could also use Express, Fastify, whatever you're comfortable with.
        </p>

        <p>
          The core endpoint (`GET /api/hub/projects`) needs to:
        </p>

        <ol>
          <li>Scan the filesystem for portfolio score docs</li>
          <li>Extract metadata (score, verdict, title) using regex</li>
          <li>Count related docs in each phase</li>
          <li>Sort by score (highest first)</li>
          <li>Return JSON</li>
        </ol>

        <p>
          Here's a simplified version of our API route:
        </p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono my-6">
          <div className="text-green-400">// /app/api/hub/projects/route.ts</div>
          <div>export async function GET() &#123;</div>
          <div>&nbsp;&nbsp;const portfolioDir = path.join(process.cwd(), 'docs/portfolio');</div>
          <div>&nbsp;&nbsp;const files = fs.readdirSync(portfolioDir);</div>
          <br/>
          <div>&nbsp;&nbsp;const projects = files</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;.filter(file =&gt; file.startsWith('PORTFOLIO-SCORE-'))</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;.map(file =&gt; &#123;</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const content = fs.readFileSync(path.join(portfolioDir, file), 'utf-8');</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const slug = file.replace('PORTFOLIO-SCORE-', '').replace('.md', '');</div>
          <br/>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">// Extract score</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const scoreMatch = content.match(/## Score:\s*(\d+)\/40/);</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const score = scoreMatch ? parseInt(scoreMatch[1]) : null;</div>
          <br/>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#123; slug, score, verdict &#125;;</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&#125;)</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;.sort((a, b) =&gt; (b.score || 0) - (a.score || 0));</div>
          <br/>
          <div>&nbsp;&nbsp;return Response.json(&#123; projects &#125;);</div>
          <div>&#125;</div>
        </div>

        <h3>Step 3: Build the Frontend</h3>

        <p>
          We used React + TypeScript + Tailwind. You could use Vue, Angular, plain JavaScript—whatever you prefer.
        </p>

        <p>
          Key components:
        </p>

        <ul>
          <li>`&lt;ProjectCard&gt;`: Displays one project with score, verdict, doc counts</li>
          <li>`&lt;FilterButtons&gt;`: Toggles between All/Priority/Proceed/Pivot</li>
          <li>`&lt;ProjectList&gt;`: Maps filtered projects to cards</li>
        </ul>

        <p>
          The filtering happens client-side (fast, no network requests):
        </p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono my-6">
          <div>const filteredProjects = projects.filter(p =&gt; &#123;</div>
          <div>&nbsp;&nbsp;if (filter === 'all') return true;</div>
          <div>&nbsp;&nbsp;if (filter === 'priority') return p.score &gt;= 30;</div>
          <div>&nbsp;&nbsp;if (filter === 'proceed') return p.verdict === 'PROCEED';</div>
          <div>&nbsp;&nbsp;return true;</div>
          <div>&#125;);</div>
        </div>

        <h3>Step 4: Polish the UI</h3>

        <p>
          The visual elements matter more than you think. Verdict badges, priority stars, progress indicators—they make the data scannable.
        </p>

        <p>
          We spent a full day just on making the cards look right. Time well spent.
        </p>

        <h3>Step 5: Deploy and Iterate</h3>

        <p>
          Deploy to Vercel, Netlify, wherever. Get it in front of your team immediately, even if it's rough.
        </p>

        <p>
          Then iterate based on usage:
        </p>

        <ul>
          <li>Add search if people are saying "I can't find X"</li>
          <li>Add doc viewer if people are opening lots of individual docs</li>
          <li>Add analytics if leadership wants portfolio metrics</li>
        </ul>

        <p>
          Don't build features you think you'll need. Build features people are actually asking for.
        </p>

        <h2>Trade-Offs and When to Skip It</h2>

        <p>
          Let me be honest about the downsides.
        </p>

        <p>
          <strong>Requires Consistent Naming</strong>: If your docs don't follow naming conventions, the Hub can't find them. This requires discipline from your team.
        </p>

        <p>
          <strong>Filesystem-Based (Not Database)</strong>: Scanning files is slower than querying a database. No support for real-time updates. Hard to add rich features like comments or version history.
        </p>

        <p>
          <strong>Limited Search (Currently)</strong>: Only project names and slugs. No full-text search yet. No filtering by doc type or content.
        </p>

        <p>
          <strong>No Collaboration Features</strong>: Can't @mention teammates. Can't comment on projects. No notifications for doc updates.
        </p>

        <p>
          Don't build a Hub if:
        </p>

        <ul>
          <li>You have &lt; 5 ideas (a simple folder structure is fine)</li>
          <li>Your docs are already in a tool with good search (Notion with proper tags)</li>
          <li>You're a solo founder (the overhead isn't worth it)</li>
          <li>Your team won't maintain consistent naming conventions</li>
        </ul>

        <p>
          But if you have 10+ ideas, multiple phases, and a need for portfolio visibility, the Hub is transformative.
        </p>

        <h2>The Bigger Picture</h2>

        <p>
          Here's what I've learned building the Hub: <strong>documentation should drive decisions, not gather dust</strong>.
        </p>

        <div className="bg-cyan-900/20 border-l-4 border-blue-400 p-6 my-8">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-slate-200 font-medium mb-2">PULL QUOTE</p>
              <p className="text-slate-200 text-lg italic">
                "Most teams treat docs as artifacts. We treat them as data."
              </p>
            </div>
          </div>
        </div>

        <p>
          The Hub works because it treats docs as structured data, not unstructured artifacts. Every doc has metadata (score, verdict, status). Every metadata field drives a UI element (badges, filters, progress bars).
        </p>

        <p>
          This changes how you think about documentation. Instead of "let's document this for posterity," it becomes "let's structure this so the Hub can surface it."
        </p>

        <p>
          The discipline required (consistent naming, structured metadata) pays dividends in discoverability and decision support.
        </p>

        <h2>What's Next for Us</h2>

        <p>
          We're continuing to evolve the Hub based on how we actually use it:
        </p>

        <ul>
          <li><strong>Full-text search</strong> across all docs (coming next month)</li>
          <li><strong>Workflow status</strong> visual progress bars (Q2)</li>
          <li><strong>Inline doc viewer</strong> read without leaving Hub (Q2)</li>
          <li><strong>Analytics dashboard</strong> portfolio health metrics (Q3)</li>
          <li><strong>AI summarization</strong> auto-generate project summaries (experimenting)</li>
        </ul>

        <p>
          The goal is simple: make the Hub the fastest way to answer any question about our product portfolio.
        </p>

        <p>
          "What ideas are we working on?" → Hub.<br/>
          "Which ones passed validation?" → Hub.<br/>
          "What should we prioritize next?" → Hub.<br/>
          "Where are the docs for that pricing experiment?" → Hub.
        </p>

        <p>
          If you're managing multiple product ideas, I'd encourage you to build something similar. Start with automatic doc discovery, add filters for priority and verdict, and iterate from there.
        </p>

        <p>
          Most docs systems are graveyards. Ours is a living strategy layer that drives every decision we make.
        </p>

        <p>
          What if your documentation did the same?
        </p>

        <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-lg my-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">
              Want to Build Your Own Hub?
            </h3>
            <p className="text-slate-300 mb-6">
              I'm working on open-sourcing our Hub implementation. Get notified when it's ready, plus get access to our documentation templates and naming conventions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                Get the Hub Template
              </button>
              <button className="bg-slate-800/50 hover:bg-gray-200 text-slate-200 px-6 py-3 rounded-lg font-medium">
                View Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <NewsletterSignup />
          </div>

          {/* Next Article Link */}
          <div className="mt-12">
            <Link href="/articles">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

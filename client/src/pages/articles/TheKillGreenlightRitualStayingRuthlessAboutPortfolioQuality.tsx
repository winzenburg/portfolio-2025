import { ArrowLeft, ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";

export default function KillGreenlightRitual() {
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
            <span>December 1, 2024</span>
            <span>•</span>
            <span>6 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Kill/Greenlight Ritual: Staying Ruthless About Portfolio Quality
            </h1>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
            <BlogPost
      title="The Kill/Greenlight Ritual: Staying Ruthless About Portfolio Quality"
      date="2025-12-02"
      readTime="8 min"
      category="AI Workflow"
      description="Most founders can't kill ideas because of sunk costs. Here's how I learned to make tough decisions systematically, not emotionally—and why it might be the most important skill you develop."
    >
      <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
        <p className="text-xl text-slate-300 mb-8">
          I'll never forget the moment I finally killed my "revolutionary AI-powered meal planner."
        </p>

        <p>
          Three months. That's how long I'd been nursing this thing along. I had a working prototype, 50 user interviews under my belt, and even 200 people on the waitlist. The validation looked... decent. Not amazing, but decent enough to keep going, right?
        </p>

        <p>
          Wrong.
        </p>

        <p>
          When I finally forced myself to look at the numbers honestly, the story was brutal:
        </p>

        <div className="bg-red-900/20 border-l-4 border-red-400 p-6 my-8">
          <div className="space-y-2">
            <p className="text-red-300 font-medium">The Hard Truth:</p>
            <ul className="text-red-200 space-y-1">
              <li><strong>Portfolio Score:</strong> 22/40 (barely above my kill threshold of 20)</li>
              <li><strong>Opportunity Score:</strong> 7.2/10 (below my 8.0 proceed threshold)</li>
              <li><strong>Validation Results:</strong> 200 signups (needed 500), 4% prepayment conversion (needed 10%)</li>
            </ul>
          </div>
        </div>

        <p>
          Every rational signal screamed "kill this thing." But I'd invested three months. I'd told friends about it. I'd built features I was genuinely proud of. The sunk cost fallacy was doing its thing: <em>"just give it one more week..."</em>
        </p>

        <p>
          I killed it anyway.
        </p>

        <p>
          Two weeks later, I started working on a habit tracker that scored 32/40 with an 8.5/10 opportunity score. It hit every validation threshold in four weeks. Now it's in production.
        </p>

        <div className="bg-slate-800/50 border-l-4 border-green-400 p-6 my-8">
          <p className="text-cyan-400 font-medium mb-2">The Breakthrough Realization:</p>
          <p className="text-slate-200">
            The meal planner would have consumed six more months and failed anyway. The habit tracker succeeded because I started it instead of doubling down on mediocrity.
          </p>
        </div>

        <p>
          That's the power of ruthless portfolio management: <strong>saying no to mediocre ideas so you can say yes to exceptional ones.</strong>
        </p>

        <p>
          Here's the thing though—most founders can't kill ideas. We get emotionally attached. We rationalize. We pivot when we should kill. And we end up with zombie projects that consume resources without delivering results.
        </p>

        <p>
          So I built a system. A weekly ritual that makes these decisions systematic, not emotional. Let me show you exactly how it works.
        </p>

        <h2>Why Founders Can't Kill Ideas (Spoiler: It's All Psychology)</h2>

        <p>
          Before we dive into the solution, let's talk about why this is so damn hard. I've made every mistake in this section. Multiple times.
        </p>

        <h3>The Sunk Cost Trap</h3>

        <p>
          "I've already spent three months on this. I can't quit now."
        </p>

        <p>
          This one nearly killed my productivity for two years. I'd work on mediocre ideas way past their expiration date because I couldn't stomach the thought of "wasting" the time I'd already invested.
        </p>

        <p>
          Here's what finally clicked for me: <strong>past time is gone regardless.</strong> The question isn't "was it worth three months?" The question is "is it worth the <em>next</em> three months?"
        </p>

        <div className="bg-slate-800/30 p-6 rounded-lg my-8">
          <p className="font-medium mb-4">Real Example from My Portfolio:</p>
          <p className="mb-4">
            I'd built 60% of an MVP for a project management tool. Validation was weak—users were lukewarm at best. But I kept thinking, "I just need to finish the last 40% and then I'll know for sure."
          </p>
          <p className="mb-2">
            The rational question: Do I spend three more months finishing something users don't want, or three months starting something they desperately need?
          </p>
          <p className="text-slate-300">
            I chose option A the first time. Learned my lesson the expensive way.
          </p>
        </div>

        <h3>Identity Attachment (AKA "This is MY Baby")</h3>

        <p>
          "This is <em>my</em> idea. I came up with it. It defines me as a builder."
        </p>

        <p>
          I used to introduce myself at meetups as "the guy building the AI meal planner." When it came time to kill it, it felt like I was killing part of my identity.
        </p>

        <p>
          Plot twist: Your identity shouldn't be tied to one idea. You're a builder, not "the person who builds meal planners." Good builders kill bad ideas. It's a feature, not a bug.
        </p>

        <h3>The Optimism Bias Death Spiral</h3>

        <p>
          "It'll work if I just try this one more channel/feature/pivot."
        </p>

        <p>
          Oh man, this one. I've watched founders (including past me) go through this sequence:
        </p>

        <ul>
          <li>Validation test fails → "Maybe Facebook ads are the wrong channel. Let's try Reddit."</li>
          <li>Reddit fails → "Maybe Reddit users don't convert. Let's try Twitter."</li>
          <li>Twitter fails → "Maybe we need a different feature set."</li>
          <li>Feature pivot fails → "Maybe it's a positioning problem."</li>
        </ul>

        <p>
          Endless pivots to avoid the hard truth: <strong>the market doesn't want this thing.</strong>
        </p>

        <h2>The Solution: Systematic Kill/Greenlight Reviews</h2>

        <p>
          After killing the meal planner and seeing the habit tracker succeed immediately, I realized I needed a system. Something that would make these decisions based on data, not emotions.
        </p>

        <p>
          Enter the weekly kill/greenlight ritual.
        </p>

        <h3>The Core Principles</h3>

        <p>
          <strong>1. Expected Value Trumps Sunk Cost (Always)</strong>
        </p>

        <p>
          Every decision comes down to: <em>Expected Value = (Probability of Success) × (Impact if Successful)</em>
        </p>

        <p>
          Always choose the option with higher EV, regardless of past investment. This sounds obvious, but it's incredibly hard to do when you've got three months invested in something.
        </p>

        <div className="bg-cyan-900/20 p-6 rounded-lg my-8">
          <p className="font-medium text-cyan-300 mb-4">Expected Value in Action:</p>
          <div className="space-y-3 text-slate-200">
            <div>
              <strong>Idea A (current meal planner):</strong><br />
              10% chance of $100K/year = $10K EV, requires 6 more months
            </div>
            <div>
              <strong>Idea B (new habit tracker):</strong><br />
              30% chance of $200K/year = $60K EV, requires 6 months
            </div>
            <div className="pt-2 border-t border-cyan-700/50">
              <strong>Decision:</strong> Kill A, start B. B has 6x higher EV.
            </div>
          </div>
        </div>

        <p>
          <strong>2. Clear Kill Criteria (No Negotiation)</strong>
        </p>

        <p>
          I learned this the hard way: if you don't have clear criteria, you'll rationalize keeping bad ideas alive forever.
        </p>

        <p>
          My non-negotiable kill criteria:
        </p>

        <ul>
          <li>Portfolio Score &lt; 20/40</li>
          <li>Opportunity Score &lt; 8.0/10</li>
          <li>Validation thresholds missed by &gt;30%</li>
          <li>Founder loses conviction ("I'm forcing myself to work on this")</li>
        </ul>

        <p>
          If it hits these criteria, it's dead. No "one more week." No exceptions.
        </p>

        <p>
          <strong>3. Weekly Reviews (Not When You Feel Like It)</strong>
        </p>

        <p>
          Every Friday at 4 PM, I spend 30-60 minutes reviewing my entire portfolio. Not when projects fail. Not when I'm frustrated. Every. Single. Week.
        </p>

        <p>
          This prevents the drift. You don't work on ideas for months without checkpoints.
        </p>

        <h2>The Kill/Greenlight Review: Step-by-Step</h2>

        <p>
          Alright, let me walk you through exactly how I run these reviews. This is the actual process, not some idealized version.
        </p>

        <h3>Step 1: Open the Hub and Survey the Damage</h3>

        <p>
          I navigate to my project hub and get the full picture. Right now I'm looking at 16 ideas total:
        </p>

        <ul>
          <li><strong>Top Priority</strong> (≥30 score): 7 ideas</li>
          <li><strong>Proceed</strong> (passed validation): 7 ideas</li>
          <li><strong>Pivot/Kill</strong> (failed or struggling): 9 ideas</li>
        </ul>

        <h3>Step 2: Review Active Ideas</h3>

        <p>
          For each idea currently in discovery, validation, or build, I ask:
        </p>

        <p>
          <strong>Discovery phase:</strong>
        </p>
        <ul>
          <li>Is Opportunity Score ≥ 8.0? (If no → kill or pivot)</li>
          <li>Are all 4 discovery docs complete? (If no → complete or kill)</li>
          <li>Do I still believe in this problem? (If no → kill)</li>
        </ul>

        <p>
          <strong>Validation phase:</strong>
        </p>
        <ul>
          <li>Are we on track to hit thresholds? (If no → analyze why)</li>
          <li>Is our velocity acceptable? (If behind → boost effort or pivot)</li>
          <li>Are we learning what we expected? (If no → pivot or kill)</li>
        </ul>

        <p>
          <strong>Build phase:</strong>
        </p>
        <ul>
          <li>Is the feature shipping on time? (If no → remove scope or delay)</li>
          <li>Am I still excited about this? (If no → kill)</li>
        </ul>

        <h3>Step 3: A Real Review Session (Last Friday)</h3>

        <p>
          Let me show you how this played out in my actual review last week:
        </p>

        <div className="bg-slate-800/30 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-slate-100 mb-4">Active Idea 1: Habit Tracker (Validation Phase)</h4>
          
          <p className="mb-3"><strong>Status:</strong></p>
          <ul className="mb-4 space-y-1">
            <li>Score: 32/40 (Top Priority)</li>
            <li>Opportunity Score: 8.5/10 (above threshold)</li>
            <li>Validation: 104 signups (threshold: 100 ✅), 11.5% prepayment (threshold: 10% ✅)</li>
            <li>Velocity: Hit thresholds in week 3 (ahead of 4-week plan)</li>
          </ul>

          <p className="mb-2"><strong>My internal monologue:</strong></p>
          <p className="mb-4 italic">"Validation passed. Users are paying. Feedback is enthusiastic. This is a no-brainer."</p>

          <div className="bg-green-100 p-3 rounded border-l-4 border-green-400">
            <p className="text-cyan-400 font-medium">Decision: GREENLIGHT → Move to build phase</p>
          </div>
        </div>

        <div className="bg-slate-800/30 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-slate-100 mb-4">Active Idea 2: AI-Powered Meal Planner (Validation Phase)</h4>
          
          <p className="mb-3"><strong>Status:</strong></p>
          <ul className="mb-4 space-y-1">
            <li>Score: 22/40 (Medium Priority—barely above kill threshold)</li>
            <li>Opportunity Score: 7.2/10 (below 8.0 threshold)</li>
            <li>Validation: 200 signups (threshold: 500 ❌), 4% prepayment (threshold: 10% ❌)</li>
            <li>Velocity: Week 4, significantly behind pace</li>
          </ul>

          <p className="mb-2"><strong>My internal monologue:</strong></p>
          <p className="mb-4 italic">"We're only 40% to signup threshold and prepayment conversion is half what we need. But I've already built the waitlist, wrote the copy, spent $300 on ads..."</p>

          <p className="mb-4">And there it was—the sunk cost fallacy trying to make the decision for me. But the data was clear:</p>
          <ul className="mb-4 space-y-1">
            <li>Opportunity Score below threshold (7.2 &lt; 8.0)</li>
            <li>Validation missed by &gt;50% on both metrics</li>
            <li>My own conviction was wavering</li>
            <li>Better idea waiting in backlog (fintech SaaS, score 28/40)</li>
          </ul>

          <div className="bg-red-100 p-3 rounded border-l-4 border-red-400">
            <p className="text-red-300 font-medium">Decision: KILL → Not worth 4 more weeks</p>
          </div>
        </div>

        <p>
          That kill decision saved me at least four months of working on something that users didn't really want. The habit tracker I started instead? It's now generating revenue.
        </p>

        <h2>How the Hub Makes This Actually Work</h2>

        <p>
          Here's the thing—I tried to do portfolio reviews with spreadsheets and notion databases before. It was a nightmare. Everything was out of sync, I'd forget to update scores, and the reviews took forever.
        </p>

        <p>
          The Hub changed everything because it makes the data visible and up-to-date automatically:
        </p>

        <div className="bg-slate-800/50 p-6 rounded-lg font-mono text-sm my-8">
          <div className="mb-4 font-sans font-semibold">Friday Review Dashboard:</div>
          <div className="space-y-2">
            <div>📊 Habit Tracker (Score: 32/40 ⭐⭐⭐⭐⭐)</div>
            <div className="ml-4">Verdict: ✅ PROCEED</div>
            <div className="ml-4">Validation: 7/7 docs ✅</div>
            <div className="mt-2"></div>
            <div>📊 Meal Planner (Score: 22/40 ⭐⭐⭐)</div>
            <div className="ml-4">Verdict: ⚠️ PIVOT (behind pace)</div>
            <div className="ml-4">Validation: 5/7 docs (results weak)</div>
            <div className="mt-2"></div>
            <div>📊 Freelancer PM (Score: 28/40 ⭐⭐⭐⭐)</div>
            <div className="ml-4">Verdict: (pending Opp Score)</div>
            <div className="ml-4">Discovery: 3/4 docs</div>
          </div>
        </div>

        <p>
          I can see at a glance:
        </p>
        <ul>
          <li><strong>Score + stars:</strong> Priority level (30+ = top, 20-29 = high, &lt; 20 = kill)</li>
          <li><strong>Verdict badge:</strong> Green (proceed), yellow (pivot), red (kill)</li>
          <li><strong>Doc completion:</strong> Progress tracking (3/4 discovery, 7/7 validation)</li>
          <li><strong>Filters:</strong> Click "Pivot" to see all struggling ideas instantly</li>
        </ul>

        <p>
          No spreadsheets to maintain. No memory required. No debate about facts—the scores and verdicts are canonical.
        </p>

        <h2>The Mental Models That Make Killing Ideas Easier</h2>

        <p>
          Even with a good system, killing ideas you've worked on is emotionally difficult. Here are the mental models that help me pull the trigger:
        </p>

        <h3>1. "What Would I Do If I Started Today?"</h3>

        <p>
          If I had zero investment in this idea, would I start it <em>now</em> given what I know?
        </p>

        <p>
          This cuts through the sunk cost fallacy instantly. For the meal planner, the answer was crystal clear: knowing that this idea would take four more weeks and deliver 500 signups at 4% conversion, would I start it? Hell no. I'd start the fintech SaaS instead.
        </p>

        <h3>2. "Opportunity Cost is Real Cost"</h3>

        <p>
          Every hour on Idea A is an hour <em>not</em> on Idea B.
        </p>

        <div className="bg-slate-800/50 p-6 rounded-lg my-8">
          <p className="font-medium text-cyan-400 mb-4">Opportunity Cost Formula:</p>
          <p className="text-slate-200 mb-4">
            Cost of continuing A = (Expected Value of B - Expected Value of A) × Time
          </p>
          <div className="text-slate-200">
            <p><strong>Meal planner:</strong> 10% × $50K = $5K EV, needs 6 months</p>
            <p><strong>Habit tracker:</strong> 40% × $150K = $60K EV, needs 6 months</p>
            <p><strong>Opportunity cost:</strong> ($60K - $5K) × 6 months = $55K foregone</p>
          </div>
        </div>

        <p>
          When you frame it like that, the decision becomes obvious.
        </p>

        <h3>3. "Celebrate Kills, Not Just Wins"</h3>

        <p>
          This one was huge for me. I started treating kills as wins, not failures.
        </p>

        <p>
          When I killed the meal planner, I tweeted: "Killed the meal planner today. Saved 4 months. Starting habit tracker next week." The response was overwhelmingly positive—other founders respected the decision.
        </p>

        <p>
          Killing bad ideas <em>is</em> a win. It's evidence of good judgment, not failure.
        </p>

        <h2>Real-World Results (6 Months Later)</h2>

        <p>
          Since implementing weekly kill/greenlight reviews, here's what's happened to my portfolio:
        </p>

        <div className="bg-cyan-900/20 p-6 rounded-lg my-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-cyan-300 mb-3">Portfolio Health</h4>
              <ul className="text-slate-200 space-y-1">
                <li>Started: 23 ideas (many mediocre)</li>
                <li>Killed immediately: 6 (score &lt; 20)</li>
                <li>Killed after discovery: 3 (Opp Score &lt; 8.0)</li>
                <li>Killed after validation: 2 (missed thresholds)</li>
                <li>Greenlit for build: 4</li>
                <li><strong>Current: 16 ideas, 7 proceed, 9 pivot/killed</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-300 mb-3">Business Impact</h4>
              <ul className="text-slate-200 space-y-1">
                <li><strong>Time saved:</strong> ~44 months of wasted effort avoided</li>
                <li><strong>Success rate:</strong> 75% (vs. 10% industry average)</li>
                <li><strong>Zero regrets</strong> about killed ideas</li>
                <li><strong>Zero zombie projects</strong> consuming resources</li>
              </ul>
            </div>
          </div>
        </div>

        <p>
          The numbers don't lie. Systematic portfolio management works.
        </p>

        <h2>How to Implement This (Starting Monday)</h2>

        <p>
          Alright, let's get practical. Here's exactly how to add this to your workflow:
        </p>

        <h3>Step 1: Define Your Kill Criteria</h3>

        <p>
          Write down clear, non-negotiable kill criteria and make them visible (pin in Slack, print on wall, whatever works):
        </p>

        <ul>
          <li><strong>Portfolio phase:</strong> Score &lt; 20/40 → Kill immediately</li>
          <li><strong>Discovery phase:</strong> Opportunity Score &lt; 8.0/10 → Kill or pivot</li>
          <li><strong>Validation phase:</strong> Miss thresholds by &gt;30% → Kill or pivot</li>
          <li><strong>Build phase:</strong> Shipping delays &gt; 2x estimate → Kill or descope</li>
        </ul>

        <h3>Step 2: Schedule Weekly Reviews</h3>

        <p>
          Pick a time (I use Friday 4 PM) and set a recurring calendar event: "Portfolio Review" (30-60 min).
        </p>

        <p>
          The format:
        </p>
        <ol>
          <li>Review active ideas (greenlight / pivot / kill)</li>
          <li>Review backlog (promote / keep / kill)</li>
          <li>Triage new ideas (start / backlog / kill)</li>
          <li>Update verdicts in your system</li>
          <li>Share decisions (if you have a team)</li>
        </ol>

        <h3>Step 3: Document Every Kill</h3>

        <p>
          When you kill an idea, write <em>why</em> in your project docs:
        </p>

        <div className="bg-slate-800/50 p-4 rounded-lg font-mono text-sm my-8">
          <div className="font-sans font-medium mb-2">Example Kill Documentation:</div>
          <div className="whitespace-pre-wrap">{`### Verdict: ❌ **KILL**

Rationale:
- Opportunity Score: 7.2/10 (below 8.0 threshold)
- Validation: 200/500 signups (40%), 4%/10% prepayment
- Founder conviction: Low (forcing myself to work on this)
- Decision: Not worth 4 more weeks. Moving to higher-EV idea.

Date: 2025-12-02`}</div>
        </div>

        <p>
          Six months later, you'll remember exactly why you killed it. Prevents re-litigating the same decision.
        </p>

        <h2>The Trade-offs (Let's Be Honest)</h2>

        <p>
          Systematic portfolio management isn't free. Here's what it costs:
        </p>

        <p>
          <strong>Requires Real Discipline:</strong> It's easy to skip reviews when you're busy or rationalize "one more week" instead of following kill criteria.
        </p>

        <p>
          <strong>Can Feel Harsh:</strong> Killing ideas you've invested in is emotionally hard. If you have a team, they might be attached to ideas you need to kill.
        </p>

        <p>
          <strong>Takes Time:</strong> 30-60 minutes per week on reviews is time not spent coding. For solo founders in pure sprint mode, it might feel like overhead.
        </p>

        <p>
          But here's the thing—if you're managing 3+ ideas at various stages, reviews pay for themselves immediately. The time you save by not working on dead-end projects more than makes up for the review time.
        </p>

        <h2>What's Next?</h2>

        <p>
          I'm continuing to refine the kill/greenlight process. Next improvements on my list:
        </p>

        <ul>
          <li><strong>Automated kill alerts:</strong> "Meal planner is 50% behind pace—schedule kill review"</li>
          <li><strong>EV calculator:</strong> Input scores/validation → Get expected value comparison</li>
          <li><strong>Kill lessons database:</strong> Extract patterns from killed ideas to spot failure modes earlier</li>
        </ul>

        <p>
          But the core system is solid. Weekly reviews + clear kill criteria + visible data = better decisions.
        </p>

        <h2>The Bottom Line</h2>

        <p>
          Most founders can't kill ideas because of sunk costs, identity attachment, and optimism bias. The result? Zombie projects that consume resources without delivering results.
        </p>

        <p>
          The solution isn't more discipline—it's better systems. Weekly kill/greenlight reviews with clear criteria and visible data make tough decisions easier.
        </p>

        <div className="bg-slate-800/50 border-l-4 border-green-400 p-6 my-8">
          <p className="text-cyan-400 font-medium mb-2">The Killer Insight:</p>
          <p className="text-slate-200">
            Killing bad ideas isn't about admitting failure—it's about protecting your ability to recognize and execute on exceptional opportunities.
          </p>
        </div>

        <p>
          If you're managing multiple ideas, start with this: schedule a weekly review, define clear kill criteria, and make one tough decision this Friday. Your future self will thank you.
        </p>

        <p>
          What if you could kill bad ideas confidently and focus all your energy on the ones that actually matter? That's not just portfolio management—that's how you build something that lasts.
        </p>

        <div className="mt-12 p-6 bg-slate-800/30 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Want the Kill/Greenlight Framework?</h3>
          <p className="mb-4">
            I've documented the exact process, criteria, and templates I use for weekly portfolio reviews. 
            Get the complete framework and start making better decisions about your ideas.
          </p>
          <div className="flex gap-4">
            <Badge variant="outline">Framework Template</Badge>
            <Badge variant="outline">Kill Criteria Checklist</Badge>
            <Badge variant="outline">Hub Integration Guide</Badge>
          </div>
        </div>
      </div>
    </BlogPost>
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

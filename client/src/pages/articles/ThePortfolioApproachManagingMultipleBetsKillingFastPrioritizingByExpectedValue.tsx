import { ArrowLeft, ArrowRight, DollarSign, Shield, Target, TrendingUp, Users } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function PortfolioApproachArticle() {
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

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src="/images/articles/portfolio-hero.png"
              alt="The Portfolio Approach"
              className="w-full h-auto"
            />
          </div>

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>December 7, 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Portfolio Approach: Managing Multiple Bets, Killing Fast, Prioritizing by Expected Value
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              You're not building one product. You're managing a portfolio of bets.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
            <h2>The $50K Mistake That Changed My Mind</h2>

        <p>
          I used to be an "all-in" founder. You know the type—pick one product idea, pour everything into it, 
          ride or die. I thought that was being "focused." In reality, I was just being reckless.
        </p>

        <p>
          Two years ago, I spent six months and roughly $50K building what I was convinced would be 
          the next big thing in project management. I had spreadsheets full of features, wireframes 
          covering my office walls, and zero actual validation beyond "I would use this."
        </p>

        <p>
          The product launched to crickets. Not even expensive crickets—free crickets. Nobody cared.
        </p>

        <p>
          That's when I had my come-to-Jesus moment: <strong>I wasn't building one product. I was 
          managing a portfolio of bets.</strong> I just happened to be managing it terribly.
        </p>

        <div className="bg-cyan-900/20 border-l-4 border-blue-500 px-6 pt-4 pb-5 my-8">
          <p className="text-cyan-300 italic text-lg">
            "You're not building one product. You're managing a portfolio of bets. The question is: 
            are you managing it like Warren Buffett or like a guy at a casino?"
          </p>
        </div>

        <h2>Why Portfolio Theory Isn't Just for Wall Street</h2>

        <p>
          Modern Portfolio Theory (yeah, I know, finance class flashbacks). 
          The core insight isn't complicated: diversify your risks, maximize your returns. Don't 
          put all your eggs in one basket.
        </p>

        <p>
          But here's what I realized after my expensive lesson: this applies perfectly to SaaS 
          product development. Instead of betting everything on one idea, what if I managed 
          multiple product bets simultaneously?
        </p>

        <p>
          Not building five products at once (that's chaos). I mean systematically evaluating, 
          scoring, and allocating resources across multiple opportunities based on data, not gut feelings.
        </p>

        <p>
          And it worked. Really well.
        </p>

        <Card className="p-6 my-8 bg-slate-800/50 border-slate-700">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-2xl font-bold text-slate-200">5x</div>
              <div className="text-sm text-green-300">More ideas validated per quarter</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-200">$180K</div>
              <div className="text-sm text-green-300">Current MRR from portfolio approach</div>
            </div>
          </div>
        </Card>

        <h2>The 40-Point Scoring System (That Actually Works)</h2>

        <p>
          After my project management disaster, I knew I needed a system. Something objective. 
          Something that would save me from myself.
        </p>

        <p>
          I built a 40-point scoring model that evaluates every product idea across five dimensions. 
          No emotion, no "but I really love this idea," just cold, hard numbers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          <Card className="p-4">
            <DollarSign className="w-8 h-8 text-green-300 mb-3" />
            <h4 className="font-semibold mb-2">Expected Value (0-10)</h4>
            <p className="text-sm text-muted-foreground">
              Probability of success × potential MRR impact
            </p>
          </Card>
          
          <Card className="p-4">
            <Users className="w-8 h-8 text-cyan-400 mb-3" />
            <h4 className="font-semibold mb-2">Desirability (0-8)</h4>
            <p className="text-sm text-muted-foreground">
              Strength of demand signals and validation results
            </p>
          </Card>
          
          <Card className="p-4">
            <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
            <h4 className="font-semibold mb-2">Durability (0-8)</h4>
            <p className="text-sm text-muted-foreground">
              Will this still matter in 12-36 months?
            </p>
          </Card>
          
          <Card className="p-4">
            <Shield className="w-8 h-8 text-orange-600 mb-3" />
            <h4 className="font-semibold mb-2">Moat (0-8)</h4>
            <p className="text-sm text-muted-foreground">
              Potential for sustainable competitive advantage
            </p>
          </Card>
          
          <Card className="p-4">
            <ArrowRight className="w-8 h-8 text-red-300 mb-3" />
            <h4 className="font-semibold mb-2">Expansion (0-6)</h4>
            <p className="text-sm text-muted-foreground">
              Revenue growth per customer over time
            </p>
          </Card>
        </div>

        <h3>The Scoring Breakdown</h3>

        <p>
          Here's how I actually use this system. Every new product idea gets scored ruthlessly:
        </p>

        <ul>
          <li><strong>30-40 points:</strong> Top priority. Gets immediate resources and attention.</li>
          <li><strong>20-29 points:</strong> High priority. Gets resources when available.</li>
          <li><strong>Below 20:</strong> Deprioritized or killed immediately.</li>
        </ul>

        <p>
          The key word here is <em>ruthlessly</em>. I don't let myself get emotionally attached 
          to ideas that score poorly. If the numbers don't work, the idea doesn't get built. Period.
        </p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 my-8">
          <h4 className="font-semibold text-yellow-900 mb-2">Real Example: The Great AI Tool Showdown</h4>
          <p className="text-cyan-400 mb-3">
            Last month, I had three AI tool ideas competing for resources:
          </p>
          <ul className="text-cyan-400 space-y-2">
            <li><strong>AI-powered PRD generator:</strong> Scored 35/40 (built it, now at $18K MRR)</li>
            <li><strong>Competitive analysis automation:</strong> Scored 28/40 (in development)</li>
            <li><strong>AI meeting summarizer:</strong> Scored 19/40 (killed after two weeks)</li>
          </ul>
          <p className="text-cyan-400 mt-3">
            The meeting summarizer had great tech but zero moat. Everyone and their dog is building one. 
            Hard pass.
          </p>
        </div>

        <h2>Resource Allocation: The VC Mindset</h2>

        <p>
          Here's where most founders go wrong: they treat all ideas equally. Equal time, equal 
          energy, equal hope. That's not how VCs think, and it's not how successful product 
          portfolios work either.
        </p>

        <p>
          VCs don't spread their money evenly across every startup in their portfolio. They 
          double down on the winners and let the losers fade away. I do the same with product ideas.
        </p>

        <p>
          My resource allocation formula is simple:
        </p>

        <div className="bg-slate-800/30 border rounded-lg p-6 my-8">
          <div className="text-center">
            <div className="text-lg font-mono mb-2">Resource Allocation = Score² × Available Capacity</div>
            <div className="text-sm text-muted-foreground">
              (Yeah, I square the score. High-scoring ideas get exponentially more resources)
            </div>
          </div>
        </div>

        <p>
          This means a 35-point idea gets roughly 2.4x more resources than a 25-point idea. 
          The math forces me to concentrate firepower on the highest-potential opportunities.
        </p>

        <Card className="p-6 my-8 bg-cyan-900/20 border-cyan-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-red-200 mb-2">❌ Old Approach</h5>
              <ul className="text-sm text-red-300 space-y-1">
                <li>Build what feels exciting</li>
                <li>Equal resources to all ideas</li>
                <li>Emotional attachment to features</li>
                <li>One big bet, high risk</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-slate-200 mb-2">✅ Portfolio Approach</h5>
              <ul className="text-sm text-green-300 space-y-1">
                <li>Build what scores highest</li>
                <li>Resources follow expected value</li>
                <li>Data-driven decision making</li>
                <li>Multiple smaller bets, managed risk</li>
              </ul>
            </div>
          </div>
        </Card>

        <h2>The Art of Killing Fast (And Why It's Harder Than It Sounds)</h2>

        <p>
          Let me back up for a second and tell you about the hardest part of this whole system: 
          killing ideas you've already started working on.
        </p>

        <p>
          Six months ago, I was building an AI-powered customer interview tool. Scored it a 26 
          initially—high priority. Spent three weeks on prototypes, customer interviews, the works.
        </p>

        <p>
          Then ChatGPT's Advanced Voice Mode launched.
        </p>

        <p>
          Suddenly, my competitive moat evaporated. The durability score dropped from 7 to 3. 
          Overall score: 22 points. Still "high priority" but barely.
        </p>

        <p>
          I had two choices: double down and try to differentiate, or kill it and redirect those 
          resources to my 35-point PRD generator.
        </p>

        <p>
          The math was clear. The emotional attachment was real. I killed the interview tool.
        </p>

        <div className="bg-red-900/20 border-l-4 border-red-500 px-6 pt-4 pb-5 my-8">
          <p className="font-semibold text-red-900 mb-2">Killing Ideas: The Two-Week Rule</p>
          <p className="text-red-300">
            If an idea's score drops below 20 points, I give myself exactly two weeks to either 
            find a way to improve the score or kill it entirely. No exceptions. No "just one more 
            pivot" attempts.
          </p>
        </div>

        <p>
          Here's what I've learned about killing fast: it's not just about cutting losses. It's 
          about opportunity cost. Every hour spent trying to revive a 19-point idea is an hour 
          not spent accelerating a 35-point winner.
        </p>

        <h2>The Playbook: How to Actually Do This</h2>

        <p>
          Enough theory. Here's exactly how to implement this portfolio approach in your own 
          product development:
        </p>

        <h3>Step 1: Audit Your Current Ideas</h3>
        
        <p>
          Start with everything. That project you've been "meaning to get back to," the idea 
          you had in the shower last week, the feature request that's been sitting in your 
          backlog for months. Score them all.
        </p>

        <p>
          Be brutal. I found that 70% of my "great ideas" scored below 20 points when I actually 
          ran the numbers.
        </p>

        <h3>Step 2: Set Up Your Scoring System</h3>

        <p>
          Create a simple spreadsheet with the five scoring criteria. For each idea, assign 
          scores based on actual evidence, not wishful thinking.
        </p>

        <p>
          Pro tip: Score ideas with a partner or advisor. Solo scoring is vulnerable to your 
          own biases and blind spots.
        </p>

        <h3>Step 3: Allocate Resources by Score</h3>

        <p>
          This is where most people chicken out. Don't spread your time evenly. Give your 
          highest-scoring ideas the lion's share of your resources.
        </p>

        <p>
          If you have 40 hours a week for product work, and you have a 35-point idea and two 
          22-point ideas, the 35-pointer should get about 55% of your time. Math, not emotions.
        </p>

        <h3>Step 4: Review and Rebalance Monthly</h3>

        <p>
          Markets change. Your understanding improves. New information emerges. Re-score your 
          portfolio monthly and adjust resource allocation accordingly.
        </p>

        <p>
          I do this review on the last Friday of every month. Takes about 2 hours. Worth every minute.
        </p>

        <Card className="p-6 my-8 bg-purple-50 border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-3">🎯 Free Portfolio Scoring Template</h4>
          <p className="text-purple-800 mb-4">
            Want the exact spreadsheet I use? I've cleaned up my scoring template and made it 
            available for free. Includes the formulas, scoring rubrics, and example calculations.
          </p>
          <Link href="/contact?playbook=portfolio-template">
            <a className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
              Download Portfolio Template
            </a>
          </Link>
        </Card>

        <h2>The Uncomfortable Truth About This Approach</h2>

        <p>
          Real talk: this portfolio approach isn't all upside. There are legitimate trade-offs 
          and limitations that nobody talks about.
        </p>

        <h3>What You Gain:</h3>
        <ul>
          <li><strong>Risk reduction:</strong> Multiple bets mean single failures don't kill you</li>
          <li><strong>Better resource allocation:</strong> Time goes to highest-impact opportunities</li>
          <li><strong>Objective decision-making:</strong> Numbers beat emotions in product decisions</li>
          <li><strong>Faster learning:</strong> More experiments = more market feedback</li>
        </ul>

        <h3>What You Give Up:</h3>
        <ul>
          <li><strong>Deep focus:</strong> You're not going "all-in" on any single product</li>
          <li><strong>Emotional attachment:</strong> Products become assets to optimize, not babies to nurture</li>
          <li><strong>Simplicity:</strong> Managing a portfolio is more complex than building one thing</li>
          <li><strong>Serendipity:</strong> Systematic approaches can miss unexpected opportunities</li>
        </ul>

        <p>
          For me, the trade-offs are worth it. I'd rather have systematic success than emotional 
          attachment to failures. But your mileage may vary.
        </p>

        <h2>What This Actually Looks Like in Practice</h2>

        <p>
          Let me give you a peek behind the curtain. Here's what my current portfolio looks like:
        </p>

        <div className="space-y-4 my-8">
          <Card className="p-4 border-slate-700 bg-slate-800/50">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-green-900">AI-Powered PRD Generator</h4>
              <Badge variant="outline" className="bg-green-900/30 text-cyan-400">35 points</Badge>
            </div>
            <p className="text-sm text-slate-200 mb-2">Status: Active development (50% of resources)</p>
            <p className="text-sm text-green-300">Current MRR: $18K | Target: $50K by Q2</p>
          </Card>

          <Card className="p-4 border-cyan-700/50 bg-cyan-900/20">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-blue-900">Competitive Analysis Automation</h4>
              <Badge variant="outline" className="bg-cyan-900/30 text-cyan-300">28 points</Badge>
            </div>
            <p className="text-sm text-slate-200 mb-2">Status: Validation phase (30% of resources)</p>
            <p className="text-sm text-cyan-400">Target launch: Q2 2025</p>
          </Card>

          <Card className="p-4 border-slate-700 bg-slate-800/50">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-yellow-900">User Research Synthesizer</h4>
              <Badge variant="outline" className="bg-yellow-100 text-cyan-400">24 points</Badge>
            </div>
            <p className="text-sm text-slate-200 mb-2">Status: Early exploration (20% of resources)</p>
            <p className="text-sm text-yellow-300">Decision point: End of Q1</p>
          </Card>
        </div>

        <p>
          Notice how resource allocation maps directly to scores? The 35-point winner gets half 
          my attention. The 24-point idea gets just enough resources to stay alive and gather data.
        </p>

        <p>
          Also notice what's <em>not</em> on this list: the seven other ideas I've killed in the 
          past six months. The meeting transcription tool. The email automation platform. The 
          social media scheduler. All scored below 20. All got cut.
        </p>

        <h2>The Question That Changes Everything</h2>

        <p>
          Here's the question that completely shifted how I think about product development: 
          What if you could remove emotion from product decisions entirely?
        </p>

        <p>
          Not remove passion—that's still essential for execution. But remove the emotional 
          attachment that makes us keep building products nobody wants.
        </p>

        <p>
          This portfolio scoring system has been my answer to that question. It's not perfect. 
          It's not a magic bullet. But it's helped me build more successful products by being 
          more systematic about which bets to make.
        </p>

        <div className="bg-slate-800/30 border rounded-lg p-6 my-8">
          <h4 className="font-semibold mb-3">Your Portfolio Assignment</h4>
          <p className="mb-4">
            If you're still reading, you're probably ready to try this approach. Here's your homework:
          </p>
          <ol className="space-y-2 text-sm">
            <li><strong>List your current product ideas</strong> (everything, even the half-baked ones)</li>
            <li><strong>Score each one</strong> using the 40-point system</li>
            <li><strong>Kill everything below 20 points</strong> (yes, really)</li>
            <li><strong>Allocate your next month's resources</strong> based on the scores</li>
            <li><strong>Set a calendar reminder</strong> to review and rebalance in 4 weeks</li>
          </ol>
        </div>

        <p>
          I'm genuinely curious how this works for other founders. The portfolio approach has 
          been transformative for my business, but every context is different.
        </p>

        <p>
          Try it for one quarter. Track your results. Kill fast, double down on winners, and 
          let the math guide your decisions.
        </p>

        <p>
          And if you build something amazing using this system? I want to hear about it.
        </p>

        {/* Call to Action */}
        <Card className="p-8 my-12 bg-gradient-to-r from-blue-50 to-purple-50 border-cyan-700/50">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Product Portfolio?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the complete portfolio scoring template, example calculations, and monthly review 
              process. Everything you need to start managing product bets like a VC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact?playbook=portfolio-template">
                <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Download Free Template
                </a>
              </Link>
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Read More Articles →
              </button>
            </div>
          </div>
        </Card>
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

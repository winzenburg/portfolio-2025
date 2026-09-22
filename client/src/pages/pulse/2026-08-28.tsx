import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import ResponsiveNav from "@/components/ResponsiveNav";
import NewsletterSignup from "@/components/NewsletterSignup";

const CANONICAL = "https://winzenburg.com/pulse/2026-08-28";

function VideoLink({ href, title }: { href: string; title: string }) {
  return (
    <li className="flex items-start gap-1.5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-start gap-1"
      >
        {title}
        <ExternalLink className="w-3 h-3 shrink-0 mt-0.5" aria-hidden="true" />
      </a>
    </li>
  );
}

export default function Pulse20260828() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ResponsiveNav currentPage="subscribe" />

      <Helmet>
        <title>Weekly AI Founder Pulse — Week of August 28, 2026 | Ryan Winzenburg</title>
        <meta
          name="description"
          content="The market is shifting from prompt-driven AI to agentic work that can act across interfaces, execute defined workflows, and produce monetizable outcomes. Five signals from the week of August 28, 2026."
        />
        <meta
          property="og:title"
          content="Weekly AI Founder Pulse — Week of August 28, 2026"
        />
        <meta
          property="og:description"
          content="The market is shifting from prompt-driven AI to agentic work that can act across interfaces, execute defined workflows, and produce monetizable outcomes."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Weekly AI Founder Pulse — Week of August 28, 2026",
            description:
              "The market is shifting from prompt-driven AI to agentic work that can act across interfaces, execute defined workflows, and produce monetizable outcomes.",
            author: {
              "@type": "Person",
              name: "Ryan Winzenburg",
              url: "https://winzenburg.com",
            },
            datePublished: "2026-08-28",
            url: CANONICAL,
          })}
        </script>
      </Helmet>

      <article className="pt-10 pb-20 md:pt-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            href="/subscribe"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Pulse archive
          </Link>

          {/* Header */}
          <header className="mb-12 border-b border-slate-800 pb-10">
            <p className="text-sm font-medium tracking-widest text-cyan-400 uppercase mb-4">
              Weekly AI Founder Pulse
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Week of August 28, 2026
            </h1>
            <div className="rounded-lg border border-slate-700/60 bg-slate-900/60 px-5 py-4">
              <p className="text-sm font-medium text-slate-400 mb-1">Central signal</p>
              <p className="text-base text-slate-200 leading-relaxed">
                The market is shifting from prompt-driven AI to agentic work that can act across
                interfaces, execute defined workflows, and produce monetizable outcomes.
              </p>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-5 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-100 [&_h3]:mt-8 [&_h3]:mb-4 [&_ul]:my-5 [&_li]:my-2 [&_li]:text-slate-300">
            <p className="text-slate-300 leading-relaxed text-lg">
              Coverage window: August 21–28, 2026. Scan scope: 13 channels monitored; 11 channels
              with qualifying uploads; 23 standard videos identified. Shorts, clips, and livestream
              replays were excluded.
            </p>

            <h2>Five signals to use</h2>

            {/* Signal 1 */}
            <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-red-400 bg-red-900/30 border border-red-800/50 rounded px-2 py-0.5">
                  HIGH
                </span>
                <h3 className="text-base font-semibold text-white leading-snug">
                  Agents are moving from "assist" to "act"
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=EoNH3Tn8wYE"
                    title="Greg Isenberg — WebMCP: Let AI Agents pay you money"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=_9OT25ZvrWs"
                    title="AI Jason — I don't prompt agents anymore..."
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=XgkW4A6lrDY"
                    title="Riley Brown — 11 Insane Things Cursor's NEW GrokBot Can Do"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=rKo9iLGjUbs"
                    title="Matt Wolfe — I Built a FREE App That Runs Your Entire Business"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=HGk9N-HctVA"
                    title="Leveling Up — Grok Bot's Best Workflows for Marketing"
                  />
                </ul>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                The key shift is from conversational assistance to agents that perform work across
                tools and interfaces. Differentiation moves to permissions, workflow control,
                exception handling, and evidence trails—governed action, not open-ended autonomy.
              </p>
            </div>

            {/* Signal 2 */}
            <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-red-400 bg-red-900/30 border border-red-800/50 rounded px-2 py-0.5">
                  HIGH
                </span>
                <h3 className="text-base font-semibold text-white leading-snug">
                  AI-native product creation is collapsing the distance from idea to live software
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=mHqSBCHEZOY"
                    title="Riley Brown — NEW ChatGPT Sites Just Changed Everything"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=ETa6ZYqoIXo"
                    title="Riley Brown — Codex vs Claude vs Grokbot"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=XgkW4A6lrDY"
                    title="Riley Brown — 11 Insane Things Cursor's NEW GrokBot Can Do"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=rKo9iLGjUbs"
                    title="Matt Wolfe — I Built a FREE App That Runs Your Entire Business"
                  />
                </ul>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                The competitive question is which environment can take a founder from intent to a
                working product with enough control to keep iterating in production. Product
                judgment, acceptance criteria, and evaluations become the durable asset.
              </p>
            </div>

            {/* Signal 3 */}
            <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-red-400 bg-red-900/30 border border-red-800/50 rounded px-2 py-0.5">
                  HIGH
                </span>
                <h3 className="text-base font-semibold text-white leading-snug">
                  The one-person, AI-augmented business model is becoming concrete
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=I-pPhs5Qbsk"
                    title="Marc Lou — My SaaS hit $4,000/day (solo)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=mVd6PIKY-P0"
                    title="Sabrina Ramonov — How I Made $120,000 with AI"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=TePQevG_Dgc"
                    title="Sabrina Ramonov — How I'd Start a 1-Person Business + Personal Brand with AI in 30 Days"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=NO4u4PiHC5o"
                    title="Sabrina Ramonov — How to Make Your First $1000 (3 Claude Prompts)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=TVpLs0F1zpA"
                    title="My First Million — How a $5B founder is using AI"
                  />
                </ul>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                Solo-founder content has moved beyond generic productivity advice. The active thesis
                is operating a broader commercial surface when agents own defined recurring work.
                The metric is a validated, repeatable commercial outcome—not agent novelty.
              </p>
            </div>

            {/* Signal 4 */}
            <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-blue-400 bg-blue-900/20 border border-blue-800/40 rounded px-2 py-0.5">
                  MEDIUM
                </span>
                <h3 className="text-base font-semibold text-white leading-snug">
                  Distribution is being rebuilt around AI search, agentic marketing, and direct
                  sales
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=Zvgm3KE5pHM"
                    title="Leveling Up — The New SEO Playbook for AI"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=qQluNEfSVHk"
                    title="Greg Isenberg — Making $$$ with Grok Bot"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=YS9In813jJ0"
                    title="Lenny's Podcast — 84 minutes of enterprise sales alpha | Jen Abel"
                  />
                </ul>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                Acquisition, content, and sales motions are being redesigned around agents. Keep
                brand, accuracy, and relationship judgment human; automate the repeatable production
                and research steps.
              </p>
            </div>

            {/* Signal 5 */}
            <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 px-6 py-5 mb-10 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-blue-400 bg-blue-900/20 border border-blue-800/40 rounded px-2 py-0.5">
                  MEDIUM
                </span>
                <h3 className="text-base font-semibold text-white leading-snug">
                  Infrastructure and interface bets are consolidating around agent-ready systems
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=YscDZpVF4CQ"
                    title="No Priors — Rethinking Legacy Data Infrastructure with Eon"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=MwNvowwcZOo"
                    title="Latent Space — Forward Deployed: Voice AI on what works in 2026"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=KpOW9Pk4BUs"
                    title="Latent Space — Simulating Humanity: from Generative Agents to Digital Twins"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=TInwQglNkzo"
                    title="Matt Wolfe — AI News: OpenAI Made a Massive Move Against NVIDIA"
                  />
                </ul>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                Watch for systems that make agents cheaper to run, easier to supervise, and safer
                to connect to real tools and data.
              </p>
            </div>

            {/* Watchlist */}
            <div className="my-10 border-t border-slate-800 pt-10 not-prose">
              <h2 className="text-xl font-bold text-white mb-5">Curated watchlist</h2>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 text-sm font-mono mt-0.5 shrink-0">01</span>
                  <a
                    href="https://www.youtube.com/watch?v=EoNH3Tn8wYE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm leading-snug flex items-start gap-1.5"
                  >
                    Greg Isenberg — WebMCP: Let AI Agents pay you money
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 text-sm font-mono mt-0.5 shrink-0">02</span>
                  <a
                    href="https://www.youtube.com/watch?v=I-pPhs5Qbsk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm leading-snug flex items-start gap-1.5"
                  >
                    Marc Lou — My SaaS hit $4,000/day (solo)
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 text-sm font-mono mt-0.5 shrink-0">03</span>
                  <a
                    href="https://www.youtube.com/watch?v=_9OT25ZvrWs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm leading-snug flex items-start gap-1.5"
                  >
                    AI Jason — I don't prompt agents anymore...
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                  </a>
                </li>
              </ol>
            </div>

            {/* Source note */}
            <div className="mt-10 rounded-lg border border-slate-800 bg-slate-900/30 px-5 py-4 not-prose">
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="font-medium text-slate-400">Source note:</span> 13 channels
                monitored; 11 channels with qualifying uploads; 23 standard videos identified for
                August 21–28, 2026. Shorts, clips, and livestream replays were excluded. This
                briefing is a source pulse, not a transcript or endorsement of any video's claims.
              </p>
            </div>
          </div>

          {/* Footer nav */}
          <div className="mt-16 border-t border-slate-800 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              All past issues
            </Link>
            <Link
              href="/pulse/2026-09-14"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-300 transition-colors"
            >
              Next issue →
            </Link>
          </div>
        </div>
      </article>

      <div className="container mx-auto px-6 max-w-3xl pb-20">
        <NewsletterSignup />
      </div>
    </div>
  );
}

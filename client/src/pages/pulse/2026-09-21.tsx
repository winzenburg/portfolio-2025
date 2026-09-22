import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import ResponsiveNav from "@/components/ResponsiveNav";
import NewsletterSignup from "@/components/NewsletterSignup";

const CANONICAL = "https://winzenburg.com/pulse/2026-09-21";

function VideoLink({ href, title, date }: { href: string; title: string; date: string }) {
  return (
    <li className="flex items-start gap-1.5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary transition-colors flex items-start gap-1"
      >
        {title}
        <ExternalLink className="w-3 h-3 shrink-0 mt-0.5" aria-hidden="true" />
      </a>
      <span className="text-muted-foreground shrink-0">· {date}</span>
    </li>
  );
}

export default function Pulse20260921() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNav currentPage="subscribe" />

      <Helmet>
        <title>Weekly AI Founder Pulse — Week of September 21, 2026 | Ryan Winzenburg</title>
        <meta
          name="description"
          content="The agent layer is becoming the business layer—but the durable advantage is controlled operating design. Five signals from the week of September 21, 2026."
        />
        <meta
          property="og:title"
          content="Weekly AI Founder Pulse — Week of September 21, 2026"
        />
        <meta
          property="og:description"
          content="The agent layer is becoming the business layer—but the durable advantage is controlled operating design."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Weekly AI Founder Pulse — Week of September 21, 2026",
            description:
              "The agent layer is becoming the business layer—but the durable advantage is controlled operating design.",
            author: {
              "@type": "Person",
              name: "Ryan Winzenburg",
              url: "https://winzenburg.com",
            },
            datePublished: "2026-09-21",
            url: CANONICAL,
          })}
        </script>
      </Helmet>

      <article className="pt-10 pb-20 md:pt-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            href="/subscribe"
            className="inline-flex items-center gap-2 text-primary hover:text-primary transition-colors mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Pulse archive
          </Link>

          {/* Header */}
          <header className="mb-12 border-b border-border pb-10">
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
              Weekly AI Founder Pulse
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
              Week of September 21, 2026
            </h1>
            <div className="rounded-lg border border-border/60 bg-muted/60 px-5 py-4">
              <p className="text-sm font-medium text-muted-foreground mb-1">Central signal</p>
              <p className="text-base text-foreground leading-relaxed">
                The agent layer is becoming the business layer—but the durable advantage is
                controlled operating design.
              </p>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-5 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-4 [&_ul]:my-5 [&_li]:my-2 [&_li]:text-muted-foreground">
            <p className="text-muted-foreground leading-relaxed text-lg">
              The leading pattern this week is agents connected to work: code, marketing, content,
              and workflow orchestration. The counter-signal is equally important. Once agents touch
              real operations, continuous evaluation, scoped authority, evidence capture, and human
              escalation become the product—not back-office compliance.
            </p>

            <h2>Five signals to use</h2>

            {/* Signal 1 */}
            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-red-400 bg-red-900/30 border border-red-800/50 rounded px-2 py-0.5">
                  HIGH
                </span>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Agent runtimes are shifting from demos to an operating layer
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=4mTLpuQpB80"
                    title="Greg Isenberg · Jev is HERE"
                    date="Sep 18"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=sGDWOMbKGHk"
                    title="Leveling Up · Jev Supercharged All Of Your AI Agents"
                    date="Sep 20"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=o1CogAtWdBk"
                    title="Riley Brown · JEV: How It Works"
                    date="Sep 18"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Founders are moving past isolated chats toward orchestrated work surfaces. The
                strategic test is whether the runtime preserves context, controls permissions,
                produces verifiable outputs, and can be swapped without losing the operating system
                around it.
              </p>
            </div>

            {/* Signal 2 */}
            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-red-400 bg-red-900/30 border border-red-800/50 rounded px-2 py-0.5">
                  HIGH
                </span>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  AI-native product production is collapsing into a coordinated pipeline
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=NDTbUObZTlM"
                    title="Riley Brown · NEW Claude Code Projects"
                    date="Sep 21"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=O8pzzIP1RyM"
                    title="Riley Brown · Astra Built Me an Entire Product Launch"
                    date="Sep 16"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=GkGufbIVVC8"
                    title="AI Jason · AI UGC campaign workflow"
                    date="Sep 16"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Specification, code, launch assets, and distribution are increasingly one flow
                rather than separate specialist handoffs. Design for a brief-to-evidence loop: a
                structured brief yields a build, a launch artifact, a test, and a retained decision
                record—while judgment gates remain explicit for positioning, accuracy, and brand
                risk.
              </p>
            </div>

            {/* Signal 3 */}
            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-amber-400 bg-amber-900/20 border border-amber-800/40 rounded px-2 py-0.5">
                  EMERGING
                </span>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Agent governance is becoming a revenue prerequisite
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=V_9TCu_21SE"
                    title="Latent Space · Why Static Evals Become Obsolete in Production"
                    date="Sep 19"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=Sc2_LfWgHb4"
                    title="Latent Space · The $20 Agent, $200M Liability"
                    date="Sep 16"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Static pre-launch demos do not establish production reliability, and low-cost agents
                can create asymmetric downside. The opening is governed automation: continuous
                scenario-specific evaluation, policy-bounded tools, audit-ready provenance, and
                escalation paths sized to the consequence.
              </p>
            </div>

            {/* Signal 4 */}
            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-blue-400 bg-blue-900/20 border border-blue-800/40 rounded px-2 py-0.5">
                  MEDIUM
                </span>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Solo economics are moving from "build faster" to repeatable loops
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=LU_K4CXOkQY"
                    title="Marc Lou · $100,000/month solo"
                    date="Sep 21"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=Fgutvd4-F_0"
                    title="Sabrina Ramonov · Top 10 Ways to Make Money with AI"
                    date="Sep 19"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=TAHAlGH_DK0"
                    title="My First Million · Funko marketplace"
                    date="Sep 21"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The actionable signal is operational: leverage comes from a narrow, repeatable
                system that can acquire, fulfill, learn, and retain with minimal incremental
                coordination. Treat revenue claims as directional, not as a benchmark.
              </p>
            </div>

            {/* Signal 5 */}
            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-10 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-blue-400 bg-blue-900/20 border border-blue-800/40 rounded px-2 py-0.5">
                  MEDIUM
                </span>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Model novelty is a commodity input; interchangeability is the asset
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=s9OC9_FWQ-4"
                    title="Sabrina Ramonov · Claude to ChatGPT"
                    date="Sep 15"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=Kof2VcHTjrk"
                    title="Matt Wolfe · The AI Slowdown"
                    date="Sep 18"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=N1rjtDs8blY"
                    title="No Priors · Why Diffusion Will Win AI Inference"
                    date="Sep 18"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Durable systems store intent, data constraints, policies, evaluations, and outcomes
                outside any one model. That lets you optimize performance, cost, and availability
                without destabilizing the workflow that creates value.
              </p>
            </div>

            {/* Watchlist */}
            <div className="my-10 border-t border-border pt-10 not-prose">
              <h2 className="text-xl font-bold text-foreground mb-5">Curated watchlist</h2>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground text-sm font-mono mt-0.5 shrink-0">01</span>
                  <a
                    href="https://www.youtube.com/watch?v=V_9TCu_21SE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary transition-colors text-sm leading-snug flex items-start gap-1.5"
                  >
                    Latent Space — Why Static Evals Become Obsolete in Production (Sep 19)
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground text-sm font-mono mt-0.5 shrink-0">02</span>
                  <a
                    href="https://www.youtube.com/watch?v=Sc2_LfWgHb4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary transition-colors text-sm leading-snug flex items-start gap-1.5"
                  >
                    Latent Space — The $20 Agent, $200M Liability (Sep 16)
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground text-sm font-mono mt-0.5 shrink-0">03</span>
                  <a
                    href="https://www.youtube.com/watch?v=O8pzzIP1RyM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary transition-colors text-sm leading-snug flex items-start gap-1.5"
                  >
                    Riley Brown — Astra Built Me an Entire Product Launch (Sep 16)
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                  </a>
                </li>
              </ol>
            </div>

            {/* Source note */}
            <div className="mt-10 rounded-lg border border-border bg-muted/30 px-5 py-4 not-prose">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-muted-foreground">Source note:</span> 13 channels
                scanned in parallel; 12 active channels; 26 qualifying standard uploads published
                September 15–21, 2026. Shorts and Live content were excluded. This briefing is a
                source pulse, not a transcript or endorsement of any video's claims.
              </p>
            </div>
          </div>

          {/* Footer nav */}
          <div className="mt-16 border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              All past issues
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

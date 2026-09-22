import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import ResponsiveNav from "@/components/ResponsiveNav";
import NewsletterSignup from "@/components/NewsletterSignup";

const CANONICAL = "https://winzenburg.com/pulse/2026-09-14";

function VideoLink({ href, title }: { href: string; title: string }) {
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
    </li>
  );
}

export default function Pulse20260914() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNav currentPage="subscribe" />

      <Helmet>
        <title>Weekly AI Founder Pulse — Week of September 14, 2026 | Ryan Winzenburg</title>
        <meta
          name="description"
          content="The agent layer is becoming the operating layer. Five signals from the week of September 14, 2026."
        />
        <meta
          property="og:title"
          content="Weekly AI Founder Pulse — Week of September 14, 2026"
        />
        <meta
          property="og:description"
          content="The agent layer is becoming the operating layer."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Weekly AI Founder Pulse — Week of September 14, 2026",
            description: "The agent layer is becoming the operating layer.",
            author: {
              "@type": "Person",
              name: "Ryan Winzenburg",
              url: "https://winzenburg.com",
            },
            datePublished: "2026-09-14",
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
              Week of September 14, 2026
            </h1>
            <div className="rounded-lg border border-border/60 bg-muted/60 px-5 py-4">
              <p className="text-sm font-medium text-muted-foreground mb-1">Central signal</p>
              <p className="text-base text-foreground leading-relaxed">
                The agent layer is becoming the operating layer.
              </p>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-5 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-4 [&_ul]:my-5 [&_li]:my-2 [&_li]:text-muted-foreground">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Across current-week long-form uploads from the monitored channels, the practical
              conversation has moved beyond model chat into agents that take work, finish workflows,
              and leave a decision trail. The durable edge is not access to a model. It is
              controlled operating design: scoped authority, evaluation, evidence, and human
              escalation.
            </p>

            <h2>Five signals to use</h2>

            {/* Signal 1 */}
            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-red-400 bg-red-900/30 border border-red-800/50 rounded px-2 py-0.5">
                  HIGH
                </span>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Agents are being positioned as workers, not copilots
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=maSdsTLaMuU"
                    title="Lenny's Podcast — How a handful of people built Grok Bot in 30 days"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=Ju41cQSe7hY"
                    title="Riley Brown — I Spent 100 Hours Using GPT-6 Astra"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=nglqTHwuZ-8"
                    title="Greg Isenberg — GPT-6 Astra: How I'd Make Money With It"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Creator attention has moved from "which model wins?" to "what task can I hand it
                next?" Keep your model layer interchangeable and benchmark proprietary workflows on
                completion rate, cycle time, exception rate, and reviewer effort—not on vendor
                claims.
              </p>
            </div>

            {/* Signal 2 */}
            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-red-400 bg-red-900/30 border border-red-800/50 rounded px-2 py-0.5">
                  HIGH
                </span>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  End-to-end loops beat isolated feature demos
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=_LCeJZFIsd4"
                    title="Leveling Up — related AI workflow content from the week"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=ifz8NGHuHtY"
                    title="Matt Wolfe — AI news / tooling cluster"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=xo8WsOaBTcw"
                    title="Additional current-week workflow upload"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Design the retained decision record first; treat the model as a replaceable worker
                inside a brief → build → ship → learn loop.
              </p>
            </div>

            {/* Signal 3 */}
            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-blue-400 bg-blue-900/20 border border-blue-800/40 rounded px-2 py-0.5">
                  MEDIUM
                </span>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  One-person firms are becoming portfolio operators
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=LNFGf5w99Gs"
                    title="Sabrina Ramonov — These 5 FREE AI Tools Made Me $1M With Zero Employees"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=XqS7kIWMIDE"
                    title="Dan Koe — If You Have Multiple Interests, Please Start a One-Person Business"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=gHUMarocxy4"
                    title="My First Million — high school dropout / $200M brand"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The useful mental model is a portfolio operator who owns demand, taste, constraints,
                and capital allocation while agents execute bounded production.
              </p>
            </div>

            {/* Signal 4 */}
            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-blue-400 bg-blue-900/20 border border-blue-800/40 rounded px-2 py-0.5">
                  MEDIUM
                </span>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Distribution is being rebuilt around AI search and agentic marketing
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=-KcHn0QcSb0"
                    title="Current-week distribution / AI SEO cluster"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Treat channel claims as market signal. The operating lesson is measurable
                acquisition loops with human judgment on brand and accuracy.
              </p>
            </div>

            {/* Signal 5 */}
            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-10 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider text-amber-400 bg-amber-900/20 border border-amber-800/40 rounded px-2 py-0.5">
                  EMERGING
                </span>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Agentic finance will force permissioned, explainable workflows
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=uLDK4l_-gUE"
                    title="No Priors — Coinbase's Everything Exchange: Agentic Finance, Stablecoins & Tokenization"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Authority design, auditability, and exception queues become product requirements
                once agents can move money or make consequential commitments.
              </p>
            </div>

            {/* Watchlist */}
            <div className="my-10 border-t border-border pt-10 not-prose">
              <h2 className="text-xl font-bold text-foreground mb-5">Curated watchlist</h2>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground text-sm font-mono mt-0.5 shrink-0">01</span>
                  <a
                    href="https://www.youtube.com/watch?v=Ju41cQSe7hY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary transition-colors text-sm leading-snug flex items-start gap-1.5"
                  >
                    Riley Brown — I Spent 100 Hours Using GPT-6 Astra
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground text-sm font-mono mt-0.5 shrink-0">02</span>
                  <a
                    href="https://www.youtube.com/watch?v=maSdsTLaMuU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary transition-colors text-sm leading-snug flex items-start gap-1.5"
                  >
                    Lenny's Podcast — How a handful of people built Grok Bot in 30 days
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground text-sm font-mono mt-0.5 shrink-0">03</span>
                  <a
                    href="https://www.youtube.com/watch?v=uLDK4l_-gUE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary transition-colors text-sm leading-snug flex items-start gap-1.5"
                  >
                    No Priors — Coinbase's Everything Exchange: Agentic Finance
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                  </a>
                </li>
              </ol>
            </div>

            {/* Source note */}
            <div className="mt-10 rounded-lg border border-border bg-muted/30 px-5 py-4 not-prose">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-muted-foreground">Source note:</span> 13 monitored
                YouTube channels; 21 qualifying standard long-form uploads from 10 active channels;
                scan completed September 14, 2026. Video-title claims and creator framing are
                treated as market signals; this briefing is a source pulse, not a transcript or
                endorsement.
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
            <Link
              href="/pulse/2026-09-21"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-muted-foreground transition-colors"
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

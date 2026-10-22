import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import ResponsiveNav from "@/components/ResponsiveNav";
import NewsletterSignup from "@/components/NewsletterSignup";

const CANONICAL = "https://winzenburg.com/pulse/2026-09-28";
const CENTRAL_SIGNAL = "The agent layer is becoming the workflow surface.";

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

function HeatBadge({ level }: { level: "HIGH" | "MEDIUM" | "EMERGING" }) {
  const styles =
    level === "HIGH"
      ? "text-red-700 bg-red-50 border-red-200"
      : level === "MEDIUM"
        ? "text-blue-700 bg-blue-50 border-blue-200"
        : "text-amber-700 bg-amber-50 border-amber-200";

  return (
    <span
      className={`text-xs font-bold tracking-wider border rounded px-2 py-0.5 shrink-0 ${styles}`}
    >
      {level}
    </span>
  );
}

export default function Pulse20260928() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNav currentPage="subscribe" />

      <Helmet>
        <title>
          Weekly AI Founder Pulse: Week of September 28, 2026 | Ryan Winzenburg
        </title>
        <meta
          name="description"
          content={`${CENTRAL_SIGNAL} Five signals from the week of September 28, 2026.`}
        />
        <meta
          property="og:title"
          content="Weekly AI Founder Pulse: Week of September 28, 2026"
        />
        <meta property="og:description" content={CENTRAL_SIGNAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Weekly AI Founder Pulse: Week of September 28, 2026",
            description: CENTRAL_SIGNAL,
            author: {
              "@type": "Person",
              name: "Ryan Winzenburg",
              url: "https://winzenburg.com",
            },
            datePublished: "2026-10-04",
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

          <header className="mb-12 border-b border-border pb-10">
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
              Weekly AI Founder Pulse
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
              Week of September 28, 2026
            </h1>
            <div className="rounded-lg border border-border/60 bg-muted/60 px-5 py-4">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Central signal
              </p>
              <p className="text-base text-foreground leading-relaxed">
                {CENTRAL_SIGNAL}
              </p>
            </div>
          </header>

          <div className="prose prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-5 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-4 [&_ul]:my-5 [&_li]:my-2 [&_li]:text-muted-foreground">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Connectors, persistent project context, and multi-model routing
              are moving AI from isolated assistance toward operational systems
              that can observe, decide, and act. The durable edge is not
              autonomous activity. It is the control plane around it:
              permissions, evaluation, traceability, and escalation.
            </p>

            <h2>Five signals to use</h2>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Connected agents are becoming the operating layer
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=84q4WA3kA8Q"
                    title="Meta Muse AI Connectors: The App Store for AI?"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=o4Vi5uBZYH0"
                    title="Jev + Treg is a crazy combo for automation"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=cFx9Z3ZXca0"
                    title="Jev: Exclusive Deep Dive"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Greg Isenberg&apos;s connector/App Store framing, AI
                Jason&apos;s Jev + Treg workflow, and Latent Space&apos;s Jev
                deep dive point to agent systems assembled from identities,
                tools, state, and triggers. Design for a narrow, permissioned
                operating loop with observable handoffs before chasing
                end-to-end autonomy.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  The right architecture is multi-model, not winner-take-all
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=0t-eWrGFZyA"
                    title="Claude Opus 5.5 Didn't Need to Go This Hard"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=959RFRspIIc"
                    title="Opus 5.5 Is JUST the Beginning"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=dCX4PE2HxMs"
                    title={'Why "One Model Wins" Was the Wrong Bet'}
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The Opus 5.5 wave is less important than its pattern: capability
                is jumping quickly, and the OpenRouter thesis makes the case for
                treating models as interchangeable workers. Build task-level
                routing, evaluation sets, and fallbacks now. Vendor loyalty is
                an operational risk when the frontier moves weekly.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="MEDIUM" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Shipping speed is rising; judgment is the constraint
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=ZG8Mf3P9xzI"
                    title="The limiting factor: how to design an AI software factory for speed"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=VM5kuvWgwDY"
                    title="Everyone's shipping more. Does any of it matter?"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=DqF08Dz3nok"
                    title="How to run your product team like a research lab"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The AI software factory is real, but shipping more is not
                evidence of value. Product advantage is moving into problem
                selection, research, workflow design, and quality thresholds.
                Those are areas where a human remains accountable and the agent
                must be measured against outcomes rather than activity.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="MEDIUM" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  The solo-business promise is shifting from content to systems
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=EOiypb2wXM0"
                    title="I Forced Myself to Build $1M Business with AI"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=LU_K4CXOkQY"
                    title="$100,000/month solo"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=e7s7jRgHWsg"
                    title="Take Upwork jobs, let AI do them"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                &quot;$1M with AI&quot; and &quot;$100K/month solo&quot; remain
                strong narrative magnets, while AI-assisted service delivery is
                widening the supply of execution. The viable play is not generic
                AI output. It is a repeatable outcome, proprietary context,
                distribution, and a cost-efficient operating system.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-10 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="EMERGING" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Governance is becoming a feature, not a brake
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=B7DdNj_VjcU"
                    title="Bio-security is an AI Arms Race"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=TCpRwJBQvW0"
                    title="Re-Founding Incumbents for the AI Era"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                As high-consequence AI moves into sensitive domains, traceable
                decision context and explicit human authority become part of the
                product, not compliance paperwork. The winning implementations
                will make permissions, provenance, confidence, reversibility,
                and escalation legible to operators and buyers.
              </p>
            </div>

            <div className="my-10 border-t border-border pt-10 not-prose">
              <h2 className="text-xl font-bold text-foreground mb-5">
                Curated watchlist
              </h2>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground text-sm font-mono mt-0.5 shrink-0">
                    01
                  </span>
                  <a
                    href="https://www.youtube.com/watch?v=cFx9Z3ZXca0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary transition-colors text-sm leading-snug flex items-start gap-1.5"
                  >
                    Jev: Exclusive Deep Dive, Latent Space (2h 22m)
                    <ExternalLink
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground text-sm font-mono mt-0.5 shrink-0">
                    02
                  </span>
                  <a
                    href="https://www.youtube.com/watch?v=ZG8Mf3P9xzI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary transition-colors text-sm leading-snug flex items-start gap-1.5"
                  >
                    The limiting factor: how to design an AI software factory
                    for speed, Lenny&apos;s Podcast (19m)
                    <ExternalLink
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground text-sm font-mono mt-0.5 shrink-0">
                    03
                  </span>
                  <a
                    href="https://www.youtube.com/watch?v=84q4WA3kA8Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary transition-colors text-sm leading-snug flex items-start gap-1.5"
                  >
                    Meta Muse AI Connectors: The App Store for AI?, Greg
                    Isenberg (26m)
                    <ExternalLink
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              </ol>
            </div>

            <div className="mt-10 rounded-lg border border-border bg-muted/30 px-5 py-4 not-prose">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-muted-foreground">
                  Source note:
                </span>{" "}
                Source window: standard uploads published Sep 21-28, 2026 across
                the monitored channel set. Heat labels reflect frequency and
                strategic relevance in this week&apos;s sample, not market-size
                estimates. This briefing is a source pulse, not an endorsement
                of any video&apos;s claims.
              </p>
            </div>
          </div>

          <nav
            aria-label="Issue navigation"
            className="mt-16 border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/pulse/2026-09-21"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Previous issue
              </Link>
              <Link
                href="/subscribe"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary transition-colors"
              >
                All past issues
              </Link>
            </div>
            <Link
              href="/pulse/2026-10-05"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-muted-foreground transition-colors"
            >
              Next issue →
            </Link>
          </nav>
        </div>
      </article>

      <div className="container mx-auto px-6 max-w-3xl pb-20">
        <NewsletterSignup />
      </div>
    </div>
  );
}

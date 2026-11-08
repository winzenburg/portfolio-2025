import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import ResponsiveNav from "@/components/ResponsiveNav";
import WeeklyPulseSignup from "@/components/WeeklyPulseSignup";

const CANONICAL = "https://winzenburg.com/pulse/2026-10-26";
const CENTRAL_SIGNAL =
  "The agent layer is becoming the business layer, but durable advantage is moving from what an agent can do to how rigorously its actions are bounded, evidenced, and tied to an economic loop.";

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

function WatchItem({
  index,
  href,
  title,
  detail,
}: {
  index: string;
  href: string;
  title: string;
  detail: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-muted-foreground text-sm font-mono mt-0.5 shrink-0">
        {index}
      </span>
      <div className="min-w-0">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary transition-colors text-sm leading-snug inline-flex items-start gap-1.5"
        >
          {title}
          <ExternalLink
            className="w-3.5 h-3.5 shrink-0 mt-0.5"
            aria-hidden="true"
          />
        </a>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          {detail}
        </p>
      </div>
    </li>
  );
}

export default function Pulse20261026() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNav currentPage="subscribe" />

      <Helmet>
        <title>
          Weekly AI Founder Pulse: Week of October 26, 2026 | Ryan Winzenburg
        </title>
        <meta
          name="description"
          content={`${CENTRAL_SIGNAL} Five signals from the week of October 26, 2026.`}
        />
        <meta
          property="og:title"
          content="Weekly AI Founder Pulse: Week of October 26, 2026"
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
            headline: "Weekly AI Founder Pulse: Week of October 26, 2026",
            description: CENTRAL_SIGNAL,
            author: {
              "@type": "Person",
              name: "Ryan Winzenburg",
              url: "https://winzenburg.com",
            },
            datePublished: "2026-11-01",
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
              Week of October 26, 2026
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
              Agents are earning authority one rung at a time. The boundaries are becoming the product.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              This week&apos;s strongest examples treated agents as a ladder of delegated authority, not a switch you flip. Greg Isenberg walked through nine stages of agent adoption. No Priors spent two episodes on security for the agentic web. Latent Space looked at an eval that knows the answer key and a recommendation engine for commodity traders.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The founders pulling ahead define what each agent may read, recommend, execute, and hand off, keep evidence at every boundary, and tie the work to a loop that compounds with use. Bounded authority, evidence at the edges, a loop that pays.
            </p>

            <h2>Five signals to use</h2>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Trust architecture beats autonomy theater
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=nRl-7Yhmbog"
                    title="Greg Isenberg: The 9 Stages of AI Agent Adoption, Explained (Oct 21)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=rSKwyE5_EJA"
                    title="Eric Siu: I've Tried All The AI Systems. This Works Best For Business (Oct 20)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=ZIBI6FiLxgQ"
                    title="Riley Brown: How I'm Actually Using Claude Duet (Oct 23)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Agent adoption is turning into a ladder of delegated authority, while operating teams build persistent agent workspaces and bot fleets. Define what each agent may read, recommend, execute, and hand off, and keep evidence at every boundary.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Security is now core product architecture
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=6VprwfSc4Xk"
                    title="No Priors: Democratizing Security for the Agentic Web (Oct 23)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=PST8yesYOSo"
                    title="No Priors: The New Apex Predator (Oct 22)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The agentic web adds attack surface along with capacity. Systems that last need identity, least-privilege access, traceable tool use, adversarial testing, and a way for a person to stop consequential actions.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Vertical decision systems need an answer key
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=vhPCo-8K78U"
                    title="Latent Space: An Eval for AI Scientists That Knows the Answer Key (Oct 26)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=DWHyPWnzGAI"
                    title="Latent Space: The Recommendation Engine for Commodity Traders (Oct 22)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=c7HzTX9CZic"
                    title="My First Million: We put a multimillionaire's portfolio into Claude (Oct 19)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                High-stakes AI needs a constrained decision environment with provenance, simulations or backtests, explicit evaluation criteria, and human override, not just a fluent interface. That matters most when a model is combining structured and unstructured inputs.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="MEDIUM" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  The one-person operating model is going modular
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=ocHuQVz0-5o"
                    title="Sabrina Ramonov: Hermes AI Agent Automates Social Media (Oct 24)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=NoohHrD4QuQ"
                    title="Eric Siu: How I'm Building My AI Talent Team (Oct 26)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=4PO0x-myitw"
                    title="Riley Brown: How Smart People Are Using AI Right Now (Oct 22)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Founders are packaging work into narrow capability units instead of adopting one giant assistant. Each unit needs a measurable outcome, controlled access, a clear path for exceptions, and a person accountable for review.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-10 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="EMERGING" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Monetization is shifting from tools to proprietary loops
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=HKNpCwG3nlc"
                    title="Greg Isenberg: Build Wealth With Main Street AI (Oct 26)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=6geIxfCmRfo"
                    title="My First Million: 2 business ideas, moats and the best stuff we found on X (Oct 23)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=5z5q5BdzZEE"
                    title="Sabrina Ramonov: 1,000 Hours of Making Money With Claude (Oct 22)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The strongest founder examples pair AI with a distribution edge, an operating data loop, or a domain-specific workflow. Test whether the workflow builds knowledge or margin each time it runs.
              </p>
            </div>

            <div className="my-10 border-t border-border pt-10 not-prose">
              <h2 className="text-xl font-bold text-foreground mb-5">
                Curated watchlist
              </h2>
              <ol className="space-y-5">
                <WatchItem
                  index="01"
                  href="https://www.youtube.com/watch?v=nRl-7Yhmbog"
                  title="Greg Isenberg, Oct 21: The 9 Stages of AI Agent Adoption, Explained"
                  detail="Use it to pressure-test your own product against a graduated, trust-based model of delegation."
                />
                <WatchItem
                  index="02"
                  href="https://www.youtube.com/watch?v=DWHyPWnzGAI"
                  title="Latent Space, Oct 22: The Recommendation Engine for Commodity Traders"
                  detail="A vertical design pattern for combining scattered data, advisory output, and domain constraints in a trading workflow."
                />
                <WatchItem
                  index="03"
                  href="https://www.youtube.com/watch?v=6VprwfSc4Xk"
                  title="No Priors, Oct 23: Democratizing Security for the Agentic Web"
                  detail="A timely architectural lens before you give agents broader tool access or connect them to other agents."
                />
              </ol>
            </div>

            <div className="mt-10 rounded-lg border border-border bg-muted/30 px-5 py-4 not-prose">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-muted-foreground">
                  Source note:
                </span>{" "}
                13 channels scanned, 10 posted, 27 standard uploads between Oct
                19 and Oct 26, 2026. All video signals come from the 13 tracked
                YouTube channels, Oct 19-26, 2026. The Weekly AI Founder Pulse
                is a weekly synthesis of AI operator content, written for
                founders running agentic businesses. Not investment, legal, or
                tax advice.
              </p>
            </div>
          </div>

          <nav
            aria-label="Issue navigation"
            className="mt-16 border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/pulse/2026-10-19"
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
              href="/pulse/2026-11-02"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-muted-foreground transition-colors"
            >
              Next issue →
            </Link>
          </nav>
        </div>
      </article>

      <div className="container mx-auto px-6 max-w-3xl pb-20">
        <WeeklyPulseSignup />
      </div>
    </div>
  );
}

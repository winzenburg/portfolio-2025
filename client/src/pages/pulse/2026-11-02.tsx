import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import ResponsiveNav from "@/components/ResponsiveNav";
import WeeklyPulseSignup from "@/components/WeeklyPulseSignup";

const CANONICAL = "https://winzenburg.com/pulse/2026-11-02";
const HERO_IMAGE =
  "https://winzenburg.com/images/articles/ai-cost-control-hero.webp";
const CENTRAL_SIGNAL =
  "The emerging advantage is a governed operating loop: agents that take action, make their evidence visible, stay inside policy boundaries, and route irreversible steps to people.";

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

export default function Pulse20261102() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNav currentPage="subscribe" />

      <Helmet>
        <title>
          Weekly AI Founder Pulse: Week of November 2, 2026 | Ryan Winzenburg
        </title>
        <meta
          name="description"
          content={`${CENTRAL_SIGNAL} Five signals from the week of November 2, 2026.`}
        />
        <meta
          property="og:title"
          content="Weekly AI Founder Pulse: Week of November 2, 2026"
        />
        <meta property="og:description" content={CENTRAL_SIGNAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content={HERO_IMAGE} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={HERO_IMAGE} />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Weekly AI Founder Pulse: Week of November 2, 2026",
            description: CENTRAL_SIGNAL,
            image: HERO_IMAGE,
            author: {
              "@type": "Person",
              name: "Ryan Winzenburg",
              url: "https://winzenburg.com",
            },
            datePublished: "2026-11-08",
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
              Week of November 2, 2026
            </h1>
            <figure className="mb-8">
              <Link
                href="/articles/ai-cost-control"
                className="block overflow-hidden rounded-lg border border-border/60"
              >
                <img
                  src="/images/articles/ai-cost-control-hero.webp"
                  alt="AI Cost Control That Doesn't Break Velocity"
                  width={2880}
                  height={1615}
                  className="w-full h-auto"
                />
              </Link>
              <figcaption className="mt-2 text-sm text-muted-foreground">
                Illustration via winzenburg.com · AI Cost Control That
                Doesn&apos;t Break Velocity
              </figcaption>
            </figure>
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
              The advantage is a governed operating loop, not a bigger model or
              a slicker chat surface. Five signals, three videos worth the full
              runtime.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The agent layer is becoming the business layer.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The edge is not a larger model or a slicker chat surface. This
              week&apos;s videos kept tying agentic workflows to financial
              operations, enterprise automation, distribution, and lean-company
              monetization.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Build the loop where an agent acts, the evidence stays visible,
              policy sets the limits, and a person owns anything that cannot be
              undone. Act, show evidence, stay in policy, hand off what is
              irreversible.
            </p>

            <h2>Five signals to use</h2>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Agents are becoming the operating system for work
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=YT0u2eQ-Aj4"
                    title="Riley Brown: My AI Setup Feels Like Cheating (Here's All of It) (Oct 28)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=AtjFk9f44HE"
                    title="Matt Wolfe: He Built an AI Board of Billionaires (Free & Open-Source) (Oct 28)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=zHG6sAss_kE"
                    title="Latent Space: Why Agents Love Supabase (Oct 28)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The practical frontier is moving from one-off copilots to
                systems that coordinate multi-step work across data,
                applications, and teams. Start roadmaps with the work object an
                agent can act on, such as a workflow, account, property,
                portfolio, or decision record, and the minimum permissions
                needed to move it forward.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Governance is becoming the product
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=KM3VQZKjpiY"
                    title="Latent Space: How Arca Handles a $100,000 Tax Bill With AI and Human Approval (Oct 31)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=MRQTlwcW-aQ"
                    title="How Anthropic ships the #1 LLM in the World (Oct 27)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=EZcWEsMuLb4"
                    title="No Priors: Taking on ServiceNow: Coding Agents for the Rest of Us (Oct 29)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Long-horizon finance and enterprise automation raise the
                standard from helpful output to attributable action. The durable
                agent interface is explicit: plan, evidence, policy check,
                approval, execution, and outcome log. Build those control points
                into the core experience, not as a later enterprise add-on.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  AI is becoming a buyer and a distribution layer
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=sLiWVtHYJvE"
                    title="Eric Siu: Agents Are The New AEO (Oct 28)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The acquisition surface is shifting beyond browser rankings and
                human research. Structured claims, clear constraints,
                transparent pricing, comparison-ready evidence, and
                machine-readable product facts become agent-facing growth
                assets. Treat answer-engine optimization as product information
                architecture, not only a marketing channel.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="MEDIUM" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Service stacks are replacing feature catalogs
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=AqqjH_uv-_w"
                    title="Greg Isenberg: SaaS is dead? (Oct 29)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=RveQCVgxyjs"
                    title="Marc Lou: I've made $3M with my 36 startups (Nov 2)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Lean firms can sell outcomes by packaging research, analysis,
                content, and operations behind a narrow agent system. The
                defensible asset is not generic model output. It is the
                proprietary workflow, outcome data, quality controls, and a
                commercial promise tied to a measurable job.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-10 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="EMERGING" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  State, data, and action history are becoming agent
                  architecture
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=v-d1WTqIULs"
                    title="Latent Space: Building ChatGPT for Finance (Oct 30)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=zHG6sAss_kE"
                    title="Latent Space: Why Agents Love Supabase (Oct 28)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=oJcn1rowmFU"
                    title="Sabrina Ramonov: Robot Dog With an Arm at Toborlife AI (Oct 31)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                As agents extend across long-horizon and physical-world
                workflows, fragmented context becomes a product failure rather
                than an implementation inconvenience. Where decisions,
                permissions, memory, and outcomes live will determine whether an
                agent is a credible system of action or an impressive one-shot
                assistant.
              </p>
            </div>

            <div className="my-10 border-t border-border pt-10 not-prose">
              <h2 className="text-xl font-bold text-foreground mb-5">
                Curated watchlist
              </h2>
              <ol className="space-y-5">
                <WatchItem
                  index="01"
                  href="https://www.youtube.com/watch?v=KM3VQZKjpiY"
                  title="Latent Space, Oct 31: How Arca Handles a $100,000 Tax Bill With AI and Human Approval"
                  detail="The clearest reference this week for governed financial-agent design, and for the difference between insight, authority, and action."
                />
                <WatchItem
                  index="02"
                  href="https://www.youtube.com/watch?v=AtjFk9f44HE"
                  title="Matt Wolfe, Oct 28: He Built an AI Board of Billionaires (Free & Open-Source)"
                  detail="A practical scan for reusable patterns in running a decision past a panel of AI advisors."
                />
                <WatchItem
                  index="03"
                  href="https://www.youtube.com/watch?v=st61aKW8P5A"
                  title="Greg Isenberg, Oct 28: $100M ARR Founder: The Next Big AI Opportunity"
                  detail="Useful framing for vertical agent harnesses and for packaging repeatable operating knowledge as a business."
                />
              </ol>
            </div>

            <div className="mt-10 rounded-lg border border-border bg-muted/30 px-5 py-4 not-prose">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-muted-foreground">
                  Source note:
                </span>{" "}
                13 channels scanned, 10 posted, 21 standard uploads between Oct
                27 and Nov 2, 2026. All video signals come from the tracked
                YouTube channels, Oct 27-Nov 2, 2026. Titles and dates were
                checked against the video pages. Analysis is our assessment, not
                a claim by the creators. The Weekly AI Founder Pulse is a weekly
                synthesis of AI operator content, written for founders running
                agentic businesses. Not investment, legal, or tax advice.
              </p>
            </div>
          </div>

          <nav
            aria-label="Issue navigation"
            className="mt-16 border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <Link
              href="/pulse/2026-10-26"
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
          </nav>
        </div>
      </article>

      <div className="container mx-auto px-6 max-w-3xl pb-20">
        <WeeklyPulseSignup />
      </div>
    </div>
  );
}

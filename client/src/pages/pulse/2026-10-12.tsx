import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import ResponsiveNav from "@/components/ResponsiveNav";
import WeeklyPulseSignup from "@/components/WeeklyPulseSignup";

const CANONICAL = "https://winzenburg.com/pulse/2026-10-12";
const CENTRAL_SIGNAL =
  "The agent layer is now the business layer, and the differentiator is governance, not model access.";

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

export default function Pulse20261012() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNav currentPage="subscribe" />

      <Helmet>
        <title>
          Weekly AI Founder Pulse: Week of October 12, 2026 | Ryan Winzenburg
        </title>
        <meta
          name="description"
          content={`${CENTRAL_SIGNAL} Five signals from the week of October 12, 2026.`}
        />
        <meta
          property="og:title"
          content="Weekly AI Founder Pulse: Week of October 12, 2026"
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
            headline: "Weekly AI Founder Pulse: Week of October 12, 2026",
            description: CENTRAL_SIGNAL,
            author: {
              "@type": "Person",
              name: "Ryan Winzenburg",
              url: "https://winzenburg.com",
            },
            datePublished: "2026-10-18",
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
              Week of October 12, 2026
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
              Agentic AI grew up this week, and governance became the product.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              OpenAI&apos;s DevDay stack shipped always-on Dots agents with
              cloud computers and browsers, an Agents API with computer use, a
              bounded Decisions API, and MCP Events so outside systems can start
              agent work without polling. Lenny&apos;s Podcast opened the week
              with the same conclusion from the operator side: the internet is
              going to agents. Riley Brown spent the week teaching builders to
              graduate from chat to Claude Code and to treat Dots as a real work
              surface.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The strategic read is unambiguous. Anyone can buy the same model;
              almost nobody can show which agent held which credential, why it
              acted, and who approved the write. BCG&apos;s 2026 Applied AI
              Index puts numbers on it: the agentic share of total AI value
              climbed from 17% to 22% in a year, on track for 39% by 2030, and
              companies with all six enterprise AI controls in place extract
              three times the agentic value of those with one.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Autonomy is cheap. Accountable autonomy is the business.
            </p>

            <h2>Five signals to use</h2>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Agentic AI left the demo and entered the org chart
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=FAQj3rFdnbs"
                    title="Riley Brown: Graduate From Claude To Claude Code (Oct 11)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=WXhOxfPECnM"
                    title="ChatGPT Dots Is WAY More Powerful Than You Think (Oct 9)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=sRBpc624dGk"
                    title="Latent Space: High Taste Testers: DevDay Edition (Oct 12)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=OIriINdD2O0"
                    title="No Priors: Why Third Party Chips Survive (Oct 11)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The week&apos;s operator content treated persistent agents as
                installed infrastructure rather than a novelty. The practical
                question shifted from &quot;can an agent do this?&quot; to
                &quot;who supervises the twenty of them we just deployed?&quot;
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  The internet is going to agents: discovery is now a
                  machine-readable contract
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=aryWqheMmSI"
                    title="Lenny's Podcast: The internet is going to agents (Oct 12)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=p1WnlWlrf3c"
                    title="AEO Won't Get Your Plugin Recommended (Oct 10)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=Kj-tdb7w14U"
                    title="Eric Siu: The New Rules of AI Search: AEO and SEO Strategies to Get Found (Oct 7)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=1jQJlxZNsFY"
                    title="How to Win at AEO and SEO Using AI Agents in 2027 (Oct 5)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Being &quot;found&quot; now means being invocable by an agent.
                Distribution is becoming structured data, listing access, and
                trust signals machines can verify, not copy that persuades a
                human to click.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  The solo operator is the fastest-growing business model on the
                  internet
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=bQPU6UJ4iCw"
                    title="Greg Isenberg: 13 Businesses for the Age of AI (Oct 6)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=rkK8ZyzYyEA"
                    title="8 GitHub Repos To Go Viral and Make Money (Oct 8)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=SsHjtm27ToU"
                    title="My First Million: How Rockefeller's playbook is showing up in AI (Oct 7)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=4zvicsf1bJQ"
                    title="3 businesses we think are about to blow up (Oct 5)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=4DaXFjchqIU"
                    title="Marc Lou: I was paid $112,000 for a HYROX race (Oct 12)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                AI compresses the headcount required to reach revenue, which
                pushes the binding constraint from labor to distribution and
                trust.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="MEDIUM" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Accountability is the real gate on autonomy
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=xDLVZOIUXkQ"
                    title="Lenny's Podcast: Autonomy Only Works If You Own the Mistakes (Oct 11)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=qKAB2ihfO30"
                    title="His Agent Caught the Outage Before the Demo (Oct 7)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=SPRV_ttzEQI"
                    title="Eric Siu: How the Top 1% of Founders Build Their AI Teams (Oct 8)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=6au0bt2MJvI"
                    title="How the Top 1% of Marketers Use AI Agents Today (Oct 6)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Humans are not being removed from the loop; they are being
                repositioned to the approval boundary, where the value of the
                agent is measured by whether its action can be explained and
                reversed.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  AI-native product development: context is the product, and the
                  operating model is a lab
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=3I6QYkccd3o"
                    title="Lenny's Podcast: Why every company now needs to think and operate like a lab team (Oct 11)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=U_5QxBKzOl4"
                    title="AI Loops Actually Aren't The Future (Oct 9)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=1e__TZBzxBc"
                    title="OpenAI has more than 120 ex-YC founders (Oct 8)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=NUizyuGj-kE"
                    title="Matt Wolfe: AI News: Haiku-5.5, Visual ChatGPT, Grok's New Trick (Oct 9)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=grOilk8aCS0"
                    title="AI Design Hack Saves HOURS (Oct 8)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Loops without harnesses, evaluation, and retained context
                produce motion, not progress. Keep architecture portable rather
                than chasing each release.
              </p>
            </div>

            <h2>Two more signals on the radar</h2>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="MEDIUM" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Inference economics as the new cost curve
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <li className="text-sm text-foreground leading-snug">
                    No Priors, Oct 9-11
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                No Priors spent the week on third-party chips, open-model
                safety, and where the next bottleneck sits: cost per reliable
                task, not cost per token.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-10 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="EMERGING" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Autonomous science and labs that run themselves
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <li className="text-sm text-foreground leading-snug">
                    Latent Space, Oct 8-10
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Latent Space carried autonomous-lab and
                superintelligence-for-synthesis work into the mainstream feed,
                alongside a candid teardown of why AlphaFold did not close
                protein folding.
              </p>
            </div>

            <div className="my-10 border-t border-border pt-10 not-prose">
              <h2 className="text-xl font-bold text-foreground mb-5">
                Curated watchlist
              </h2>
              <ol className="space-y-5">
                <WatchItem
                  index="01"
                  href="https://www.youtube.com/watch?v=sRBpc624dGk"
                  title="Latent Space, Oct 12: High Taste Testers: DevDay Edition"
                  detail="A practitioner-grade review of the agent stack that everyone else is still summarizing. Watch it to hear where computer-use, the Decisions API, and MCP Events actually break."
                />
                <WatchItem
                  index="02"
                  href="https://www.youtube.com/watch?v=aryWqheMmSI"
                  title="Lenny's Podcast, Oct 12: The internet is going to agents"
                  detail="The clearest articulation this week of what changes when the buyer is a machine. It reframes distribution, pricing, and product surface area at once."
                />
                <WatchItem
                  index="03"
                  href="https://www.youtube.com/watch?v=DHXPdVrsHkk"
                  title="My First Million, Oct 11: What Palmer Luckey would build if he started over"
                  detail="Most directly relevant to founders selling into defense. A founder who built hardware for the DoD under public scrutiny describing what he would do differently."
                />
              </ol>
            </div>

            <div className="mt-10 rounded-lg border border-border bg-muted/30 px-5 py-4 not-prose">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-muted-foreground">
                  Source note:
                </span>{" "}
                13 channels scanned, 10 posted in the last 7 days, week of Oct
                5-12, 2026. Dan Koe, Arvid Kahl, and AI Jason had no
                current-week uploads. Context sources: OpenAI DevDay 2026
                agent-stack technical analysis (Plexicus, Sept 29); BCG, The
                Formula for Agentic AI Value, 2026 Applied AI Index (agentic
                share of AI value 17% -&gt; 22% -&gt; 39% by 2030; 3x value with
                six enterprise AI controls). All video signals sourced from the
                13 tracked YouTube channels, Oct 5-12, 2026. The Weekly AI
                Founder Pulse is a weekly synthesis of AI operator content,
                written for founders running agentic businesses. Not investment,
                legal, or tax advice.
              </p>
            </div>
          </div>

          <nav
            aria-label="Issue navigation"
            className="mt-16 border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/pulse/2026-10-05"
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
              href="/pulse/2026-10-19"
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

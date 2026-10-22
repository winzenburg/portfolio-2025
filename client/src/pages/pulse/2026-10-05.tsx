import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import ResponsiveNav from "@/components/ResponsiveNav";
import WeeklyPulseSignup from "@/components/WeeklyPulseSignup";

const CANONICAL = "https://winzenburg.com/pulse/2026-10-05";
const CENTRAL_SIGNAL =
  "The agent layer got a control plane. Permissioning is now the product.";

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

function TextItem({ title }: { title: string }) {
  return <li className="text-sm text-foreground leading-snug">{title}</li>;
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

export default function Pulse20261005() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNav currentPage="subscribe" />

      <Helmet>
        <title>
          Weekly AI Founder Pulse: Week of October 5, 2026 | Ryan Winzenburg
        </title>
        <meta
          name="description"
          content={`${CENTRAL_SIGNAL} Five signals from the week of October 5, 2026.`}
        />
        <meta
          property="og:title"
          content="Weekly AI Founder Pulse: Week of October 5, 2026"
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
            headline: "Weekly AI Founder Pulse: Week of October 5, 2026",
            description: CENTRAL_SIGNAL,
            author: {
              "@type": "Person",
              name: "Ryan Winzenburg",
              url: "https://winzenburg.com",
            },
            datePublished: "2026-10-11",
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
              Week of October 5, 2026
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
              OpenAI&apos;s DevDay shipped more than twenty changes, but the
              durable ones were not models. They were governance surfaces: Dots
              as a named personal agent running its own virtual computer, the
              Decisions API to convert fuzzy judgment into a cheap deterministic
              call, the Agents API with computer use, and Sign in with ChatGPT
              as an identity and billing rail. Anthropic answered with Claude
              Code Mods and multiplayer agents; xAI answered with shared Team
              Bots, inline approvals, and traffic routed through your own
              machine.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Read together, the message is not &quot;agents can do more.&quot;
              It is that the harness around the agent is where the defensibility
              now sits: who it acts for, what it is allowed to touch, what
              evidence it must produce, and where a person signs off. Greg
              Isenberg&apos;s FDE masterclass said the same thing from the
              services side: the $31-to-$6 invoice win came from process
              reengineering and agents built inside the systems of record, not
              from a smarter model.
            </p>

            <h2>Five signals to use</h2>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="mb-3">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <HeatBadge level="HIGH" />
                  <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Agentic AI
                  </p>
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  The personal agent became a named coworker with its own
                  computer
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <TextItem title="ChatGPT Just Changed A LOT (Riley Brown)" />
                  <TextItem title="Tibo Sottiaux (Lenny's Podcast)" />
                  <TextItem title="OpenAI's New Agent Stack (Latent Space)" />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Dots, Grok Bot, and Muse are converging on the same shape: an
                always-on assistant with a persistent machine, access to email,
                calendar, Slack, and a browser, and a plugin surface for
                everything else. Tibo Sottiaux&apos;s framing on Lenny&apos;s is
                the tell: the endpoint is not better loops or graphs, it is a
                permanent intelligence that stays out of the way until it is
                needed. For anyone selling software, the practical consequence
                is that your product&apos;s next power user may be an agent, and
                it will judge you on machine-readable interfaces, not marketing
                pages.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="mb-3">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <HeatBadge level="HIGH" />
                  <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Governed automation
                  </p>
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Human-in-the-loop stopped being a value and became an API call
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <TextItem title="Jev Works Only If You Use It This Way (Eric Siu)" />
                  <TextItem title="FDE Masterclass (Greg Isenberg)" />
                  <TextItem title="Future of Claude Code (Latent Space)" />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The most useful pattern in the feed this week was unglamorous:
                filter cheaply, escalate selectively, review the uncertain
                cases. Eric Siu&apos;s Jev walkthrough is the cleanest
                articulation of it: pass 189 of 517 chunks to the expensive
                model, define the criteria before you trust the output, and keep
                a person inspecting the evidence. Greg Isenberg&apos;s FDE
                episode is the same idea at company scale, with process mining
                and step sorting before any agent gets built. Anthropic&apos;s
                own Thariq Shihipar supplied the cautionary half on Latent
                Space: agents have already found unexpected ways to communicate
                and exploit infrastructure, which is exactly why the checkpoint
                has to be designed rather than assumed.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="mb-3">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <HeatBadge level="HIGH" />
                  <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Solo-business models
                  </p>
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  The one-person holding company is a real operating model now
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <TextItem title="$5T Opportunity: AI Roll-Ups (Greg Isenberg)" />
                  <TextItem title="The $30M Company Run With Zero Employees (MFM)" />
                  <TextItem title="3 Claude Prompts for a 20-Day Business Plan (Sabrina Ramonov)" />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Isenberg&apos;s AI roll-up episode is the most consequential
                strategic frame of the week: roughly a million small businesses
                and a $5T transfer of ownership by 2035 as owners retire, with
                agents lifting margin inside the acquired firm. He then does
                something rarer than the thesis: he publishes the folder
                structure, the agent files, and the human approval rule for
                running it alone. My First Million&apos;s &quot;$30M company run
                with zero employees&quot; and Sabrina Ramonov&apos;s 20-day
                business-plan prompts are the consumer-facing and tactics-facing
                versions of the same curve. The constraint on solo scale has
                moved from labor to review capacity.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="mb-3">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <HeatBadge level="MEDIUM" />
                  <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    AI-native product development
                  </p>
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Shipping got cheap, so judgment and context are the only
                  scarce inputs left
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <TextItem title="Context Is Now the Product (Karri Saarinen)" />
                  <TextItem title="How OpenAI Builds Product 90 Days at a Time (Lenny's)" />
                  <TextItem title="The iPhone Duo Needs Apps (Riley Brown)" />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The Lenny&apos;s Summit block landed as a single argument across
                five episodes: when software can build itself, the
                differentiator is what the team understands. Karri
                Saarinen&apos;s line, context is now the product, is the thesis;
                Robby Stein&apos;s three-part decision discipline, OpenAI&apos;s
                90-day planning horizon, and Elena Verna&apos;s HI-IC model are
                the operating answers. Riley Brown demonstrated the other half,
                shipping an iPhone Duo app with a live Convex database through
                Claude without writing code. The Medium heat is deliberate: the
                tooling is proven, the organizational redesign is not.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-10 not-prose">
              <div className="mb-3">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <HeatBadge level="EMERGING" />
                  <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Monetization patterns
                  </p>
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Distribution is re-forming around agent discovery, and pricing
                  is splitting in two
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <TextItem title="This AI Model Is Insanely Fast & Cheap (Matt Wolfe)" />
                  <TextItem title="AEO's Next Shift (Eric Siu)" />
                  <TextItem title="OpenAI DevDay: $100B Opportunities (Greg Isenberg)" />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Two monetization shapes showed up repeatedly. First,
                decision-as-a-unit: Jev prices a choice, a score, or a yes/no at
                roughly four cents per million input tokens with free outputs,
                which makes pre-filtering enormous workloads economically
                trivial. Second, agent discovery as a channel: Eric Siu&apos;s
                bet that AEO is becoming &quot;agent engine optimization&quot;
                is early but directionally sound, and his own S-tier ranking of
                LLM citations over classic SEO is a market call worth tracking
                rather than adopting wholesale. The durable pattern underneath
                both is that pricing power is migrating from seats toward
                governed throughput.
              </p>
            </div>

            <div className="my-10 border-t border-border pt-10 not-prose">
              <h2 className="text-xl font-bold text-foreground mb-5">
                Curated watchlist
              </h2>
              <ol className="space-y-5">
                <WatchItem
                  index="01"
                  href="https://www.youtube.com/watch?v=1a5HxU52vCQ"
                  title="Masterclass: How FDEs make $1M/yr deploying AI agents (Greg Isenberg, Oct 1)"
                  detail="Greg Isenberg with Vas of Varick. The only episode this week that gives you a repeatable engagement method: interviews, process mining, step sorting into four buckets, then agents built inside existing systems of record. The accounts-payable case study ($31 to $6 per invoice) is the number to quote when someone asks whether AI actually pays for itself."
                />
                <WatchItem
                  index="02"
                  href="https://www.youtube.com/watch?v=MM-C3JqCXBk"
                  title="Why most actions on the internet will soon be taken by AI (Lenny's Podcast, Oct 4)"
                  detail="Tibo Sottiaux, head of ChatGPT and Codex, interviewed at DevDay hours after shipping twenty-plus products. The most useful part is not the product tour; it is his claim that loops, graphs, and hand-tuned agent workflows are a transitional phase, plus the story of his own agent flagging a production outage five minutes before launch."
                />
                <WatchItem
                  index="03"
                  href="https://www.youtube.com/watch?v=ZT4mpjx0JnE"
                  title="$5T opportunity: AI Roll Ups (Greg Isenberg, Sep 28)"
                  detail="A solo episode that works as a blueprint: the retirement-driven ownership transfer, how Thrive Holdings and General Catalyst run the play, the small-deal gap they leave open, and then the actual folder structure and approval rule for a one-person holding company. He closes with the strongest argument against his own thesis, which is why it earns the slot."
                />
              </ol>
            </div>

            <div className="mt-10 rounded-lg border border-border bg-muted/30 px-5 py-4 not-prose">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-muted-foreground">
                  Source note:
                </span>{" "}
                76 uploads scanned across 13 channels, 10 active, 3 quiet.
                Sources scanned this week: Greg Isenberg, My First Million,
                Sabrina Ramonov, Lenny&apos;s Podcast, Eric Siu (Leveling Up),
                Matt Wolfe, Riley Brown, Dan Koe, Latent Space, and No Priors.
                Marc Lou, The Bootstrapped Founder, and AI Jason published
                nothing in the current window and were skipped. Compiled from
                public uploads between September 28 and October 5, 2026. Heat
                labels and analysis are editorial judgment, not the
                creators&apos; claims.
              </p>
            </div>
          </div>

          <nav
            aria-label="Issue navigation"
            className="mt-16 border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/pulse/2026-09-28"
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
              href="/pulse/2026-10-12"
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

import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import ResponsiveNav from "@/components/ResponsiveNav";
import WeeklyPulseSignup from "@/components/WeeklyPulseSignup";

const CANONICAL = "https://winzenburg.com/pulse/2026-11-16";
const HERO_IMAGE =
  "https://winzenburg.com/images/articles/ai-orchestration-hero.webp";
const CENTRAL_SIGNAL = "The agent layer is becoming the business layer.";

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

export default function Pulse20261116() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNav currentPage="subscribe" />

      <Helmet>
        <title>
          Weekly AI Founder Pulse: Week of November 16, 2026 | Ryan Winzenburg
        </title>
        <meta
          name="description"
          content={`${CENTRAL_SIGNAL} Six signals, five to act on, three videos worth the full runtime.`}
        />
        <meta
          property="og:title"
          content="Weekly AI Founder Pulse: Week of November 16, 2026"
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
            headline: "Weekly AI Founder Pulse: Week of November 16, 2026",
            description: CENTRAL_SIGNAL,
            image: HERO_IMAGE,
            author: {
              "@type": "Person",
              name: "Ryan Winzenburg",
              url: "https://winzenburg.com",
            },
            datePublished: "2026-11-22",
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
              Week of November 16, 2026
            </h1>
            <figure className="mb-8">
              <Link
                href="/articles/ai-orchestration"
                className="block overflow-hidden rounded-lg border border-border/60"
              >
                <img
                  src="/images/articles/ai-orchestration-hero.webp"
                  alt="Illustration for the Winzenburg.com article The AI Orchestration: How to Connect Multiple AI Tools in a Systematic Workflow"
                  width={2880}
                  height={1615}
                  className="w-full h-auto"
                />
              </Link>
              <figcaption className="mt-2 text-sm text-muted-foreground">
                Illustration via winzenburg.com · The AI Orchestration: How to
                Connect Multiple AI Tools in a Systematic Workflow
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
              The agent layer is becoming the business layer. Six signals, five
              to act on, three videos worth the full runtime.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              66 uploads · 10 active channels · Nov 9 to 16, 2026
            </p>

            <h2>This week&apos;s central signal</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Capability stops being the scarce input. Authority becomes the
              scarce input.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A model wave landed inside seven days: Claude Fable 5.2 and Mythos
              5.2, Gemini 4 Carbon, GPT 6.1 Tera, and a leadership shake-up at
              NVIDIA. The releases matter less than the language builders used
              to describe their work. Almost nobody this week said &quot;using
              AI.&quot; They described running an operating layer: an
              orchestrator that plans, specialists that execute, and a human who
              signs off where the stakes are real.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              When a model can work ten to twelve hours unsupervised and say
              &quot;I don&apos;t know&quot; when it doesn&apos;t, capability
              stops being the scarce input. Authority becomes the scarce input:
              what the agent may touch, which source of truth wins, what
              evidence it leaves behind, and who answers when it is wrong. That
              is org design wearing a technical costume, and it is the most
              defensible product surface of the next year.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              <Link
                href="/articles/the-agent-layer-is-becoming-the-business-layer"
                className="text-primary hover:text-primary transition-colors"
              >
                Read the full thesis
              </Link>
            </p>

            <h2>Six signals this week</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              What moved in the last seven days
            </p>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Fable 5.2 turns &quot;long-running&quot; into the product spec
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=G3i2k6DdI0o"
                    title="Greg Isenberg: Claude Fable 5.2: How I'd Make Money With It (Nov 10)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=G_Jrexy_5Bg"
                    title="Matt Wolfe: AI News: Things Will Never Be The Same (Nov 13)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=j5BDkyEcML4"
                    title="Riley Brown: Claude Just Changed EVERYTHING (Nov 14)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The headline number this week was not a benchmark score, it was
                duration. Isenberg reports the model grinding 10 to 12 hours on a
                single job, with real-world freelance task performance moving
                from 21% to 41%. Duration changes the unit of work from a prompt
                to a project, which moves the founder&apos;s job to scoping,
                review gates and acceptance criteria. If you cannot define
                &quot;done,&quot; a twelve-hour agent is a twelve-hour liability.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  The orchestrator pattern: one agent on top, specialists
                  underneath
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=1cWZ7Ekff6E"
                    title="Greg Isenberg: Use Grok Bot Better Than 99% of People (Nov 11)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=pvl3z_GyU2Y"
                    title="Matt Wolfe: How To Build An AI Operating System For Your Life (Nov 11)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=UQPOsH4msQ8"
                    title="Eric Siu: I Built a Shadow Me That Answers My AI Bots (Nov 12)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The operators with the most leverage were not using one model.
                They ran a front-end agent that plans and delegates: Grok Bot
                handing engineering to Claude Code, a &quot;shadow me&quot;
                answering inbound bot traffic, reusable skills that compound.
                That is an architecture decision, not a tooling preference. Value
                accrues to whoever owns the routing layer and the memory it
                reads from.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Solo operators are selling outcomes, not software
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=5S5jIrH4HG4"
                    title="Sabrina Ramonov: These 10 AI Businesses Will Make You $10k/Month (Nov 14)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=zdshL1IcetU"
                    title="Dan Koe: The Most Lucrative AI Business To Start In 2027 (Nov 10)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=fmQGPt2WZlA"
                    title="My First Million: Is SaaS out? (Nov 16)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Isenberg&apos;s advice to do a real freelance job end to end and
                sell the result as a fixed-price service is the same business
                Sabrina ranks by how hard it is to land a first paying customer.
                Pieter Levels gives the blunter version: he is &quot;scrambling
                to chase any remaining moats,&quot; and lists six. If your
                product is only code, this week&apos;s message is that code was
                never the asset; distribution and switching costs were.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="MEDIUM" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Agents get real authority, and governance is the gap
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=0sUu1fC73pQ"
                    title="No Priors: Personal AI Agents vs. Enterprise Security (Nov 9)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=no6lv6pTJeU"
                    title="No Priors: How Cloudflare Thinks About AI Token Usage (Nov 14)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=j5BDkyEcML4"
                    title="Riley Brown: Claude Just Changed EVERYTHING, agent restrictions (Nov 14)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                No Priors&apos; guest describes the end state plainly: your agent
                will talk to other agents at work, with browser and machine
                access that widens every attack surface. Cloudflare&apos;s CTO
                says the company deliberately runs no token leaderboard:
                &quot;focus on the output.&quot; Together they define the
                enterprise buying question for 2027: not which model, but what
                the agent may do, what it costs per outcome, and who signs off
                when it is wrong.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="MEDIUM" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Designing for the agent as the user
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=bdIoODXsu8k"
                    title="Latent Space: Designing for Agents, Zeno Rocha, Resend (Nov 10)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=WY0cdD4gNoQ"
                    title="Lenny's Podcast: Meta's Muse: the fastest-growing consumer AI product (Nov 15)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=2BZ38nJ9ItY"
                    title="My First Million: The billion-dollar app built around one addictive loop (Nov 12)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Resend&apos;s CEO asks the question most product teams have not:
                when a coding agent picks your vendor, how did it decide, and
                can it finish signup without a human? Agent-readable onboarding
                and answer-engine optimization are turning into a real
                acquisition channel. Lenny&apos;s Muse interview shows the
                consumer mirror image: agent swarms mining user insight at
                scale, and a deliberate seven-month wait before launch.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-10 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="EMERGING" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  The AI-native company is an operating model, not a tool stack
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <VideoLink
                    href="https://www.youtube.com/watch?v=of5navTQB04"
                    title="Eric Siu: How To Build an AI-Native Company (Nov 16)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=0NWBn-PHBlI"
                    title="Eric Siu: Steel Chopsticks: Why AI-Native Teams Are Harder to Break (Nov 11)"
                  />
                  <VideoLink
                    href="https://www.youtube.com/watch?v=0FiooLkpLzE"
                    title="Eric Siu: Only 5 to 10% of a room of $52M operators were AI-native (Nov 14)"
                  />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Siu&apos;s instruction to treat bots as infrastructure and be
                &quot;unreasonably demanding&quot; is the management layer under
                everything above. He puts AI-native operators at 5 to 10% of a
                room full of $52M operators, which is either the opportunity or
                the warning. The winners will not be the teams with the best
                prompts. They will be the ones whose workflows assume agents and
                whose humans sit at the decisions that still need judgment.
              </p>
            </div>

            <h2>Five signals to act on</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Short, specific, and worth a decision
            </p>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <p className="text-xs font-bold tracking-wider text-primary uppercase mb-2">
                Act on
              </p>
              <h3 className="text-base font-semibold text-foreground leading-snug mb-3">
                Twelve hours of unsupervised work
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                Fable 5.2&apos;s real spec is duration: 10 to 12 hour runs,
                freelance-task scores up 21% to 41%. Scope discipline, not
                capability, is now the constraint.
              </p>
              <p className="text-sm text-muted-foreground">
                Source:{" "}
                <a
                  href="https://www.youtube.com/watch?v=G3i2k6DdI0o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Greg Isenberg
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <p className="text-xs font-bold tracking-wider text-primary uppercase mb-2">
                Act on
              </p>
              <h3 className="text-base font-semibold text-foreground leading-snug mb-3">
                Claude is becoming a workspace
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                Sheets, Whiteboards, Data, Meetings: the app suite is folding
                into the agent surface. Tool consolidation is the quiet threat
                to single-purpose SaaS.
              </p>
              <p className="text-sm text-muted-foreground">
                Source:{" "}
                <a
                  href="https://www.youtube.com/watch?v=j5BDkyEcML4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Riley Brown
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <p className="text-xs font-bold tracking-wider text-primary uppercase mb-2">
                Act on
              </p>
              <h3 className="text-base font-semibold text-foreground leading-snug mb-3">
                The &quot;I don&apos;t know&quot; era
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                A model that admits uncertainty is a model you can put in front
                of regulated work. Calibrated refusal is becoming a purchasable
                feature.
              </p>
              <p className="text-sm text-muted-foreground">
                Source:{" "}
                <a
                  href="https://www.youtube.com/watch?v=G3i2k6DdI0o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Greg Isenberg
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <p className="text-xs font-bold tracking-wider text-primary uppercase mb-2">
                Act on
              </p>
              <h3 className="text-base font-semibold text-foreground leading-snug mb-3">
                No token leaderboard
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                &quot;We encourage people to focus on the output.&quot; Cost per
                outcome, not cost per token, is the AI metric that survives a CFO
                review.
              </p>
              <p className="text-sm text-muted-foreground">
                Source:{" "}
                <a
                  href="https://www.youtube.com/watch?v=no6lv6pTJeU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  No Priors
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-10 not-prose">
              <p className="text-xs font-bold tracking-wider text-primary uppercase mb-2">
                Act on
              </p>
              <h3 className="text-base font-semibold text-foreground leading-snug mb-3">
                Only 2% of Americans pay for AI
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                Sam Parr&apos;s number, cited on MFM: 2% of Americans hold a paid
                GPT or Claude account. The disruption is early, the moat window
                is open, and it is closing faster than adoption curves suggest.
              </p>
              <p className="text-sm text-muted-foreground">
                Source:{" "}
                <a
                  href="https://www.youtube.com/watch?v=fmQGPt2WZlA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  My First Million
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </p>
            </div>

            <div className="my-10 border-t border-border pt-10 not-prose">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Curated watchlist
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                Three videos worth the full runtime
              </p>
              <ol className="space-y-5">
                <WatchItem
                  index="01"
                  href="https://www.youtube.com/watch?v=G3i2k6DdI0o"
                  title="Greg Isenberg, Nov 10: Claude Fable 5.2: How I'd Make Money With It"
                  detail="Twelve prompts and four business models, run live: a design-agency audit, a 100-niche research sweep with subagents, a freelance job sourced on Upwork, and a phone designed from a single prompt. The most concrete monetization map of the week."
                />
                <WatchItem
                  index="02"
                  href="https://www.youtube.com/watch?v=VnJiHSS5Pjk"
                  title="Riley Brown, Nov 12: Claude Code Projects is INSANE for Building Apps (From Your Phone)"
                  detail="A full product launch, with desktop app, iPhone app, landing page, 37-second Blender launch video and UGC ad, assembled from a phone in 20 to 30 minute sprints. Closest thing to a repeatable one-person release process."
                />
                <WatchItem
                  index="03"
                  href="https://www.youtube.com/watch?v=0sUu1fC73pQ"
                  title="No Priors, Nov 9: Personal AI Agents vs. Enterprise Security"
                  detail="The least-watched, highest-consequence conversation of the week. Agent-to-agent delegation is coming; the tension between what employees want and what enterprises can govern is the buying criterion your buyers will arrive with."
                />
              </ol>
            </div>

            <div className="mt-10 rounded-lg border border-border bg-muted/30 px-5 py-4 not-prose">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-muted-foreground">
                  Source note:
                </span>{" "}
                66 uploads across 10 active channels between Nov 9 and Nov 16.
                All video signals come from the tracked YouTube channels, Nov 9
                to 16, 2026. Analysis is our assessment, not a claim by the
                creators. The Weekly AI Founder Pulse is a weekly synthesis of AI
                operator content, written for founders running agentic
                businesses. Not investment, legal, or tax advice.
              </p>
            </div>
          </div>

          <nav
            aria-label="Issue navigation"
            className="mt-16 border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/pulse/2026-11-09"
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
          </nav>
        </div>
      </article>

      <div className="container mx-auto px-6 max-w-3xl pb-20">
        <WeeklyPulseSignup />
      </div>
    </div>
  );
}

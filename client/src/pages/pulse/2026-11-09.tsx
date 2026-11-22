import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import ResponsiveNav from "@/components/ResponsiveNav";
import WeeklyPulseSignup from "@/components/WeeklyPulseSignup";

const CANONICAL = "https://winzenburg.com/pulse/2026-11-09";
const HERO_IMAGE =
  "https://winzenburg.com/images/articles/business-operating-system-hero.webp";
const CENTRAL_SIGNAL =
  "The advantage is no longer model access. It is the governed operating layer around the model.";

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

function SupportingLine({ text }: { text: string }) {
  return <li className="text-sm text-muted-foreground leading-snug">{text}</li>;
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

export default function Pulse20261109() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNav currentPage="subscribe" />

      <Helmet>
        <title>
          Weekly AI Founder Pulse: Week of November 9, 2026 | Ryan Winzenburg
        </title>
        <meta
          name="description"
          content={`${CENTRAL_SIGNAL} Five signals from the week of November 9, 2026.`}
        />
        <meta
          property="og:title"
          content="Weekly AI Founder Pulse: Week of November 9, 2026"
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
            headline: "Weekly AI Founder Pulse: Week of November 9, 2026",
            description: CENTRAL_SIGNAL,
            image: HERO_IMAGE,
            author: {
              "@type": "Person",
              name: "Ryan Winzenburg",
              url: "https://winzenburg.com",
            },
            datePublished: "2026-11-15",
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
              Week of November 9, 2026
            </h1>
            <figure className="mb-8">
              <Link
                href="/articles/business-operating-system"
                className="block overflow-hidden rounded-lg border border-border/60"
              >
                <img
                  src="/images/articles/business-operating-system-hero.webp"
                  alt="Illustration for the Winzenburg.com article The Business Operating System"
                  width={2880}
                  height={1615}
                  className="w-full h-auto"
                />
              </Link>
              <figcaption className="mt-2 text-sm text-muted-foreground">
                Illustration via winzenburg.com · The Business Operating
                System: A Weekly Loop for Shipping and Learning
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
              The advantage is no longer model access. It is the governed
              operating layer around the model. Five signals, three videos
              worth the full runtime.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The advantage is the governed operating layer around the model.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              AI is moving from a prompt interface to a system that can
              initiate, decide, create, distribute, and, in bounded
              environments, act. The winning systems pair that agency with
              context, policy, evaluation, permissions, and escalation.
            </p>

            <h2>The five signals</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              What moved in the last seven days
            </p>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Governed agency becomes the operating model
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <SupportingLine text="Eric Siu, Stop AI Waiting on You for Decisions With This Skill (Nov 9)" />
                  <SupportingLine text="No Priors, Tokenization, Agentic Trading, Harmonic (Nov 5)" />
                  <SupportingLine text="Riley Brown, I Built My Most Useful App Ever (Nov 2)" />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The practical choice is not autonomous versus manual; it is
                delegated authority. Agents should operate inside explicit
                policy bands, retain their rationale, and escalate when
                uncertainty or consequence crosses a threshold. That is
                non-negotiable for defense intelligence and capital allocation.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  The solo business becomes a vertical agent system
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <SupportingLine text="Marc Lou, I've made $3M with my 36 startups (Nov 2)" />
                  <SupportingLine text="My First Million, AI proof businesses worth building in 2027 (Nov 4)" />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Commodity chat is not the opportunity. The durable version
                combines a narrow vertical workflow with proprietary operating
                context, trusted distribution, and an outcome-linked offer that
                a buyer can hold accountable.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="HIGH" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  AI-native product development is a software factory
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <SupportingLine text="Latent Space, Will Repos Become Software Factories? (Nov 8) and The 2026 Software Factory Infra Stack (Nov 4)" />
                  <SupportingLine text="Riley Brown, Claude Code From Your Phone (Nov 8)" />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The development edge compounds through agent-readable
                architecture, reusable skills, test fixtures, and evaluations.
                Give agents narrow, observable production slices; ambient
                access is useful, but it does not substitute for reliability
                engineering.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-6 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="MEDIUM" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Distribution is an agent-executed product surface
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <SupportingLine text="Greg Isenberg, AI Agents are too good at marketing now (Nov 9)" />
                  <SupportingLine text="Eric Siu, The New SEO Is Getting AI to Recommend You (Nov 4)" />
                  <SupportingLine text="Sabrina Ramonov, How I Made $120K with a Simple Instagram DM Strategy (Nov 7)" />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                AEO, content, outreach, and lifecycle follow-up are converging
                into an agent-operated layer. The defensible edge is not output
                volume; it is a credible point of view, a controlled offer, and
                instrumentation that connects each touchpoint to conversion or
                revenue.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/40 px-6 py-5 mb-10 not-prose">
              <div className="flex items-center gap-3 mb-3">
                <HeatBadge level="EMERGING" />
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  Context quality is becoming product strategy
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Supporting
                </p>
                <ul className="space-y-1.5 text-sm">
                  <SupportingLine text="Latent Space, What Frontier Labs Buy (Nov 9), What Frontier Models Miss in Your PDFs (Nov 6), and From Legal Research to Agents That Review 10,000 Contracts (Nov 3)" />
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                In high-value workflows, trusted context, not model access, is
                the bottleneck. Products that parse messy source material,
                preserve provenance, respect confidentiality boundaries, and
                reveal why an output was produced can beat opaque copilots.
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
                  href="https://www.youtube.com/watch?v=yULk8eNa2mg"
                  title="No Priors, Nov 5: Tokenization, Agentic Trading, Harmonic: Robinhood's Mission to Expand Ownership with CEO Vlad Tenev (54:09)"
                  detail="The clearest category signal for policy-constrained agentic trading, and a reminder that policy controls and trust must be the differentiation."
                />
                <WatchItem
                  index="02"
                  href="https://www.youtube.com/watch?v=KgqWyVVH4Oc"
                  title="Latent Space, Nov 6: What Frontier Models Miss in Your PDFs (50:38)"
                  detail="A reliability lens for document-heavy decision support and for any assessment-to-action chain."
                />
                <WatchItem
                  index="03"
                  href="https://www.youtube.com/watch?v=uJuxenfe-NU"
                  title="Greg Isenberg, Nov 9: AI Agents are too good at marketing now (52:00)"
                  detail="A practical prompt for turning agent output into measurable demand, not merely more content."
                />
              </ol>
            </div>

            <div className="mt-10 rounded-lg border border-border bg-muted/30 px-5 py-4 not-prose">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-muted-foreground">
                  Source note:
                </span>{" "}
                10 active channels published 27 standard uploads between Nov 2
                and Nov 9. All video signals come from the tracked YouTube
                channels, Nov 2-9, 2026. Analysis is our assessment, not a claim
                by the creators. The Weekly AI Founder Pulse is a weekly
                synthesis of AI operator content, written for founders running
                agentic businesses. Not investment, legal, or tax advice.
              </p>
            </div>
          </div>

          <nav
            aria-label="Issue navigation"
            className="mt-16 border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/pulse/2026-11-02"
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
              href="/pulse/2026-11-16"
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

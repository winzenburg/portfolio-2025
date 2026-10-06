import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import FactRow, { type Fact } from "@/components/FactRow";
import Reveal from "@/components/Reveal";
import SiteLayout from "@/components/SiteLayout";
import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionTitle,
} from "@/components/Section";
import DoubleDiamondDiagram, {
  PHASE_ACCENT,
  type PhaseName,
} from "@/components/DoubleDiamondDiagram";
import { contactHref } from "@/lib/contact-intent";
import { studioCard, tileBackground } from "@/lib/studio";
import { cn } from "@/lib/utils";
import {
  CONSULTING_FAQ_GROUPS,
  WORKING_TOGETHER,
  consultingFaqJsonLd,
  isConsultingFaqItem,
  sprintServiceJsonLd,
} from "@/lib/consulting-faq";

const consultingHref = contactHref({ intent: "consulting" });

type Situation = {
  title: string;
  body: string;
};

type Risk = {
  title: string;
  body: string;
  outcome: string;
};

type Phase = {
  name: PhaseName;
  mode: "Diverge" | "Converge";
  question: string;
  body: string;
  deliverable: string;
};

type Capability = {
  name: string;
  body: string;
};

type Engagement = {
  name: string;
  when: string;
  scope: string;
  duration: string;
};

type WorkSample = {
  name: string;
  meta: string;
  body: string;
  result: string;
  href: string;
};

type Industry = {
  title: string;
  body: string;
};

/**
 * Engagement shape, not outcome claims. Every value here restates something
 * already written on this page: the FAQ, the working-together list, or the
 * engagement durations. Pricing sits in the investment block further down
 * rather than in the hero, because the first question this buyer has is
 * whether the decision is the kind I handle, not what it costs.
 */
const HERO_FACTS: Fact[] = [
  { label: "First step", value: "30-minute call", note: "No deck, no pitch" },
  {
    label: "You leave with",
    value: "A go, no-go, or pivot call",
    note: "Plus a written scope, in 2 to 4 weeks",
  },
  {
    label: "Fee",
    value: "Fixed, in writing",
    note: "Agreed before anything starts",
  },
  { label: "You work with", value: "Me, directly", note: "No account manager" },
];

type OfferPath = {
  label: string;
  name: string;
  body: string;
  includes: string;
  meta: string;
};

/**
 * Dual-Track v2 public offer: sprint is the entry, retainer is the expansion.
 * Pricing restates the Investment block already on this page (from $8,000).
 */
const OFFER_PATHS: OfferPath[] = [
  {
    label: "Entry",
    name: "AI Delivery Loop Sprint",
    body: "For the product bet you are about to fund. I test the direction with your stakeholders and users, name what to cut, and leave your team with a scope engineering can start. AI speeds up synthesis, prototyping, and specs where the work is well defined. I make the calls and review everything you receive.",
    includes:
      "Stakeholder and customer research as needed, AI-assisted synthesis, a go / no-go / pivot call, and a written scope with stated assumptions.",
    meta: "Typically 2–4 weeks · from $8,000 · fixed fee",
  },
  {
    label: "Expansion",
    name: "Embedded product-experience retainer",
    body: "For when the need is ongoing. Senior product-experience and UX strategy inside your cadence: roadmap input, research planning, design direction, and stakeholder alignment. A sprint first lets both of us check the fit before a monthly commitment.",
    includes:
      "Named weekly cadence, decision rights clarity, and continuity across the product org rather than a handoff at the file.",
    meta: "Monthly · three-month minimum",
  },
];

const SITUATIONS: Situation[] = [
  {
    title: "A funded bet nobody has validated",
    body: "The roadmap item is approved and the direction came from stakeholder requests, a competitor's screenshots, and three loud customer calls. Nobody has asked whether the thing you are about to build is the thing that gets bought.",
  },
  {
    title: "Two directions and no tiebreaker",
    body: "There is a real fork in the road, and the internal debate keeps resolving by seniority rather than evidence. Whichever way it goes, you will be defending it to a board a quarter from now.",
  },
  {
    title: "An AI feature with no decided job",
    body: "Leadership wants AI in the product this year. Nobody has named the decision it makes for the user, what happens when the model is wrong, or why a customer would trust it with work that matters.",
  },
  {
    title: "A product that demos well and stalls in the account",
    body: "Sales lands it and six weeks later the seats are quiet. Whatever is going wrong happens in the first two weeks of real use, and nobody owns finding it.",
  },
];

const RISKS: Risk[] = [
  {
    title: "Expensive uncertainty",
    body: "You are about to commit engineering quarters to a direction nobody has put in front of a real customer.",
    outcome:
      "A go, no-go, or pivot call backed by evidence rather than the most senior opinion in the room.",
  },
  {
    title: "A roadmap assembled from internal debate",
    body: "The feature list came from stakeholder requests and competitor screenshots, not from what a customer would change a contract over.",
    outcome:
      "A prioritized direction you can defend to your board and hand to engineering without re-litigating it.",
  },
  {
    title: "Scope that only grows",
    body: "Every review adds a requirement and nothing ever comes off, because no one agreed what this release was supposed to prove.",
    outcome:
      "A scope with a stated hypothesis, explicit cuts, and the metric that will tell you it worked.",
  },
  {
    title: "Adoption that stalls after the sale",
    body: "The contract is signed and the seats go quiet. The trail goes cold somewhere in the first weeks of real use.",
    outcome:
      "Named friction in the actual workflow, and specific changes tied to the number you are missing.",
  },
  {
    title: "Handoffs that turn into rework",
    body: "Design ships a file, engineering interprets it, and three sprints later what is in staging is not what was decided.",
    outcome:
      "States, edge cases, and system-level components specified, so the build is a build rather than a translation.",
  },
  {
    title: "The same decision, re-argued by every team",
    body: "Patterns fork, components duplicate, and each new surface reopens a question that was already settled once.",
    outcome:
      "Decisions made centrally and encoded, so teams inherit them instead of negotiating them.",
  },
];

const PHASES: Phase[] = [
  {
    name: "Discover",
    mode: "Diverge",
    question: "What is actually going on?",
    body: "Interviews with stakeholders and customers, as the question needs, plus a review of what you already have: analytics, support tickets, competitive notes. A sprint uses the parts of this phase your decision needs.",
    deliverable:
      "A research synthesis, prioritized problem themes, and a clear statement of what we do and do not yet know.",
  },
  {
    name: "Define",
    mode: "Converge",
    question: "Which problem is worth solving?",
    body: "Journey mapping, opportunity sizing, problem framing, and success metrics defined before anything gets designed.",
    deliverable:
      "A problem statement, the metrics that will tell us it worked, and an agreed scope. This is where projects get cheaper, because this is where things get cut.",
  },
  {
    name: "Develop",
    mode: "Diverge",
    question: "What is the best way to solve it?",
    body: "Concept exploration, information architecture, interaction design, and clickable prototypes at the fidelity the decision requires.",
    deliverable:
      "Multiple viable directions, tested against each other rather than defended in a meeting.",
  },
  {
    name: "Deliver",
    mode: "Converge",
    question: "Will it hold up, and can it be built?",
    body: "Usability testing, iteration, accessibility review, high-fidelity design, and component and state specification. Building it is a separate engagement.",
    deliverable:
      "Implementation-ready design with edge cases and states documented, plus test evidence behind the decisions.",
  },
];

/**
 * Secondary shapes only. Sprint + retainer live in OFFER_PATHS (#offer) above.
 * Assessment recommendations still use those primary names by exact string.
 */
const ENGAGEMENTS: Engagement[] = [
  {
    name: "UX Diagnostic",
    when: "Something in the product is clearly costing you and nobody can name it.",
    scope:
      "Expert review, analytics review, stakeholder interviews, prioritized recommendations.",
    duration: "2–3 weeks",
  },
  {
    name: "Concept Validation",
    when: "You need evidence behind a direction before engineering commits to it.",
    scope: "Ideation, flows, prototype, usability testing, recommendations.",
    duration: "3–6 weeks",
  },
  {
    name: "End-to-End Product Engagement",
    when: "A product or major feature needs experience leadership from the decision through the build.",
    scope:
      "Discover through delivery: research, strategy, design, testing, implementation support.",
    duration: "8–16 weeks",
  },
  {
    name: "Design System Acceleration",
    when: "The same decisions are being re-made by every team that ships a screen.",
    scope:
      "Component architecture, foundations, accessibility standards, documentation, governance.",
    duration: "4–8 weeks",
  },
];

/**
 * Same three capabilities named on Home and About, written for the buying
 * decision rather than the identity statement. No new claims: the experience
 * span and the venture list both come from the canonical brand facts.
 */
const CAPABILITIES: Capability[] = [
  {
    name: "Product experience leadership",
    body: "Twenty-five years deciding what the experience should be when the system is complicated and the stakeholders disagree. Most of it inside Fortune 50 product organizations, where being wrong is expensive and slow to undo.",
  },
  {
    name: "Product operating model",
    body: "A surprising number of product problems turn out to be decision-rights problems. I work on how the call actually gets made, so the direction survives contact with delivery instead of drifting the moment I leave.",
  },
  {
    name: "AI-enabled execution",
    body: "AI compresses the mechanical parts of synthesis, prototyping, and specification, which is why a small engagement can cover more ground than it used to. The judgment stays mine and the delivery does not get fragile.",
  },
];

const SELECTED_WORK: WorkSample[] = [
  {
    name: "CVS / Aetna",
    meta: "Healthcare · Enterprise UX and design systems",
    body: "Enterprise UX and design system work across CVS and Aetna digital product domains, spanning multiple product teams and regulated healthcare workflows.",
    result:
      "Accessibility moved from a per-screen review gate into the component library. Pattern decisions were made once, centrally, instead of being re-argued by every team.",
    href: "/case-study/cvs-aetna",
  },
  {
    name: "Comcast",
    meta: "Telecom · Enterprise design system",
    body: "Components, foundations, and governance for multi-product delivery at enterprise scale.",
    result:
      "Shared foundations teams could adopt because using them was easier than working around them. Governance made exceptions visible instead of letting divergence hide.",
    href: "/case-study/comcast-design-system",
  },
  {
    name: "Buildout",
    meta: "Commercial real estate · Product design",
    body: "UX and product design for commercial real estate workflows, including prospecting and map-driven experiences.",
    result:
      "Workflow-first product surfaces for people who use the tool all day.",
    href: "/case-study/buildout",
  },
  {
    name: "Kinlet",
    meta: "Founder · AI matching platform · Product design and build",
    body: "Product design and design system work spanning onboarding, matching, and analytics.",
    result:
      "A coherent product surface across the matching workflow, instead of a pile of screens that each solved a local problem.",
    href: "/case-study/kinlet",
  },
  {
    name: "Winzinvest",
    meta: "Fintech · Founder, product design and build",
    body: "A fully automated stock and options trading platform that enforces rules-based execution across every client account, built for RIAs and family offices.",
    result:
      "Strategy executes identically across accounts, independent of advisor attention. Shipped and operating as a live commercial product. I include it because I live with my own design decisions.",
    href: "/case-study/winzinvest",
  },
  {
    name: "Undercurrent / Foundpath",
    meta: "Founder · Career discovery · Product design and build",
    body: "AI-powered discovery platforms that turn unstructured conversation into a usable written synthesis.",
    result:
      "Current, hands-on work with AI-native product patterns. Coaches start from a written brief instead of a blank intake.",
    href: "/case-study/undercurrent",
  },
];

const INDUSTRIES: Industry[] = [
  {
    title: "Healthcare and health insurance",
    body: "Regulated workflows, member and provider experiences, claims and benefits, accessibility as a requirement. CVS, Aetna.",
  },
  {
    title: "Financial services and fintech",
    body: "Advisor and investor tools, compliance-constrained interfaces, rules-based execution, data-dense screens where a misread costs money. Winzinvest.",
  },
  {
    title: "Telecom",
    body: "Multi-product portfolios, large distributed design organizations, system governance at scale. Comcast.",
  },
  {
    title: "B2B SaaS and enterprise software",
    body: "Onboarding, activation, admin and permissions, analytics, and workflow tools built for people who use them eight hours a day.",
  },
  {
    title: "Commercial real estate",
    body: "Prospecting workflows and map-driven interfaces. Buildout.",
  },
  {
    title: "AI-native products",
    body: "Matching, synthesis, agent-assisted workflows, and the interface problems that come with probabilistic systems.",
  },
];

const PRACTICALITIES: Industry[] = [
  {
    title: "Platforms",
    body: "Responsive web, native iOS and Android, design systems across product lines, admin tooling, data-heavy dashboards, and AI-assisted interfaces.",
  },
  {
    title: "Tools",
    body: "Figma and Figma variables, prototyping at the fidelity the decision needs, accessibility to WCAG 2.2 AA, and AI-augmented workflows including Claude Code and MCP integrations.",
  },
  {
    title: "Working style",
    body: "Colorado-based, working remotely with distributed teams across US time zones. On site when a workshop or research round genuinely needs it.",
  },
];

function faqGroupId(heading: string): string {
  const slug = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `faq-${slug}`;
}

export default function Services() {
  return (
    <SiteLayout currentPage="consulting">
      <PageSeo
        title="Consulting | Test the Product Bet Before You Fund the Build | Ryan Winzenburg"
        description="For enterprise B2B product leaders about to fund a product bet. Test it with real users first, then leave with a go, no-go, or pivot call and a scope your team can build."
        path="/consulting"
        ogImage="/images/services-hero.webp"
        jsonLd={[consultingFaqJsonLd(), sprintServiceJsonLd()]}
      />

      <PageHero
        variant="bleed"
        titleId="services-hero-title"
        eyebrow="Consulting"
        eyebrowNote="Enterprise B2B product leaders"
        media={{
          src: "/images/services-hero.webp",
          focus: "35% 70%",
          alt: "A figure in a dark coat stands before a tower with an eye-shaped dish and a field of tall patterned plants.",
        }}
        title={
          <>
            Prove the direction before you spend the build budget on it.
          </>
        }
        lede={
          <>
            The expensive product mistakes I get called into usually start before design. Someone commits engineering quarters to a direction nobody tested, and the bill arrives at launch. I help you test that direction first, in two to four weeks, so the build starts from evidence.
          </>
        }
        actions={
          <>
            <Button size="lg" asChild>
              <Link href={consultingHref}>Talk through your product bet</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#offer">See the sprint and retainer</a>
            </Button>
          </>
        }
        footnote={
          <>
            <span className="block">
              The form comes straight to me. I reply within a day and we find a time.
            </span>
            <span className="mt-2 block">
              Twenty-five years of enterprise product experience across
              healthcare, financial services, telecom, and technology.
              Previously design leadership at CVS/Aetna and Comcast.
            </span>
          </>
        }
        meta={<FactRow facts={HERO_FACTS} />}
      />

      {/* Who this is for */}
      <Section id="situations" tone="muted" labelledBy="situations-heading">
        <SectionHeading
          id="situations-heading"
          eyebrow="Where I come in"
          title="Four situations I get called into" lede="Each one is a decision someone is about to fund. That is when changing direction still costs the least."
        />
        {/*
          Subgrid keeps the index rule, title, and body on shared baselines, so
          the row gap has to be zero or it would draw a line through each card.
          That leaves the second row of cards with no rule above it at md, hence
          the explicit border on everything past the first row.
        */}
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {SITUATIONS.map((situation, index) => (
              <div
                key={situation.title}
                className={cn(
                  "rounded-sm border border-ink/15 p-8 text-ink md:p-10",
                  tileBackground(index),
                )}
              >
                <p className="mb-4 font-display text-sm tracking-[0.18em] text-verm-text">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 text-xl font-medium leading-snug">
                  {situation.title}
                </h3>
                <p className="leading-relaxed text-ink-muted">{situation.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Dual-Track offer: sprint entry → retainer expansion */}
      <Section id="offer" labelledBy="offer-heading">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-4">How engagements usually start</Eyebrow>
            <SectionTitle id="offer-heading">
              Start with one decision. Keep me on if it helps.
            </SectionTitle>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Start with the smallest engagement that answers the decision in front of you. Adding scope later is easy. Unwinding a large engagement that began before the question was clear is expensive.
            </p>
          </div>
          <div className="grid gap-6 lg:col-span-7">
            {OFFER_PATHS.map((offer, index) => (
              <div
                key={offer.name}
                className="rounded-sm border border-ink/15 bg-studio-card p-8 text-ink md:p-10"
              >
                <p className="font-display text-sm tracking-[0.18em] text-verm-text">
                  0{index + 1}
                </p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  {offer.label}
                </p>
                <h3 className="mt-2 text-3xl font-medium leading-snug text-ink">
                  {offer.name}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-muted">{offer.body}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {offer.includes}
                </p>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
                  {offer.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink-muted">
          AI handles the mechanical parts, which is how two to four weeks covers this much ground. If a full-time hire would serve you better, I will say so on the call.
        </p>
      </Section>

      {/* Risks */}
      <Section tone="navy" labelledBy="risks-heading">
        <SectionHeading
          id="risks-heading"
          eyebrow="Six recurring risks"
          title="The risk you are carrying, and what replaces it"
          lede="People bring me in when a specific risk is sitting on a budget they have to defend. These are the six that come up most."
        />
        <ol className="grid gap-4">
          {RISKS.map((risk, index) => (
            <li
              key={risk.title}
              className={cn(studioCard, "grid gap-x-6 gap-y-3 p-6 md:grid-cols-[3.5rem_minmax(0,18rem)_1fr] md:p-7")}
            >
              <span aria-hidden="true" className="font-display text-2xl font-bold text-verm-text">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold leading-snug text-ink md:text-xl">
                {risk.title}
              </h3>
              <div>
                <p className="leading-relaxed text-ink-muted">{risk.body}</p>
                <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm leading-relaxed text-ink-muted">
                  <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-verm-text">
                    Outcome
                  </span>
                  <span className="flex-1 basis-64">{risk.outcome}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Process */}
      <Section id="how-i-work" tone="slate" labelledBy="process-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-4">How I work</Eyebrow>
            <SectionTitle id="process-heading">
              How the work runs
            </SectionTitle>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I use the Double Diamond, a common design method: widen the problem, narrow it, then do the same for the solution. It keeps what we know apart from what we have not proven yet. Every phase ends in a decision, and the documents follow from it.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <DoubleDiamondDiagram />
          </div>
        </div>

        <ol className="mt-16 border-t border-border/60">
          {PHASES.map((phase, index) => {
            const accent = PHASE_ACCENT[phase.name];
            return (
              <li
                key={phase.name}
                className="grid gap-x-12 gap-y-5 border-b border-border/60 py-8 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="font-display text-lg text-muted-foreground"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className={`h-px w-8 ${accent.rule}`} />
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] ${accent.border} ${accent.bg} ${accent.text}`}
                    >
                      {phase.mode}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    {phase.name}
                  </h3>
                  <p className={`mt-2 ${accent.text}`}>{phase.question}</p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="leading-relaxed text-muted-foreground">{phase.body}</p>
                  <p className="mt-5 border-t border-border/60 pt-4 text-sm leading-relaxed text-muted-foreground">
                    <span className="mr-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      You get
                    </span>
                    {phase.deliverable}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 rounded-xl border border-primary/30 bg-primary/10 p-7 md:p-8">
          <p className="max-w-3xl leading-relaxed text-foreground">
            The sprint ends with a scope engineering can start. Staying through
            implementation is retainer or larger-engagement work, not part of
            the entry sprint fee. A validated direction nobody can build is
            still a failure mode, which is why the written scope names
            assumptions and cuts explicitly.
          </p>
          <Link
            href="/methodology"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Full methodology
            <ArrowRight
              className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Section>

      {/* Why me */}
      <Section compact labelledBy="capabilities-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-4">Why me</Eyebrow>
            <SectionTitle id="capabilities-heading">
              What I bring to the decision
            </SectionTitle>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Most of the problems I see need all three at once.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <dl className="divide-y divide-border/60 border-y border-border/60">
              {CAPABILITIES.map((capability) => (
                <div key={capability.name} className="py-6">
                  <dt className="font-semibold text-foreground">{capability.name}</dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">
                    {capability.body}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I also build and run my own products. Winzinvest is live
              commercial software for RIAs and family offices, and Foundpath and
              Casimir Systems are active. Founding things keeps me honest about
              what shipping actually costs, which is different knowledge from
              reviewing somebody else&apos;s roadmap.
            </p>
          </div>
        </div>
      </Section>

      {/* Selected work */}
      <Section tone="navy" labelledBy="work-heading">
        <SectionHeading
          id="work-heading"
          eyebrow="Proof"
          title="Six projects, six different problems"
          lede="Scope and decisions rather than headline numbers. Each one links to the full case study."
          trailing={
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              All case studies
              <ArrowRight
                className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          }
        />
        <p className="mb-8 text-sm leading-relaxed text-band-muted">
          There are no client testimonials here yet. Each case study shows the scope I worked in and the decisions I made.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SELECTED_WORK.map((item, index) => (
            <Reveal key={item.name} delay={index * 60} className="h-full">
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-sm border border-ink/10 bg-studio-card p-7 text-ink md:p-8"
              >
                <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-verm-text">
                  {item.meta}
                </p>
                <h3 className="mt-3 text-xl font-bold text-ink">
                  {item.name}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{item.body}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                  {item.result}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 border-t-2 border-ink/15 pt-5 text-sm font-bold text-cobalt">
                  Read the case study
                  <ArrowRight
                    className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Working together */}
      <Section compact labelledBy="working-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-4">Before anything starts</Eyebrow>
            <SectionTitle id="working-heading">
              What working together looks like
            </SectionTitle>
          </div>
          <dl className="divide-y divide-border/60 border-y border-border/60 lg:col-span-7 lg:col-start-6">
            {WORKING_TOGETHER.map((item) => (
              <div
                key={item.title}
                className="grid gap-x-8 gap-y-1.5 py-5 md:grid-cols-[minmax(0,13rem)_1fr]"
              >
                <dt className="font-semibold text-foreground">{item.title}</dt>
                <dd className="leading-relaxed text-muted-foreground">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Engagements */}
      <Section tone="slate" labelledBy="engagements-heading">
        <SectionHeading
          id="engagements-heading"
          eyebrow="Other engagement shapes"
          title="When the question is narrower or larger than the entry sprint"
          lede="The Entry and Expansion cards above cover most buyers. These four shapes apply when the decision on the table is different: a named product cost, a concept that needs testing, a full product build, or a design-system problem."
        />
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ENGAGEMENTS.map((engagement, index) => (
              <div
                key={engagement.name}
                className={cn(studioCard, "flex flex-col p-7", tileBackground(index))}
              >
                <h3 className="text-xl font-bold leading-snug text-ink">
                  {engagement.name}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {engagement.when}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {engagement.scope}
                </p>
                <p className="mt-6 border-t-2 border-ink/20 pt-4 text-sm font-bold text-ink">
                  {engagement.duration}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h3 className="text-xl font-semibold text-foreground">Investment</h3>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                AI Delivery Loop Sprints start from $8,000. Most larger product
                engagements land between $20,000 and $150,000 depending on
                scope. Embedded retainers are monthly.
              </p>
              <p>
                Workshops, standalone usability studies, and audits are
                available when you have one specific question. If that work
                leads to a larger engagement within 60 days, the entry fee is
                credited.
              </p>
            </div>
            <p className="mt-5 border-t border-border/60 pt-4 text-sm leading-relaxed text-muted-foreground">
              Every engagement gets a fixed, scoped proposal with explicit
              assumptions before anything begins.
            </p>
          </div>

          <Link
            href="/assessment"
            className="group flex flex-col rounded-xl border border-border/60 bg-background/40 p-7 transition-colors hover:border-primary/50 hover:bg-background/70 lg:col-span-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Not sure where to start
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-foreground">
              Product risk and UX maturity assessment
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
              Twenty questions. About six minutes. A maturity score, your three
              largest product risks, and a recommended starting engagement. No
              email. Answers stay in this browser.
            </p>
            <span className="mt-7 inline-flex items-center gap-2 border-t border-border/60 pt-5 text-sm font-semibold text-primary">
              Take the assessment
              <ArrowRight
                className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </Section>

      {/* Industries */}
      <Section labelledBy="industries-heading">
        <SectionHeading
          id="industries-heading"
          eyebrow="Industries"
          title="Where I already know the terrain"
          lede="Domain familiarity means less of your budget spent explaining your business to me."
        />
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={industry.title}
                className={cn(
                  "rounded-sm border border-ink/15 p-8 text-ink",
                  tileBackground(index),
                )}
              >
                <h3 className="text-lg font-medium leading-snug">{industry.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{industry.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
          {PRACTICALITIES.map((item) => (
            <div key={item.title}>
              <h3 className="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {item.title}
              </h3>
              <p className="border-t border-border/60 pt-4 leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" tone="muted" labelledBy="faq-heading">
        <SectionHeading
          id="faq-heading"
          eyebrow="Before a call"
          title="Questions that come up before a call"
          lede="Process, timing, research, ownership, and payment."
        />
        <div className="space-y-16 md:space-y-20">
          {CONSULTING_FAQ_GROUPS.map((group) => {
            const groupId = faqGroupId(group.heading);
            return (
              <section
                key={group.heading}
                aria-labelledby={groupId}
                className="grid gap-6 lg:grid-cols-12 lg:gap-16"
              >
                <div className="lg:col-span-3">
                  <h3
                    id={groupId}
                    className="text-xs font-medium uppercase tracking-[0.2em] text-primary lg:sticky lg:top-24"
                  >
                    {group.heading}
                  </h3>
                </div>
                <div className="divide-y divide-border/60 border-y border-border/60 lg:col-span-8 lg:col-start-5">
                  {group.items.filter(isConsultingFaqItem).map((item) => (
                    <div key={item.question} className="py-7">
                      <h4 className="text-lg font-semibold leading-snug text-foreground">
                        {item.question}
                      </h4>
                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                      {item.relatedHref && item.relatedLabel ? (
                        <Link
                          href={item.relatedHref}
                          className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                        >
                          {item.relatedLabel}
                          <ArrowRight
                            className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      {/* Closing */}
      <Section tone="navy" compact labelledBy="consulting-cta-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <SectionTitle id="consulting-cta-heading">
              Bring me the bet you are about to fund
            </SectionTitle>
            <p className="mt-5 max-w-2xl leading-relaxed text-band-muted">
              Thirty minutes, no deck. Tell me what you are about to commit to and which part is still unproven. I will tell you what I would test first and what shape of work fits, if any. If there is a fit, you get a fixed-fee proposal within three business days.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button size="lg" asChild>
                <Link href={consultingHref}>Talk through your product bet</Link>
              </Button>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-band-muted lg:text-right">
              The form comes straight to me. I reply within a day and we find a time.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-band-muted lg:text-right">
              Prefer email?{" "}
              <a
                href="mailto:ryan@winzenburg.com"
                className="text-band underline decoration-band/40 underline-offset-4 hover:text-white"
              >
                ryan@winzenburg.com
              </a>
              <span className="mt-1 block">
                Entry engagements can usually begin within two weeks.
              </span>
            </p>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

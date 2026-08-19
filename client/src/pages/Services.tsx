import ResponsiveNav from "@/components/ResponsiveNav";
import PageSeo from "@/components/PageSeo";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { contactHref } from "@/lib/contact-intent";
import {
  CONSULTING_FAQ_GROUPS,
  WORKING_TOGETHER,
  consultingFaqJsonLd,
  isConsultingFaqItem,
} from "@/lib/consulting-faq";

const roleHref = contactHref({ intent: "role" });
const consultingHref = contactHref({ intent: "consulting" });

const SITUATIONS = [
  {
    title: "Product teams heading into a big bet",
    body: "Budget is approved and the direction is still fuzzy. Every week of ambiguity turns into rework later. You want confidence before engineering starts.",
  },
  {
    title: "More roadmap than design capacity",
    body: "You have a designer or two and four times the work. Things ship, but quality is uneven and nobody has time to think upstream. You need senior capacity without a six-month hire.",
  },
  {
    title: "Design that does not scale",
    body: "Multiple product teams, inconsistent patterns, and a design system people work around. Every new screen is a negotiation. You need structure that holds without slowing anyone down.",
  },
] as const;

const RISKS = [
  {
    title: "Expensive uncertainty",
    body: "You are about to commit engineering months to a direction nobody has tested with a real customer.",
    outcome: "A go, no-go, or pivot decision backed by evidence rather than the loudest opinion in the room.",
  },
  {
    title: "A roadmap built from internal debate",
    body: "Feature lists come from stakeholder requests and competitor screenshots, not from what customers will pay to fix.",
    outcome: "A prioritized view you can defend to your board and your engineers.",
  },
  {
    title: "Conversion that stalls for unnamed reasons",
    body: "Traffic is fine. Signups are fine. Activation is not.",
    outcome: "Specific, testable changes tied to the metric you are missing.",
  },
  {
    title: "Handoffs that turn into rework",
    body: "Design ships a file, engineering interprets it, and three sprints later it looks nothing like the intent.",
    outcome: "Specs, states, edge cases, and system-level components so the build is a build, not a translation.",
  },
  {
    title: "Design that dies past a handful of people",
    body: "Patterns fork, components duplicate, and the system becomes a museum.",
    outcome: "A consistent product surface and faster delivery across teams.",
  },
  {
    title: "Not enough senior design capacity",
    body: "You need someone who can run research, make the call, and produce the work, without ramping for a quarter.",
    outcome: "Senior throughput on the calendar you have, not the hiring timeline you wish you had.",
  },
] as const;

const PHASES = [
  {
    name: "Discover",
    mode: "Diverge",
    question: "What is actually going on?",
    body: "Stakeholder interviews, customer research, analytics and support-ticket review, competitive and heuristic analysis, and a hard look at what the business needs this product to do.",
    deliverable: "A research synthesis, prioritized problem themes, and a clear statement of what we do and do not yet know.",
  },
  {
    name: "Define",
    mode: "Converge",
    question: "Which problem is worth solving?",
    body: "Journey mapping, opportunity sizing, problem framing, and success metrics defined before anything gets designed.",
    deliverable: "A problem statement, the metrics that will tell us it worked, and an agreed scope. This is where projects get cheaper, because this is where things get cut.",
  },
  {
    name: "Develop",
    mode: "Diverge",
    question: "What is the best way to solve it?",
    body: "Concept exploration, information architecture, interaction design, and clickable prototypes at the fidelity the decision requires.",
    deliverable: "Multiple viable directions, tested against each other rather than defended in a meeting.",
  },
  {
    name: "Deliver",
    mode: "Converge",
    question: "Will it hold up, and can it be built?",
    body: "Usability testing, iteration, accessibility review, high-fidelity design, component and state specification, and direct work with engineering through implementation.",
    deliverable: "Implementation-ready design with edge cases and states documented, plus test evidence behind the decisions.",
  },
] as const;

const ENGAGEMENTS = [
  {
    name: "UX Diagnostic",
    when: "A team knows something is wrong but not why.",
    scope: "Expert review, analytics review, stakeholder interviews, prioritized recommendations.",
    duration: "2–3 weeks",
  },
  {
    name: "Discovery Sprint",
    when: "The problem or opportunity is unclear.",
    scope: "Research, synthesis, journey mapping, opportunity framing, research readout.",
    duration: "2–4 weeks",
  },
  {
    name: "Concept Validation",
    when: "A team needs confidence before building.",
    scope: "Ideation, flows, prototype, usability testing, recommendations.",
    duration: "3–6 weeks",
  },
  {
    name: "End-to-End Product Engagement",
    when: "A product or major feature needs full UX leadership.",
    scope: "Discover through delivery: research, strategy, design, testing, implementation support.",
    duration: "8–16 weeks",
  },
  {
    name: "Design System Acceleration",
    when: "Design does not scale past a handful of people.",
    scope: "Component architecture, foundations, accessibility standards, documentation, governance.",
    duration: "4–8 weeks",
  },
  {
    name: "Fractional UX Leadership",
    when: "A team needs ongoing senior UX capability.",
    scope: "Roadmap input, research planning, design direction, coaching, stakeholder alignment.",
    duration: "Ongoing, 3-month minimum",
  },
] as const;

const SELECTED_WORK = [
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
    result: "Workflow-first product surfaces for people who use the tool all day, not a marketing site wearing a product costume.",
    href: "/case-study/buildout",
  },
  {
    name: "Kinlet",
    meta: "AI matching platform · Product design and design system",
    body: "Product design and design system work spanning onboarding, matching, and analytics.",
    result: "A coherent product surface across the matching workflow, instead of a pile of screens that each solved a local problem.",
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
    meta: "Career discovery · Product design and build",
    body: "AI-powered discovery platforms that turn unstructured conversation into a usable written synthesis.",
    result:
      "Current, hands-on work with AI-native product patterns. Coaches start from a written brief instead of a blank intake.",
    href: "/case-study/undercurrent",
  },
] as const;

const INDUSTRIES = [
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
] as const;

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <PageSeo
        title="Consulting | Product UX Research, Strategy, and Delivery | Ryan Winzenburg"
        description="Turn uncertain customer problems into experiences your team can actually build. Research, product strategy, prototyping, testing, and delivery. Engagements start at $8,000."
        path="/consulting"
        ogImage="/images/services-hero.webp"
        jsonLd={consultingFaqJsonLd()}
      />
      <ResponsiveNav currentPage="consulting" />

      <section className="relative pt-32 pb-16 mb-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/services-hero.webp"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container px-6">
          <div className="relative max-w-4xl mx-auto text-center bg-slate-950/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
            <p className="text-sm uppercase tracking-widest text-cyan-400 mb-4">Consulting</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Turn uncertain customer problems into experiences your team can actually build.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              I help product teams move from “we think this is the problem” to a validated, implementation-ready design. Research and product strategy through prototyping, testing, and delivery. 25 years of enterprise product design, most of it inside Fortune 50 environments where being wrong is expensive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={consultingHref}>
                <span className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors font-semibold">
                  Book a 30-minute consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
              <a
                href="#how-i-work"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-500 text-slate-200 rounded-lg hover:bg-slate-800 transition-colors font-semibold"
              >
                See how I work
              </a>
            </div>
            <p className="text-sm text-slate-400 mt-8">
              Enterprise product design across healthcare, financial services, telecom, and technology. Previously design leadership at CVS/Aetna and Comcast.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-slate-400 text-sm">
            Hiring for a design leadership role?{" "}
            <Link href={roleHref}>
              <span className="text-cyan-400 hover:text-cyan-300">That is a different conversation.</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Who this is for</h2>
            <p className="text-xl text-slate-300">Three situations come up most often.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {SITUATIONS.map((situation) => (
              <div key={situation.title} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">{situation.title}</h3>
                <p className="text-slate-300">{situation.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400">
            Common titles I work with: VP Product, Head of Product, Director of Design, founder or CEO at a company past its first product.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What you are actually buying</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Clients rarely hire me for research or wireframes. They hire me to remove a specific risk. These are the six that come up most.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {RISKS.map((risk) => (
              <div key={risk.title} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">{risk.title}</h3>
                <p className="text-slate-300 mb-4">{risk.body}</p>
                <p className="text-sm text-cyan-300">
                  <span className="font-semibold">Outcome: </span>
                  {risk.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-i-work" className="py-16 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              An end-to-end process, built to reduce risk at every stage
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              This is the Double Diamond, applied honestly. It is a framework for knowing what you know, and being clear about what you have not proven yet. Every phase produces a decision. A document is the byproduct.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {PHASES.map((phase) => (
              <div key={phase.name} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg">
                <p className="text-sm uppercase tracking-widest text-cyan-400 mb-2">
                  {phase.mode}
                </p>
                <h3 className="text-2xl font-bold text-white mb-1">{phase.name}</h3>
                <p className="text-slate-400 italic mb-4">{phase.question}</p>
                <p className="text-slate-300 mb-4">{phase.body}</p>
                <p className="text-sm text-slate-400">
                  <span className="font-semibold text-slate-200">You get: </span>
                  {phase.deliverable}
                </p>
              </div>
            ))}
          </div>
          <div className="border border-cyan-500/30 bg-cyan-950/20 rounded-lg p-6 md:p-8">
            <p className="text-slate-200">
              Two things I do differently: I stay through implementation rather than handing off at the file, and I use AI-augmented workflows to compress the mechanical parts of the process. The judgment stays mine. The production work gets faster.
            </p>
            <Link href="/methodology">
              <span className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mt-4">
                Full methodology
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              What working together looks like
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WORKING_TOGETHER.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg"
                >
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ways to work together</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Six engagements, each defined by the decision it helps you make rather than the activities inside it. Start at the smallest engagement that answers your actual question.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {ENGAGEMENTS.map((engagement) => (
              <div key={engagement.name} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">{engagement.name}</h3>
                <p className="text-slate-300 mb-3">{engagement.when}</p>
                <p className="text-sm text-slate-400 mb-4">{engagement.scope}</p>
                <p className="text-sm text-cyan-300">{engagement.duration}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-bold text-white mb-3">Investment</h3>
            <p className="text-slate-300 mb-4">
              Engagements start at $8,000 for a UX Diagnostic. Most product engagements land between $20,000 and $150,000 depending on scope. Fractional leadership is monthly. Every engagement gets a fixed, scoped proposal before it starts.
            </p>
            <p className="text-slate-300 mb-4">
              Workshops, standalone usability studies, and audits are available when you have one specific question. If that work leads to a larger engagement within 60 days, the entry fee is credited.
            </p>
            <p className="text-slate-400">
              Not sure which fits? Take the six-minute assessment, or start with a consultation call. Every engagement gets a fixed, scoped proposal with explicit assumptions before anything begins.
            </p>
          </div>
          <div className="mt-8 border border-cyan-700/40 bg-slate-900/70 rounded-lg p-8">
            <p className="text-sm uppercase tracking-widest text-cyan-400 font-mono mb-2">
              Not sure where to start
            </p>
            <h3 className="text-2xl font-bold text-white mb-3">
              Product risk and UX maturity assessment
            </h3>
            <p className="text-slate-300 mb-6">
              Twenty questions. About six minutes. A maturity score, your three largest product risks, and a recommended starting engagement. No email. Answers stay in this browser.
            </p>
            <Link href="/assessment">
              <span className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                Take the assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Selected work</h2>
            <p className="text-xl text-slate-300">
              A sample.{" "}
              <Link href="/work">
                <span className="text-cyan-400 hover:text-cyan-300">Full case studies on the work page.</span>
              </Link>
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SELECTED_WORK.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="block h-full bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg hover:border-cyan-500/40 transition-colors">
                  <p className="text-sm text-cyan-400 mb-2">{item.meta}</p>
                  <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-slate-300 mb-4">{item.body}</p>
                  <p className="text-sm text-slate-400">{item.result}</p>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Where I already know the terrain</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Domain familiarity means less of your budget spent explaining your business to me.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {INDUSTRIES.map((industry) => (
              <div key={industry.title} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-slate-300">{industry.body}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">Platforms</h3>
              <p className="text-slate-300">
                Responsive web, native iOS and Android, design systems across product lines, admin tooling, data-heavy dashboards, and AI-assisted interfaces.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">Tools</h3>
              <p className="text-slate-300">
                Figma and Figma variables, prototyping at the fidelity the decision needs, accessibility to WCAG 2.2 AA, and AI-augmented workflows including Claude Code and MCP integrations.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">Working style</h3>
              <p className="text-slate-300">
                Colorado-based, working remotely with distributed teams across US time zones. On site when a workshop or research round genuinely needs it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Questions that come up before a call</h2>
            <p className="text-xl text-slate-300">
              Process, timing, research, ownership, and payment. Honest answers rather than reassuring ones.
            </p>
          </div>
          <div className="space-y-12">
            {CONSULTING_FAQ_GROUPS.map((group) => (
              <div key={group.heading}>
                <h3 className="text-sm uppercase tracking-widest text-cyan-400 mb-6">
                  {group.heading}
                </h3>
                <div className="space-y-8">
                  {group.items.filter(isConsultingFaqItem).map((item) => (
                    <div
                      key={item.question}
                      className="border-b border-slate-800 pb-6 last:border-b-0 last:pb-0"
                    >
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {item.question}
                      </h4>
                      <p className="text-slate-300 leading-relaxed">{item.answer}</p>
                      {item.relatedHref && item.relatedLabel ? (
                        <Link href={item.relatedHref}>
                          <span className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mt-3">
                            {item.relatedLabel}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </span>
                        </Link>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's find out if this is a fit</h2>
          <p className="text-xl text-blue-100 mb-8">
            A 30-minute call, no deck. Tell me what you are trying to ship and what is making it uncertain. I will tell you what I would do first, whether or not you hire me. If there is a fit, you will have a scoped proposal within three business days.
          </p>
          <Link href={consultingHref}>
            <span className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Book a 30-minute consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </Link>
          <p className="text-blue-100 mt-6">
            Prefer email?{" "}
            <a href="mailto:ryan@winzenburg.com" className="underline hover:text-white">
              ryan@winzenburg.com
            </a>
          </p>
          <p className="text-sm text-blue-200 mt-4">
            Discovery Sprints can usually begin within two weeks.
          </p>
        </div>
      </section>
    </div>
  );
}

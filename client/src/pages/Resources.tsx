import { Download } from "lucide-react";
import ResponsiveNav from "@/components/ResponsiveNav";
import PageSeo from "@/components/PageSeo";

const BASE = import.meta.env.BASE_URL;

function resourceHref(filename: string): string {
  return `${BASE}resources/${filename}`;
}

type DownloadItem = {
  title: string;
  description: string;
  filename: string;
  meta: string;
};

const DOWNLOADS: DownloadItem[] = [
  {
    title: "Complete skill packs",
    description:
      "Everything on this page in one zip: Double Diamond skills, UX competency skills v1.3.0, taxonomy, Aura crosswalk, discrete skills taxonomy, and the Cursor user rule.",
    filename: "skill-packs-complete.zip",
    meta: "Full pack · ZIP",
  },
  {
    title: "Double Diamond Skill Pack",
    description:
      "Nineteen design skills tagged to Discover, Define, Develop, and Deliver. Use when you need method-level help inside a Double Diamond phase.",
    filename: "double-diamond-skill-pack.zip",
    meta: "19 skills · ZIP",
  },
  {
    title: "UX Competency Skills v1.3.0",
    description:
      "Seventeen agent skills on a 176-skill taxonomy for product, UX, UI, and front-end architecture. Works in Cursor and Grok (SKILL.md format).",
    filename: "ux-competency-skills-v1.3.0.zip",
    meta: "17 skills · ZIP",
  },
  {
    title: "Competency taxonomy v1.2.0",
    description:
      "The full 176-skill taxonomy with depth levels and lead roles across product, UX, UI, and front-end architecture.",
    filename: "taxonomy-v1.2.0.md",
    meta: "Markdown",
  },
  {
    title: "Aura crosswalk",
    description:
      "How Aura library skills map into this competency pack: what was added, merged, covered, treated as a tool or style, or left out.",
    filename: "aura-crosswalk.md",
    meta: "Markdown",
  },
  {
    title: "Discrete skills taxonomy",
    description:
      "Long-form taxonomy for UI, product design, UX design, and front-end architecture. The source map behind the competency pack.",
    filename: "discrete-skills-taxonomy.md",
    meta: "Markdown",
  },
  {
    title: "Cursor user rule",
    description:
      "Always-on Cursor User Rule that indexes the competency skills so the agent loads the right one without being asked.",
    filename: "cursor-user-rule.txt",
    meta: "Text",
  },
];

type PhaseSkill = {
  name: string;
  summary: string;
};

type Phase = {
  name: "Discover" | "Define" | "Develop" | "Deliver";
  mode: string;
  question: string;
  intent: string;
  doubleDiamond: PhaseSkill[];
  competency: PhaseSkill[];
};

const PHASES: Phase[] = [
  {
    name: "Discover",
    mode: "Diverge",
    question: "What is actually going on?",
    intent:
      "Widen the problem space with evidence before anyone commits to a solution. Prefer planning and research skills here.",
    doubleDiamond: [
      {
        name: "Research planning",
        summary: "Structure the engagement before sessions or screeners start.",
      },
      {
        name: "Qualitative research",
        summary: "Direct human data from interviews, observation, and fieldwork.",
      },
      {
        name: "Quantitative research",
        summary: "Measure the problem space at scale.",
      },
      {
        name: "Secondary research",
        summary: "Desk research and landscape work before primary fieldwork.",
      },
      {
        name: "Lean / Agile discovery",
        summary: "Keep lightweight discovery inside the team's delivery rhythm.",
      },
    ],
    competency: [
      {
        name: "competency-router",
        summary: "Start here when the request spans disciplines or needs a plan.",
      },
      {
        name: "competency-audit",
        summary: "Gap assessment of a product, codebase, team, or person.",
      },
      {
        name: "competency-user-research",
        summary: "Research planning, methods, and evidence synthesis (RE).",
      },
      {
        name: "competency-product-framing",
        summary: "Early problem framing, assumptions, and opportunity sizing (PB).",
      },
    ],
  },
  {
    name: "Define",
    mode: "Converge",
    question: "Which problem is worth solving?",
    intent:
      "Turn research into a shared, bounded problem. This is where scope gets cheaper because it gets cut.",
    doubleDiamond: [
      {
        name: "Synthesis",
        summary: "Move from observations to shared, actionable insight.",
      },
      {
        name: "Problem framing",
        summary: "Name the problem precisely before ideation.",
      },
      {
        name: "Frameworks and models",
        summary: "Make the user's world legible with shared models.",
      },
      {
        name: "Prioritization",
        summary: "Turn a long list into a focused, defensible commitment.",
      },
      {
        name: "Lean / Agile defining",
        summary: "Write problem definitions delivery teams can execute against.",
      },
    ],
    competency: [
      {
        name: "competency-product-framing",
        summary: "Outcomes, value proposition, prioritization, and trade-offs (PB).",
      },
      {
        name: "competency-ia-interaction",
        summary: "Structure flows and information once the problem is clear (IA).",
      },
      {
        name: "competency-measurement",
        summary: "Define the metrics that will prove the problem is solved (ME).",
      },
      {
        name: "competency-leadership-governance",
        summary: "Stakeholder alignment and decision quality (LG).",
      },
    ],
  },
  {
    name: "Develop",
    mode: "Diverge",
    question: "What is the best way to solve it?",
    intent:
      "Explore multiple directions. Generate options, co-create, and prototype before locking a single path.",
    doubleDiamond: [
      {
        name: "Ideation",
        summary: "Go wide before going deep.",
      },
      {
        name: "Concept development",
        summary: "Turn raw ideas into testable concepts you can compare.",
      },
      {
        name: "Co-design",
        summary: "Design with users as contributors, not only evaluators.",
      },
      {
        name: "Prototyping",
        summary: "Build the right fidelity to test a specific assumption.",
      },
    ],
    competency: [
      {
        name: "competency-ia-interaction",
        summary: "Navigation, flows, forms, and interaction patterns (IA).",
      },
      {
        name: "competency-content-service-ai",
        summary: "Content, service design, and AI interaction design (CX).",
      },
      {
        name: "competency-ui-visual",
        summary: "Visual hierarchy, layout, typography, and polish (UI).",
      },
      {
        name: "competency-design-systems",
        summary: "Tokens, components, and design operations (DS).",
      },
      {
        name: "competency-prototyping-handoff",
        summary: "Fidelity choices, specs, and design-to-code collaboration (PR).",
      },
      {
        name: "competency-frontend-foundations",
        summary: "Semantic HTML, CSS, and browser-platform fluency (FE).",
      },
    ],
  },
  {
    name: "Deliver",
    mode: "Converge",
    question: "Will it hold up, and can it be built?",
    intent:
      "Validate, harden, and ship. Accessibility, QA, metrics, and iteration belong here, not as afterthoughts.",
    doubleDiamond: [
      {
        name: "Usability testing",
        summary: "Catch problems when they are still cheap to fix.",
      },
      {
        name: "Accessibility",
        summary: "Design for the full range of human ability and context.",
      },
      {
        name: "Design QA and handoff",
        summary: "Keep what ships aligned with what was validated.",
      },
      {
        name: "Design metrics",
        summary: "Measure quality and impact so design can be defended.",
      },
      {
        name: "Iteration and design debt",
        summary: "Improve after launch and keep debt from compounding.",
      },
    ],
    competency: [
      {
        name: "competency-accessibility",
        summary: "WCAG, inclusion, and responsible experience design (AX).",
      },
      {
        name: "competency-quality-reliability",
        summary: "Testing, performance, privacy, and security (QL).",
      },
      {
        name: "competency-frontend-architecture",
        summary: "Application structure, state, and technical systems (AR).",
      },
      {
        name: "competency-growth-conversion",
        summary: "Marketing surfaces and conversion work (GM).",
      },
      {
        name: "competency-measurement",
        summary: "Instrumentation, funnels, and whether the release worked (ME).",
      },
      {
        name: "competency-outcome-review",
        summary: "Post-release value check and case study.",
      },
    ],
  },
];

function DownloadCard({ item, featured = false }: { item: DownloadItem; featured?: boolean }) {
  return (
    <a
      href={resourceHref(item.filename)}
      download
      className={
        featured
          ? "block rounded-lg border border-cyan-700/50 bg-gradient-to-br from-cyan-950/40 to-slate-900/60 p-6 transition-colors hover:border-cyan-500/60"
          : "block rounded-lg border border-slate-700/50 bg-slate-800/50 p-6 transition-colors hover:border-cyan-500/40"
      }
    >
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <Download className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
      </div>
      <p className="mb-4 text-sm leading-relaxed text-slate-300">{item.description}</p>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{item.meta}</p>
      <span className="mt-3 inline-block text-sm font-medium text-cyan-400">Download</span>
    </a>
  );
}

export default function Resources() {
  const [fullPack, ...individualDownloads] = DOWNLOADS;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <PageSeo
        title="Resources | Skill Packs for Product, UX, and Front-End | Ryan Winzenburg"
        description="Download Ryan Winzenburg's Double Diamond and UX competency skill packs for Cursor and Grok, with guidance on which skill to use in Discover, Define, Develop, and Deliver."
        path="/resources"
      />
      <ResponsiveNav currentPage="resources" />

      <section className="relative mb-8 pb-16 pt-32">
        <div className="container px-6">
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-slate-800/50 bg-slate-950/60 p-8 text-center backdrop-blur-sm md:p-12">
            <p className="mb-4 text-sm uppercase tracking-widest text-cyan-400">Resources</p>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Skill packs for product, UX, and front-end work
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-300">
              Agent skills and taxonomies I use on real product work. Built for PMs and designers who
              want Cursor or Grok to follow a clear method, not invent one. Download individuals or
              the full pack.
            </p>
            <a
              href={resourceHref(fullPack.filename)}
              download
              className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-cyan-500"
            >
              <Download className="mr-2 h-5 w-5" aria-hidden="true" />
              Download complete pack
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-white">What these are</h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-300">
            <p>
              Two packs, one shared map. The{" "}
              <strong className="text-white">Double Diamond Skill Pack</strong> is phase-tagged
              design method skills (research planning through design QA). The{" "}
              <strong className="text-white">UX Competency Skills</strong> pack is seventeen agent
              skills built on a 176-skill taxonomy for product framing, research, IA, content, UI,
              accessibility, design systems, prototyping, front-end, quality, measurement, growth,
              and leadership.
            </p>
            <p>
              Install the competency pack into Cursor or Grok, paste the user rule so the agent
              picks skills automatically, and use the Double Diamond pack when you want method depth
              inside a specific phase. The taxonomy and Aura crosswalk explain the underlying map
              and how adjacent skill libraries fit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/30 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">What to use when</h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-300">
              Same Double Diamond framing as the consulting process: Discover and Define find the
              right problem; Develop and Deliver find the right solution. Each phase lists Double
              Diamond method skills and the competency skills that usually belong there.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PHASES.map((phase) => (
              <div
                key={phase.name}
                className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-6"
              >
                <p className="mb-2 text-sm uppercase tracking-widest text-cyan-400">{phase.mode}</p>
                <h3 className="mb-1 text-2xl font-bold text-white">{phase.name}</h3>
                <p className="mb-4 italic text-slate-400">{phase.question}</p>
                <p className="mb-6 text-slate-300">{phase.intent}</p>

                <div className="mb-5">
                  <p className="mb-3 text-sm font-semibold text-white">Double Diamond skills</p>
                  <ul className="space-y-2">
                    {phase.doubleDiamond.map((skill) => (
                      <li key={skill.name} className="text-sm text-slate-300">
                        <span className="font-medium text-slate-100">{skill.name}.</span>{" "}
                        {skill.summary}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold text-white">Competency skills</p>
                  <ul className="space-y-2">
                    {phase.competency.map((skill) => (
                      <li key={skill.name} className="text-sm text-slate-300">
                        <code className="rounded bg-slate-900/80 px-1.5 py-0.5 text-cyan-300">
                          {skill.name}
                        </code>
                        <span className="text-slate-400"> — {skill.summary}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-6 md:p-8">
            <p className="text-slate-200">
              Unsure where to start? Use <code className="text-cyan-300">competency-router</code>.
              It classifies the request, picks a playbook, and chains the domain skills. Cross-cutting
              checks: accessibility on UI work, leadership/governance when stakeholders or risk are
              in play.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Downloads</h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-300">
              Each artifact is available on its own. The complete pack is the fastest way to get the
              full set.
            </p>
          </div>

          <div className="mb-6">
            <DownloadCard item={fullPack} featured />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {individualDownloads.map((item) => (
              <DownloadCard key={item.filename} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">How to install</h2>
          <div className="space-y-4 text-left text-slate-300 md:text-center">
            <p>
              Unzip the competency pack and run its install script for Cursor (
              <code className="text-cyan-300">./install.sh cursor</code>) or Grok Build. For
              automatic skill selection in every Cursor project, run{" "}
              <code className="text-cyan-300">./install.sh cursor-global</code> and paste the user
              rule into <strong className="text-white">Cursor → Customize → Rules → User Rules</strong>.
            </p>
            <p>
              Double Diamond <code className="text-cyan-300">.skill</code> files can be loaded as
              individual agent skills. Grok web accepts the self-contained markdown files from the
              competency pack&apos;s <code className="text-cyan-300">grok-web/</code> folder.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

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
      "Everything on this page in one zip: Double Diamond skills, UX competency skills v1.4.0, Double Diamond crosswalk, taxonomy, discrete skills taxonomy, and the Cursor user rule.",
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
    title: "UX Competency Skills v1.4.0",
    description:
      "Eighteen agent skills on a 202-skill taxonomy across 15 domains (including ideation). Works in Cursor and Grok (SKILL.md format).",
    filename: "ux-competency-skills-v1.4.0.zip",
    meta: "18 skills · ZIP",
  },
  {
    title: "Double Diamond crosswalk",
    description:
      "How the original Double Diamond Playbook's 26 skills map into the competency pack, plus what the pack adds (phase exit gates, front-end, AI, growth).",
    filename: "double-diamond-crosswalk.md",
    meta: "Markdown",
  },
  {
    title: "Competency taxonomy v1.4.0",
    description:
      "The full 202-skill taxonomy with depth levels and lead roles across product, UX, UI, ideation, and front-end architecture.",
    filename: "taxonomy-v1.4.0.md",
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
      "Always-on Cursor User Rule that indexes the competency skills (including ideation and Double Diamond phase routing) so the agent loads the right one without being asked.",
    filename: "cursor-user-rule.txt",
    meta: "Text",
  },
];
type MethodSkill = {
  name: string;
  summary: string;
  tasks: string[];
};

type CompetencySkill = {
  name: string;
  summary: string;
};

type Phase = {
  name: "Discover" | "Define" | "Develop" | "Deliver";
  mode: string;
  question: string;
  intent: string;
  doubleDiamond: MethodSkill[];
  competency: CompetencySkill[];
};

/**
 * Phase copy and task lists follow the Double Diamond Skill Pack areas/methods
 * (and the DiamondPlay deck’s per-phase breakdown pattern). Competency skills
 * are the agent skills that usually pair with that phase.
 */
const PHASES: Phase[] = [
  {
    name: "Discover",
    mode: "Diverge",
    question: "What is actually going on?",
    intent:
      "Generate evidence about the problem space. Stay expansive — learn, don’t confirm. Discovery ends when you can define the problem with confidence.",
    doubleDiamond: [
      {
        name: "Research planning",
        summary: "Scope the engagement before a single session is scheduled.",
        tasks: [
          "Research scoping and question framing",
          "Stakeholder identification and mapping",
          "Recruiting screener writing",
          "Research ops and logistics",
          "Ethics and consent management",
        ],
      },
      {
        name: "Secondary research",
        summary: "Build the knowledge foundation before entering the field.",
        tasks: [
          "Desk research and literature review",
          "Competitive landscape mapping",
          "Industry and market analysis",
          "Heuristic benchmark review",
          "Patent and regulatory landscape research",
        ],
      },
      {
        name: "Qualitative research",
        summary: "Generate rich, direct human data before defining or solving.",
        tasks: [
          "User interviews and discussion guides",
          "Contextual inquiry",
          "Ethnographic observation and shadowing",
          "Diary studies",
          "Focus groups",
          "Job task analysis",
        ],
      },
      {
        name: "Quantitative research",
        summary: "Understand the problem space at scale through measurement.",
        tasks: [
          "Survey design and instrumentation",
          "Analytics review and behavioral analysis",
          "Funnel analysis",
          "A/B test result interpretation",
          "NPS and CSAT analysis",
          "Cohort analysis",
        ],
      },
      {
        name: "Lean / Agile discovery",
        summary: "Integrate evidence into the team’s rhythm, not as a side project.",
        tasks: [
          "Continuous discovery cadence",
          "Opportunity backlog maintenance",
          "Discovery sprint planning",
          "Jobs-to-be-done interviewing",
          "Assumption mapping",
        ],
      },
    ],
    competency: [
      {
        name: "competency-router",
        summary: "Start here when the request spans disciplines or needs a plan (Double Diamond lens + exit gates).",
      },
      {
        name: "competency-audit",
        summary: "Gap assessment of a product, codebase, team, or person.",
      },
      {
        name: "competency-user-research",
        summary: "Research planning, secondary/competitive review, methods, and ethics (RE).",
      },
      {
        name: "competency-product-framing",
        summary: "Opportunity sizing, JTBD, domain model, and systems mapping (PB).",
      },
      {
        name: "competency-measurement",
        summary: "Analytics review and discovery cadence metrics (ME).",
      },
    ],
  },
  {
    name: "Define",
    mode: "Converge",
    question: "Which problem is worth solving?",
    intent:
      "Converge discovery into a shared problem. Definition ends with a bounded problem statement and prioritized opportunities ready for ideation.",
    doubleDiamond: [
      {
        name: "Synthesis",
        summary: "Move from observations to shared, actionable insight.",
        tasks: [
          "Affinity diagramming",
          "Thematic coding and clustering",
          "Insight statement writing",
          "Data triangulation across methods",
          "Sense-making workshops",
        ],
      },
      {
        name: "Frameworks and models",
        summary: "Make the user’s world legible in forms the team can act on.",
        tasks: [
          "Jobs-to-be-done maps",
          "Ecosystem storyboards",
          "Empathy and mental-model maps",
          "Service blueprints",
          "Personas grounded in evidence",
        ],
      },
      {
        name: "Problem framing",
        summary: "Turn insight into a problem worth solving — and say what you are not solving.",
        tasks: [
          "Root cause analysis (5 Whys)",
          "Problem / point-of-view statement writing",
          "Opportunity framing",
          "How Might We question generation",
          "Assumption and risk articulation",
        ],
      },
      {
        name: "Lean / Agile defining",
        summary: "Make the problem legible in lean and agile delivery language.",
        tasks: [
          "Lean problem canvas",
          "Value stream mapping (current state)",
          "Hypothesis framing",
          "OKR and outcome alignment",
          "North Star metric definition",
        ],
      },
      {
        name: "Prioritization",
        summary: "Turn a long list into a focused, defensible commitment.",
        tasks: [
          "Impact vs. effort mapping",
          "RICE scoring",
          "MoSCoW (Must / Should / Could / Won’t)",
          "Opportunity scoring (Ulwick)",
          "Dot voting and facilitated prioritization",
        ],
      },
    ],
    competency: [
      {
        name: "competency-product-framing",
        summary: "POV, HMW, prioritization, OKRs, and reframing (PB).",
      },
      {
        name: "competency-user-research",
        summary: "Synthesis, insight statements, and experience modeling (RE).",
      },
      {
        name: "competency-ia-interaction",
        summary: "Structure flows and information once the problem is clear (IA).",
      },
      {
        name: "competency-measurement",
        summary: "North Star and input metrics that prove the problem is solved (ME).",
      },
      {
        name: "competency-content-service-ai",
        summary: "Language models and service framing from evidence (CX).",
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
      "Explore many solution directions before committing. Development ends when you have a concept worth validating and delivering.",
    doubleDiamond: [
      {
        name: "Ideation",
        summary: "Generate the widest useful range of potential solutions before converging.",
        tasks: [
          "Brainstorming facilitation",
          "Crazy 8s / thumbnail sketching",
          "Worst possible idea",
          "Analogous inspiration",
          "SCAMPER",
          "Design studio workshops",
        ],
      },
      {
        name: "Concept development",
        summary: "Turn raw ideas into defined, comparable concepts.",
        tasks: [
          "Concept definition",
          "Design principles",
          "Concept narrative",
          "Concept comparison and selection",
        ],
      },
      {
        name: "Co-design",
        summary: "Design with users as contributors, not only evaluators.",
        tasks: [
          "Generative design activities",
          "Co-creation workshops",
          "Contextual co-design",
          "Prototype iteration with users",
        ],
      },
      {
        name: "Prototyping",
        summary: "Build the right fidelity to test a specific assumption.",
        tasks: [
          "Paper prototyping",
          "Wireframe prototypes",
          "Interactive mid-fidelity prototypes",
          "Wizard of Oz and concierge prototypes",
          "High-fidelity mockups",
        ],
      },
    ],
    competency: [
      {
        name: "competency-ideation",
        summary: "Ideation facilitation, Crazy 8s, SCAMPER, co-design, and concept briefs (ID).",
      },
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
      {
        name: "competency-product-framing",
        summary: "Story mapping and MVP scoping for release slices (PB).",
      },
    ],
  },
  {
    name: "Deliver",
    mode: "Converge",
    question: "Will it hold up, and can it be built?",
    intent:
      "Test, harden, and ship. Delivery ends when the solution is live, measured, and set up for continuous improvement.",
    doubleDiamond: [
      {
        name: "Usability testing",
        summary: "Evaluate with real users to find what works and what doesn’t.",
        tasks: [
          "Writing test tasks",
          "Moderated testing protocol",
          "Unmoderated testing",
          "Analyzing usability findings (success, errors, severity)",
        ],
      },
      {
        name: "Accessibility",
        summary: "Design for the full range of human ability and context.",
        tasks: [
          "Visual accessibility",
          "Keyboard and motor accessibility",
          "Screen reader accessibility",
          "Cognitive accessibility",
          "Accessibility audit",
        ],
      },
      {
        name: "Design QA and handoff",
        summary: "Keep what ships aligned with what was validated.",
        tasks: [
          "Preparing the design file",
          "Design annotations",
          "Design specifications",
          "Design QA",
          "Iteration after handoff",
        ],
      },
      {
        name: "Design metrics",
        summary: "Measure quality and impact so design can be defended.",
        tasks: [
          "Behavioral UX metrics",
          "Attitudinal UX metrics",
          "HEART framework",
          "Design system metrics",
          "Connecting design to business metrics",
        ],
      },
      {
        name: "Iteration and design debt",
        summary: "Improve after launch and keep debt from compounding.",
        tasks: [
          "Identifying design debt",
          "Design iteration planning",
          "Design system maintenance",
          "Connecting data to design decisions",
        ],
      },
    ],
    competency: [
      {
        name: "competency-user-research",
        summary: "Usability testing at scale, SUS/SEQ, and evaluative methods (RE).",
      },
      {
        name: "competency-ideation",
        summary: "Concept testing and validation (ID).",
      },
      {
        name: "competency-accessibility",
        summary: "WCAG 2.2, inclusion, and responsible experience design (AX).",
      },
      {
        name: "competency-prototyping-handoff",
        summary: "Design QA, UX definition of done, and staged release (PR).",
      },
      {
        name: "competency-quality-reliability",
        summary: "Testing, performance, privacy, and security (QL).",
      },
      {
        name: "competency-measurement",
        summary: "Demand validation, pilots, instrumentation, and value review (ME).",
      },
      {
        name: "competency-growth-conversion",
        summary: "Marketing surfaces and conversion work (GM).",
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
        description="Download Ryan Winzenburg's Double Diamond and UX competency skill packs for Cursor and Grok, with task-level guidance for Discover, Define, Develop, and Deliver."
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
              <strong className="text-white">UX Competency Skills</strong> pack (v1.4.0) is eighteen
              agent skills on a 202-skill taxonomy across 15 domains — product framing, research,
              ideation, IA, content, UI, accessibility, design systems, prototyping, front-end,
              quality, measurement, growth, and leadership.
            </p>
            <p>
              The chain is router (with a Double Diamond lens and phase exit gates) → audit → 15
              domain skills → outcome review. New in v1.4.0: an ideation domain, Full Double Diamond
              playbook, and a crosswalk of all 26 original playbook skills into the pack. Install
              into Cursor or Grok, paste the user rule so the agent picks skills automatically, and
              use the Double Diamond pack when you want method depth inside a specific phase.
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
              right problem; Develop and Deliver find the right solution. Each phase breaks skills
              into the concrete tasks the pack actually covers.
            </p>
          </div>

          <div className="space-y-8">
            {PHASES.map((phase) => (
              <article
                key={phase.name}
                className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-6 md:p-8"
              >
                <div className="mb-6 md:flex md:items-start md:justify-between md:gap-8">
                  <div>
                    <p className="mb-2 text-sm uppercase tracking-widest text-cyan-400">
                      {phase.mode}
                    </p>
                    <h3 className="mb-1 text-3xl font-bold text-white">{phase.name}</h3>
                    <p className="italic text-slate-400">{phase.question}</p>
                  </div>
                  <p className="mt-4 max-w-xl text-slate-300 md:mt-0">{phase.intent}</p>
                </div>

                <div className="mb-8">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200">
                    Double Diamond tasks
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {phase.doubleDiamond.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-lg border border-slate-700/40 bg-slate-900/40 p-4"
                      >
                        <h4 className="mb-1 text-base font-semibold text-white">{skill.name}</h4>
                        <p className="mb-3 text-sm text-slate-400">{skill.summary}</p>
                        <ul className="space-y-1.5">
                          {skill.tasks.map((task) => (
                            <li
                              key={task}
                              className="flex items-start gap-2 text-sm text-slate-300"
                            >
                              <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400"
                                aria-hidden="true"
                              />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-200">
                    Competency skills for this phase
                  </p>
                  <ul className="grid gap-2 md:grid-cols-2">
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
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-6 md:p-8">
            <p className="text-slate-200">
              Unsure where to start? Use <code className="text-cyan-300">competency-router</code>.
              It classifies the request, picks a playbook (including Full Double Diamond), applies
              phase exit gates, and chains the domain skills. Cross-cutting checks: accessibility on
              UI work, leadership/governance when stakeholders or risk are in play. The Double Diamond
              is not a linear checklist — teams often run methods in parallel or return upstream when
              evidence demands it.
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

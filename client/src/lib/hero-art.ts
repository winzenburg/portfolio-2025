/**
 * Hi-res hero art. Each file is about 2880–2912px wide and has a 1456px sibling
 * for smaller screens. Focal points keep heads inside a cover crop.
 * Paths are site-root paths (no base prefix).
 */
export interface HeroSpec {
  width: number;
  height: number;
  /** CSS object-position, for example "50% 20%". */
  focus: string;
}

export interface ResolvedHero extends HeroSpec {
  src: string;
  srcSet: string;
}

const HEROES: Record<string, HeroSpec> = {
  "/images/home-hero-poster.webp": { width: 2912, height: 1624, focus: "50% 20%" },
  "/images/services-hero.webp": { width: 2912, height: 1632, focus: "35% 70%" },
  "/images/work-hero.webp": { width: 2912, height: 1632, focus: "50% 22%" },
  "/images/about-hero.webp": { width: 2912, height: 1632, focus: "50% 30%" },
  "/images/articles-hero.webp": { width: 2912, height: 1632, focus: "52% 18%" },
  "/project-buildout-hero.webp": { width: 2880, height: 1886, focus: "60% 50%" },
  "/project-cvs-aetna-hero.webp": { width: 2880, height: 1886, focus: "70% 25%" },
  "/project-comcast-design-system.webp": { width: 2880, height: 3490, focus: "50% 0%" },
  "/images/winzinvest_01_homepage_hero.webp": { width: 2880, height: 2477, focus: "50% 0%" },
  "/images/articles/ai-augmented-workflow-hero.webp": { width: 2880, height: 1615, focus: "50% 45%" },
  "/images/articles/ai-coding-economics-hero.webp": { width: 2880, height: 1620, focus: "50% 55%" },
  "/images/articles/ai-cost-control-hero.webp": { width: 2880, height: 1615, focus: "45% 45%" },
  "/images/articles/ai-isnt-a-feature-workflow-hero.webp": { width: 2880, height: 1620, focus: "50% 55%" },
  "/images/articles/ai-orchestration-hero.webp": { width: 2880, height: 1615, focus: "50% 45%" },
  "/images/articles/ai-powered-market-validation-hero.webp": { width: 2880, height: 1615, focus: "50% 60%" },
  "/images/articles/ai-tech-stack-hero.webp": { width: 2880, height: 1615, focus: "50% 50%" },
  "/images/articles/ai-tool-stack-hero.webp": { width: 2880, height: 1615, focus: "45% 45%" },
  "/images/articles/ai-ux-maturity-level-3-hero.webp": { width: 2880, height: 1620, focus: "60% 40%" },
  "/images/articles/audience-first-go-to-market-hero.webp": { width: 2880, height: 1615, focus: "50% 55%" },
  "/images/articles/autonomous-ai-coding-hero.webp": { width: 2880, height: 1620, focus: "50% 55%" },
  "/images/articles/brand-first-hero.webp": { width: 2880, height: 1615, focus: "50% 50%" },
  "/images/articles/business-operating-system-hero.webp": { width: 2880, height: 1615, focus: "50% 30%" },
  "/images/articles/choosing-ai-coding-mode-hero.webp": { width: 2880, height: 1620, focus: "50% 55%" },
  "/images/articles/complete-workflow-hero.webp": { width: 2880, height: 1615, focus: "50% 55%" },
  "/images/articles/compound-intelligence-hero.webp": { width: 2880, height: 1612, focus: "55% 45%" },
  "/images/articles/context7-hero.webp": { width: 2880, height: 1615, focus: "40% 55%" },
  "/images/articles/debugging-ai-workflows-hero.webp": { width: 2880, height: 1615, focus: "50% 60%" },
  "/images/articles/design-system-4-weeks-hero.webp": { width: 2880, height: 1615, focus: "50% 40%" },
  "/images/articles/design-systems-fail-hero.webp": { width: 2880, height: 1615, focus: "50% 40%" },
  "/images/articles/dev-quality-hero.webp": { width: 2880, height: 1615, focus: "45% 50%" },
  "/images/articles/docs-system-hero.webp": { width: 2880, height: 1615, focus: "55% 45%" },
  "/images/articles/docs-system-of-record-hero.webp": { width: 2880, height: 1615, focus: "45% 50%" },
  "/images/articles/dual-filter-hero.webp": { width: 2880, height: 1615, focus: "55% 65%" },
  "/images/articles/fresh-context-per-iteration-hero.webp": { width: 2880, height: 1612, focus: "40% 60%" },
  "/images/articles/gamification-hero.webp": { width: 2880, height: 1615, focus: "40% 55%" },
  "/images/articles/glif-hero.webp": { width: 2880, height: 1615, focus: "50% 55%" },
  "/images/articles/hub-evolution-hero.webp": { width: 2880, height: 1615, focus: "60% 60%" },
  "/images/articles/hub-hero.webp": { width: 2880, height: 1615, focus: "50% 60%" },
  "/images/articles/integration-docs-hero.webp": { width: 2880, height: 1612, focus: "60% 40%" },
  "/images/articles/interface-problem-hero.webp": { width: 2880, height: 1620, focus: "50% 60%" },
  "/images/articles/kill-greenlight-hero.webp": { width: 2880, height: 1615, focus: "45% 45%" },
  "/images/articles/lindy-hero.webp": { width: 2880, height: 1615, focus: "50% 55%" },
  "/images/articles/maker-vs-manager-hero.webp": { width: 2880, height: 1615, focus: "55% 55%" },
  "/images/articles/map-the-work-before-you-automate-it-hero.webp": { width: 2880, height: 1620, focus: "45% 55%" },
  "/images/articles/micro-interactions-hero.webp": { width: 2880, height: 1615, focus: "45% 60%" },
  "/images/articles/monetization-strategy-hero.webp": { width: 2880, height: 1615, focus: "55% 55%" },
  "/images/articles/mvp-strategy-hero.webp": { width: 2880, height: 1615, focus: "50% 65%" },
  "/images/articles/open-source-hero.webp": { width: 2880, height: 1615, focus: "45% 55%" },
  "/images/articles/personalization-hero.webp": { width: 2880, height: 1615, focus: "55% 55%" },
  "/images/articles/portfolio-hero.webp": { width: 2880, height: 1615, focus: "60% 60%" },
  "/images/articles/quality-gates-ai-hero.webp": { width: 2880, height: 1615, focus: "55% 55%" },
  "/images/articles/results-hero.webp": { width: 2880, height: 1615, focus: "50% 50%" },
  "/images/articles/rocks-not-tasks-hero.webp": { width: 2880, height: 1615, focus: "45% 40%" },
  "/images/articles/rule-consolidation-hero.webp": { width: 2880, height: 1615, focus: "50% 60%" },
  "/images/articles/rules-agents-hero.webp": { width: 2880, height: 1572, focus: "50% 50%" },
  "/images/articles/saas-problem-hero.webp": { width: 2880, height: 1615, focus: "35% 50%" },
  "/images/articles/scaling-strategy-hero.webp": { width: 2880, height: 1615, focus: "50% 50%" },
  "/images/articles/security-gate-hero.webp": { width: 2880, height: 1615, focus: "50% 65%" },
  "/images/articles/self-validating-ai-agents-hero.webp": { width: 2880, height: 1620, focus: "50% 50%" },
  "/images/articles/strategic-questions-ai-hero.webp": { width: 2880, height: 1612, focus: "50% 50%" },
  "/images/articles/supabase-mcp-hero.webp": { width: 2880, height: 1615, focus: "50% 50%" },
  "/images/articles/the-agent-layer-is-becoming-the-business-layer-hero.webp": { width: 2880, height: 1620, focus: "50% 50%" },
  "/images/articles/weekly-rhythm-hero.webp": { width: 2880, height: 1615, focus: "50% 60%" },
  "/images/articles/writing-prds-for-ai-hero.webp": { width: 2880, height: 1620, focus: "50% 70%" },
};

function heroPath(src: string): string {
  const withoutQuery = src.split("?")[0] ?? src;
  if (withoutQuery.startsWith("/")) return withoutQuery;
  try {
    if (withoutQuery.startsWith("http://") || withoutQuery.startsWith("https://")) {
      return new URL(withoutQuery).pathname;
    }
  } catch {
    return withoutQuery;
  }
  return `/${withoutQuery}`;
}

/** Srcset and focal point for a known hero. Returns null for other images. */
export function heroSpec(src: string): ResolvedHero | null {
  const path = heroPath(src);
  const spec = HEROES[path];
  if (!spec) return null;
  const variant = path.replace(/\.webp$/, "-1456w.webp");
  return {
    ...spec,
    src: path,
    srcSet: `${variant} 1456w, ${path} ${spec.width}w`,
  };
}

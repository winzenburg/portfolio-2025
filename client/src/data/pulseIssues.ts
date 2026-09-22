/**
 * Registry of all published Weekly AI Founder Pulse issues.
 *
 * To add next week's issue:
 *   1. Create `client/src/pages/pulse/<slug>.tsx` with the issue body.
 *   2. Add an entry to `allPulseIssues` below (newest first).
 *   3. Add a lazy import + Route in App.tsx pointing to `/pulse/<slug>`.
 */

export type PulseIssue = {
  slug: string;
  title: string;
  weekOf: string; // ISO date, e.g. "2026-09-21"
  publishedAt: string; // ISO date
  centralSignal: string;
};

export const allPulseIssues: PulseIssue[] = [
  {
    slug: "2026-09-21",
    title: "Weekly AI Founder Pulse — Week of September 21, 2026",
    weekOf: "2026-09-21",
    publishedAt: "2026-09-21",
    centralSignal:
      "The agent layer is becoming the business layer—but the durable advantage is controlled operating design.",
  },
  {
    slug: "2026-09-14",
    title: "Weekly AI Founder Pulse — Week of September 14, 2026",
    weekOf: "2026-09-14",
    publishedAt: "2026-09-14",
    centralSignal: "The agent layer is becoming the operating layer.",
  },
  {
    slug: "2026-08-28",
    title: "Weekly AI Founder Pulse — Week of August 28, 2026",
    weekOf: "2026-08-28",
    publishedAt: "2026-08-28",
    centralSignal:
      "The market is shifting from prompt-driven AI to agentic work that can act across interfaces, execute defined workflows, and produce monetizable outcomes.",
  },
];

export function getPulseIssue(slug: string): PulseIssue | undefined {
  return allPulseIssues.find((issue) => issue.slug === slug);
}

export function formatWeekOf(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

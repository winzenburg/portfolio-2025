import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import ResponsiveNav from "@/components/ResponsiveNav";
import WeeklyPulseSignup from "@/components/WeeklyPulseSignup";
import { allPulseIssues } from "@/data/pulseIssues";
import { pulseTextIssues } from "@/data/pulseTextIssues";

const CANONICAL = "https://winzenburg.com/pulse";
const DESCRIPTION =
  "Past issues of the Weekly AI Founder Pulse: one decision-ready read each week on agents, governed automation and AI product strategy, drawn from the channels Ryan Winzenburg scans.";

export default function PulseIndex() {
  const issues = [
    ...pulseTextIssues.map((i) => ({
      slug: i.slug,
      title: `Weekly AI Founder Pulse: ${i.label}`,
      centralSignal: i.centralSignal,
    })),
    ...allPulseIssues.map((i) => ({ slug: i.slug, title: i.title, centralSignal: i.centralSignal })),
  ].sort((a, b) => b.slug.localeCompare(a.slug));

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNav currentPage="subscribe" />
      <Helmet>
        <title>Weekly AI Founder Pulse Archive | Ryan Winzenburg</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
      </Helmet>
      <main className="pt-10 pb-20 md:pt-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Weekly AI Founder Pulse</h1>
          <p className="text-lg text-muted-foreground mb-10">{DESCRIPTION}</p>
          <ul className="space-y-6">
            {issues.map((issue) => (
              <li key={issue.slug} className="border-b border-border pb-6">
                <Link href={`/pulse/${issue.slug}`} className="text-xl font-semibold text-primary">
                  {issue.title}
                </Link>
                <p className="text-muted-foreground mt-2">{issue.centralSignal}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <div className="container mx-auto px-6 max-w-3xl pb-20">
        <WeeklyPulseSignup />
      </div>
    </div>
  );
}

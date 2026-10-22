import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";
import { Helmet } from "react-helmet-async";
import ResponsiveNav from "@/components/ResponsiveNav";
import WeeklyPulseSignup from "@/components/WeeklyPulseSignup";
import { pulseTextIssues } from "@/data/pulseTextIssues";

const URL_RE = /(https?:\/\/[^\s|)]+)/g;

function Linkified({ text }: { text: string }) {
  const parts = text.split(URL_RE);
  return (
    <>
      {parts.map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary break-all"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export default function PulseTextIssue() {
  const params = useParams<{ slug: string }>();
  const issue = pulseTextIssues.find((i) => i.slug === params.slug);

  if (!issue) {
    return (
      <div className="min-h-screen bg-background">
        <ResponsiveNav currentPage="subscribe" />
        <div className="container mx-auto px-6 max-w-3xl py-20">
          <p>Issue not found.</p>
          <Link href="/pulse" className="text-primary">
            All past issues
          </Link>
        </div>
      </div>
    );
  }

  const canonical = `https://winzenburg.com/pulse/${issue.slug}`;
  const title = `Weekly AI Founder Pulse: ${issue.label}`;
  const blocks = issue.body
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter((b) => b && !/^-{5,}$/.test(b));

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNav currentPage="subscribe" />
      <Helmet>
        <title>{`${title} | Ryan Winzenburg`}</title>
        <meta name="description" content={issue.centralSignal} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={issue.centralSignal} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: issue.centralSignal,
            author: { "@type": "Person", name: "Ryan Winzenburg", url: "https://winzenburg.com" },
            datePublished: issue.slug,
            url: canonical,
          })}
        </script>
      </Helmet>

      <article className="pt-10 pb-20 md:pt-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            href="/pulse"
            className="inline-flex items-center gap-2 text-primary mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Pulse archive
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground mb-10">{issue.centralSignal}</p>
          <div className="space-y-4 text-foreground leading-relaxed">
            {blocks.map((block, i) => {
              const clean = block.replace(/^-{5,}\n?|\n?-{5,}$/gm, "").trim();
              const isHeading =
                clean.length < 90 && !clean.includes("\n") && clean === clean.toUpperCase() && /[A-Z]/.test(clean);
              return isHeading ? (
                <h2 key={i} className="text-sm font-bold tracking-wider text-muted-foreground pt-6">
                  {clean}
                </h2>
              ) : (
                <p key={i} className="whitespace-pre-line">
                  <Linkified text={clean} />
                </p>
              );
            })}
          </div>
        </div>
      </article>
      <div className="container mx-auto px-6 max-w-3xl pb-20">
        <WeeklyPulseSignup />
      </div>
    </div>
  );
}

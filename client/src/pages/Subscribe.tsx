import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { WeeklyPulseSignupForm } from "@/components/WeeklyPulseSignup";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import FactRow, { type Fact } from "@/components/FactRow";
import SiteLayout from "@/components/SiteLayout";
import { Eyebrow, Section, SectionTitle } from "@/components/Section";
import { allPulseIssues, formatWeekOf } from "@/data/pulseIssues";

const heroFacts: Fact[] = [
  { label: "Cadence", value: "Once a week" },
  { label: "Subject", value: "AI in design and product work" },
  { label: "Drawn from", value: "Active project work" },
  { label: "Unsubscribe", value: "From any email, anytime" },
];

export default function Subscribe() {
  return (
    <SiteLayout currentPage="subscribe">
      <PageSeo
        title="Subscribe to the Weekly AI Founder Pulse | Ryan Winzenburg"
        description="A weekly brief for design and product leaders building with AI. Practical patterns, specific tools, real examples from active work."
        path="/subscribe"
        ogImage="/images/contact-hero.webp"
      />

      <PageHero
        titleId="subscribe-hero-title"
        align="center"
        eyebrow="Newsletter"
        title="Weekly AI Founder Pulse"
        lede={
          <>
            Once a week, one place where AI is changing how design and product teams work, with the detail from my own projects.
          </>
        }
        meta={<FactRow facts={heroFacts} />}
      />

      <Section tone="muted" labelledBy="subscribe-what-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-4">What lands in your inbox</Eyebrow>
            <SectionTitle id="subscribe-what-heading" className="text-2xl md:text-3xl">
              One area at a time, with the working detail
            </SectionTitle>
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Practical patterns, specific tools, and decisions from active
                work in AI-augmented design systems, product strategy, and
                workflow architecture.
              </p>
              <p>
                A weekly public brief from active work in enterprise B2B product
                experience: product operating model, design systems, and
                AI-enabled execution.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-sm border border-ink/15 bg-studio-card p-7 text-ink md:p-10">
              <h2
                id="subscribe-form-heading"
                className="text-xl font-semibold text-foreground"
              >
                Get the next one
              </h2>

              <WeeklyPulseSignupForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Past issues archive */}
      {allPulseIssues.length > 0 && (
        <Section tone="plain" labelledBy="past-issues-heading">
          <div className="max-w-2xl">
            <Eyebrow className="mb-4">Archive</Eyebrow>
            <SectionTitle id="past-issues-heading" className="text-2xl md:text-3xl mb-8">
              Past issues
            </SectionTitle>
            <ol className="space-y-4">
              {allPulseIssues.map((issue) => (
                <li key={issue.slug}>
                  <Link
                    href={`/pulse/${issue.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 rounded-xl border border-border/60 bg-background/40 px-5 py-4 transition-colors hover:border-primary/60 hover:bg-muted/40"
                  >
                    <span className="shrink-0 text-sm text-muted-foreground pt-0.5 min-w-[90px]">
                      {formatWeekOf(issue.weekOf)}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-medium text-foreground group-hover:text-primary/80 transition-colors leading-snug mb-1">
                        {issue.title}
                      </span>
                      <span className="block text-xs text-muted-foreground leading-relaxed">
                        {issue.centralSignal}
                      </span>
                    </span>
                    <ArrowRight
                      className="w-4 h-4 text-muted-foreground group-hover:text-primary/80 transition-colors shrink-0 mt-0.5 hidden sm:block"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      )}
    </SiteLayout>
  );
}

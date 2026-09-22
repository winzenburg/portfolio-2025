import { useState } from "react";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import FactRow, { type Fact } from "@/components/FactRow";
import SiteLayout from "@/components/SiteLayout";
import { Eyebrow, Section, SectionTitle } from "@/components/Section";
import { allPulseIssues, formatWeekOf } from "@/data/pulseIssues";

type SubscribeStatus = "idle" | "loading" | "success" | "error";

const FIELD_CLASS =
  "w-full rounded-lg border border-border bg-muted/60 px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:opacity-50";

const heroFacts: Fact[] = [
  { label: "Cadence", value: "Once a week" },
  { label: "Subject", value: "AI in design and product work" },
  { label: "Drawn from", value: "Active project work" },
  { label: "Unsubscribe", value: "From any email, anytime" },
];

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<SubscribeStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe-weekly-scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          ...(firstName.trim() ? { firstName: firstName.trim() } : {}),
        }),
      });

      const data: { success?: boolean; error?: string } = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

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
            Once a week. One area where AI is genuinely changing how design and
            product teams work.
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
            <div className="rounded-xl border border-border/60 bg-background/40 p-7 md:p-8">
              <h2
                id="subscribe-form-heading"
                className="text-xl font-semibold text-foreground"
              >
                Get the next one
              </h2>

              {/* Always mounted so the confirmation is announced when it appears. */}
              <div aria-live="polite">
                {status === "success" ? (
                  <div className="mt-6 rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-6">
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/20">
                      <Check
                        className="h-6 w-6 text-emerald-300"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      You&apos;re on the list.
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      The next pulse drops this week. Check your inbox,
                      including spam, in case it lands there the first time.
                    </p>
                    <Link
                      href="/articles"
                      className="mt-5 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Read the articles archive
                    </Link>
                  </div>
                ) : null}
              </div>

              {status === "success" ? null : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-medium text-muted-foreground"
                    >
                      First name{" "}
                      <span className="font-normal text-muted-foreground">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Alex"
                      autoComplete="given-name"
                      disabled={status === "loading"}
                      className={FIELD_CLASS}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-muted-foreground"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      autoComplete="email"
                      disabled={status === "loading"}
                      className={FIELD_CLASS}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Subscribing…" : "Subscribe"}
                  </Button>

                  <div role="alert">
                    {status === "error" ? (
                      <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                        {errorMessage}
                      </p>
                    ) : null}
                  </div>

                  <p className="pt-2 text-sm leading-relaxed text-muted-foreground">
                    Unsubscribe from any email, anytime. Resend handles it and
                    there are no dark patterns. No sharing your address.
                  </p>
                </form>
              )}
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

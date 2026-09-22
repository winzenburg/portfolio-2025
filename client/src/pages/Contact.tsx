import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link, useSearch } from "wouter";
import { useState, useEffect } from "react";
import { ArrowRight, Check, FileText, Mail, Phone, X } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import FactRow, { type Fact } from "@/components/FactRow";
import SiteLayout from "@/components/SiteLayout";
import { Section, SectionHeading, SectionTitle } from "@/components/Section";
import { trackContactSubmit, trackExternalLink } from "@/lib/analytics";
import {
  parseContactSearch,
  contactHref,
  consultingPrefill,
  contactPathCopy,
  type ContactIntent,
  type RateSheet,
} from "@/lib/contact-intent";

const PLAYBOOK_INFO: Record<string, { title: string; article: string; articleSlug: string }> = {
  "micro-interactions": {
    title: "Micro-Interactions Implementation Guide",
    article: "The Micro-Interactions: Apple-Style Motion That Guides",
    articleSlug: "the-micro-interactions-apple-style-motion-that-guides",
  },
  "security-bug-gate": {
    title: "Security & Bug Gate Templates",
    article: "The Security and Bug Gate: Two-Tier Code Review For AI",
    articleSlug: "the-security-and-bug-gate-two-tier-code-review-for-ai",
  },
  "portfolio-template": {
    title: "Portfolio Scoring Template",
    article: "The Portfolio Approach: Managing Multiple Bets",
    articleSlug: "the-portfolio-approach-managing-multiple-bets-killing-fast-prioritizing-by-expected-value",
  },
  "validation-playbook": {
    title: "Validation Playbook & Scoring Sheets",
    article: "The Solution: A Dual-Filter Validation Framework",
    articleSlug: "the-solution-a-dual-filter-validation-framework",
  },
  "context7-starter": {
    title: "Context7 Starter Kit",
    article: "Never Ship Outdated Code: How We Use Context7",
    articleSlug: "never-ship-outdated-code-how-we-use-context7-to-query-live-docs",
  },
  "complete-system": {
    title: "Complete System Templates & Playbooks",
    article: "The Results: What We've Learned Building This System",
    articleSlug: "the-results-what-weve-learned-building-this-system",
  },
  "complete-framework": {
    title: "Complete SaaS Framework",
    article: "The Problem: Why Most SaaS Startups Fail Before They Even Start",
    articleSlug: "the-problem-why-most-saas-startups-fail-before-they-even-start",
  },
};

const SHEET_LABEL: Record<RateSheet, string> = {
  startup: "Growth-stage company",
  enterprise: "Enterprise org",
};

const EMAIL_ADDRESS = "ryan@winzenburg.com";
const PHONE_NUMBER = "720.515.7182";

type ContactFormFields = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  playbook: string;
};

const emptyForm: ContactFormFields = {
  name: "",
  email: "",
  company: "",
  role: "",
  message: "",
  playbook: "",
};

function formDataToSearchParams(data: FormData): URLSearchParams {
  const params = new URLSearchParams();
  data.forEach((value, key) => {
    if (typeof value === "string") {
      params.append(key, value);
    }
  });
  return params;
}

/** Facts all come from the path copy on this page, not from new claims. */
function heroFactsFor(intent: ContactIntent | null): Fact[] {
  const firstConversation: Fact =
    intent === "consulting"
      ? { label: "First conversation", value: "30 minutes, no deck" }
      : { label: "First conversation", value: "30 to 45 minutes" };

  return [
    { label: "Reply time", value: "Within a day" },
    firstConversation,
    { label: "Email", value: EMAIL_ADDRESS },
    { label: "Phone", value: PHONE_NUMBER },
  ];
}

function pathCardClass(active: boolean): string {
  return active
    ? "group block h-full rounded-xl border border-primary/60 bg-primary/10 p-7 text-left"
    : "group block h-full rounded-xl border border-border/60 bg-background/40 p-7 text-left transition-colors hover:border-primary/50 hover:bg-background/70";
}

function PathCardHeader({ label, active }: { label: string; active: boolean }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <span
        className={
          active
            ? "text-xs uppercase tracking-[0.16em] text-primary"
            : "text-xs uppercase tracking-[0.16em] text-slate-400"
        }
      >
        {label}
      </span>
      {active ? (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
          Selected
        </span>
      ) : (
        <ArrowRight
          className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default function Contact() {
  const searchString = useSearch();
  const { intent, sheet, playbookId } = parseContactSearch(searchString);
  const playbookInfo = playbookId ? PLAYBOOK_INFO[playbookId] ?? null : null;
  const copy = contactPathCopy(intent);

  const [formData, setFormData] = useState<ContactFormFields>(emptyForm);
  const [messageTouched, setMessageTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);

  useEffect(() => {
    if (playbookInfo) {
      setFormData((prev) => ({
        ...prev,
        playbook: playbookInfo.title,
        message:
          prev.message.length > 0
            ? prev.message
            : `I'd like to receive the "${playbookInfo.title}" from your article.`,
      }));
      return;
    }

    if (intent === "consulting" && !messageTouched) {
      setFormData((prev) => ({
        ...prev,
        playbook: "",
        message: consultingPrefill(sheet),
      }));
      return;
    }

    if (intent === "role" && !messageTouched) {
      setFormData((prev) => ({
        ...prev,
        playbook: "",
        message: "",
      }));
    }
  }, [playbookInfo, intent, sheet, messageTouched]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitFailed(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToSearchParams(data).toString(),
      });

      if (response.ok) {
        trackContactSubmit({
          hasPlaybook: playbookInfo !== null,
          intent,
          sheet,
        });
        setSubmitted(true);
        setFormData(emptyForm);
        setMessageTouched(false);
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setSubmitFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  const seoTitle =
    intent === "role"
      ? "Contact Ryan Winzenburg | Design Leadership Roles"
      : intent === "consulting"
        ? "Contact Ryan Winzenburg | Book a 30-Minute Consultation"
        : "Contact Ryan Winzenburg | Design Operations & UX Leadership";

  const seoDescription =
    intent === "role"
      ? "Contact Ryan Winzenburg about Head of Design Operations, VP/Director of Design, and Principal Design Technologist roles."
      : intent === "consulting"
        ? "Book a 30-minute call with Ryan Winzenburg. Tell me what you're about to fund and what's still uncertain. Scoped proposal within three business days if there's a fit."
        : "Contact Ryan Winzenburg about design operations leadership, AI workflow architecture, design systems, and scoped engagements.";

  return (
    <SiteLayout currentPage="contact">
      <PageSeo title={seoTitle} description={seoDescription} path="/contact" ogImage="/images/contact-hero.webp" />

      <PageHero
        titleId="contact-hero-title"
        eyebrow="Contact"
        media={{ src: "/images/contact-hero.webp", position: "object-center" }}
        title={copy.title}
        lede={copy.description}
        actions={
          <>
            <Button size="lg" asChild>
              <a href="#contact-form">Write to me</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`mailto:${EMAIL_ADDRESS}`}>Email directly</a>
            </Button>
          </>
        }
        meta={<FactRow facts={heroFactsFor(intent)} />}
      />

      {/* Path selector */}
      <Section labelledBy="contact-paths-heading">
        <SectionHeading
          id="contact-paths-heading"
          eyebrow="Pick a lane"
          title="Two conversations, and they run differently"
          lede="Choosing one sets up the form below. If neither fits, skip it and write whatever you were going to write."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href={contactHref({ intent: "role", playbook: playbookId })}
            aria-current={intent === "role" ? "page" : undefined}
            className={pathCardClass(intent === "role")}
          >
            <PathCardHeader label="Hiring" active={intent === "role"} />
            <h3 className="mb-2 text-xl font-semibold text-white">
              A leadership role
            </h3>
            <p className="leading-relaxed text-slate-300">
              Head of Design Operations, VP or Director of Design, Principal
              Design Technologist.
            </p>
          </Link>

          <Link
            href={contactHref({ intent: "consulting", sheet, playbook: playbookId })}
            aria-current={intent === "consulting" ? "page" : undefined}
            className={pathCardClass(intent === "consulting")}
          >
            <PathCardHeader
              label="Product work"
              active={intent === "consulting"}
            />
            <h3 className="mb-2 text-xl font-semibold text-white">
              A 30-minute consultation
            </h3>
            <p className="leading-relaxed text-slate-300">
              Research through delivery on a product bet that still has too much
              uncertainty.
            </p>
          </Link>
        </div>
      </Section>

      {/* Form + sidebar */}
      <Section id="contact-form" tone="slate" labelledBy="contact-form-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-border/60 bg-background/40 p-7 md:p-8">
              <h2
                id="contact-form-heading"
                className="text-2xl font-bold text-white"
              >
                {playbookInfo ? "Request your playbook" : copy.formHeading}
              </h2>

              {/* Always mounted so the confirmation is announced when it lands. */}
              <div aria-live="polite">
                {submitted ? (
                  <div className="mt-6 rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-6 md:p-7">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                      <Check
                        className="h-6 w-6 text-emerald-300"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      Message sent
                    </h3>
                    <p className="mt-2 max-w-md leading-relaxed text-slate-300">
                      {intent === "consulting" ? (
                        <>Thanks. I&apos;ll reply and we&apos;ll find a 30-minute slot.</>
                      ) : (
                        <>
                          Thanks for reaching out. I&apos;ll get back to you
                          within 24 hours. If it&apos;s urgent, {EMAIL_ADDRESS}{" "}
                          reaches me faster.
                        </>
                      )}
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : null}
              </div>

              {submitted ? null : (
                <>
                  {/* role="alert" so a failed send is announced straight away. */}
                  <div role="alert">
                    {submitFailed ? (
                      <div className="mt-6 rounded-lg border border-red-500/40 bg-red-500/10 p-5">
                        <p className="font-semibold text-red-200">
                          That didn&apos;t send.
                        </p>
                        <p className="mt-1 leading-relaxed text-slate-300">
                          Nothing was lost, so you can try again. If it keeps
                          failing, email me directly at{" "}
                          <a
                            href={`mailto:${EMAIL_ADDRESS}`}
                            className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-cyan-300"
                          >
                            {EMAIL_ADDRESS}
                          </a>
                          .
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {playbookInfo && (
                    <div className="mt-6 rounded-lg border border-primary/30 bg-primary/10 p-4">
                      <div className="flex items-start gap-3">
                        <FileText
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <div className="flex-1">
                          <div className="text-sm text-slate-300">
                            Requesting playbook:
                          </div>
                          <div className="font-medium text-white">
                            {playbookInfo.title}
                          </div>
                          <div className="mt-1 text-sm text-slate-400">
                            From:{" "}
                            <Link
                              href={`/articles/${playbookInfo.articleSlug}`}
                              className="text-primary underline underline-offset-4 transition-colors hover:text-cyan-300"
                            >
                              {playbookInfo.article}
                            </Link>
                          </div>
                        </div>
                        <Link
                          href={contactHref({ intent, sheet })}
                          aria-label="Clear playbook request"
                          className="rounded-md p-1 text-slate-400 transition-colors hover:text-white"
                        >
                          <X className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {intent === "consulting" && sheet && (
                    <div className="mt-6 rounded-lg border border-border/60 bg-slate-900/60 p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <div className="text-sm text-slate-400">
                            Company shape
                          </div>
                          <div className="font-medium text-white">
                            {SHEET_LABEL[sheet]}
                          </div>
                        </div>
                        <Link
                          href={contactHref({ intent: "consulting", playbook: playbookId })}
                          aria-label="Clear company shape"
                          className="rounded-md p-1 text-slate-400 transition-colors hover:text-white"
                        >
                          <X className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="mt-7 space-y-6"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="playbook" value={formData.playbook} />
                    <input type="hidden" name="intent" value={intent ?? "unspecified"} />
                    <input type="hidden" name="sheet" value={sheet ?? ""} />
                    <p className="hidden">
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-slate-300"
                        >
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-slate-300"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-2 block text-sm font-medium text-slate-300"
                        >
                          Company *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          autoComplete="organization"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="role"
                          className="mb-2 block text-sm font-medium text-slate-300"
                        >
                          Your Role *
                        </label>
                        <Input
                          id="role"
                          name="role"
                          type="text"
                          required
                          autoComplete="organization-title"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          placeholder={
                            intent === "role"
                              ? "e.g., Head of Talent, VP Product, CEO"
                              : "e.g., VP Product, C-Suite, Partner"
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        {copy.messageLabel} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={(e) => {
                          setMessageTouched(true);
                          setFormData({ ...formData, message: e.target.value });
                        }}
                        placeholder={copy.messagePlaceholder}
                        rows={6}
                        className="min-h-40"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                      {submitting ? "Sending..." : copy.submitLabel}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-xl border border-border/60 bg-background/40 p-7">
              <h3 className="mb-5 text-xs uppercase tracking-[0.16em] text-slate-400">
                Direct lines
              </h3>
              <ul className="divide-y divide-border/60 border-t border-border/60">
                <li>
                  <a
                    href="https://www.linkedin.com/in/rwinzenburg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackExternalLink("https://www.linkedin.com/in/rwinzenburg/", "linkedin")}
                    className="flex items-center gap-3 py-3 text-slate-300 transition-colors hover:text-primary"
                  >
                    <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/rwinzenburg"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackExternalLink("https://x.com/rwinzenburg", "x")}
                    className="flex items-center gap-3 py-3 text-slate-300 transition-colors hover:text-primary"
                  >
                    <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span className="font-medium">X</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="flex items-center gap-3 py-3 text-slate-300 transition-colors hover:text-primary"
                  >
                    <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span className="font-medium">{EMAIL_ADDRESS}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:+1${PHONE_NUMBER.replace(/\D/g, "")}`}
                    className="flex items-center gap-3 py-3 text-slate-300 transition-colors hover:text-primary"
                  >
                    <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span className="font-medium">{PHONE_NUMBER}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border/60 bg-background/40 p-7">
              <h3 className="mb-5 text-xs uppercase tracking-[0.16em] text-slate-400">
                What to expect
              </h3>
              <ul className="space-y-3 border-t border-border/60 pt-5">
                {copy.expectItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate-300">
                    <span
                      aria-hidden="true"
                      className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-primary"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              {intent === "consulting" ? (
                <p className="mt-5 border-t border-border/60 pt-5 text-sm leading-relaxed text-slate-400">
                  Process, timing, and payment are covered on the{" "}
                  <Link
                    href="/consulting#faq"
                    className="text-primary underline underline-offset-4 transition-colors hover:text-cyan-300"
                  >
                    consulting FAQ
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </Section>

      {/* Closing */}
      <Section tone="muted" compact labelledBy="contact-closing-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionTitle
              id="contact-closing-heading"
              className="text-2xl md:text-3xl"
            >
              Still deciding what to ask for?
            </SectionTitle>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
              The case studies show how these engagements actually run. The
              assessment is a faster way in if you&apos;d rather start with your
              own product.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button variant="outline" asChild>
              <Link href="/work">See the case studies</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/assessment">Take the assessment</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

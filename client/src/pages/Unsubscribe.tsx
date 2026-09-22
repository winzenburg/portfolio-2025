import { useState } from "react";
import { Link, useSearch } from "wouter";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { Section } from "@/components/Section";

type UnsubscribeStatus = "idle" | "loading" | "success" | "error";

const FIELD_CLASS =
  "w-full rounded-lg border border-border bg-muted/60 px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:opacity-50";

export default function Unsubscribe() {
  const searchString = useSearch();
  const emailFromQuery = new URLSearchParams(searchString).get("email") ?? "";

  const [email, setEmail] = useState(emailFromQuery);
  const [status, setStatus] = useState<UnsubscribeStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data: { success?: boolean; error?: string } = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <SiteLayout currentPage="unsubscribe">
      <PageSeo
        title="Unsubscribe | Ryan Winzenburg"
        description="Manage your newsletter subscription."
        path="/unsubscribe"
        ogImage="/images/contact-hero.webp"
        noIndex
      />

      <PageHero
        titleId="unsubscribe-hero-title"
        align="center"
        eyebrow="Newsletter"
        title="Unsubscribe"
        lede={
          <>
            Enter the address you subscribed with. After that you won&apos;t
            receive any more newsletter emails.
          </>
        }
      />

      <Section tone="muted" compact labelledBy="unsubscribe-form-heading">
        <div className="mx-auto max-w-xl">
          <div className="rounded-xl border border-border/60 bg-background/40 p-7 md:p-8">
            <h2
              id="unsubscribe-form-heading"
              className="text-xl font-semibold text-foreground"
            >
              Remove an address from the list
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
                    You&apos;ve been unsubscribed
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    You won&apos;t receive any more newsletter emails from us.
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
                    htmlFor="unsubscribe-email"
                    className="mb-2 block text-sm font-medium text-muted-foreground"
                  >
                    Email address
                  </label>
                  <input
                    id="unsubscribe-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    required
                    autoComplete="email"
                    disabled={status === "loading"}
                    aria-describedby="unsubscribe-email-note"
                    className={FIELD_CLASS}
                  />
                  <p
                    id="unsubscribe-email-note"
                    className="mt-2 text-sm text-muted-foreground"
                  >
                    Use the address the newsletter arrives at, not a forwarding
                    alias.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Unsubscribing..." : "Unsubscribe"}
                </Button>

                <div role="alert">
                  {status === "error" ? (
                    <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                      {errorMessage}
                    </p>
                  ) : null}
                </div>
              </form>
            )}
          </div>

          <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground">
            Landed here by mistake?{" "}
            <Link
              href="/subscribe"
              className="text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
            >
              Stay on the list
            </Link>
            .
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}

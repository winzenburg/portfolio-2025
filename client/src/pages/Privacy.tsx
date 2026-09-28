import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import PageSeo from "@/components/PageSeo";
import { Section, SectionTitle } from "@/components/Section";

/**
 * Needs Ryan's review before this page is relied on.
 * The facts below are read from this repo's code. This is not a legal notice,
 * and it should not be treated as one until Ryan has reviewed it.
 */
export default function Privacy() {
  return (
    <SiteLayout currentPage="privacy">
      <PageSeo
        title="Privacy | Ryan Winzenburg"
        description="What this site stores: PostHog page analytics, Netlify contact form fields, and a Resend newsletter contact. Deletion requests go to ryan@winzenburg.com."
        path="/privacy"
        ogImage="/images/contact-hero.webp"
      />

      <article className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-6 text-sm text-muted-foreground">
            Ryan still needs to review this page before it is relied on.
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Privacy
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            This page says what the site code actually stores when you visit,
            write in, or join a list. It is a description of the implementation.
          </p>
        </div>

        <Section id="analytics" labelledBy="privacy-analytics" compact>
          <div className="mx-auto max-w-3xl px-6">
            <SectionTitle id="privacy-analytics">Analytics</SectionTitle>
            <div className="prose prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0">
              <p>
                Page activity goes to PostHog at us.posthog.com. The project
                key is in the browser bundle. Autocapture is off. The
                library&apos;s automatic pageview is off.
              </p>
              <p>
                After a route change the site sends its own pageview. That
                event includes the document title, the path, a page type (home,
                article, case study, and the rest of the routes the code
                names), and the article or case-study slug when the URL has
                one. The full URL is included.
              </p>
              <p>
                Scroll depth is recorded at 25, 50, 75, and 100 percent, with
                the page type, title, and path. Article slug when there is one.
              </p>
              <p>
                Other events the code sends: cta_click, nav_click,
                article_card_click, case_study_click, external_link_click,
                articles_category_filter, rate_sheet_download,
                playbook_request_click. A contact submit records whether a
                playbook was requested, the intent, and the rate sheet. It
                does not send the message, name, email, or company. Newsletter
                signup records that a signup happened, not the address. The
                assessment records a start, and on completion the total, the
                level, and the weakest dimension. Individual answers are not
                sent.
              </p>
              <p>
                Person profiles are set to identified_only. This site does not
                call identify.
              </p>
              <p>
                client/src/lib/posthog.ts does not pass a persistence option.
                posthog-js 1.362.0, the version in this repo, defaults an
                omitted persistence option to localStorage plus a cookie, and
                cookie_expiration to 365 days. Page leave is captured.
              </p>
            </div>
          </div>
        </Section>

        <Section id="contact-form" labelledBy="privacy-contact" tone="muted" compact>
          <div className="mx-auto max-w-3xl px-6">
            <SectionTitle id="privacy-contact">Contact form</SectionTitle>
            <div className="prose prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0">
              <p>
                The form on{" "}
                <Link href="/contact" className="text-primary underline">
                  /contact
                </Link>{" "}
                is a Netlify Form named contact. A submission includes name,
                email, company, role, message, timing, intent, playbook, and
                sheet. Company, role, and timing can be left blank. A honeypot
                field named bot-field is included and is meant to stay empty.
              </p>
              <p>
                Netlify stores the submission. The analytics event for the same
                submit does not include the message body.
              </p>
            </div>
          </div>
        </Section>

        <Section id="newsletter" labelledBy="privacy-newsletter" compact>
          <div className="mx-auto max-w-3xl px-6">
            <SectionTitle id="privacy-newsletter">Newsletter</SectionTitle>
            <div className="prose prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0">
              <p>
                The email box on articles posts that address to /api/subscribe.
                The function creates a Resend contact on the audience in
                RESEND_AUDIENCE_ID, with unsubscribed set to false.
                /unsubscribe updates that contact to unsubscribed.
              </p>
              <p>
                The Weekly AI Founder Pulse form at /subscribe sends the email,
                and a first name if one is entered, to Resend. It can also send
                a welcome email from hello@winzenburg.com.
              </p>
            </div>
          </div>
        </Section>

        <Section id="deletion" labelledBy="privacy-deletion" tone="muted" compact>
          <div className="mx-auto max-w-3xl px-6">
            <SectionTitle id="privacy-deletion">Removal</SectionTitle>
            <p className="text-lg leading-relaxed text-muted-foreground">
              To ask for a contact submission, a newsletter address, or
              analytics tied to you to be removed, email{" "}
              <a
                href="mailto:ryan@winzenburg.com"
                className="text-primary underline"
              >
                ryan@winzenburg.com
              </a>
              .
            </p>
          </div>
        </Section>
      </article>
    </SiteLayout>
  );
}

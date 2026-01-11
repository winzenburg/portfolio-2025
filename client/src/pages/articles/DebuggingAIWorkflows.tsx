import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function DebuggingAIWorkflows() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ResponsiveNav currentPage="articles" />

      {/* Article Header */}
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Link */}
          <Link href="/articles">
            <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </a>
          </Link>

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src="/images/articles/debugging-ai-workflows-hero.png"
              alt="Debugging AI Workflows Without Chaos"
              className="w-full h-auto"
            />
          </div>

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>December 4, 2025</span>
            <span>•</span>
            <span>9 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Debugging AI Workflows Without Chaos: Evidence, Snapshots, and Minimal Endpoints
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              AI failures feel random until you can reproduce them—or at least explain them. When an AI-powered step fails, teams usually fall into one of two bad patterns: no evidence ("It failed. Try again.") or too much evidence (logs full of sensitive or irrelevant data). Here's the third path that actually works.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
            <p className="text-slate-300 leading-relaxed mb-6">
              I've debugged enough AI workflow failures to recognize the patterns. The first reaction is usually "it worked before, let's just retry." Sometimes that works, but it doesn't tell you anything about what went wrong or whether it will happen again. You're treating symptoms, not causes.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The alternative—logging everything—creates its own problems. Logs fill up with full prompts including user data, sensitive context, and irrelevant details. When you actually need to debug, you're searching through noise. And if those logs contain PII, you've created a compliance issue on top of your debugging problem.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "A reliable system needs minimal evidence that explains what happened and how to recover."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What "Debuggable" Actually Means
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              An AI workflow is debuggable when you can answer five questions: What input did we send? What output did we receive? When did we send it? What failed (timeout, validation, quota, parsing)? And what is the recovery path?
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              You don't need full raw prompts everywhere. You don't need secret keys in logs. You don't need a giant admin UI. You need enough structured information to understand what happened and decide what to do next.
            </p>

            {/* Debuggable Definition */}
            <div className="my-10 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">You Need To Know</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">What input did we send?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">What output did we receive?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">When did we send it?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">What failed (category)?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">What is the recovery path?</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4 uppercase text-sm tracking-wider">You Don't Need</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Full raw prompts everywhere</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Secret keys in logs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">A giant admin UI</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">PII in debugging logs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Unstructured log streams</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Snapshots as the Primary Unit of Evidence
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              A snapshot is a structured record of a single attempt. Instead of logging everything continuously, you capture discrete moments that can be reviewed independently. This makes debugging manageable and keeps your evidence organized.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Each snapshot should include an attempt ID, run and step IDs for context, timestamps (when it started and finished), request metadata (without secrets), response metadata (status and size), a pointer to stored raw output, and an error category if something went wrong.
            </p>

            {/* Snapshot Structure */}
            <div className="my-10 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Snapshot Record Structure</div>
              <div className="space-y-2 text-slate-300 font-mono text-sm">
                <div><span className="text-cyan-400">attemptId:</span> unique identifier for this attempt</div>
                <div><span className="text-cyan-400">runId / stepId:</span> context within the workflow</div>
                <div><span className="text-cyan-400">timestamps:</span> started, finished</div>
                <div><span className="text-cyan-400">request:</span> metadata (not secrets)</div>
                <div><span className="text-cyan-400">response:</span> status, size</div>
                <div><span className="text-cyan-400">artifactPath:</span> pointer to stored raw output</div>
                <div><span className="text-cyan-400">errorCategory:</span> timeout | invalid_output | unauthorized | ...</div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Snapshots make debugging discrete and reviewable. Instead of scrolling through logs, you look at specific attempts. You can compare successful snapshots to failed ones. You can identify patterns across multiple failures. The structure provides clarity that unstructured logs never can.
            </p>

            {/* Section Divider */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Minimal Endpoints: Fetch by ID, Don't Rerun
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              If the external system supports it, add a safe pathway: "fetch result for an existing external ID." This is fundamentally different from "run generation." Fetch-by-id is read-only, cheap, and safe. It doesn't burn tokens or credits.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Fetch-by-id enables recovery after timeouts (the operation completed, we just didn't get the response), importing late-arriving artifacts (the result exists, we just need to pull it in), and debugging without burning cost (you can examine what was produced without regenerating it).
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "Fetch-by-id enables recovery without regeneration. It also reduces the temptation to spam retries."
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              The fetch-by-id pattern also reduces the temptation to spam retries. When users can't recover without regenerating, they retry aggressively. This burns cost and can trigger rate limits. When they can fetch existing results, they have an alternative that's both cheaper and more likely to succeed.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Guardrails for Debug Endpoints
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Debug endpoints are dangerous if you don't constrain them. They can become shadow integration surfaces that bypass your normal security and rate limiting. The goal is diagnosis, not an alternative API.
            </p>

            {/* Debug Endpoint Guardrails */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Debug Endpoint Requirements</div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Auth/role gates:</strong> Only authorized users can access debug endpoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Rate limit:</strong> Prevent abuse and accidental overload</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Never return secrets:</strong> Sanitize all responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Return pointers, not data:</strong> Store outputs as artifacts, return references</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Log usage:</strong> Track who fetched what, when</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Normalize Errors into a Small Taxonomy
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              AI failures are noisy. The raw error messages from different providers vary wildly, and they often contain technical details that don't help users understand what happened. Converting errors into stable categories makes both debugging and UX much cleaner.
            </p>

            {/* Error Taxonomy */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Error Taxonomy</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <code className="text-cyan-400 bg-slate-800/50 px-2 py-1 rounded text-sm">timeout</code>
                  <span className="text-slate-300 text-sm">Operation took too long</span>
                </div>
                <div className="flex items-start gap-3">
                  <code className="text-cyan-400 bg-slate-800/50 px-2 py-1 rounded text-sm">unauthorized</code>
                  <span className="text-slate-300 text-sm">Auth/permission issue</span>
                </div>
                <div className="flex items-start gap-3">
                  <code className="text-cyan-400 bg-slate-800/50 px-2 py-1 rounded text-sm">quota_exceeded</code>
                  <span className="text-slate-300 text-sm">Hit rate or budget limits</span>
                </div>
                <div className="flex items-start gap-3">
                  <code className="text-cyan-400 bg-slate-800/50 px-2 py-1 rounded text-sm">invalid_format</code>
                  <span className="text-slate-300 text-sm">Output didn't match schema</span>
                </div>
                <div className="flex items-start gap-3">
                  <code className="text-cyan-400 bg-slate-800/50 px-2 py-1 rounded text-sm">upstream_error</code>
                  <span className="text-slate-300 text-sm">Provider returned error</span>
                </div>
                <div className="flex items-start gap-3">
                  <code className="text-cyan-400 bg-slate-800/50 px-2 py-1 rounded text-sm">storage_error</code>
                  <span className="text-slate-300 text-sm">Couldn't save output</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              For each error category, attach a human-readable message and a recovery action. "Timeout" becomes "The operation took too long. Try again or fetch the result if it completed." "Quota exceeded" becomes "You've hit your usage limit. Check your account settings or try again later."
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              This normalization keeps product UX calm and supportable. Users see consistent, helpful messages instead of cryptic provider errors. Support teams can triage based on category without reading technical details. And your monitoring can aggregate errors meaningfully.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Debug Checklist for AI Steps
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Before shipping any AI-powered step, I run through a checklist that ensures debuggability is built in from the start. This prevents the "we'll add logging later" trap that usually means "we'll debug blind until something critical breaks."
            </p>

            {/* Debug Checklist */}
            <div className="my-10 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Pre-Ship Debug Checklist</div>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>Each attempt produces a snapshot record</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>Raw outputs are stored as artifacts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>Errors are categorized into a small set</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>UI shows recovery steps for each error category</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>A fetch-by-id pathway exists (if supported by provider)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>Debug access is gated and audited</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Trade-offs
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Evidence collection adds storage and complexity. You're saving snapshots and artifacts that take space and require retention policies. But the alternative—debugging blind—costs far more in engineering time and user frustration.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Finding the right level of evidence is a design challenge. Too little is useless—you can't debug without information. Too much is risky—you're storing sensitive data and creating noise. The snapshot approach with pointers to artifacts is a good balance, but you'll need to tune it for your specific context.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The best debugging UX is often "import the result" rather than "rerun." This shifts the user's mental model from "the system failed" to "the system produced something, let me work with it." Even failed operations often produce partial results that can be useful.
            </p>

            {/* Takeaways Card */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Key Takeaways</div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Debugging AI is about evidence and recovery, not more retries</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Snapshots turn messy failures into discrete events you can reason about</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Fetch-by-id endpoints reduce cost and make recovery possible</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Constrain debug tooling with auth, rate limits, and audit logs</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Normalize errors into a small taxonomy with recovery actions</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Building Observable AI Systems?</h3>
              <p className="text-slate-300 mb-6">I help teams design AI workflows that are debuggable from day one. The right observability strategy prevents endless firefighting later.</p>
              <Link href="/contact">
                <a className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                  Let's Talk →
                </a>
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <NewsletterSignup />
          </div>

          {/* Next Article */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">Continue Reading</p>
            <Link href="/articles/design-systems-fail">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                Read: Why Most Design Systems Fail (And How to Fix Them)
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

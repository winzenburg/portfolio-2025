import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function QualityGatesForAI() {
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

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>December 9, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Quality Gates for AI Outputs: Schema, Normalization, and Readable Rendering
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              AI output is a raw material, not a finished product. When teams ship AI output directly into a UI, they usually learn the same lesson the hard way: formatting breaks, JSON becomes unreadable, headings are inconsistent, structure changes between runs. The fix isn't "prompt harder"—it's treating AI output like untrusted input.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
            <p className="text-slate-300 leading-relaxed mb-6">
              I made this mistake early in my AI development journey. The prompts were working great in testing—clean outputs, consistent structure, exactly what we needed. Then we deployed to production. Within days, support tickets started rolling in. The output was breaking in ways that seemed random: malformed JSON, missing sections, formatting that looked fine in one context and terrible in another.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The pattern became clear after enough debugging sessions. AI outputs aren't deterministic in the way traditional code is. Even with careful prompting, models produce variation. Temperature settings, context differences, and model updates all introduce drift. If your system expects perfect consistency from the model itself, you're building on sand.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "Treat AI output like untrusted input. The fix is not 'prompt harder'—it's gates."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Three Gates
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              After building and debugging dozens of AI-powered features, I've settled on a three-gate approach that handles the variability inherent in AI outputs. Each gate has a specific job, and together they transform raw model output into something you can actually ship to users.
            </p>

            {/* Three Gates Overview */}
            <div className="my-10 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-2 uppercase text-sm tracking-wider">Gate 1</div>
                <div className="text-white font-bold text-xl mb-3">Schema</div>
                <div className="text-slate-300 text-sm">Does the output have the shape you need? Validate structure before anything else.</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-2 uppercase text-sm tracking-wider">Gate 2</div>
                <div className="text-white font-bold text-xl mb-3">Normalization</div>
                <div className="text-slate-300 text-sm">Is the output formatted consistently? Transform machine output into human artifact.</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-2 uppercase text-sm tracking-wider">Gate 3</div>
                <div className="text-white font-bold text-xl mb-3">Rendering</div>
                <div className="text-slate-300 text-sm">Is it readable and navigable for humans? This is where output becomes usable.</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Gate 1: Schema (Validate the Shape)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Assume the output is unknown. Even if the model "usually" returns JSON, you need a parser with safe failure modes, a validator that checks required fields, and a fallback when validation fails. Treating AI output as untrusted input is the foundation of reliable AI systems.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Schema validation should be strict about required keys, types (string, number, array, object), and maximum sizes. That last one is important—AI can produce enormous outputs that break your UI or exceed storage limits. Better to catch that at the schema level than in production.
            </p>

            {/* Schema Validation */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Schema Validation Requirements</div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Required keys:</strong> Does the output contain everything you need?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Types:</strong> Are strings actually strings? Are arrays actually arrays?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Maximum sizes:</strong> Is anything too large to be usable?</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              When schema validation fails, don't just throw an error. Store the raw output anyway—you'll want it for debugging. Mark the step failed with a recovery path, either retry or import. And surface a helpful error message that tells the user what was missing, not just "something went wrong."
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Gate 2: Normalization (Make It Consistent)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Normalization turns messy output into consistent documents. This is where you transform "machine output" into "human artifact." The model might produce valid content that still isn't usable because it's formatted inconsistently across runs.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Common normalization steps include ensuring headings follow a predictable hierarchy, ensuring bullet lists are actually lists, wrapping JSON in fenced code blocks, pretty-printing JSON with indentation, and enforcing consistent section names. These seem like small details, but they compound into the difference between output that's usable and output that requires manual cleanup.
            </p>

            {/* Normalization Steps */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Common Normalization Steps</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">•</span>
                  <span className="text-slate-300">Headings follow predictable hierarchy</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">•</span>
                  <span className="text-slate-300">Bullet lists are actually lists</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">•</span>
                  <span className="text-slate-300">JSON wrapped in fenced code blocks</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">•</span>
                  <span className="text-slate-300">JSON pretty-printed with indentation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">•</span>
                  <span className="text-slate-300">Consistent section names enforced</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">•</span>
                  <span className="text-slate-300">Whitespace and newlines standardized</span>
                </div>
              </div>
            </div>

            {/* Section Divider */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Gate 3: Rendering (Make It Usable)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Readable rendering is a product feature, not vanity. Table of contents, collapsible long sections, syntax highlighting for code and JSON, stable anchors for headings, consistent typography—these aren't nice-to-haves. They directly reduce confusion, support requests, and rework.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              I've tracked support tickets on AI features and found that a significant portion come from users not being able to find what they need in the output. The content is there, but it's buried in a wall of text or formatted in a way that makes navigation difficult. Good rendering solves this.
            </p>

            {/* Rendering Features */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Rendering Features That Matter</div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Table of contents:</strong> Let users navigate long documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Collapsible sections:</strong> Don't overwhelm with everything at once</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Syntax highlighting:</strong> Make code and JSON readable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Stable anchors:</strong> Enable linking to specific sections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Consistent typography:</strong> Match the rest of your product</span>
                </li>
              </ul>
            </div>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "Readable rendering is a product feature. It directly reduces confusion, support requests, and rework."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The AI Output Contract
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              For each AI step in your system, define a minimal "output contract" that specifies what you expect and how you'll handle it. This becomes the specification that guides your gate implementation.
            </p>

            {/* Output Contract */}
            <div className="my-10 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">AI Output Contract Template</div>
              <div className="space-y-4 text-slate-300 font-mono text-sm">
                <div><span className="text-cyan-400">Expected types:</span> [doc, json, attachments, etc.]</div>
                <div><span className="text-cyan-400">Required fields:</span> [if structured, what must be present]</div>
                <div><span className="text-cyan-400">Normalization rules:</span> [formatting expectations]</div>
                <div><span className="text-cyan-400">Rendering expectations:</span> [how it will appear to users]</div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700 text-slate-400 text-sm">
                Implementation: Store raw output → Validate → Normalize → Render
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Trade-offs
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Normalization adds complexity, but it prevents "output drift" from breaking your UI. Without it, every model update or prompt change can introduce subtle formatting differences that accumulate into visible bugs.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Strict schemas can cause more failures initially—and that's actually good. It surfaces real reliability issues that would otherwise manifest as user-facing bugs. Better to fail at the gate with a clear error than to show broken output to users.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              You can keep gates minimal. A few checks and a few formatting rules go a long way. The goal isn't perfect output—it's consistently usable output. Start with the issues that cause the most support burden and expand from there.
            </p>

            {/* Takeaways Card */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Key Takeaways</div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Treat AI output as untrusted input—it's raw material, not finished product</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Validate shape (schema), normalize formatting, and render for humans</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Store raw output as a fallback and for debugging</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Start minimal—a few checks and formatting rules go a long way</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Building Reliable AI Features?</h3>
              <p className="text-slate-300 mb-6">I help teams design AI systems that work consistently in production. Quality gates are just one part of the reliability story.</p>
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
            <p className="text-slate-400 mb-4">Next in This Series</p>
            <Link href="/articles/debugging-ai-workflows">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                Read Next: Debugging AI Workflows Without Chaos
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

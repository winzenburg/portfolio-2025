import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * ARTICLE TEMPLATE
 *
 * Instructions:
 * 1. Copy this file and rename it to match your article slug (PascalCase)
 *    Example: AITechStack.tsx, DesignSystem4Weeks.tsx
 *
 * 2. Replace ARTICLE_TEMPLATE with your component name throughout
 *
 * 3. Update the metadata:
 *    - Date: "Month DD, YYYY"
 *    - Read time: "X min read"
 *    - Hero image path
 *
 * 4. Write your article content in the prose section
 *
 * 5. Update the "Next Article" section at the bottom
 *
 * 6. Add article preview to Articles.tsx (see ARTICLES_WORKFLOW.md)
 */

export default function ARTICLE_TEMPLATE() {
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
              src="/portfolio-2025/images/articles/your-article-hero.png"
              alt="Your Article Title"
              className="w-full h-auto"
            />
          </div>

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>Month DD, YYYY</span>
            <span>•</span>
            <span>X min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Article Title Goes Here
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Your compelling subtitle or opening hook that draws readers in and clearly states what they'll learn.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-6">
              Your article content starts here. Use clear, concise paragraphs that provide value. Write in a narrative style with flowing prose, not bullet-heavy outlines.
            </p>

            {/* Example: Pull Quote - Use to highlight key insights */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "A memorable quote or key insight from your narrative that deserves emphasis."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Major Section Heading
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Continue your article with well-structured sections. Keep the narrative flowing with transitions and context.
            </p>

            {/* Example: Statistics Cards - Use for key metrics and data */}
            <div className="my-10 grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 border border-red-900/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">$800K+</div>
                <div className="text-slate-400 text-sm">Problem metric</div>
              </div>
              <div className="bg-slate-900/50 border border-cyan-900/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-slate-400 text-sm">Success metric</div>
              </div>
              <div className="bg-slate-900/50 border border-blue-900/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4-6x</div>
                <div className="text-slate-400 text-sm">ROI or improvement</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Subsection Heading
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Use subsections to break down complex topics into digestible pieces.
            </p>

            {/* Example: Styled List in Card - Use for questions, features, or grouped items */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Key considerations:</div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>First important point with context</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Second important point with context</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Third important point with context</span>
                </li>
              </ul>
            </div>

            {/* Example: Success Metrics Card - Use for before/after or results */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Real Results</div>
                <div className="text-3xl font-bold text-white">30% → 90% Improvement</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-300">Before</div>
                  <div className="text-sm text-slate-400">Previous state</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-300">After</div>
                  <div className="text-sm text-slate-400">Improved state</div>
                </div>
              </div>
            </div>

            {/* Example: Comparison Card - Use for traditional vs new approach */}
            <div className="my-12 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4 uppercase text-sm tracking-wider">Old Way</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Problem or limitation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Another drawback</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">New Way</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">Benefit or advantage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">Another improvement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Example: Section Divider - Use between major sections */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Conclusion
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Wrap up your article with actionable insights and next steps for readers.
            </p>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Take Action?</h3>
              <p className="text-slate-300 mb-6">Clear call-to-action that relates to the article topic.</p>
              <Link href="/contact">
                <a className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                  Get in Touch →
                </a>
              </Link>
            </div>
          </div>

          {/* Next Article */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">What's Next?</p>
            <Link href="/articles/next-article-slug">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                Read Next: Next Article Title
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

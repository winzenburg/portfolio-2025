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
              Your article content starts here. Use clear, concise paragraphs that provide value.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Major Section Heading
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Continue your article with well-structured sections.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Subsection Heading
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Use subsections to break down complex topics into digestible pieces.
            </p>

            {/* Example: Highlighted Box */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-8">
              <h4 className="text-white font-semibold mb-3">Key Insight</h4>
              <p className="text-slate-300">Important information that deserves special attention.</p>
            </div>

            {/* Example: List */}
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Key points to remember</strong>:
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• First important point</li>
              <li>• Second important point</li>
              <li>• Third important point</li>
            </ul>

            {/* Example: Callout Box */}
            <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-6 my-8">
              <p className="text-cyan-300 font-semibold mb-2">The Impact:</p>
              <p className="text-white text-xl">Highlight impressive results or key takeaways here.</p>
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

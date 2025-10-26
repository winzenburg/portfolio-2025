import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function AITechStack() {
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
              src="/portfolio-2025/images/articles/ai-tech-stack-hero.png"
              alt="The AI-Powered Design Tech Stack"
              className="w-full h-auto"
            />
          </div>

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>February 3, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The AI-Powered Design Tech Stack: My Exact Workflow
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              After publishing how I built a design system in 4 weeks instead of 12 months, the most common question was: "What tools did you actually use?"
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-6">
              Here's my complete tech stack and exactly how each tool fits into the workflow.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Core Philosophy
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Three principles guide my tool selection:
            </p>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-white mb-4">1. Automate Repetitive Tasks</h3>
              <p className="text-slate-300 mb-6">If a task follows a pattern, AI should handle it. Code generation, documentation, testing, validation—all candidates for automation.</p>

              <h3 className="text-xl font-bold text-white mb-4">2. Preserve Strategic Control</h3>
              <p className="text-slate-300 mb-6">Humans make decisions. AI provides options. I own architecture, design strategy, and UX priorities. AI generates alternatives.</p>

              <h3 className="text-xl font-bold text-white mb-4">3. Maintain Quality Standards</h3>
              <p className="text-slate-300">AI-generated output must meet the same standards as hand-crafted work. No exceptions.</p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Design Phase Tools
            </h2>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Figma (Strategic Design Foundation)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Purpose</strong>: Core design work where strategic decisions happen
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">What it handles</strong>:
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• Component architecture decisions</li>
              <li>• Design system structure</li>
              <li>• Visual design quality control</li>
              <li>• Team collaboration</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Why it's irreplaceable</strong>: Strategic design decisions still require human judgment, business context, and creative thinking. No AI currently replaces this.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              V0 by Vercel (Design Generation)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Purpose</strong>: Rapid component design generation
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Input</strong>: Natural language component descriptions<br/>
              <strong className="text-white">Output</strong>: Production-ready component designs
            </p>

            <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-6 my-8">
              <p className="text-cyan-300 font-semibold mb-2">Example:</p>
              <p className="text-slate-300 mb-2"><strong className="text-white">Input</strong>: "Data table with sorting, filtering, pagination, and row selection"</p>
              <p className="text-slate-300 mb-2"><strong className="text-white">Output</strong>: Complete component with all states and variants</p>
              <p className="text-white mt-4"><strong>Time saved</strong>: Design that takes 4-6 hours manually generated in 5-10 minutes</p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Development Phase Tools
            </h2>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Cursor (The Game-Changer)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Purpose</strong>: AI-powered code generation and editing
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Why it's the most impactful tool</strong>:
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• Understands entire codebase context</li>
              <li>• Generates production-ready code</li>
              <li>• Refactors existing code intelligently</li>
              <li>• Explains complex code clearly</li>
            </ul>

            <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-6 my-8">
              <p className="text-cyan-300 font-semibold mb-2">Real output:</p>
              <p className="text-white">Traditional: 30-45 minutes per component</p>
              <p className="text-white">With Cursor: 3-5 minutes per component</p>
              <p className="text-white">Quality: Same or better (with review)</p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Example use case</strong>:
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              Prompt: "Create a Button component with primary, secondary, and destructive variants. Full TypeScript typing, accessibility support, and Storybook stories."
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Output: Complete component implementation, tests, and documentation<br/>
              Review time: 2-3 minutes | Refinement time: 1-2 minutes
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              GitHub Copilot (Code Completion)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Purpose</strong>: Intelligent code completion and boilerplate generation
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Best for</strong>:
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• Repetitive code patterns</li>
              <li>• Test case generation</li>
              <li>• Documentation comments</li>
              <li>• Type definitions</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">ROI</strong>: Reduces typing by 40-50%. More importantly, reduces context switching.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Testing & Quality Tools
            </h2>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Playwright (Automated Testing)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Purpose</strong>: End-to-end testing automation
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">AI enhancement</strong>: Test generation from component specifications
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• AI writes test cases</li>
              <li>• Covers happy paths and edge cases</li>
              <li>• Generates accessibility tests</li>
              <li>• Creates visual regression tests</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Impact</strong>: 100% test coverage achieved in days, not weeks.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Axe DevTools (Accessibility Validation)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Purpose</strong>: Automated accessibility compliance
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Integration</strong>: Runs as part of CI/CD pipeline
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• Catches WCAG violations before merge</li>
              <li>• Validates ARIA implementation</li>
              <li>• Tests keyboard navigation</li>
              <li>• Checks color contrast</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Result</strong>: 100% WCAG 2.2 AA compliance enforced automatically.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Documentation Tools
            </h2>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Storybook (Component Documentation)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Purpose</strong>: Interactive component documentation
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">AI generation</strong>: Auto-generated stories from components
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• Props documentation</li>
              <li>• Usage examples</li>
              <li>• Accessibility guidelines</li>
              <li>• Code snippets</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Time saved</strong>: Documentation as byproduct of development, not separate phase.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Mintlify (Technical Documentation)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Purpose</strong>: Design system documentation
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">AI features</strong>:
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• Natural language search</li>
              <li>• Auto-generated content</li>
              <li>• Interactive examples</li>
              <li>• Contextual help</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Adoption impact</strong>: Documentation that actually gets used.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Deployment & Infrastructure
            </h2>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Vercel (Hosting & Deployment)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Purpose</strong>: Automated deployment pipeline
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Features</strong>:
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• Automatic deployments on push</li>
              <li>• Preview deployments for PRs</li>
              <li>• Edge network delivery</li>
              <li>• Analytics built-in</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Speed</strong>: Changes live in &lt; 2 minutes from push.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              GitHub Actions (CI/CD Automation)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Purpose</strong>: Automated quality checks and deployment
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Automated steps</strong>:
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• Run tests on every PR</li>
              <li>• Check accessibility compliance</li>
              <li>• Validate design tokens</li>
              <li>• Deploy to Vercel</li>
              <li>• Update documentation</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Failure prevention</strong>: Catch issues before production, not after.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Complete Tech Stack
            </h2>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-8">
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Design Tools</h4>
                  <p className="text-slate-300">Figma, V0, Figma AI plugins</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Development Tools</h4>
                  <p className="text-slate-300">Cursor, GitHub Copilot, VS Code</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Testing Tools</h4>
                  <p className="text-slate-300">Playwright, Vitest, Axe DevTools, Chromatic</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Documentation Tools</h4>
                  <p className="text-slate-300">Storybook, Mintlify, MDX</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Infrastructure Tools</h4>
                  <p className="text-slate-300">Vercel, GitHub, GitHub Actions</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">AI Tools</h4>
                  <p className="text-slate-300">ChatGPT, Claude, Perplexity</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The ROI Analysis
            </h2>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Traditional Approach</h3>
                  <p className="text-slate-300 mb-2">Timeline: 12 months</p>
                  <p className="text-slate-300 mb-2">Cost: $800K-$1.2M (labor)</p>
                  <p className="text-slate-300">Tools: ~$500/month</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">AI-Augmented Approach</h3>
                  <p className="text-slate-300 mb-2">Timeline: 4 weeks</p>
                  <p className="text-slate-300 mb-2">Cost: Comparable labor</p>
                  <p className="text-slate-300">Tools: ~$112/month</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <h4 className="text-white font-semibold mb-3">Tool cost breakdown (~$112/month):</h4>
                <div className="grid grid-cols-2 gap-2 text-slate-300 text-sm">
                  <p>Cursor: $20/month</p>
                  <p>GitHub Copilot: $10/month</p>
                  <p>V0: $20/month</p>
                  <p>Vercel: $20/month</p>
                  <p>ChatGPT Plus: $20/month</p>
                  <p>Claude Pro: $20/month</p>
                </div>
                <p className="text-cyan-400 font-semibold mt-4">ROI: 625-890x on tools alone when accounting for time saved</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Implementation Roadmap
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-slate-900/50 border-l-4 border-cyan-500 p-4">
                <h4 className="text-white font-semibold mb-2">Day 1-2: Setup</h4>
                <p className="text-slate-300">Configure Cursor with codebase context, set up V0 integration, install Figma AI plugins, configure CI/CD pipeline</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-cyan-500 p-4">
                <h4 className="text-white font-semibold mb-2">Day 3-4: Component Generation</h4>
                <p className="text-slate-300">Generate first component with Cursor, review and refine process, document team workflow, train team on tools</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-cyan-500 p-4">
                <h4 className="text-white font-semibold mb-2">Day 5-6: Testing Integration</h4>
                <p className="text-slate-300">Set up Playwright, generate test cases with AI, configure accessibility checks, integrate with CI/CD</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-cyan-500 p-4">
                <h4 className="text-white font-semibold mb-2">Day 7-8: Documentation</h4>
                <p className="text-slate-300">Configure Storybook, generate component stories, set up Mintlify docs, create onboarding guides</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-cyan-500 p-4">
                <h4 className="text-white font-semibold mb-2">Day 9-10: Deployment</h4>
                <p className="text-slate-300">Deploy to Vercel, configure preview environments, set up analytics, launch to team</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Total onboarding</strong>: 2 weeks from zero to full productivity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What Actually Matters
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              The tools are enablers. The strategy makes them effective.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Strategic principles</strong>:
            </p>

            <ol className="text-slate-300 space-y-2 mb-6 list-decimal list-inside">
              <li>AI generates, humans decide → Maintain quality control</li>
              <li>Automate validation → Catch issues early</li>
              <li>Document automatically → Reduce manual work</li>
              <li>Deploy continuously → Fast iteration cycles</li>
              <li>Measure everything → Data-driven improvements</li>
            </ol>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Where humans stay essential</strong>:
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• Design system architecture</li>
              <li>• Component API design</li>
              <li>• Quality standards</li>
              <li>• Business priorities</li>
              <li>• Team collaboration</li>
              <li>• Stakeholder management</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Where AI provides advantage</strong>:
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• Code generation speed</li>
              <li>• Documentation completeness</li>
              <li>• Test coverage</li>
              <li>• Accessibility compliance</li>
              <li>• Consistency enforcement</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Common Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-2">Q: Can I use different tools?</h4>
                <p className="text-slate-300">Yes. The framework matters more than specific tools. Use what fits your stack.</p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-2">Q: What if my team doesn't know these tools?</h4>
                <p className="text-slate-300">2-week onboarding gets teams productive. ROI still compelling.</p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-2">Q: Do I need all these tools?</h4>
                <p className="text-slate-300">Start with Cursor and GitHub Copilot. Add others as needed.</p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-2">Q: What about costs at scale?</h4>
                <p className="text-slate-300">At 10-person team: ~$1,120/month in tools. Still 500x+ ROI vs. traditional approach.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Competitive Reality
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              Teams using AI-augmented workflows:
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• Build design systems in weeks</li>
              <li>• Maintain 100% test coverage</li>
              <li>• Ship with full accessibility compliance</li>
              <li>• Iterate based on real usage</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              Teams using traditional workflows:
            </p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li>• Spend months on design systems</li>
              <li>• Struggle with test coverage</li>
              <li>• Fix accessibility post-launch</li>
              <li>• Can't iterate quickly enough</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              The gap compounds over time.
            </p>

            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Implementing an AI-Augmented Design Workflow?</h3>
              <p className="text-slate-300 mb-6">I've helped multiple teams make this transition. Let's discuss your specific stack and requirements.</p>
              <Link href="/contact">
                <a className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                  Schedule a Discovery Call →
                </a>
              </Link>
            </div>
          </div>

          {/* Next Article */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">What's Next?</p>
            <Link href="/articles/design-system-4-weeks">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                Read Next: How I Built an Enterprise Design System in 4 Weeks
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

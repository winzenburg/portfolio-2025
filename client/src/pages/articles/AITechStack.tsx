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
              alt="The AI-Powered Design System Workflow"
              className="w-full h-auto"
            />
          </div>

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>October 19, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The AI-Powered Design System Workflow: My Exact Tech Stack
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              After my last article about building a $1M+ design system in 4 weeks, I received dozens of messages asking the same question: "What tools do you actually use?"
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-6">
              The answer isn't just a list of software. It's a carefully orchestrated workflow where each tool plays a specific role, and AI amplifies human expertise at every step.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              In this article, I'll share my complete tech stack, the exact workflow I use, and—most importantly—why each tool matters and when to use it.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Philosophy: AI as Co-Pilot, Not Replacement
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Before diving into tools, let's establish the framework. AI doesn't replace human expertise—it amplifies it. My workflow is built on three principles:
            </p>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-white mb-4">Principle 1: Automate the Repetitive</h3>
              <p className="text-slate-300 mb-6">If a task follows a pattern, AI should handle it. This includes code generation, documentation, testing, and validation.</p>

              <h3 className="text-xl font-bold text-white mb-4">Principle 2: Preserve Strategic Control</h3>
              <p className="text-slate-300 mb-6">Humans make decisions about architecture, design systems strategy, component prioritization, and user experience. AI provides options, humans choose direction.</p>

              <h3 className="text-xl font-bold text-white mb-4">Principle 3: Maintain Quality Standards</h3>
              <p className="text-slate-300">AI-generated output must meet the same standards as hand-crafted work. This means automated testing, accessibility validation, and continuous quality checks.</p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Design Phase: From Concept to Component Library
            </h2>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Figma: The Design Foundation
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">What it does:</strong> Core design tool for creating design systems, components, and prototypes.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Why it matters:</strong> Figma remains the industry standard for collaborative design. No AI tool can replace its flexibility and team collaboration features.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">How I use it:</strong> I create the initial design system structure, establish token hierarchies, and design key components. Figma is where strategic design decisions happen.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Cursor: The AI-Powered IDE
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">What it does:</strong> AI-native code editor built on VS Code with advanced AI code generation and refactoring capabilities.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Why it matters:</strong> This is the single most impactful tool in my workflow. Cursor understands context across your entire codebase and generates production-ready code.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Example:</strong> I type "Create a Button component with variants for primary, secondary, and ghost, sizes sm, md, lg, and states for default, hover, active, disabled. Include proper ARIA labels and keyboard navigation." Cursor generates a complete, production-ready component in seconds.
            </p>

            <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-6 my-8">
              <p className="text-cyan-300 font-semibold mb-2">Time saved:</p>
              <p className="text-white text-2xl">30-45 minutes per component → 3-5 minutes</p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Complete Tech Stack
            </h2>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="pb-3 text-white font-semibold">Category</th>
                    <th className="pb-3 text-white font-semibold">Tool</th>
                    <th className="pb-3 text-white font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Design</td>
                    <td className="py-3">Figma</td>
                    <td className="py-3">Core design tool</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Design</td>
                    <td className="py-3">Figma Automator</td>
                    <td className="py-3">Batch operations</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Design</td>
                    <td className="py-3">Figma Genius</td>
                    <td className="py-3">AI design suggestions</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Development</td>
                    <td className="py-3">Cursor</td>
                    <td className="py-3">AI-powered IDE</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Development</td>
                    <td className="py-3">GitHub Copilot</td>
                    <td className="py-3">Code completion</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Development</td>
                    <td className="py-3">V0 by Vercel</td>
                    <td className="py-3">Component generation</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Development</td>
                    <td className="py-3">Claude 3.5</td>
                    <td className="py-3">Architecture decisions</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Testing</td>
                    <td className="py-3">Playwright</td>
                    <td className="py-3">E2E testing</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Testing</td>
                    <td className="py-3">Axe DevTools</td>
                    <td className="py-3">Accessibility</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Testing</td>
                    <td className="py-3">Chromatic</td>
                    <td className="py-3">Visual regression</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Documentation</td>
                    <td className="py-3">Mintlify</td>
                    <td className="py-3">AI-powered docs</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Documentation</td>
                    <td className="py-3">Storybook</td>
                    <td className="py-3">Component showcase</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Deployment</td>
                    <td className="py-3">Vercel</td>
                    <td className="py-3">Hosting & previews</td>
                  </tr>
                  <tr>
                    <td className="py-3">Automation</td>
                    <td className="py-3">GitHub Actions</td>
                    <td className="py-3">CI/CD workflows</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The ROI: Time and Cost Savings
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Let's quantify the impact of this tech stack:
            </p>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Traditional Approach</h3>
                  <p className="text-slate-300 mb-2">Timeline: 12 months</p>
                  <p className="text-slate-300 mb-2">Cost: $800K-$1.2M</p>
                  <p className="text-red-400">Risk: High</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">AI-Augmented Approach</h3>
                  <p className="text-slate-300 mb-2">Timeline: 4 weeks</p>
                  <p className="text-slate-300 mb-2">Tool Cost: ~$112/month</p>
                  <p className="text-cyan-400">ROI: 625-890x</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Getting Started: Your First Week
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Want to try this workflow? Here's how to start:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-slate-900/50 border-l-4 border-cyan-500 p-4">
                <h4 className="text-white font-semibold mb-2">Day 1: Set Up Tools</h4>
                <p className="text-slate-300">Install Cursor, enable GitHub Copilot, and set up a test project.</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-cyan-500 p-4">
                <h4 className="text-white font-semibold mb-2">Day 2: Generate Your First Component</h4>
                <p className="text-slate-300">Use Cursor to generate a simple button component. Review and refine the output.</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-cyan-500 p-4">
                <h4 className="text-white font-semibold mb-2">Day 3: Add Testing</h4>
                <p className="text-slate-300">Generate tests with Cursor and run them with Playwright.</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-cyan-500 p-4">
                <h4 className="text-white font-semibold mb-2">Day 4: Document</h4>
                <p className="text-slate-300">Use Mintlify to generate documentation from your code.</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-cyan-500 p-4">
                <h4 className="text-white font-semibold mb-2">Day 5: Deploy</h4>
                <p className="text-slate-300">Deploy to Vercel and share with your team.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Ready to Build Your AI-Augmented Workflow?
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              I help design teams and product leaders implement this exact workflow. Whether you're building your first design system or scaling an existing one, I can help you set up the right tools, train your team on AI-augmented workflows, build your design system four to six times faster, and achieve one hundred percent accessibility compliance.
            </p>

            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Accelerate Your Workflow</h3>
              <p className="text-slate-300 mb-6">Schedule a discovery call to discuss how I can help implement this tech stack for your team.</p>
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
                Read Previous: How I Built a $1M+ Design System in 4 Weeks
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}


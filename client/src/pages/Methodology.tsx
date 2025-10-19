import ResponsiveNav from "@/components/ResponsiveNav";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Methodology() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <ResponsiveNav currentPage="methodology" />

      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              The Force Multiplier Methodology
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              How I deliver in weeks what takes teams a year: a rigorous, repeatable 5-phase workflow combining 25 years of UX expertise with advanced AI orchestration.
            </p>
            <div className="text-lg text-muted-foreground">
              My 84x acceleration isn't magic—it's a battle-tested system that enables me to do the work of a 7-person team while maintaining enterprise-grade quality.
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              The Philosophy: Expert-Guided AI Orchestration
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                The fundamental flaw in how most people use AI is that they treat it as an autonomous creator. They ask it to "design a webpage" and are disappointed with generic, soulless results.
              </p>
              <p>
                My methodology is based on a different philosophy: <span className="text-foreground font-semibold">AI as a force multiplier, guided by an expert practitioner.</span> I don't ask the AI to think for me. I do the strategic thinking, and I use AI to execute at a scale and speed that is humanly impossible.
              </p>
              <p>
                I am the architect and the conductor; AI is my orchestra. This workflow is a system of prompts, quality gates, and iterative refinement, where I break down massive projects into precise, well-defined tasks that AI can perform flawlessly under my supervision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Phase Workflow */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
              The 5-Phase Workflow
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-16">
            {/* Phase 1 */}
            <div className="border-l-4 border-accent-cyan pl-8">
              <div className="text-sm font-semibold text-accent-cyan mb-2 uppercase tracking-wider">
                Phase 1 · 1-2 Days
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                AI-Powered Research & Strategy
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Achieve deep understanding of the problem space and define a data-driven strategy in hours, not months.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-2">1. Data Synthesis</div>
                  <p className="text-muted-foreground">
                    Feed AI hundreds of pages of raw data: user interviews, surveys, support tickets, market research. AI synthesizes information, identifying key themes, pain points, and user needs. What takes a UX researcher weeks of manual analysis, I do in an afternoon.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2">2. Heuristic Analysis</div>
                  <p className="text-muted-foreground">
                    Use AI to conduct rapid, comprehensive heuristic analysis of existing products, mapping every usability issue to Nielsen's 10 Heuristics. This provides a structured foundation for redesign.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2">3. Persona & Journey Map Generation</div>
                  <p className="text-muted-foreground">
                    Based on synthesized data, AI generates detailed user personas and journey maps. These aren't generic templates—they're data-driven artifacts that accurately reflect the user base.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <div className="text-sm font-semibold mb-1">Output</div>
                <div className="text-sm text-muted-foreground">
                  Comprehensive strategy document, data-driven personas, and prioritized list of high-impact opportunities
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="border-l-4 border-accent-purple pl-8">
              <div className="text-sm font-semibold text-accent-purple mb-2 uppercase tracking-wider">
                Phase 2 · 3-5 Days
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                AI-Generated Design & Prototyping
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Move from strategy to high-fidelity, interactive prototype without traditional, slow wireframing process.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-2">1. Information Architecture Modeling</div>
                  <p className="text-muted-foreground">
                    Use AI to generate multiple information architecture and navigation models. Explore a dozen different approaches in the time it takes to create one manually.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2">2. Component & Page Generation</div>
                  <p className="text-muted-foreground">
                    Provide AI with design tokens and high-level structure, and it generates code for entire pages and components in React or Angular. This is AI writing production-quality code based on my architectural guidance.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2">3. Interactive Prototyping</div>
                  <p className="text-muted-foreground">
                    Because AI generates real code, the output is an interactive, high-fidelity prototype from day one. No separate prototyping phase. We go straight from concept to testable product.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <div className="text-sm font-semibold mb-1">Output</div>
                <div className="text-sm text-muted-foreground">
                  Fully interactive, high-fidelity prototype built with production-ready code
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="border-l-4 border-accent-green pl-8">
              <div className="text-sm font-semibold text-accent-green mb-2 uppercase tracking-wider">
                Phase 3 · 5-10 Days
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                AI-Assisted Development & Refinement
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Build out the full application or design system with enterprise-grade quality and feature completeness.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-2">1. Scaled Component Production</div>
                  <p className="text-muted-foreground">
                    Use AI to build out full library of components, from simplest atoms to most complex organisms. For the SaaS Design System, this meant creating 48 components and 63,813 lines of code in days.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2">2. Complex Feature Implementation</div>
                  <p className="text-muted-foreground">
                    Guide AI to implement complex business logic, state management, and API integrations. My role is to provide architectural patterns and review code for quality and scalability.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2">3. Iterative Refinement</div>
                  <p className="text-muted-foreground">
                    Use AI to rapidly refactor code, implement new features, and respond to feedback, allowing for an incredibly tight iteration loop.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <div className="text-sm font-semibold mb-1">Output</div>
                <div className="text-sm text-muted-foreground">
                  Feature-complete application or design system with clean, scalable, production-ready codebase
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="border-l-4 border-primary pl-8">
              <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                Phase 4 · 2-3 Days
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                AI-Driven Testing & QA
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Achieve enterprise-grade quality and test coverage without a dedicated QA team.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-2">1. Automated Test Generation</div>
                  <p className="text-muted-foreground">
                    Use AI to write comprehensive test suites including unit tests and full E2E tests with Playwright. For the SaaS Design System, this resulted in 9,566 lines of test code and 77% coverage for complex components.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2">2. Accessibility Auditing</div>
                  <p className="text-muted-foreground">
                    Use AI to run automated accessibility audits with axe-core, identifying and fixing hundreds of potential violations. This is how I guarantee 100% WCAG 2.2 AA compliance.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2">3. Visual Regression Testing</div>
                  <p className="text-muted-foreground">
                    Set up automated visual regression tests that compare screenshots of every component to ensure pixel-perfect consistency and catch unintended visual changes.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <div className="text-sm font-semibold mb-1">Output</div>
                <div className="text-sm text-muted-foreground">
                  Robust, well-tested product with high test coverage and full accessibility compliance
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="border-l-4 border-muted-foreground pl-8">
              <div className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                Phase 5 · 1-2 Days
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                AI-Generated Documentation
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Produce comprehensive, world-class documentation that makes the system easy to use and maintain.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-2">1. Storybook & MDX Generation</div>
                  <p className="text-muted-foreground">
                    Use AI to generate detailed Storybook stories for every component, including controls to test every prop and state. For the SaaS Design System, this resulted in a 14-section documentation standard for every component.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2">2. Context & Workflow Documentation</div>
                  <p className="text-muted-foreground">
                    Have AI generate detailed markdown files that explain architecture, design decisions, and development workflows. This is how I created over 40 context documents for the SaaS Design System.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2">3. Code Commenting</div>
                  <p className="text-muted-foreground">
                    Use AI to ensure entire codebase is well-commented, making it easy for any developer to understand and contribute.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <div className="text-sm font-semibold mb-1">Output</div>
                <div className="text-sm text-muted-foreground">
                  Fully documented, enterprise-grade system ready for immediate adoption
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              The Result: Unprecedented Velocity and Quality
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              This 5-phase methodology is the engine behind my ability to deliver projects at 84x velocity. It's a repeatable, scalable, and battle-tested system that combines the best of human expertise with the raw power of artificial intelligence.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold mb-2">84x</div>
                <div className="text-sm text-muted-foreground">Faster than traditional teams</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$3M+</div>
                <div className="text-sm text-muted-foreground">Value created in past year</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Enterprise-grade quality</div>
              </div>
            </div>
            <Link href="/contact">
              <Button size="lg" className="text-base">
                Let's Discuss How This Can Accelerate Your Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>© 2025 Ryan Winzenburg. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/rwinzenburg/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/winzenburg" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="mailto:ryanwinzenburg@gmail.com" className="hover:text-foreground transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


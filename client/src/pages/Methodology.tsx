import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function Methodology() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container py-6">
          <nav className="flex items-center justify-between">
            <Link href="/">
              <span className="text-2xl font-bold">Ryan Winzenburg</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/work">
                <span className="text-sm font-medium hover:text-primary transition-colors">Work</span>
              </Link>
              <Link href="/methodology">
                <span className="text-sm font-medium text-primary">Methodology</span>
              </Link>
              <Link href="/about">
                <span className="text-sm font-medium hover:text-primary transition-colors">About</span>
              </Link>
              <Link href="/contact">
                <Button>Contact</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          How I Deliver 84x Faster
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          My 84x acceleration is not magic; it is the result of a rigorous, repeatable methodology that combines 25 years of deep UX expertise with AI-augmented workflows.
        </p>
      </section>

      {/* Philosophy */}
      <section className="container pb-24">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Philosophy: Expert-Guided AI Orchestration</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              The fundamental flaw in how most people use AI is that they treat it as an autonomous creator. They ask it to "design a webpage" and are disappointed with the generic, soulless results. This is the wrong approach.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My methodology is based on a different philosophy: <strong>AI as a force multiplier, guided by an expert practitioner.</strong> I don't ask the AI to think for me. I do the strategic thinking, and I use the AI to execute at a scale and speed that is humanly impossible. I am the architect and the conductor; the AI is my orchestra.
            </p>
            <p className="text-lg text-muted-foreground">
              This workflow is a system of prompts, quality gates, and iterative refinement, where I break down a massive project into a series of precise, well-defined tasks that an AI can perform flawlessly under my supervision.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Phase Workflow */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">The 5-Phase Workflow</h2>
          
          <div className="space-y-12 max-w-5xl">
            {/* Phase 1 */}
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">AI-Powered Research & Strategy</h3>
                  <div className="text-sm text-muted-foreground mb-4">Timeline: 1-2 Days</div>
                  <p className="text-muted-foreground mb-6">
                    Achieve deep understanding of the problem space and define a data-driven strategy in hours, not months.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold mb-1">Data Synthesis</div>
                      <p className="text-sm text-muted-foreground">
                        Feed AI hundreds of pages of raw data: user interviews, surveys, support tickets, market research. AI synthesizes information, identifying key themes and pain points in hours instead of weeks.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Heuristic Analysis</div>
                      <p className="text-sm text-muted-foreground">
                        Use AI to conduct rapid, comprehensive heuristic analysis of existing products, mapping every usability issue to Nielsen's 10 Heuristics.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Persona & Journey Maps</div>
                      <p className="text-sm text-muted-foreground">
                        Generate data-driven personas and journey maps that accurately reflect the user base, not generic templates.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-1">Output</div>
                    <div className="text-sm text-muted-foreground">
                      Comprehensive strategy document, data-driven personas, prioritized list of high-impact opportunities
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 2 */}
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">AI-Generated Design & Prototyping</h3>
                  <div className="text-sm text-muted-foreground mb-4">Timeline: 3-5 Days</div>
                  <p className="text-muted-foreground mb-6">
                    Move from strategy to high-fidelity, interactive prototype without the traditional, slow wireframing process.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold mb-1">Information Architecture Modeling</div>
                      <p className="text-sm text-muted-foreground">
                        Generate multiple IA and navigation models. Explore a dozen approaches in the time it takes to create one manually.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Component & Page Generation</div>
                      <p className="text-sm text-muted-foreground">
                        Provide AI with design tokens and high-level structure; it generates production-quality code for entire pages and components.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Interactive Prototyping</div>
                      <p className="text-sm text-muted-foreground">
                        Because AI generates real code, output is an interactive, high-fidelity prototype from day one. No separate prototyping phase.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-1">Output</div>
                    <div className="text-sm text-muted-foreground">
                      Fully interactive, high-fidelity prototype built with production-ready code
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 3 */}
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">AI-Assisted Development & Refinement</h3>
                  <div className="text-sm text-muted-foreground mb-4">Timeline: 5-10 Days</div>
                  <p className="text-muted-foreground mb-6">
                    Build out full application or design system with enterprise-grade quality and feature completeness.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold mb-1">Scaled Component Production</div>
                      <p className="text-sm text-muted-foreground">
                        Build full library of components from simplest atoms to most complex organisms. For the SaaS Design System: 48 components, 63,813 lines of code in days.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Complex Feature Implementation</div>
                      <p className="text-sm text-muted-foreground">
                        Guide AI to implement complex business logic, state management, and API integrations. Provide architectural patterns and review for quality.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Iterative Refinement</div>
                      <p className="text-sm text-muted-foreground">
                        Use AI to rapidly refactor code, implement new features, and respond to feedback with incredibly tight iteration loops.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-1">Output</div>
                    <div className="text-sm text-muted-foreground">
                      Feature-complete application or design system with clean, scalable, production-ready codebase
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 4 */}
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">AI-Driven Testing & QA</h3>
                  <div className="text-sm text-muted-foreground mb-4">Timeline: 2-3 Days</div>
                  <p className="text-muted-foreground mb-6">
                    Achieve enterprise-grade quality and test coverage without a dedicated QA team.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold mb-1">Automated Test Generation</div>
                      <p className="text-sm text-muted-foreground">
                        Use AI to write comprehensive test suites: unit tests for components and full E2E tests with Playwright. SaaS Design System: 9,566 lines of test code, 77% coverage.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Accessibility Auditing</div>
                      <p className="text-sm text-muted-foreground">
                        Run automated accessibility audits with axe-core, identifying and fixing hundreds of violations. Guarantee 100% WCAG 2.2 AA compliance.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Visual Regression Testing</div>
                      <p className="text-sm text-muted-foreground">
                        Set up automated visual regression tests comparing screenshots of every component to ensure pixel-perfect consistency.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-1">Output</div>
                    <div className="text-sm text-muted-foreground">
                      Robust, well-tested product with high test coverage and full accessibility compliance
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 5 */}
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">AI-Generated Documentation</h3>
                  <div className="text-sm text-muted-foreground mb-4">Timeline: 1-2 Days</div>
                  <p className="text-muted-foreground mb-6">
                    Produce comprehensive, world-class documentation that makes the system easy to use and maintain.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold mb-1">Storybook & MDX Generation</div>
                      <p className="text-sm text-muted-foreground">
                        Generate detailed Storybook stories for every component with controls to test every prop and state. 14-section documentation standard per component.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Context & Workflow Documentation</div>
                      <p className="text-sm text-muted-foreground">
                        Generate detailed markdown files explaining architecture, design decisions, and development workflows. 40+ context documents for SaaS Design System.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Code Commenting</div>
                      <p className="text-sm text-muted-foreground">
                        Ensure entire codebase is well-commented, making it easy for any developer to understand and contribute.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-1">Output</div>
                    <div className="text-sm text-muted-foreground">
                      Fully documented, enterprise-grade system ready for immediate adoption
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="container py-24">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">The AI Tool Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Manus.im</h3>
              <p className="text-sm text-muted-foreground">
                Multi-agent orchestration for complex workflows, research synthesis, and parallel task execution.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Claude Code</h3>
              <p className="text-sm text-muted-foreground">
                Production-quality code generation with deep context understanding and architectural reasoning.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Cursor</h3>
              <p className="text-sm text-muted-foreground">
                AI-native code editor for rapid iteration, refactoring, and inline code generation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Result: Unprecedented Velocity and Quality
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            This 5-phase methodology is the engine behind my ability to deliver projects at 84x velocity. It is a repeatable, scalable, and battle-tested system that combines the best of human expertise with the raw power of artificial intelligence.
          </p>
          <Link href="/work">
            <Button size="lg" variant="secondary">
              See It In Action →
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Ryan Winzenburg. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/winzenburg" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


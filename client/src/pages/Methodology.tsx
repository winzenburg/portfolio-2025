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
              <Link href="/services">
                <span className="text-sm font-medium hover:text-primary transition-colors">Services</span>
              </Link>
              <Link href="/articles">
                <span className="text-sm font-medium hover:text-primary transition-colors">Articles</span>
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
          How I Deliver 4-6x Faster
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A proven, repeatable methodology that combines 25 years of Fortune 50 expertise with AI-augmented workflows to deliver enterprise quality at startup speed.
        </p>
      </section>

      {/* Philosophy */}
      <section className="container pb-24">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Philosophy: Expert-Guided AI Orchestration</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Most people use AI wrong. They ask it to "design a webpage" and get generic, soulless results. That's not how I work.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My methodology treats <strong>AI as a force multiplier, guided by expert judgment.</strong> I do the strategic thinking—what to build, why it matters, how it should work. AI handles the execution—writing code, generating documentation, running tests. The result? Enterprise quality delivered at a speed that was previously impossible.
            </p>
            <p className="text-lg text-muted-foreground">
              This isn't about replacing human expertise. It's about amplifying it. I'm the architect and conductor; AI is my orchestra.
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
                    Deep understanding of the problem space and data-driven strategy in days, not months.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="font-semibold mb-2">What I Do</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Synthesize user research, surveys, support tickets</li>
                        <li>• Conduct heuristic analysis of existing products</li>
                        <li>• Create data-driven personas and journey maps</li>
                        <li>• Identify high-impact opportunities</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Business Value</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>💰 <strong>For VCs:</strong> Validate assumptions fast, reduce risk</li>
                        <li>🚀 <strong>For PMs:</strong> Data-driven roadmap in days</li>
                        <li>🎨 <strong>For Design:</strong> Research at scale without hiring</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-1">Deliverable</div>
                    <div className="text-sm text-muted-foreground">
                      Strategy document, personas, prioritized opportunities, executive summary
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
                  <h3 className="text-2xl font-bold mb-3">Design & Prototyping</h3>
                  <div className="text-sm text-muted-foreground mb-4">Timeline: 3-5 Days</div>
                  <p className="text-muted-foreground mb-6">
                    High-fidelity, interactive prototypes without the traditional slow wireframing process.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="font-semibold mb-2">What I Do</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Model information architecture and navigation</li>
                        <li>• Generate production-quality components</li>
                        <li>• Build interactive, high-fidelity prototypes</li>
                        <li>• Iterate based on stakeholder feedback</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Business Value</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>💰 <strong>For VCs:</strong> Validate product-market fit fast</li>
                        <li>🚀 <strong>For PMs:</strong> Test with users in week 1</li>
                        <li>🎨 <strong>For Design:</strong> Skip low-fi, go straight to hi-fi</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-1">Deliverable</div>
                    <div className="text-sm text-muted-foreground">
                      Fully interactive prototype built with production-ready code
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
                  <h3 className="text-2xl font-bold mb-3">Production Development</h3>
                  <div className="text-sm text-muted-foreground mb-4">Timeline: 1-2 Weeks</div>
                  <p className="text-muted-foreground mb-6">
                    Production-ready code with enterprise quality: type-safe, accessible, tested, documented.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="font-semibold mb-2">What I Do</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Write production code (React, TypeScript, Angular)</li>
                        <li>• Implement design tokens and theming</li>
                        <li>• Build reusable component library</li>
                        <li>• Ensure 100% WCAG AA compliance</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Business Value</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>💰 <strong>For VCs:</strong> No prototype-to-production gap</li>
                        <li>🚀 <strong>For PMs:</strong> Ship to production immediately</li>
                        <li>⚙️ <strong>For Engineering:</strong> Zero technical debt</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-1">Deliverable</div>
                    <div className="text-sm text-muted-foreground">
                      Production-ready codebase, component library, design tokens
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
                  <h3 className="text-2xl font-bold mb-3">Testing & Quality Assurance</h3>
                  <div className="text-sm text-muted-foreground mb-4">Timeline: 2-3 Days</div>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive automated testing ensures enterprise quality without manual QA overhead.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="font-semibold mb-2">What I Do</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Write E2E tests with Playwright</li>
                        <li>• Automated accessibility audits (axe-core)</li>
                        <li>• Visual regression testing</li>
                        <li>• Performance optimization</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Business Value</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>💰 <strong>For VCs:</strong> Reduce post-launch bugs</li>
                        <li>🚀 <strong>For PMs:</strong> Ship with confidence</li>
                        <li>⚙️ <strong>For Engineering:</strong> Automated QA pipeline</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-1">Deliverable</div>
                    <div className="text-sm text-muted-foreground">
                      Comprehensive test suite, accessibility audit, performance report
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
                  <h3 className="text-2xl font-bold mb-3">Documentation & Handoff</h3>
                  <div className="text-sm text-muted-foreground mb-4">Timeline: 1-2 Days</div>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive documentation ensures your team can maintain and extend the system long after I'm gone.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="font-semibold mb-2">What I Do</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Generate component documentation (Storybook)</li>
                        <li>• Write implementation guides</li>
                        <li>• Create governance playbooks</li>
                        <li>• Train your team on AI workflows</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Business Value</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>💰 <strong>For VCs:</strong> Reduce future maintenance costs</li>
                        <li>🚀 <strong>For PMs:</strong> Team is self-sufficient</li>
                        <li>🎨 <strong>For Design:</strong> Your team learns AI workflows</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-1">Deliverable</div>
                    <div className="text-sm text-muted-foreground">
                      Complete documentation, governance playbook, team training
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="container py-24">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">Why This Methodology Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Proven at Scale</h3>
              <p className="text-muted-foreground">
                25 years at Fortune 50 companies means I've seen every failure mode. This methodology is battle-tested at enterprise scale.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Repeatable Process</h3>
              <p className="text-muted-foreground">
                Not a one-off miracle. I've delivered $3M+ in value across 3 recent projects using this exact methodology.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Your Team Gets Better</h3>
              <p className="text-muted-foreground">
                I don't just deliver a project—I train your team on AI workflows. The velocity increase is permanent.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how this methodology can help you ship 4-6x faster without adding headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Schedule a Discovery Call
                </Button>
              </Link>
              <Link href="/work">
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function Work() {
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
                <span className="text-sm font-medium text-primary">Work</span>
              </Link>
              <Link href="/methodology">
                <span className="text-sm font-medium hover:text-primary transition-colors">Methodology</span>
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
          Selected Work
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A showcase of enterprise-grade projects delivered at unprecedented speed through AI-augmented workflows.
        </p>
      </section>

      {/* AI-Augmented Projects */}
      <section className="container pb-24">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">AI-Augmented Projects</h2>
          <p className="text-muted-foreground">
            Recent projects demonstrating 60-84x acceleration over traditional development
          </p>
        </div>

        <div className="space-y-12">
          {/* Project 1: SaaS Design System */}
          <Card className="p-8 md:p-12 hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div>
                <div className="text-sm font-medium text-primary mb-3">HERO PROJECT · 2024</div>
                <h3 className="text-3xl font-bold mb-4">Enterprise SaaS Design System</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Built a complete, production-ready design system with an industry-first automated governance engine in just 4 weeks—a task that traditionally requires a 7-person team working for over a year.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                    <div className="font-semibold">4 weeks vs. 12+ months</div>
                    <div className="text-sm text-muted-foreground">84x faster</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Cost Savings</div>
                    <div className="font-semibold">~$1.03M</div>
                    <div className="text-sm text-muted-foreground">7-person team eliminated</div>
                  </div>
                </div>
                <Link href="/work/saas-design-system">
                  <Button>View Full Case Study →</Button>
                </Link>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">Key Deliverables</div>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• 63,813 lines of code</li>
                    <li>• 48 production-ready components</li>
                    <li>• 100% WCAG 2.2 AA compliance</li>
                    <li>• Industry-first 306-line validation script</li>
                    <li>• 1,166+ token usages validated</li>
                    <li>• 17 E2E tests + 6 unit tests</li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">React</span>
                    <span className="text-xs px-2 py-1 bg-muted rounded">TypeScript</span>
                    <span className="text-xs px-2 py-1 bg-muted rounded">Storybook</span>
                    <span className="text-xs px-2 py-1 bg-muted rounded">Playwright</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Project 2: ISC Portal */}
          <Card className="p-8 md:p-12 hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div>
                <div className="text-sm font-medium text-primary mb-3">HERO PROJECT · 2024</div>
                <h3 className="text-3xl font-bold mb-4">ISC Portal Usability Prototype</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Delivered a comprehensive, interactive prototype addressing 81% of critical usability issues in the Comcast Business ISC Portal in just 4 days, targeting a +9 point pNPS swing.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                    <div className="font-semibold">4 days vs. 12+ months</div>
                    <div className="text-sm text-muted-foreground">91x faster</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Cost Savings</div>
                    <div className="font-semibold">~$1.05M</div>
                    <div className="text-sm text-muted-foreground">Immediate validation</div>
                  </div>
                </div>
                <Link href="/work/isc-portal">
                  <Button>View Full Case Study →</Button>
                </Link>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">Key Deliverables</div>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• 13 functional pages, 38 components</li>
                    <li>• 0 TypeScript errors, 55 commits</li>
                    <li>• 100% Material Design 3 compliance</li>
                    <li>• Comprehensive help system (65+ terms)</li>
                    <li>• pNPS target: -4 → +5</li>
                    <li>• Estimated 85-90% accessibility score</li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">Angular 13</span>
                    <span className="text-xs px-2 py-1 bg-muted rounded">TypeScript</span>
                    <span className="text-xs px-2 py-1 bg-muted rounded">Material Design 3</span>
                    <span className="text-xs px-2 py-1 bg-muted rounded">Playwright</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Project 3: Comcast Design System */}
          <Card className="p-8 md:p-12 hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-3">SUPPORTING PROJECT · 2024</div>
                <h3 className="text-3xl font-bold mb-4">Comcast Business Design System</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Created a production-ready design system for Comcast Business in 4 weeks, enabling product teams to build higher-quality prototypes at significantly faster pace.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                    <div className="font-semibold">4 weeks vs. 12+ months</div>
                    <div className="text-sm text-muted-foreground">13x faster</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Cost Savings</div>
                    <div className="font-semibold">~$1.03M</div>
                    <div className="text-sm text-muted-foreground">In production use</div>
                  </div>
                </div>
                <Link href="/work/comcast-design-system">
                  <Button>View Full Case Study →</Button>
                </Link>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">Key Deliverables</div>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Production use at Fortune 100</li>
                    <li>• React + TypeScript (81.9%)</li>
                    <li>• Figma-to-code integration</li>
                    <li>• WCAG 2.1 AA compliance</li>
                    <li>• Storybook documentation</li>
                    <li>• 103 commits showing sustained dev</li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">React</span>
                    <span className="text-xs px-2 py-1 bg-muted rounded">TypeScript</span>
                    <span className="text-xs px-2 py-1 bg-muted rounded">Tailwind</span>
                    <span className="text-xs px-2 py-1 bg-muted rounded">Storybook</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Traditional UX Projects */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Traditional UX Projects</h2>
            <p className="text-muted-foreground">
              Foundational work demonstrating 25 years of UX expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BuildOut */}
            <Card className="p-8">
              <div className="text-sm font-medium text-muted-foreground mb-3">STRATEGIC UX · 2018-2020</div>
              <h3 className="text-2xl font-bold mb-4">BuildOut</h3>
              <p className="text-muted-foreground mb-6">
                Established a user-centered design practice from the ground up for a high-growth B2B SaaS platform, leading to successful acquisition.
              </p>
              <div className="mb-6">
                <div className="text-sm font-medium mb-2">Key Contributions</div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Deep user research & persona development</li>
                  <li>• Information architecture redesign</li>
                  <li>• First design system creation</li>
                  <li>• Core product redesign</li>
                </ul>
              </div>
              <Link href="/work/buildout">
                <Button variant="outline">View Case Study →</Button>
              </Link>
            </Card>

            {/* CVS Health */}
            <Card className="p-8">
              <div className="text-sm font-medium text-muted-foreground mb-3">ENTERPRISE UX · 2016-2018</div>
              <h3 className="text-2xl font-bold mb-4">CVS Health/Aetna</h3>
              <p className="text-muted-foreground mb-6">
                Led UX initiatives for multiple enterprise-level healthcare applications, navigating complex regulatory requirements and massive organizational scale.
              </p>
              <div className="mb-6">
                <div className="text-sm font-medium mb-2">Key Contributions</div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Healthcare domain expertise</li>
                  <li>• Stakeholder management at scale</li>
                  <li>• HIPAA-compliant design</li>
                  <li>• Systems thinking & integration</li>
                </ul>
              </div>
              <Link href="/work/cvs-health">
                <Button variant="outline">View Case Study →</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Interested in Working Together?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm available for Principal/VP Product Design roles where I can deliver massive business value.
        </p>
        <Link href="/contact">
          <Button size="lg">Get in Touch</Button>
        </Link>
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


import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Work() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-xl font-semibold tracking-tight hover:text-primary transition-colors">
                Ryan Winzenburg
              </a>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/work">
                <a className="text-sm text-foreground font-medium transition-colors">
                  Work
                </a>
              </Link>
              <Link href="/methodology">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Methodology
                </a>
              </Link>
              <Link href="/about">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <Button variant="default" size="sm">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Selected Work
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Three enterprise-grade projects delivered in 10 weeks, creating over $3M in value through advanced workflows and 25 years of integrated expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Hero Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              84x faster delivery · $3M+ value created · 10 weeks total
            </p>
          </div>

          <div className="grid gap-12 max-w-6xl">
            {/* Project 1: SaaS Design System */}
            <div className="bg-card border border-accent-cyan/30 rounded-lg overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img src={`${import.meta.env.BASE_URL}project-saas-design-system.png`} alt="Enterprise SaaS Design System" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-[2fr,1fr] gap-8">
                  <div>
                    <div className="text-xs font-semibold text-accent-cyan mb-3 uppercase tracking-wider">
                      Hero Project · 2024
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                      Enterprise SaaS Design System
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Built a complete, production-ready design system with an industry-first automated governance engine in just 4 weeks—a task that traditionally requires a 7-person team working for over a year.
                    </p>
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                        <div className="text-2xl font-bold mb-1">4 weeks</div>
                        <div className="text-xs text-muted-foreground">vs. 12+ months</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Value Created</div>
                        <div className="text-2xl font-bold mb-1">~$1.03M</div>
                        <div className="text-xs text-muted-foreground">7-person team eliminated</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Speed</div>
                        <div className="text-2xl font-bold mb-1">84x</div>
                        <div className="text-xs text-muted-foreground">faster delivery</div>
                      </div>
                    </div>
                    <Link href="/case-study/saas-design-system">
                      <Button variant="outline" className="border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10">
                        View Full Case Study →
                      </Button>
                    </Link>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-semibold mb-3">Key Deliverables</div>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• 63,813 lines of code</li>
                        <li>• 48 production-ready components</li>
                        <li>• 100% WCAG 2.2 AA compliance</li>
                        <li>• Industry-first validation script</li>
                        <li>• 1,166+ token usages validated</li>
                        <li>• 17 E2E tests + 6 unit tests</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-3">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">React</span>
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">TypeScript</span>
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">Storybook</span>
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">Playwright</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: ISC Portal */}
            <div className="bg-card border border-accent-purple/30 rounded-lg overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img src={`${import.meta.env.BASE_URL}project-isc-portal.png`} alt="ISC Portal Usability Prototype" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-[2fr,1fr] gap-8">
                  <div>
                    <div className="text-xs font-semibold text-accent-purple mb-3 uppercase tracking-wider">
                      Hero Project · 2024
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                      ISC Portal Usability Prototype
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Delivered a comprehensive, interactive prototype addressing 81% of critical usability issues in the Comcast Business ISC Portal in just 4 days, with zero TypeScript errors and an 89% reduction in UI variations.
                    </p>
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                        <div className="text-2xl font-bold mb-1">4 days</div>
                        <div className="text-xs text-muted-foreground">vs. 12+ months</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Value Created</div>
                        <div className="text-2xl font-bold mb-1">~$1.05M</div>
                        <div className="text-xs text-muted-foreground">Immediate validation</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Speed</div>
                        <div className="text-2xl font-bold mb-1">5,450</div>
                        <div className="text-xs text-muted-foreground">lines/day</div>
                      </div>
                    </div>
                    <Link href="/case-study/isc-portal">
                      <Button variant="outline" className="border-accent-purple/30 text-accent-purple hover:bg-accent-purple/10">
                        View Full Case Study →
                      </Button>
                    </Link>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-semibold mb-3">Key Deliverables</div>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• 21,801 lines of code total</li>
                        <li>• 0 TypeScript errors</li>
                        <li>• 89% reduction in UI variations</li>
                        <li>• 1 base component → 9 pages</li>
                        <li>• pNPS target: -4 → +5</li>
                        <li>• 5-7x faster development</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-3">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">Angular 13</span>
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">TypeScript</span>
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">Material 3</span>
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">Playwright</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Comcast Design System */}
            <div className="bg-card border border-accent-green/30 rounded-lg overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img src={`${import.meta.env.BASE_URL}project-comcast-design-system.png`} alt="Comcast Business Design System" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-[2fr,1fr] gap-8">
                  <div>
                    <div className="text-xs font-semibold text-accent-green mb-3 uppercase tracking-wider">
                      Supporting Project · 2024
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                      Comcast Business Design System
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Created a production-ready design system for Comcast Business in 4 weeks, enabling product teams to build higher-quality prototypes at significantly faster pace.
                    </p>
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                        <div className="text-2xl font-bold mb-1">4 weeks</div>
                        <div className="text-xs text-muted-foreground">vs. 12+ months</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Value Created</div>
                        <div className="text-2xl font-bold mb-1">~$1.03M</div>
                        <div className="text-xs text-muted-foreground">In production use</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Scale</div>
                        <div className="text-2xl font-bold mb-1">171K+</div>
                        <div className="text-xs text-muted-foreground">lines of code</div>
                      </div>
                    </div>
                    <Link href="/case-study/comcast-design-system">
                      <Button variant="outline" className="border-accent-green/30 text-accent-green hover:bg-accent-green/10">
                        View Full Case Study →
                      </Button>
                    </Link>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-semibold mb-3">Key Deliverables</div>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• 171,000+ lines of code</li>
                        <li>• 62 components total</li>
                        <li>• 826 type-safe icons</li>
                        <li>• 100% token compliance</li>
                        <li>• WCAG 2.1 AA compliance</li>
                        <li>• Fortune 100 production use</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-3">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">React</span>
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">TypeScript</span>
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">Tailwind</span>
                        <span className="text-xs px-3 py-1 bg-muted rounded-full">Storybook</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional UX Projects */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Traditional UX Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Foundational work demonstrating 25 years of UX expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            {/* BuildOut */}
            <div className="bg-card border border-border/40 rounded-lg overflow-hidden hover:border-border/60 transition-all">
              <div className="h-64 overflow-hidden">
                <img src={`${import.meta.env.BASE_URL}project-buildout-hero.jpg`} alt="BuildOut Commercial Real Estate" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  Design · 2023
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">BuildOut</h3>
                <p className="text-lg text-muted-foreground mb-2 font-medium">Commercial Real Estate App</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Streamlined workflows for commercial real estate brokers who spend 70-80% of their day researching clients and properties. Improved deal cycle efficiency through user-centered design.
                </p>
                <div className="mb-6">
                  <div className="text-sm font-semibold mb-3">Approach</div>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Stakeholder & customer interviews</li>
                    <li>• Competitive analysis & heuristic evaluation</li>
                    <li>• Design studio workshops</li>
                    <li>• Lean MVPs & usability testing</li>
                  </ul>
                </div>
                <div className="text-sm text-muted-foreground mb-6">
                  <strong>Outcome:</strong> Product in beta with positive early feedback, representing major workflow improvement for customers.
                </div>
              </div>
            </div>

            {/* CVS/Aetna */}
            <div className="bg-card border border-border/40 rounded-lg overflow-hidden hover:border-border/60 transition-all">
              <div className="h-64 overflow-hidden">
                <img src={`${import.meta.env.BASE_URL}project-cvs-aetna-hero.jpg`} alt="CVS Aetna Health Insurance" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  Research · 2020
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">CVS/Aetna</h3>
                <p className="text-lg text-muted-foreground mb-2 font-medium">Health Insurance Apps</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Restructured web and mobile applications to mirror customer perspective of insurance and healthcare, making critical health information easier to understand, find, and use.
                </p>
                <div className="mb-6">
                  <div className="text-sm font-semibold mb-3">Approach</div>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Stakeholder & customer interviews</li>
                    <li>• Analytics review & content audit</li>
                    <li>• Concept model alignment workshops</li>
                    <li>• Tree tests & usability testing</li>
                  </ul>
                </div>
                <div className="text-sm text-muted-foreground mb-6">
                  <strong>Outcome:</strong> Success rates improved from below 50% to over 90% in key areas of the application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your Product Development?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              I'm currently available for select Principal/VP Product Design roles where I can deliver massive business value.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-base">
                Let's Discuss Your Needs
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


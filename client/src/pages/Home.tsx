import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
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
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
              I'm a force multiplier for product teams.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Accelerating product development from months to weeks—enabling teams to validate more ideas, ship faster, and deliver measurable business impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-base">
                  Available for Principal/VP Roles ($220K-$280K)
                </Button>
              </Link>
              <Link href="/work">
                <Button size="lg" variant="outline" className="text-base">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">84x</div>
              <div className="text-sm text-muted-foreground">Faster Delivery</div>
              <div className="text-xs text-muted-foreground mt-1">4 weeks vs. 84 person-months</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$3M+</div>
              <div className="text-sm text-muted-foreground">Value Created</div>
              <div className="text-xs text-muted-foreground mt-1">On 3 projects in the past year</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10x</div>
              <div className="text-sm text-muted-foreground">More Ideas Validated</div>
              <div className="text-xs text-muted-foreground mt-1">In the same timeframe</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25 Years</div>
              <div className="text-sm text-muted-foreground">Experience</div>
              <div className="text-xs text-muted-foreground mt-1">UX Strategy Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-16 text-center">
            What I Enable
          </h2>
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Traditional Approach</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>12+ months to validate one product concept</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Sequential handoffs between specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Expensive to explore multiple directions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>High risk of building the wrong thing</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">With Me as Force Multiplier</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>2-4 weeks to validate multiple concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Integrated research, design, and development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Rapid iteration enables better decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>De-risk before major engineering investment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground">
              3 Projects, 10 Weeks, $3M+ Value Created
            </p>
          </div>

          <div className="grid gap-8 max-w-5xl">
            {/* Project 1: SaaS Design System */}
            <div className="group bg-card border border-accent-cyan/30 rounded-lg overflow-hidden hover:border-accent-cyan/60 transition-all">
              <div className="h-64 overflow-hidden">
                <img src="/project-saas-design-system.png" alt="Enterprise SaaS Design System" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold text-accent-cyan mb-3 uppercase tracking-wider">
                  Hero Project
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent-cyan transition-colors">
                  Enterprise SaaS Design System
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Industry-First Automated Token Governance System
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                    <div className="font-semibold">4 weeks vs. 12+ months</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Value Created</div>
                    <div className="font-semibold">~$1.03M</div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="text-sm text-muted-foreground mb-1">Impact</div>
                    <div className="font-semibold">60% faster development</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div>• 63,813 lines of code</div>
                  <div>• 48 production-ready components</div>
                  <div>• 100% WCAG 2.2 AA compliance</div>
                  <div>• Industry-first validation script</div>
                </div>
                <Link href="/work#saas-design-system">
                  <Button variant="outline" className="border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10">
                    View Case Study →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Project 2: ISC Portal */}
            <div className="group bg-card border border-accent-purple/30 rounded-lg overflow-hidden hover:border-accent-purple/60 transition-all">
              <div className="h-64 overflow-hidden">
                <img src="/project-isc-portal.png" alt="ISC Portal Usability Prototype" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold text-accent-purple mb-3 uppercase tracking-wider">
                  Hero Project
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent-purple transition-colors">
                  ISC Portal Usability Prototype
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Addressed 81% of System Issues in 4 Days
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                    <div className="font-semibold">4 days vs. 12+ months</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Value Created</div>
                    <div className="font-semibold">~$1.05M</div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="text-sm text-muted-foreground mb-1">Speed</div>
                    <div className="font-semibold">5,450 lines/day</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div>• 5,450 lines of code/day</div>
                  <div>• 0 TypeScript errors (21,801 lines)</div>
                  <div>• 89% reduction in UI variations</div>
                  <div>• pNPS Target: -4 → +5</div>
                </div>
                <Link href="/work#isc-portal">
                  <Button variant="outline" className="border-accent-purple/30 text-accent-purple hover:bg-accent-purple/10">
                    View Case Study →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Project 3: Comcast Design System */}
            <div className="group bg-card border border-accent-green/30 rounded-lg overflow-hidden hover:border-accent-green/60 transition-all">
              <div className="h-64 overflow-hidden">
                <img src="/project-comcast-design-system.png" alt="Comcast Business Design System" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold text-accent-green mb-3 uppercase tracking-wider">
                  Supporting Project
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent-green transition-colors">
                  Comcast Business Design System
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  171,000+ Lines: 62 Components, 826 Icons in 4 Weeks
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                    <div className="font-semibold">4 weeks vs. 12+ months</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Value Created</div>
                    <div className="font-semibold">~$1.03M</div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="text-sm text-muted-foreground mb-1">Scale</div>
                    <div className="font-semibold">Fortune 100</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div>• 171,000+ lines of code</div>
                  <div>• 62 components (38 primitives + 24 patterns)</div>
                  <div>• 826 type-safe icons</div>
                  <div>• 100% token compliance</div>
                </div>
                <Link href="/work#comcast-design-system">
                  <Button variant="outline" className="border-accent-green/30 text-accent-green hover:bg-accent-green/10">
                    View Case Study →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Exceptional
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              I'm currently available for select Principal/VP Product Design roles where I can deliver massive business value.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-base">
                Get in Touch
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


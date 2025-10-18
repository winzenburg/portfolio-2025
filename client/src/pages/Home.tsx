import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border/40">
        <div className="container mx-auto py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold tracking-tight">Ryan Winzenburg</a>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/work">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">Work</a>
              </Link>
              <Link href="/methodology">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">Methodology</a>
              </Link>
              <Link href="/about">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="sm">Contact</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">RYAN WINZENBURG</p>
            <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-tight mb-8">
              I replace 7-person teams.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl">
              25 years of UX expertise + AI-augmented workflows = I deliver design systems in 4 weeks and 
              production prototypes in 4 days that would traditionally take 12+ months with teams of 5-7 specialists.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="border-l-2 border-accent-saas pl-6">
                <div className="text-4xl font-serif font-semibold text-accent-saas mb-2">84x</div>
                <div className="text-sm text-muted-foreground">Faster Delivery</div>
              </div>
              <div className="border-l-2 border-accent-isc pl-6">
                <div className="text-4xl font-serif font-semibold text-accent-isc mb-2">$3M+</div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
              </div>
              <div className="border-l-2 border-accent-comcast pl-6">
                <div className="text-4xl font-serif font-semibold text-accent-comcast mb-2">10 weeks</div>
                <div className="text-sm text-muted-foreground">vs. 36 months</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/work">
                <Button size="lg" className="gap-2">
                  View My Work <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6">Traditional Team</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <div>
                    <div className="font-medium">7 Specialists</div>
                    <div className="text-sm text-muted-foreground">UX Researcher, Designer, Frontend Dev, Backend Dev, QA, Copywriter, A11y Expert</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <div>
                    <div className="font-medium">12+ Months</div>
                    <div className="text-sm text-muted-foreground">Per major project</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <div>
                    <div className="font-medium">$910K/year</div>
                    <div className="text-sm text-muted-foreground">Total team cost</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6">My AI-Augmented Approach</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <div className="font-medium">All Roles in One</div>
                    <div className="text-sm text-muted-foreground">25 years expertise across all disciplines</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <div className="font-medium">2-4 Weeks</div>
                    <div className="text-sm text-muted-foreground">Per major project</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <div className="font-medium">$250K/year</div>
                    <div className="text-sm text-muted-foreground">$660K savings + 11 months faster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto">
          <div className="mb-16">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">SELECTED PROJECTS</p>
            <h2 className="text-4xl font-serif font-semibold">Recent Work</h2>
          </div>

          <div className="space-y-12">
            {/* Project 1: SaaS Design System */}
            <Link href="/work#saas-design-system">
              <a className="block group">
                <div className="border-l-4 border-accent-saas pl-8 py-6 hover:bg-accent/5 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-xs text-accent-saas uppercase tracking-wider mb-2">AI-Augmented • Design System</div>
                      <h3 className="text-2xl font-serif font-semibold mb-2 group-hover:text-accent-saas transition-colors">
                        Enterprise SaaS Design System
                      </h3>
                      <p className="text-muted-foreground max-w-2xl">
                        Built 63,813 lines of code in 4 weeks with industry-first automated governance system. 
                        48 production-ready components, 100% WCAG compliance, 0 axe-core violations.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-saas group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent-saas" />
                      <span className="text-muted-foreground">4 weeks vs. 12+ months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-accent-saas" />
                      <span className="text-muted-foreground">63,813 lines of code</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-accent-saas" />
                      <span className="text-muted-foreground">$1.03M saved</span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            {/* Project 2: ISC Portal */}
            <Link href="/work#isc-portal">
              <a className="block group">
                <div className="border-l-4 border-accent-isc pl-8 py-6 hover:bg-accent/5 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-xs text-accent-isc uppercase tracking-wider mb-2">AI-Augmented • Product Prototype</div>
                      <h3 className="text-2xl font-serif font-semibold mb-2 group-hover:text-accent-isc transition-colors">
                        ISC Portal Usability Prototype
                      </h3>
                      <p className="text-muted-foreground max-w-2xl">
                        Delivered 21,801 lines of code in 4 days with 0 TypeScript errors. 
                        5,450 lines/day productivity, 89% reduction in UI variations.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-isc group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent-isc" />
                      <span className="text-muted-foreground">4 days vs. 12+ months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-accent-isc" />
                      <span className="text-muted-foreground">21,801 lines, 0 errors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-accent-isc" />
                      <span className="text-muted-foreground">$1.05M saved</span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            {/* Project 3: Comcast Design System */}
            <Link href="/work#comcast-design-system">
              <a className="block group">
                <div className="border-l-4 border-accent-comcast pl-8 py-6 hover:bg-accent/5 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-xs text-accent-comcast uppercase tracking-wider mb-2">AI-Augmented • Design System</div>
                      <h3 className="text-2xl font-serif font-semibold mb-2 group-hover:text-accent-comcast transition-colors">
                        Comcast Business Design System
                      </h3>
                      <p className="text-muted-foreground max-w-2xl">
                        Delivered 171,000+ lines of code in 4 weeks. 62 components, 826 type-safe icons, 
                        100% token compliance, production use at Fortune 100.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-comcast group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent-comcast" />
                      <span className="text-muted-foreground">4 weeks vs. 12+ months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-accent-comcast" />
                      <span className="text-muted-foreground">171,000+ lines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-accent-comcast" />
                      <span className="text-muted-foreground">$1.05M saved</span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className="mt-12">
            <Link href="/work">
              <Button variant="outline" size="lg" className="gap-2">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-serif font-semibold mb-6">
              Ready to accelerate your product development?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              I'm available for Principal/VP Product Design roles where I can deliver measurable business impact 
              through AI-augmented workflows.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/methodology">
                <Button size="lg" variant="outline">
                  Learn About My Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2025 Ryan Winzenburg. Available for $220K-$280K roles.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/rwinzenburg/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/winzenburg" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="mailto:ryanwinzenburg@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


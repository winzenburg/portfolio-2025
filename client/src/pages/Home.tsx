import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function Home() {
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

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            I Replace 7-Person Teams
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl">
            Design Systems in 4 Weeks. Product Prototypes in 4 Days. Enterprise Quality. $1M+ Saved Per Project.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">84x</div>
              <div className="text-sm text-muted-foreground">Faster Delivery</div>
              <div className="text-xs text-muted-foreground mt-1">4 weeks vs. 84 person-months</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$3M+</div>
              <div className="text-sm text-muted-foreground">Saved</div>
              <div className="text-xs text-muted-foreground mt-1">On 3 projects in the past year</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">7-Person</div>
              <div className="text-sm text-muted-foreground">Team Replaced</div>
              <div className="text-xs text-muted-foreground mt-1">UX, Dev, QA, Copy, A11y</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25 Years</div>
              <div className="text-sm text-muted-foreground">Experience</div>
              <div className="text-xs text-muted-foreground mt-1">UX Strategy Expertise</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Available for Principal/VP Roles ($220K-$280K)
              </Button>
            </Link>
            <Link href="/work">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What I Replace</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <div>
              <h3 className="text-xl font-semibold mb-6">Traditional 7-Person Team</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-destructive mt-1">❌</span>
                  <div>
                    <div className="font-medium">UX Researcher ($120K)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive mt-1">❌</span>
                  <div>
                    <div className="font-medium">UX Designer ($140K)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive mt-1">❌</span>
                  <div>
                    <div className="font-medium">Frontend Developer ($160K)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive mt-1">❌</span>
                  <div>
                    <div className="font-medium">Backend Developer ($160K)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive mt-1">❌</span>
                  <div>
                    <div className="font-medium">QA Engineer ($110K)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive mt-1">❌</span>
                  <div>
                    <div className="font-medium">Copywriter ($90K)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive mt-1">❌</span>
                  <div>
                    <div className="font-medium">Accessibility Expert ($130K)</div>
                  </div>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="font-bold text-lg">Total: $910K/year</div>
                  <div className="text-muted-foreground">Timeline: 12+ months</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">My AI-Augmented Approach</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✅</span>
                  <div>
                    <div className="font-medium">All of the above, and more</div>
                  </div>
                </div>
                <div className="border-t pt-4 mt-8">
                  <div className="font-bold text-lg">$250K/year</div>
                  <div className="text-muted-foreground">Timeline: 2-4 weeks</div>
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="font-semibold text-green-900 dark:text-green-100">
                      Savings: $660K/year + 11 months faster to market
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="container py-24">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-xl text-muted-foreground">
            3 Projects, 10 Weeks, $3M+ Saved
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="text-sm font-medium text-primary mb-2">HERO PROJECT</div>
              <h3 className="text-2xl font-bold mb-3">Enterprise SaaS Design System</h3>
              <p className="text-muted-foreground mb-4">
                Industry-First Automated Token Governance System
              </p>
            </div>
            <div className="space-y-3 mb-6">
              <div>
                <div className="text-sm text-muted-foreground">Timeline</div>
                <div className="font-semibold">4 weeks vs. 12+ months</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Savings</div>
                <div className="font-semibold">~$1.03M</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Key Metrics</div>
                <div className="text-sm">
                  • 63,813 lines of code<br />
                  • 48 production-ready components<br />
                  • 100% WCAG 2.2 AA compliance<br />
                  • Industry-first validation script
                </div>
              </div>
            </div>
            <Link href="/work/saas-design-system">
              <Button variant="outline" className="w-full">View Case Study →</Button>
            </Link>
          </Card>

          {/* Project 2 */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="text-sm font-medium text-primary mb-2">HERO PROJECT</div>
            <h3 className="text-2xl font-bold mb-3">ISC Portal Usability Prototype</h3>
            <p className="text-muted-foreground mb-4">
              Addressed 81% of System Issues in 4 Days
            </p>
            </div>
            <div className="space-y-3 mb-6">
              <div>
                <div className="text-sm text-muted-foreground">Timeline</div>
                <div className="font-semibold">4 days vs. 12+ months</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Savings</div>
                <div className="font-semibold">~$1.05M</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Key Metrics</div>
                <div className="text-sm">
                  • 13 functional pages, 38 components<br />
                  • 0 TypeScript errors, 55 commits<br />
                  • 100% Material Design 3<br />
                  • pNPS Target: -4 → +5
                </div>
              </div>
            </div>
            <Link href="/work/isc-portal">
              <Button variant="outline" className="w-full">View Case Study →</Button>
            </Link>
          </Card>

          {/* Project 3 */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="text-sm font-medium text-muted-foreground mb-2">SUPPORTING PROJECT</div>
              <h3 className="text-2xl font-bold mb-3">Comcast Business Design System</h3>
              <p className="text-muted-foreground mb-4">
                Enterprise Design System for Fortune 100
              </p>
            </div>
            <div className="space-y-3 mb-6">
              <div>
                <div className="text-sm text-muted-foreground">Timeline</div>
                <div className="font-semibold">4 weeks vs. 12+ months</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Savings</div>
                <div className="font-semibold">~$1.03M</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Key Metrics</div>
                <div className="text-sm">
                  • Production use at Comcast<br />
                  • React + TypeScript (81.9%)<br />
                  • Figma-to-code integration<br />
                  • 103 commits, sustained dev
                </div>
              </div>
            </div>
            <Link href="/work/comcast-design-system">
              <Button variant="outline" className="w-full">View Case Study →</Button>
            </Link>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link href="/work">
            <Button size="lg" variant="outline">View All Projects →</Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Exceptional
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            I'm currently available for select Principal/VP Product Design roles where I can deliver massive business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </Link>
            <Link href="/methodology">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Learn About My Methodology
              </Button>
            </Link>
          </div>
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


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

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Multiply Your Team's Velocity Without Adding Headcount
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl">
            I help well-funded startups and Fortune 500 companies ship 4-6x faster through AI-augmented workflows that amplify your existing teams.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">4-6x</div>
              <div className="text-sm text-muted-foreground">Faster Delivery</div>
              <div className="text-xs text-muted-foreground mt-1">Ship more with your team</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$3M+</div>
              <div className="text-sm text-muted-foreground">Value Created</div>
              <div className="text-xs text-muted-foreground mt-1">Across 3 recent projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6-10x</div>
              <div className="text-sm text-muted-foreground">ROI</div>
              <div className="text-xs text-muted-foreground mt-1">Proven return on investment</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25 Years</div>
              <div className="text-sm text-muted-foreground">Fortune 500</div>
              <div className="text-xs text-muted-foreground mt-1">Proven at scale</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Open to Strategic Leadership Roles
              </Button>
            </Link>
            <Link href="/work">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions by Audience */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">I'm Additive, Not Subtractive</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            I amplify your existing teams - designers, engineers, and product managers - making everyone more effective without adding permanent headcount.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            {/* For VCs */}
            <Card className="p-8">
              <div className="text-primary text-4xl mb-4"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="text-xl font-semibold mb-4">For VCs & Investors</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <div className="font-medium text-foreground">Extend Runway 6-12 Months</div>
                    <div className="text-sm">Save $1M+ in development costs</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <div className="font-medium text-foreground">Ship 4-6x Faster</div>
                    <div className="text-sm">Competitive advantage through velocity</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <div className="font-medium text-foreground">De-Risk Investments</div>
                    <div className="text-sm">Proven processes, predictable outcomes</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* For Product Teams */}
            <Card className="p-8">
              <div className="text-primary text-4xl mb-4"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
              <h3 className="text-xl font-semibold mb-4">For Product Teams</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <div className="font-medium text-foreground">Ship More Features</div>
                    <div className="text-sm">4-6x more per quarter with your team</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <div className="font-medium text-foreground">Unblock Your Team</div>
                    <div className="text-sm">Designers and engineers ship faster</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <div className="font-medium text-foreground">Predictable Delivery</div>
                    <div className="text-sm">Reliable timelines, measurable outcomes</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* For Design Leaders */}
            <Card className="p-8">
              <div className="text-primary text-4xl mb-4"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg></div>
              <h3 className="text-xl font-semibold mb-4">For Design Leaders</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <div className="font-medium text-foreground">Scale Without Hiring</div>
                    <div className="text-sm">10x output without 10x headcount</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <div className="font-medium text-foreground">Elevate Your Team</div>
                    <div className="text-sm">Designers focus on strategy, not pixels</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <div className="font-medium text-foreground">Prove Business Value</div>
                    <div className="text-sm">Show design's ROI to the C-suite</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How I Multiply Your Team</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <div>
            <h3 className="text-2xl font-semibold mb-6">The Multiplier Effect</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                  <h4 className="font-semibold">I Work Alongside Your Team</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  I embed with your designers, engineers, and product managers - amplifying their effectiveness, not replacing them.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                  <h4 className="font-semibold">I Bring AI-Augmented Workflows</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  My 25 years of Fortune 500 experience combined with cutting-edge AI tools delivers 4-6x faster results.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                  <h4 className="font-semibold">Your Team Gets Better</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  I leave behind systems, processes, and knowledge that make your team faster long after I'm gone.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Recent Results</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <div className="font-semibold mb-1">Series C SaaS Company</div>
                <div className="text-sm text-muted-foreground mb-2">Built Kinetic UI Design System in 4 weeks</div>
                <div className="text-sm">
                  <span className="font-medium">Impact:</span> Extended runway by 8 months, shipped v2.0 product 6 months ahead of schedule
                </div>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="font-semibold mb-1">Fortune 500 Financial Services</div>
                <div className="text-sm text-muted-foreground mb-2">Redesigned advisor portal in 6 weeks</div>
                <div className="text-sm">
                  <span className="font-medium">Impact:</span> Prevented $50M+ in lost revenue, reduced training time from 2 weeks to 3 days
                </div>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="font-semibold mb-1">Comcast Business</div>
                <div className="text-sm text-muted-foreground mb-2">Scaled design system across 12 product teams</div>
                <div className="text-sm">
                  <span className="font-medium">Impact:</span> $2M annual savings, 40% faster time-to-market
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Comcast</div>
              <div className="text-sm text-muted-foreground">Fortune 50</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">CVS Health</div>
              <div className="text-sm text-muted-foreground">Fortune 10</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Series B-D</div>
              <div className="text-sm text-muted-foreground">SaaS Startups</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">PE-Backed</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Multiply Your Team's Velocity?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how I can help your team ship faster without adding permanent headcount.
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
      </section>
    </div>
  );
}


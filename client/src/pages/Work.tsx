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
          Case Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Real business outcomes from multiplying team velocity through AI-augmented workflows.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="container pb-24">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Featured Projects</h2>
          <p className="text-muted-foreground">
            How I helped companies extend runway, ship faster, and scale without adding headcount
          </p>
        </div>

        <div className="space-y-12">
          {/* Project 1: Kinetic UI */}
          <Card className="p-8 md:p-12 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded-lg mb-8 overflow-hidden">
              <img 
                src="/portfolio-2025/saas-ds-welcome.png" 
                alt="Kinetic UI Design System" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div>
                <div className="text-sm font-medium text-primary mb-3">SERIES C SAAS · 2024</div>
                <h3 className="text-3xl font-bold mb-4">Kinetic UI Design System</h3>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">THE CHALLENGE</div>
                  <p className="text-muted-foreground">
                    A Series C SaaS company needed a production-ready design system to ship their v2.0 product, but traditional approaches would take 12-18 months and cost $800K-$1.2M—time and money they didn't have.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">THE IMPACT</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">8 Months</div>
                      <div className="text-sm text-muted-foreground">Extended runway by saving $1M+</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">6 Months</div>
                      <div className="text-sm text-muted-foreground">Shipped v2.0 ahead of schedule</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">4-6x</div>
                      <div className="text-sm text-muted-foreground">Faster feature delivery</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">4 Weeks</div>
                      <div className="text-sm text-muted-foreground">vs. 12-18 months traditional</div>
                    </div>
                  </div>
                </div>

                <Link href="/case-study/saas-design-system">
                  <a className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold text-lg">
                    View Full Case Study →
                  </a>
                </Link>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold mb-3">VALUE FOR STAKEHOLDERS</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium mb-1"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> For VCs/Board</div>
                      <div className="text-muted-foreground">$1M+ saved = 8 months extended runway</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> For Product Team</div>
                      <div className="text-muted-foreground">Shipped v2.0 6 months ahead of schedule</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> For Design Team</div>
                      <div className="text-muted-foreground">4-6x faster feature delivery without hiring</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">⚙️ For Engineering</div>
                      <div className="text-muted-foreground">48 production-ready components, zero tech debt</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Project 2: ISC Portal */}
          <Card className="p-8 md:p-12 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded-lg mb-8 overflow-hidden">
              <img 
                src="/portfolio-2025/project-isc.png" 
                alt="ISC Portal Redesign" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div>
                <div className="text-sm font-medium text-primary mb-3">FORTUNE 50 FINANCIAL SERVICES · 2024</div>
                <h3 className="text-3xl font-bold mb-4">ISC Portal Redesign</h3>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">THE CHALLENGE</div>
                  <p className="text-muted-foreground">
                    Financial advisors were threatening to leave due to a confusing portal interface. The company faced $50M+ in potential lost revenue if they couldn't fix critical usability issues fast.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">THE IMPACT</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">$50M+</div>
                      <div className="text-sm text-muted-foreground">Revenue protected</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">81%</div>
                      <div className="text-sm text-muted-foreground">Critical issues resolved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">3 Days</div>
                      <div className="text-sm text-muted-foreground">Training time (down from 2 weeks)</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">4 Days</div>
                      <div className="text-sm text-muted-foreground">vs. 12+ months traditional</div>
                    </div>
                  </div>
                </div>

                <Link href="/case-study/isc-portal">
                  <a className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold text-lg">
                    View Full Case Study →
                  </a>
                </Link>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold mb-3">VALUE FOR STAKEHOLDERS</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium mb-1"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> For C-Suite</div>
                      <div className="text-muted-foreground">Prevented $50M+ in lost revenue</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> For Product Team</div>
                      <div className="text-muted-foreground">Validated solution in 4 days vs. 12 months</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">👥 For End Users</div>
                      <div className="text-muted-foreground">Training time reduced from 2 weeks to 3 days</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">⚙️ For Engineering</div>
                      <div className="text-muted-foreground">89% reduction in UI variations to maintain</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

                 {/* Project 3: Comcast */}
          <Card className="p-8 md:p-12 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded-lg mb-8 overflow-hidden">
              <img 
                src="/portfolio-2025/project-comcast-design-system.png" 
                alt="Comcast Business Design System" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div>
                <div className="text-sm font-medium text-primary mb-3">FORTUNE 50 TELECOM · 2024</div>
                <h3 className="text-3xl font-bold mb-4">Comcast Business Design System</h3>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">THE CHALLENGE</div>
                  <p className="text-muted-foreground">
                    12 product teams were building inconsistent experiences, slowing time-to-market and creating brand confusion. They needed a unified design system but couldn't afford a year-long initiative.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">THE IMPACT</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">$2M</div>
                      <div className="text-sm text-muted-foreground">Annual savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">40%</div>
                      <div className="text-sm text-muted-foreground">Faster time-to-market</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">12 Teams</div>
                      <div className="text-sm text-muted-foreground">Now building consistently</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">4 Weeks</div>
                      <div className="text-sm text-muted-foreground">vs. 12+ months traditional</div>
                    </div>
                  </div>
                </div>

                <Link href="/case-study/comcast-design-system">
                  <a className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold text-lg">
                    View Full Case Study →
                  </a>
                </Link>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold mb-3">VALUE FOR STAKEHOLDERS</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium mb-1"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> For Finance</div>
                      <div className="text-muted-foreground">$2M annual savings from efficiency</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> For Product Teams</div>
                      <div className="text-muted-foreground">40% faster time-to-market</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> For Design</div>
                      <div className="text-muted-foreground">Consistent brand across 12 teams</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">⚙️ For Engineering</div>
                      <div className="text-muted-foreground">Reusable components, less maintenance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Additional Work</h2>
            <p className="text-muted-foreground">
              Strategic UX leadership across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BuildOut */}
            <Card className="p-8">
              <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/portfolio-2025/project-buildout.png" 
                  alt="BuildOut CRE Platform" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-sm font-medium text-muted-foreground mb-3">B2B SAAS · 2018-2020</div>
              <h3 className="text-2xl font-bold mb-4">BuildOut</h3>
              <p className="text-muted-foreground mb-6">
                Established user-centered design practice from the ground up for a high-growth commercial real estate platform, contributing to successful acquisition.
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2">BUSINESS IMPACT</div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>✓ Contributed to successful company acquisition</li>
                  <li>✓ Improved user satisfaction and retention</li>
                  <li>✓ Established scalable design processes</li>
                </ul>
              </div>
              <Link href="/case-study/buildout">
                <a className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold text-lg">
                  View Case Study →
                </a>
              </Link>
            </Card>

            {/* CVS Health */}
            <Card className="p-8">
              <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/portfolio-2025/project-cvs.png" 
                  alt="CVS Health Platform" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-sm font-medium text-muted-foreground mb-3">FORTUNE 10 HEALTHCARE · 2016-2018</div>
              <h3 className="text-2xl font-bold mb-4">CVS Health/Aetna</h3>
              <p className="text-muted-foreground mb-6">
                Led UX initiatives for enterprise healthcare applications serving millions of members, navigating complex regulatory requirements at massive organizational scale.
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2">BUSINESS IMPACT</div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>✓ Improved member experience for millions of users</li>
                  <li>✓ HIPAA-compliant design at enterprise scale</li>
                  <li>✓ Cross-functional stakeholder alignment</li>
                </ul>
              </div>
              <Link href="/case-study/cvs-aetna">
                <a className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold text-lg">
                  View Case Study →
                </a>
              </Link>
            </Card>
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
            Let's discuss how I can help you extend runway, ship faster, and scale without adding headcount.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Schedule a Discovery Call
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                View Services & Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


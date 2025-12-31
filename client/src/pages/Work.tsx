import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Settings, Users, CheckCircle } from "lucide-react";
import ResponsiveNav from "@/components/ResponsiveNav";

export default function Work() {
  return (
    <div className="min-h-screen">
      <ResponsiveNav currentPage="work" />

      {/* Hero */}
      <section className="relative py-16 md:py-24 mb-16 md:mb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/work-hero.png"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container">
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            How I've Transformed Design Operations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Case studies in AI-augmented design leadership: building systems that make teams faster, driving adoption across organizations, and delivering measurable business impact.
          </p>
        </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container pb-24">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Organizational Transformation</h2>
          <p className="text-muted-foreground">
            Each project represents a team I led, a process I redesigned, or an org I helped transform—not just deliverables shipped.
          </p>
        </div>

        <div className="space-y-12">
          {/* Project 1: Kinetic UI */}
          <Card className="p-8 md:p-12 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded-lg mb-8 overflow-hidden">
              <img 
                src="/saas-ds-welcome.png" 
                alt="Kinetic UI Design System" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div>
                <div className="text-sm font-medium text-primary mb-3">SERIES C SAAS · 2024</div>
                <h3 className="text-3xl font-bold mb-4">Kinetic UI Design System</h3>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">MY ROLE</div>
                  <p className="text-muted-foreground">
                    Led the design system initiative from strategy through execution. Built AI-augmented workflows that enabled a 2-person team to deliver what traditionally requires 6-8 people. Trained the internal team on new processes.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">LEADERSHIP IMPACT</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">2 → 8</div>
                      <div className="text-sm text-muted-foreground">Team output multiplied 4x</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Team adopted AI workflows</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">4-6x</div>
                      <div className="text-sm text-muted-foreground">Faster feature delivery sustained</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">$1M+</div>
                      <div className="text-sm text-muted-foreground">Saved vs. traditional staffing</div>
                    </div>
                  </div>
                </div>

                <Link href="/case-study/saas-design-system">
                  <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-lg">
                    View Full Case Study →
                  </a>
                </Link>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold mb-3">WHAT I BUILT</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <Settings className="w-4 h-4" />
                        AI Workflow System
                      </div>
                      <div className="text-muted-foreground">Cursor + Claude + MCP for design-to-code</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Team Training Program
                      </div>
                      <div className="text-muted-foreground">Onboarded 5 designers to new workflows</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Design System Infrastructure
                      </div>
                      <div className="text-muted-foreground">48 components, tokens, Storybook docs</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Process Documentation
                      </div>
                      <div className="text-muted-foreground">Runbooks for sustainable maintenance</div>
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
                src="/project-isc.png" 
                alt="ISC Portal Redesign" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div>
                <div className="text-sm font-medium text-primary mb-3">FORTUNE 50 FINANCIAL SERVICES · 2024</div>
                <h3 className="text-3xl font-bold mb-4">ISC Portal Redesign</h3>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">MY ROLE</div>
                  <p className="text-muted-foreground">
                    Led rapid UX intervention across a 15-person cross-functional team. Introduced AI-accelerated research and prototyping methods that compressed a 12-month initiative into 4 days. Aligned stakeholders from product, engineering, and executive leadership.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">LEADERSHIP IMPACT</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">15+</div>
                      <div className="text-sm text-muted-foreground">Cross-functional team aligned</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">81%</div>
                      <div className="text-sm text-muted-foreground">Critical issues resolved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">12mo → 4d</div>
                      <div className="text-sm text-muted-foreground">Timeline compressed with AI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">$50M+</div>
                      <div className="text-sm text-muted-foreground">Revenue protected</div>
                    </div>
                  </div>
                </div>

                <Link href="/case-study/isc-portal">
                  <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-lg">
                    View Full Case Study →
                  </a>
                </Link>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold mb-3">WHAT I BUILT</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <Settings className="w-4 h-4" />
                        Rapid Research Framework
                      </div>
                      <div className="text-muted-foreground">AI-accelerated user research synthesis</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Stakeholder Alignment Process
                      </div>
                      <div className="text-muted-foreground">Exec buy-in in 48 hours</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Component Standardization
                      </div>
                      <div className="text-muted-foreground">89% reduction in UI variations</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Training Simplification
                      </div>
                      <div className="text-muted-foreground">2 weeks → 3 days onboarding</div>
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
                src="/project-comcast-design-system.png" 
                alt="Comcast Business Design System" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div>
                <div className="text-sm font-medium text-primary mb-3">FORTUNE 50 TELECOM · 2024</div>
                <h3 className="text-3xl font-bold mb-4">Comcast Business Design System</h3>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">MY ROLE</div>
                  <p className="text-muted-foreground">
                    Drove design system adoption across 12 product teams. Built governance processes, trained design leads, and established the DesignOps infrastructure that made cross-team consistency sustainable.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">LEADERSHIP IMPACT</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">12 Teams</div>
                      <div className="text-sm text-muted-foreground">Drove adoption org-wide</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">40%</div>
                      <div className="text-sm text-muted-foreground">Faster time-to-market</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">$2M</div>
                      <div className="text-sm text-muted-foreground">Annual savings realized</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">95%</div>
                      <div className="text-sm text-muted-foreground">Design system adoption rate</div>
                    </div>
                  </div>
                </div>

                <Link href="/case-study/comcast-design-system">
                  <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-lg">
                    View Full Case Study →
                  </a>
                </Link>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold mb-3">WHAT I BUILT</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <Settings className="w-4 h-4" />
                        Governance Framework
                      </div>
                      <div className="text-muted-foreground">Contribution model, review process</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Design Lead Training
                      </div>
                      <div className="text-muted-foreground">12 team leads onboarded</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Adoption Dashboard
                      </div>
                      <div className="text-muted-foreground">Metrics tracking for leadership</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Component Library
                      </div>
                      <div className="text-muted-foreground">Shared across all 12 teams</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Earlier Career */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Earlier Career Leadership</h2>
            <p className="text-muted-foreground">
              Foundation experience in design leadership at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BuildOut */}
            <Card className="p-8">
              <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                <img
                  src="/project-buildout.png"
                  alt="BuildOut CRE Platform"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-sm font-medium text-muted-foreground mb-3">B2B SAAS · 2018-2020</div>
              <h3 className="text-2xl font-bold mb-4">BuildOut</h3>
              <p className="text-muted-foreground mb-6">
                Built the design practice from scratch at this high-growth commercial real estate platform. Established design processes, hired the team's first designers, and led product design through successful acquisition.
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2">LEADERSHIP EXPERIENCE</div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Built design team from 0 → 4 designers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Established design process and culture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Led design through acquisition</span>
                  </li>
                </ul>
              </div>
              <Link href="/case-study/buildout">
                <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-lg">
                  View Case Study →
                </a>
              </Link>
            </Card>

            {/* CVS Health */}
            <Card className="p-8">
              <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                <img
                  src="/project-cvs.png"
                  alt="CVS Health Platform"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-sm font-medium text-muted-foreground mb-3">FORTUNE 10 HEALTHCARE · 2016-2018</div>
              <h3 className="text-2xl font-bold mb-4">CVS Health/Aetna</h3>
              <p className="text-muted-foreground mb-6">
                Led UX initiatives across a 20+ person design org for enterprise healthcare applications serving millions. Navigated complex regulatory requirements and aligned stakeholders across a massive organization.
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2">LEADERSHIP EXPERIENCE</div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Led initiatives across 20+ person design org</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Enterprise scale: millions of users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>HIPAA compliance at Fortune 10 scale</span>
                  </li>
                </ul>
              </div>
              <Link href="/case-study/cvs-aetna">
                <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-lg">
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
            Looking for This Kind of Leadership?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'm exploring Head of Design Operations, VP/Director of Design, and Principal Design Technologist roles at companies ready to transform how their design teams work with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Let's Talk
              </Button>
            </Link>
            <Link href="/articles">
              <Button size="lg" variant="outline">
                Read My Thinking
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


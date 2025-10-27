import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Zap } from "lucide-react";
import ResponsiveNav from "@/components/ResponsiveNav";

export default function About() {
  return (
    <div className="min-h-screen">
      <ResponsiveNav currentPage="about" />

      {/* Hero */}
      <section className="container py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Strategic Force Multiplier<br />for AI-Native Organizations
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          I help VCs and executive teams build defensible competitive advantages through AI-native transformation—delivering board-level impact without the 18-month learning curve.
        </p>
      </section>

      {/* Story */}
      <section className="container pb-24">
        <div className="max-w-4xl space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground">
              For 25 years, I've led UX strategy for Fortune 50 companies like <strong>Comcast, CVS Health, and Life Time Fitness</strong>. I've seen what works at scale—and what doesn't. I've built design systems for organizations with thousands of employees, navigated complex stakeholder landscapes, and shipped products that serve millions of users.
            </p>
            <p className="text-lg text-muted-foreground">
              About a year ago, I saw an opportunity: AI tools were becoming powerful enough to amplify human expertise, not replace it. I spent months deconstructing my workflow and rebuilding it from the ground up, integrating AI as a core component. The result? I can now deliver outcomes that traditionally require a 7-person team—in a fraction of the time.
            </p>
            <p className="text-lg text-muted-foreground">
              But here's what matters: <strong>I'm additive, not subtractive.</strong> I don't replace your designers, engineers, or product managers. I multiply their effectiveness. I embed with your team, bring AI-augmented workflows, and leave behind systems and processes that make everyone faster long after I'm gone.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Why VCs and Executives Hire Me</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            <Card className="p-8">
              <div className="mb-4">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">I Build Competitive Moats</h3>
              <p className="text-muted-foreground mb-4">
                My AI-augmented workflows deliver 4-6x faster results—creating defensible competitive advantages before competitors catch up. Speed isn't just efficiency; it's strategic positioning.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For VCs & Board Members:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Portfolio companies become AI-native leaders. 6-12 month runway extension through capital efficiency gains.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For VPs/C-Suite:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Board-ready results: $2M+ savings, 40% faster GTM. Career-defining transformation leadership.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For Product/Design Leaders:</div>
              <p className="text-sm text-muted-foreground">
                Strategic leverage at C-suite level with measurable ROI. Future-proof your organization.
              </p>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="text-xl font-bold mb-3">I De-Risk Strategic Bets</h3>
              <p className="text-muted-foreground mb-4">
                25 years at Fortune 50 companies means I've seen every failure mode at scale. I bring proven frameworks, predictable strategic outcomes, and enterprise-grade quality—without the learning curve.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For VCs & Board Members:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Proven at both Fortune 500 and Series B-D scale. $3M+ portfolio value created per engagement.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For VPs/C-Suite:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Not experiments—proven frameworks with measurable ROI. Predictable strategic delivery.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For Product/Design Leaders:</div>
              <p className="text-sm text-muted-foreground">
                Enterprise quality at startup velocity. Demonstrate business impact to your board.
              </p>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">I Transform Organizations</h3>
              <p className="text-muted-foreground mb-4">
                I don't just deliver projects—I transform organizations into AI-native competitors. I build capabilities, install systems, and create sustainable competitive advantages that outlast my engagement.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For VCs & Board Members:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Portfolio companies develop AI-native DNA. Sustainable competitive positioning, not temporary consulting.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For VPs/C-Suite:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Legacy-building transformation. Your team becomes permanently faster, your organization AI-capable.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For Product/Design Leaders:</div>
              <p className="text-sm text-muted-foreground">
                Elevate entire practice areas. Build strategic leverage that compounds over time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What I Bring */}
      <section className="container py-24">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">What I Bring to Your Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">25 Years of Fortune 50 Experience</h3>
              <p className="text-muted-foreground">
                I've led UX strategy for Comcast (Fortune 50), CVS Health (Fortune 10), and other enterprise organizations. I know what works at scale.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">AI-Augmented Workflows</h3>
              <p className="text-muted-foreground">
                I've spent a year rebuilding my workflow from the ground up with AI. This isn't about using ChatGPT—it's about orchestrating AI agents to deliver 4-6x faster.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Design Systems Expertise</h3>
              <p className="text-muted-foreground">
                I've built production design systems for Fortune 50 companies and Series C startups. Token-based architecture, automated governance, enterprise quality.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Full-Stack Capability</h3>
              <p className="text-muted-foreground">
                I ship production-ready code in React, Angular, and TypeScript. 100% WCAG AA compliance, comprehensive testing, zero technical debt.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Strategic Product Thinking</h3>
              <p className="text-muted-foreground">
                I bridge ideation and validation. I don't just build what you ask for—I help you figure out what's worth building in the first place.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Proven ROI</h3>
              <p className="text-muted-foreground">
                $3M+ value created across 3 recent projects. 6-10x ROI. Extended runway by 6-12 months for portfolio companies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">How do you deliver 4-6x faster without sacrificing quality?</h3>
                <p className="text-muted-foreground">
                  AI handles the rote execution—writing boilerplate code, generating documentation, running tests. My 25 years of experience provides the strategic direction, quality control, and taste. The result? 100% WCAG AA compliance, zero TypeScript errors, comprehensive testing—delivered in a fraction of the time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Won't AI threaten my existing team?</h3>
                <p className="text-muted-foreground">
                  No. I'm additive, not subtractive. I work alongside your designers, engineers, and product managers—making them more effective, not replacing them. I bring AI workflows that your team can learn and adopt. When I leave, your team is permanently faster.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">What's the ROI of hiring you?</h3>
                <p className="text-muted-foreground">
                  Typical ROI is 6-10x. For example: A Series C company saved $1M+ on their design system (vs. hiring a 7-person team), which extended their runway by 8 months. A Fortune 50 company prevented $50M+ in lost revenue by fixing critical usability issues in 4 days instead of 12 months.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">What types of projects are you best suited for?</h3>
                <p className="text-muted-foreground">
                  I'm best for high-impact, time-sensitive projects where speed and quality both matter: design systems, product redesigns, rapid prototyping, and strategic UX initiatives. I work with Series B-D startups and Fortune 500 companies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">What's your ideal engagement model?</h3>
                <p className="text-muted-foreground">
                  I'm primarily focused on strategic leadership roles (VP Product Design, Head of Design, Principal) where I can deliver transformational impact. I also take on high-impact consulting engagements (4-12 weeks) for VCs transforming portfolio companies or executives solving mission-critical challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Are you available for VP/C-suite roles?</h3>
                <p className="text-muted-foreground">
                  Yes, that's my primary focus. I'm looking for strategic leadership roles where I can build AI-native organizations and deliver board-level impact. I'm based in Colorado but open to remote opportunities with companies committed to AI-driven competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Discuss Strategic Leadership Opportunities
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're a VC transforming portfolio companies, an executive building AI-native competitive advantage, or a board seeking transformational leadership—let's explore opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Explore VP/C-Suite Roles
              </Button>
            </Link>
            <Link href="/work">
              <Button size="lg" variant="outline">
                View Strategic Impact
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


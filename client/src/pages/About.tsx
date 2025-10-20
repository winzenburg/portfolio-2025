import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function About() {
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
                <span className="text-sm font-medium text-primary">About</span>
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
          Force Multiplier for<br />Product Teams
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          I help VCs, Product Leaders, and Design Teams ship 4-6x faster without adding permanent headcount.
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
          <h2 className="text-3xl font-bold mb-12">Why Companies Hire Me</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            <Card className="p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">I Make Teams Faster</h3>
              <p className="text-muted-foreground mb-4">
                My AI-augmented workflows deliver 4-6x faster results. This means your team ships more features per quarter, beats competitors to market, and validates ideas before burning runway.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For VCs:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Speed = competitive advantage. Companies that ship faster win markets.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For Product Teams:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Ship more features without hiring. Unblock designers and engineers.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For Design Leaders:</div>
              <p className="text-sm text-muted-foreground">
                10x output without 10x headcount. Your team focuses on strategy, not pixels.
              </p>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">I De-Risk Investments</h3>
              <p className="text-muted-foreground mb-4">
                25 years at Fortune 50 companies means I've seen every failure mode. I bring proven processes, predictable outcomes, and enterprise-grade quality—without enterprise timelines.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For VCs:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Proven processes reduce risk. $3M+ value created across recent projects.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For Product Teams:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Predictable delivery. No surprises. Measurable outcomes.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For Design Leaders:</div>
              <p className="text-sm text-muted-foreground">
                Enterprise quality at startup speed. Show design's business impact.
              </p>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">I'm Additive, Not Subtractive</h3>
              <p className="text-muted-foreground mb-4">
                I don't replace your team—I amplify them. I embed with your designers, engineers, and PMs, making everyone more effective. When I leave, your team is faster permanently.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For VCs:</div>
              <p className="text-sm text-muted-foreground mb-3">
                No morale risk. Teams get better, not threatened.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For Product Teams:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Your team learns AI workflows. Velocity increase is permanent.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">For Design Leaders:</div>
              <p className="text-sm text-muted-foreground">
                Elevate your team's skills. Build design systems that scale.
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
                  I offer both consulting (project-based or retainer) and strategic leadership roles (Principal/VP level). For consulting, I typically work on 4-12 week projects. For leadership roles, I'm looking for companies that value speed, quality, and massive ROI.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Are you available for full-time roles?</h3>
                <p className="text-muted-foreground">
                  Yes, I'm open to strategic leadership roles (Principal, Head of, VP Product Design) where I can deliver massive business value. I'm based in Colorado but open to remote opportunities with forward-thinking companies.
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
            Let's Discuss How I Can Help
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're a VC looking to de-risk portfolio companies, a PM trying to ship faster, or a Design Leader scaling without hiring—let's talk.
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


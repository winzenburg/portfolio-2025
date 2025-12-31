import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Zap, Users } from "lucide-react";
import ResponsiveNav from "@/components/ResponsiveNav";

export default function About() {
  return (
    <div className="min-h-screen">
      <ResponsiveNav currentPage="about" />

      {/* Hero */}
      <section className="relative py-16 md:py-24 mb-16 md:mb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/about-hero.png"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container">
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Design Leader Who Builds<br />AI-Native Teams
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            I transform how design organizations work—building the systems, workflows, and culture that enable teams to ship 4-6x faster while developing sustainable AI capabilities.
          </p>
        </div>
        </div>
      </section>

      {/* Story */}
      <section className="container pb-24">
        <div className="max-w-4xl space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground">
              For 25 years, I've led design teams at Fortune 50 companies like <strong>Comcast, CVS Health, and Life Time Fitness</strong>. I've built and scaled design systems, led cross-functional teams of 10+, and shipped products serving millions of users. I know what works at enterprise scale—and what doesn't.
            </p>
            <p className="text-lg text-muted-foreground">
              About a year ago, I saw an opportunity that most design leaders were missing: AI tools were becoming powerful enough to fundamentally transform how design teams work. Not by replacing designers, but by amplifying what they do best. I spent months building and testing AI-augmented workflows—orchestrated agents, MCP integrations, design-to-code automation.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>What I learned changed how I think about design leadership.</strong> The teams that will win aren't the ones with the most designers. They're the ones that figure out how to integrate AI into their design operations without losing what makes design work human: empathy, strategic thinking, and taste.
            </p>
            <p className="text-lg text-muted-foreground">
              I'm now looking for a leadership role where I can apply this—transforming how a design organization works with AI while building the team and culture to sustain it.
            </p>
          </div>
        </div>
      </section>

      {/* What I'd Build */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">What I'd Build in Your Organization</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            <Card className="p-8">
              <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Augmented Workflows</h3>
              <p className="text-muted-foreground mb-4">
                Production-ready systems that actually work—not experiments. Design-to-code automation, orchestrated AI agents, and MCP integrations that make your team 4-6x faster.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">First 30 Days:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Audit current workflows, identify high-leverage automation opportunities, build proof-of-concept for one critical path.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">First 90 Days:</div>
              <p className="text-sm text-muted-foreground">
                Deploy AI toolchain across design team, train on new workflows, measure velocity improvements.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Design Operations Infrastructure</h3>
              <p className="text-muted-foreground mb-4">
                The systems that make design teams scale: design system governance, automated documentation, living style guides, and quality gates that actually get used.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">First 30 Days:</div>
              <p className="text-sm text-muted-foreground mb-3">
                Assess design system maturity, identify adoption blockers, establish measurement framework.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">First 90 Days:</div>
              <p className="text-sm text-muted-foreground">
                Implement automated governance, launch internal tooling, demonstrate adoption improvements.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Team & Culture Development</h3>
              <p className="text-muted-foreground mb-4">
                AI tools are only as good as the team using them. I build the skills, processes, and culture that make AI adoption stick—without burning out your people.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">First 30 Days:</div>
              <p className="text-sm text-muted-foreground mb-3">
                1:1s with every team member, identify skill gaps and growth opportunities, understand team dynamics.
              </p>
              <div className="text-sm font-semibold text-primary mb-2">First 90 Days:</div>
              <p className="text-sm text-muted-foreground">
                Launch training programs, establish peer learning systems, celebrate early wins publicly.
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
            <h2 className="text-3xl font-bold mb-12">Questions You Might Have</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">What roles are you looking for?</h3>
                <p className="text-muted-foreground">
                  Head of Design Operations, VP/Director of Design, or Principal Design Technologist at companies under 500 employees where I can shape AI strategy. I'm also interested in Design Tools Lead roles focused on internal tooling for design teams.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">What size company is the best fit?</h3>
                <p className="text-muted-foreground">
                  Companies with design teams of 5-30 people who are serious about AI adoption but haven't figured it out yet. Too small and there's not enough complexity to warrant dedicated DesignOps leadership. Too large and the change management becomes political.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Won't AI threaten existing designers?</h3>
                <p className="text-muted-foreground">
                  This is the question I get most from hiring managers. My answer: AI makes good designers better and reveals which "designers" were mostly executing rote tasks. The teams I build embrace AI as amplification, not replacement. That's a culture thing, and culture is what leadership shapes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">What's your technical depth?</h3>
                <p className="text-muted-foreground">
                  I ship production code in React and TypeScript. I've built MCP server integrations, orchestrated multi-agent AI systems, and implemented design-to-code automation. I'm not a full-time engineer, but I'm technical enough to bridge design and engineering without translation loss.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Remote or on-site?</h3>
                <p className="text-muted-foreground">
                  I'm based in Colorado and prefer remote or hybrid. I'm open to periodic travel for team onsites, offsites, and key meetings. For the right opportunity, I'd consider relocation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Why not stay in consulting?</h3>
                <p className="text-muted-foreground">
                  Consulting lets you parachute in, make an impact, and leave. Leadership lets you build something that lasts—a team, a culture, a way of working. I've done enough parachuting. Now I want to build.
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
            Let's Talk About Your Design Organization
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            If you're building a design team that needs to get serious about AI, I'd love to hear what you're working on—even if it's just an exploratory conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Get in Touch
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


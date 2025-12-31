import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import ResponsiveNav from "@/components/ResponsiveNav";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isPlayingForward = true;
    let animationFrameId: number;

    const playBackward = () => {
      if (!video) return;

      if (video.currentTime <= 0) {
        isPlayingForward = true;
        video.play();
        return;
      }

      video.currentTime -= 0.033; // ~30fps backward
      animationFrameId = requestAnimationFrame(playBackward);
    };

    const handleVideoEnd = () => {
      if (isPlayingForward) {
        isPlayingForward = false;
        video.pause();
        playBackward();
      }
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <ResponsiveNav currentPage="home" />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 mb-16 md:mb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            ref={videoRef}
            src="/images/home-hero.mp4"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container">
          <div className="max-w-4xl bg-slate-950/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Transforming How Design Teams Ship with AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl">
            I build the systems, workflows, and culture that enable design organizations to ship 4-6x faster—not by replacing people, but by transforming how they work together with AI.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Teams Led & Transformed</div>
              <div className="text-xs text-muted-foreground mt-1">Designers, engineers, ops</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4-6x</div>
              <div className="text-sm text-muted-foreground">Faster Design-to-Code</div>
              <div className="text-xs text-muted-foreground mt-1">With AI-augmented workflows</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25 Years</div>
              <div className="text-sm text-muted-foreground">Fortune 50 Design Leadership</div>
              <div className="text-xs text-muted-foreground mt-1">Comcast, CVS Health, Life Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">AI-Native</div>
              <div className="text-sm text-muted-foreground">Workflow Architecture</div>
              <div className="text-xs text-muted-foreground mt-1">MCP, Cursor, orchestrated agents</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Schedule a Call
              </Button>
            </Link>
            <Link href="/work">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* What I Bring to Leadership Roles */}
      <section className="bg-muted/30 py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Bring to Design Leadership</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            The rare combination of enterprise design leadership, hands-on AI workflow expertise, and a proven track record of transforming how teams work.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* AI Workflow Architecture */}
            <Card className="p-8">
              <div className="w-16 h-16 mb-6 mx-auto rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Workflow Architecture</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Orchestrated AI Agents</div>
                    <div className="text-sm">Multi-agent systems for design-to-code automation</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">MCP Server Integrations</div>
                    <div className="text-sm">Figma, Storybook, and design system tooling</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Cursor + Claude Workflows</div>
                    <div className="text-sm">Production-ready component generation in minutes</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Design Operations Excellence */}
            <Card className="p-8">
              <div className="w-16 h-16 mb-6 mx-auto rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Design Operations Excellence</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Design System Strategy</div>
                    <div className="text-sm">Token-based architecture, automated governance</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Process Transformation</div>
                    <div className="text-sm">Redesigning workflows for AI-augmented teams</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Tool Evaluation & Adoption</div>
                    <div className="text-sm">Strategic selection and org-wide rollout</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Team Leadership */}
            <Card className="p-8">
              <div className="w-16 h-16 mb-6 mx-auto rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Team Leadership</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Cross-Functional Leadership</div>
                    <div className="text-sm">Led 10+ person teams across design, eng, and ops</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Change Management</div>
                    <div className="text-sm">Driving AI adoption without disrupting delivery</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Mentorship & Growth</div>
                    <div className="text-sm">Building AI-native capabilities in existing teams</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* My Philosophy */}
      <section className="container py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Philosophy on AI + Design Teams</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-6">What Changes with AI</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                  <h4 className="font-semibold">Speed of Exploration</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  Designers can explore 10x more variations in the same time. This changes how we approach creative briefs and stakeholder presentations.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                  <h4 className="font-semibold">Design-to-Code Handoff</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  Production code generation from designs is now real. The designer-developer boundary blurs—and that's a good thing.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                  <h4 className="font-semibold">Documentation & Testing</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  Automated docs, generated tests, and living style guides become feasible. The "boring" parts of DesignOps get automated.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">What Stays Human</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <div className="font-semibold mb-1">Strategic Decisions</div>
                <div className="text-sm text-muted-foreground">
                  Which components to build, how they relate, what trade-offs to make. AI generates options, humans choose.
                </div>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="font-semibold mb-1">Taste & Quality Standards</div>
                <div className="text-sm text-muted-foreground">
                  Defining what "good" looks like, maintaining brand integrity, and knowing when AI output isn't good enough.
                </div>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="font-semibold mb-1">Team Dynamics & Culture</div>
                <div className="text-sm text-muted-foreground">
                  How teams collaborate, how decisions get made, how people grow. The human operating system matters more than ever.
                </div>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="font-semibold mb-1">User Empathy & Context</div>
                <div className="text-sm text-muted-foreground">
                  Understanding why users behave the way they do. AI can analyze patterns, but humans understand meaning.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-muted/30 py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
            Looking for Design Leadership That Gets AI
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


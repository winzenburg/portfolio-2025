import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import ResponsiveNav from "@/components/ResponsiveNav";
import PageSeo from "@/components/PageSeo";
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
      <PageSeo
        title="Ryan Winzenburg | Product Experience Leader, Enterprise B2B"
        description="Product experience leader with 25 years designing enterprise B2B systems at Fortune 50 companies. I lead product experience for complex B2B systems — from healthcare to fintech to defense."
        path="/"
        ogImage="/images/about-hero.webp"
        ogType="website"
      />
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
            I lead product experience for complex B2B systems
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl">
            25 years designing enterprise products across healthcare, financial services, telecom, and technology. I work at the intersection of product strategy, operating model, and AI-enabled execution.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">25 Years</div>
              <div className="text-sm text-muted-foreground">Enterprise B2B Experience</div>
              <div className="text-xs text-muted-foreground mt-1">Comcast, CVS Health, Life Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Fortune 50</div>
              <div className="text-sm text-muted-foreground">Product Experience Scope</div>
              <div className="text-xs text-muted-foreground mt-1">Healthcare, fintech, telecom</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-sm text-muted-foreground">Active Ventures Founded</div>
              <div className="text-xs text-muted-foreground mt-1">Winzinvest, Casimir, Foundpath</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Remote</div>
              <div className="text-sm text-muted-foreground">Wheat Ridge / Denver, CO</div>
              <div className="text-xs text-muted-foreground mt-1">Available for distributed teams</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact?intent=role">
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

      {/* What I Bring */}
      <section className="bg-muted/30 py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Bring to Product Experience Leadership</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Enterprise B2B product experience runs on three interconnected capabilities — and the work rarely separates cleanly into just one.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Product Experience Leadership */}
            <Card className="p-8">
              <div className="w-16 h-16 mb-6 mx-auto rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Product Experience Leadership</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">B2B Systems Strategy</div>
                    <div className="text-sm">Complex enterprise product decisions across stakeholder layers</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Cross-Functional Alignment</div>
                    <div className="text-sm">Design, engineering, and product working from the same model</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">User Research & Evidence</div>
                    <div className="text-sm">Decisions grounded in real enterprise user behavior</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Product Operating Model */}
            <Card className="p-8">
              <div className="w-16 h-16 mb-6 mx-auto rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Product Operating Model</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Design System Strategy</div>
                    <div className="text-sm">Token-based architecture with sustainable governance</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Design Operations</div>
                    <div className="text-sm">Process, tooling, and rituals that scale delivery</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Team Structure & Governance</div>
                    <div className="text-sm">Role clarity, decision rights, and contribution models</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* AI-enabled Execution */}
            <Card className="p-8">
              <div className="w-16 h-16 mb-6 mx-auto rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-enabled Execution</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Workflow Architecture</div>
                    <div className="text-sm">AI systems that fit into real team rhythms, not over them</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Orchestrated Tooling</div>
                    <div className="text-sm">MCP integrations, Cursor workflows, agent coordination</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Speed Without Fragility</div>
                    <div className="text-sm">AI adoption that holds up at enterprise delivery pace</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="container py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How I Think About Product Experience</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Where the real work happens</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                  <h4 className="font-semibold">The operating model before the output</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  Most product experience problems are actually operating model problems. Fix how decisions get made and the design output follows.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                  <h4 className="font-semibold">Systems, not heroics</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  Enterprise B2B doesn't scale on individual craft. It scales on design systems, decision frameworks, and team rituals that hold up under delivery pressure.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                  <h4 className="font-semibold">AI as execution depth</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  AI changes what a small, well-structured team can ship. I use it to move faster on the work that's already well-defined — not to skip the thinking.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">What I keep in the human layer</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <div className="font-semibold mb-1">Product strategy</div>
                <div className="text-sm text-muted-foreground">
                  What to build, for whom, and why now. AI generates alternatives; the judgment call stays human.
                </div>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="font-semibold mb-1">Stakeholder trust</div>
                <div className="text-sm text-muted-foreground">
                  Enterprise B2B runs on relationships with engineering, product, legal, and buyers. That's earned in person, not automated.
                </div>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="font-semibold mb-1">Quality standards</div>
                <div className="text-sm text-muted-foreground">
                  Knowing when something is good enough and when it isn't. The bar is set by the people doing the work, not the tools.
                </div>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="font-semibold mb-1">User context</div>
                <div className="text-sm text-muted-foreground">
                  Enterprise users have constraints, workflows, and politics that AI can't read. That context comes from direct research.
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
            Navigating a complex B2B product experience problem?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            If your product organization is working through a hard experience, operating model, or AI adoption problem, I'd like to hear what you're dealing with — even if it's exploratory.
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


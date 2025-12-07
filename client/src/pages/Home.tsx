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
            Turn AI Into Competitive Advantage Before Your Competitors Do
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl">
            I help VCs and executive teams transform into AI-native organizations that ship 4-6x faster, extend runway 6-12 months, and build defensible competitive moats—without the 18-month learning curve.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">$3M+</div>
              <div className="text-sm text-muted-foreground">Portfolio Value Created</div>
              <div className="text-xs text-muted-foreground mt-1">Per engagement average</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6-12mo</div>
              <div className="text-sm text-muted-foreground">Runway Extension</div>
              <div className="text-xs text-muted-foreground mt-1">Capital efficiency gains</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4-6x</div>
              <div className="text-sm text-muted-foreground">Speed to Market</div>
              <div className="text-xs text-muted-foreground mt-1">Competitive advantage</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25 Years</div>
              <div className="text-sm text-muted-foreground">Fortune 500 → Startup</div>
              <div className="text-xs text-muted-foreground mt-1">Scale + velocity proven</div>
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

      {/* Value Propositions by Audience */}
      <section className="bg-muted/30 py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Outcomes, Not Just Execution</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            I transform organizations into AI-native competitors—building sustainable competitive advantages, not just shipping faster features.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* For VCs */}
            <Card className="p-8">
              <div className="w-16 h-16 mb-6 mx-auto rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">For VCs & Board Members</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Portfolio Value Creation</div>
                    <div className="text-sm">Build AI-native moats before competitors catch up</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Capital Efficiency as Weapon</div>
                    <div className="text-sm">6-12 month runway extension through 4-6x velocity gains</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">De-Risk at Scale</div>
                    <div className="text-sm">Proven playbook across Fortune 500 and Series B-D startups</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* For VPs/C-Suite */}
            <Card className="p-8">
              <div className="w-16 h-16 mb-6 mx-auto rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">For VPs & Executive Teams</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Board-Level Impact</div>
                    <div className="text-sm">Results that matter: $2M+ annual savings, 40% faster GTM</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Career-Defining Transformation</div>
                    <div className="text-sm">Lead the AI transformation your board is demanding</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Predictable Strategic Outcomes</div>
                    <div className="text-sm">Not experiments—proven frameworks with measurable ROI</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* For Product/Design Leaders */}
            <Card className="p-8">
              <div className="w-16 h-16 mb-6 mx-auto rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">For Product & Design Leaders</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Strategic Leverage at C-Suite</div>
                    <div className="text-sm">Prove product/design ROI with board-ready metrics</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Build Without Headcount Battles</div>
                    <div className="text-sm">10x output through AI, not 10x hiring requests</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Future-Proof Your Organization</div>
                    <div className="text-sm">Sustainable competitive advantage through AI capabilities</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How I Multiply Your Team</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
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
            Ready to Build Your AI-Native Competitive Advantage?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're a VC looking to transform portfolio companies or an executive seeking board-level impact, let's explore VP/C-suite opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Schedule a Call
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


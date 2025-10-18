import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function CaseStudyCvs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}project-cvs-aetna-hero.jpg`}
            alt="CVS Aetna Health Insurance" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Traditional UX · Research · 2020
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              CVS/Aetna: Health Insurance Apps
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Restructuring applications to mirror customer perspective and improve success rates from 50% to 90%
            </p>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-12 border-b border-border/40">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-2">Client</div>
              <div className="text-2xl font-bold">CVS/Aetna</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-2">Project Type</div>
              <div className="text-2xl font-bold">Research</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-2">Year</div>
              <div className="text-2xl font-bold">2020</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Problem Statement</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-muted-foreground">
                Aetna is an enormous healthcare organization with 100's of medical experts and insurance specialists. Overtime, the consumer facing website and mobile applications began to reflect how these experts viewed healthcare and insurance rather than the customer's understanding of their services. This impacted user satisfaction with the service by making <strong>critical health information and tools hard to understand, find, and use</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objective */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">The Objective</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-muted-foreground">
                Restructure the web and mobile applications to mirror a customer's perspective of insurance and health care to help users successfully find and complete tasks. <strong>Customer success leads to healthier outcomes and cost savings for members</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">The Approach</h2>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="border-l-4 border-primary/40 pl-8">
                <h3 className="text-2xl font-bold mb-4">1. Explore the problem</h3>
                <p className="text-muted-foreground mb-6">
                  My goal was to understand the issue rather than merely assuming it. It involves speaking to and spending time with people who are affected by the issues.
                </p>
                <div className="bg-card border border-border/40 rounded-lg p-6">
                  <div className="text-sm font-semibold mb-4">Discovery methods on this project included:</div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Stakeholder interviews</li>
                    <li>• Customer interviews</li>
                    <li>• Conversations with support</li>
                    <li>• Review analytics</li>
                    <li>• Competitive analysis</li>
                    <li>• Studying analogous products</li>
                    <li>• Heuristic evaluations</li>
                    <li>• Content audit</li>
                  </ul>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="border-l-4 border-primary/40 pl-8">
                <h3 className="text-2xl font-bold mb-4">2. Decide what to work on</h3>
                <p className="text-muted-foreground mb-6">
                  The insights gathered from the discovery phase can help to define the challenge in a different way.
                </p>
                <div className="bg-card border border-border/40 rounded-lg p-6">
                  <div className="text-sm font-semibold mb-4">Definition methods used on this project included:</div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Product workshops</li>
                    <li>• Design studio workshops</li>
                    <li>• Concept model alignment (working with health insurance SMEs)</li>
                    <li>• User research on task completion expectations</li>
                  </ul>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="border-l-4 border-primary/40 pl-8">
                <h3 className="text-2xl font-bold mb-4">3. Test potential solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Give different answers to the clearly defined problem, seeking inspiration from elsewhere and co-designing with a range of different people.
                </p>
                <div className="bg-card border border-border/40 rounded-lg p-6">
                  <div className="text-sm font-semibold mb-4">Development methods and deliverables used on this project included:</div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Lean MVPs</li>
                    <li>• Sitemaps</li>
                    <li>• Tree tests</li>
                    <li>• Workflow diagrams</li>
                    <li>• Lo-fi sketches</li>
                    <li>• Mid-fi prototypes</li>
                    <li>• Usability tests</li>
                    <li>• Solution tests</li>
                    <li>• Competitive/comparative analysis of popular mobile apps</li>
                    <li>• Design Studio workshop for rough concepts</li>
                  </ul>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="border-l-4 border-primary/40 pl-8">
                <h3 className="text-2xl font-bold mb-4">4. Refine final solution</h3>
                <p className="text-muted-foreground mb-6">
                  Testing out different solutions at small-scale, rejecting those that will not work and improving the ones that will.
                </p>
                <div className="bg-card border border-border/40 rounded-lg p-6">
                  <div className="text-sm font-semibold mb-4">Delivery methods and deliverables used on this project include:</div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Type scale</li>
                    <li>• Design patterns</li>
                    <li>• Mock-ups</li>
                    <li>• Critiques</li>
                    <li>• Annotated designs</li>
                    <li>• Analytics</li>
                    <li>• A/B tests</li>
                    <li>• Moderated and unmoderated usability tests</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">The Outcome</h2>
            <div className="bg-card border-2 border-primary/40 rounded-lg p-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">50% → 90%</div>
                <div className="text-xl text-muted-foreground">Success Rate Improvement</div>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-muted-foreground">
                By the end of the research, workshops, and user research we had a solution that worked much better for the user and the business. Success rates went from <strong>below 50% in some parts of the application to over 90%</strong>. This was a dramatic improvement in delivering value to the customer at the end of the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Key Learnings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border/40 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Customer Perspective Matters</h3>
                <p className="text-muted-foreground">
                  Applications must reflect how customers think about services, not how internal experts organize information.
                </p>
              </div>
              <div className="bg-card border border-border/40 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Cross-functional Collaboration</h3>
                <p className="text-muted-foreground">
                  Working with SMEs, stakeholders, and customers throughout the process ensures alignment and buy-in.
                </p>
              </div>
              <div className="bg-card border border-border/40 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Iterative Testing</h3>
                <p className="text-muted-foreground">
                  Multiple rounds of usability testing at different fidelities helped refine the solution before major investment.
                </p>
              </div>
              <div className="bg-card border border-border/40 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Measurable Impact</h3>
                <p className="text-muted-foreground">
                  Tracking success rates before and after demonstrated clear ROI and validated the design decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Interested in Similar Results?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              I bring the same rigorous, user-centered approach to every project—whether traditional UX or AI-augmented workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work">
                <Button variant="outline" size="lg">
                  ← Back to Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg">
                  Let's Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


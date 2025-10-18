import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function CaseStudyBuildout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}project-buildout-hero.jpg`}
            alt="BuildOut Commercial Real Estate" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Traditional UX · Design · 2023
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              BuildOut: Commercial Real Estate App
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Streamlining workflows for commercial real estate brokers to focus on closing deals instead of research
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
              <div className="text-2xl font-bold">BuildOut</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-2">Project Type</div>
              <div className="text-2xl font-bold">Design</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-2">Year</div>
              <div className="text-2xl font-bold">2023</div>
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
                Commercial real estate brokers are finding it hard to stay profitable in a softening economy. CRE doesn't have a common listing service like residential real estate has with the multiple listing service (MLS). With the lack of a MLS, they spend <strong>70-80% of their day</strong> looking for and researching clients and properties. This is time better spent meeting with clients and showing properties which ultimately leads to closing deals.
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
                Our goal is to understand how commercial real estate brokers research and prospect new clients and nurture existing relationships. Since each deal can be worth <strong>$10k's to $10M's</strong>, any improvement to streamlining the deal cycle will easily be worth the price of a software subscription.
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
                  </ul>
                </div>
              </div>

              {/* Prospect/Nurture Interface Screenshot */}
              <div className="my-8 rounded-lg overflow-hidden border border-border/20">
                <img 
                  src={`${import.meta.env.BASE_URL}buildout-prospect-nurture.png`}
                  alt="BuildOut prospect and nurture workflow interface"
                  className="w-full"
                />
                <div className="bg-card px-4 py-3 text-sm text-muted-foreground">
                  <strong className="text-foreground">Prospect & Nurture Workflow:</strong> Streamlined interface helping brokers manage client relationships and focus on closing deals
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
                  </ul>
                </div>
              </div>

              {/* Map View Screenshot */}
              <div className="my-8 rounded-lg overflow-hidden border border-border/20">
                <img 
                  src={`${import.meta.env.BASE_URL}buildout-map-view.png`}
                  alt="BuildOut map view showing property locations"
                  className="w-full"
                />
                <div className="bg-card px-4 py-3 text-sm text-muted-foreground">
                  <strong className="text-foreground">Interactive Map View:</strong> Geospatial visualization helping brokers quickly identify and research commercial properties
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
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-muted-foreground mb-6">
                The product is currently in beta with a general release planned for summer 2023. Based upon our work with customers along the way, the early feedback has been positive.
              </p>
              <p className="text-xl leading-relaxed text-muted-foreground">
                The biggest challenge for the product, in the long run, will be the data the company is able to supply to their customers. Even without the data, the product represents a <strong>major improvement in a customer's workflow and business</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
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


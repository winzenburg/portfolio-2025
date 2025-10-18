import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-xl font-semibold tracking-tight hover:text-primary transition-colors">
                Ryan Winzenburg
              </a>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/work">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Work
                </a>
              </Link>
              <Link href="/methodology">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Methodology
                </a>
              </Link>
              <Link href="/about">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-sm text-foreground font-medium transition-colors">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Let's Build Something Exceptional
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              I'm currently available for select Principal/VP Product Design roles where I can deliver massive business value through my AI-augmented workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">
              What I Bring to Your Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">84x</div>
                <div className="text-sm text-muted-foreground">Faster delivery than traditional teams</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$1M+</div>
                <div className="text-sm text-muted-foreground">Cost savings per project</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25 Years</div>
                <div className="text-sm text-muted-foreground">UX strategy expertise</div>
              </div>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I replace 7-person teams while delivering enterprise-grade quality in weeks, not months. My AI-augmented workflow combines deep UX expertise with advanced orchestration to create massive business value.
              </p>
              <p>
                Whether you need a production-ready design system, a validated product prototype, or strategic UX leadership, I can accelerate your product development at unprecedented speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Opportunities */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">
              Ideal Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border/40 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Industries</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Enterprise SaaS</li>
                  <li>• Fintech & Financial Services</li>
                  <li>• Healthcare Technology</li>
                  <li>• B2B Platforms</li>
                  <li>• Design System Initiatives</li>
                </ul>
              </div>
              <div className="bg-card border border-border/40 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Role Types</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Principal Product Designer</li>
                  <li>• VP of Product Design</li>
                  <li>• Head of Design Systems</li>
                  <li>• Chief Design Officer</li>
                  <li>• Product Design Leadership</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Compensation Range</h3>
              <p className="text-muted-foreground">
                $220K - $280K base salary, plus equity and benefits. Open to discussing performance-based compensation structures that align with the massive value I create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border border-border/40 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <a href="mailto:ryanwinzenburg@gmail.com" className="text-primary hover:underline">
                  ryanwinzenburg@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  Best for detailed inquiries and project discussions
                </p>
              </div>
              <div className="bg-card border border-border/40 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-3">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/rwinzenburg/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  linkedin.com/in/rwinzenburg
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  Connect for professional networking and opportunities
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                I typically respond within 24 hours. Let's discuss how I can accelerate your product development and create massive business value for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:ryanwinzenburg@gmail.com">
                  <Button size="lg" className="text-base w-full sm:w-auto">
                    Send Email
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/rwinzenburg/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="text-base w-full sm:w-auto">
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">
              What to Include in Your Message
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">For Hiring Managers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Brief description of your company and product</li>
                  <li>• Current design/development challenges</li>
                  <li>• Role details and compensation range</li>
                  <li>• Timeline for hiring decision</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">For Project Inquiries</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Project scope and objectives</li>
                  <li>• Timeline and budget constraints</li>
                  <li>• Expected deliverables</li>
                  <li>• Any specific technical requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>© 2025 Ryan Winzenburg. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/rwinzenburg/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/winzenburg" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="mailto:ryanwinzenburg@gmail.com" className="hover:text-foreground transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


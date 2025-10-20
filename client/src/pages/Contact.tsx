import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nRole: ${formData.role}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:ryan@winzenburg.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
                <span className="text-sm font-medium hover:text-primary transition-colors">About</span>
              </Link>
              <Link href="/services">
                <span className="text-sm font-medium hover:text-primary transition-colors">Services</span>
              </Link>
              <Link href="/articles">
                <span className="text-sm font-medium hover:text-primary transition-colors">Articles</span>
              </Link>
              <Link href="/contact">
                <span className="text-sm font-medium text-primary">Contact</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Let's Discuss How I Can<br />Help Your Team
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Whether you're looking to ship 4-6x faster, extend your runway, or scale your design team without massive hiring—let's talk about how I can help.
        </p>
      </section>

      {/* Contact Form */}
      <section className="container pb-24">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
          {/* Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Schedule a Discovery Call</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company *
                </label>
                <Input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-2">
                  Your Role *
                </label>
                <Input
                  id="role"
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g., VP Product, Head of Design, Partner at VC"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  What challenge are you trying to solve? *
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your product, timeline, and what success looks like..."
                  rows={6}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Who I Work With</h2>
              <div className="space-y-6">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> VCs & Investors</h3>
                  <p className="text-sm text-muted-foreground">
                    Help portfolio companies ship faster, extend runway, and de-risk product development. Typical engagement: 4-12 weeks, $50K-200K, 6-10x ROI.
                  </p>
                </Card>
                <Card className="p-4">
                  <h3 className="font-semibold mb-2"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> Product Leaders</h3>
                  <p className="text-sm text-muted-foreground">
                    Accelerate shipping velocity, unblock design and engineering teams, deliver predictable outcomes. Typical engagement: Design systems, product redesigns, rapid prototyping.
                  </p>
                </Card>
                <Card className="p-4">
                  <h3 className="font-semibold mb-2"><svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> Design Leaders</h3>
                  <p className="text-sm text-muted-foreground">
                    Scale design without massive hiring, build systems that last, prove design's business impact. Typical engagement: Design systems, AI workflow training, governance setup.
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Engagement Options</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Project-Based Consulting</h3>
                  <p className="text-sm text-muted-foreground">
                    4-12 week engagements for design systems, product redesigns, or strategic UX initiatives. $35K-200K depending on scope and company stage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Retainer</h3>
                  <p className="text-sm text-muted-foreground">
                    Ongoing partnership for continuous product development and team support. $18K-40K/month for startups, $35K-80K/month for enterprise.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Strategic Leadership Roles</h3>
                  <p className="text-sm text-muted-foreground">
                    Principal, Head of, or VP Product Design roles where I can deliver massive business value. Remote-first, based in Colorado.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/ryanwinzenburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/winzenburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>ryan@winzenburg.com</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">What to Expect</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• I typically respond within 24 hours</li>
                <li>• Discovery calls are 30-45 minutes</li>
                <li>• I'll share relevant case studies and ROI examples</li>
                <li>• No obligation—just an honest conversation about fit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Recent Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$3M+</div>
                <div className="text-sm text-muted-foreground">Value Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4-6x</div>
                <div className="text-sm text-muted-foreground">Faster Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">6-10x</div>
                <div className="text-sm text-muted-foreground">Typical ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Ryan Winzenburg. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/ryanwinzenburg" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/winzenburg" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


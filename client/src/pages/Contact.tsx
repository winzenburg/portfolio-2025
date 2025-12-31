import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link, useSearch } from "wouter";
import { useState, useEffect } from "react";
import { FileText, X } from "lucide-react";
import ResponsiveNav from "@/components/ResponsiveNav";

// Map of playbook IDs to their display info
const PLAYBOOK_INFO: Record<string, { title: string; article: string; articleSlug: string }> = {
  "micro-interactions": {
    title: "Micro-Interactions Implementation Guide",
    article: "The Micro-Interactions: Apple-Style Motion That Guides",
    articleSlug: "the-micro-interactions-apple-style-motion-that-guides"
  },
  "security-bug-gate": {
    title: "Security & Bug Gate Templates",
    article: "The Security and Bug Gate: Two-Tier Code Review For AI",
    articleSlug: "the-security-and-bug-gate-two-tier-code-review-for-ai"
  },
  "portfolio-template": {
    title: "Portfolio Scoring Template",
    article: "The Portfolio Approach: Managing Multiple Bets",
    articleSlug: "the-portfolio-approach-managing-multiple-bets-killing-fast-prioritizing-by-expected-value"
  },
  "validation-playbook": {
    title: "Validation Playbook & Scoring Sheets",
    article: "The Solution: A Dual-Filter Validation Framework",
    articleSlug: "the-solution-a-dual-filter-validation-framework"
  },
  "context7-starter": {
    title: "Context7 Starter Kit",
    article: "Never Ship Outdated Code: How We Use Context7",
    articleSlug: "never-ship-outdated-code-how-we-use-context7-to-query-live-docs"
  },
  "complete-system": {
    title: "Complete System Templates & Playbooks",
    article: "The Results: What We've Learned Building This System",
    articleSlug: "the-results-what-weve-learned-building-this-system"
  },
  "complete-framework": {
    title: "Complete SaaS Framework",
    article: "The Problem: Why Most SaaS Startups Fail Before They Even Start",
    articleSlug: "the-problem-why-most-saas-startups-fail-before-they-even-start"
  }
};

export default function Contact() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const playbookId = params.get("playbook");
  const playbookInfo = playbookId ? PLAYBOOK_INFO[playbookId] : null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
    playbook: ""
  });

  // Set playbook in form data when URL parameter is present
  useEffect(() => {
    if (playbookInfo) {
      setFormData(prev => ({
        ...prev,
        playbook: playbookInfo.title,
        message: prev.message || `I'd like to receive the "${playbookInfo.title}" from your article.`
      }));
    }
  }, [playbookInfo]);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString()
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          message: "",
          playbook: ""
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please email me directly at ryan@winzenburg.com');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <ResponsiveNav currentPage="contact" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 mb-16 md:mb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/contact-hero.png"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center bg-slate-950/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Build Your Competitive Advantage
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Whether you're a VC seeking $3M+ portfolio value gains, an executive targeting 6-12 month runway extensions, or a leader building AI-native capabilities—let's discuss measurable outcomes.
          </p>
        </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
            <>
            <h2 className="text-2xl font-bold mb-6">
              {playbookInfo ? "Request Your Playbook" : "Start a Strategic Conversation"}
            </h2>

            {/* Playbook Request Indicator */}
            {playbookInfo && (
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm text-blue-300 mb-1">Requesting playbook:</div>
                    <div className="font-medium text-white">{playbookInfo.title}</div>
                    <div className="text-sm text-slate-400 mt-1">
                      From: <Link href={`/articles/${playbookInfo.articleSlug}`} className="text-blue-400 hover:text-blue-300">{playbookInfo.article}</Link>
                    </div>
                  </div>
                  <Link href="/contact">
                    <button type="button" className="text-slate-400 hover:text-white transition-colors" aria-label="Clear playbook request">
                      <X className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="playbook" value={formData.playbook} />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
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
                  name="email"
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
                  name="company"
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
                  name="role"
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g., VC Partner, VP Product, C-Suite Executive"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell me about your strategic objectives *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What competitive advantages are you seeking? What board-level impact do you need to deliver?"
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
            </>
            )}
          </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/ryanwinzenburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>ryan@winzenburg.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>720.515.7182</span>
                </div>
                </div>
              </div>

            <div className="p-6 bg-slate-800/50 rounded-lg">
              <h3 className="font-semibold mb-2">What to Expect</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• I typically respond within 24 hours</li>
                <li>• Strategic conversations are 30-45 minutes</li>
                <li>• I'll share portfolio impact examples and board-ready metrics</li>
                <li>• No obligation—just an honest discussion about strategic fit</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


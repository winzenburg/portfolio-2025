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
          25 Years of Experience,<br />Reimagined
        </h1>
      </section>

      {/* Story */}
      <section className="container pb-24">
        <div className="max-w-4xl space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground">
              For over two decades, I have been at the forefront of user experience, leading design and strategy for some of the nation's largest companies, including <strong>Comcast, CVS Health, and Life Time Fitness</strong>. My career has been dedicated to a single principle: building digital products that are effective, efficient, and user-centric. I have honed my skills in the trenches of enterprise-scale projects, mastering the art of UX research, information architecture, interaction design, and front-end development.
            </p>
            <p className="text-lg text-muted-foreground">
              But the world is changing. The tools we use are evolving at an exponential rate. About a year ago, I saw the potential for AI not as a threat to our craft, but as the ultimate force multiplier. I didn't just start using AI; I began a rigorous journey to deconstruct my entire workflow and rebuild it from the ground up, integrating AI as a core component.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, I don't just design or code. I orchestrate a symphony of AI agents and advanced tools, guided by my 25 years of accumulated knowledge. This allows me to deliver with the speed and scale of a large, multi-disciplinary team, while maintaining the quality and strategic insight that only comes from deep experience. My goal is not to replace human judgment, but to augment it, to execute on proven strategies at a velocity that was previously unimaginable.
            </p>
            <p className="text-lg text-muted-foreground">
              This new paradigm allows me to focus on what truly matters: solving the right problems, delighting users, and creating massive business value. I handle the work of a 7-person team, not by cutting corners, but by multiplying my effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Core Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">UX Strategy & Research</h3>
              <p className="text-muted-foreground">
                Grounding every decision in user needs and business goals through heuristic analysis, user surveys, focus groups, and data-driven insights.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Design Systems Architecture</h3>
              <p className="text-muted-foreground">
                Building scalable, enterprise-grade design systems from the ground up, with a focus on token-based architecture, accessibility, and developer experience.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">AI-Augmented Development</h3>
              <p className="text-muted-foreground">
                Leveraging a suite of AI tools (Manus, Claude Code, Cursor) to write high-quality, production-ready code in React, Angular, and TypeScript at unprecedented speed.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Automated Testing & QA</h3>
              <p className="text-muted-foreground">
                Implementing comprehensive testing strategies, including E2E tests with Playwright and accessibility audits with axe-core, to ensure enterprise-grade quality.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Technical Documentation</h3>
              <p className="text-muted-foreground">
                Generating extensive, multi-section documentation for every component and workflow, making systems maintainable and easy to adopt.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Product Management</h3>
              <p className="text-muted-foreground">
                Bridging the gap between ideation and validation, ensuring that what is built is not only well-designed but also solves a real-world problem.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-24">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Is the 84x speed claim real?</h3>
              <p className="text-muted-foreground">
                Yes, and it's based on concrete data. A project like the Enterprise SaaS Design System, with 48 components, extensive documentation, and full testing, traditionally takes a 7-person team 12+ months (84 person-months). I delivered it in 4 weeks (1 person-month). The math is 84 / 1 = 84x faster.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">How can one person replace a 7-person team?</h3>
              <p className="text-muted-foreground">
                I don't just replace them; I integrate their roles. My AI-augmented workflow allows me to perform the functions of a UX Researcher, Designer, Frontend Developer, QA Engineer, Accessibility Expert, Technical Writer, and more. AI handles the rote execution, while my 25 years of experience provides the strategic direction, quality control, and taste.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">What about quality? Doesn't AI make mistakes?</h3>
              <p className="text-muted-foreground">
                AI, unguided, is unreliable. The key is my role as the expert practitioner. I guide the AI, review its output, and enforce rigorous quality standards. The metrics speak for themselves: 100% WCAG 2.2 AA compliance, zero `any` types in TypeScript, and 77% E2E test coverage on complex components. The quality is not just maintained; it's often enhanced due to the ability to automate checks and balances.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">What types of projects are NOT a good fit for your approach?</h3>
              <p className="text-muted-foreground">
                My workflow is optimized for speed and quality in the digital product space. It may be less suitable for projects involving highly sensitive, classified, or air-gapped data where the use of cloud-based AI tools is prohibited. Additionally, the greatest value is realized in complex projects (like design systems or multi-faceted prototypes) where the acceleration is most pronounced.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">What's your ideal role?</h3>
              <p className="text-muted-foreground">
                I thrive in high-impact Principal, Head of, or VP-level roles where I can take ownership of the product lifecycle from ideation to validated prototype. My goal is to work with forward-thinking companies that value speed, quality, and massive ROI, and are ready to embrace a new way of building products.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">What's your availability?</h3>
              <p className="text-muted-foreground">
                I'm currently available for select Principal/VP Product Design roles ($220K-$280K range) where I can deliver massive business value. I'm based in Colorado but open to remote opportunities with forward-thinking companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Talk About Your Next Project
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            If you're looking for someone who can deliver enterprise-grade results at startup speed, let's connect.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </Link>
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
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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


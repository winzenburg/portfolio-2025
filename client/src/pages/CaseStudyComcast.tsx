import React from 'react';
import { Link } from 'wouter';
import HeroImage from "@/components/HeroImage";
import PageSeo from "@/components/PageSeo";

const CASE_STUDY_PATH = "/case-study/comcast-design-system";
const CASE_STUDY_TITLE = "Comcast Design System Case Study | Ryan Winzenburg";
const CASE_STUDY_DESCRIPTION =
  "Enterprise design system work at Comcast: components, foundations, and governance for multi-product delivery.";
const CASE_STUDY_OG_IMAGE = "/project-comcast-design-system-hero.webp";
const ILLUSTRATIVE_CAPTION =
  "Illustrative recreation; no Comcast screens, tokens or data shown.";

const caseStudyJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://winzenburg.com/" },
      { "@type": "ListItem", position: 2, name: "Work", item: "https://winzenburg.com/work" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Comcast Design System",
        item: "https://winzenburg.com/case-study/comcast-design-system",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: "Comcast Design System Case Study",
    description: CASE_STUDY_DESCRIPTION,
    url: "https://winzenburg.com/case-study/comcast-design-system",
    image: "https://winzenburg.com/project-comcast-design-system-hero.webp",
  },
];

const CaseStudyComcast: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSeo
        title={CASE_STUDY_TITLE}
        description={CASE_STUDY_DESCRIPTION}
        path={CASE_STUDY_PATH}
        ogImage={CASE_STUDY_OG_IMAGE}
        ogType="article"
        jsonLd={caseStudyJsonLd}
      />
      {/* Back Link */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/work" className="flex items-center gap-2 px-4 py-2 bg-muted/80 backdrop-blur-sm border border-border/50 rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back to Work</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="studio-case-hero relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <HeroImage
            src="/project-comcast-design-system.webp"
            alt="Illustrative recreation of an enterprise design system cover; no Comcast screens, tokens or data shown."
            sizes="100vw"
            className="h-full w-full object-cover opacity-40"
          />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-6">
            <span className="text-green-700 text-sm font-medium">Supporting Project · 2024</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6">
            Comcast Business Design System
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            I owned the digital design system at Comcast Business. 62 components built in code, so designers could ship consistent prototypes without writing production UI themselves.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-muted backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-green-700 mb-2">4 weeks</div>
              <div className="text-sm text-foreground/70">vs. 12+ months</div>
            </div>
            <div className="bg-muted backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-green-700 mb-2">62</div>
              <div className="text-sm text-foreground/70">Components</div>
            </div>
            <div className="bg-muted backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-green-700 mb-2">171K+</div>
              <div className="text-sm text-foreground/70">Lines of Code</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Comcast Business needed a comprehensive design system to enable their product teams to build higher-quality prototypes at significantly faster pace. The existing workflow required designers to manually create every component and page in Figma, leading to inconsistencies, slow iteration cycles, and difficulty maintaining design standards across multiple product lines.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The design team consisted of approximately 10 non-technical individuals who needed a system that was both powerful and accessible. The solution couldn't require deep technical knowledge to use, yet it needed to produce production-ready code that engineering teams could implement with confidence. This dual requirement, accessibility for designers, rigor for developers, made the project particularly challenging.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Additionally, as a Fortune 100 company, Comcast Business required enterprise-grade quality standards. The design system needed to support WCAG 2.1 AA accessibility compliance, provide comprehensive documentation, and scale to support hundreds of product designers and developers across the organization.
            </p>
          </div>
        </section>

        {/* How I built it in four weeks */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">How I built it in four weeks</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-muted-foreground leading-relaxed">
              I owned the digital design system at Comcast Business. I built the system in 4 weeks, using AI to draft components and documentation while I set the architecture and reviewed the output. 62 components were built in code, along with more than 171,000 lines of supporting system code.
            </p>
          </div>

          {/* Token architecture recreation */}
          <div className="mb-8 rounded-lg overflow-hidden border border-green-500/30">
            <img loading="lazy" 
              src={`${import.meta.env.BASE_URL}comcast-ds-colors.webp`}
              alt="Illustrative recreation of design-token architecture across primitive, semantic, and component tiers; no Comcast screens, tokens or data shown."
              className="w-full"
            />
            <div className="bg-muted p-4 text-sm text-muted-foreground">
              Token architecture across primitive, semantic, and component tiers. {ILLUSTRATIVE_CAPTION}
            </div>
          </div>

          <div className="space-y-6">
            {/* Week 1 */}
            <div className="bg-muted border border-green-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xl">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-green-700">Week 1: Foundation & Token System</h3>
                  <p className="text-muted-foreground mb-3">
                    Established comprehensive token system including colors, typography, spacing, shadows, and borders. Collaborated with design team to understand brand guidelines and usage patterns. Built token infrastructure with Tailwind CSS configuration, ensuring 100% token compliance from the start.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Key Decision:</strong> Use Tailwind CSS for designer-friendly class names and rapid prototyping
                  </div>
                </div>
              </div>
            </div>

            {/* Week 2 */}
            <div className="bg-muted border border-green-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xl">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-green-700">Week 2: Primitive Components</h3>
                  <p className="text-muted-foreground mb-3">
                    Built 38 primitive components (buttons, inputs, cards, badges, etc.) following atomic design principles. Implemented comprehensive prop interfaces for maximum flexibility while maintaining design consistency.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Focus:</strong> Stable primitives that patterns and product teams could compose without forking styles
                  </div>
                </div>
              </div>
            </div>

            {/* Contribution / governance recreation */}
            <div className="mb-6 rounded-lg overflow-hidden border border-green-500/30">
              <img loading="lazy" 
                src={`${import.meta.env.BASE_URL}comcast-ds-icons.webp`}
                alt="Illustrative recreation of a design-system contribution flow from propose to release; no Comcast screens, tokens or data shown."
                className="w-full"
              />
              <div className="bg-muted p-4 text-sm text-muted-foreground">
                Contribution model: propose, review, build, release. {ILLUSTRATIVE_CAPTION}
              </div>
            </div>

            {/* Week 3 */}
            <div className="bg-muted border border-green-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xl">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-green-700">Week 3: Pattern Components & Composition</h3>
                  <p className="text-muted-foreground mb-3">
                    Developed 24 pattern components (navigation, forms, data tables, modals, etc.) by composing primitives. Used AI to generate multiple layout variations and interaction patterns. Ensured all patterns followed accessibility best practices and responsive design principles.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Scale:</strong> 24 complex patterns built by composing 38 primitive components
                  </div>
                </div>
              </div>
            </div>

            {/* Week 4 */}
            <div className="bg-muted border border-green-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xl">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-green-700">Week 4: Documentation & Deployment</h3>
                  <p className="text-muted-foreground mb-3">
                    Created comprehensive documentation for all 62 components. Generated usage examples, accessibility guidelines, and best practices. Set up automated deployment pipeline and conducted training sessions with design team to ensure successful adoption.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Outcome:</strong> Production-ready system deployed and actively used by design team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Deliverables */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Deliverables</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-muted border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-green-700">Component Library</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>62 total components built in code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>38 primitive components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>24 pattern components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>171,000+ lines of code</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-green-700">Contribution Model</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>Propose → review → build → release path</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>Shared intake for new patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>Design and engineering paired ownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>Versioned releases instead of one-off forks</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-green-700">Token System</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>100% token compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>Tailwind CSS configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>Designer-friendly class names</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>Comprehensive token documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-green-700">Quality & Compliance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>WCAG 2.1 AA compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>Responsive design patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>Cross-browser compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  <span>Production-ready code quality</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'PostCSS'].map(tech => (
                <span key={tech} className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* The Impact */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Impact</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Designers now build high-fidelity prototypes in hours instead of days, and engineering works from production-ready code. The system is in production across several Comcast Business product lines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-muted border border-border rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">Shared</div>
              <div className="text-sm font-medium text-foreground mb-3">Component library</div>
              <p className="text-sm text-muted-foreground">
                Used in production across Comcast Business product lines
              </p>
            </div>

            <div className="bg-muted border border-border rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">10x</div>
              <div className="text-sm font-medium text-foreground mb-3">Faster Prototyping</div>
              <p className="text-sm text-muted-foreground">
                Design team builds prototypes in hours, not days
              </p>
            </div>

            <div className="bg-muted border border-border rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">Fortune 100</div>
              <div className="text-sm font-medium text-foreground mb-3">Production Use</div>
              <p className="text-sm text-muted-foreground">
                Actively used across multiple product lines
              </p>
            </div>
          </div>

          
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">Lessons Learned</h2>
          
          <div className="space-y-6">
            <div className="bg-muted border-l-4 border-green-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-green-700">Designer Accessibility is Critical</h3>
              <p className="text-muted-foreground">
                The decision to use Tailwind CSS was strategic. While it added some complexity to the build process, it made the system dramatically more accessible to non-technical designers. They could read the class names and understand what they did, making it easier to learn and adopt the system. This accessibility was essential for achieving organization-wide adoption.
              </p>
            </div>

            <div className="bg-muted border-l-4 border-green-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-green-700">Governance Beats One-Off Variants</h3>
              <p className="text-muted-foreground">
                Without a clear propose → review → build → release path, teams recreate the same pattern under a new name. Pairing design and engineering ownership on each contribution kept the library coherent as more product teams adopted it.
              </p>
            </div>

            <div className="bg-muted border-l-4 border-green-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-green-700">Atomic Design Scales Efficiently</h3>
              <p className="text-muted-foreground">
                Building 38 primitive components first, then composing them into 24 pattern components, proved to be an efficient architecture. Changes to primitives automatically propagate to patterns, reducing maintenance burden. This composability also makes it easy to create new patterns by combining existing primitives in novel ways.
              </p>
            </div>

            <div className="bg-muted border-l-4 border-green-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-green-700">Training Accelerates Adoption</h3>
              <p className="text-muted-foreground">
                The most sophisticated design system is worthless if people don't use it. Investing time in training sessions with the design team was critical for adoption. By showing them how to use the system effectively and answering their questions in real-time, we ensured the system became part of their daily workflow rather than sitting unused.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg p-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-4">
            A design system about to get funded
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Before you commit a year of budget to it, I can help you decide what it has to prove first and what a first version should include.
          </p>
          <Link href="/contact?intent=consulting" className="inline-block px-8 py-3 bg-green-500 hover:bg-green-400 text-foreground font-semibold rounded-lg transition-colors">
              Talk through your product bet
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyComcast;

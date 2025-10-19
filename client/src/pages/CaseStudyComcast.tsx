import React from 'react';
import { Link } from 'wouter';

const CaseStudyComcast: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/project-comcast-design-system.png" 
          alt="Comcast Business Design System"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-6">
            <span className="text-green-400 text-sm font-medium">Supporting Project · 2024</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6">
            Comcast Business Design System
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            171,000+ lines: 62 components, 826 icons in 4 weeks for Fortune 100 production use
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">4 weeks</div>
              <div className="text-sm text-gray-400">vs. 12+ months</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">~$1.03M</div>
              <div className="text-sm text-gray-400">Value Created</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">171K+</div>
              <div className="text-sm text-gray-400">Lines of Code</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              Comcast Business needed a comprehensive design system to enable their product teams to build higher-quality prototypes at significantly faster pace. The existing workflow required designers to manually create every component and page in Figma, leading to inconsistencies, slow iteration cycles, and difficulty maintaining design standards across multiple product lines.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The design team consisted of approximately 10 non-technical individuals who needed a system that was both powerful and accessible. The solution couldn't require deep technical knowledge to use, yet it needed to produce production-ready code that engineering teams could implement with confidence. This dual requirement—accessibility for designers, rigor for developers—made the project particularly challenging.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Additionally, as a Fortune 100 company, Comcast Business required enterprise-grade quality standards. The design system needed to support WCAG 2.1 AA accessibility compliance, provide comprehensive documentation, and scale to support hundreds of product designers and developers across the organization.
            </p>
          </div>
        </section>

        {/* The Force Multiplier Approach */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Force Multiplier Approach</h2>
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              I delivered a production-ready design system in 4 weeks by leveraging my AI-augmented workflow to build at unprecedented scale. The system includes 62 components, 826 type-safe icons, and over 171,000 lines of code—a scope that would traditionally require a large team working for over a year.
            </p>
          </div>

          {/* Foundation Screenshot */}
          <div className="mb-8 rounded-lg overflow-hidden border border-green-500/30">
            <img 
              src={`${import.meta.env.BASE_URL}comcast-ds-colors.png`}
              alt="Comcast Design System Color Foundation"
              className="w-full"
            />
            <div className="bg-white/5 p-4 text-sm text-gray-400">
              Complete color system with semantic tokens, brand colors, and accessible color ramps
            </div>
          </div>

          <div className="space-y-6">
            {/* Week 1 */}
            <div className="bg-white/5 border border-green-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 font-bold text-xl">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-green-400">Week 1: Foundation & Token System</h3>
                  <p className="text-gray-300 mb-3">
                    Established comprehensive token system including colors, typography, spacing, shadows, and borders. Collaborated with design team to understand brand guidelines and usage patterns. Built token infrastructure with Tailwind CSS configuration, ensuring 100% token compliance from the start.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Key Decision:</strong> Use Tailwind CSS for designer-friendly class names and rapid prototyping
                  </div>
                </div>
              </div>
            </div>

            {/* Week 2 */}
            <div className="bg-white/5 border border-green-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 font-bold text-xl">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-green-400">Week 2: Primitive Components & Icons</h3>
                  <p className="text-gray-300 mb-3">
                    Built 38 primitive components (buttons, inputs, cards, badges, etc.) following atomic design principles. Created type-safe icon system with 826 icons, ensuring consistent sizing and coloring. Implemented comprehensive prop interfaces for maximum flexibility while maintaining design consistency.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Innovation:</strong> Type-safe icon system prevents runtime errors and improves developer experience
                  </div>
                </div>
              </div>
            </div>

            {/* Icon Library Screenshot */}
            <div className="mb-6 rounded-lg overflow-hidden border border-green-500/30">
              <img 
                src={`${import.meta.env.BASE_URL}comcast-ds-icons.png`}
                alt="Comcast Design System Icon Library"
                className="w-full"
              />
              <div className="bg-white/5 p-4 text-sm text-gray-400">
                Interactive icon picker with 826 type-safe icons, searchable and categorized
              </div>
            </div>

            {/* Week 3 */}
            <div className="bg-white/5 border border-green-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 font-bold text-xl">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-green-400">Week 3: Pattern Components & Composition</h3>
                  <p className="text-gray-300 mb-3">
                    Developed 24 pattern components (navigation, forms, data tables, modals, etc.) by composing primitives. Used AI to generate multiple layout variations and interaction patterns. Ensured all patterns followed accessibility best practices and responsive design principles.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Scale:</strong> 24 complex patterns built by composing 38 primitive components
                  </div>
                </div>
              </div>
            </div>

            {/* Component Examples Screenshot */}
            <div className="mb-6 rounded-lg overflow-hidden border border-green-500/30">
              <img 
                src={`${import.meta.env.BASE_URL}comcast-ds-components.png`}
                alt="Comcast Design System Component Examples"
                className="w-full"
              />
              <div className="bg-white/5 p-4 text-sm text-gray-400">
                Button component showing all variants: Primary, Secondary, Ghost, Destructive, and Link styles
              </div>
            </div>

            {/* Week 4 */}
            <div className="bg-white/5 border border-green-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 font-bold text-xl">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-green-400">Week 4: Documentation & Deployment</h3>
                  <p className="text-gray-300 mb-3">
                    Created comprehensive Storybook documentation for all 62 components. Generated usage examples, accessibility guidelines, and best practices. Set up automated deployment pipeline and conducted training sessions with design team to ensure successful adoption.
                  </p>
                  <div className="text-sm text-gray-400">
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
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-green-400">Component Library</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>62 total components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>38 primitive components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>24 pattern components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>171,000+ lines of code</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-green-400">Icon System</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>826 type-safe icons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Consistent sizing system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Token-based coloring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>TypeScript interfaces prevent errors</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-green-400">Token System</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>100% token compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Tailwind CSS configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Designer-friendly class names</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Comprehensive token documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-green-400">Quality & Compliance</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>WCAG 2.1 AA compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Responsive design patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Cross-browser compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Production-ready code quality</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['React 18', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Vite', 'PostCSS'].map(tech => (
                <span key={tech} className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* The Impact */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Impact</h2>
          
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              The Comcast Business Design System transformed how the design team works. Designers can now build high-fidelity prototypes in hours rather than days, and the production-ready code means engineering can implement designs with confidence. The system is actively used in production across multiple Comcast Business product lines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">~$1.03M</div>
              <div className="text-sm text-gray-400 mb-3">Cost Savings</div>
              <p className="text-xs text-gray-500">
                Large team eliminated (84 person-months saved)
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">10x</div>
              <div className="text-sm text-gray-400 mb-3">Faster Prototyping</div>
              <p className="text-xs text-gray-500">
                Design team builds prototypes in hours, not days
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">Fortune 100</div>
              <div className="text-sm text-gray-400 mb-3">Production Use</div>
              <p className="text-xs text-gray-500">
                Actively used across multiple product lines
              </p>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-green-400">Business Value</h3>
            <p className="text-gray-300 leading-relaxed">
              The design system created a force multiplier effect across the entire organization. Product teams can now validate more ideas in parallel, ship features faster, and maintain consistent quality across all customer touchpoints. The investment in the design system pays dividends every time a designer builds a prototype or an engineer implements a feature—the ROI compounds over time.
            </p>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">Lessons Learned</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border-l-4 border-green-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-green-400">Designer Accessibility is Critical</h3>
              <p className="text-gray-300">
                The decision to use Tailwind CSS was strategic. While it added some complexity to the build process, it made the system dramatically more accessible to non-technical designers. They could read the class names and understand what they did, making it easier to learn and adopt the system. This accessibility was essential for achieving organization-wide adoption.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-green-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-green-400">Icon System Needs Type Safety</h3>
              <p className="text-gray-300">
                With 826 icons, it would be easy to make mistakes—typos in icon names, incorrect sizing, or inconsistent colors. The type-safe icon system prevents all these errors at compile time. Developers get autocomplete for icon names, and TypeScript catches mistakes before they reach production. This investment in developer experience pays dividends across hundreds of developers.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-green-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-green-400">Atomic Design Scales Efficiently</h3>
              <p className="text-gray-300">
                Building 38 primitive components first, then composing them into 24 pattern components, proved to be an efficient architecture. Changes to primitives automatically propagate to patterns, reducing maintenance burden. This composability also makes it easy to create new patterns by combining existing primitives in novel ways.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-green-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-green-400">Training Accelerates Adoption</h3>
              <p className="text-gray-300">
                The most sophisticated design system is worthless if people don't use it. Investing time in training sessions with the design team was critical for adoption. By showing them how to use the system effectively and answering their questions in real-time, we ensured the system became part of their daily workflow rather than sitting unused.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg p-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-4">
            Need a Design System for Your Organization?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I can deliver comprehensive, production-ready design systems that accelerate your entire product organization—from design to development to deployment.
          </p>
          <Link href="/contact">
            <a className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors">
              Let\'s Discuss Your Project
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyComcast;


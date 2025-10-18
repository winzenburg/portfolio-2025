import React from 'react';

const CaseStudySaas: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/project-saas-design-system.png" 
          alt="Enterprise SaaS Design System"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-6">
            <span className="text-cyan-400 text-sm font-medium">Hero Project · 2024</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6">
            Enterprise SaaS Design System
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Industry-first automated token governance system delivered in 4 weeks
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4 weeks</div>
              <div className="text-sm text-gray-400">vs. 12+ months</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">~$1.03M</div>
              <div className="text-sm text-gray-400">Value Created</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">84x</div>
              <div className="text-sm text-gray-400">Faster Delivery</div>
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
              Enterprise SaaS companies face a critical challenge: building production-ready design systems requires massive investment. The traditional approach demands a 7-person team working for 12+ months, costing over $1M in fully-loaded salaries alone. This creates a painful dilemma—design systems are essential for scaling product development, but the upfront cost and time investment make them prohibitively expensive for many organizations.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The problem extends beyond just cost. Traditional design system development is sequential and slow. UX researchers conduct studies, designers create components, developers implement them, QA engineers test, and technical writers document. Each handoff introduces delays, miscommunication, and quality issues. By the time the system launches, business requirements have often changed, making portions of the work obsolete.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What if there was a way to deliver the same enterprise-grade quality in a fraction of the time, at a fraction of the cost, while maintaining rigorous standards for accessibility, testing, and documentation?
            </p>
          </div>

          {/* Design System Screenshot */}
          <div className="my-8 rounded-lg overflow-hidden border border-cyan-500/20">
            <img 
              src={`${import.meta.env.BASE_URL}saas-ds-welcome.png`}
              alt="Winzenburg Design System - Production-ready React components"
              className="w-full"
            />
            <div className="bg-white/5 px-4 py-3 text-sm text-gray-400">
              <strong className="text-cyan-400">Winzenburg Design System:</strong> Production-ready React components for building beautiful, accessible applications faster
            </div>
          </div>
        </section>

        {/* The Force Multiplier Approach */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Force Multiplier Approach</h2>
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              I applied my AI-augmented 5-phase workflow to compress 84 person-months of work into just 4 weeks. This wasn't about cutting corners—it was about using AI as a force multiplier while maintaining the strategic oversight and quality standards that only 25 years of experience can provide.
            </p>
          </div>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="bg-white/5 border border-cyan-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-xl">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">Research & Strategy (2 days)</h3>
                  <p className="text-gray-300 mb-3">
                    Conducted competitive analysis of leading design systems (Material Design, Ant Design, Chakra UI), synthesized best practices, and defined a token-first architecture strategy. Used AI to analyze hundreds of components across multiple systems, identifying patterns and anti-patterns.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Key Decision:</strong> Implement industry-first automated token validation to prevent governance drift
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white/5 border border-cyan-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-xl">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">Design & Prototyping (3 days)</h3>
                  <p className="text-gray-300 mb-3">
                    Designed comprehensive token system (colors, typography, spacing, shadows) and created initial component library in Figma. Used AI to generate multiple design variations, allowing rapid exploration of different visual directions.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Output:</strong> 48 component designs with full token mapping
                  </div>
                </div>
              </div>
            </div>

            {/* Color System Screenshot */}
            <div className="my-8 rounded-lg overflow-hidden border border-cyan-500/20">
              <img 
                src={`${import.meta.env.BASE_URL}saas-ds-colors.png`}
                alt="Dynamic brand colors with token system"
                className="w-full"
              />
              <div className="bg-white/5 px-4 py-3 text-sm text-gray-400">
                <strong className="text-cyan-400">Dynamic Color System:</strong> Brand primary token automatically updates with presets while maintaining tonal relationships
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white/5 border border-cyan-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-xl">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">Development & Refinement (3 weeks)</h3>
                  <p className="text-gray-300 mb-3">
                    Built production-ready React components with TypeScript, implementing atomic design principles. Used AI to generate component code, prop interfaces, and variant logic. Iteratively refined based on accessibility audits and visual regression tests.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Innovation:</strong> Created custom validation script that scans 63,813 lines of code to ensure 100% token compliance
                  </div>
                </div>
              </div>
            </div>

            {/* Icon Library Screenshot */}
            <div className="my-8 rounded-lg overflow-hidden border border-cyan-500/20">
              <img 
                src={`${import.meta.env.BASE_URL}saas-ds-icons.png`}
                alt="Searchable icon browser with 34 professional icons"
                className="w-full"
              />
              <div className="bg-white/5 px-4 py-3 text-sm text-gray-400">
                <strong className="text-cyan-400">Icon Browser:</strong> 34 professional icons, searchable by category, with copy-to-clipboard component names
              </div>
            </div>

            {/* Button Components Screenshot */}
            <div className="my-8 rounded-lg overflow-hidden border border-cyan-500/20">
              <img 
                src={`${import.meta.env.BASE_URL}saas-ds-buttons.png`}
                alt="Button component variants showing semantic hierarchy"
                className="w-full"
              />
              <div className="bg-white/5 px-4 py-3 text-sm text-gray-400">
                <strong className="text-cyan-400">Component Variants:</strong> Semantic button hierarchy (Primary, Secondary, Tertiary, Destructive) with size variants and icon combinations
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white/5 border border-cyan-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-xl">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">Testing & QA (3 days)</h3>
                  <p className="text-gray-300 mb-3">
                    Implemented comprehensive test suite with Playwright (17 E2E tests) and Vitest (6 unit tests). Used AI to generate test scenarios covering edge cases and accessibility requirements. Achieved 77% E2E coverage on complex components.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Quality Gate:</strong> 100% WCAG 2.2 AA compliance verified with axe-core
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="bg-white/5 border border-cyan-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-xl">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">Documentation (2 days)</h3>
                  <p className="text-gray-300 mb-3">
                    Generated comprehensive Storybook documentation with 14-section standard for each component. Used AI to create usage examples, accessibility guidelines, and best practices. Documented architecture decisions and development workflows.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Standard:</strong> Every component includes Overview, Props, Examples, Accessibility, Testing, and more
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
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Component Library</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>48 production-ready components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>63,813 lines of TypeScript/React code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Zero 'any' types (100% type safety)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Atomic design architecture</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Token System</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>1,166+ token usages validated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Industry-first validation script</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>100% token compliance enforced</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Prevents governance drift</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Testing & Quality</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>17 E2E tests + 6 unit tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>9,566 lines of test code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>77% E2E coverage (complex components)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>100% WCAG 2.2 AA compliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Documentation</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Comprehensive Storybook site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>14-section component standard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>40+ context documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Architecture & workflow guides</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['React 18', 'TypeScript', 'Vite', 'Storybook', 'Playwright', 'Vitest', 'axe-core', 'Tailwind CSS'].map(tech => (
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
              This project demonstrated that enterprise-grade design systems can be built at unprecedented speed without sacrificing quality. The automated token validation system represents an industry-first innovation that solves one of the most persistent challenges in design system governance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">~$1.03M</div>
              <div className="text-sm text-gray-400 mb-3">Cost Savings</div>
              <p className="text-xs text-gray-500">
                7-person team eliminated (84 person-months saved)
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-sm text-gray-400 mb-3">Faster Development</div>
              <p className="text-xs text-gray-500">
                Product teams ship features significantly faster
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-sm text-gray-400 mb-3">Token Compliance</div>
              <p className="text-xs text-gray-500">
                Automated validation prevents governance drift
              </p>
            </div>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-cyan-400">Business Value</h3>
            <p className="text-gray-300 leading-relaxed">
              Beyond the immediate cost savings, this design system enables the organization to validate more product ideas in parallel, ship features faster, and maintain consistent quality across all digital properties. The automated governance system ensures the investment remains valuable over time, preventing the technical debt that typically accumulates in design systems.
            </p>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">Lessons Learned</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border-l-4 border-cyan-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-cyan-400">Automated Validation is a Game-Changer</h3>
              <p className="text-gray-300">
                The custom token validation script proved to be one of the most valuable innovations. By automatically scanning the entire codebase and flagging non-compliant usage, it eliminates the manual governance burden that typically makes design systems expensive to maintain. This single innovation could save organizations hundreds of thousands of dollars over the system's lifetime.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-cyan-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-cyan-400">AI Excels at Pattern-Based Work</h3>
              <p className="text-gray-300">
                Component development is highly pattern-based, making it ideal for AI augmentation. Once I established the architectural patterns and quality standards, AI could generate new components that perfectly matched the existing system. This allowed me to scale from 10 components to 48 without proportionally increasing time investment.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-cyan-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-cyan-400">Documentation Quality Matters</h3>
              <p className="text-gray-300">
                The 14-section documentation standard for each component might seem excessive, but it dramatically improves adoption. Developers can quickly understand how to use components correctly, reducing support burden and preventing misuse. AI made it feasible to maintain this high documentation standard across all 48 components.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-cyan-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-cyan-400">Replicability Across Projects</h3>
              <p className="text-gray-300">
                The workflow and tooling developed for this project are highly replicable. The same approach can be applied to any design system project, regardless of technology stack or visual design direction. This makes the methodology valuable not just for one-off projects, but as a repeatable capability that can be applied across an organization's portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg p-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-4">
            Ready to Build Your Design System?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I can deliver enterprise-grade design systems in weeks, not months, at a fraction of traditional costs while maintaining rigorous quality standards.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
          >
            Let's Discuss Your Project
          </a>
        </section>
      </div>
    </div>
  );
};

export default CaseStudySaas;


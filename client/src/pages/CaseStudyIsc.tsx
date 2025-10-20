import React from 'react';
import { Link } from 'wouter';

const CaseStudyIsc: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/project-isc-portal.png" 
          alt="ISC Portal Usability Prototype"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6">
            <span className="text-purple-400 text-sm font-medium">Hero Project · 2024</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6">
            ISC Portal Usability Prototype
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Addressed 81% of critical usability issues in 4 days with zero TypeScript errors
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">4 days</div>
              <div className="text-sm text-gray-400">vs. 12+ months</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">~$1.05M</div>
              <div className="text-sm text-gray-400">Value Created</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">5,450</div>
              <div className="text-sm text-gray-400">Lines/Day</div>
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
              Comcast Business's ISC Portal was suffering from severe usability issues that were directly impacting customer satisfaction. The product Net Promoter Score (pNPS) had plummeted to -4, far below the target of +5. Internal research identified 81% of critical usability problems stemming from inconsistent UI patterns, confusing navigation, and poor information architecture.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The business faced a critical decision point. The traditional approach would require hiring a full development team, conducting extensive user research, creating wireframes, building prototypes, and iterating over 12+ months. This timeline was unacceptable given the urgency of the customer satisfaction crisis. Every month of delay meant continued customer churn and negative brand perception.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What the business needed was a high-fidelity, interactive prototype that could validate solutions to the identified usability issues in days, not months. This would enable immediate user testing and provide a concrete vision for the engineering team to implement.
            </p>
          </div>
        </section>

        {/* The Force Multiplier Approach */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Force Multiplier Approach</h2>
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              I compressed what would traditionally take a team 12+ months into just 4 days by leveraging my AI-augmented workflow. The key was starting with existing research and moving directly to a production-quality prototype built with real code, not static mockups.
            </p>
          </div>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="bg-white/5 border border-purple-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-xl">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Day 1: Research Synthesis & IA Redesign</h3>
                  <p className="text-gray-300 mb-3">
                    Analyzed existing heuristic evaluation identifying 81% of usability issues. Used AI to synthesize research findings and generate multiple information architecture models. Mapped all identified issues to specific design solutions. Created comprehensive sitemap and navigation structure addressing core problems.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Key Decision:</strong> Reduce UI variations by 89% through systematic component consolidation
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white/5 border border-purple-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-xl">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Day 2: Base Component Development</h3>
                  <p className="text-gray-300 mb-3">
                    Built comprehensive base component in Angular 13 with Material 3 that would serve as the foundation for all 9 pages. Implemented responsive layout, navigation patterns, and core UI elements. Established TypeScript patterns and component architecture that ensured zero type errors.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Output:</strong> Single base component generating 9 distinct pages through configuration
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white/5 border border-purple-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-xl">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Day 3: Page Generation & Content</h3>
                  <p className="text-gray-300 mb-3">
                    Used AI to rapidly generate all 9 pages by configuring the base component with page-specific content and layouts. Implemented realistic data, interactive elements, and micro-interactions. Achieved production-quality polish with attention to typography, spacing, and visual hierarchy.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Speed:</strong> 5,450 lines of code per day (21,801 total)
                  </div>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-white/5 border border-purple-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-xl">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Day 4: Testing & Refinement</h3>
                  <p className="text-gray-300 mb-3">
                    Conducted comprehensive testing across devices and browsers. Implemented Playwright E2E tests to validate critical user flows. Refined interactions and fixed edge cases. Prepared documentation for handoff to engineering team.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Quality Gate:</strong> Zero TypeScript errors across 21,801 lines of code
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
              <h3 className="text-lg font-bold mb-4 text-purple-400">Interactive Prototype</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>21,801 lines of production code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>9 fully interactive pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Zero TypeScript errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Responsive across all devices</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-purple-400">Design System Impact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>89% reduction in UI variations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>1 base component → 9 pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Systematic component consolidation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Scalable architecture patterns</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-purple-400">Usability Improvements</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Addressed 81% of critical issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Simplified navigation structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Improved information architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Enhanced visual consistency</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-purple-400">Testing & Quality</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Comprehensive E2E test suite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Cross-browser compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Responsive design validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Production-ready code quality</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['Angular 13', 'TypeScript', 'Material 3', 'RxJS', 'Playwright', 'SCSS'].map(tech => (
                <span key={tech} className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Showcase */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Prototype</h2>
          <p className="text-gray-300 text-lg mb-8">
            A fully interactive, production-quality prototype demonstrating solutions to all identified usability issues.
          </p>
          
          <div className="space-y-8">
            {/* Homepage - Usability Analysis */}
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <img 
                src="/images/isc-portal-home.webp" 
                alt="ISC Portal Homepage - Usability Analysis Dashboard"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">Usability Analysis Dashboard</h3>
                <p className="text-gray-300">
                  Comprehensive overview of identified issues with clear metrics: 8 critical issues, 5 high impact items, 2 quick wins, and current pNPS score. Each issue is mapped to Nielsen's 10 Usability Heuristics with supporting evidence from employee surveys and focus groups.
                </p>
              </div>
            </div>

            {/* Network Analyst */}
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <img 
                src="/images/isc-portal-network-analyst.webp" 
                alt="ISC Portal Network Analyst - Traffic Analytics"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">Network Analytics Interface</h3>
                <p className="text-gray-300">
                  Interactive traffic visualization with protocol breakdown tables, real-time monitoring, and contextual help. Demonstrates improved data visualization and information hierarchy addressing the "visibility of system status" heuristic.
                </p>
              </div>
            </div>

            {/* SD-WAN Orchestrator */}
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <img 
                src="/images/isc-portal-sd-wan.webp" 
                alt="ISC Portal SD-WAN Orchestrator - Access Control"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">Access Control & Empty States</h3>
                <p className="text-gray-300">
                  Clear messaging for license requirements and feature access. Demonstrates solution to the "empty states" problem with helpful guidance and actionable next steps, addressing the #2 critical usability issue.
                </p>
              </div>
            </div>

            {/* Sites Unified */}
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <img 
                src="/images/isc-portal-sites.webp" 
                alt="ISC Portal Sites Management - Unified View"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">Sites Management Interface</h3>
                <p className="text-gray-300">
                  Unified sites view with hierarchical navigation, bulk actions, filtering capabilities, and status indicators. Addresses multiple usability issues including "no bulk actions" and "missing sites and circuits" with clear data sync status.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Impact</h2>
          
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              This prototype enabled Comcast Business to immediately validate solutions with users and provide engineering with a concrete implementation target. The speed of delivery was critical—it allowed the business to respond to the customer satisfaction crisis in days rather than months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">~$1.05M</div>
              <div className="text-sm text-gray-400 mb-3">Cost Savings</div>
              <p className="text-xs text-gray-500">
                Immediate validation without full team
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">pNPS: -4 → +5</div>
              <div className="text-sm text-gray-400 mb-3">Target Improvement</div>
              <p className="text-xs text-gray-500">
                Projected impact from usability fixes
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">5-7x</div>
              <div className="text-sm text-gray-400 mb-3">Faster Development</div>
              <p className="text-xs text-gray-500">
                Component reuse accelerates engineering
              </p>
            </div>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-purple-400">Business Value</h3>
            <p className="text-gray-300 leading-relaxed">
              The prototype served multiple strategic purposes. It validated solutions to critical usability issues before engineering investment, provided a concrete vision that aligned stakeholders, and demonstrated the feasibility of the proposed improvements. Most importantly, it gave the business confidence to move forward with a major redesign initiative, knowing the solutions had been validated with real users.
            </p>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">Lessons Learned</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border-l-4 border-purple-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-purple-400">Component Reuse Amplifies Speed</h3>
              <p className="text-gray-300">
                The decision to build one highly configurable base component rather than nine separate pages was transformative. It meant that improvements to navigation, layout, or interactions automatically propagated across all pages. This architectural decision enabled the 5,450 lines/day velocity—each line of code had 9x leverage.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-purple-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-purple-400">TypeScript Prevents Technical Debt</h3>
              <p className="text-gray-300">
                Maintaining zero TypeScript errors across 21,801 lines of code wasn't just about pride—it was about ensuring the prototype could evolve into production code. Many prototypes are throw-away because they accumulate technical debt. By maintaining production-quality standards from day one, this prototype became a valuable asset rather than disposable research.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-purple-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-purple-400">Real Code Beats Static Mockups</h3>
              <p className="text-gray-300">
                Building with real code rather than design tools like Figma provided multiple advantages. The prototype was fully interactive, allowing realistic user testing. It demonstrated technical feasibility, not just visual design. And it provided engineering with a reference implementation, dramatically reducing interpretation errors during development.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-purple-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-purple-400">Speed Enables Better Decisions</h3>
              <p className="text-gray-300">
                The 4-day timeline wasn't just about cost savings—it fundamentally changed the decision-making process. Stakeholders could see working solutions in days, provide feedback, and iterate. This tight feedback loop led to better outcomes than traditional waterfall processes where decisions are locked in months before seeing results.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-4">
            Need to Validate Product Ideas Fast?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I can deliver production-quality prototypes in days, enabling rapid user testing and confident decision-making without the traditional time and cost investment.
          </p>
          <Link href="/contact">
            <a className="inline-block px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors">
              Let\'s Discuss Your Project
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyIsc;


import React from 'react';
import { Link } from 'wouter';

const CaseStudyCultivate: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}project-cultivate-bos.png`} 
          alt="Cultivate Business Operating System Dashboard"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-teal-900/40 to-green-900/40"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-6">
            <span className="text-emerald-400 text-sm font-medium">Hero Project · 2025</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6">
            Cultivate: Startup Operating System
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            A portfolio-first SaaS workspace that turns ideas into validated products—powered by 25 agents, 8 quality gates, and zero guesswork
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">25 Agents</div>
              <div className="text-sm text-gray-400">Orchestrated System</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">8 Gates</div>
              <div className="text-sm text-gray-400">Quality Checkpoints</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">16+ Ideas</div>
              <div className="text-sm text-gray-400">Active Portfolio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* The Problem */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Problem</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              90% of SaaS startups fail. But the problem isn't the idea—it's the process. Most founders fall into the "build trap," coding products before validating demand. Even worse, they validate desirability without assessing durability: Will people still pay 12-36 months from now? Will the product have switching costs, network effects, or compounding advantages?
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              As a solo founder or small team, you can't afford to bet everything on one idea. You need a portfolio approach—multiple bets running in parallel with systematic validation. But managing a portfolio creates its own challenges: How do you track 10+ ideas across discovery, validation, and build phases? How do you ensure quality without becoming a bottleneck? How do you make your process repeatable as you scale?
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>What if you had a complete operating system for product creation?</strong> A systematic workflow from idea scoring to production deployment, with AI agents handling research and synthesis while you focus on strategic decisions. That's Cultivate.
            </p>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Solution: Cultivate</h2>
          
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">What is Cultivate?</h3>
            <p className="text-gray-300 leading-relaxed">
              Cultivate is a portfolio-first SaaS workspace that transforms how founders validate and build products. It combines a 25-agent AI orchestration system with an 8-gate quality framework, enabling you to manage 16+ product ideas simultaneously—from initial scoring through validated deployment. Think of it as your startup's operating system: it handles research, synthesis, and coordination while you focus on strategic decisions and creative work.
            </p>
          </div>

          {/* BOS Dashboard Screenshot */}
          <div className="mb-8 rounded-lg overflow-hidden border border-emerald-500/30">
            <img 
              src={`${import.meta.env.BASE_URL}project-cultivate-bos.png`}
              alt="Cultivate BOS Dashboard - Portfolio management and weekly planning"
              className="w-full"
            />
            <div className="bg-white/5 p-4 text-sm text-gray-400">
              BOS (Business Operating System) Dashboard: Weekly planning, portfolio overview, and opportunity radar
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-emerald-400">Portfolio Approach</h4>
              <p className="text-gray-300 text-sm">
                Manage 16+ ideas simultaneously with systematic scoring, kill-fast diagnostics, and expected value modeling. Diversify your bets instead of gambling on one product.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-emerald-400">25-Agent System</h4>
              <p className="text-gray-300 text-sm">
                Specialized AI agents for research (Manus), synthesis (ChatGPT), orchestration (Claude), validation (Lindy), and asset generation (Glif)—coordinated through systematic workflows
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-emerald-400">8 Quality Gates</h4>
              <p className="text-gray-300 text-sm">
                Hard checkpoints from portfolio scoring through durability validation, brand system design, and dev quality gates—ensuring you build the right things, validated for long-term success
              </p>
            </div>
          </div>
        </section>

        {/* The System Architecture */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The System Architecture</h2>
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              Cultivate is built on three years of iteration, failed startups, and continuous refinement. The result is a production system managing a live portfolio with predictable outcomes. Here's how it works:
            </p>
          </div>

          <div className="space-y-6">
            {/* Four Phases */}
            <div className="bg-white/5 border border-emerald-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Four Phases, Eight Gates</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-xl">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">Portfolio & Idea Scoring</h4>
                    <p className="text-gray-300 mb-2">
                      Score every idea against 8 criteria (0-5 each, max 40 points): frequency of job, budget availability, problem independence, user attachment, switching costs, compounding advantages, founder advantage, and expansion revenue.
                    </p>
                    <div className="text-sm text-emerald-400 bg-emerald-500/10 p-3 rounded">
                      <strong>GATE 1:</strong> Portfolio Score ≥ 20 (kills 30-40% of ideas immediately)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-xl">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">Discovery (The Heat Filter)</h4>
                    <p className="text-gray-300 mb-2">
                      Use 6 specialized agents to research niche intelligence, pain signals, jobs-to-be-done, opportunity & moat analysis. Generate comprehensive briefs using AI research (Manus) and synthesis (ChatGPT).
                    </p>
                    <div className="text-sm text-emerald-400 bg-emerald-500/10 p-3 rounded">
                      <strong>GATES 2-5:</strong> Heat Score ≥ 8, validated narrative, clear JTBD, defensible opportunity
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-xl">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">Validation (Durability & Brand)</h4>
                    <p className="text-gray-300 mb-2">
                      Validate durability (will they keep paying 12-36 months?), design moat & monetization strategy, create brand identity system, run demand validation tests (fake doors, concierge MVP, preorders).
                    </p>
                    <div className="text-sm text-emerald-400 bg-emerald-500/10 p-3 rounded">
                      <strong>GATES 6-7:</strong> Durability score ≥ 18, validated demand signals, brand system complete
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-xl">4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">Build & Deploy</h4>
                    <p className="text-gray-300 mb-2">
                      AI-augmented development with quality gates: dev quality assistant (test planning before code), security & bug gates (two-tier code review), documentation system (making knowledge repeatable), and production deployment.
                    </p>
                    <div className="text-sm text-emerald-400 bg-emerald-500/10 p-3 rounded">
                      <strong>GATE 8:</strong> Dev quality verified, tests passing, deployed to production
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Agent Orchestra */}
            <div className="bg-white/5 border border-emerald-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">The 25-Agent Orchestra</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 p-4 rounded">
                  <h4 className="font-bold mb-2 text-emerald-300">Discovery Agents (6)</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Portfolio Prioritizer</li>
                    <li>• Niche Intelligence Agent</li>
                    <li>• Pain Signal Agent</li>
                    <li>• JTBD Agent</li>
                    <li>• Opportunity & Moat Agent</li>
                    <li>• Narrative Agent</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded">
                  <h4 className="font-bold mb-2 text-emerald-300">Validation Agents (7)</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Durability Assessor</li>
                    <li>• Moat & MRR Strategist</li>
                    <li>• Brand System Designer</li>
                    <li>• Demand Validation Planner</li>
                    <li>• Pricing Strategist</li>
                    <li>• Landing Page Designer</li>
                    <li>• Concierge MVP Coordinator</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded">
                  <h4 className="font-bold mb-2 text-emerald-300">Build Agents (8)</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Product Architect</li>
                    <li>• Dev Quality Assistant</li>
                    <li>• Feature Implementation Lead</li>
                    <li>• Test Engineer</li>
                    <li>• Security & Bug Reviewer</li>
                    <li>• Documentation Specialist</li>
                    <li>• DevOps Engineer</li>
                    <li>• Analytics Integrator</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded">
                  <h4 className="font-bold mb-2 text-emerald-300">AI Tool Agents (4)</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Manus (AI Research)</li>
                    <li>• ChatGPT (AI Synthesis)</li>
                    <li>• Lindy (Automated Validation)</li>
                    <li>• Glif (Batch Asset Generation)</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4 italic">
                All coordinated by Claude through systematic workflows with clear handoffs and quality gates
              </p>
            </div>
          </div>
        </section>

        {/* The Hub: Meta-Project Dashboard */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Hub: Portfolio Command Center</h2>
          
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              Managing 16+ product ideas across four phases and eight gates requires a meta-project—a dashboard that orchestrates your entire portfolio. The Hub provides four critical capabilities:
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border-l-4 border-emerald-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-emerald-400">Portfolio Dashboard</h3>
              <p className="text-gray-300">
                Bird's-eye view of all active projects with key stats: portfolio score, estimated MRR, status (discovery/validation/build), and progress through gates. Quickly identify highest-priority opportunities, spot projects needing attention, and make data-driven portfolio decisions.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-emerald-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-emerald-400">Workflow Tracking</h3>
              <p className="text-gray-300">
                Visual progress cards showing status of each project through standardized workflows. See which discovery documents are complete, which validation tests are running, and which build features are in progress. Real-time updates prevent projects from getting stuck in limbo.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-emerald-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-emerald-400">Document Discovery</h3>
              <p className="text-gray-300">
                Automatic indexing of all project-related documents across multiple directories (discovery, validation, product, research, ideas). Whether it's a NARRATIVE brief, PRICING-TEST results, or PRD, the Hub finds it and makes it accessible—no more hunting through folders.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-emerald-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-emerald-400">BOS Home Dashboard</h3>
              <p className="text-gray-300">
                Weekly planning rhythm with "Rocks" (quarterly goals), opportunity radar (daily idea scoring), pipeline runs (discovery → validation), and execution cadence. Integrates EOS (Entrepreneurial Operating System) principles with product creation workflows for systematic progress.
              </p>
            </div>
          </div>
        </section>

        {/* The Innovation */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Innovation: Systematic Product Creation</h2>
          
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              Cultivate's breakthrough isn't any single feature—it's the systematic integration of multiple innovations into a cohesive operating system for startup creation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border-l-4 border-emerald-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-emerald-400">Dual-Filter Validation Framework</h3>
              <p className="text-gray-300 mb-3">
                Most validation frameworks stop at demand validation ("will people want this?"). Cultivate adds a second filter: durability ("will they keep paying 12-36 months from now?"). This prevents you from building products that have heat but lack defensibility—the kind that churn customers or get commoditized within a year.
              </p>
              <div className="text-sm text-gray-400 bg-white/5 p-3 rounded">
                <strong>Example:</strong> A "social network for [niche]" might score high on desirability but low on durability (network effects are hard, switching costs are low). The dual filter catches this before you waste months building.
              </div>
            </div>

            <div className="bg-white/5 border-l-4 border-emerald-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-emerald-400">AI Orchestration System</h3>
              <p className="text-gray-300 mb-3">
                Instead of using AI tools in isolation, Cultivate orchestrates 7+ AI services through systematic workflows: Manus for research, ChatGPT for synthesis, Claude for orchestration, Context7 for live docs, Lindy for automated validation, Glif for batch asset generation. Each AI has clear responsibilities, handoffs, and quality checks.
              </p>
              <div className="text-sm text-gray-400 bg-white/5 p-3 rounded">
                <strong>Workflow Example:</strong> Manus researches Reddit/forums → ChatGPT synthesizes insights → Claude generates NARRATIVE brief → Lindy validates demand signals → Glif creates brand assets
              </div>
            </div>

            <div className="bg-white/5 border-l-4 border-emerald-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-emerald-400">150+ Rules in Four-Tier Taxonomy</h3>
              <p className="text-gray-300 mb-3">
                As AI workflows become more complex, keeping rules organized is critical. Cultivate uses a four-tier taxonomy: Core Rules (immutable principles), Domain Rules (TypeScript, React, Supabase standards), Project Rules (feature-specific patterns), and Task Rules (one-off instructions). This prevents rule proliferation while maintaining quality.
              </p>
              <div className="text-sm text-gray-400 bg-white/5 p-3 rounded">
                <strong>Consolidation Strategy:</strong> Related rules merge into higher tiers over time, reducing cognitive load
              </div>
            </div>

            <div className="bg-white/5 border-l-4 border-emerald-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-emerald-400">Portfolio-First Architecture</h3>
              <p className="text-gray-300">
                Unlike traditional project management tools (built for single projects), Cultivate is designed from the ground up for portfolio management. You don't create "projects"—you create a portfolio, then add ideas to it. Scoring, validation, and build workflows are designed to run in parallel across multiple ideas, with kill-fast diagnostics and expected value modeling built in.
              </p>
            </div>
          </div>
        </section>

        {/* The Technical Stack */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Technical Stack</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-emerald-400">Core Platform</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Next.js 15 (App Router)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>TypeScript (strict mode, zero `any`)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Tailwind CSS v4</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Supabase (PostgreSQL + Auth)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Drizzle ORM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>tRPC (type-safe APIs)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-emerald-400">AI Orchestration</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Anthropic Claude (orchestration)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>ChatGPT o1 (synthesis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Manus.im (research automation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Lindy (validation automation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Glif (batch asset generation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Context7 (live documentation)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-emerald-400">Infrastructure</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Vercel (hosting + edge functions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>PostHog (analytics)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Resend (transactional email)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Cursor + Claude (dev environment)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-emerald-400">Quality & Testing</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Playwright (E2E testing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Vitest (unit testing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>ESLint + Prettier</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Zod (runtime validation)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Architecture Principles</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center text-emerald-400 text-sm font-bold">✓</div>
                <span><strong className="text-emerald-400">Monorepo Structure:</strong> All projects in single repo with shared libraries and consistent patterns</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center text-emerald-400 text-sm font-bold">✓</div>
                <span><strong className="text-emerald-400">Feature Modules:</strong> Domain-driven structure with no cross-feature imports</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center text-emerald-400 text-sm font-bold">✓</div>
                <span><strong className="text-emerald-400">Boring Technology:</strong> Proven, maintainable solutions over bleeding-edge hype</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center text-emerald-400 text-sm font-bold">✓</div>
                <span><strong className="text-emerald-400">Documentation as Code:</strong> 150+ rules, 40+ context documents, systematic knowledge capture</span>
              </div>
            </div>
          </div>
        </section>

        {/* What This Demonstrates */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">What This Demonstrates</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-emerald-400">Systems Thinking at Scale</h3>
              <p className="text-gray-300 text-sm">
                Cultivate isn't a collection of tools—it's a complete operating system. Every component (agents, gates, documents, workflows) is designed to work together, creating compounding value as the system scales. This demonstrates my ability to architect complex systems with emergent properties.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-emerald-400">Process Design Expertise</h3>
              <p className="text-gray-300 text-sm">
                Building Cultivate required distilling three years of startup experience into systematic workflows. I can take messy, intuitive processes and transform them into repeatable systems that scale—essential for Head of Design Operations or VP of Product roles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-emerald-400">AI Orchestration Mastery</h3>
              <p className="text-gray-300 text-sm">
                Coordinating 7+ AI services (Claude, ChatGPT, Manus, Lindy, Glif, Context7, more) through systematic workflows demonstrates deep understanding of AI's strengths and limitations. I don't just use AI—I architect systems that multiply its effectiveness.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-emerald-400">Product Strategy & Validation</h3>
              <p className="text-gray-300 text-sm">
                The dual-filter framework (desirability + durability) represents sophisticated product thinking. I understand that validation isn't just about proving people want something—it's about proving they'll keep paying for it, and that you can defend your position against competitors.
              </p>
            </div>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-emerald-400">The Meta-Skill: Building Systems That Build Products</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Most founders build products. I built a system that builds products. This meta-level thinking—creating infrastructure that makes product creation systematic and scalable—is exactly what growing organizations need. Whether you're scaling a design team, implementing AI workflows, or building operational excellence, I can create the systems that multiply your team's effectiveness.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cultivate is live, managing a real portfolio of 16+ ideas, with several projects currently in validation and build phases. This isn't theory—it's a production system that demonstrates systematic product creation is not only possible, but superior to traditional ad-hoc approaches.
            </p>
          </div>
        </section>

        {/* Current Status */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">Current Status & Roadmap</h2>
          
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">Production</div>
                <div className="text-sm text-gray-400">Live System</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">16+ Ideas</div>
                <div className="text-sm text-gray-400">Active Portfolio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">Open Source</div>
                <div className="text-sm text-gray-400">Future Vision</div>
              </div>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-emerald-400">Current State:</strong> Cultivate is in production, actively managing a portfolio of 16+ product ideas across all phases. The BOS Dashboard provides weekly planning and portfolio oversight. Several projects are in validation phase with demand tests running, and one project (Kinlet) has deployed to production.
              </p>
              <p>
                <strong className="text-emerald-400">Active Development:</strong> Continuously refining the agent orchestration system, consolidating rules, and improving quality gates based on real-world usage. Recent focus on better document discovery, automated workflow transitions, and portfolio analytics.
              </p>
              <p>
                <strong className="text-emerald-400">Roadmap Vision:</strong> Planning to open-source the core framework (agents, gates, workflows, document templates) so other founders can replicate this systematic approach. Building a community around product creation methodology, turning Cultivate from a personal tool into a platform.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-emerald-500/30">
              <a
                href="https://cultivate-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold text-lg"
              >
                View Live Platform →
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-lg p-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-4">
            Ready to Build Systematic Product Creation?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I can help your organization implement AI-augmented workflows, design systematic processes, or lead product/design operations that multiply your team's effectiveness. Let's talk about building systems that build products.
          </p>
          <Link href="/contact">
            <span className="inline-block px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors cursor-pointer">
              Let's Talk
            </span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyCultivate;

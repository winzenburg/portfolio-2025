import React from 'react';
import { Link } from 'wouter';

const CaseStudyKinlet: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}images/kinlet-landing.png`} 
          alt="Kinlet Landing Page"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-violet-900/40"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6">
            <span className="text-purple-400 text-sm font-medium">Hero Project · 2026</span>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src={`${import.meta.env.BASE_URL}images/kinlet-logo.svg`}
              alt="Kinlet Logo"
              className="h-16 w-16"
            />
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold">
              Kinlet: AI-Native SaaS MVP
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            From idea to production-ready platform in 5 days: Private peer support for dementia caregivers
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">5 days</div>
              <div className="text-sm text-gray-400">Idea → Production</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Solo</div>
              <div className="text-sm text-gray-400">Full-Stack + AI</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-sm text-gray-400">AI-Augmented</div>
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
              Dementia caregivers face crushing isolation. They're managing medications, doctor visits, and emotional meltdowns while their own mental health deteriorates. Generic Facebook groups with thousands of strangers don't provide real support. Two-hour support meetings that require leaving the house don't fit their fragmented schedules. Professional therapy is expensive and often unavailable.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              But here's the real challenge: <strong>How do you validate and build a mental health platform as a solo founder without compromising on safety, privacy, or quality?</strong> Traditional MVP development would take months and tens of thousands of dollars. But caregivers can't wait—they're burning out right now.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This project demonstrates how AI-augmented workflows enable a single designer-developer to build production-ready SaaS applications at unprecedented speed while maintaining enterprise-grade quality standards.
            </p>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Solution: Kinlet</h2>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-3 text-purple-400">What is Kinlet?</h3>
            <p className="text-gray-300 leading-relaxed">
              Kinlet is a private peer support platform that connects dementia caregivers in small, AI-matched groups of 4-6 people facing similar challenges. It combines intelligent matching algorithms with AI-assisted content moderation and a 15-minute daily check-in ritual—delivering safe, meaningful connection that fits into a caregiver's chaotic schedule.
            </p>
          </div>

          {/* Landing Page Screenshot */}
          <div className="mb-8 rounded-lg overflow-hidden border border-purple-500/30">
            <img 
              src={`${import.meta.env.BASE_URL}images/kinlet-landing.png`}
              alt="Kinlet Landing Page - Stop feeling alone in your caregiving journey"
              className="w-full"
            />
            <div className="bg-white/5 p-4 text-sm text-gray-400">
              Production landing page with trust-building design, clear value proposition, and waitlist functionality
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-purple-400">Precise Matching</h4>
              <p className="text-gray-300 text-sm">
                AI analyzes caregiver situations (relationship type, dementia stage, specific challenges) to create micro-groups where everyone truly "gets it"—no random strangers
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-purple-400">AI Safety Layer</h4>
              <p className="text-gray-300 text-sm">
                Real-time content moderation catches medical misinformation, crisis signals, and harassment before they escalate—keeping conversations safe without heavy human oversight
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-purple-400">Daily Ritual</h4>
              <p className="text-gray-300 text-sm">
                15-minute structured check-ins provide consistent connection without overwhelming caregivers who already have no time
              </p>
            </div>
          </div>
        </section>

        {/* The AI-Native Build Process */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The AI-Native Build Process</h2>
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              I built Kinlet from scratch in 5 days using an AI-augmented workflow that demonstrates how a solo designer-developer can now compete with entire teams. This wasn't about cutting corners—it was about using AI as a force multiplier while maintaining strategic oversight and quality standards.
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
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Day 1: Product Strategy & Research</h3>
                  <p className="text-gray-300 mb-3">
                    Used AI to synthesize research from caregiver communities (Reddit, Facebook groups, forums) and competitive analysis of existing support platforms. Generated comprehensive PRD with user personas, jobs-to-be-done framework, success metrics, and feature prioritization. Created complete validation plan with interview scripts, email templates, and social media copy.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Output:</strong> 50+ pages of strategic documentation, validation framework, go-to-market strategy
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
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Day 2: Technical Architecture</h3>
                  <p className="text-gray-300 mb-3">
                    Designed complete database schema with 7 core tables (users, caregiver profiles, groups, messages, check-ins, moderation flags, analytics events). Built AI integration utilities for matching algorithm and content moderation. Created Zod validation schemas, analytics configuration, and environment setup documentation.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Key Innovation:</strong> AI-assisted moderation enables safe peer support without expensive 24/7 human oversight
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3-4 */}
            <div className="bg-white/5 border border-purple-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-xl">3-4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Days 3-4: Landing Page & Waitlist</h3>
                  <p className="text-gray-300 mb-3">
                    Built production-ready landing page with Next.js 15 App Router, implemented waitlist functionality with email confirmation, created A/B testing variants for headline/hero testing, designed complete brand identity (logo, color system, typography), and wrote privacy policy and terms of service that clearly establish non-medical boundaries.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Design Philosophy:</strong> Warm, trust-building aesthetic that feels safe without being medical
                  </div>
                </div>
              </div>
            </div>

            {/* Day 5 */}
            <div className="bg-white/5 border border-purple-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-xl">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Day 5: Deployment & Validation Launch</h3>
                  <p className="text-gray-300 mb-3">
                    Deployed to Vercel with CI/CD pipeline, configured PostHog analytics for behavioral tracking, set up Resend for transactional emails, implemented Clerk authentication, and launched validation campaign across LinkedIn, Reddit caregiver communities, and personal network with value-first engagement strategy.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Status:</strong> Live at kinlet.care, collecting waitlist signups, validating demand before building Sprint 1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Technical Stack */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Technical Stack</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-purple-400">Frontend & Framework</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Next.js 15 (App Router)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>TypeScript (strict mode)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Tailwind CSS v4</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>React 18</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-purple-400">Backend & Data</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Supabase (PostgreSQL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Drizzle ORM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>tRPC for type-safe APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Zod for validation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-purple-400">AI & Intelligence</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Anthropic Claude Sonnet 4</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>AI matching algorithm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Real-time content moderation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Crisis signal detection</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-purple-400">Infrastructure & Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Vercel (hosting + CI/CD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Clerk (authentication)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>PostHog (analytics)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Resend (transactional email)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Development Process */}
          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">AI-Augmented Development Process</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center text-purple-400 text-sm font-bold">✓</div>
                <span><strong className="text-purple-400">Claude + Cursor:</strong> Primary development environment with AI pair programming</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center text-purple-400 text-sm font-bold">✓</div>
                <span><strong className="text-purple-400">Strategic Oversight:</strong> Human-driven architecture decisions, ethical boundaries, UX strategy</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center text-purple-400 text-sm font-bold">✓</div>
                <span><strong className="text-purple-400">AI Execution:</strong> Boilerplate code, type definitions, documentation, test scenarios</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center text-purple-400 text-sm font-bold">✓</div>
                <span><strong className="text-purple-400">Quality Gates:</strong> Type safety (zero `any` types), accessibility compliance, security best practices</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Innovation */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Innovation: Ethical AI for Mental Health</h2>
          
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              The most critical innovation in Kinlet isn't speed—it's demonstrating how AI can be used ethically and effectively in sensitive mental health contexts. This required careful architecture decisions around safety, privacy, and transparency.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border-l-4 border-purple-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-purple-400">AI Matching That Respects Context</h3>
              <p className="text-gray-300 mb-3">
                The matching algorithm doesn't just group people randomly. It understands nuanced differences: an adult child caring for a parent faces different challenges than a spouse in 24/7 care. Early-stage dementia has different needs than late-stage. The AI creates groups where people truly understand each other's context.
              </p>
              <div className="text-sm text-gray-400 bg-white/5 p-3 rounded">
                <strong>Example:</strong> Instead of "all dementia caregivers," groups might be "adult children caring for parents with early-stage Alzheimer's who work full-time"
              </div>
            </div>

            {/* Brand Identity Section */}
            <div className="bg-white/5 border-l-4 border-purple-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-purple-400">Brand Identity Design</h3>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/kinlet-logo.svg`}
                    alt="Kinlet Logo - Geometric K"
                    className="h-24 w-24 bg-white/5 rounded-lg p-4"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 mb-3">
                    Created complete brand identity in parallel with product development: a geometric "K" mark in plum/burgundy (#351b1e), warm earth-tone photography, and trust-building typography. The visual language communicates safety, warmth, and professionalism—perfect for a mental health platform that needs to feel accessible, not clinical.
                  </p>
                  <div className="text-sm text-gray-400 bg-white/5 p-3 rounded">
                    <strong>Design Principle:</strong> "Safe enough to share, warm enough to connect, professional enough to trust"
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border-l-4 border-purple-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-purple-400">Content Moderation With Empathy</h3>
              <p className="text-gray-300 mb-3">
                The AI moderation system doesn't just flag violations—it understands context. Someone sharing they're "at the end of their rope" isn't necessarily in crisis, but if combined with other signals (isolation, sleep deprivation, specific language patterns), the AI can escalate to human review. This enables safety without the false positives that make automated moderation feel oppressive.
              </p>
              <div className="text-sm text-gray-400 bg-white/5 p-3 rounded">
                <strong>Safety Categories:</strong> Medical misinformation, harassment, spam, crisis signals, guideline violations—each with contextual severity assessment
              </div>
            </div>

            <div className="bg-white/5 border-l-4 border-purple-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-purple-400">Clear Non-Medical Boundaries</h3>
              <p className="text-gray-300 mb-3">
                From the first screen, Kinlet makes clear what it is and isn't. It's peer support, not therapy. It's emotional connection, not medical advice. The AI moderation actively catches and flags when users drift into giving medical recommendations, gently redirecting to "sharing my experience" language instead.
              </p>
              <div className="text-sm text-gray-400 bg-white/5 p-3 rounded">
                <strong>Legal Protection:</strong> Terms of service, privacy policy, and in-product messaging all emphasize peer support boundaries
              </div>
            </div>

            <div className="bg-white/5 border-l-4 border-purple-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold mb-2 text-purple-400">Privacy-First Architecture</h3>
              <p className="text-gray-300">
                Groups are private by default. No public profiles. No searchable history. Caregivers share deeply personal struggles—the platform architecture respects that vulnerability. AI processing happens in real-time and doesn't create persistent analysis profiles that could be breached or misused.
              </p>
            </div>
          </div>
        </section>

        {/* What This Demonstrates */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">What This Demonstrates</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-purple-400">Full-Stack AI-Native Development</h3>
              <p className="text-gray-300 text-sm">
                I can build production-ready SaaS products from scratch as a solo founder—from product strategy and UX design to full-stack development and AI integration. This isn't prototyping, it's shipping.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-purple-400">Product Thinking + Technical Execution</h3>
              <p className="text-gray-300 text-sm">
                Kinlet demonstrates both strategic product vision (jobs-to-be-done, persona development, validation methodology) and technical execution (clean architecture, type safety, scalable infrastructure). I bridge the designer-developer gap.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-purple-400">Ethical AI Integration</h3>
              <p className="text-gray-300 text-sm">
                AI isn't magic—it's a tool that requires careful implementation. Kinlet shows how to use AI for matching and moderation in sensitive contexts while maintaining human oversight, clear boundaries, and user trust.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-purple-400">Speed Without Sacrifice</h3>
              <p className="text-gray-300 text-sm">
                5 days from idea to production doesn't mean cutting corners. The codebase has zero `any` types, comprehensive documentation, proper validation schemas, and production-grade infrastructure. Speed through smart tooling, not technical debt.
              </p>
            </div>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-purple-400">The Bigger Picture</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Kinlet isn't just a case study in AI-augmented development—it's proof that the economics of software have fundamentally shifted. What used to require a team of specialists and months of runway can now be accomplished by a designer-developer with product vision and AI fluency.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This enables a new model: validate faster, pivot cheaper, and ship quality products without burning months of runway. For startups, that's the difference between running out of money before finding product-market fit and having enough shots on goal to succeed.
            </p>
          </div>
        </section>

        {/* Current Status */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">Current Status</h2>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Live</div>
                <div className="text-sm text-gray-400">Production Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Validation</div>
                <div className="text-sm text-gray-400">Phase Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Open Source</div>
                <div className="text-sm text-gray-400">Framework Available</div>
              </div>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-purple-400">Live Platform:</strong> Kinlet is deployed and collecting waitlist signups. The validation campaign is active across LinkedIn, Reddit caregiver communities, and direct outreach.
              </p>
              <p>
                <strong className="text-purple-400">Validation Metrics:</strong> Tracking waitlist conversions, interview feedback, willingness-to-pay signals, and feature validation to determine whether to proceed to Sprint 1 (core product build) or pivot.
              </p>
              <p>
                <strong className="text-purple-400">Replicable System:</strong> The entire workflow—from idea validation to technical implementation—is documented and repeatable. This isn't a one-off success; it's a systematic capability.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-purple-500/30">
              <a
                href="https://kinlet.care"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold text-lg"
              >
                View Live Platform →
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-lg p-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-4">
            Ready to Build AI-Native Products?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I can help your team adopt AI-augmented workflows, build SaaS MVPs at unprecedented speed, or serve as a full-stack product leader who bridges strategy and execution.
          </p>
          <Link href="/contact">
            <span className="inline-block px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors cursor-pointer">
              Let's Talk
            </span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyKinlet;

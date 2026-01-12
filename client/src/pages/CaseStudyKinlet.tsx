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
            From idea to live MVP in 30 days: AI-powered peer support platform with matching, messaging, and admin tools—built solo
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">30 days</div>
              <div className="text-sm text-gray-400">Idea → Live MVP</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Solo</div>
              <div className="text-sm text-gray-400">Full-Stack + AI</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">18</div>
              <div className="text-sm text-gray-400">DB Migrations</div>
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

        {/* MVP Features Built */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">MVP Features Built</h2>
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              In 30 days, I built a complete peer support platform from scratch—including onboarding, AI matching, group messaging, admin tools, and analytics. Every feature is production-ready and actively being used by caregivers.
            </p>
          </div>

          {/* Onboarding Screenshot */}
          <div className="mb-12 rounded-lg overflow-hidden border border-purple-500/30">
            <img 
              src={`${import.meta.env.BASE_URL}kinlet-onboarding.png`}
              alt="Kinlet 5-step onboarding flow showing care journey selection"
              className="w-full"
            />
            <div className="bg-white/5 p-4 text-sm text-gray-400">
              5-step onboarding wizard collects detailed caregiver context for intelligent matching
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* User-Facing Features */}
            <div className="bg-white/5 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Caregiver Experience</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong>5-Step Onboarding:</strong> Relationship type, dementia stage, care duration, challenges, availability
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong>AI Matching:</strong> Compatibility scoring based on 8+ factors (19%-73% range)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong>Group Messaging:</strong> Real-time chat with reactions, replies, threading
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong>Profile Management:</strong> Update challenges, availability, preferences
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong>Email Notifications:</strong> Group invites, new messages, activity summaries
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong>Crisis Resources:</strong> 988 Suicide & Crisis Lifeline, Alzheimer's Association 24/7 hotline
                  </div>
                </li>
              </ul>
            </div>

            {/* Admin Tools */}
            <div className="bg-white/5 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Admin Tools</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong>Matching Dashboard:</strong> Sort by join date, relationship, dementia stage with live compatibility scores
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong>Group Analytics:</strong> Message volume, response times, participation rates, peak activity times
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong>Profile Management:</strong> View, edit, and manage all caregiver profiles
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong>Moderation Queue:</strong> Flag content, review reports, manage violations
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong>Waitlist Management:</strong> Send invites, track referrals, manage confirmations
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong>Email Templates:</strong> Automated group invites, reminders, digests
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Matching Dashboard Screenshot */}
          <div className="mb-12 rounded-lg overflow-hidden border border-purple-500/30">
            <img 
              src={`${import.meta.env.BASE_URL}kinlet-matching.png`}
              alt="AI-powered matching dashboard showing compatibility scores"
              className="w-full"
            />
            <div className="bg-white/5 p-4 text-sm text-gray-400">
              Admin matching dashboard with live compatibility scoring (19%-73% match rates shown)
            </div>
          </div>

          {/* Analytics Screenshot */}
          <div className="mb-12 rounded-lg overflow-hidden border border-purple-500/30">
            <img 
              src={`${import.meta.env.BASE_URL}kinlet-analytics.png`}
              alt="Group analytics showing message volume and participation"
              className="w-full"
            />
            <div className="bg-white/5 p-4 text-sm text-gray-400">
              Real-time group analytics: message volume (last 30 days), member participation (50% active), peak activity times
            </div>
          </div>

          {/* Roadmap Screenshot */}
          <div className="mb-8 rounded-lg overflow-hidden border border-purple-500/30">
            <img 
              src={`${import.meta.env.BASE_URL}kinlet-roadmap.png`}
              alt="Public product roadmap showing development phases"
              className="w-full"
            />
            <div className="bg-white/5 p-4 text-sm text-gray-400">
              Public roadmap showing transparent development: Foundation (Sprint 0, complete) → Beta Launch (Phase 2, in progress)
            </div>
          </div>
        </section>

        {/* The Product Breakthrough */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The Product Breakthrough</h2>
          
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">💡</div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-amber-400">Research-Validated MVP Must-Haves</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  After building the core platform, I realized something critical: <strong>peer support groups fail when messages go unanswered or feel too generic.</strong> I studied caregiver research (including "The 36-Hour Day") and identified 5 features that would determine whether Kinlet succeeded or failed.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I built all 5 features in 6 hours. The expected impact: <strong>Week 3 retention from ~50% to ~90%+</strong>.
                </p>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-amber-400">6 hrs</div>
                <div className="text-xs text-gray-400">Build Time</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-amber-400">80%+</div>
                <div className="text-xs text-gray-400">Response Rate Target</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-amber-400">&lt;5%</div>
                <div className="text-xs text-gray-400">Unanswered Messages</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-amber-400">90%+</div>
                <div className="text-xs text-gray-400">Week 3 Retention Goal</div>
              </div>
            </div>

            {/* The 5 Features */}
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-amber-400 font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-amber-400 mb-1">Challenge Tags</h4>
                    <p className="text-sm text-gray-300 mb-2">
                      9 research-validated tags (🌅 Sundowning, 🔁 Repetitive questions, 😔 Grief day, 💼 Work/life balance, etc.) make support <em>specific</em>, not generic. Target: 60%+ tag usage.
                    </p>
                    <p className="text-xs text-gray-400">
                      <strong>Why it matters:</strong> Caregivers need support for specific struggles, not "I'm having a hard day."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-amber-400 font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-amber-400 mb-1">Small Win Celebrations</h4>
                    <p className="text-sm text-gray-300 mb-2">
                      Mood tracking with 3 options: ✨ Small win! 🎉, 💪 Hanging in there, 😔 Having a hard day. Prevents doom spiral by balancing 70% hard days with 15-20% small wins.
                    </p>
                    <p className="text-xs text-gray-400">
                      <strong>Why it matters:</strong> All doom = unsustainable. Celebrating small moments is crucial for sustainable caregiving.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-amber-400 font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-amber-400 mb-1">Response Prompts</h4>
                    <p className="text-sm text-gray-300 mb-2">
                      Contextual response suggestions based on tags and mood. Example for Sundowning: "The 4pm-8pm window is brutal. I know exactly what you mean." Increases response rate from ~40% → 80%+.
                    </p>
                    <p className="text-xs text-gray-400">
                      <strong>Why it matters:</strong> People want to help but don't know what to say. Prompts model peer-level validation ("I've been there") not platitudes ("Hang in there!").
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-amber-400 font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-amber-400 mb-1">Unanswered Alerts</h4>
                    <p className="text-sm text-gray-300 mb-2">
                      Client-side detection of messages with 0 reactions after 2 hours. Alert banner: "Someone could use some support." Ensures &lt;5% of messages go unanswered.
                    </p>
                    <p className="text-xs text-gray-400">
                      <strong>Why it matters:</strong> Isolation is the #1 risk factor for caregivers. Feeling ignored defeats the entire purpose of peer support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-amber-400 font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-amber-400 mb-1">Burnout Detection</h4>
                    <p className="text-sm text-gray-300 mb-2">
                      Mood pattern analysis triggers self-care nudges after 7 consecutive "hard days" or 14 days without a small win. Links to respite care, self-care tips, and 24/7 helpline.
                    </p>
                    <p className="text-xs text-gray-400">
                      <strong>Why it matters:</strong> Caregiver burnout is the #1 risk. Peer support + self-care resources = sustainable caregiving.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-amber-500/30">
              <p className="text-sm text-gray-300">
                <strong className="text-amber-400">The Hypothesis:</strong> Without these features, Kinlet is just another forum. <em>With</em> these features, Kinlet solves what caregiver research says people actually need: specific understanding, balanced perspective, helpful responses, no one ignored, and burnout prevention.
              </p>
            </div>
          </div>
        </section>

        {/* The AI-Native Build Process */}
        <section className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">The AI-Native Build Process</h2>
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              I built Kinlet from scratch in 30 days using an AI-augmented workflow that demonstrates how a solo designer-developer can now compete with entire teams. This wasn't about cutting corners—it was about using AI as a force multiplier while maintaining strategic oversight and quality standards.
            </p>
          </div>

          <div className="space-y-6">
            {/* Week 1 */}
            <div className="bg-white/5 border border-purple-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-xl">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Week 1: Foundation (Sprint 0)</h3>
                  <p className="text-gray-300 mb-3">
                    Product strategy, technical architecture, landing page, waitlist functionality, brand identity, legal docs (privacy/terms), and deployment infrastructure. Launched validation campaign and started collecting caregiver signups.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Deliverables:</strong> Live landing page, waitlist with email confirmation, A/B testing, analytics integration
                  </div>
                </div>
              </div>
            </div>

            {/* Week 2-4 */}
            <div className="bg-white/5 border border-purple-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-xl">2-4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Weeks 2-4: MVP Build (Phase 2)</h3>
                  <p className="text-gray-300 mb-3">
                    Built complete product: 5-step onboarding wizard, AI-powered matching algorithm with compatibility scoring, group messaging with reactions and threading, admin dashboard with analytics (message volume, participation, peak times), profile management, moderation queue, automated email notifications, and cron jobs for digests and reminders.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Technical Achievement:</strong> 18 database migrations, 40+ API endpoints, real-time messaging, sophisticated matching algorithm—all built solo
                  </div>
                </div>
              </div>
            </div>

            {/* Current */}
            <div className="bg-white/5 border border-green-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-green-400">Current: Live MVP</h3>
                  <p className="text-gray-300 mb-3">
                    Platform is live with active users. Groups are being created and matched, caregivers are messaging daily, analytics show 50% active participation, and the matching algorithm is producing 19%-73% compatibility scores across diverse caregiver profiles.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Status:</strong> Live at kinlet.care • Beta testing in progress • Gathering user feedback for Phase 3
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
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">Current Status & Metrics</h2>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-lg p-8">
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Live MVP</div>
                <div className="text-sm text-gray-400">Production Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
                <div className="text-sm text-gray-400">Active Participation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">19-73%</div>
                <div className="text-sm text-gray-400">Match Scores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5h</div>
                <div className="text-sm text-gray-400">Avg Response Time</div>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 mb-6">
              <p>
                <strong className="text-green-400">Live MVP:</strong> Full platform is live and actively being used. Caregivers are onboarding, groups are being matched, messages are flowing daily, and analytics show healthy engagement patterns.
              </p>
              <p>
                <strong className="text-purple-400">Technical Achievement:</strong> Built a production-grade SaaS platform with AI matching, real-time messaging, admin tools, analytics dashboards, automated emails, and moderation—all in 30 days as a solo founder.
              </p>
              <p>
                <strong className="text-purple-400">Open Source Framework:</strong> The entire codebase, workflow, and system architecture is available on GitHub. Every pattern, integration, and AI workflow is documented and replicable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-sm font-semibold text-purple-400 mb-2">Next Phase: Intelligence & Automation</div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• AI affinity monitoring (detect struggling caregivers)</li>
                  <li>• AI-powered matching (automate group creation)</li>
                  <li>• Sentiment analysis (track emotional well-being)</li>
                  <li>• Error notifications (proactive issue detection)</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-sm font-semibold text-purple-400 mb-2">Future: Ritual & Rhythm</div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Guided daily check-ins (15-minute ritual)</li>
                  <li>• Weekly group themes (structured connection)</li>
                  <li>• Celebration prompts (milestone recognition)</li>
                  <li>• Member preferences (notification timing)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 pt-6 border-t border-purple-500/30">
              <a
                href="https://kinlet.care"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold text-lg"
              >
                View Live Platform →
              </a>
              <a
                href="https://github.com/winzenburg/SaaS-Starter/tree/main/apps/caregiver"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold text-lg"
              >
                View on GitHub →
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

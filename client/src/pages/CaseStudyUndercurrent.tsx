import React from 'react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';

const BASE = import.meta.env.BASE_URL;

interface ScreenshotProps {
  src: string;
  alt: string;
  caption: string;
  accent?: string;
}

function Screenshot({ src, alt, caption, accent = 'border-amber-700/40' }: ScreenshotProps) {
  return (
    <div className={`mb-12 rounded-lg overflow-hidden border ${accent}`}>
      <img src={`${BASE}images/${src}`} alt={alt} className="w-full" />
      <div className="bg-white/5 px-5 py-3 text-sm text-stone-400 italic">{caption}</div>
    </div>
  );
}

const CaseStudyUndercurrent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Helmet>
        <title>Undercurrent: Career Discovery OS | Ryan Winzenburg</title>
        <meta
          name="description"
          content="An AI-powered voice interview platform that helps professionals navigate career transitions through 6 proven frameworks, 19 guided questions, and automated synthesis."
        />
        <meta property="og:title" content="Undercurrent: Career Discovery OS | Ryan Winzenburg" />
        <meta property="og:url" content="https://winzenburg.com/case-study/undercurrent" />
      </Helmet>

      {/* Back Link */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/work">
          <a className="flex items-center gap-2 px-4 py-2 bg-stone-900/80 backdrop-blur-sm border border-stone-700/50 rounded-full text-stone-300 hover:text-amber-400 hover:border-amber-600/50 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back to Work</span>
          </a>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={`${BASE}images/01_welcome.png`}
          alt="Undercurrent welcome screen"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/60 to-[#0d0d0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <div className="inline-block px-4 py-2 bg-amber-500/15 border border-amber-500/30 rounded-full mb-6">
            <span className="text-amber-400 text-sm font-medium tracking-wider">Hero Project · 2026</span>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-4 tracking-tight">
            Undercurrent
          </h1>
          <p className="text-stone-400 text-xl mb-3 tracking-widest uppercase text-sm font-medium">
            Career Discovery OS
          </p>
          <div className="w-12 h-px bg-amber-600 mx-auto mb-8" />
          <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            An AI-powered voice interview platform that helps professionals navigate career transitions through 6 proven frameworks, 19 guided questions, and automated synthesis.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
              <div className="text-3xl font-bold text-amber-400 mb-1">45-60</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider">Min Interview</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
              <div className="text-3xl font-bold text-amber-400 mb-1">6</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider">Frameworks</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
              <div className="text-3xl font-bold text-amber-400 mb-1">19</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider">Guided Questions</div>
            </div>
          </div>

          <a
            href="https://undercurrent-brown.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-black font-semibold rounded-lg transition-colors"
          >
            View Live Platform
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-stone-300 leading-relaxed mb-4">
              Whether you've just been laid off, are burning out, or quietly wondering if AI is about to make your skills obsolete, the moment of "what now?" is universally overwhelming.
            </p>
            <p className="text-stone-300 leading-relaxed mb-4">
              Traditional career coaching is expensive, scheduling is a nightmare, and the process often takes months to yield actionable insights. Personality tests and quizzes are fast, but they're reductive and rarely provide the nuanced clarity needed for major life pivots.
            </p>
            <p className="text-stone-300 leading-relaxed">
              The real design challenge: how do you build an automated system that feels like a real conversation with an expert coach? How do you extract deep, personal insights without the user feeling like they're just filling out a massive web form? This project demonstrates how AI-augmented voice interfaces can democratize access to high-end career coaching, providing synthesis and clarity faster than traditional methods.
            </p>
          </div>
        </section>

        {/* Onboarding Flow */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">Frictionless Onboarding</h2>
          <p className="text-stone-300 leading-relaxed mb-8">
            The onboarding flow is designed to build trust before asking for anything. Instead of demanding an account upfront, it walks users through the <em>Why</em>, the <em>Methodology</em>, and the <em>Structure</em> before asking for sign-in. Five screens that turn skeptics into believers.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden border border-amber-700/40">
              <img src={`${BASE}images/01_welcome.png`} alt="Undercurrent welcome screen" className="w-full" />
              <div className="bg-white/5 px-4 py-2 text-xs text-stone-400 italic">Welcome: brand and positioning before any commitment</div>
            </div>
            <div className="rounded-lg overflow-hidden border border-amber-700/40">
              <img src={`${BASE}images/02_why_this_exists.png`} alt="Why this exists screen" className="w-full" />
              <div className="bg-white/5 px-4 py-2 text-xs text-stone-400 italic">The problem statement, in the user's language</div>
            </div>
            <div className="rounded-lg overflow-hidden border border-amber-700/40">
              <img src={`${BASE}images/03_frameworks.png`} alt="6 frameworks screen" className="w-full" />
              <div className="bg-white/5 px-4 py-2 text-xs text-stone-400 italic">The methodology: credibility through rigor</div>
            </div>
            <div className="rounded-lg overflow-hidden border border-amber-700/40">
              <img src={`${BASE}images/04_interview_sections.png`} alt="Interview sections overview" className="w-full" />
              <div className="bg-white/5 px-4 py-2 text-xs text-stone-400 italic">The 8-section structure: wayfinding before the journey starts</div>
            </div>
          </div>

          <Screenshot
            src="05_ready_to_begin.png"
            alt="Ready to begin screen"
            caption="Ready to begin: Google sign-in only asked after the user understands exactly what they're signing up for"
          />
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">The Solution</h2>

          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-600/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-3 text-amber-400">What Undercurrent is</h3>
            <p className="text-stone-300 leading-relaxed">
              Not a quiz. Not a personality test. A real conversation, powered by a voice AI coach, that helps you surface what you already know about yourself but haven't had the right questions to articulate. It weaves together six proven career clarity frameworks into a single, coherent 45-60 minute interview experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { name: 'Hedgehog Concept', desc: 'What you can be best at, love, and get paid for' },
              { name: 'Ikigai', desc: 'The intersection of passion, mission, vocation, and profession' },
              { name: 'Design Your Life', desc: 'Prototype your way to a life that works for you' },
              { name: 'Zone of Genius', desc: 'Work that uses your unique gifts and creates flow' },
              { name: 'StrengthsFinder', desc: 'Build on what you naturally do best' },
              { name: 'Career Canvas', desc: 'Map the business model of your professional life' },
            ].map((f) => (
              <div key={f.name} className="bg-white/5 border border-amber-700/30 rounded-lg p-5">
                <h4 className="text-sm font-bold text-amber-400 mb-2 uppercase tracking-wider">{f.name}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">The Home Dashboard</h2>
          <p className="text-stone-300 leading-relaxed mb-8">
            After sign-in, the dashboard gives users a persistent, motivating view of their progress. They can see exactly how far they've come, which sections are complete, and resume with a single click. The copy adapts to their name and progress, making a 45-minute commitment feel manageable.
          </p>
          <Screenshot
            src="06_home_dashboard.png"
            alt="Home dashboard showing interview progress"
            caption='Dashboard at 84% completion: personalized progress, section status, and a clear "Continue Interview" CTA'
          />
        </section>

        {/* Interview UI */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">The Interview Experience</h2>
          <p className="text-stone-300 leading-relaxed mb-8">
            The core interview UI is a three-panel layout: section navigation on the left, the active question in the center, and the Coach Reflection panel on the right. Every design decision reduces cognitive load and keeps the user focused on the one thing that matters, answering honestly.
          </p>

          <Screenshot
            src="08_interview_ui.png"
            alt="Interview UI showing voice question and Coach Reflection panel"
            caption="Voice-first question with Coach Reflection panel awaiting a response"
          />

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden border border-amber-700/40">
              <img src={`${BASE}images/07_interview_audio_prompt.png`} alt="Audio prompt screen" className="w-full" />
              <div className="bg-white/5 px-4 py-2 text-xs text-stone-400 italic">Voice-first: users hear each question before responding</div>
            </div>
            <div className="rounded-lg overflow-hidden border border-amber-700/40">
              <img src={`${BASE}images/12_interview_text_input.png`} alt="Text input fallback" className="w-full" />
              <div className="bg-white/5 px-4 py-2 text-xs text-stone-400 italic">"Prefer to type instead?" gracefully degrades to text when voice isn't ideal</div>
            </div>
          </div>

          <Screenshot
            src="09_interview_section_expanded.png"
            alt="Interview section expanded in sidebar"
            caption="Section navigation: users can always see exactly where they are in the 19-question journey"
          />
        </section>

        {/* Coach Reflection Engine - Product Breakthrough */}
        <section className="mb-16">
          <div className="border border-amber-600/40 rounded-xl p-8 bg-gradient-to-br from-amber-900/10 to-orange-900/10">
            <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Product Breakthrough</div>
            <h2 className="font-serif text-3xl font-bold mb-4">The Coach Reflection Engine</h2>
            <p className="text-stone-300 leading-relaxed mb-4">
              After building the initial prototype, I realized asking good questions isn't enough. The value of a coach is in <em>how they listen</em>.
            </p>
            <p className="text-stone-300 leading-relaxed mb-4">
              I designed the Coach Reflection panel: a real-time AI response system that analyzes the user's answer and provides immediate feedback, validation, or gentle pushback before moving to the next question. It transforms the experience from an interrogation into a conversation. When users feel heard, they provide deeper, more honest answers to subsequent questions.
            </p>
          </div>

          <div className="mt-8">
            <Screenshot
              src="10_interview_question_answered.png"
              alt="Interview question answered with coach reflection visible"
              caption="The Coach Reflection panel activates after each answer, responding before the next question appears"
            />
            <Screenshot
              src="13_interview_coach_reflection.png"
              alt="Coach reflection with full answer visible"
              caption="The reflection responds to the content of the answer, not just acknowledges it. The user's full response is also preserved on screen"
            />
            <Screenshot
              src="11_interview_active_question.png"
              alt="Active question in interview"
              caption="Each question carries its framework tag, grounding the user in the methodology while they're in it"
            />
          </div>
        </section>

        {/* 8-Section Journey */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">The 8-Section Journey</h2>
          <p className="text-stone-300 leading-relaxed mb-8">
            The 19 questions are organized into 8 sections that move from present state to future vision. Each section builds on the last, so by the time users reach Synthesis, the report writes itself from what they've already said.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { n: '01', title: 'The Warm-Up', desc: 'Understanding where the user is right now in their career' },
              { n: '02', title: 'Passion & Energy', desc: 'Discovering what lights them up versus what drains them' },
              { n: '03', title: 'Skills & Genius', desc: 'Separating what they\'re great at from what makes them come alive' },
              { n: '04', title: 'Purpose & The World', desc: 'Connecting their drive to something bigger than themselves' },
              { n: '05', title: 'The Economic Engine', desc: 'Getting real about money, market value, and financial needs' },
              { n: '06', title: 'Prototyping the Future', desc: 'Moving from thinking to doing using Design Your Life principles' },
              { n: '07', title: 'Career Canvas', desc: 'Mapping the business model of the user\'s professional life' },
              { n: '08', title: 'Synthesis', desc: 'Connecting the dots into a cohesive, actionable report' },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 bg-white/5 border border-white/10 rounded-lg p-5">
                <div className="text-2xl font-bold text-amber-700/60 font-serif w-8 shrink-0">{s.n}</div>
                <div>
                  <div className="font-semibold text-white mb-1">{s.title}</div>
                  <div className="text-stone-400 text-sm leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">Technical Stack</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">Frontend</h4>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li>Next.js (App Router)</li>
                <li>TypeScript (strict mode)</li>
                <li>Tailwind CSS</li>
                <li>React 18</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">AI & Intelligence</h4>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li>Anthropic Claude</li>
                <li>Orchestration & reflection</li>
                <li>Voice-to-text processing</li>
                <li>Automated report synthesis</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">Infrastructure</h4>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li>Vercel (hosting + CI/CD)</li>
                <li>Google OAuth</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What This Demonstrates */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">What This Demonstrates</h2>
          <div className="space-y-5">
            <div className="bg-white/5 border border-amber-700/30 rounded-lg p-6">
              <h4 className="font-bold text-white mb-2">AI as an empathetic interface</h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                Undercurrent demonstrates how to use LLMs to create experiences that feel warm, perceptive, and genuinely helpful in sensitive, high-stakes contexts like career transitions, not just fast.
              </p>
            </div>
            <div className="bg-white/5 border border-amber-700/30 rounded-lg p-6">
              <h4 className="font-bold text-white mb-2">Complex state management</h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                Managing a 19-question interview where each answer informs the context of the next requires sophisticated state management and prompt engineering. I bridge the gap between UX design and AI orchestration.
              </p>
            </div>
            <div className="bg-white/5 border border-amber-700/30 rounded-lg p-6">
              <h4 className="font-bold text-white mb-2">Consumer-grade polish</h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                From the typography to the subtle UI animations, the platform feels like a premium consumer product. The design system, color palette, and interaction patterns were built from scratch to match the emotional register of the subject matter.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-stone-400 text-sm mb-1">Ready to explore it?</p>
            <a
              href="https://undercurrent-brown.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-semibold text-lg"
            >
              View Live Platform
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <Link href="/contact">
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-lg transition-colors">
              Let's Talk
            </a>
          </Link>
        </section>

      </div>
    </div>
  );
};

export default CaseStudyUndercurrent;

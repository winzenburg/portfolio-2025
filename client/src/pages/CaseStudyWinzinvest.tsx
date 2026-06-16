import React from 'react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';

const BASE = import.meta.env.BASE_URL;
const IMG = (name: string) => `${BASE}images/winzinvest_${name}`;

interface ScreenshotProps {
  src: string;
  alt: string;
  caption: string;
}

function Screenshot({ src, alt, caption }: ScreenshotProps) {
  return (
    <div className="mb-10 rounded-lg overflow-hidden border border-slate-700/50">
      <img src={src} alt={alt} className="w-full" />
      <div className="bg-slate-900 px-5 py-3 text-sm text-slate-400 italic">{caption}</div>
    </div>
  );
}

const CaseStudyWinzinvest: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Winzinvest: Execution Controls for RIAs | Ryan Winzenburg</title>
        <meta
          name="description"
          content="A fully automated stock and options trading platform that enforces rules-based execution across every client account. Built for RIAs and family offices."
        />
        <meta property="og:title" content="Winzinvest: Execution Controls for RIAs | Ryan Winzenburg" />
        <meta property="og:url" content="https://winzenburg.com/case-study/winzinvest" />
      </Helmet>

      {/* Back Link */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/work">
          <a className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back to Work</span>
          </a>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <img
          src={IMG('01_homepage_hero.png')}
          alt="Winzinvest homepage"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <div className="inline-block px-4 py-2 bg-cyan-500/15 border border-cyan-500/30 rounded-full mb-6">
            <span className="text-cyan-400 text-sm font-medium tracking-wider">Founder · Fintech · 2024 – Present</span>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-4 tracking-tight">
            Winzinvest
          </h1>
          <p className="text-slate-400 text-sm uppercase tracking-widest mb-4 font-medium">
            Execution Controls for RIAs and Family Offices
          </p>
          <div className="w-12 h-px bg-cyan-600 mx-auto mb-8" />
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
            A fully automated stock and options trading platform that enforces rules-based execution across every client account. No exceptions.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
              <div className="text-3xl font-bold text-cyan-400 mb-1">2.16</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Sharpe Ratio</div>
              <div className="text-xs text-slate-500 mt-1">5-year backtest</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
              <div className="text-3xl font-bold text-cyan-400 mb-1">3.5%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Options Income</div>
              <div className="text-xs text-slate-500 mt-1">Annualized floor</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
              <div className="text-3xl font-bold text-cyan-400 mb-1">17</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Risk Gates</div>
              <div className="text-xs text-slate-500 mt-1">On every order</div>
            </div>
          </div>

          <a
            href="https://winzinvest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors"
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

        {/* Hero screenshot */}
        <Screenshot
          src={IMG('01_homepage_hero.png')}
          alt="Winzinvest marketing homepage"
          caption="The marketing site leads with the core value proposition: systematic execution that shows its work"
        />

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-4">
              For RIAs and family offices, managing options rolls, stop adjustments, regime shifts, and covered call writes across dozens of accounts is operationally brutal. Handling it manually leads to inconsistency, missed trades, and unintended exposure.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              The industry default is to either build an expensive in-house trading desk or settle for passive index rebalancing. Neither works for advisors who want to run systematic, rules-based strategies at scale.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Winzinvest was built to bridge this gap: institutional-quality, systematic execution that connects directly to existing brokerage accounts, enforcing strict risk controls without requiring a change in custodian.
            </p>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">The Solution</h2>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-600/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">What Winzinvest is</h3>
            <p className="text-slate-300 leading-relaxed">
              A B2B SaaS execution engine that sits between the advisor's strategy and Interactive Brokers. It automates the repeatable mechanics of rules-based trading while enforcing a rigorous, 17-gate risk framework. Every order must clear all 17 checks before reaching the broker.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              { title: 'Systematic Execution', desc: 'Automates entries, exits, hard stops, and options rolls based on live market regimes' },
              { title: 'Independent Risk Gates', desc: 'Every order clears 17 checks (drawdown limits, sector exposure, position sizing) before reaching the broker' },
              { title: 'Direct Custodian Integration', desc: 'Connects to Interactive Brokers via API. Assets remain at the custodian; Winzinvest never holds funds' },
              { title: 'Firm-Level Auditability', desc: 'Separates order intent from order result, logging exactly why any signal was executed or blocked' },
            ].map((p) => (
              <div key={p.title} className="bg-white/5 border border-white/10 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">{p.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">The Dashboard</h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            The dashboard is the operational nerve center. It surfaces immediate risk state at a glance: net liquidation value, leverage, daily P&L, execution regime, and active macro events. The information hierarchy is deliberate: when real capital is at risk, the interface must project absolute reliability, not vanity metrics.
          </p>

          <Screenshot
            src={IMG('01_dashboard_overview.png')}
            alt="Winzinvest dashboard overview"
            caption="Dashboard overview: system health, setup progress, and live macro events driving execution context"
          />

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden border border-slate-700/50">
              <img src={IMG('02_dashboard_equity_curve.png')} alt="Equity curve" className="w-full" />
              <div className="bg-slate-900 px-4 py-2 text-xs text-slate-400 italic">Equity curve and portfolio-level performance metrics</div>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-700/50">
              <img src={IMG('06_dashboard_performance.png')} alt="Performance tab" className="w-full" />
              <div className="bg-slate-900 px-4 py-2 text-xs text-slate-400 italic">Performance tab with detailed return attribution</div>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-700/50">
              <img src={IMG('04_dashboard_portfolio.png')} alt="Portfolio tab" className="w-full" />
              <div className="bg-slate-900 px-4 py-2 text-xs text-slate-400 italic">Portfolio tab: open positions with real-time P&L</div>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-700/50">
              <img src={IMG('05_dashboard_risk.png')} alt="Risk tab" className="w-full" />
              <div className="bg-slate-900 px-4 py-2 text-xs text-slate-400 italic">Risk tab: exposure limits and gate status</div>
            </div>
          </div>
        </section>

        {/* Product Breakthrough */}
        <section className="mb-16">
          <div className="border border-cyan-600/40 rounded-xl p-8 bg-gradient-to-br from-cyan-900/10 to-blue-900/10">
            <div className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Product Breakthrough</div>
            <h2 className="font-serif text-3xl font-bold mb-4">Execution Controls, Not Trading Signals</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The early positioning was "better trading signals." It didn't land. The real pain point for wealth managers isn't finding trade ideas; it's the mechanical execution and compliance tracking of those ideas across multiple client accounts.
            </p>
            <p className="text-slate-300 leading-relaxed">
              By building the Firm Command Center for multi-account oversight, Winzinvest became an operational necessity rather than just a research tool. The value proposition shifted from "signals" to "execution controls," and the product finally had a clear, defensible category.
            </p>
          </div>
        </section>

        {/* What Happened Today */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">Transparent Execution Logic</h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            The "What Happened Today" module is one of the most important design decisions in the product. It shows not just what executed, but what was blocked and exactly which risk gate triggered the block. Advisors can hand this to a compliance officer and it explains itself. That's rare in trading software.
          </p>
          <Screenshot
            src={IMG('03_dashboard_daily_narrative.png')}
            alt="What Happened Today module"
            caption='"What Happened Today": 30 screened, 5 executed, 34 blocked, with named gate violations for every rejection'
          />
        </section>

        {/* Signals */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">Trading Signals</h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            The Signals view surfaces daily trade candidates with conviction scores, entry/stop/target levels, and risk-to-reward ratios. Manual-tier subscribers use this as a decision framework; automation-tier subscribers have it executed directly. The same signal powers both tiers.
          </p>

          <Screenshot
            src={IMG('08_signals.png')}
            alt="Trading signals page"
            caption="Signals page with full methodology guide so advisors understand exactly how to interpret each field"
          />
          <Screenshot
            src={IMG('09_signals_cards.png')}
            alt="Signal cards view"
            caption="Signal cards: conviction, direction, entry, stop, target, and R:R ratio on every setup"
          />
        </section>

        {/* System Architecture */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">System Architecture</h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            The platform is built on a core principle: risk controls are designed to block, not to enable. Every order passes through four stages before execution, and the system logs each stage whether the order fires or not.
          </p>

          <div className="space-y-4 mb-10">
            {[
              { n: '01', title: 'Signal Generation', desc: 'Screens strategy candidates (momentum longs, shorts, mean reversion) and options overlay opportunities against the current market regime' },
              { n: '02', title: 'Validation Center', desc: 'Orders pass through the 17-gate framework. If data is missing or risk state is ambiguous, the order is rejected and logged with the specific gate that blocked it' },
              { n: '03', title: 'Broker Routing', desc: 'Eligible orders route directly to IBKR. Hard stops are placed immediately at the broker level, ensuring protection even if software connectivity drops' },
              { n: '04', title: 'Session Monitoring', desc: 'Positions are tracked continuously, managing profit targets, failed-setup exits, and auto-rolling options at 7 DTE' },
            ].map((s) => (
              <div key={s.n} className="flex gap-5 bg-white/5 border border-white/10 rounded-lg p-5">
                <div className="text-2xl font-bold text-cyan-700/60 font-serif w-8 shrink-0">{s.n}</div>
                <div>
                  <div className="font-semibold text-white mb-1">{s.title}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <Screenshot
            src={IMG('07_dashboard_system.png')}
            alt="System status tab"
            caption="System tab: live execution engine status, broker connection health, and session state"
          />
        </section>

        {/* Firm Command Center */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">Firm Command Center</h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            Phase 3 of the product introduces multi-account oversight. Advisors get firm-wide status, a sleeve registry, and a governance queue that surfaces items requiring compliance attention. The authenticated workspace keeps the firm's context persistent across all views, so context never gets lost when switching between accounts.
          </p>
          <Screenshot
            src={IMG('10_firm_command_center.png')}
            alt="Firm Command Center"
            caption="Firm Command Center: multi-account NLV, P&L, open positions, and governance queue from a single authenticated workspace"
          />
        </section>

        {/* Performance Track Record */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">Performance & Track Record</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden border border-slate-700/50">
              <img src={IMG('12_performance_track_record.png')} alt="Performance track record" className="w-full" />
              <div className="bg-slate-900 px-4 py-2 text-xs text-slate-400 italic">Full execution history with verified backtest results</div>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-700/50">
              <img src={IMG('13_platform.png')} alt="Platform overview" className="w-full" />
              <div className="bg-slate-900 px-4 py-2 text-xs text-slate-400 italic">Platform overview page for advisor onboarding</div>
            </div>
          </div>

          <Screenshot
            src={IMG('11_pricing.png')}
            alt="Pricing page"
            caption="Pricing: tiered access from manual signals to full automation, structured for RIA firm billing"
          />
        </section>

        {/* Technical Stack */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">Technical Stack</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">Frontend</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Next.js (App Router)</li>
                <li>React</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">Execution Engine</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Python</li>
                <li>Interactive Brokers API</li>
                <li>Dedicated trading hosts</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">Data & State</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>PostgreSQL</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">Infrastructure</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Vercel (frontend)</li>
                <li>Dedicated trading hosts (execution)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What This Demonstrates */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">What This Demonstrates</h2>
          <div className="space-y-5">
            <div className="bg-white/5 border border-cyan-700/30 rounded-lg p-6">
              <h4 className="font-bold text-white mb-2">Mission-critical software design</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Winzinvest operates where accuracy and risk management are non-negotiable. Every interface decision was made with real capital consequences in mind: information hierarchy, transparent logic, calm visual language, and zero tolerance for ambiguity in execution state.
              </p>
            </div>
            <div className="bg-white/5 border border-cyan-700/30 rounded-lg p-6">
              <h4 className="font-bold text-white mb-2">Systems thinking beyond the UI</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                The product required architecting robust, fault-tolerant execution pipelines, not just screens. The 17-gate validation system, hard stops at the broker level, and session monitoring are all engineering decisions with direct UX consequences.
              </p>
            </div>
            <div className="bg-white/5 border border-cyan-700/30 rounded-lg p-6">
              <h4 className="font-bold text-white mb-2">B2B SaaS in a regulated space</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Building for RIAs means understanding compliance requirements, custodian relationships, and fiduciary obligations. The product integrates with existing legacy infrastructure (IBKR), never touches client funds, and produces auditable logs that hold up to regulatory scrutiny.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-slate-400 text-sm mb-1">See it live</p>
            <a
              href="https://winzinvest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-lg"
            >
              Visit Winzinvest.com
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

export default CaseStudyWinzinvest;

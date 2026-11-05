import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import PlaceholderImage from '@/components/PlaceholderImage';

export default function SkyddCaseStudy() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* ────────────────── TOP BREADCRUMB ────────────────── */}
      <div className="w-full max-w-5xl px-6 pt-12 pb-6">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Work</span>
        </Link>
      </div>

      {/* ────────────────── HERO & METADATA BAR ────────────────── */}
      <section className="w-full max-w-5xl px-6 pb-12 border-b border-white/[0.06]">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
          <span className="text-xs font-mono text-brand-emerald font-semibold uppercase tracking-wider">
            Flagship Case Study · Insurtech Platform
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-xs font-mono text-zinc-500">July 2025 – Present</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
          Skydd: Scaling an Eight-Product Protection Platform
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-10">
          Designing the transition from a focused insurance startup into an integrated,
          multi-product protection ecosystem across web, mobile, and customer acquisition surfaces.
        </p>

        {/* 4-Column Metadata Strip (Liam Hayes / Eclipsis Pattern) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/[0.08] text-xs font-mono">
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Role</span>
            <span className="text-zinc-200 font-medium">Lead Product Designer</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Platform Scope</span>
            <span className="text-zinc-200 font-medium">Web App, Mobile, Onboarding</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Domain</span>
            <span className="text-zinc-200 font-medium">Insurtech & Wealth Pres.</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Regulatory Backing</span>
            <span className="text-zinc-200 font-medium">NAICOM & Sterling Bank</span>
          </div>
        </div>
      </section>

      {/* ────────────────── HERO VISUAL (IMG 01) ────────────────── */}
      <div className="w-full max-w-5xl px-6 py-8">
        <PlaceholderImage
          id="IMG_01"
          title="The Platform Evolution Shift"
          filename="skydd-01-hero-platform-shift.png"
          aspectRatio="16/9"
          dimensions="2400 × 1350 px"
          description="Visual split: The legacy 2-product Auto/Health UI transitioning into the comprehensive 8-product V4 Web App Dashboard showing active policy widgets, total coverage metrics, and quick-action claims."
          sourceHints="Figma Web App Dashboard File"
        />
      </div>

      {/* ────────────────── SECTION 01: MACRO CONTEXT ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">01 / Context</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              The Nigerian Insurance Dilemma
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              Insurance penetration in Nigeria sits under <strong>1%</strong>. The barrier is rarely a lack of desire for safety—it is systemic friction: currency volatility, sudden family financial commitments (&ldquo;black tax&rdquo;), and historical consumer distrust of insurers who hide behind fine print.
            </p>
            <p>
              Traditional insurance software treats customers with hostility: demanding 14-page PDF declarations upfront, burying early cancellation penalties, and creating bureaucratic black holes when claims are submitted.
            </p>
          </div>
        </div>

        {/* Competitive Benchmark (IMG 02) */}
        <div className="my-8">
          <PlaceholderImage
            id="IMG_02"
            title="Competitive Benchmark Matrix"
            filename="skydd-02-competitive-benchmark.png"
            aspectRatio="16/9"
            dimensions="2000 × 1125 px"
            description="Teardown comparison evaluating PiggyVest, Cowrywise, Risevest, and traditional insurers against Skydd across: Onboarding friction, Penalty transparency, Emergency liquidity, and Claims verification."
            sourceHints="Competitive Research Deck"
          />
        </div>

        {/* Pre/Post Purchase Friction (IMG 03) */}
        <div className="my-8">
          <PlaceholderImage
            id="IMG_03"
            title="Pre-Purchase vs. Post-Purchase Friction Framework"
            filename="skydd-03-friction-framework.png"
            aspectRatio="16/9"
            dimensions="2000 × 1125 px"
            description="Diagnostic flow diagram illustrating customer breakdown points: Mandatory wallet funding (Stage 4) causing acquisition drop-off, and the unexpected missed debit (Stage 6) causing churn."
            sourceHints="Skydd Mobile Experience Report"
          />
        </div>
      </section>

      {/* ────────────────── SECTION 02: DUAL-ENGINE ARCHITECTURE ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">02 / Architecture</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              The Dual-Engine Solution
            </h2>
          </div>
          <div className="md:col-span-8 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              Skydd had to support eight distinct offerings across two fundamentally different financial models without confusing users:
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-400">
              <li className="p-3 rounded bg-zinc-900 border border-white/[0.04]">
                <strong className="text-white block mb-1">1. RISK & INDEMNITY</strong>
                Auto Guard, Wellness Plan, Property Shield, Income Shield, TravelGuard.
              </li>
              <li className="p-3 rounded bg-zinc-900 border border-white/[0.04]">
                <strong className="text-white block mb-1">2. ACCUMULATION & SAVINGS</strong>
                GoalGuard, Future Scholar Fund, Legacy Plan.
              </li>
            </ul>
          </div>
        </div>

        {/* Dual-Engine Architecture Map (IMG 04) */}
        <PlaceholderImage
          id="IMG_04"
          title="The 8-Product Dual-Engine Architecture Map"
          filename="skydd-04-dual-engine-architecture.png"
          aspectRatio="16/9"
          dimensions="2400 × 1350 px"
          description="Platform structural sitemap showing how the Web App navigation nests both engines under a unified Account, Wallet, and Policy hierarchy."
          sourceHints="Figma Sitemap & User Flow Map"
        />
      </section>

      {/* ────────────────── SECTION 03: TOP-OF-FUNNEL & WEB DASHBOARD ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">03 / Acquisition</span>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
            Life-Trigger Discovery & The Web Dashboard
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            We discarded generic marketing jargon and structured top-of-funnel conversion around tangible life triggers, validating demand before deploying backend code.
          </p>
        </div>

        {/* Marketing Page (IMG 05) */}
        <PlaceholderImage
          id="IMG_05"
          title="Marketing Landing Page: 'Protect What You\'re Building'"
          filename="skydd-05-marketing-landing-page.png"
          aspectRatio="16/10"
          dimensions="2560 × 1600 px"
          description="Full desktop marketing hero section: photography-led layout, partner trust strip (NAICOM, Sterling Bank), and live product cards."
          sourceHints="Figma Marketing Web File node-id=9066-3593"
        />

        {/* Waitlist Modal (IMG 06) */}
        <PlaceholderImage
          id="IMG_06"
          title="Interactive Demand-Filter Waitlist"
          filename="skydd-06-waitlist-modal.png"
          aspectRatio="16/10"
          dimensions="2560 × 1600 px"
          description="Desktop and mobile views of the Interactive Waitlist modal showing category selection chips, target contribution calculators, and instant verification feedback."
          sourceHints="Figma Waitlist Flow"
        />

        {/* Populated Dashboard (IMG 07) */}
        <PlaceholderImage
          id="IMG_07"
          title="Populated Web App Dashboard"
          filename="skydd-07-dashboard-populated.png"
          aspectRatio="16/9"
          dimensions="2560 × 1440 px"
          description="High-density customer dashboard displaying active user state with ₦4.2M total coverage, active GoalGuard progress bar, Auto Guard renewal countdown, and quick-action claims dock."
          sourceHints="Figma Web App File"
        />
      </section>

      {/* ────────────────── SECTION 04: CORE JOURNEYS & EDGE CASES ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">04 / Product Journeys</span>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
            Deep Dives: GoalGuard, Auto Guard & Future Scholar
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Designing across divergent financial mechanics while maintaining an identical 6-step lifecycle continuum.
          </p>
        </div>

        {/* GoalGuard Modeler (IMG 08) */}
        <PlaceholderImage
          id="IMG_08"
          title="GoalGuard Milestone & Inflation Modeler"
          filename="skydd-08-goalguard-modeler.png"
          aspectRatio="16/10"
          dimensions="2560 × 1600 px"
          description="GoalGuard configuration flow showing target savings slider (₦500k to ₦2M), contribution frequency toggle, and dynamic inflation-protection milestone chart."
          sourceHints="Figma GoalGuard Flow"
        />

        {/* Auto Guard Renewal (IMG 09) */}
        <PlaceholderImage
          id="IMG_09"
          title="Auto Guard 1-Click Renewal Engine"
          filename="skydd-09-autoguard-renewal.png"
          aspectRatio="16/10"
          dimensions="2560 × 1600 px"
          description="Side-by-side view of the 3-step Auto Guard enrolment and the 1-click renewal card displaying pre-verified vehicle chassis data and photo inspection badges."
          sourceHints="Figma Auto Guard Flow"
        />

        {/* Future Scholar (IMG 10) */}
        <PlaceholderImage
          id="IMG_10"
          title="Future Scholar Multi-Sponsor Hierarchy"
          filename="skydd-10-future-scholar-hierarchy.png"
          aspectRatio="16/10"
          dimensions="2560 × 1600 px"
          description="Future Scholar child profile showing education trust fund progress and the collaborative sponsor ledger showing external family contributions via guest links."
          sourceHints="Figma Future Scholar Flow"
        />

        {/* Defensive State Machine (IMG 11) */}
        <PlaceholderImage
          id="IMG_11"
          title="Defensive State Design: Missed Debit & Silent Grace Period"
          filename="skydd-11-defensive-states.png"
          aspectRatio="16/9"
          dimensions="2400 × 1350 px"
          description="State machine modal showing the 'Missed Contribution' recovery screen: friendly non-punitive tone, 30-day silent grace notice, automated reschedule picker, and 1-tap timeline extension."
          sourceHints="Figma Error States Library"
        />
      </section>

      {/* ────────────────── SECTION 05: HIGH-STAKES CLAIMS & CREDENTIALS ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">05 / The Moment of Loss</span>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
            De-Risking Claims & Digital Enrollee Credentials
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            When disaster strikes, users are anxious and distrustful. We replaced opaque PDF forms with guided intake, real-time SLA tracking, and scannable offline hospital credentials.
          </p>
        </div>

        {/* Claims Intake (IMG 12) */}
        <PlaceholderImage
          id="IMG_12"
          title="Claims Submission: Contextual Intake Flow"
          filename="skydd-12-claims-intake.png"
          aspectRatio="16/10"
          dimensions="2560 × 1600 px"
          description="Multi-step claims submission flow showing conversational incident intake, guided photo evidence upload with perspective overlays, and immediate confirmation receipt."
          sourceHints="Figma Claims Experience"
        />

        {/* Live Claims Tracker (IMG 13) */}
        <PlaceholderImage
          id="IMG_13"
          title="The Live 4-Stage Claims Tracker"
          filename="skydd-13-claims-live-tracker.png"
          aspectRatio="16/9"
          dimensions="2560 × 1440 px"
          description="Live Claims Tracking interface showing current status ('Under Assessment - 48h SLA'), direct phone/chat contact for the assigned claims officer, and real-time audit log."
          sourceHints="Figma Policy Management Flow"
        />

        {/* Digital Enrollee Card (IMG 14) */}
        <PlaceholderImage
          id="IMG_14"
          title="Digital Enrollee Card & Clinic Verification QR"
          filename="skydd-14-enrollee-card-qr.png"
          aspectRatio="4/3"
          dimensions="2000 × 1500 px"
          description="High-contrast mobile Enrollee Card UI showing: Active status badge, scannable hospital QR code, pre-approved medical limits, emergency HMO hotline, and Dependent Switcher."
          sourceHints="Figma Mobile Enrollee Card Component"
        />
      </section>

      {/* ────────────────── SECTION 06: DESIGN SYSTEM & RESULTS ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">06 / Infrastructure</span>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
            Enterprise Design System & Verified Impact
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            A tokenized 8pt spatial baseline supporting 7 standardized policy states across all 8 products without fragmented frontend debt.
          </p>
        </div>

        {/* Design System (IMG 15) */}
        <PlaceholderImage
          id="IMG_15"
          title="The Design System Infrastructure & Token Matrix"
          filename="skydd-15-design-system-tokens.png"
          aspectRatio="16/9"
          dimensions="2400 × 1350 px"
          description="Comprehensive Figma component sheet showing 6 input validation states, status badge matrices across all 8 products, modal dialog architectures, and responsive layout grids."
          sourceHints="Figma Style & Component Library"
        />

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 p-8 rounded-2xl bg-[#0e0e11] border border-white/[0.08]">
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">95%</div>
            <span className="text-xs font-mono text-brand-emerald uppercase tracking-wider block mt-1">Funnel Completion</span>
            <p className="text-xs text-zinc-400 mt-2">Conversion on the interactive category waitlist, outpacing standard forms.</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">68%</div>
            <span className="text-xs font-mono text-brand-emerald uppercase tracking-wider block mt-1">Demand Concentration</span>
            <p className="text-xs text-zinc-400 mt-2">Captured verified interest for GoalGuard and Wellness before building backends.</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">0-Debt</div>
            <span className="text-xs font-mono text-brand-emerald uppercase tracking-wider block mt-1">Engineering Velocity</span>
            <p className="text-xs text-zinc-400 mt-2">Unified 6-stage lifecycle componentry halved frontend sprint delivery time.</p>
          </div>
        </div>

        {/* Next Case Study Navigation */}
        <div className="pt-12 border-t border-white/[0.08] flex items-center justify-between">
          <Link
            href="/#work"
            className="text-xs font-mono text-zinc-500 hover:text-white transition-colors"
          >
            ← All Work
          </Link>
          <Link
            href="/work/loqd"
            className="group flex items-center gap-3 text-right"
          >
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Next Case Study</span>
              <span className="text-sm font-semibold text-white group-hover:text-brand-orange transition-colors">
                LOQD: Physical Custody & Nightlife →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

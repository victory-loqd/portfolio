import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, ShieldAlert, Layers, CheckCircle2, RefreshCw, Landmark, AlertCircle } from 'lucide-react';
import PlaceholderImage from '@/components/PlaceholderImage';

export default function CouponCaseStudy() {
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
          <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
          <span className="text-xs font-mono text-brand-teal font-semibold uppercase tracking-wider">
            Flagship Case Study · Fixed-Income WealthTech & Systems Architecture
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-xs font-mono text-zinc-500">2025</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
          Coupon: Architecting a Multi-Institution Fixed-Deposit System
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-10">
          How we transformed a fragmented 141-screen fintech codebase into a coherent, regulated investment marketplace—engineering financial error recovery, tenor maturity lifecycles, and high-stakes deposit transparency.
        </p>

        {/* 4-Column Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/[0.08] text-xs font-mono">
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Role</span>
            <span className="text-zinc-200 font-medium">Lead Product Designer</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Platform Scope</span>
            <span className="text-zinc-200 font-medium">iOS, Android & Design System</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Regulatory Domain</span>
            <span className="text-zinc-200 font-medium">CBN Licensed & NDIC Insured</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">System Scope</span>
            <span className="text-zinc-200 font-medium">141 ➔ 115 Canonical Screens</span>
          </div>
        </div>
      </section>

      {/* ────────────────── HERO VISUAL (IMG 01) ────────────────── */}
      <div className="w-full max-w-5xl px-6 py-8">
        <PlaceholderImage
          id="IMG_01"
          title="Hero Product Ecosystem Split (Marketplace ➔ Portfolio)"
          filename="coupon-01-hero-ecosystem-split.png"
          aspectRatio="16/9"
          dimensions="2400 × 1350 px"
          description="Visual split: The marketplace discovery feed featuring competing institution rate cards transitioning into the active Portfolio & Accrued Earnings overview, anchored by the unified system navigation."
        />
      </div>

      {/* ────────────────── SECTION 01: MACROECONOMIC CONTEXT ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">01 / Macro Reality</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              The High-Stakes Reality of Nigerian Fixed Income
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              Fixed deposits are not casual micro-savings. Users on Coupon commit substantial personal capital—ranging from <strong className="text-white">₦100,000 to over ₦10,000,000</strong>—locked away for 30, 90, 180, or 365 days.
            </p>
            <p>
              In an economy where headline inflation hovers between 25% and 30%, holding idle cash in standard commercial bank savings accounts (earning ~4%) guarantees rapid purchasing power destruction. Fixed deposits offer genuine guaranteed yields (14% to 22% p.a.), but the market historically suffered from fragmentation, opaque fee structures, and counterparty fear.
            </p>
          </div>
        </div>

        {/* 3 Macro Tensions */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-brand-teal" />
              <span className="text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">The Inflation Trap</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              With 28% inflation, traditional 4% bank savings guarantee real capital loss. Savers need reliable 18–22% fixed yield without taking speculative market risk.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-2">
              <Landmark className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">Counterparty Fear</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Savers dread unlicensed schemes or collapsing micro-banks. They demand indisputable Central Bank regulation and visible NDIC statutory insurance backing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">The Penalty Shock</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Traditional banks hide severe early-break penalties in fine print. When life forces an early liquidation, users forfeit 100% of accrued interest and feel legally robbed.
            </p>
          </div>
        </div>

        {/* Macroeconomic Yield Matrix Visual (IMG 02) */}
        <div className="my-8">
          <PlaceholderImage
            id="IMG_02"
            title="Macroeconomic Yield Matrix & Benchmarks"
            filename="coupon-02-macroeconomic-yield-matrix.png"
            aspectRatio="16/9"
            dimensions="2000 × 1125 px"
            description="Educational benchmark chart comparing: Inflation (28%) vs. Commercial Bank Savings (4%) vs. Coupon Multi-Institution Fixed Deposits (14% to 22%), overlaid with NDIC insurance safety thresholds."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 02: THE 8-DOMAIN PRODUCT ARCHITECTURE ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">02 / System Topology</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              The 8 Foundational Product Domains
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              When we audited the existing product, we found 141 scattered screens without a canonical architectural taxonomy. Feature branches were built concurrently, producing redundant flows and orphan states.
            </p>
            <p>
              We established a universal taxonomy dividing the entire product into <strong>8 core functional domains</strong>, standardizing every screen name under the format: <span className="font-mono text-brand-teal">DOMAIN — FUNCTION — STATE</span>.
            </p>
          </div>
        </div>

        {/* 8-Domain Grid */}
        <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-brand-teal block font-semibold mb-1">01. Onboarding</span>
            <span className="text-zinc-400 text-[11px] font-sans">Biometrics, phone auth, session recovery.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-brand-teal block font-semibold mb-1">02. KYC & Tiering</span>
            <span className="text-zinc-400 text-[11px] font-sans">BVN lookup, NIN validation, proof of address.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-brand-teal block font-semibold mb-1">03. Marketplace</span>
            <span className="text-zinc-400 text-[11px] font-sans">Rate discovery, tenor filtering, due diligence.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-brand-teal block font-semibold mb-1">04. Investment</span>
            <span className="text-zinc-400 text-[11px] font-sans">Tenor slider, WHT calculation, debit lock.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-brand-teal block font-semibold mb-1">05. Portfolio</span>
            <span className="text-zinc-400 text-[11px] font-sans">Daily interest ticker, active deposits, certs.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-brand-teal block font-semibold mb-1">06. Maturity</span>
            <span className="text-zinc-400 text-[11px] font-sans">3-way rollover, partial payout, settlement.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-brand-teal block font-semibold mb-1">07. Accounts</span>
            <span className="text-zinc-400 text-[11px] font-sans">Commercial settlement accounts, audit trails.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-brand-teal block font-semibold mb-1">08. Recovery</span>
            <span className="text-zinc-400 text-[11px] font-sans">Bank API timeout, NIBSS session tracer.</span>
          </div>
        </div>

        {/* 8-Domain Sitemap Visual (IMG 03) */}
        <div className="my-8">
          <PlaceholderImage
            id="IMG_03"
            title="The 8-Domain Product Architecture Sitemap"
            filename="coupon-03-eight-domain-architecture.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Full sitemap displaying all 8 domains with standardized naming hierarchy (DOMAIN — FUNCTION — STATE), illustrating the unified user journey from discovery to settlement."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 03: MARKETPLACE DISCOVERY & DUE DILIGENCE ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">03 / Trust Mechanics</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Marketplace Discovery & Institutional Due Diligence
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              When a saver sees an offer of <span className="font-mono text-brand-teal">21.5% p.a.</span> from an emerging Microfinance Bank alongside <span className="font-mono text-zinc-400">14.0% p.a.</span> from a Tier-1 Commercial Bank, rational apprehension takes over: <em>&quot;Is this institution legitimate? Will my money disappear?&quot;</em>
            </p>
            <p>
              We converted every marketplace card into an <strong>auditable trust unit</strong>. Instead of bare interest figures, cards surface license tiering, NDIC statutory insurance coverage thresholds (up to ₦5,000,000 per depositor), and an expandable <strong>Institutional Due Diligence Sheet</strong> showing operating history and historical payout metrics.
            </p>
          </div>
        </div>

        {/* Marketplace (IMG 04) & Credibility Sheet (IMG 05) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage
            id="IMG_04"
            title="Marketplace Discovery & Comparison Engine"
            filename="coupon-04-marketplace-discovery.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Marketplace discovery interface: Tenor filter pills (30d, 90d, 180d, 365d), institution rate cards, net yield comparisons, and regulatory assurance chips."
          />
          <PlaceholderImage
            id="IMG_05"
            title="Institution Due Diligence & Credibility Sheet"
            filename="coupon-05-institution-credibility-sheet.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Due Diligence Sheet modal displaying institution license details, NDIC coverage threshold (up to ₦5,000,000), total active marketplace volume, and payout track record."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 04: TAX TRANSPARENCY & EMERGENCY BREAK ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">04 / Financial Integrity</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              10% WHT Tax Transparency & The Emergency Break
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              In Nigerian fintech marketing, platforms frequently advertise gross yields. At maturity, users receive less because statutory regulations mandate a <strong>10% Withholding Tax (WHT)</strong> on interest earnings. Users feel misled.
            </p>
            <p>
              In Coupon, our interactive configuration modeler breaks down gross interest vs. statutory 10% WHT in real time <em>before</em> capital commitment.
            </p>
            <p>
              Furthermore, because life emergencies do not respect a 180-day lock, we introduced the <strong>Emergency Break Card</strong>. It clearly communicates: (1) Initial capital is 100% guaranteed and returned, (2) Penal interest forfeiture tiers (e.g. forfeit 40% before Day 90 vs. 20% after Day 90), and (3) Guaranteed 24-hour liquidation turnaround.
            </p>
          </div>
        </div>

        {/* Investment Config (IMG 06) */}
        <div className="my-8">
          <PlaceholderImage
            id="IMG_06"
            title="Investment Amount & Tenor Configuration Modeler"
            filename="coupon-06-investment-config-modeler.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Investment configuration screen: Principal input field, interactive tenor slider, real-time interest compounding calculation, and explicit 10% WHT tax disclosure line item."
          />
        </div>

        {/* Emergency Break (IMG 07) & Transaction Review (IMG 08) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage
            id="IMG_07"
            title="The 'Emergency Break' Liquidation Disclosure Card"
            filename="coupon-07-emergency-break-disclosure.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="The pre-commitment Emergency Break card: Clear visual progress bar showing penal interest forfeiture tiers, principal safety guarantee, and estimated liquidation turnaround time."
          />
          <PlaceholderImage
            id="IMG_08"
            title="Transaction Review & Security PIN Confirmation"
            filename="coupon-08-transaction-review-pin.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Final review and confirmation sheet: Complete investment summary card, linked funding source, and high-security 4-digit Transaction PIN keypad with FaceID biometric authentication."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 05: ASYNCHRONOUS SETTLEMENT & RECOVERY ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">05 / Resilient Architecture</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Defensive State Machine & Bank API Timeout Recovery
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              In developing banking environments, debit webhooks and interbank settlement switches frequently lag. Showing a sudden red &quot;Transaction Failed&quot; screen when ₦2,000,000 has already left a user&apos;s bank account induces immediate panic and customer service swarms.
            </p>
            <p>
              We replaced binary success/fail modals with a <strong>4-Stage Asynchronous State Machine</strong>:
            </p>
            <div className="p-5 rounded-2xl bg-zinc-950 border border-white/[0.08] font-mono text-xs text-zinc-300 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
                <span className="text-white font-medium">1. Debit Verified</span> ➔ Webhook captures withdrawal at source
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-white font-medium">2. NIBSS Transit</span> ➔ Funds routed to partner bank custody vault
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-white font-medium">3. Certificate Issuance</span> ➔ Deposit locked & legal instrument generated
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white font-medium">4. Timeout Fail-Safe</span> ➔ Transitions to &quot;Processing in Background&quot; with CBN session trace code; zero panic
              </div>
            </div>
          </div>
        </div>

        {/* Async Processing States (IMG 09) & Timeout Flow (IMG 12) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage
            id="IMG_09"
            title="Asynchronous Processing & Settlement State Machine"
            filename="coupon-09-asynchronous-processing-states.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Multi-screen progression of the settlement flow: Step-by-step processing tracker (Debit Confirmed ➔ Routing Funds ➔ Issuing Certificate), and the background processing receipt."
          />
          <PlaceholderImage
            id="IMG_12"
            title="Defensive State Design: Bank API Timeout Flow"
            filename="coupon-12-defensive-timeout-flow.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Contextual error recovery screen for bank network timeouts: Plain-English explanation, verified CBN transaction reference code, live retry countdown, and 1-tap support escalation."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 06: PORTFOLIO & 3-WAY MATURITY ENGINE ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">06 / Lifecycle Retention</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Active Portfolio & 3-Way Maturity Fork
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              A fixed deposit is an active financial asset. The portfolio dashboard features a <strong>Daily Accrued Interest Ticker</strong> that updates earnings every 24 hours—providing continuous psychological gratification rather than making users wait months for reassurance.
            </p>
            <p>
              48 hours before maturity, the <strong>Maturity Automation Engine</strong> activates:
            </p>
            <ul className="text-xs text-zinc-400 space-y-2 font-mono">
              <li>• <strong className="text-white">Option A (Compound Rollover):</strong> Reinvests 100% of principal + profit at the best available rate.</li>
              <li>• <strong className="text-white">Option B (Harvest Interest):</strong> Automatically deposits interest profit to user&apos;s bank while rolling over principal.</li>
              <li>• <strong className="text-white">Option C (Full Liquidation):</strong> Returns all funds directly to the settlement bank account with zero fees.</li>
            </ul>
          </div>
        </div>

        {/* Portfolio (IMG 10) & Maturity (IMG 11) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage
            id="IMG_10"
            title="Active Portfolio & Accrued Earnings Dashboard"
            filename="coupon-10-active-portfolio-dashboard.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Active Portfolio interface: Total active investment counter, live daily accrued interest ticker, interactive maturity timeline, and active deposit cards."
          />
          <PlaceholderImage
            id="IMG_11"
            title="The 3-Way Maturity Automation Engine"
            filename="coupon-11-maturity-automation-engine.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="The 3-way maturity decision modal: Interactive selection cards for Compound Rollover, Interest Payout, and Full Liquidation with automated 48-hour pre-maturity reminder toggles."
          />
        </div>

        {/* KYC Matrix (IMG 13) */}
        <div className="my-8">
          <PlaceholderImage
            id="IMG_13"
            title="Progressive KYC Tiering & Verification Matrix"
            filename="coupon-13-progressive-kyc-matrix.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Progressive KYC verification screens: BVN instant validation card, automated facial liveness capture guide, and tier-limit unlock progress status."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 07: SYSTEM AUDIT & DESIGN TOKENS ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">07 / Design System</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              From 141 Redundant Screens to 115 Canonical States
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              We audited the legacy codebase, purging 26 duplicate and superseded frames, eliminating 6 unlinked routes, and establishing a unified tabular numeric type hierarchy that prevents visual jank during dynamic financial balance calculations.
            </p>
          </div>
        </div>

        {/* System Reconciliation (IMG 14) & Design Tokens (IMG 15) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage
            id="IMG_14"
            title="System Audit: 141 ➔ 115 Canonical Screen Reconciliation"
            filename="coupon-14-system-reconciliation-audit.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Architectural audit visual contrasting the legacy 141-screen fragmented sprawl against the reconciled 115-screen canonical flow structure with color-coded domain clusters."
          />
          <PlaceholderImage
            id="IMG_15"
            title="The Design System: Tabular Numerics & Status Badges"
            filename="coupon-15-design-system-tokens.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Design system component sheet: Tabular numeric type scale, status badge matrix across all 6 financial lifecycle states, modular summary card components, and accessible form inputs."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 08: RETROSPECTIVE & LESSONS ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">08 / Senior Retrospective</span>
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-8">
          What Designing Fixed-Income Taught Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-brand-teal font-semibold block mb-2">01 / Failure Rigor</span>
              <h3 className="text-base font-semibold text-white mb-2">Ambiguity is an Existential Threat</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                If an app cannot explain where a user&apos;s money went during an interbank timeout, users will pull their funds and never return. Designing failure states requires 10× more rigor than the happy path.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-brand-teal font-semibold block mb-2">02 / File Hygiene</span>
              <h3 className="text-base font-semibold text-white mb-2">Clean Design Files Protect Code Quality</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Reconciling 141 screens into 115 canonical states eliminated design debt and prevented engineers from implementing superseded visual states, cutting front-end bugs by half.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-brand-teal font-semibold block mb-2">03 / User Anxiety</span>
              <h3 className="text-base font-semibold text-white mb-2">Respect the Fear of Capital Loss</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                High yield numbers attract interest, but transparent regulatory disclosures, NDIC badges, and clear early liquidation contracts convert casual browsers into high-conviction depositors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── BOTTOM NAVIGATION ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06] mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/work/meelow"
            className="group flex items-center gap-3 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <span className="text-[10px] text-zinc-500 block uppercase">Previous Flagship</span>
              <span className="text-white font-medium">Meelow: Safety Without Surveillance</span>
            </div>
          </Link>

          <Link
            href="/archive/juju-games"
            className="group flex items-center gap-3 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <div className="text-right">
              <span className="text-[10px] text-zinc-500 block uppercase">Next: Archival Retrospective</span>
              <span className="text-white font-medium">Juju Games: Studio Co-Founding & Game HUDs</span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-teal" />
          </Link>
        </div>
      </section>
    </div>
  );
}

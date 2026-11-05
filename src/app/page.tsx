import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown, Shield, Layers, Box, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import PlaceholderImage from '@/components/PlaceholderImage';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-7xl px-6 pt-24 md:pt-36 pb-20 border-b border-white/[0.06]">
        <div className="max-w-4xl flex flex-col gap-8">
          {/* Status Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-subtle border border-white/[0.08] w-fit">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
            <span className="text-xs font-mono text-zinc-300">
              Based in Lagos · Designing for Global & African Scale · Open to Senior Roles
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.08]">
            I bring structure to complex and early-stage products.
          </h1>

          {/* Sub-Headline & Positioning */}
          <p className="text-base sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl">
            I design software with a lot of moving parts—unraveling messy constraints,
            mapping asymmetric state machines, and turning ambiguous business logic into
            calm, dependable interfaces.
          </p>

          {/* Current Roles Indicator */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-zinc-400 font-mono pt-2 border-t border-white/[0.06]">
            <div>
              <span className="text-zinc-600">Now: </span>
              <span className="text-zinc-200 font-semibold">Lead Product Designer</span> at Skydd
            </div>
            <div>
              <span className="text-zinc-600">Building: </span>
              <span className="text-brand-orange font-semibold">LOQD</span> (Physical Custody)
            </div>
            <div>
              <span className="text-zinc-600">Past: </span>
              <span className="text-zinc-400">Co-founder</span> at Juju Games
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="/cv/Victory_Chukwuma_Product_Designer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface border border-white/[0.12] text-zinc-200 font-medium text-xs hover:bg-zinc-800 transition-all"
            >
              <span>Download CV (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: TRUST & PROOF STRIP
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-7xl px-6 py-16 border-b border-white/[0.06]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-xl bg-[#0e0e11] border border-white/[0.06] flex flex-col justify-between h-44">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Platform Scale</span>
              <Shield className="w-4 h-4 text-brand-emerald" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">8 Products</div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Unified risk & accumulation architecture under NAICOM regulation & Sterling Bank.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#0e0e11] border border-white/[0.06] flex flex-col justify-between h-44">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">0-to-1 Venture</span>
              <Box className="w-4 h-4 text-brand-orange" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">4 Roles</div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Physical-digital custody operations syncing Customer, Counter, Runner & Admin.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#0e0e11] border border-white/[0.06] flex flex-col justify-between h-44">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Systems Discipline</span>
              <Layers className="w-4 h-4 text-brand-teal" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">70+ States</div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Tokenized component libraries, rigorous error handling, and asynchronous API recovery.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#0e0e11] border border-white/[0.06] flex flex-col justify-between h-44">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">External Validation</span>
              <Sparkles className="w-4 h-4 text-brand-amber" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Press & Grants</div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Featured in BusinessDay, International Games Magazine, and Behance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: FEATURED COMMERCIAL WORK (The 4 Flagships)
      ───────────────────────────────────────────────────────────── */}
      <section id="work" className="w-full max-w-7xl px-6 py-24 border-b border-white/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
              Featured Systems
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Selected Work
            </h2>
          </div>
          <p className="text-xs md:text-sm text-zinc-400 max-w-md font-mono">
            Structured transformations across insurtech scale, physical custody,
            asymmetric permissions, and multi-institution finance.
          </p>
        </div>

        {/* 4 Flagship Projects Stack */}
        <div className="flex flex-col gap-24">
          {/* ─────────────────── PROJECT 01: SKYDD ─────────────────── */}
          <article className="group rounded-2xl bg-[#0d0d0f] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Metadata & Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-brand-emerald font-semibold">01 / PLATFORM EXPANSION</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs font-mono text-zinc-500">2025–PRESENT</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
                    Skydd: Scaling an Eight-Product Protection Platform
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    Designing the transition from a focused 2-product insurance startup into
                    a unified, multi-product wealth preservation and protection ecosystem across
                    responsive web, mobile, and acquisition surfaces.
                  </p>

                  {/* Signals List */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06] mb-8">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                      <span><strong>Dual-Engine Architecture:</strong> Unified accumulation & risk indemnity</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                      <span><strong>High-Stakes Claims:</strong> Transparent 4-stage live tracking SLA</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                      <span><strong>Acquisition:</strong> Interactive waitlist with 95% funnel completion</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    Role: Lead Product Designer
                  </span>
                  <Link
                    href="/work/skydd"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white group-hover:text-brand-emerald transition-colors"
                  >
                    <span>Read Complete Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Artifact */}
              <div className="lg:col-span-7">
                <Link href="/work/skydd">
                  <PlaceholderImage
                    id="IMG_01"
                    title="Skydd: 8-Product Platform Shift & Web Dashboard"
                    filename="skydd-01-hero-platform-shift.png"
                    aspectRatio="16/10"
                    dimensions="2560 × 1600 px"
                    description="High-fidelity visual architecture showing the transition: Old 2-product siloed UI evolving into the expansive 8-product web application dashboard."
                    sourceHints="Figma New Website & Web App File"
                  />
                </Link>
              </div>
            </div>
          </article>

          {/* ─────────────────── PROJECT 02: LOQD ─────────────────── */}
          <article className="group rounded-2xl bg-[#0d0d0f] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Metadata & Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-brand-orange font-semibold">02 / 0-TO-1 SERVICE DESIGN</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs font-mono text-zinc-500">2026–PRESENT</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
                    LOQD: Designing Trust Into a Real-World Custody System
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    Building a temporary custody service for chaotic Nigerian nightlife—spanning
                    physical rack operations, four synchronized software roles, and fail-safe
                    state machines for dead batteries and network blackouts.
                  </p>

                  {/* Signals List */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06] mb-8">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span><strong>Payment != Custody:</strong> Decoupled legal acceptance from Paystack</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span><strong>Surge Engine:</strong> Leaving Soon departure intent cuts queue to &lt;25s</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span><strong>4 Synchronized Roles:</strong> Customer, Counter, Runner & Admin MFA</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    Role: Founder & Product Lead
                  </span>
                  <Link
                    href="/work/loqd"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white group-hover:text-brand-orange transition-colors"
                  >
                    <span>Read Complete Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Artifact */}
              <div className="lg:col-span-7">
                <Link href="/work/loqd">
                  <PlaceholderImage
                    id="IMG_01"
                    title="LOQD: 4-Role System Architecture Split"
                    filename="loqd-01-hero-4-role-split.png"
                    aspectRatio="16/10"
                    dimensions="2560 × 1600 px"
                    description="Panoramic composition displaying the 4 distinct interfaces: Customer mobile web, Counter tablet terminal, Runner task list, and Admin operations dashboard."
                    sourceHints="Figma PlayGround File CjWgYU790OC2oiejs5Icki"
                  />
                </Link>
              </div>
            </div>
          </article>

          {/* ─────────────────── PROJECT 03: MEELOW ─────────────────── */}
          <article className="group rounded-2xl bg-[#0d0d0f] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Metadata & Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-brand-teal font-semibold">03 / PERMISSION SYSTEMS</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs font-mono text-zinc-500">SYSTEM ARCHITECTURE</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
                    Meelow: Safety Without Surveillance
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    Engineering a consent-first personal safety and location system—balancing
                    deep family reassurance against the psychological burden of constant
                    tracking in an African urban super-app.
                  </p>

                  {/* Signals List */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06] mb-8">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                      <span><strong>Asymmetric Visibility:</strong> Independent 'Who Sees Me' vs 'Who I See'</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                      <span><strong>Approximate Geofencing:</strong> 1.5km regional blur eliminates micro-tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                      <span><strong>Duress Defense:</strong> Fake cancellation PIN for coerced robbery scenarios</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    Role: Lead Product Designer
                  </span>
                  <Link
                    href="/work/meelow"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white group-hover:text-brand-teal transition-colors"
                  >
                    <span>Read Complete Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Artifact */}
              <div className="lg:col-span-7">
                <Link href="/work/meelow">
                  <PlaceholderImage
                    id="IMG_01"
                    title="Meelow: Safety Without Surveillance Ecosystem"
                    filename="meelow-01-hero-safety-without-surveillance.png"
                    aspectRatio="16/10"
                    dimensions="2560 × 1600 px"
                    description="Mobile app map interface showing calm, non-invasive approximate location bubbles, paired with the granular directional permission sheet."
                    sourceHints="Figma Meelow App & Admin System"
                  />
                </Link>
              </div>
            </div>
          </article>

          {/* ─────────────────── PROJECT 04: COUPON ─────────────────── */}
          <article className="group rounded-2xl bg-[#0d0d0f] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Metadata & Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-brand-amber font-semibold">04 / FINTECH ARCHITECTURE</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs font-mono text-zinc-500">SYSTEM AUDIT</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
                    Coupon: Multi-Institution Fixed-Deposit System
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    Re-architecting a fragmented 141-screen investment codebase into a coherent
                    wealth marketplace—designing for bank API network timeouts, net tax yield
                    transparency, and 3-way deposit maturity lifecycles.
                  </p>

                  {/* Signals List */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06] mb-8">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-amber flex-shrink-0" />
                      <span><strong>System Audit:</strong> 141 screens reconciled into 115 canonical frames</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-amber flex-shrink-0" />
                      <span><strong>Defensive Timeout:</strong> Asynchronous bank state machine with trace IDs</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-amber flex-shrink-0" />
                      <span><strong>Emergency Break:</strong> Pre-commitment early liquidation terms card</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    Role: Lead Product Designer
                  </span>
                  <Link
                    href="/work/coupon"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white group-hover:text-brand-amber transition-colors"
                  >
                    <span>Read Complete Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Artifact */}
              <div className="lg:col-span-7">
                <Link href="/work/coupon">
                  <PlaceholderImage
                    id="IMG_01"
                    title="Coupon: Fixed-Deposit Marketplace & Portfolio"
                    filename="coupon-01-hero-ecosystem-split.png"
                    aspectRatio="16/10"
                    dimensions="2560 × 1600 px"
                    description="Marketplace discovery feed featuring competing institution rate cards transitioning into the active Portfolio & Accrued Earnings overview."
                    sourceHints="Coupon Mobile Design System File"
                  />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 04: ARCHIVAL RETROSPECTIVES (Juju & Earlier Works)
      ───────────────────────────────────────────────────────────── */}
      <section id="archives" className="w-full max-w-7xl px-6 py-24 border-b border-white/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
              Historical Roots & Range
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Studio & Systems Archive
            </h2>
          </div>
          <p className="text-xs md:text-sm text-zinc-400 max-w-md font-mono">
            Where my systems thinking was forged: game studio production, real-time telemetry,
            mobility platforms, and cross-border logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 05: Juju Games */}
          <Link
            href="/archive/juju-games"
            className="group p-8 rounded-2xl bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                  05 / STUDIO CO-FOUNDING
                </span>
                <span className="text-xs font-mono text-zinc-500">2023–2025</span>
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-zinc-200 transition-colors mb-3">
                Juju Games: Studio Archive & HUD Systems
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                Co-founding an independent African game studio. Designed spatial cockpit HUDs,
                grid inventories, and branching narrative trees across 3 titles (*Vodou*, *Boju Boju*, *Payton Ville*).
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-zinc-300">Spatial Telemetry</span>
                <span className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-zinc-300">Inventory Economies</span>
                <span className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-zinc-300">Agile Production</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-white group-hover:text-brand-emerald transition-colors font-medium pt-4 border-t border-white/[0.06]">
              <span>Explore Studio Archive</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Card 06: Earlier Works (Vroom, Skrhyb, Globlservice) */}
          <Link
            href="/archive/earlier-systems"
            className="group p-8 rounded-2xl bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                  06 / EARLIER SYSTEMS
                </span>
                <span className="text-xs font-mono text-zinc-500">2023–2025</span>
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-zinc-200 transition-colors mb-3">
                VROOM, SKRHYB & GLOBLSERVICE
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                Selected commercial projects: VROOM (dual-app ride-hailing & trip PIN handshake),
                SKRHYB (3-platform two-sided marketplace in 8 weeks), and GLOBLSERVICE (cross-border customs concierge).
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-zinc-300">Dual-App Mobility</span>
                <span className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-zinc-300">Provider CRM</span>
                <span className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-zinc-300">Cross-Border FX</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-white group-hover:text-brand-orange transition-colors font-medium pt-4 border-t border-white/[0.06]">
              <span>Explore Systems Archive</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 05: OPERATING PHILOSOPHY
      ───────────────────────────────────────────────────────────── */}
      <section id="philosophy" className="w-full max-w-7xl px-6 py-24 border-b border-white/[0.06]">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
            Operating Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            How I approach complex products.
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed font-mono">
            Designing for high cognitive load, regulatory tension, and real-world failure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-[#0b0b0d] border border-white/[0.06]">
            <span className="text-xs font-mono text-zinc-500 mb-3 block">01 / PRINCIPLE</span>
            <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
              Architecture Precedes Aesthetics
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              You cannot fix an ambiguous business model with beautiful drop shadows.
              I resolve underlying data relationships, lifecycle state machines, and user mental
              models before polishing the interface layer.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#0b0b0d] border border-white/[0.06]">
            <span className="text-xs font-mono text-zinc-500 mb-3 block">02 / PRINCIPLE</span>
            <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
              Defensive Design by Default
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Happy paths are easy. A product&apos;s true caliber is defined by how it handles
              human crisis and systemic failure: bank webhook timeouts, dead phone batteries
              at 3:00 AM, and interrupted journeys.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#0b0b0d] border border-white/[0.06]">
            <span className="text-xs font-mono text-zinc-500 mb-3 block">03 / PRINCIPLE</span>
            <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
              Software Is Subordinate to Reality
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Digital screens are only one touchpoint in a larger human system.
              Whether coordinating warehouse runners or easing clinic reception visits,
              software must adapt to the constraints of the physical world.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#0b0b0d] border border-white/[0.06]">
            <span className="text-xs font-mono text-zinc-500 mb-3 block">04 / PRINCIPLE</span>
            <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
              Deliberate Friction Builds Trust
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              In physical custody, large financial commitments, and personal safety,
              frictionless design is reckless. Deliberate pauses, verification handshakes,
              and transparent disclosures create the confidence users need to commit.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 06: CAREER CONTINUITY & TRAJECTORY
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-7xl px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
              Career Trajectory
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              The Builder&apos;s Path
            </h2>
          </div>
          <a
            href="/cv/Victory_Chukwuma_Product_Designer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white hover:text-brand-emerald transition-colors font-mono"
          >
            <span>View Full Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="flex flex-col border-t border-white/[0.06]">
          {/* Row 1 */}
          <div className="py-6 border-b border-white/[0.06] grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <span className="md:col-span-3 text-xs font-mono text-zinc-500">2026 – PRESENT</span>
            <div className="md:col-span-5 font-semibold text-white text-base">
              LOQD <span className="text-xs font-mono text-brand-orange ml-2 font-normal">FOUNDER & PRODUCT LEAD</span>
            </div>
            <span className="md:col-span-4 text-xs text-zinc-400">
              0-to-1 physical custody service, operations architecture, and multi-role sync.
            </span>
          </div>

          {/* Row 2 */}
          <div className="py-6 border-b border-white/[0.06] grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <span className="md:col-span-3 text-xs font-mono text-zinc-500">2025 – PRESENT</span>
            <div className="md:col-span-5 font-semibold text-white text-base">
              Skydd <span className="text-xs font-mono text-brand-emerald ml-2 font-normal">LEAD PRODUCT DESIGNER</span>
            </div>
            <span className="md:col-span-4 text-xs text-zinc-400">
              8-product protection platform expansion, web application, claims, and design system.
            </span>
          </div>

          {/* Row 3 */}
          <div className="py-6 border-b border-white/[0.06] grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <span className="md:col-span-3 text-xs font-mono text-zinc-500">2024 – 2025</span>
            <div className="md:col-span-5 font-semibold text-white text-base">
              The Cypha (SKRHYB & GLOBLSERVICE) <span className="text-xs font-mono text-zinc-400 ml-2 font-normal">PRODUCT DESIGNER</span>
            </div>
            <span className="md:col-span-4 text-xs text-zinc-400">
              Two-sided marketplace CRM and cross-border logistics procurement engine.
            </span>
          </div>

          {/* Row 4 */}
          <div className="py-6 border-b border-white/[0.06] grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <span className="md:col-span-3 text-xs font-mono text-zinc-500">2023 – 2025</span>
            <div className="md:col-span-5 font-semibold text-white text-base">
              Juju Games <span className="text-xs font-mono text-brand-teal ml-2 font-normal">CO-FOUNDER & PRODUCT DESIGNER</span>
            </div>
            <span className="md:col-span-4 text-xs text-zinc-400">
              Co-founded independent studio; cockpit HUDs, inventories, and agile production.
            </span>
          </div>

          {/* Row 5 */}
          <div className="py-6 border-b border-white/[0.06] grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <span className="md:col-span-3 text-xs font-mono text-zinc-500">2023 – 2024</span>
            <div className="md:col-span-5 font-semibold text-white text-base">
              VROOM <span className="text-xs font-mono text-zinc-400 ml-2 font-normal">LEAD PRODUCT DESIGNER</span>
            </div>
            <span className="md:col-span-4 text-xs text-zinc-400">
              Dual-app ride-hailing mobility, security verification code handshake, and driver gamification.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

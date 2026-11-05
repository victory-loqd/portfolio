'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowDown, Shield, Layers, Box, Cpu, Sparkles, CheckCircle2, ChevronRight, Terminal, Globe } from 'lucide-react';
import PlaceholderImage from '@/components/PlaceholderImage';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center ambient-mesh">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: HERO (Liam Hayes + Eclipsis Staging)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl px-6 pt-32 sm:pt-40 pb-20 md:pb-28">
        <div className="max-w-4xl flex flex-col gap-6">
          {/* Eyebrow Availability Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] w-fit shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono tracking-wide text-zinc-300">
              Lagos · Designing for Global & African Scale · Senior / Staff Design Lead
            </span>
          </div>

          {/* Master Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.035em] text-white leading-[1.06]">
            I bring structure to complex and early-stage products.
          </h1>

          {/* Subtitle / Positioning Thesis */}
          <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl">
            I design software with a lot of moving parts—unravelling messy business constraints,
            mapping asymmetric state machines, and turning high-stakes operational chaos into
            calm, dependable interfaces.
          </p>

          {/* Current Trajectory Strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-zinc-400 font-mono pt-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="text-zinc-600">Now:</span>
              <span className="text-white font-medium">Lead Product Designer</span>
              <span className="text-zinc-500">at Skydd</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-600">Building:</span>
              <span className="text-brand-orange font-medium">LOQD</span>
              <span className="text-zinc-500">(Physical Custody)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-600">Past:</span>
              <span className="text-zinc-300">Co-founder</span>
              <span className="text-zinc-500">at Juju Games</span>
            </div>
          </div>

          {/* Interactive Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Selected Systems</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-zinc-300 font-medium text-xs hover:bg-white/[0.08] hover:text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>About My Approach</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: TRUST & PROOF COUNTERS (Eclipsis Style)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-40">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">Platform Scale</span>
              <Shield className="w-4 h-4 text-brand-orange" />
            </div>
            <div>
              <div className="text-3xl font-semibold text-white tracking-tight">8 Products</div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Unified protection & accumulation platform under NAICOM regulation.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-40">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">0-to-1 Service</span>
              <Box className="w-4 h-4 text-brand-orange" />
            </div>
            <div>
              <div className="text-3xl font-semibold text-white tracking-tight">4 Roles</div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Physical-digital custody syncing Customer, Counter, Runner & Admin.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-40">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">Design Systems</span>
              <Layers className="w-4 h-4 text-brand-teal" />
            </div>
            <div>
              <div className="text-3xl font-semibold text-white tracking-tight">115 States</div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Reconciled from 141 sprawling frames into a canonical source of truth.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-40">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">External Validation</span>
              <Sparkles className="w-4 h-4 text-brand-purple" />
            </div>
            <div>
              <div className="text-3xl font-semibold text-white tracking-tight">Press & Grants</div>
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
      <section id="work" className="w-full max-w-6xl px-6 py-20 border-t border-white/[0.06]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Selected Work ⁽⁴⁾
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Flagship Case Studies
            </h2>
          </div>
          <p className="text-xs md:text-sm text-zinc-400 max-w-md font-mono">
            High-stakes transformations across insurtech scale, physical custody,
            consent-first safety, and multi-institution finance.
          </p>
        </div>

        {/* 4 Flagship Projects Grid */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* ─────────────────── PROJECT 01: SKYDD ─────────────────── */}
          <article className="group rounded-3xl glass-card hover:border-white/[0.18] transition-all duration-500 overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Metadata & Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-orange-400 bg-orange-400/10 border border-orange-400/20 font-semibold">
                      01 / Platform Expansion
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs font-mono text-zinc-500">2025–Present</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3 group-hover:text-zinc-200 transition-colors">
                    Skydd: Scaling an Eight-Product Protection Platform
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    Designing the transition from a 2-product insurance startup into a unified,
                    multi-product wealth preservation and protection ecosystem across responsive web,
                    mobile, and waitlist surfaces.
                  </p>

                  {/* Signals List */}
                  <div className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.06] mb-8">
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span><strong>Dual-Engine Architecture:</strong> Accumulation & risk indemnity</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span><strong>High-Stakes Claims:</strong> Transparent 4-stage tracking SLA</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
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
                    className="inline-flex items-center gap-2 text-xs font-mono text-white bg-white/[0.06] hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all group-hover:border-white/20"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Artifact */}
              <div className="lg:col-span-7">
                <Link href="/work/skydd" className="block">
                  <PlaceholderImage
                    id="IMG_01"
                    title="Skydd: 8-Product Platform Architecture"
                    filename="skydd-01-hero-dashboard-architecture.png"
                    aspectRatio="16/10"
                    dimensions="2560 × 1600 px"
                    description="High-fidelity visual architecture showing the transition: Old 2-product siloed UI evolving into the expansive 8-product web application dashboard."
                    accentColor="orange"
                  />
                </Link>
              </div>
            </div>
          </article>

          {/* ─────────────────── PROJECT 02: LOQD ─────────────────── */}
          <article className="group rounded-3xl glass-card hover:border-white/[0.18] transition-all duration-500 overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Metadata & Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 font-semibold">
                      02 / 0-to-1 Service Design
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs font-mono text-zinc-500">2026–Present</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3 group-hover:text-zinc-200 transition-colors">
                    LOQD: Designing Trust Into a Real-World Custody System
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    Building a temporary custody service for chaotic Nigerian nightlife—spanning
                    physical rack operations, four synchronized software roles, and fail-safe
                    state machines for dead batteries and network blackouts.
                  </p>

                  {/* Signals List */}
                  <div className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.06] mb-8">
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span><strong>Payment != Custody:</strong> Decoupled legal acceptance from Paystack</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span><strong>Surge Retrieval:</strong> Sub-25s checkout via 'Leaving Soon' staging</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span><strong>4 Synchronized Apps:</strong> Customer, Counter, Runner & Admin MFA</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    Role: Founder & Product Lead
                  </span>
                  <Link
                    href="/work/loqd"
                    className="inline-flex items-center gap-2 text-xs font-mono text-white bg-white/[0.06] hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all group-hover:border-white/20"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Artifact */}
              <div className="lg:col-span-7">
                <Link href="/work/loqd" className="block">
                  <PlaceholderImage
                    id="IMG_01"
                    title="LOQD: 4-Role System Architecture"
                    filename="loqd-01-hero-4-role-split.png"
                    aspectRatio="16/10"
                    dimensions="2560 × 1600 px"
                    description="Panoramic composition displaying the 4 distinct interfaces: Customer mobile web, Counter tablet terminal, Runner task list, and Admin operations dashboard."
                    accentColor="amber"
                  />
                </Link>
              </div>
            </div>
          </article>

          {/* ─────────────────── PROJECT 03: MEELOW ─────────────────── */}
          <article className="group rounded-3xl glass-card hover:border-white/[0.18] transition-all duration-500 overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Metadata & Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 font-semibold">
                      03 / Asymmetric Permissions
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs font-mono text-zinc-500">2025–2026</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3 group-hover:text-zinc-200 transition-colors">
                    Meelow: Safety Without Surveillance
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    Engineering a consent-first personal safety and location system—balancing family protection
                    against the psychological friction of constant tracking in an African urban super-app.
                  </p>

                  {/* Signals List */}
                  <div className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.06] mb-8">
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span><strong>Directional Vectors:</strong> Decoupled 'Who Sees Me' from 'Who I See'</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span><strong>Duress PIN Defense:</strong> Silent escalation under forced cancellation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span><strong>Stealth Pause:</strong> Freezes coordinates without accusatory notifications</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    Role: Lead Product Designer
                  </span>
                  <Link
                    href="/work/meelow"
                    className="inline-flex items-center gap-2 text-xs font-mono text-white bg-white/[0.06] hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all group-hover:border-white/20"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Artifact */}
              <div className="lg:col-span-7">
                <Link href="/work/meelow" className="block">
                  <PlaceholderImage
                    id="IMG_01"
                    title="Meelow: Safety Without Surveillance"
                    filename="meelow-01-hero-safety-without-surveillance.png"
                    aspectRatio="16/10"
                    dimensions="2560 × 1600 px"
                    description="Multi-device composition: The ambient mobile map interface showing soft approximate location bubbles, juxtaposed against the granular permission control sheet."
                    accentColor="emerald"
                  />
                </Link>
              </div>
            </div>
          </article>

          {/* ─────────────────── PROJECT 04: COUPON ─────────────────── */}
          <article className="group rounded-3xl glass-card hover:border-white/[0.18] transition-all duration-500 overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Metadata & Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-teal-300 bg-teal-400/10 border border-teal-400/20 font-semibold">
                      04 / WealthTech Architecture
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs font-mono text-zinc-500">2025</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3 group-hover:text-zinc-200 transition-colors">
                    Coupon: Fixed-Deposit Marketplace & Error Recovery
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    Transforming a fragmented 141-screen investment codebase into a coherent wealth marketplace—designing
                    for bank API timeouts, net tax yield transparency, and deposit maturity lifecycles.
                  </p>

                  {/* Signals List */}
                  <div className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.06] mb-8">
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                      <span><strong>141 ➔ 115 Screens:</strong> Purged duplicate flows and orphaned states</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                      <span><strong>Tax Transparency:</strong> Real-time 10% Withholding Tax deduction modeler</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                      <span><strong>API Fail-Safe:</strong> Asynchronous NIBSS banking timeout recovery</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    Role: Lead Product Designer
                  </span>
                  <Link
                    href="/work/coupon"
                    className="inline-flex items-center gap-2 text-xs font-mono text-white bg-white/[0.06] hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all group-hover:border-white/20"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-teal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Artifact */}
              <div className="lg:col-span-7">
                <Link href="/work/coupon" className="block">
                  <PlaceholderImage
                    id="IMG_01"
                    title="Coupon: Fixed Deposit Marketplace"
                    filename="coupon-01-hero-ecosystem-split.png"
                    aspectRatio="16/10"
                    dimensions="2560 × 1600 px"
                    description="Split composition: The marketplace discovery feed featuring competing institution rate cards transitioning into the active Portfolio & Accrued Earnings overview."
                    accentColor="teal"
                  />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 04: ARCHIVAL RETROSPECTIVE & SYSTEMS PROOF
      ───────────────────────────────────────────────────────────── */}
      <section id="archive" className="w-full max-w-6xl px-6 py-20 border-t border-white/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Historical Systems & World-Building ⁽²⁾
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Archival Retrospectives
            </h2>
          </div>
          <p className="text-xs md:text-sm text-zinc-400 max-w-md font-mono">
            How studio co-founding, spatial game HUDs, and early mobility platforms forged my systems DNA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 01: Juju Games */}
          <Link
            href="/archive/juju-games"
            className="group rounded-3xl glass-card hover:border-white/[0.18] transition-all duration-500 overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-purple-300 bg-purple-400/10 border border-purple-400/20 font-semibold">
                  Studio Co-Founding
                </span>
                <span className="text-xs font-mono text-zinc-500">2023–2025</span>
              </div>

              <h3 className="text-2xl font-semibold text-white tracking-tight mb-2 group-hover:text-zinc-200 transition-colors">
                Juju Games: Studio Archive & Game HUDs
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Co-founding an independent African game studio, directing cross-disciplinary production,
                and engineering complex HUDs, stateful inventories, and branching narrative systems.
              </p>

              <PlaceholderImage
                id="IMG_01"
                title="Juju Games Studio Suite"
                filename="juju-01-hero-studio-suite.png"
                aspectRatio="16/9"
                dimensions="2400 × 1350 px"
                description="Archival collage hero: Key visual renders from Vodou, Boju Boju, and Payton Ville with press recognition."
                accentColor="purple"
              />
            </div>

            <div className="flex items-center justify-between pt-4 mt-6 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
              <span>Featured in BusinessDay & IGM</span>
              <span className="text-white flex items-center gap-1 group-hover:text-purple-400 transition-colors">
                <span>View Archive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Card 02: Earlier Systems */}
          <Link
            href="/archive/earlier-systems"
            className="group rounded-3xl glass-card hover:border-white/[0.18] transition-all duration-500 overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 font-semibold">
                  Foundational Platforms
                </span>
                <span className="text-xs font-mono text-zinc-500">2023–2025</span>
              </div>

              <h3 className="text-2xl font-semibold text-white tracking-tight mb-2 group-hover:text-zinc-200 transition-colors">
                Earlier Work: VROOM, SKRHYB & Globlservice
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                VROOM (ride-hailing PIN security), SKRHYB (3-platform marketplace in 8 weeks),
                and GLOBLSERVICE (cross-border FX link procurement and multi-leg tracking).
              </p>

              <PlaceholderImage
                id="IMG_01"
                title="Earlier Systems Retrospective"
                filename="vroom-01-dual-app-split.png"
                aspectRatio="16/9"
                dimensions="2400 × 1350 px"
                description="Side-by-side view: Rider home search & ride confirmation screen juxtaposed against Driver active dispatch."
                accentColor="amber"
              />
            </div>

            <div className="flex items-center justify-between pt-4 mt-6 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
              <span>3 Shipped Commercial Platforms</span>
              <span className="text-white flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                <span>View Archive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 05: OPERATING PRINCIPLES
      ───────────────────────────────────────────────────────────── */}
      <section id="principles" className="w-full max-w-6xl px-6 py-20 border-t border-white/[0.06]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Operating Philosophy ⁽⁴⁾
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-12">
          How I Approach Complex Systems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-brand-orange uppercase tracking-wider font-semibold block mb-2">
                Principle 01
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Architecture Precedes Aesthetics</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                You cannot fix an ambiguous business model with beautiful drop shadows. I map domain boundaries,
                entity relationships, and user mental models before touching visual styling.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold block mb-2">
                Principle 02
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Defensive Design by Default</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Happy paths are trivial. A product&apos;s true caliber is measured by how gracefully it handles failure:
                bank API timeouts, dead phone batteries at 3:00 AM, and interrupted physical custody handoffs.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-brand-teal uppercase tracking-wider font-semibold block mb-2">
                Principle 03
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Software Is Subordinate to Reality</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Screens are only small touchpoints in a larger human system. Whether coordinating venue staff in
                chaotic nightlife or easing clinic visits, software must adapt to real-world friction.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold block mb-2">
                Principle 04
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Deliberate Friction Builds Trust</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Tech dogma preaches &quot;zero-friction&quot; everywhere. But in physical custody, large financial commitments,
                and personal safety, zero-friction is reckless. Deliberate handshakes create conviction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 06: BUILDER'S TRAJECTORY (TIMELINE)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl px-6 py-20 border-t border-white/[0.06]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Chronology
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-12">
          Builder&apos;s Trajectory
        </h2>

        <div className="space-y-6 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 p-5 rounded-xl glass-card">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-sm">LOQD</span>
                <span className="text-zinc-500">· Founder & Product Lead</span>
              </div>
              <p className="text-zinc-400 font-sans text-xs">
                Physical custody operations syncing 4 software roles and fail-safe state machines for Nigerian nightlife.
              </p>
            </div>
            <span className="text-brand-orange whitespace-nowrap">2026 – Present</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 p-5 rounded-xl glass-card">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-sm">Skydd</span>
                <span className="text-zinc-500">· Lead Product Designer</span>
              </div>
              <p className="text-zinc-400 font-sans text-xs">
                Scaling multi-product wealth protection platform across web, mobile, and waitlist under NAICOM regulation.
              </p>
            </div>
            <span className="text-brand-teal whitespace-nowrap">2025 – Present</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 p-5 rounded-xl glass-card">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-sm">Meelow & Coupon</span>
                <span className="text-zinc-500">· Lead Product Designer</span>
              </div>
              <p className="text-zinc-400 font-sans text-xs">
                Engineered consent-first safety (Meelow) and reconciled 141 screens into a 115-screen fixed deposit platform (Coupon).
              </p>
            </div>
            <span className="text-zinc-400 whitespace-nowrap">2025</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 p-5 rounded-xl glass-card">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-sm">Juju Games</span>
                <span className="text-zinc-500">· Co-Founder & Head of Product</span>
              </div>
              <p className="text-zinc-400 font-sans text-xs">
                Co-founded independent game studio; engineered cockpit HUD telemetry, spatial inventories, and directed agile cross-disciplinary production.
              </p>
            </div>
            <span className="text-purple-400 whitespace-nowrap">2023 – 2025</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 07: DIRECT CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl px-6 py-20 mb-12 border-t border-white/[0.06]">
        <div className="p-8 sm:p-14 rounded-3xl glass-card flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-orange/10 blur-3xl pointer-events-none"></div>

          <div className="max-w-xl relative z-10">
            <span className="text-xs font-mono text-brand-orange uppercase tracking-widest block mb-2 font-semibold">
              Get in Touch
            </span>
            <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
              Let&apos;s build something durable.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Available for select Senior / Staff Product Design roles, systems architecture consulting,
              and advisory for high-complexity venture products.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 font-mono text-xs relative z-10">
            <a
              href="mailto:designwithvee@gmail.com"
              className="px-6 py-3.5 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <span>designwithvee@gmail.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/victory-chukwuma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-300 hover:text-white hover:border-white/[0.25] transition-all inline-flex items-center justify-center gap-2"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

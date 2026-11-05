import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ShieldCheck, Cpu, Code2, Layers, Sparkles, Terminal, Mail, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* ────────────────── TOP BREADCRUMB ────────────────── */}
      <div className="w-full max-w-4xl px-6 pt-12 pb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>
      </div>

      {/* ────────────────── HERO / BIO ────────────────── */}
      <section className="w-full max-w-4xl px-6 pb-12 border-b border-white/[0.06]">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
          <span className="text-xs font-mono text-brand-teal font-semibold uppercase tracking-wider">
            About Victory Chukwuma
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-xs font-mono text-zinc-500">Lagos, Nigeria · Global Remote</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1] mb-8">
          I bring structure to complex, early-stage, and multi-tenant products.
        </h1>

        <div className="flex flex-col gap-5 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
          <p>
            I am a senior product designer and systems architect who thrives in high-ambiguity environments. I specialize in software with a lot of moving parts: unraveling messy business constraints, mapping asymmetric state machines, designing for real-world physical failure, and translating high-stakes domain complexity into calm, dependable interfaces.
          </p>
          <p>
            Currently, I lead product design at <strong className="text-white">Skydd</strong> (scaling an 8-product wealth protection and enterprise platform) and am the founder of <strong className="text-white">LOQD</strong> (engineering a physical-digital custody service for chaotic nightlife). Previously, I co-founded <strong className="text-white">Juju Games</strong>, an independent African game studio featured across <em>BusinessDay</em> and international gaming press.
          </p>
        </div>
      </section>

      {/* ────────────────── THE TRAJECTORY / STORY ────────────────── */}
      <section className="w-full max-w-4xl px-6 py-12 border-b border-white/[0.06]">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">The Trajectory</span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-6">
          How Game Development Forged My Systems DNA
        </h2>

        <div className="flex flex-col gap-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
          <p>
            Most product designers begin with static websites or SaaS marketing pages. My foundational design training happened inside game development.
          </p>
          <p>
            In video games, an interface cannot hide behind clean aesthetic whitespace. A HUD must convey velocity, shield harmonics, and dynamic threats while running at 60 frames per second, synchronizing server latency, spatial physics, and player psychology under intense adrenaline. That high-stress crucible taught me to think in <strong>state machines, edge conditions, and ergonomic feedback loops</strong> before drawing a single frame.
          </p>
          <p>
            When I transitioned into commercial product design—building two-sided mobility at <strong>VROOM</strong>, multi-tenant marketplaces at <strong>SKRHYB</strong>, cross-border procurement at <strong>GLOBLSERVICE</strong>, regulated fixed deposits at <strong>Coupon</strong>, and consent-first safety at <strong>Meelow</strong>—that same systems rigor became my greatest advantage.
          </p>
        </div>
      </section>

      {/* ────────────────── 4 OPERATING PRINCIPLES ────────────────── */}
      <section className="w-full max-w-4xl px-6 py-12 border-b border-white/[0.06]">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">Core Philosophy</span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-8">
          The 4 Operating Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-brand-teal" />
                <span className="text-xs font-mono uppercase text-brand-teal font-semibold">Principle 01</span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Architecture Precedes Aesthetics</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                You cannot fix an ambiguous business model with polished drop shadows. I map domain boundaries, entity relationships, and user mental models before touching visual styling.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span className="text-xs font-mono uppercase text-brand-orange font-semibold">Principle 02</span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Defensive Design by Default</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Happy paths are trivial. A product&apos;s true caliber is measured by how gracefully it handles failure: bank API timeouts, dead phone batteries at 3:00 AM, and interrupted physical custody handoffs.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono uppercase text-purple-400 font-semibold">Principle 03</span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Software Is Subordinate to Reality</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Screens are only small touchpoints in a larger human system. Whether coordinating venue staff in chaotic nightlife or easing clinic visits, software must adapt to real-world friction.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono uppercase text-amber-400 font-semibold">Principle 04</span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Deliberate Friction Builds Trust</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Tech dogma preaches &quot;zero-friction&quot; everywhere. But in physical custody, large financial commitments, and personal safety, zero-friction is reckless. Deliberate handshakes and clear disclosures create conviction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── TOOLKIT & METHODOLOGY ────────────────── */}
      <section className="w-full max-w-4xl px-6 py-12 border-b border-white/[0.06]">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">Capabilities</span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-8">
          The Design & Systems Toolkit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
            <span className="text-white font-semibold block mb-3 uppercase tracking-wider text-[11px] text-brand-teal">
              01 / Architecture & Systems
            </span>
            <ul className="space-y-2 text-zinc-400">
              <li>• Multi-tenant information architecture</li>
              <li>• Domain modeling & state machines</li>
              <li>• Asymmetric permission schemas</li>
              <li>• Regulated financial workflows (KYC/AML)</li>
              <li>• Defensive error recovery paths</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
            <span className="text-white font-semibold block mb-3 uppercase tracking-wider text-[11px] text-brand-orange">
              02 / Product Craft & Tokens
            </span>
            <ul className="space-y-2 text-zinc-400">
              <li>• Multi-brand Figma design systems</li>
              <li>• Strict semantic token architecture</li>
              <li>• Responsive web & native iOS/Android</li>
              <li>• Tabular numeric data ergonomics</li>
              <li>• High-fidelity micro-interactions</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
            <span className="text-white font-semibold block mb-3 uppercase tracking-wider text-[11px] text-purple-400">
              03 / Technical & Founder Rigor
            </span>
            <ul className="space-y-2 text-zinc-400">
              <li>• Front-end fluency (React, Next.js, Tailwind)</li>
              <li>• Developer handoff specifications</li>
              <li>• Service design & staff operations</li>
              <li>• Investor & publisher pitch decks</li>
              <li>• Cross-functional agile sprints</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ────────────────── CAREER TIMELINE ────────────────── */}
      <section className="w-full max-w-4xl px-6 py-12 border-b border-white/[0.06]">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">Chronology</span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-8">
          Builder&apos;s Trajectory
        </h2>

        <div className="space-y-8 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-6 border-b border-white/[0.04]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-sm">LOQD</span>
                <span className="text-zinc-500">· Founder & Product Lead</span>
              </div>
              <p className="text-zinc-400 font-sans text-xs">
                Founded physical custody and logistics service for Nigerian nightlife; designed 4 synchronized software roles and fail-safe state machines.
              </p>
            </div>
            <span className="text-brand-orange whitespace-nowrap">2026 – Present</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-6 border-b border-white/[0.04]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-sm">Skydd</span>
                <span className="text-zinc-500">· Lead Product Designer</span>
              </div>
              <p className="text-zinc-400 font-sans text-xs">
                Scaling multi-product wealth protection platform across web and mobile; unified 8 insurance/savings engines under one NAICOM-compliant system.
              </p>
            </div>
            <span className="text-brand-teal whitespace-nowrap">2025 – Present</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-6 border-b border-white/[0.04]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-sm">Meelow & Coupon</span>
                <span className="text-zinc-500">· Lead Product Designer</span>
              </div>
              <p className="text-zinc-400 font-sans text-xs">
                Engineered consent-first geospatial safety (Meelow) and audited/reconciled 141 screens into a 115-screen fixed deposit marketplace (Coupon).
              </p>
            </div>
            <span className="text-zinc-400 whitespace-nowrap">2025</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-6 border-b border-white/[0.04]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-sm">The Cypha (SKRHYB & GLOBLSERVICE)</span>
                <span className="text-zinc-500">· Product Designer</span>
              </div>
              <p className="text-zinc-400 font-sans text-xs">
                Shipped two-sided service marketplace across 3 platforms in 8 weeks; built cross-border link procurement and transparent customs cost engine.
              </p>
            </div>
            <span className="text-zinc-400 whitespace-nowrap">2024 – 2025</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-6 border-b border-white/[0.04]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-sm">VROOM</span>
                <span className="text-zinc-500">· Lead Product Designer</span>
              </div>
              <p className="text-zinc-400 font-sans text-xs">
                Designed dual-app mobility platform with security code matching, in-trip panic workflows, and gamified driver XP milestones.
              </p>
            </div>
            <span className="text-zinc-400 whitespace-nowrap">2023 – 2024</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
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

      {/* ────────────────── CONTACT / AVAILABILITY ────────────────── */}
      <section className="w-full max-w-4xl px-6 py-12 mb-12">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono text-brand-teal uppercase tracking-widest block mb-2 font-semibold">
              Availability
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
              Let&apos;s build something durable.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Available for select Senior / Staff Product Design roles, systems architecture consulting, and advisory for high-complexity venture products.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 font-mono text-xs">
            <a
              href="mailto:designwithvee@gmail.com"
              className="px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>designwithvee@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/victory-chukwuma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-zinc-900 border border-white/[0.08] text-zinc-300 hover:text-white hover:border-white/[0.2] transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

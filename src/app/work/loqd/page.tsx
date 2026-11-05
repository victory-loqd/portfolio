import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Box, CheckCircle2, ArrowRight } from 'lucide-react';
import PlaceholderImage from '@/components/PlaceholderImage';

export default function LoqdCaseStudy() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* ────────────────── TOP BREADCRUMB ────────────────── */}
      <div className="w-full max-w-5xl px-6 pt-28 sm:pt-36 pb-6">
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
          <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
          <span className="text-xs font-mono text-brand-orange font-semibold uppercase tracking-wider">
            Flagship Case Study · Physical-Digital Service Design
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-xs font-mono text-zinc-500">April 2026 – Present</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
          LOQD: Designing Trust Into a Real-World Custody System
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-10">
          Building a temporary custody service for chaotic Nigerian nightlife—spanning
          physical rack operations, four synchronized software roles, and fail-safe
          state machines for dead batteries and network blackouts.
        </p>

        {/* 4-Column Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/[0.08] text-xs font-mono">
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Role</span>
            <span className="text-zinc-200 font-medium">Founder & Product Lead</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Platform Scope</span>
            <span className="text-zinc-200 font-medium">4 Apps + Physical Hardware</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Domain</span>
            <span className="text-zinc-200 font-medium">Nightlife & Chain of Custody</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Infrastructure</span>
            <span className="text-zinc-200 font-medium">Next.js, Supabase, Paystack</span>
          </div>
        </div>
      </section>

      {/* ────────────────── HERO VISUAL (IMG 01) ────────────────── */}
      <div className="w-full max-w-5xl px-6 py-8">
        <PlaceholderImage
          id="IMG_01"
          title="The 4-Role System Architecture Split"
          filename="loqd-01-hero-4-role-split.png"
          aspectRatio="16/9"
          dimensions="2400 × 1350 px"
          description="Panoramic composition displaying the 4 distinct interfaces: Customer mobile web (Cream/Black), Counter tablet terminal (Orange/Black), Runner task list, and Admin operations dashboard."
          sourceHints="Figma PlayGround File node-id=2069-1289"
        />
      </div>

      {/* ────────────────── SECTION 01: NIGHTLIFE REALITY ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">01 / The Environment</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Chaos in the Club: Why Locker Apps Fail
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              In Nigerian concerts and nightlife, people carry essential valuables: smartphones, power banks, car keys, and bags. Improvised workarounds (leaving bags in cars, tipping bouncers, or hiding items under tables) result in rampant theft, extortion, and lost property.
            </p>
            <p>
              Yet, asking someone to hand their most valuable belongings to strangers in a dark, bass-heavy, 3,000-person venue with dead batteries and zero cellular reception requires an unprecedented level of trust. A simple mobile app cannot solve this—only a <strong>coordinated operational system</strong> can.
            </p>
          </div>
        </div>

        {/* Field Research Synthesis (IMG 02) */}
        <div className="my-8">
          <PlaceholderImage
            id="IMG_02"
            title="Field Research & Nightlife Observations"
            filename="loqd-02-field-research.png"
            aspectRatio="16/9"
            dimensions="2000 × 1125 px"
            description="Field photos of venue coat-check chaos, handwritten tickets, phone battery drain stats (42% under 15%), and user quotes on loss/theft fears."
            sourceHints="LOQD Field Research Synthesis"
          />
        </div>

        {/* 3-Lane Service Blueprint (IMG 03) */}
        <div className="my-8">
          <PlaceholderImage
            id="IMG_03"
            title="The 3-Lane Service Blueprint"
            filename="loqd-03-service-blueprint.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Visual diagram with horizontal swimlanes: Customer Journey ↔ Front-of-House (Counter) ↔ Back-of-House (Runner) ↔ Physical Artifacts (Tokens/Bags) ↔ Digital Cloud State Machine."
            sourceHints="Figma Service Blueprint Canvas"
          />
        </div>
      </section>

      {/* ────────────────── SECTION 02: PAYMENT IS NOT CUSTODY ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">02 / The Legal Handshake</span>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
            &ldquo;Payment is NOT Custody&rdquo; & Front-of-House Intake
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            A customer paying via Paystack online does not legally transfer custody to LOQD. Custody only begins when staff physically inspect the bag, pair a tamper seal, and assign an acrylic custody token.
          </p>
        </div>

        {/* Customer Intake (IMG 04) */}
        <PlaceholderImage
          id="IMG_04"
          title="Customer Mobile Intake & Storage Selection"
          filename="loqd-04-customer-intake.png"
          aspectRatio="16/10"
          dimensions="2560 × 1600 px"
          description="Mobile web booking flow: Event selection entrance, storage tier cards (Small, Medium, Rack/Bulky), transparent pricing, and live capacity warning."
          sourceHints="Figma 02 - Customer (CUS-S01 to CUS-S03)"
        />

        {/* High-Value Declaration (IMG 05) */}
        <PlaceholderImage
          id="IMG_05"
          title="High-Value Declaration & Seal Protocol"
          filename="loqd-05-high-value-declaration.png"
          aspectRatio="16/10"
          dimensions="2560 × 1600 px"
          description="The high-value declaration flow: item specification (laptops, cameras, jewelry), tamper-evident seal serial input, and legal liability disclosure."
          sourceHints="Figma 02 - Customer (CUS-S04, CUS-BK01 to BK04)"
        />

        {/* Payment != Custody (IMG 06) */}
        <PlaceholderImage
          id="IMG_06"
          title="'Payment is Not Custody' Transition State"
          filename="loqd-06-payment-custody-transition.png"
          aspectRatio="16/10"
          dimensions="2560 × 1600 px"
          description="Side-by-side transition: The Paystack successful payment card followed by the prominent 'Payment Received — Proceed to Counter for Physical Verification' intake card."
          sourceHints="Figma 02 - Customer (CUS-S06 & CUS-S07)"
        />

        {/* Counter Terminal (IMG 07) */}
        <PlaceholderImage
          id="IMG_07"
          title="Counter Payment-Verified Acceptance Terminal"
          filename="loqd-07-counter-intake-terminal.png"
          aspectRatio="16/9"
          dimensions="2560 × 1440 px"
          description="High-contrast Counter tablet interface: Queue overview, Shift Gate verification, customer booking scan, and 1-tap Physical Token pairing."
          sourceHints="Figma 03 — Counter (CTR-V1-M01 to M03)"
        />

        {/* Physical Tokens (IMG 08) */}
        <PlaceholderImage
          id="IMG_08"
          title="Physical Custody Tokens & Wristband Specs"
          filename="loqd-08-physical-tokens.png"
          aspectRatio="4/3"
          dimensions="2000 × 1500 px"
          description="Product design specs of physical artifacts: Laser-etched high-contrast acrylic numbered tokens, tamper-evident security tape, and counter bag tag clips."
          sourceHints="LOQD Hardware Specifications"
        />
      </section>

      {/* ────────────────── SECTION 03: ASYMMETRIC ROLES & SURGE ENGINE ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">03 / Operations</span>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
            Runner Vaulting & The 3:00 AM Surge Mitigation Engine
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            When 1,500 attendees leave simultaneously, synchronous retrieval causes riots. Our &ldquo;Leaving Soon&rdquo; intent engine pre-stages items at the counter, dropping turnaround to under 25 seconds.
          </p>
        </div>

        {/* Runner Vault (IMG 09) */}
        <PlaceholderImage
          id="IMG_09"
          title="Runner Vault Placement & Retrieval Engine"
          filename="loqd-09-runner-vault-ui.png"
          aspectRatio="16/10"
          dimensions="2560 × 1600 px"
          description="Runner mobile screens: Task claim queue, rack/bin coordinate routing (Rack B, Shelf 04), and barcode bin confirmation."
          sourceHints="Figma 04 — Runner (RUN-A00 to A08)"
        />

        {/* Customer Stored Shell (IMG 10) */}
        <PlaceholderImage
          id="IMG_10"
          title="Customer Stored Shell & Real-Time Status"
          filename="loqd-10-stored-customer-shell.png"
          aspectRatio="16/10"
          dimensions="2560 × 1600 px"
          description="The active customer home dashboard: High-contrast booking reference, storage location code, and prominent quick-action triggers for Quick Access and Leaving Soon."
          sourceHints="Figma 02 - Customer (CUS-S08)"
        />

        {/* Quick Access Loop (IMG 11) */}
        <PlaceholderImage
          id="IMG_11"
          title="Quick Access: The Temporary Handover Loop"
          filename="loqd-11-quick-access-loop.png"
          aspectRatio="16/9"
          dimensions="2400 × 1350 px"
          description="Step-by-step UI flow of the Quick Access cycle: Request initiation, runner prep countdown, temporary counter handover, and re-storage confirmation."
          sourceHints="Figma CUS-QA01 to QA07 & CTR-V1-M05 to M10"
        />

        {/* Leaving Soon Surge Engine (IMG 12) */}
        <PlaceholderImage
          id="IMG_12"
          title="'Leaving Soon' Surge-Mitigation Engine (15/30m)"
          filename="loqd-12-leaving-soon-engine.png"
          aspectRatio="16/9"
          dimensions="2400 × 1350 px"
          description="Progression of the 'Leaving Soon' intent flow: Time-picker selection (15 vs 30 min departure), staging alert, and 'Your bag is waiting at Counter B' state."
          sourceHints="Figma CUS-DEP01 to DEP07"
        />
      </section>

      {/* ────────────────── SECTION 04: HANDOVER & DEFENSIVE RECOVERY ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">04 / Security & Fallbacks</span>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
            5-Condition Handover & Dead-Battery Protocol
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Releasing a ₦1.5M laptop to the wrong intoxicated attendee is fatal. The Counter terminal enforces 5 simultaneous validation checks, paired with manual photo-ID fallbacks when phones die.
          </p>
        </div>

        {/* 5-Condition Handover (IMG 13) */}
        <PlaceholderImage
          id="IMG_13"
          title="Counter 5-Condition Handover Verification"
          filename="loqd-13-counter-5-condition-handover.png"
          aspectRatio="16/9"
          dimensions="2560 × 1440 px"
          description="High-security Counter Handover screen: Five-point interactive verification checklist (Token, Customer, Seal, Collector ID, Atomic Release)."
          sourceHints="Figma 03 — Counter (CTR-V1-M11)"
        />

        {/* Dead Phone Recovery (IMG 14) */}
        <PlaceholderImage
          id="IMG_14"
          title="Dead-Battery Fallback & Manual Evidence Capture"
          filename="loqd-14-dead-phone-recovery.png"
          aspectRatio="16/10"
          dimensions="2560 × 1600 px"
          description="Counter exception interface: Physical token override, tablet photo ID capture, and manual exception log submission."
          sourceHints="Figma CTR-V1-M13 & CUS-AR03"
        />

        {/* Admin Safe-Hold (IMG 15) */}
        <PlaceholderImage
          id="IMG_15"
          title="Admin MFA Operations & Post-Event Safe-Hold Portal"
          filename="loqd-15-admin-safe-hold-portal.png"
          aspectRatio="16/9"
          dimensions="2560 × 1440 px"
          description="Admin Operations Dashboard showing live capacity meters, MFA authorization modal, event closure transition, and the customer-facing Safe-Hold tracking portal."
          sourceHints="Figma 05 — Admin (ADM-00 to ADM-10)"
        />

        {/* Retrospective Box */}
        <div className="p-8 rounded-2xl bg-[#0e0e11] border border-white/[0.08] my-12">
          <span className="text-xs font-mono text-brand-orange uppercase tracking-wider block mb-2 font-semibold">
            Founder Retrospective
          </span>
          <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
            Software is subordinate to physical truth.
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
            If your software says an item is &ldquo;Stored in Shelf B,&rdquo; but the runner tossed it into Shelf D because they were in a rush, your digital state machine is fiction. Great service design means building physical checks that force physical and digital reality into 100% alignment. Real product design begins at the edge of failure.
          </p>
        </div>

        {/* Next Case Study Navigation */}
        <div className="pt-12 border-t border-white/[0.08] flex items-center justify-between">
          <Link
            href="/work/skydd"
            className="text-xs font-mono text-zinc-500 hover:text-white transition-colors"
          >
            ← Skydd Platform
          </Link>
          <Link
            href="/work/meelow"
            className="group flex items-center gap-3 text-right"
          >
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Next Case Study</span>
              <span className="text-sm font-semibold text-white group-hover:text-brand-teal transition-colors">
                Meelow: Safety Without Surveillance →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

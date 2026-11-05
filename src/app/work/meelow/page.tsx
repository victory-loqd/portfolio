import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, Eye, EyeOff, Radio, AlertTriangle, Lock, Users, Smartphone, Compass } from 'lucide-react';
import PlaceholderImage from '@/components/PlaceholderImage';

export default function MeelowCaseStudy() {
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
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            Flagship Case Study · Geospatial Safety & Multi-Tenant Super-App
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-xs font-mono text-zinc-500">2025 – 2026</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
          Meelow: Safety Without Surveillance
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-10">
          How we engineered a consent-first personal safety and location system—balancing deep family protection against the psychological burden of constant surveillance in an African urban super-app.
        </p>

        {/* 4-Column Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/[0.08] text-xs font-mono">
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Role</span>
            <span className="text-zinc-200 font-medium">Lead Product Designer</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Platform Scope</span>
            <span className="text-zinc-200 font-medium">iOS, Android & Admin Console</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Domain</span>
            <span className="text-zinc-200 font-medium">Geospatial UX & Fintech</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Key Innovation</span>
            <span className="text-zinc-200 font-medium">Asymmetric Consent & Duress PIN</span>
          </div>
        </div>
      </section>

      {/* ────────────────── HERO VISUAL (IMG 01) ────────────────── */}
      <div className="w-full max-w-5xl px-6 py-8">
        <PlaceholderImage accentColor="emerald"
          id="IMG_01"
          title="Safety Without Surveillance Hero Split"
          filename="meelow-01-hero-safety-without-surveillance.png"
          aspectRatio="16/9"
          dimensions="2400 × 1350 px"
          description="Multi-device composition: The ambient mobile map interface showing soft approximate location bubbles, juxtaposed against the granular permission control sheet and the dark-mode Admin operations console."
        />
      </div>

      {/* ────────────────── SECTION 01: THE CORE PARADOX ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">01 / The Core Paradox</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Care vs. Control in Urban Mobility
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              Urban transit across major African metropolitan centers like Lagos carries genuine physical security risks—late-night commuting across the 11.8km Third Mainland Bridge, interstate road travel, police checkpoints, and opportunistic street crimes. Family members desperately want to know their loved ones arrived safely.
            </p>
            <p>
              However, traditional location-sharing apps (Life360, Apple Find My) enforce an oppressive, binary paradigm: you are either broadcasted 24/7 with pinpoint precision, or you are completely invisible. In practice, this converts protective care into toxic surveillance. Teenagers, young adults, and partners turn off location sharing entirely or use GPS spoofers—destroying the safety network right when real emergencies happen.
            </p>
          </div>
        </div>

        {/* Psychological Tension Card */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">The Reassurance Need</span>
            </div>
            <ul className="space-y-2 text-xs text-zinc-400 font-mono">
              <li>• “Did my sister make it across the bridge safely in that late-night ride-hail?”</li>
              <li>• “Did my dispatch rider reach the customer location without incident?”</li>
              <li>• “Can my closest circle find me if an emergency unfolds?”</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-3">
              <EyeOff className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">The Surveillance Backlash</span>
            </div>
            <ul className="space-y-2 text-xs text-zinc-400 font-mono">
              <li>• “Why is my mother questioning whether I am at a lounge or a friend’s flat on Friday night?”</li>
              <li>• “Does my colleague need to track my exact coordinates over the weekend just because we share a workspace circle?”</li>
              <li>• “Why does pausing location broadcast an accusatory alert that ignites family drama?”</li>
            </ul>
          </div>
        </div>

        {/* Competitive Teardown (IMG 02) */}
        <div className="my-8">
          <PlaceholderImage accentColor="emerald"
            id="IMG_02"
            title="Competitive Teardown Matrix (The Binary Trap)"
            filename="meelow-02-competitive-teardown.png"
            aspectRatio="16/9"
            dimensions="2000 × 1125 px"
            description="Teardown comparison diagram evaluating Apple Find My, Life360, Google Maps, and Meelow across 4 vectors: Granular Consent, Asymmetric Visibility, Social Friction on Pause, and Emergency Escalation."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 02: THE ASYMMETRIC DIRECTIONAL MODEL ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">02 / Architecture</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Decoupling Connection From Visibility
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              In legacy applications, relationship parity is hardcoded: if Person A can see Person B, Person B must see Person A. But real social relationships are inherently asymmetrical. An adult child may want to monitor an elderly parent with cognitive decline, without subjecting their own adult social life to round-the-clock monitoring.
            </p>
            <p>
              We dismantled the monolithic &quot;Shared&quot; toggle and replaced it with an <strong>Asymmetric Directional Model</strong>. Every relationship is broken into two independent vectors: <span className="font-mono text-emerald-400">Who Sees Me</span> vs. <span className="font-mono text-emerald-400">Who I See</span>.
            </p>
          </div>
        </div>

        {/* System Diagram Box */}
        <div className="my-8 p-6 rounded-2xl bg-zinc-950 border border-white/[0.08] font-mono text-xs text-zinc-300">
          <div className="text-zinc-500 text-[11px] mb-3 uppercase tracking-wider">Independent Directional Vectors</div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-white font-medium">Ada</span>
              <span className="text-emerald-400">──(Shares Approximate 1.5km Area)──►</span>
              <span className="text-white font-medium">Tobi</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white font-medium">Tobi</span>
              <span className="text-zinc-500">──(Does NOT Share Location)────────►</span>
              <span className="text-white font-medium">Ada</span>
            </div>
          </div>
          <p className="mt-4 text-[11px] text-zinc-400 leading-relaxed">
            Status is completely independent. Tobi can reassure Ada without demanding mutual coordinate tracking. Both parties retain dignity, agency, and social peace.
          </p>
        </div>

        {/* Asymmetric Matrix Visual (IMG 03) */}
        <div className="my-8">
          <PlaceholderImage accentColor="emerald"
            id="IMG_03"
            title="The Asymmetric Directional Matrix"
            filename="meelow-03-asymmetric-directional-matrix.png"
            aspectRatio="16/9"
            dimensions="2000 × 1125 px"
            description="Interface state map showing the two distinct dashboard perspectives: 'Who Can See You' (inward access control) and 'Who You Can See' (outward tracking capability) with individual directional status badges."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 03: CIRCLES & 5 SHARING MODES ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">03 / Interaction Design</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Circles as Context, Not Blanket Grants
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              In legacy safety tools, joining a &quot;Family Circle&quot; automatically surrenders unconditional tracking rights to every member. In Meelow, a Circle is merely a social grouping and communication container.
            </p>
            <p>
              Joining a Circle executes an <strong>explicit granular handshake</strong>. Each member selects their specific sharing mode per person from five intent-based options.
            </p>
          </div>
        </div>

        {/* Circles Visual (IMG 04) */}
        <div className="my-8">
          <PlaceholderImage accentColor="emerald"
            id="IMG_04"
            title="Circles & Consent-First Invitation Flow"
            filename="meelow-04-circles-consent-invitation.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Step-by-step invitation flow: Circle creation card (Family, Friends, Coworkers), member invitation sheet, and the recipient's consent modal featuring granular permission toggles before acceptance."
          />
        </div>

        {/* 5 Modes Grid */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-5 gap-3 text-xs font-mono">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-emerald-400 block mb-1 font-semibold">1. Temporary Trip</span>
            <span className="text-zinc-500 text-[10px] block mb-2">1h, 4h, or Arrival</span>
            <p className="text-zinc-300 text-[11px] font-sans">Ideal for late-night Uber commutes home across town.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-emerald-400 block mb-1 font-semibold">2. Until Off</span>
            <span className="text-zinc-500 text-[10px] block mb-2">Manual Toggle</span>
            <p className="text-zinc-300 text-[11px] font-sans">Ideal for multi-hour inter-state road journeys.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-emerald-400 block mb-1 font-semibold">3. Always-On</span>
            <span className="text-zinc-500 text-[10px] block mb-2">Persistent</span>
            <p className="text-zinc-300 text-[11px] font-sans">For dependent children or vulnerable elderly relatives.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-emerald-400 block mb-1 font-semibold">4. Approximate</span>
            <span className="text-zinc-500 text-[10px] block mb-2">1.5km Radial Blur</span>
            <p className="text-zinc-300 text-[11px] font-sans">Reassurance without invasive micro-surveillance.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <span className="text-emerald-400 block mb-1 font-semibold">5. Stealth Pause</span>
            <span className="text-zinc-500 text-[10px] block mb-2">Zero Drama</span>
            <p className="text-zinc-300 text-[11px] font-sans">Freezes coordinate transmission without firing alerts.</p>
          </div>
        </div>

        {/* Intent Sharing Selector (IMG 05) */}
        <div className="my-8">
          <PlaceholderImage accentColor="emerald"
            id="IMG_05"
            title="The 5 Intent-Based Sharing Modes"
            filename="meelow-05-intent-sharing-selector.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Mobile UI modal displaying the 5 intent modes with clear plain-English copy: Temporary Trip (1h, 4h, Trip), Until Turned Off, Always-On, Approximate Area, and Paused."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 04: APPROXIMATE GEOFENCING & STEALTH PAUSE ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">04 / Privacy Innovations</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Reassurance Over Surveillance
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              Parents want to know their university student is safe on campus. They do not need to know which specific dorm room or cafe booth they are sitting in.
            </p>
            <p>
              Instead of rendering a high-precision blue crosshair at exact street coordinates, Meelow provides an <strong>Approximate Region Bubble</strong>: <span className="font-mono text-emerald-400">&quot;Tobi is near Victoria Island&quot;</span> or <span className="font-mono text-emerald-400">&quot;Ada is near UNILAG Campus.&quot;</span>
            </p>
            <p>
              Furthermore, when someone taps <strong>Pause Sharing</strong>, Meelow does not fire a dramatic notification to their circle. The marker gracefully settles to: <span className="font-mono text-zinc-400">&quot;Last seen 24 mins ago near Lekki&quot;</span> alongside natural battery and signal status. Zero accusations. Zero drama.
            </p>
          </div>
        </div>

        {/* Geofence Visual (IMG 06) */}
        <div className="my-8">
          <PlaceholderImage accentColor="emerald"
            id="IMG_06"
            title="Approximate Neighborhood Geofencing UI"
            filename="meelow-06-approximate-location-geofence.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Side-by-side UI comparison: The intrusive exact GPS pin tracking an individual to a specific building address vs. Meelow’s elegant approximate neighborhood perimeter ('Tobi is near Lekki Phase 1') with ambient reassurance text."
          />
        </div>

        {/* Stealth Pause (IMG 07) & Ambient Map (IMG 08) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage accentColor="emerald"
            id="IMG_07"
            title="The Stealth 'Pause' State Architecture"
            filename="meelow-07-stealth-pause-architecture.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Interface walkthrough of the Pause experience: The user's 1-tap 'Pause My Transmission' control alongside the recipient's calm, non-accusatory 'Last seen 24 mins ago near...' contact state."
          />
          <PlaceholderImage accentColor="emerald"
            id="IMG_08"
            title="The Ambient Map System & Contact Cards"
            filename="meelow-08-ambient-map-system.png"
            aspectRatio="16/9"
            dimensions="2560 × 1440 px"
            description="Full mobile map interface showing diverse contact cards: Active high-precision contacts, approximate regional bubbles, low-battery warning indicators, and stationary markers."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 05: TWO-SIDED SOS & DURESS PIN ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">05 / Crisis Protocols</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Two-Sided SOS & Coerced Cancellation Defense
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              In life-or-death emergencies, the UI transforms from an ambient social companion into a razor-sharp tactical engine. The SOS protocol features a 3-second tactile hold, silent broadcast (no alarms alerting an assailant), and automatic precision elevation (overriding any active &quot;Approximate&quot; setting).
            </p>
            <p>
              Crucially, in robbery or kidnapping scenarios, assailants frequently force victims to unlock their phones and dismiss distress alerts. To defend against this, Meelow implements a <strong>Dual-PIN Duress Architecture</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono my-2">
              <div className="p-3 rounded-lg bg-zinc-900 border border-white/[0.08]">
                <span className="text-emerald-400 font-semibold block mb-1">Standard PIN (e.g. 4821)</span>
                <span className="text-zinc-400 text-[11px] font-sans">Authenticates legitimate safety. Clears alerts across circle devices.</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 border border-red-500/30">
                <span className="text-red-400 font-semibold block mb-1">Duress PIN (e.g. 9999)</span>
                <span className="text-zinc-400 text-[11px] font-sans">Renders a believable &quot;Dismissed&quot; screen locally, while secretly maintaining live satellite polling and dispatching a silent Code Red distress escalation.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sender & Receiver SOS Images (IMG 09 & IMG 10) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage accentColor="emerald"
            id="IMG_09"
            title="Sender SOS: 1-Hand Rapid Trigger & Countdown"
            filename="meelow-09-sender-sos-trigger.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Sender emergency sequence: 3-second tactile hold countdown ring, silent trigger confirmation screen, and the active emergency status bar showing active trusted watchers."
          />
          <PlaceholderImage accentColor="emerald"
            id="IMG_10"
            title="Receiver SOS: High-Priority Intervention UI"
            filename="meelow-10-receiver-sos-intervention.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Receiver emergency view: High-urgency alert banner overriding lock screen, live tracking breadcrumb map, device telemetry (battery 8%, moving at 42 km/h), and quick-action response dock."
          />
        </div>

        {/* Duress PIN Defense Visual (IMG 11) */}
        <div className="my-8">
          <PlaceholderImage accentColor="emerald"
            id="IMG_11"
            title="Coerced Cancellation Defense (Duress PIN)"
            filename="meelow-11-duress-pin-defense.png"
            aspectRatio="4/3"
            dimensions="2000 × 1500 px"
            description="System logic diagram and UI screens showing the 'Cancel Alert' prompt: The dual-PIN branch logic (Authentic Resolution via Normal PIN vs. Silent Duress Protocol via Duress PIN)."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 06: SUPER-APP HARMONY & ADMIN OPERATIONS ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">06 / Ecosystem & Ops</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Fintech Super-App Segregation & Ops Console
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              Meelow incorporates an active consumer fintech ecosystem: Naira fiat wallets, virtual dollar cards for international subscriptions, and daily bill payments (airtime, mobile data, electricity tokens).
            </p>
            <p>
              Placing panic buttons next to routine utility recharge cards creates cognitive dissonance. We established a <strong>Dual-Mode Shell</strong>: the safety layer remains an ambient, calm spatial anchor with soft accents, while wallet and checkout operations operate within a crisp, high-density transactional financial interface.
            </p>
            <p>
              Behind the consumer application sits a mission-critical <strong>Admin Operations Console</strong> providing real-time incident queues, KYC tiering audits, and transaction dispute oversight.
            </p>
          </div>
        </div>

        {/* Super-App IA (IMG 12) & Fintech Engine (IMG 13) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage accentColor="emerald"
            id="IMG_12"
            title="Super-App Information Architecture"
            filename="meelow-12-superapp-information-architecture.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Full platform structural sitemap and navigation schema illustrating how Meelow cleanly isolates the Safety & Map layer from the high-frequency Fintech & Utilities engine."
          />
          <PlaceholderImage accentColor="emerald"
            id="IMG_13"
            title="High-Frequency Fintech Engine (Wallet & Cards)"
            filename="meelow-13-fintech-wallet-and-cards.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Meelow consumer fintech screens: Multi-currency wallet balance card, virtual dollar card interface with freeze/reveal controls, and the bill payment checkout modal."
          />
        </div>

        {/* Admin Console (IMG 14) */}
        <div className="my-8">
          <PlaceholderImage accentColor="emerald"
            id="IMG_14"
            title="Admin Incident Response & Operations Console"
            filename="meelow-14-admin-operations-console.png"
            aspectRatio="16/9"
            dimensions="2560 × 1440 px"
            description="High-density Admin dashboard: Live emergency incident monitoring queue, user permission audit logs, transaction dispute resolution tables, and system health status."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 07: DESIGN SYSTEM & TOKENS ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">07 / Design Tokens</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Geospatial & Emergency Ergonomics
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              Designing for emergency environments requires absolute perceptual clarity under stress, sunlight, and poor battery conditions. We crafted a triple-redundant token system: every state communicates via color, geometric shape, and plain-English text for complete WCAG AA parity.
            </p>
          </div>
        </div>

        {/* Design System Visual (IMG 15) */}
        <div className="my-8">
          <PlaceholderImage accentColor="emerald"
            id="IMG_15"
            title="The Design System & Accessible Geospatial Tokens"
            filename="meelow-15-design-system-tokens.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Design system component library: Accessible day/night map color tokens, battery/signal icon status matrices, emergency alert banner variants, and modal architecture sheets."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 08: RETROSPECTIVE & LESSONS ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">08 / Senior Retrospective</span>
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-8">
          What Designing for Privacy & Crisis Taught Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold block mb-2">01 / Relational Privacy</span>
              <h3 className="text-base font-semibold text-white mb-2">Privacy is Emotional, Not a Binary Toggle</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Engineers treat privacy as a boolean: 1 or 0. In human relationships, privacy is nuanced social currency. Approximate perimeters and stealth pauses respect human dignity while delivering reassurance.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold block mb-2">02 / Eliminating Drama</span>
              <h3 className="text-base font-semibold text-white mb-2">If Software Causes Conflict, Users Break It</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                When an app tattletales on users for pausing tracking, it transforms into an adversary. Users will disable Wi-Fi or spoof coordinates. Software must protect user dignity as fiercely as physical safety.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold block mb-2">03 / Edge-Case Ergonomics</span>
              <h3 className="text-base font-semibold text-white mb-2">Crisis Clarity Elevates Everyday UX</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                The extreme rigor required to engineer the Duress PIN and silent SOS forced ruthless simplicity across typography, contrast, and layout—making the entire everyday app faster and more intuitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── BOTTOM NAVIGATION ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06] mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/work/loqd"
            className="group flex items-center gap-3 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <span className="text-[10px] text-zinc-500 block uppercase">Previous Flagship</span>
              <span className="text-white font-medium">LOQD: Real-World Custody</span>
            </div>
          </Link>

          <Link
            href="/work/coupon"
            className="group flex items-center gap-3 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <div className="text-right">
              <span className="text-[10px] text-zinc-500 block uppercase">Next Flagship</span>
              <span className="text-white font-medium">Coupon: Fixed Deposit Marketplace</span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-emerald-400" />
          </Link>
        </div>
      </section>
    </div>
  );
}

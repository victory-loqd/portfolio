import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Car, Wrench, Globe, Shield, Sparkles, Clock, CheckCircle2, ArrowUpRight } from 'lucide-react';
import PlaceholderImage from '@/components/PlaceholderImage';

export default function EarlierSystemsRetrospective() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* ────────────────── TOP BREADCRUMB ────────────────── */}
      <div className="w-full max-w-5xl px-6 pt-28 sm:pt-36 pb-6">
        <Link
          href="/#archive"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Archive</span>
        </Link>
      </div>

      {/* ────────────────── HERO & METADATA BAR ────────────────── */}
      <section className="w-full max-w-5xl px-6 pb-12 border-b border-white/[0.06]">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
            Archival Retrospective · Foundational Product Systems
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-xs font-mono text-zinc-500">2023 – 2025</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
          Earlier Systems: VROOM, SKRHYB & GLOBLSERVICE
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-10">
          Selected commercial systems, two-sided marketplaces, and mobility platforms engineered between 2023 and 2025—establishing the foundations of multi-tenant architecture, trust handshakes, and cross-border logistics.
        </p>

        {/* 3-Project Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Car className="w-3.5 h-3.5" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">VROOM (2023–2024)</span>
            </div>
            <p className="text-zinc-400 font-sans text-xs">Two-sided mobility with security PIN handshake, panic protocols, and driver XP progression.</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
            <div className="flex items-center gap-2 text-brand-teal mb-1">
              <Wrench className="w-3.5 h-3.5" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">SKRHYB (2024–2025)</span>
            </div>
            <p className="text-zinc-400 font-sans text-xs">Two-sided service marketplace with provider CRM and 3-platform component kit shipped in 8 weeks.</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
            <div className="flex items-center gap-2 text-blue-400 mb-1">
              <Globe className="w-3.5 h-3.5" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">GLOBLSERVICE (2024–2025)</span>
            </div>
            <p className="text-zinc-400 font-sans text-xs">Cross-border link procurement, transparent FX tax breakdown, and multi-leg tracking.</p>
          </div>
        </div>
      </section>

      {/* ────────────────── CHAPTER 01: VROOM ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-b border-white/[0.06]">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 uppercase font-semibold">
            01 / Mobility & Trust
          </span>
          <span className="text-xs font-mono text-zinc-500">Aug 2023 – Aug 2024 · Lead Product Designer</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
          VROOM: Security Code Handshake & Mobility Gamification
        </h2>

        <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-3xl mb-8">
          In urban Nigerian transit, riders face persistent driver impersonation fears and security anxiety, while drivers suffer from opaque daily earnings models leading to high platform churn. We engineered a dual-app ecosystem (Rider and Driver) centered on physical safety verification and retention gamification.
        </p>

        {/* VROOM Dual-App Hero (IMG 01) */}
        <div className="my-8">
          <PlaceholderImage accentColor="amber"
            id="IMG_RETRO_01"
            title="VROOM: Dual-App Split (Rider vs. Driver UI)"
            filename="vroom-01-dual-app-split.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Side-by-side view: Rider home search & ride confirmation screen juxtaposed against Driver active dispatch, route navigation, and earnings summary."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06]">
            <h3 className="text-sm font-semibold text-white mb-2 font-mono flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              Security Code Matching & &quot;My Circle&quot;
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Before a ride can physically begin, the rider and driver must execute a 4-digit verification handshake on arrival. In-trip, an automated &quot;My Circle&quot; mechanism broadcasts real-time trip progress to trusted family members—the direct behavioral precursor to Meelow.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06]">
            <h3 className="text-sm font-semibold text-white mb-2 font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Driver XP & Daily Milestone Motivation
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              To curb driver churn, we introduced real-time visual milestone rings, daily bonus quest tracking, and XP progression tiers that made shift targets transparent and rewarding.
            </p>
          </div>
        </div>

        {/* VROOM Handshake (IMG 02) & Gamified Progression (IMG 03) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage accentColor="amber"
            id="IMG_RETRO_02"
            title="VROOM: Security Code Handshake & Panic Flow"
            filename="vroom-02-security-handshake-panic.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="The Security Code Matching modal on driver arrival (4-digit verification PIN), the emergency in-trip Panic Button card, and the 'My Circle' live family tracking sheet."
          />
          <PlaceholderImage accentColor="amber"
            id="IMG_RETRO_03"
            title="VROOM: Gamified Progression & Driver XP"
            filename="vroom-03-gamified-progression.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Driver XP tiering, daily milestone bonus progress rings, and rider loyalty reward badges."
          />
        </div>
      </section>

      {/* ────────────────── CHAPTER 02: SKRHYB ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-b border-white/[0.06]">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-teal/10 text-brand-teal border border-brand-teal/20 uppercase font-semibold">
            02 / Dual-Sided Marketplace
          </span>
          <span className="text-xs font-mono text-zinc-500">Feb 2024 – Feb 2025 · Product Designer (The Cypha)</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
          SKRHYB: Two-Sided Marketplace & Multi-Platform Kit
        </h2>

        <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-3xl mb-8">
          Local service marketplaces fail when either side experiences friction. Consumers require instant discovery and booking in under 60 seconds; providers need a robust mobile business management tool covering schedules, catalogs, and payouts. We architected a 3-platform design system shipped as an 8-week MVP.
        </p>

        {/* SKRHYB Dual-User Architecture (IMG 04) */}
        <div className="my-8">
          <PlaceholderImage accentColor="amber"
            id="IMG_RETRO_04"
            title="SKRHYB: Dual-User Architecture (Provider vs. Consumer)"
            filename="skrhyb-04-dual-user-architecture.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="User journey map and sitemap showing the structural separation between the Consumer Discovery Portal and the Provider Business Management CRM."
          />
        </div>

        {/* Booking Flow (IMG 05) & Multi-Platform DS (IMG 06) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage accentColor="amber"
            id="IMG_RETRO_05"
            title="SKRHYB: Sub-60s Booking & Discovery Flow"
            filename="skrhyb-05-booking-flow.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Step-by-step consumer booking progression: Service category picker, verified provider profile, calendar slot selection, and checkout sheet."
          />
          <PlaceholderImage accentColor="amber"
            id="IMG_RETRO_06"
            title="SKRHYB: Multi-Platform Component Library"
            filename="skrhyb-06-design-system.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Figma component sheet showing responsive auto-layout cards, calendar pickers, provider analytics charts, and unified tokens across web, iOS, and Android."
          />
        </div>
      </section>

      {/* ────────────────── CHAPTER 03: GLOBLSERVICE ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-b border-white/[0.06]">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20 uppercase font-semibold">
            03 / Cross-Border Commerce
          </span>
          <span className="text-xs font-mono text-zinc-500">Feb 2024 – Feb 2025 · Product Designer (The Cypha)</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
          GLOBLSERVICE: Cross-Border Logistics & Link Procurement
        </h2>

        <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-3xl mb-8">
          Shopping on global platforms (Amazon, eBay, Zara) from Africa is severely hindered by international card payment restrictions, complex customs declarations, and parcel loss anxiety. We redesigned GLOBLSERVICE around an effortless &quot;Paste-a-Link&quot; intake model with 100% transparent local currency landing costs.
        </p>

        {/* Paste-a-Link Intake (IMG 07) */}
        <div className="my-8">
          <PlaceholderImage accentColor="amber"
            id="IMG_RETRO_07"
            title="GLOBLSERVICE: 'Paste-a-Link' Intake Interface"
            filename="globlservice-07-paste-a-link-intake.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="The single-input global procurement interface: URL input field, automatic metadata scraping (title, preview, USD price), and category selector."
          />
        </div>

        {/* Cost Breakdown (IMG 08) & Multi-Leg Tracker (IMG 09) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage accentColor="amber"
            id="IMG_RETRO_08"
            title="GLOBLSERVICE: Localized Transparent Cost Engine"
            filename="globlservice-08-cost-breakdown-sheet.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="The Transparent Quotation Modal: Currency conversion breakdown, local payment options, estimated doorstep delivery window, and customs clearance assurance."
          />
          <PlaceholderImage accentColor="amber"
            id="IMG_RETRO_09"
            title="GLOBLSERVICE: Live Multi-Leg Customs Tracker"
            filename="globlservice-09-multi-leg-tracker.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="The localized tracking interface: Multi-leg status progression (Procured in US ➔ In Flight ➔ Customs Cleared at Lagos MMIA ➔ Out for Delivery)."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 04: THE ARCHITECTURAL EVOLUTION ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-b border-white/[0.06]">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">04 / Evolutionary Lineage</span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-8">
          How Earlier Work Informed Current Mastery
        </h2>

        <div className="p-8 rounded-2xl bg-zinc-950 border border-white/[0.08] font-mono text-xs text-zinc-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-2 border-amber-400 pl-4">
              <span className="text-amber-400 font-semibold block mb-1">VROOM Handshake</span>
              <p className="text-zinc-400 font-sans text-xs">
                Evolved directly into <strong>Meelow&apos;s</strong> asymmetric permission model, &quot;My Circle&quot; live tracking, and emergency duress protocols.
              </p>
            </div>
            <div className="border-l-2 border-brand-teal pl-4">
              <span className="text-brand-teal font-semibold block mb-1">SKRHYB Multi-Platform Kit</span>
              <p className="text-zinc-400 font-sans text-xs">
                Established the token architecture and auto-layout discipline required to unify <strong>Skydd&apos;s</strong> 8-product multi-tenant enterprise system.
              </p>
            </div>
            <div className="border-l-2 border-blue-400 pl-4">
              <span className="text-blue-400 font-semibold block mb-1">GLOBLSERVICE Pricing Engine</span>
              <p className="text-zinc-400 font-sans text-xs">
                Informed <strong>Coupon&apos;s</strong> upfront 10% WHT tax disclosure, asynchronous bank recovery states, and due diligence transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── BOTTOM NAVIGATION ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/archive/juju-games"
            className="group flex items-center gap-3 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <span className="text-[10px] text-zinc-500 block uppercase">Previous Archive</span>
              <span className="text-white font-medium">Juju Games: Studio Co-Founding & Game HUDs</span>
            </div>
          </Link>

          <Link
            href="/about"
            className="group flex items-center gap-3 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <div className="text-right">
              <span className="text-[10px] text-zinc-500 block uppercase">Next Section</span>
              <span className="text-white font-medium">About Victory Chukwuma</span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
}

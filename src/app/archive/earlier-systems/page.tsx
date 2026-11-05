'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function EarlierSystemsCaseStudy() {
  return (
    <div className="w-full flex flex-col">
      {/* ────────────────── TOP BREADCRUMB ────────────────── */}
      <div className="mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to projects</span>
        </Link>
      </div>

      {/* ────────────────── TRANSFORMATION HEADLINE ────────────────── */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15] mb-10 max-w-3xl">
        Earlier Systems: VROOM, SKRHYB & GLOBLSERVICE—Foundational two-sided marketplaces and logistics.
      </h1>

      {/* ────────────────── 3-COLUMN METADATA STRIP ────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pb-12 mb-12 border-b border-white/[0.08] text-xs font-mono">
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Role</span>
          <span className="text-white font-medium text-sm">Product Designer</span>
        </div>
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Scope</span>
          <span className="text-white font-medium text-sm">Mobility, Marketplaces, Logistics</span>
        </div>
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Timeline</span>
          <span className="text-white font-medium text-sm">2023 – 2025</span>
        </div>
      </div>

      {/* ────────────────── HERO FULL-WIDTH IMAGE ────────────────── */}
      <div className="mb-16">
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.16) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/vroom-01-dual-app-split.png"
              alt="Earlier Systems Suite"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </div>

      {/* ────────────────── CASE STUDY NARRATIVE ────────────────── */}
      <div className="flex flex-col gap-16 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-3xl mb-24">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
            01. VROOM: Ride-Hailing, Safety Handshakes & Gamification
          </h2>
          <p className="mb-4">
            In urban transit, riders face persistent driver impersonation fears and security anxiety. We engineered a dual-app ecosystem (Rider and Driver) centered on physical safety verification: requiring rider and driver to match a dynamic 4-digit PIN before the trip can physically start.
          </p>
          <p>
            In-trip, an automated &quot;My Circle&quot; mechanism broadcast live GPS progress to trusted family members—the direct behavioral precursor to Meelow.
          </p>
        </section>

        {/* Image 02 */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.14) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/skrhyb-04-dual-user-architecture.png"
              alt="SKRHYB Dual-User Architecture"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
            02. SKRHYB: Two-Sided Marketplace & 3-Platform Kit
          </h2>
          <p className="mb-4">
            Local service marketplaces fail when either side experiences friction. Consumers require instant discovery and booking in under 60 seconds; providers need a robust business management CRM for schedules, catalogs, and payouts.
          </p>
          <p>
            We built a unified component system powering web, iOS, and Android—shipping an MVP within 8 weeks that achieved sub-60-second first-time bookings during usability testing.
          </p>
        </section>

        {/* Image 03 */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.14) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/globlservice-07-paste-a-link-intake.png"
              alt="GLOBLSERVICE Link Procurement"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
            03. GLOBLSERVICE: Cross-Border Logistics & Link Procurement
          </h2>
          <p className="mb-4">
            Shopping on global platforms (Amazon, eBay, Zara) from Africa is severely hindered by international card declines and customs black holes. We redesigned GLOBLSERVICE around an effortless &quot;Paste-a-Link&quot; intake model with 100% transparent local currency landing costs.
          </p>
          <p>
            The pricing engine calculated product cost, air freight, and customs clearance upfront—eliminating hidden delivery fee surprises.
          </p>
        </section>
      </div>

      {/* ────────────────── NEXT PROJECT TEASER ────────────────── */}
      <div className="pt-12 border-t border-white/[0.08] mb-20">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-4">
          Next Section
        </span>
        <Link
          href="/about"
          className="group block rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.2] p-6 sm:p-8 transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white group-hover:text-zinc-200 transition-colors">
                About Victory Chukwuma
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Background, Systems DNA & Tech Stack
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
          </div>
        </Link>
      </div>

      {/* ────────────────── RIGHT COLUMN FOOTER ────────────────── */}
      <footer className="pt-12 border-t border-white/[0.08] text-xs font-mono text-zinc-500 flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <span className="text-zinc-600 block uppercase tracking-wider text-[10px] mb-2">Nav</span>
            <ul className="flex flex-col gap-1.5 text-zinc-400">
              <li><Link href="/" className="hover:text-white">/Home</Link></li>
              <li><Link href="/work" className="hover:text-white">/Work <sup className="text-[9px]">06</sup></Link></li>
              <li><Link href="/about" className="hover:text-white">/About</Link></li>
              <li><Link href="/contact" className="hover:text-white">/Contact</Link></li>
            </ul>
          </div>
          <div>
            <span className="text-zinc-600 block uppercase tracking-wider text-[10px] mb-2">Contact</span>
            <a href="mailto:designwithvee@gmail.com" className="text-white hover:underline block mb-3">
              designwithvee@gmail.com
            </a>
            <span className="text-zinc-600 block uppercase tracking-wider text-[10px] mb-1">Socials</span>
            <div className="flex items-center gap-2 text-zinc-400">
              <a href="https://linkedin.com/in/victory-chukwuma" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
              <span>·</span>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">X</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pt-4 border-t border-white/[0.05] gap-2 text-[11px] text-zinc-600">
          <div>
            © 2026 Victory Chukwuma. All rights reserved.
          </div>
          <div>
            Based in Lagos
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function CouponCaseStudy() {
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
        Coupon: Architecting a multi-institution fixed-deposit system and resilient error recovery state machine.
      </h1>

      {/* ────────────────── 3-COLUMN METADATA STRIP ────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pb-12 mb-12 border-b border-white/[0.08] text-xs font-mono">
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Role</span>
          <span className="text-white font-medium text-sm">Lead Product Designer</span>
        </div>
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Scope</span>
          <span className="text-white font-medium text-sm">iOS, Android & Tokens</span>
        </div>
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Timeline</span>
          <span className="text-white font-medium text-sm">2025</span>
        </div>
      </div>

      {/* ────────────────── HERO FULL-WIDTH IMAGE ────────────────── */}
      <div className="mb-16">
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(0, 230, 197, 0.16) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/coupon-01-hero-ecosystem-split.png"
              alt="Coupon Fixed Deposit Ecosystem"
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
            The High-Stakes Reality of Fixed-Income
          </h2>
          <p className="mb-4">
            In macroeconomic climates where inflation hovers around 25–30%, holding idle cash in commercial bank accounts destroys purchasing power. Fixed deposits offer guaranteed returns (14% to 22% p.a.), but the market historically suffered from opacity, counterparty fears, and arbitrary penalty forfeitures.
          </p>
          <p>
            Furthermore, the legacy codebase had sprawled into 141 unmerged screens where duplicate flows and brittle bank gateway timeout states eroded user confidence.
          </p>
        </section>

        {/* Image 02 */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(0, 230, 197, 0.14) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/coupon-04-marketplace-discovery.png"
              alt="Coupon Discovery Engine"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
            Institutional Due Diligence & 10% WHT Transparency
          </h2>
          <p className="mb-4">
            We converted every marketplace card into an auditable trust unit: displaying NDIC insurance protection thresholds (up to ₦5,000,000) and an Institutional Due Diligence profile before capital commitment.
          </p>
          <p className="mb-4">
            To prevent tax surprises, our configuration modeler calculates the statutory 10% Withholding Tax (WHT) deduction in real time, guaranteeing exact net take-home returns.
          </p>
        </section>

        {/* Image 03 */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(0, 230, 197, 0.14) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/coupon-12-defensive-timeout-flow.png"
              alt="Asynchronous API Timeout Recovery"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
            Asynchronous Bank API Fail-Safe & System Audit
          </h2>
          <p className="mb-4">
            When interbank switching gateways stall, showing a generic &quot;Failed&quot; modal after funds have left a user&apos;s account induces panic. We engineered an asynchronous state machine: capturing the CBN interbank trace code, transitioning to &quot;Processing Under Guarantee,&quot; and polling in the background for automatic certificate issuance.
          </p>
          <p>
            Finally, we audited the design repository, consolidating 141 scattered screens into 115 canonical, verified states.
          </p>
        </section>
      </div>

      {/* ────────────────── NEXT PROJECT TEASER ────────────────── */}
      <div className="pt-12 border-t border-white/[0.08] mb-20">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-4">
          Next Project
        </span>
        <Link
          href="/archive/juju-games"
          className="group block rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.2] p-6 sm:p-8 transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white group-hover:text-zinc-200 transition-colors">
                Juju Games
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Studio Co-Founding, Cockpit HUDs & Game Economies
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

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function SkyddCaseStudy() {
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
        Skydd: Designing the transition from a focused 2-product insurance startup into a unified, multi-product wealth protection ecosystem.
      </h1>

      {/* ────────────────── 3-COLUMN METADATA STRIP ────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pb-12 mb-12 border-b border-white/[0.08] text-xs font-mono">
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Role</span>
          <span className="text-white font-medium text-sm">Lead Product Designer</span>
        </div>
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Company</span>
          <span className="text-white font-medium text-sm">Skydd</span>
        </div>
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Timeline</span>
          <span className="text-white font-medium text-sm">2025 – Present</span>
        </div>
      </div>

      {/* ────────────────── HERO FULL-WIDTH IMAGE ────────────────── */}
      <div className="mb-16">
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(255, 85, 0, 0.16) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/skydd-01-hero-dashboard-architecture.png"
              alt="Skydd Platform Architecture"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </div>

      {/* ────────────────── CASE STUDY NARRATIVE ────────────────── */}
      <div className="flex flex-col gap-16 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-3xl mb-24">
        {/* Section 01 */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
            The Nigerian Insurance Dilemma
          </h2>
          <p className="mb-4">
            Insurance penetration in Nigeria sits under 1%. The barrier is rarely a lack of desire for safety—it is systemic friction: currency volatility, sudden family financial commitments, and historical consumer distrust of insurers who hide behind fine print.
          </p>
          <p>
            Traditional insurance software treats customers with hostility: demanding 14-page PDF declarations upfront, burying early cancellation penalties, and creating bureaucratic black holes when claims are submitted. Skydd was founded to transform this relationship.
          </p>
        </section>

        {/* Image 02 */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(255, 85, 0, 0.14) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/skydd-02-market-context-nigeria-insurance.png"
              alt="Skydd Market Context"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>

        {/* Section 02 */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
            The Eight-Product Taxonomy & Dual-Engine Model
          </h2>
          <p className="mb-4">
            In early 2025, Skydd expanded from two basic products (Auto & Health) into eight comprehensive offerings: Life, Gadget, Travel, Credit Life, Home, and Business.
          </p>
          <p className="mb-4">
            To prevent cognitive overload, we organized the platform around a <strong>Dual-Engine Financial Model</strong>:
          </p>
          <ul className="space-y-2 text-zinc-400 font-mono text-xs pl-4 border-l border-white/[0.1] my-4">
            <li>• Engine 1 (Asset Accumulation): Guaranteed yield savings vaults and liquid wallets.</li>
            <li>• Engine 2 (Risk Indemnity): High-stakes insurance underwriting with real-time claims tracking.</li>
          </ul>
        </section>

        {/* Image 03 */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(255, 85, 0, 0.14) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/skydd-03-eight-product-taxonomy.png"
              alt="Eight Product Taxonomy"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>

        {/* Section 03 */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
            Transparent Claims SLA & Asynchronous Settlement
          </h2>
          <p className="mb-4">
            Trust is won or lost at the point of claim. We replaced opaque review periods with an explicit 4-stage live tracker: (1) Notice of Loss Captured, (2) Evidence Assessed, (3) Underwriter Approval, (4) Instant Settlement into Sterling Bank escrow.
          </p>
          <p>
            Users are never left guessing where their claim stands or when payout occurs.
          </p>
        </section>

        {/* Image 04 */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(255, 85, 0, 0.14) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/skydd-09-claims-first-notice-of-loss.png"
              alt="Claims First Notice of Loss"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </div>

      {/* ────────────────── NEXT PROJECT TEASER ────────────────── */}
      <div className="pt-12 border-t border-white/[0.08] mb-20">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-4">
          Next Project
        </span>
        <Link
          href="/work/loqd"
          className="group block rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.2] p-6 sm:p-8 transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white group-hover:text-zinc-200 transition-colors">
                LOQD
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Physical Custody · Service Design for Nigerian Nightlife
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

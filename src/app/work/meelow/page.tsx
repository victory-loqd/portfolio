'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function MeelowCaseStudy() {
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
        Meelow: Designing a consent-first personal safety and location system in an African urban super-app.
      </h1>

      {/* ────────────────── 3-COLUMN METADATA STRIP ────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pb-12 mb-12 border-b border-white/[0.08] text-xs font-mono">
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Role</span>
          <span className="text-white font-medium text-sm">Lead Product Designer</span>
        </div>
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Scope</span>
          <span className="text-white font-medium text-sm">iOS, Android & Admin</span>
        </div>
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Timeline</span>
          <span className="text-white font-medium text-sm">2025 – 2026</span>
        </div>
      </div>

      {/* ────────────────── HERO FULL-WIDTH IMAGE ────────────────── */}
      <div className="mb-16">
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.16) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/meelow-01-hero-safety-without-surveillance.png"
              alt="Meelow Safety System"
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
            Care vs. Control in Urban Mobility
          </h2>
          <p className="mb-4">
            Late-night commuting and inter-state transit in African metropolitan centers carry real security risks. People want their loved ones to know they are safe. However, legacy location apps enforce an oppressive binary: you are either tracked 24/7 with pinpoint precision, or invisible.
          </p>
          <p>
            This turns protective care into toxic surveillance. When someone pauses location on legacy tools, the app broadcasts a conspicuous alert that ignites family conflict.
          </p>
        </section>

        {/* Image 02 */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.14) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/meelow-03-asymmetric-directional-matrix.png"
              alt="Asymmetric Directional Matrix"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
            The Asymmetric Directional Model
          </h2>
          <p className="mb-4">
            Connection does not equal permission. We decoupled mutual visibility into two independent vectors: <strong>&quot;Who Sees Me&quot;</strong> vs. <strong>&quot;Who I See&quot;</strong>.
          </p>
          <p className="mb-4">
            Users can share a blurred 1.5km regional bubble (&quot;Near Victoria Island&quot;) instead of exact coordinates, satisfying parental reassurance while preserving young adult dignity.
          </p>
        </section>

        {/* Image 03 */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.14) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-3/4 aspect-square">
            <Image
              src="/images/meelow-11-duress-pin-defense.png"
              alt="Duress PIN Defense"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
            Two-Sided SOS & Coerced Cancellation Defense
          </h2>
          <p className="mb-4">
            In robbery or extortion scenarios, assailants frequently force victims to unlock their phones and dismiss distress signals.
          </p>
          <p>
            Meelow implements a <strong>Dual-PIN Duress Architecture</strong>: entering a standard PIN authentically clears alerts, while entering the duress PIN displays a convincing cancellation screen locally while silently continuing live satellite tracking and dispatching an emergency Code Red.
          </p>
        </section>
      </div>

      {/* ────────────────── NEXT PROJECT TEASER ────────────────── */}
      <div className="pt-12 border-t border-white/[0.08] mb-20">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-4">
          Next Project
        </span>
        <Link
          href="/work/coupon"
          className="group block rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.2] p-6 sm:p-8 transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white group-hover:text-zinc-200 transition-colors">
                Coupon
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Fixed-Deposit Marketplace & Financial Error Recovery
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

'use client';

import React, { useState } from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import CtaSection from '@/components/CtaSection';
import PageFooter from '@/components/PageFooter';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col">
      {/* ────────────────── HEADING ────────────────── */}
      <section className="mb-12">
        <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-3">
          Let&apos;s Talk
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
          Whether you&apos;re structuring an early-stage product, scaling platform systems, or looking
          for a lead product designer to bring clarity to an ambitious team—I&apos;d love to connect.
        </p>
      </section>

      {/* ────────────────── DIRECT CONTACT CHANNELS ────────────────── */}
      <section className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <div className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/[0.08] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#141417] flex items-center justify-center text-neutral-400 shrink-0 border border-white/[0.05]">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">Direct Email</span>
            <a
              href="mailto:designwithvee@gmail.com"
              className="text-sm font-medium text-white hover:underline"
            >
              designwithvee@gmail.com
            </a>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/[0.08] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#141417] flex items-center justify-center text-neutral-400 shrink-0 border border-white/[0.05]">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">Location</span>
            <span className="text-sm font-medium text-white">Lagos, Nigeria &middot; WAT (UTC+1)</span>
          </div>
        </div>
      </section>

      {/* ────────────────── CONTACT FORM ────────────────── */}
      <section className="mb-20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-neutral-400 font-normal">
                Your Name*
              </label>
              <input
                type="text"
                required
                placeholder="Jane Smith"
                className="w-full bg-[#0c0c0e] border border-white/[0.08] rounded-2xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/[0.25] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-neutral-400 font-normal">
                Email Address*
              </label>
              <input
                type="email"
                required
                placeholder="jane@company.com"
                className="w-full bg-[#0c0c0e] border border-white/[0.08] rounded-2xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/[0.25] transition-colors"
              />
            </div>
          </div>

          {/* Engagement Type */}
          <div className="flex flex-col gap-2">
            <label className="text-xs text-neutral-400 font-normal">
              Topic / Engagement*
            </label>
            <div className="relative">
              <select
                required
                defaultValue=""
                className="w-full appearance-none bg-[#0c0c0e] border border-white/[0.08] rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white/[0.25] transition-colors pr-10 cursor-pointer"
              >
                <option value="" disabled className="text-neutral-600">
                  Select engagement type
                </option>
                <option value="lead-role">Senior / Lead Product Designer Role</option>
                <option value="venture-advisory">0-to-1 Venture Collaboration &amp; Advisory</option>
                <option value="platform-systems">Platform Architecture &amp; Design Systems Audit</option>
                <option value="other">General Inquiry / Conversation</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400 text-xs">
                ⌵
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col gap-2">
            <label className="text-xs text-neutral-400 font-normal">
              Product details or challenge*
            </label>
            <textarea
              rows={5}
              required
              placeholder="Tell me about your product, team, and what you're working through..."
              className="w-full bg-[#0c0c0e] border border-white/[0.08] rounded-2xl p-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/[0.25] transition-colors resize-none"
            />
          </div>

          {/* Submit Row */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="bg-white text-black hover:bg-neutral-200 transition-colors px-6 py-2.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1.5"
            >
              <span>{submitted ? 'Message received! Will respond shortly.' : 'Send Message'}</span>
              {!submitted && <ArrowUpRight className="w-3.5 h-3.5" />}
            </button>
          </div>
        </form>
      </section>

      {/* ────────────────── CTA & FOOTER ────────────────── */}
      <CtaSection />
      <PageFooter />
    </div>
  );
}

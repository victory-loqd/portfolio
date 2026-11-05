'use client';

import React, { useState } from 'react';
import { Signature } from '@/components/Signature';
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
        <p className="text-sm sm:text-base text-neutral-400 max-w-md">
          Have an architectural challenge, a 0-to-1 product to build, or need advisory for your
          design systems? Reach out below or write to{' '}
          <a
            href="mailto:designwithvee@gmail.com"
            className="text-white underline hover:text-neutral-300"
          >
            designwithvee@gmail.com
          </a>
          .
        </p>
      </section>

      {/* ────────────────── CONTACT FORM ────────────────── */}
      <section className="mb-20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-neutral-400 font-normal">
                Full name*
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
                Email*
              </label>
              <input
                type="email"
                required
                placeholder="jane@company.com"
                className="w-full bg-[#0c0c0e] border border-white/[0.08] rounded-2xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/[0.25] transition-colors"
              />
            </div>
          </div>

          {/* Budget Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-xs text-neutral-400 font-normal">
              Project Scope / Budget*
            </label>
            <div className="relative">
              <select
                required
                defaultValue=""
                className="w-full appearance-none bg-[#0c0c0e] border border-white/[0.08] rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white/[0.25] transition-colors pr-10 cursor-pointer"
              >
                <option value="" disabled className="text-neutral-600">
                  Select budget range
                </option>
                <option value="5k">&lt; $5,000</option>
                <option value="10k">$5,000 – $10,000</option>
                <option value="20k">$10,000 – $25,000</option>
                <option value="25k+">$25,000+</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400 text-xs">
                ⌵
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col gap-2">
            <label className="text-xs text-neutral-400 font-normal">
              Project details & timelines*
            </label>
            <textarea
              rows={5}
              required
              placeholder="Tell me about your product, team, and what you're looking to achieve..."
              className="w-full bg-[#0c0c0e] border border-white/[0.08] rounded-2xl p-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/[0.25] transition-colors resize-none"
            />
          </div>

          {/* Submit Row & Signature */}
          <div className="flex items-center justify-between pt-4">
            <button
              type="submit"
              className="bg-white text-black hover:bg-neutral-200 transition-colors px-6 py-2.5 rounded-full text-xs font-medium shadow-md"
            >
              {submitted ? 'Message sent! Will reply within 24h.' : "Let's get in touch"}
            </button>
            <Signature className="text-white select-none" />
          </div>
        </form>
      </section>

      {/* ────────────────── CTA & FOOTER ────────────────── */}
      <CtaSection />
      <PageFooter />
    </div>
  );
}

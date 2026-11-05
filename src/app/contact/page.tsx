'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col">
      {/* ────────────────── CONTACT FORM ────────────────── */}
      <section className="mb-20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-2">Full name*</label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full bg-[#0c0c0e] border border-white/[0.08] focus:border-white/[0.25] text-sm text-white px-4 py-3 rounded-xl focus:outline-none transition-colors placeholder:text-zinc-600"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-2">Email*</label>
              <input
                type="email"
                required
                placeholder="jane@company.com"
                className="w-full bg-[#0c0c0e] border border-white/[0.08] focus:border-white/[0.25] text-sm text-white px-4 py-3 rounded-xl focus:outline-none transition-colors placeholder:text-zinc-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2">Budget*</label>
            <select
              required
              className="w-full bg-[#0c0c0e] border border-white/[0.08] focus:border-white/[0.25] text-sm text-zinc-300 px-4 py-3 rounded-xl focus:outline-none transition-colors"
            >
              <option value="" disabled selected>Select a budget tier</option>
              <option value="5k-10k">$5,000 – $10,000</option>
              <option value="10k-25k">$10,000 – $25,000</option>
              <option value="25k+">$25,000+</option>
              <option value="fulltime">Full-Time / Lead Advisory</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2">How can we help?</label>
            <textarea
              rows={5}
              required
              placeholder="Tell me about what you need help with..."
              className="w-full bg-[#0c0c0e] border border-white/[0.08] focus:border-white/[0.25] text-sm text-white p-4 rounded-xl focus:outline-none transition-colors placeholder:text-zinc-600 resize-none"
            ></textarea>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors"
            >
              {submitted ? 'Message sent!' : "Let's get in touch"}
            </button>
            <span className="font-serif italic text-xl text-zinc-400 select-none">
              Victory Chukwuma
            </span>
          </div>
        </form>
      </section>

      {/* ────────────────── CALL TO ACTION STRIP ────────────────── */}
      <section className="mb-20 pt-12 border-t border-white/[0.08]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          <span className="text-xl sm:text-2xl font-semibold text-white">Let&apos;s design</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-3">
          Something Great Together
        </h2>
        <p className="text-sm text-zinc-400 mb-6">
          Have an idea? Let&apos;s turn it into something worth building.
        </p>
        <a
          href="mailto:designwithvee@gmail.com?subject=Book%20a%20Call"
          className="inline-block bg-white text-black px-5 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors"
        >
          Book A Call
        </a>
      </section>

      {/* ────────────────── RIGHT COLUMN FOOTER ────────────────── */}
      <footer className="pt-12 border-t border-white/[0.08] text-xs font-mono text-zinc-500 flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <span className="text-zinc-600 block uppercase tracking-wider text-[10px] mb-2">Nav</span>
            <ul className="flex flex-col gap-1.5 text-zinc-400">
              <li><Link href="/" className="hover:text-white">/Home</Link></li>
              <li><Link href="/work" className="hover:text-white">/Work <sup className="text-[9px]">06</sup></Link></li>
              <li><Link href="/about" className="hover:text-white">/About</Link></li>
              <li><Link href="/contact" className="text-white font-medium">/Contact</Link></li>
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

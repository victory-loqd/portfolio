'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Copy } from 'lucide-react';

export default function CtaSection() {
  const [copied, setCopied] = useState(false);
  const email = 'designwithvee@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="my-24 py-12 flex flex-col items-start border-t border-white/[0.08]">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-xs uppercase tracking-wider font-mono text-neutral-400">
          Availability &amp; Partnerships
        </span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4 max-w-xl leading-tight">
        Building something with complex moving parts?
      </h2>

      <p className="text-sm sm:text-base text-neutral-400 mb-8 max-w-xl leading-relaxed">
        Whether you&apos;re structuring an early-stage venture, scaling a multi-tenant platform, or
        need systems discipline for a high-stakes product—I&apos;m open to senior design roles, founding
        collaborations, and select advisory.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/contact"
          className="bg-white text-black px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-neutral-200 transition-colors shadow-lg"
        >
          Start a conversation
        </Link>

        <button
          onClick={copyEmail}
          className="border border-white/[0.12] bg-[#0c0c0e] hover:bg-[#151518] hover:border-white/[0.25] text-neutral-300 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors flex items-center gap-2 font-mono"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied to clipboard</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-neutral-400" />
              <span>{email}</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}

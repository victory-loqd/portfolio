import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#070709] pt-20 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Main Statement */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Direct Channel
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-xl">
              Let&apos;s build something durable.
            </h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed">
              I partner with ambitious teams to turn complex technical, operational,
              and early-stage challenges into coherent, high-retention products.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="mailto:designwithvee@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>designwithvee@gmail.com</span>
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/[0.04] border border-white/[0.1] text-white font-medium text-xs hover:bg-white/[0.08] transition-all"
              >
                <span>About Victory</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 md:col-start-9 flex flex-col gap-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Systems
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400 font-mono">
              <li>
                <Link href="/work/skydd" className="hover:text-white transition-colors">
                  01. Skydd
                </Link>
              </li>
              <li>
                <Link href="/work/loqd" className="hover:text-white transition-colors">
                  02. LOQD
                </Link>
              </li>
              <li>
                <Link href="/work/meelow" className="hover:text-white transition-colors">
                  03. Meelow
                </Link>
              </li>
              <li>
                <Link href="/work/coupon" className="hover:text-white transition-colors">
                  04. Coupon
                </Link>
              </li>
              <li>
                <Link href="/archive/juju-games" className="hover:text-white transition-colors">
                  05. Juju Games
                </Link>
              </li>
              <li>
                <Link href="/archive/earlier-systems" className="hover:text-white transition-colors">
                  06. Systems Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Connect
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400 font-mono">
              <li>
                <a
                  href="https://www.linkedin.com/in/victory-chukwuma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:designwithvee@gmail.com"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Email</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Colophon & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <div>
            © 2026 Victory Chukwuma · Designed with systems discipline.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-zinc-500">Live Next.js · Obsidian System</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#070708] pt-20 pb-12 mt-32">
      <div className="max-w-7xl mx-auto px-6">
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
                href="mailto:contact@designwithvee.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>contact@designwithvee.com</span>
              </a>
              <a
                href="/cv/Victory_Chukwuma_Product_Designer_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-zinc-900 border border-white/[0.12] text-white font-medium text-xs hover:bg-zinc-800 transition-all"
              >
                <span>Master CV (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 md:col-start-9 flex flex-col gap-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Systems
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
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
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
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
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Twitter / X</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://read.cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>ReadCV</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-600 font-mono gap-4">
          <span>© {new Date().getFullYear()} VICTORY CHUKWUMA · ALL RIGHTS RESERVED</span>
          <span>ENGINEERED FOR SCALABLE PRODUCT SYSTEMS</span>
        </div>
      </div>
    </footer>
  );
}

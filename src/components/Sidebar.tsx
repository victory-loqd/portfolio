'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lagosTime, setLagosTime] = useState('');

  // Live Lagos Clock (WAT / UTC+1)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Lagos',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(now);
      setLagosTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: '/Home', href: '/' },
    { label: '/Work', href: '/work', badge: '06' },
    { label: '/About', href: '/about' },
    { label: '/Contact', href: '/contact' },
  ];

  const isCurrent = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ────────────────── DESKTOP FIXED SIDEBAR ────────────────── */}
      <aside className="fixed top-0 left-0 bottom-0 w-[300px] xl:w-[320px] bg-[#050505] border-r border-white/[0.08] p-7 flex-col justify-between z-40 hidden lg:flex select-none">
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-medium text-sm tracking-tight hover:text-zinc-300 transition-colors">
              Victory Chukwuma
            </Link>
            <a
              href="mailto:designwithvee@gmail.com?subject=Project%20Inquiry"
              className="bg-white text-black px-3.5 py-1 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors"
            >
              Book a call
            </a>
          </div>

          {/* Availability Strip */}
          <div className="mt-6 border border-white/[0.08] rounded-full px-3.5 py-1.5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-zinc-300">Available</span>
            </div>
            {/* Equalizer animation bars */}
            <div className="flex items-center gap-0.5">
              <span className="w-[1.5px] h-2.5 bg-zinc-500 animate-pulse"></span>
              <span className="w-[1.5px] h-3.5 bg-zinc-400 animate-pulse delay-75"></span>
              <span className="w-[1.5px] h-2 bg-zinc-500 animate-pulse delay-150"></span>
              <span className="w-[1.5px] h-3 bg-zinc-400 animate-pulse delay-100"></span>
            </div>
            <span className="text-[10px] text-zinc-400">2 slots left for Q2 2026</span>
          </div>

          {/* Navigation Menu */}
          <nav className="mt-10 flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = isCurrent(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between text-base sm:text-lg transition-colors py-1 group ${
                    active ? 'text-white font-medium' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  <div className="flex items-baseline gap-1">
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Metadata & Clock */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-4 text-xs font-mono">
          <div>
            <span className="text-zinc-600 block text-[11px] mb-0.5">Direct Channel</span>
            <a
              href="mailto:designwithvee@gmail.com"
              className="text-white font-medium hover:underline text-sm block"
            >
              designwithvee@gmail.com
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 text-zinc-500 text-xs">
            <a
              href="https://linkedin.com/in/victory-chukwuma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              X / Twitter
            </a>
            <span>·</span>
            <a
              href="https://read.cv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              ReadCV
            </a>
          </div>

          {/* Copyright & Live Lagos Clock */}
          <div className="flex items-end justify-between pt-2 border-t border-white/[0.05] text-[11px] text-zinc-600">
            <div>
              <div>© 2026 Victory Chukwuma.</div>
              <div>All rights reserved.</div>
            </div>
            <div className="text-right">
              <div>Based in Lagos</div>
              <div className="text-white font-mono">{lagosTime || '7:30 PM'}</div>
            </div>
          </div>
        </div>
      </aside>

      {/* ────────────────── MOBILE TOP BAR ────────────────── */}
      <header className="lg:hidden sticky top-0 inset-x-0 z-50 bg-[#050505] border-b border-white/[0.08] px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="text-white font-medium text-sm tracking-tight">Victory Chukwuma</span>
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="mailto:designwithvee@gmail.com"
            className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium"
          >
            Book a call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-zinc-400 hover:text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ────────────────── MOBILE SLIDEOUT DRAWER ────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[57px] bg-[#050505] z-40 p-6 flex flex-col justify-between">
          <div>
            <div className="border border-white/[0.08] rounded-full px-3.5 py-1.5 flex items-center justify-between text-xs font-mono text-zinc-400 mb-6">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-zinc-300">Available</span>
              </div>
              <span className="text-[11px]">2 slots left for Q2 2026</span>
            </div>

            <nav className="flex flex-col gap-4 text-xl">
              {navLinks.map((link) => {
                const active = isCurrent(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-2 border-b border-white/[0.05] ${
                      active ? 'text-white font-medium' : 'text-zinc-500'
                    }`}
                  >
                    <div className="flex items-baseline gap-1">
                      <span>{link.label}</span>
                      {link.badge && <span className="text-xs font-mono text-zinc-500">{link.badge}</span>}
                    </div>
                    {active && <span className="w-2 h-2 rounded-full bg-white"></span>}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-4 text-xs font-mono">
            <div>
              <span className="text-zinc-600 block text-xs mb-0.5">Direct Channel</span>
              <a href="mailto:designwithvee@gmail.com" className="text-white text-sm">
                designwithvee@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-between text-zinc-500 pt-2 border-t border-white/[0.05]">
              <span>Based in Lagos</span>
              <span className="text-white font-mono">{lagosTime || '7:30 PM'}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

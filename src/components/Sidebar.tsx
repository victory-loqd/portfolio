'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { TwitterXIcon, InstagramIcon, LinkedInIcon, GitHubIcon } from './Icons';

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lagosTime, setLagosTime] = useState('');

  // Live Lagos Clock (WAT / UTC+1)
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Lagos',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }).format(new Date());
        setLagosTime(timeStr);
      } catch {
        setLagosTime('9:00 PM');
      }
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
      <aside className="fixed top-0 left-0 bottom-0 w-[280px] xl:w-[300px] bg-[#000000] border-r border-[#1a1a1a] p-8 flex flex-col justify-between z-40 hidden lg:flex select-none">
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-white font-medium text-sm tracking-tight hover:text-neutral-300 transition-colors"
            >
              Victory Chukwuma
            </Link>
            <Link
              href="/contact"
              className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors"
            >
              Get in touch
            </Link>
          </div>

          {/* Professional Status Pill */}
          <div className="mt-6 border border-white/[0.08] bg-[#09090b] rounded-full px-3.5 py-1.5 flex items-center justify-between text-[11px] text-neutral-400">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-neutral-200 font-medium">Open to Roles</span>
            </div>
            <span className="text-[10px] text-neutral-500 font-mono">Lagos / Remote</span>
          </div>

          {/* Nav Links */}
          <nav className="mt-8 flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isCurrent(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between text-base py-1 transition-colors group ${
                    active ? 'text-white font-medium' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-baseline gap-1">
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] font-mono text-neutral-500 group-hover:text-neutral-400">
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

        {/* Bottom Contacts & Clock */}
        <div className="pt-6 flex flex-col gap-4 text-xs">
          <div>
            <a
              href="mailto:designwithvee@gmail.com"
              className="text-white font-medium hover:underline text-sm block"
            >
              designwithvee@gmail.com
            </a>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-4 text-neutral-400 pt-1">
            <a
              href="https://github.com/victory-loqd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/victory-chukwuma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-white transition-colors"
            >
              <TwitterXIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Live Lagos Clock */}
          <div className="flex items-end justify-between pt-4 border-t border-[#1a1a1a] text-[11px] text-neutral-500">
            <div>
              <div>© 2026 Victory Chukwuma.</div>
              <div>All rights reserved.</div>
            </div>
            <div className="text-right">
              <div>Based in Lagos</div>
              <div className="text-neutral-200 font-mono mt-0.5">{lagosTime || '9:00 PM'}</div>
            </div>
          </div>
        </div>
      </aside>

      {/* ────────────────── MOBILE TOP BAR ────────────────── */}
      <header className="lg:hidden sticky top-0 inset-x-0 z-50 bg-[#000000] border-b border-[#1a1a1a] px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-medium text-sm tracking-tight">
          Victory Chukwuma
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium"
          >
            Get in touch
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-neutral-400 hover:text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ────────────────── MOBILE SLIDEOUT DRAWER ────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[57px] bg-[#000000] z-40 p-6 flex flex-col justify-between">
          <div>
            <div className="border border-white/[0.08] bg-[#09090b] rounded-full px-3.5 py-2 flex items-center justify-between text-xs text-neutral-400 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-neutral-200 font-medium">Open to Roles</span>
              </div>
              <span className="text-[11px] font-mono text-neutral-500">Lagos / Remote</span>
            </div>

            <nav className="flex flex-col gap-4 text-xl">
              {navLinks.map((link) => {
                const active = isCurrent(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-2 border-b border-[#1a1a1a] ${
                      active ? 'text-white font-medium' : 'text-neutral-400'
                    }`}
                  >
                    <div className="flex items-baseline gap-1">
                      <span>{link.label}</span>
                      {link.badge && <span className="text-xs font-mono text-neutral-500">{link.badge}</span>}
                    </div>
                    {active && <span className="w-2 h-2 rounded-full bg-white"></span>}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#1a1a1a] flex flex-col gap-4 text-xs">
            <div>
              <a href="mailto:designwithvee@gmail.com" className="text-white text-sm">
                designwithvee@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-between text-neutral-500 pt-2 border-t border-[#1a1a1a]">
              <span>Based in Lagos</span>
              <span className="text-white font-mono">{lagosTime || '9:00 PM'}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

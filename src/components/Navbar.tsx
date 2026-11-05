'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '/#work' },
    { label: 'Principles', href: '/#principles' },
    { label: 'Archive', href: '/#archive' },
    { label: 'About', href: '/about' },
  ];

  return (
    <div className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto w-full max-w-4xl glass-pill rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300">
        {/* Brand / Logo + Live Status */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
              Victory Chukwuma
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider text-zinc-400 uppercase font-mono hidden sm:inline">
              Available for Select Roles
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white/10 text-white font-medium shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action / Contact CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="mailto:designwithvee@gmail.com"
            className="text-xs font-mono text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.05] transition-all"
          >
            Contact
          </a>
          <a
            href="mailto:designwithvee@gmail.com?subject=Senior%20Design%20Inquiry"
            className="flex items-center gap-1.5 text-xs font-medium text-black bg-white hover:bg-zinc-200 px-4 py-1.5 rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 inset-x-4 glass-pill rounded-2xl p-5 flex flex-col gap-3 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-zinc-200 hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/[0.05]"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">designwithvee@gmail.com</span>
            <a
              href="mailto:designwithvee@gmail.com"
              className="text-xs font-medium bg-white text-black px-3.5 py-1.5 rounded-full"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

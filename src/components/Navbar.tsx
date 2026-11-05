'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '/#work' },
    { label: 'Philosophy', href: '/#philosophy' },
    { label: 'Archives', href: '/#archives' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-pulse"></span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
              VICTORY CHUKWUMA
            </span>
            <span className="text-[10px] tracking-wider text-zinc-500 uppercase font-mono">
              Lead Product Designer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-xs tracking-wide transition-colors ${
                pathname === link.href
                  ? 'text-white font-medium'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action / Contact */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:contact@designwithvee.com"
            className="text-xs text-zinc-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/[0.04] transition-all"
          >
            Get in touch
          </a>
          <a
            href="/cv/Victory_Chukwuma_Product_Designer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-white bg-zinc-900 border border-white/[0.12] hover:border-white/[0.25] px-3.5 py-1.5 rounded-full hover:bg-zinc-800 transition-all"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/[0.08] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-zinc-300 hover:text-white py-1"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
            <a
              href="mailto:contact@designwithvee.com"
              className="text-xs text-zinc-400 hover:text-white"
            >
              contact@designwithvee.com
            </a>
            <a
              href="/cv/Victory_Chukwuma_Product_Designer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-white bg-zinc-900 px-3 py-1.5 rounded-full border border-white/[0.12]"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TwitterXIcon, InstagramIcon, LinkedInIcon } from './Icons';

export default function PageFooter() {
  const [lagosTime, setLagosTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const timeStr = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Lagos',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(new Date());
      setLagosTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="pt-16 pb-12 border-t border-[#1a1a1a] text-xs text-neutral-400 flex flex-col gap-10">
      <div className="grid grid-cols-2 gap-8 max-w-lg">
        {/* Nav Links */}
        <div>
          <span className="text-neutral-500 block text-xs mb-3 font-mono uppercase tracking-wider text-[10px]">Nav</span>
          <ul className="flex flex-col gap-2 text-neutral-300">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                /Home
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-white transition-colors flex items-baseline gap-1">
                <span>/Work</span>
                <span className="text-[10px] text-neutral-500 font-mono">06</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                /About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                /Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <span className="text-neutral-500 block text-xs mb-2 font-mono uppercase tracking-wider text-[10px]">Contact</span>
          <a
            href="mailto:designwithvee@gmail.com"
            className="text-white font-medium hover:underline block mb-4"
          >
            designwithvee@gmail.com
          </a>

          <span className="text-neutral-500 block text-xs mb-2 font-mono uppercase tracking-wider text-[10px]">Socials</span>
          <div className="flex items-center gap-3 text-neutral-400">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <TwitterXIcon className="w-3.5 h-3.5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a href="https://linkedin.com/in/victory-chukwuma" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="LinkedIn">
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Sub-Footer Line */}
      <div className="pt-6 border-t border-[#141414] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-neutral-500 text-[11px] font-mono">
        <div>© 2026 Victory Chukwuma. All rights reserved.</div>
        <div>
          Based in Lagos &middot; {lagosTime || '8:55 PM'}
        </div>
      </div>
    </footer>
  );
}

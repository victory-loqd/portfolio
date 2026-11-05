'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function WorkPage() {
  const [filter, setFilter] = useState('All');

  const allProjects = [
    {
      title: 'Skydd',
      category: 'Platform Expansion & Insurtech Systems',
      href: '/work/skydd',
      tag: 'Fintech',
      image: '/images/skydd-01-hero-dashboard-architecture.png',
      accent: 'rgba(255, 85, 0, 0.14)',
    },
    {
      title: 'LOQD',
      category: 'Physical Custody · Service Design',
      href: '/work/loqd',
      tag: 'Service',
      image: '/images/loqd-01-hero-4-role-split.png',
      accent: 'rgba(245, 158, 11, 0.14)',
    },
    {
      title: 'Meelow',
      category: 'Geospatial Safety & Permissions',
      href: '/work/meelow',
      tag: 'Product',
      image: '/images/meelow-01-hero-safety-without-surveillance.png',
      accent: 'rgba(16, 185, 129, 0.14)',
    },
    {
      title: 'Coupon',
      category: 'WealthTech · Fixed Deposit Marketplace',
      href: '/work/coupon',
      tag: 'Fintech',
      image: '/images/coupon-01-hero-ecosystem-split.png',
      accent: 'rgba(0, 230, 197, 0.14)',
    },
    {
      title: 'Juju Games',
      category: 'Studio Archive · Cockpit HUDs & Economies',
      href: '/archive/juju-games',
      tag: 'Interactive',
      image: '/images/juju-01-hero-studio-suite.png',
      accent: 'rgba(168, 85, 247, 0.14)',
    },
    {
      title: 'Earlier Systems Archive',
      category: 'VROOM, SKRHYB & Globlservice',
      href: '/archive/earlier-systems',
      tag: 'Product',
      image: '/images/vroom-01-dual-app-split.png',
      accent: 'rgba(245, 158, 11, 0.14)',
    },
  ];

  const filtered = filter === 'All' ? allProjects : allProjects.filter((p) => p.tag === filter);

  return (
    <div className="w-full flex flex-col">
      {/* ────────────────── HEADER & FILTER BAR ────────────────── */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
          Latest Projects
        </h1>

        {/* Filter Dropdown Pill */}
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.18] text-xs font-mono text-zinc-300 py-2 pl-3.5 pr-8 rounded-lg cursor-pointer focus:outline-none transition-colors"
          >
            <option value="All">All</option>
            <option value="Fintech">Fintech</option>
            <option value="Product">Product</option>
            <option value="Service">Service</option>
            <option value="Interactive">Interactive</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-zinc-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* ────────────────── 2-COLUMN PROJECT GRID ────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-20">
        {filtered.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group block"
          >
            {/* Image Frame */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-6 transition-all duration-500 ease-out group-hover:border-white/[0.2]">
              {/* Radial Spotlight Accent */}
              <div
                className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${project.accent} 0%, transparent 70%)`,
                }}
              />

              {/* Staged 3D Model Asset */}
              <div className="relative w-40 sm:w-48 aspect-square transition-transform duration-500 ease-out group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>

            {/* Card Meta Underneath */}
            <div className="mt-3.5">
              <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-zinc-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-500 font-normal mt-0.5">
                {project.category}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* ────────────────── RIGHT COLUMN FOOTER ────────────────── */}
      <footer className="pt-12 border-t border-white/[0.08] text-xs font-mono text-zinc-500 flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <span className="text-zinc-600 block uppercase tracking-wider text-[10px] mb-2">Nav</span>
            <ul className="flex flex-col gap-1.5 text-zinc-400">
              <li><Link href="/" className="hover:text-white">/Home</Link></li>
              <li><Link href="/work" className="text-white font-medium">/Work <sup className="text-[9px]">06</sup></Link></li>
              <li><Link href="/about" className="hover:text-white">/About</Link></li>
              <li><Link href="/contact" className="hover:text-white">/Contact</Link></li>
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

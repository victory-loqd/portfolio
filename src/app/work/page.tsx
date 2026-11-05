'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CtaSection from '@/components/CtaSection';
import PageFooter from '@/components/PageFooter';

export default function WorkPage() {
  const [filter, setFilter] = useState('All');

  const allProjects = [
    {
      title: 'Skydd',
      category: 'Platform Expansion & Insurtech',
      href: '/work/skydd',
      image: '/images/liam/CeWnKDqMcaC6QV5UaE472hLOzQ.png',
      tag: 'Platform Systems',
    },
    {
      title: 'LOQD',
      category: 'Physical Custody · 0-to-1 Service Design',
      href: '/work/loqd',
      image: '/images/liam/IDcf3P8gXYdSc4M3AkdZQ1lpyE.webp',
      tag: 'Physical-Digital',
    },
    {
      title: 'Meelow',
      category: 'Geospatial Safety & Permissions',
      href: '/work/meelow',
      image: '/images/liam/5Tr3lVFQValweNo1PwCFDcPYFM.webp',
      tag: 'Mobile & Safety',
    },
    {
      title: 'Coupon',
      category: 'WealthTech · Fixed Deposit Marketplace',
      href: '/work/coupon',
      image: '/images/liam/uecOh2cH1y6yjY0skhMk1vxiIkk.png',
      tag: 'Fintech',
    },
    {
      title: 'Juju Games',
      category: 'Studio Archive & Game HUDs',
      href: '/work/juju-games',
      image: '/images/liam/j2ArVmSEHNPfwtoVMAqPEAr0I.png',
      tag: 'Studio Archive',
    },
    {
      title: 'Earlier Systems',
      category: 'Mobility, Marketplaces & Logistics',
      href: '/work/earlier-systems',
      image: '/images/liam/lZeLGOVkhZl2IeLU28XxbMB5EE.webp',
      tag: 'Platform Systems',
    },
  ];

  const filteredProjects =
    filter === 'All' ? allProjects : allProjects.filter((p) => p.tag === filter);

  const filterOptions = [
    'All',
    'Platform Systems',
    'Fintech',
    'Physical-Digital',
    'Mobile & Safety',
    'Studio Archive',
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ────────────────── HEADER WITH FILTER ────────────────── */}
      <section className="mb-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Latest Projects
          </h1>

          {/* Filter Dropdown matching Liam Hayes */}
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none bg-[#0c0c0e] text-neutral-300 border border-white/[0.08] hover:border-white/[0.2] px-4 py-2 pr-8 rounded-xl text-xs font-medium cursor-pointer focus:outline-none transition-colors"
            >
              {filterOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-neutral-400 text-xs">
              ⌵
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 6-PROJECT GRID ────────────────── */}
      <section className="mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.title} href={project.href} className="group block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] transition-all duration-500 ease-out group-hover:border-white/[0.2] shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(min-width: 880px) 400px, 100vw"
                />
              </div>

              <div className="mt-3.5">
                <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-400 font-normal mt-0.5">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ────────────────── CTA & FOOTER ────────────────── */}
      <CtaSection />
      <PageFooter />
    </div>
  );
}

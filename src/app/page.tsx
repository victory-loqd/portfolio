'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function HomePage() {
  const featuredProjects = [
    {
      title: 'Skydd',
      category: 'Platform Expansion & Systems',
      href: '/work/skydd',
      image: '/images/model.png',
      accent: 'rgba(255, 85, 0, 0.14)',
    },
    {
      title: 'LOQD',
      category: 'Physical Custody · 0-to-1 Service Design',
      href: '/work/loqd',
      image: '/images/model.png',
      accent: 'rgba(245, 158, 11, 0.14)',
    },
    {
      title: 'Meelow',
      category: 'Geospatial Safety & Permissions',
      href: '/work/meelow',
      image: '/images/model.png',
      accent: 'rgba(16, 185, 129, 0.14)',
    },
    {
      title: 'Coupon',
      category: 'WealthTech · Fixed Deposit Marketplace',
      href: '/work/coupon',
      image: '/images/model.png',
      accent: 'rgba(0, 230, 197, 0.14)',
    },
  ];

  const services = [
    { name: 'Platform Systems Architecture' },
    { name: 'Multi-Tenant Design Systems' },
    { name: '0-to-1 Product Strategy & Operations' },
    { name: 'Defensive UX & State Machine Modeling' },
    { name: 'Physical-Digital Service Design' },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ────────────────── AVATAR & HERO INTRO ────────────────── */}
      <section className="mb-16">
        {/* Avatar squircle */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden mb-8 border border-white/[0.1] bg-[#121214]">
          <Image
            src="/images/model.png"
            alt="Victory Chukwuma"
            fill
            className="object-cover p-2"
          />
        </div>

        {/* Master Heading */}
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-2">
          Hey! I&apos;m Victory Chukwuma
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 font-normal mb-8">
          Lead Product Designer + Systems Architect
        </p>

        {/* Bio Copy */}
        <div className="flex flex-col gap-4 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl mb-8">
          <p>
            I&apos;m a lead product designer with 6+ years of experience crafting digital products, platforms,
            and brand experiences. I combine strategy, usability, and visual systems to create work that
            looks great and works even better. Every detail has a purpose.
          </p>
          <p>
            When I&apos;m not designing, you&apos;ll probably find me untangling state machines, building 0-to-1
            ventures, or obsessing over edge cases that keep products durable. Good design, systems discipline,
            and deep user trust. Curiosity keeps the ideas coming.
          </p>
        </div>

        {/* Cursive Signature */}
        <div className="text-2xl sm:text-3xl font-serif italic text-zinc-300 tracking-wide select-none">
          Victory Chukwuma
        </div>
      </section>

      {/* ────────────────── LATEST PROJECTS ────────────────── */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Latest Projects
          </h2>
          <Link
            href="/work"
            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
          >
            <span>See all works</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block"
            >
              {/* Image Frame */}
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center p-6 transition-all duration-500 ease-out group-hover:border-white/[0.2]"
              >
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
      </section>

      {/* ────────────────── SERVICES / CAPABILITIES ────────────────── */}
      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-8">
          Services
        </h2>

        <div className="flex flex-col gap-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="p-5 rounded-xl bg-[#0c0c0e] border border-white/[0.06] hover:border-white/[0.15] hover:bg-[#101013] transition-all flex items-center justify-between text-sm sm:text-base text-zinc-200"
            >
              <span>{service.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── RIGHT COLUMN FOOTER ────────────────── */}
      <footer className="pt-12 border-t border-white/[0.08] text-xs font-mono text-zinc-500 flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <span className="text-zinc-600 block uppercase tracking-wider text-[10px] mb-2">Nav</span>
            <ul className="flex flex-col gap-1.5 text-zinc-400">
              <li><Link href="/" className="hover:text-white">/Home</Link></li>
              <li><Link href="/work" className="hover:text-white">/Work <sup className="text-[9px]">06</sup></Link></li>
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

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import {
  Signature,
  FramerLogoIcon,
  MonitorIcon,
  PaintbrushIcon,
  GridSquaresIcon,
  WindowCardIcon,
} from '@/components/Icons';
import CtaSection from '@/components/CtaSection';
import PageFooter from '@/components/PageFooter';

export default function HomePage() {
  const featuredProjects = [
    {
      title: 'Skydd',
      category: 'Platform Expansion & Insurtech',
      href: '/work/skydd',
      image: '/images/liam/CeWnKDqMcaC6QV5UaE472hLOzQ.png',
    },
    {
      title: 'LOQD',
      category: 'Physical Custody · 0-to-1 Service Design',
      href: '/work/loqd',
      image: '/images/liam/IDcf3P8gXYdSc4M3AkdZQ1lpyE.webp',
    },
    {
      title: 'Meelow',
      category: 'Geospatial Safety & Permissions',
      href: '/work/meelow',
      image: '/images/liam/5Tr3lVFQValweNo1PwCFDcPYFM.webp',
    },
    {
      title: 'Coupon',
      category: 'WealthTech · Fixed Deposit Marketplace',
      href: '/work/coupon',
      image: '/images/liam/uecOh2cH1y6yjY0skhMk1vxiIkk.png',
    },
  ];

  const services = [
    { name: 'Platform Systems Architecture', icon: <FramerLogoIcon className="w-5 h-5 text-white" /> },
    { name: 'Multi-Tenant Design Systems', icon: <GridSquaresIcon className="w-5 h-5 text-white" /> },
    { name: '0-to-1 Product Strategy & Operations', icon: <MonitorIcon className="w-5 h-5 text-white" /> },
    { name: 'Defensive UX & State Machine Modeling', icon: <PaintbrushIcon className="w-5 h-5 text-white" /> },
    { name: 'Physical-Digital Service Design', icon: <WindowCardIcon className="w-5 h-5 text-white" /> },
  ];

  const techStack = [
    {
      name: 'Figma',
      role: 'Design Systems & Tokens',
      icon: '/images/liam/s8hDXsoh6VCgBvRZS4olToh8duY.png',
    },
    {
      name: 'Framer',
      role: 'Interactive Web & Motion',
      icon: '/images/liam/9pCdiqBPC1kAyxXVydZ9phiGo1c.png',
    },
    {
      name: 'Next.js & React',
      role: 'Production Architecture',
      icon: '/images/liam/wXWKpBe1Ht7hAFVyvAyL3yPF30.png',
    },
    {
      name: 'Claude & AI',
      role: 'Reasoning Engines',
      icon: '/images/liam/3PTYQostqkt4rQIKbBRXi01rjF4.png',
    },
    {
      name: 'Linear',
      role: 'Systems Discipline & Ops',
      icon: '/images/liam/eH5fBlxPkhHzBqcAfgKmWZmTE4.png',
    },
    {
      name: 'TypeScript',
      role: 'Typed Design Contracts',
      icon: '/images/liam/ooMxgkm5eYsgWz663Se0hkHf90.png',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ────────────────── AVATAR & HERO INTRO ────────────────── */}
      <section className="mb-20">
        {/* Avatar Squircle */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden mb-8 border border-white/[0.08] bg-[#121214]">
          <Image
            src="/images/liam/otrdW4VIyZhPn1yWg7fN0.png"
            alt="Victory Chukwuma"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Master Heading */}
        <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-2 leading-tight">
          Hey! I&apos;m Victory Chukwuma
        </h1>
        <p className="text-base sm:text-lg text-neutral-400 font-normal mb-8">
          Lead Product Designer + Systems Architect
        </p>

        {/* Bio Copy matching Liam Hayes exact styling */}
        <div className="flex flex-col gap-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-2xl mb-8">
          <p>
            I&apos;m a lead product designer with 6+ years of experience crafting digital
            products, platforms, and brand experiences. I combine strategy, usability, and visual
            systems to create work that looks great and works even better. Every detail has a purpose.
          </p>
          <p>
            When I&apos;m not designing, you&apos;ll probably find me untangling state machines, building
            0-to-1 ventures, or obsessing over edge cases that keep products durable. Good design,
            good vibes, and a little bit of obsession with systems discipline. Curiosity keeps the ideas coming.
          </p>
        </div>

        {/* Signature */}
        <div className="mb-14">
          <Signature />
        </div>
      </section>

      {/* ────────────────── LATEST PROJECTS ────────────────── */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            Latest Projects
          </h2>
          <Link
            href="/work"
            className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1 font-mono"
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
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center transition-all duration-500 ease-out group-hover:border-white/[0.2] shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Meta Underneath */}
              <div className="mt-3.5">
                <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-500 font-normal mt-0.5">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ────────────────── SERVICES ────────────────── */}
      <section className="mb-24">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-8">
          Services
        </h2>

        <div className="flex flex-col gap-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="p-5 rounded-2xl bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.2] hover:bg-[#121215] transition-all flex items-center justify-between text-base text-neutral-200 cursor-default group"
            >
              <span>{service.name}</span>
              <div className="opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                {service.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── MY TECH STACK ────────────────── */}
      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-8">
          My Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {techStack.map((tool) => (
            <div
              key={tool.name}
              className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.2] hover:bg-[#121215] transition-all flex items-center gap-3.5"
            >
              <div className="relative w-11 h-11 rounded-xl bg-[#17171a] p-2 flex items-center justify-center shrink-0 border border-white/[0.05]">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white">{tool.name}</h3>
                <p className="text-xs text-neutral-400 mt-0.5">{tool.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── CTA SECTION ────────────────── */}
      <CtaSection />

      {/* ────────────────── RIGHT COLUMN FOOTER ────────────────── */}
      <PageFooter />
    </div>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { Signature } from '@/components/Signature';
import CtaSection from '@/components/CtaSection';
import PageFooter from '@/components/PageFooter';

export default function AboutPage() {
  const experiences = [
    {
      company: 'Skydd',
      role: 'Lead Product Designer & Systems Architect',
      period: '2025–Present',
    },
    {
      company: 'LOQD',
      role: 'Founder & Lead Product Designer',
      period: '2026–Present',
    },
    {
      company: 'Juju Games Studio',
      role: 'Co-Founder & Head of Interface Design',
      period: '2023–2025',
    },
    {
      company: 'VROOM & SKRHYB',
      role: 'Lead Product Designer',
      period: '2022–2024',
    },
  ];

  const milestones = [
    {
      organization: 'Regulatory Insurtech',
      award: 'NAICOM 8-Product Platform Architecture',
      year: '2025',
    },
    {
      organization: 'Physical-Digital Pilot',
      award: 'LOQD Zero-Dispute Nightlife Custody',
      year: '2026',
    },
    {
      organization: 'WealthTech Marketplace',
      award: '115-Screen Canonical Reconciliation (Coupon)',
      year: '2024',
    },
    {
      organization: 'Afrofuturist Studio',
      award: 'Juju Games Studio Co-Founding & Showcase',
      year: '2023',
    },
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
      role: 'Reasoning Engines & Ops',
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

  const galleryImages = [
    '/images/liam/CeWnKDqMcaC6QV5UaE472hLOzQ.png',
    '/images/liam/IDcf3P8gXYdSc4M3AkdZQ1lpyE.webp',
    '/images/liam/5Tr3lVFQValweNo1PwCFDcPYFM.webp',
    '/images/liam/uecOh2cH1y6yjY0skhMk1vxiIkk.png',
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ────────────────── AVATAR & HERO INTRO ────────────────── */}
      <section className="mb-16">
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

        <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-2">
          Hey! I&apos;m Victory Chukwuma
        </h1>
        <p className="text-base sm:text-lg text-neutral-400 font-normal mb-8">
          Lead Product Designer + Systems Architect
        </p>

        <div className="flex flex-col gap-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-2xl mb-8">
          <p>
            I&apos;m a lead product designer with 6+ years of experience bringing structure to
            complex and early-stage products. I specialize in platform systems, multi-tenant digital
            architectures, and 0-to-1 physical-digital services across insurtech, wealth management,
            live event logistics, and game development.
          </p>
          <p>
            My design philosophy is grounded in systems discipline: every interface is modeled as a
            state machine with explicit edge cases, defensive error recovery, and honest constraints.
            I believe great product design isn&apos;t superficial decoration—it&apos;s the structural
            clarity that makes high-stakes decisions feel effortless.
          </p>
        </div>

        <div className="pt-2 mb-4">
          <Signature />
        </div>
      </section>

      {/* ────────────────── EXPERIENCE ────────────────── */}
      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-8">
          Experience
        </h2>

        <div className="flex flex-col border-t border-[#1a1a1a]">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="py-5 border-b border-[#1a1a1a] flex items-center justify-between text-sm"
            >
              <div>
                <span className="text-white font-medium block">{exp.company}</span>
                <span className="text-neutral-500 text-xs mt-0.5 block">{exp.role}</span>
              </div>
              <span className="text-neutral-500 text-xs font-mono">{exp.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── MILESTONES & RECOGNITION ────────────────── */}
      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-8">
          Key Milestones
        </h2>

        <div className="flex flex-col border-t border-[#1a1a1a]">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="py-5 border-b border-[#1a1a1a] flex items-center justify-between text-sm"
            >
              <div>
                <span className="text-white font-medium block">{m.award}</span>
                <span className="text-neutral-500 text-xs mt-0.5 block">{m.organization}</span>
              </div>
              <span className="text-neutral-500 text-xs font-mono">{m.year}</span>
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

      {/* ────────────────── IMAGE GALLERY ────────────────── */}
      <section className="mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] shadow-lg"
            >
              <Image src={src} alt="Gallery item" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── CTA & FOOTER ────────────────── */}
      <CtaSection />
      <PageFooter />
    </div>
  );
}

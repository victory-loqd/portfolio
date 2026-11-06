'use client';

import React from 'react';
import Image from 'next/image';
import Avatar from '@/components/Avatar';
import CtaSection from '@/components/CtaSection';
import PageFooter from '@/components/PageFooter';

export default function AboutPage() {
  const experiences = [
    {
      company: 'Skydd',
      role: 'Lead Product Designer & Systems Architect',
      period: '2025–Present',
      description: 'Expanded insurance infrastructure from 2 to 8 regulated products across web, mobile, and broker tooling.',
    },
    {
      company: 'LOQD',
      role: 'Founder & Product Lead',
      period: '2026–Present',
      description: 'Architecting zero-dispute physical asset custody for high-density nightlife events from research to live pilot.',
    },
    {
      company: 'Juju Games Studio',
      role: 'Co-Founder & Head of Interface Design',
      period: '2023–2025',
      description: 'Directed game interface architectures, telemetry HUDs, production pipelines, and studio pitch operations.',
    },
    {
      company: 'VROOM & SKRHYB',
      role: 'Product Designer',
      period: '2022–2024',
      description: 'Designed ride-hailing security handshakes, multi-role dispatch operations, and automotive marketplace flows.',
    },
  ];

  const milestones = [
    {
      organization: 'Regulatory Insurtech',
      award: 'NAICOM 8-Product Platform Architecture (Skydd)',
      year: '2025',
    },
    {
      organization: 'Physical-Digital Service',
      award: 'Zero-Dispute Nightlife Custody Blueprint (LOQD)',
      year: '2026',
    },
    {
      organization: 'WealthTech Marketplace',
      award: '115-Screen Canonical Reconciliation (Coupon)',
      year: '2024',
    },
    {
      organization: 'Afrofuturist Studio',
      award: 'Studio Co-Founding & Showcase (Juju Games)',
      year: '2023',
    },
  ];

  const principles = [
    {
      number: '01',
      title: 'Model the state machine before the screen',
      description:
        'Interface design without state modeling creates fragile products. Happy paths are easy—durable design is defined by how gracefully a system handles timeouts, ambiguous states, and defensive error recovery.',
    },
    {
      number: '02',
      title: 'The product is the service',
      description:
        'In physical-digital systems like LOQD, software is only a coordination layer. The real product is the human chain: the counter attendant under pressure, the runner in a dark venue, and the customer trusting someone with their valuables.',
    },
    {
      number: '03',
      title: 'Safety without surveillance',
      description:
        'Permissions and location sharing require asymmetric consent. People want trusted contacts to know they are safe without feeling constantly watched. Genuine privacy requires intentional friction and stealth controls.',
    },
    {
      number: '04',
      title: 'Honest constraints over decorative fluff',
      description:
        'Products built for real operational environments—especially in high-friction markets—must function cleanly when network calls drop, batteries die, and attention is fragmented.',
    },
  ];

  const techStack = [
    {
      name: 'Figma',
      role: 'Design Systems & Tokens',
      icon: '/images/liam/s8hDXsoh6VCgBvRZS4olToh8duY.png',
    },
    {
      name: 'Linear',
      role: 'Systems Discipline & Ops',
      icon: '/images/liam/eH5fBlxPkhHzBqcAfgKmWZmTE4.png',
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
      name: 'TypeScript',
      role: 'Typed Design Contracts',
      icon: '/images/liam/ooMxgkm5eYsgWz663Se0hkHf90.png',
    },
    {
      name: 'Framer',
      role: 'Interactive Web & Motion',
      icon: '/images/liam/9pCdiqBPC1kAyxXVydZ9phiGo1c.png',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ────────────────── AVATAR & HERO INTRO ────────────────── */}
      <section className="mb-16">
        <div className="mb-8">
          <Avatar size="md" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-2">
          Victory Chukwuma
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 font-normal mb-8">
          Product Designer &amp; Systems Builder &middot; Founder of LOQD
        </p>

        <div className="flex flex-col gap-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-2xl mb-8">
          <p className="text-neutral-200">
            I&apos;m a product designer who brings structure to complex and early-stage products. My
            work focuses on figuring out products with a lot of moving parts: multi-tenant platform
            architectures, physical-digital operations, financial systems, and permission models.
          </p>
          <p>
            Over the last 6+ years, my career has evolved from pure interface craft into full system
            ownership. At Skydd, I designed the platform evolution from 2 basic insurance lines into
            an 8-product protection platform across web, mobile, and administrative consoles. At LOQD,
            I&apos;m building a 0-to-1 physical asset custody service—solving trust before designing
            screens.
          </p>
          <p>
            I believe great design isn&apos;t decorative polish. It&apos;s the architectural discipline
            that makes high-stakes decisions feel obvious, calm, and trustworthy.
          </p>
        </div>
      </section>

      {/* ────────────────── CORE DESIGN PRINCIPLES ────────────────── */}
      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-8">
          How I Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map((p) => (
            <div
              key={p.number}
              className="p-6 rounded-2xl bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.2] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-neutral-500 mb-2 block">{p.number}</span>
                <h3 className="text-base font-medium text-white mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
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
              className="py-5 border-b border-[#1a1a1a] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-sm"
            >
              <div className="max-w-md">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">{exp.company}</span>
                  <span className="text-neutral-500 text-xs">&middot;</span>
                  <span className="text-neutral-300 text-xs">{exp.role}</span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">{exp.description}</p>
              </div>
              <span className="text-neutral-500 text-xs font-mono shrink-0">{exp.period}</span>
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
          Tools &amp; Disciplines
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

      {/* ────────────────── CTA & FOOTER ────────────────── */}
      <CtaSection />
      <PageFooter />
    </div>
  );
}

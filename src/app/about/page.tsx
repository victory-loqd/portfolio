'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const experiences = [
    { company: 'LOQD', role: 'Founder & Product Lead', period: '2026 – Present' },
    { company: 'Skydd', role: 'Lead Product Designer', period: '2025 – Present' },
    { company: 'Meelow & Coupon', role: 'Lead Product Designer', period: '2025' },
    { company: 'The Cypha (SKRHYB / Globlservice)', role: 'Product Designer', period: '2024 – 2025' },
    { company: 'VROOM', role: 'Lead Product Designer', period: '2023 – 2024' },
    { company: 'Juju Games', role: 'Co-Founder & Head of Product', period: '2023 – 2025' },
  ];

  const recognition = [
    { outlet: 'BusinessDay', title: 'Featured Contemporary African Digital Entertainment', year: '2024' },
    { outlet: 'International Games Magazine', title: 'Afrofuturist Game Design & Telemetry Feature', year: '2024' },
    { outlet: 'Behance & Industry Exhibitions', title: 'Digital Arts & Systems Architecture Showcase', year: '2024' },
  ];

  const techStack = [
    { name: 'Figma', role: 'Design Systems & Prototyping' },
    { name: 'Systems Architecture', role: 'State Machines & Permission Modeling' },
    { name: 'Next.js & React', role: 'Frontend Fluency & Code Architecture' },
    { name: 'Tailwind CSS', role: 'Tokenized Semantic Systems' },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ────────────────── AVATAR & BIO ────────────────── */}
      <section className="mb-16">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden mb-8 border border-white/[0.1] bg-[#121214]">
          <Image
            src="/images/model.png"
            alt="Victory Chukwuma"
            fill
            className="object-cover p-2"
          />
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-2">
          Hey! I&apos;m Victory Chukwuma
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 font-normal mb-8">
          Lead Product Designer + Systems Architect
        </p>

        <div className="flex flex-col gap-4 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl mb-8">
          <p>
            I&apos;m a lead product designer with 6+ years of experience crafting digital platforms,
            physical-digital operations, and high-stakes user journeys. I bring structure to products with
            a lot of moving parts—unravelling messy constraints, mapping asymmetric state machines, and turning
            ambiguous business logic into calm, dependable interfaces.
          </p>
          <p>
            When I&apos;m not designing, you&apos;ll probably find me untangling state machines, building 0-to-1 ventures,
            or obsessing over edge cases that keep products durable. Good design, systems discipline, and deep user trust.
            Curiosity keeps the ideas coming.
          </p>
        </div>

        <div className="text-2xl sm:text-3xl font-serif italic text-zinc-300 tracking-wide select-none">
          Victory Chukwuma
        </div>
      </section>

      {/* ────────────────── MY EXPERIENCE ────────────────── */}
      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-8">
          My Experience
        </h2>

        <div className="flex flex-col gap-3">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="p-5 rounded-xl bg-[#0c0c0e] border border-white/[0.06] hover:border-white/[0.15] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div>
                <h3 className="text-base font-medium text-white">{exp.company}</h3>
                <p className="text-xs text-zinc-500 font-normal">{exp.role}</p>
              </div>
              <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── MY RECOGNITION ────────────────── */}
      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-8">
          My Recognition
        </h2>

        <div className="flex flex-col gap-3">
          {recognition.map((rec) => (
            <div
              key={rec.outlet}
              className="p-5 rounded-xl bg-[#0c0c0e] border border-white/[0.06] hover:border-white/[0.15] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div>
                <h3 className="text-base font-medium text-white">{rec.outlet}</h3>
                <p className="text-xs text-zinc-500 font-normal">{rec.title}</p>
              </div>
              <span className="text-xs font-mono text-zinc-400">{rec.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── MY TECH STACK ────────────────── */}
      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-8">
          My Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-xl bg-[#0c0c0e] border border-white/[0.06] hover:border-white/[0.15] transition-all flex flex-col gap-1"
            >
              <h3 className="text-base font-medium text-white">{tech.name}</h3>
              <p className="text-xs text-zinc-500 font-normal">{tech.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── CALL TO ACTION ────────────────── */}
      <section className="mb-20 pt-12 border-t border-white/[0.08]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          <span className="text-xl sm:text-2xl font-semibold text-white">Let&apos;s design</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-3">
          Something Great Together
        </h2>
        <p className="text-sm text-zinc-400 mb-6">
          Have an idea? Let&apos;s turn it into something worth building.
        </p>
        <a
          href="mailto:designwithvee@gmail.com?subject=Book%20a%20Call"
          className="inline-block bg-white text-black px-5 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors"
        >
          Book A Call
        </a>
      </section>

      {/* ────────────────── RIGHT COLUMN FOOTER ────────────────── */}
      <footer className="pt-12 border-t border-white/[0.08] text-xs font-mono text-zinc-500 flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <span className="text-zinc-600 block uppercase tracking-wider text-[10px] mb-2">Nav</span>
            <ul className="flex flex-col gap-1.5 text-zinc-400">
              <li><Link href="/" className="hover:text-white">/Home</Link></li>
              <li><Link href="/work" className="hover:text-white">/Work <sup className="text-[9px]">06</sup></Link></li>
              <li><Link href="/about" className="text-white font-medium">/About</Link></li>
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

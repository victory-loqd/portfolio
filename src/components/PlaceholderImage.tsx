'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

interface PlaceholderImageProps {
  id?: string;
  title: string;
  filename: string;
  aspectRatio?: '16/9' | '16/10' | '4/3' | '21/9' | 'square';
  dimensions?: string;
  description: string;
  sourceHints?: string;
  accentColor?: 'orange' | 'teal' | 'emerald' | 'purple' | 'amber' | 'blue';
}

export default function PlaceholderImage({
  title,
  filename,
  aspectRatio = '16/9',
  dimensions = '2400 × 1350 px',
  description,
  accentColor = 'orange',
}: PlaceholderImageProps) {
  const ratioClass = {
    '16/9': 'aspect-video',
    '16/10': 'aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '21/9': 'aspect-[21/9]',
    square: 'aspect-square',
  }[aspectRatio];

  const glowColors = {
    orange: 'rgba(255, 85, 0, 0.14)',
    teal: 'rgba(0, 230, 197, 0.14)',
    emerald: 'rgba(16, 185, 129, 0.14)',
    purple: 'rgba(168, 85, 247, 0.14)',
    amber: 'rgba(245, 158, 11, 0.14)',
    blue: 'rgba(59, 130, 246, 0.14)',
  }[accentColor];

  const tagColors = {
    orange: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    teal: 'text-teal-300 bg-teal-400/10 border-teal-400/20',
    emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    purple: 'text-purple-300 bg-purple-400/10 border-purple-400/20',
    amber: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  }[accentColor];

  return (
    <figure className="w-full my-8 group">
      <div
        className={`relative w-full ${ratioClass} rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0c0c0f] flex items-center justify-center transition-all duration-700 ease-out group-hover:border-white/[0.22] shadow-2xl group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]`}
      >
        {/* Ambient Radial Spotlight matched to project identity */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-70 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColors} 0%, transparent 65%)`,
          }}
        />

        {/* Subtle Architectural Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Top Floating Glass Badges */}
        <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between pointer-events-none z-20">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse"></span>
            <span className="font-medium tracking-wide">{title}</span>
          </div>
          <div
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border backdrop-blur-md ${tagColors}`}
          >
            <Sparkles className="w-3 h-3" />
            <span>High-Fidelity Interface</span>
          </div>
        </div>

        {/* Centered Floating 3D Model with Stage Lighting */}
        <div className="relative w-44 sm:w-56 md:w-72 lg:w-80 aspect-square flex items-center justify-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 z-10">
          {/* Realistic Contact Shadow beneath model */}
          <div className="absolute -bottom-4 w-3/4 h-8 bg-black/70 blur-xl rounded-full transform scale-x-125"></div>

          <Image
            src={`/images/${filename}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
          />
        </div>

        {/* Bottom Floating System Status Pill */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-[11px] font-mono text-zinc-400 pointer-events-none z-20">
          <span className="hidden sm:inline bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/[0.06]">
            {dimensions} · Interactive Model
          </span>
          <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/[0.06] text-zinc-300">
            Framer-Grade Motion Engine
          </span>
        </div>

        {/* Glass Inner Border Highlight */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl md:rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"></div>
      </div>

      {/* Editorial Caption Below Image */}
      {description && (
        <figcaption className="mt-3.5 px-1 flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed font-normal">
          <span className="text-zinc-600 font-mono text-[11px] mt-0.5 select-none">•</span>
          <p className="flex-1 font-sans">{description}</p>
        </figcaption>
      )}
    </figure>
  );
}

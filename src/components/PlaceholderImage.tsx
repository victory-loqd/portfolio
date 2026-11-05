'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Check, Copy, Maximize2 } from 'lucide-react';

interface PlaceholderImageProps {
  id: string;
  title: string;
  filename: string;
  aspectRatio?: '16/9' | '16/10' | '4/3' | '21/9' | 'square';
  dimensions?: string;
  description: string;
  sourceHints?: string;
}

export default function PlaceholderImage({
  id,
  title,
  filename,
  aspectRatio = '16/9',
  dimensions = '2400 × 1350 px',
  description,
  sourceHints,
}: PlaceholderImageProps) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Check if real image exists in public folder
  const imagePath = `/images/${filename}`;

  const ratioClass = {
    '16/9': 'aspect-video',
    '16/10': 'aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '21/9': 'aspect-[21/9]',
    square: 'aspect-square',
  }[aspectRatio];

  const copyFilename = () => {
    navigator.clipboard.writeText(filename);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full my-8 group">
      <div
        className={`relative w-full ${ratioClass} rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0c0e] flex flex-col justify-between p-6 transition-all duration-300 group-hover:border-white/[0.18] shadow-2xl`}
      >
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Real Image Layer if it exists */}
        {!imgError && (
          <div className="absolute inset-0 z-10">
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              onError={() => setImgError(true)}
            />
          </div>
        )}

        {/* Placeholder Fallback Display (visible when real image hasn't been dropped into public/images) */}
        {imgError && (
          <>
            {/* Top Bar */}
            <div className="relative z-0 flex items-center justify-between text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
                <span className="text-zinc-300 font-semibold">{id}</span>
                <span className="text-zinc-600">/</span>
                <span>{aspectRatio.toUpperCase()}</span>
                <span className="hidden sm:inline text-zinc-600">({dimensions})</span>
              </div>
              <button
                onClick={copyFilename}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                title="Copy target filename"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-brand-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[11px] font-mono">{filename}</span>
              </button>
            </div>

            {/* Center Visual Cue */}
            <div className="relative z-0 my-auto flex flex-col items-center justify-center text-center max-w-lg mx-auto py-6">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-3 text-zinc-400 group-hover:text-white group-hover:border-white/[0.15] transition-all">
                <Camera className="w-5 h-5" />
              </div>
              <h4 className="text-sm md:text-base font-semibold text-white tracking-tight mb-1.5">
                {title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans px-4">
                {description}
              </p>
            </div>

            {/* Bottom Status & Export Hint */}
            <div className="relative z-0 flex items-center justify-between text-[11px] font-mono text-zinc-600 pt-2 border-t border-white/[0.04]">
              <span>
                {sourceHints ? `Source: ${sourceHints}` : 'Figma Export Ready'}
              </span>
              <span className="text-zinc-500">public/images/{filename}</span>
            </div>
          </>
        )}
      </div>

      {/* Caption Below Frame */}
      <div className="mt-2.5 flex items-start justify-between text-xs text-zinc-500 px-1 font-mono">
        <span className="text-zinc-400 font-sans">{title}</span>
        <span className="text-[11px] text-zinc-600 hidden sm:inline">{dimensions}</span>
      </div>
    </div>
  );
}

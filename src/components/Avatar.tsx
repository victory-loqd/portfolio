'use client';

import React from 'react';

interface AvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Avatar({ className = '', size = 'md' }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-10 h-10 text-xs rounded-xl',
    md: 'w-16 h-16 sm:w-20 sm:h-20 text-lg sm:text-xl rounded-2xl',
    lg: 'w-24 h-24 text-2xl rounded-3xl',
  };

  return (
    <div
      className={`relative select-none flex items-center justify-center font-mono font-medium tracking-tight bg-gradient-to-b from-[#18181c] to-[#0c0c0e] border border-white/[0.12] shadow-2xl transition-all duration-300 hover:border-white/[0.28] hover:shadow-emerald-500/5 group ${sizeClasses[size]} ${className}`}
    >
      {/* Subtle inner grid lines / structural accent */}
      <div className="absolute inset-0 rounded-[inherit] opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:8px_8px]" />

      {/* Monogram */}
      <div className="relative z-10 flex items-center justify-center text-white/90 group-hover:text-white transition-colors">
        <span className="font-semibold tracking-tighter">VC</span>
      </div>

      {/* Live System Indicator */}
      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-black" />
    </div>
  );
}

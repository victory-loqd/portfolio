import React from 'react';

export function Signature({ className = 'text-white' }: { className?: string }) {
  return (
    <div className={`select-none flex items-center ${className}`}>
      <span
        style={{
          fontFamily: "'Caveat', 'Playfair Display', Georgia, 'Times New Roman', cursive, serif",
          letterSpacing: '0.04em',
        }}
        className="italic text-2xl sm:text-3xl text-neutral-200 tracking-wide opacity-90 font-light"
      >
        Victory Chukwuma
      </span>
    </div>
  );
}

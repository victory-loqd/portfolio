'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CtaSection() {
  const words = ['architect', 'design', 'scale', 'engineer'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="my-24 py-12 flex flex-col items-start select-none">
      <div className="flex items-center text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white mb-2">
        <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 mr-3 shrink-0 inline-block animate-pulse" />
        <span>Let&apos;s&nbsp;</span>
        <div className="relative inline-flex overflow-hidden h-[1.25em] min-w-[3ch] text-neutral-400">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -35, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="inline-block"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white mb-6">
        Something Great Together
      </h2>

      <p className="text-sm sm:text-base text-neutral-400 mb-6 max-w-md">
        Have an idea? Let&apos;s turn it into something worth building.
      </p>

      <a
        href="mailto:designwithvee@gmail.com?subject=Project%20Inquiry"
        className="bg-white text-black px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-neutral-200 transition-colors shadow-lg"
      >
        Book a call
      </a>
    </section>
  );
}

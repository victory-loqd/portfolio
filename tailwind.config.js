/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#070709',
        obsidian: {
          DEFAULT: '#070709',
          card: '#0e0e11',
          cardHover: '#141418',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.18)',
        },
        surface: {
          DEFAULT: '#0e0e11',
          subtle: '#141418',
          elevated: '#1a1a20',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          light: 'rgba(255, 255, 255, 0.15)',
        },
        brand: {
          orange: '#FF5500',
          amber: '#F59E0B',
          emerald: '#10B981',
          teal: '#00E6C5',
          purple: '#A855F7',
          blue: '#3B82F6',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Geist Mono',
          'Fira Code',
          'ui-monospace',
          'monospace',
        ],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
      },
      boxShadow: {
        'glow-orange': '0 0 50px -10px rgba(255, 85, 0, 0.25)',
        'glow-teal': '0 0 50px -10px rgba(0, 230, 197, 0.25)',
        'glow-emerald': '0 0 50px -10px rgba(16, 185, 129, 0.25)',
        'glow-purple': '0 0 50px -10px rgba(168, 85, 247, 0.25)',
        'glow-amber': '0 0 50px -10px rgba(245, 158, 11, 0.25)',
        'inner-highlight': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'inner-glow': 'inset 0 0 20px 0 rgba(255, 255, 255, 0.03)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

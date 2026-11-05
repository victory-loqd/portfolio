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
        background: '#09090b',
        surface: {
          DEFAULT: '#121214',
          subtle: '#18181b',
          elevated: '#202024',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          light: 'rgba(255, 255, 255, 0.14)',
        },
        brand: {
          orange: '#EE6C29',
          emerald: '#10B981',
          teal: '#00E6C5',
          amber: '#F59E0B',
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
    },
  },
  plugins: [],
};

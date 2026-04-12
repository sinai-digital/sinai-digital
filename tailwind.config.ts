import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Core palette (v3.1 brand guidelines)
          'dark-navy': '#1b2e3f',
          'slate-blue': '#2d556e',
          'flame': '#e87928',
          'burnt-sienna': '#a5391a',
          // Neutrals
          'off-white': '#f4f5f7',
          'light-gray': '#e8eaed',
          'mid-gray': '#8b95a1',
          // Backgrounds
          'dark-bg': '#131f2a',
          'dark-bg-light': '#1b2e3f',
          // Hover state — slightly desaturated flame
          'flame-hover': '#d36a1f',
        },
      },
      fontFamily: {
        brand: ['var(--font-josefin)', 'sans-serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'aurora': 'aurora 15s ease-in-out infinite',
        'aurora-2': 'aurora2 20s ease-in-out infinite',
        'aurora-3': 'aurora3 25s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%': { transform: 'translate(5%, -5%) scale(1.1)' },
          '66%': { transform: 'translate(-3%, 3%) scale(0.95)' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%': { transform: 'translate(-5%, 5%) scale(1.05)' },
          '66%': { transform: 'translate(3%, -3%) scale(1.1)' },
        },
        aurora3: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1.05)' },
          '50%': { transform: 'translate(4%, 2%) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

export default config

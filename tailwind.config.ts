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
          'mountain-blue': '#1c3f5a',
          'text-blue': '#183550',
          'dark-bg': '#1a2332',
          'dark-bg-light': '#1e2a3b',
          'flame': '#ed6d33',
          'flame-hover': '#ec7d2e',
        },
      },
      fontFamily: {
        brand: ['var(--font-josefin)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
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

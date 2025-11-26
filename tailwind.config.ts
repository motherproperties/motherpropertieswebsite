import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f9f4',
          100: '#daf2e4',
          200: '#b3e5c9',
          300: '#7fd4a8',
          400: '#4aba83',
          500: '#1e5631', // Deep forest green
          600: '#1a4a2a',
          700: '#163d23',
          800: '#12311c',
          900: '#0d2818',
        },
        coffee: {
          50: '#faf7f5',
          100: '#f0e9e3',
          200: '#e1d3c7',
          300: '#c9b5a1',
          400: '#a8907a',
          500: '#6f4e37', // Rich coffee brown
          600: '#5d4130',
          700: '#4b3428',
          800: '#3e2723',
          900: '#2d1e1a',
        },
        cream: {
          50: '#fdfcfb',
          100: '#f8f5f0', // Warm beige/cream
          200: '#f0e9de',
          300: '#e8dccb',
          400: '#dfc9b0',
        },
        gold: {
          400: '#e5c158',
          500: '#d4af37', // Subtle gold accent
          600: '#b8962f',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};

export default config;

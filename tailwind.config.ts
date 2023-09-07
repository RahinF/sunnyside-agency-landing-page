import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tile-yellow': '#FED501',
        'tile-red': '#FE7F6E',
        'tile-teal': '#9DDACB',
        'tile-blue': '#5BCFFE',
      },
      fontFamily: {
        barlow: ['var(--font-barlow)'],
        fraunces: ['var(--font-fraunces)'],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['var(--font-barlow)'],
        fraunces: ['var(--font-fraunces)'],
      },
    },
  },
  plugins: [],
};
export default config;

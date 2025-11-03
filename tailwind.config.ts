// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Dark Mode එක 'class' විදියට enable කරන්න
  darkMode: "class", 
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 2. මෙතන තමයි CSS Variables ටික Tailwind colors වලට link කරන්නේ
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        brand: {
          primary: 'rgb(var(--brand-primary))',
          secondary: 'rgb(var(--brand-secondary))',
        },
        card: {
          DEFAULT: 'rgb(var(--card))',
          foreground: 'rgb(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted))',
          foreground: 'rgb(var(--muted-foreground))',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
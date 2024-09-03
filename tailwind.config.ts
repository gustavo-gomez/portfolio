import type {Config} from "tailwindcss";

const config: Config = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        backgroundImage: {
            'gradient-270': 'linear-gradient(270deg, #6357F6 0%, #E6606C 100%)',
          'gradient-180': 'linear-gradient(180deg, #4D4F95 0%, #2B2D66 100%)',

        },
        colors: {
          "bg-primary": 'var(--bg-light)',
          "bg-dark": 'var(--bg-dark)',
          "txt-primary": 'var(--text-primary)',
          "txt-primary-dark": 'var(--text-primary-dark)',
          "primary": 'var(--primary-color)',
        },
      },
    },
    plugins: [],
  }
;
export default config;

import type {Config} from "tailwindcss";

const config: Config = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    darkMode: "class",
    theme: {
      extend: {
        backgroundColor: {
          'bg-dark-opacity-90': 'rgba(28, 39, 69, 0.4)'
        },
        backgroundImage: {
          'gradient-270': 'linear-gradient(270deg, #212a31 0%, #748d92 100%)',
          'gradient-180': 'linear-gradient(180deg, #4D4F95 0%, #2B2D66 100%)',
        },
        colors: {
          "bg-principal-light": 'var(--bg-principal-light)',
          "bg-secondary-light": 'var(--bg-secondary-light)',
          "bg-dark": 'var(--bg-dark)',
          "bg-dark2": 'var(--bg-dark2)',

          "primary-dark": 'var(--primary-dark)',
          "primary-light": 'var(--primary-light)',
          "txt-secondary": 'var(--secondary)',
          "primary": 'var(--primary-color)',
          "icons-buttons": 'var(--icons-buttons)',

          "gradient-title": 'var(--gradient-title)',

        },
      },
    },
    plugins: [],
  }
;
export default config;

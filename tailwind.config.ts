import type {Config} from "tailwindcss";

const config: Config = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    // screens: {
    //   xs: "480px",
    //   sm: "640px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    darkMode: "class",
    theme: {
      screens:{
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "976px",
        lg2: "1200px",
        xl: "1440px",
      },
      extend: {
        backgroundColor: {
          'bg-dark-opacity-90': 'rgba(28, 39, 69, 0.4)'
        },
        backgroundImage: {
          'gradient-270': 'linear-gradient(270deg, #212a31 0%, #748d92 100%)',
          'gradient-180': 'linear-gradient(180deg, #4D4F95 0%, #2B2D66 100%)',
        },
        colors: {
          "light-bg-principal": 'var(--light-bg-principal)',
          "light-bg-secondary": 'var(--light-bg-secondary)',
          "bg-dark": 'var(--bg-dark)',
          "bg-dark2": 'var(--bg-dark2)',

          "light-primary": 'var(--light-primary)',
          "light-secondary": 'var(--light-secondary)',
          "primary-dark": 'var(--primary-dark)',
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

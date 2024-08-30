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
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'gradient-custom': 'linear-gradient(270deg, #6357F6 0%, #E6606C 100%)',
        },
        colors: {
          "bg-primary": 'var(--bg-primary)',
          "bg-dark": 'var(--bg-dark)',
          "txt-primary": 'var(--text-primary)',
          "txt-primary-dark": 'var(--text-primary-dark)',
          "primary": 'var(--theme-primary)',
        },
      },
      fontFamily: {
        'sectionTitle':
          ['Barlow Condensed'],
      }
    },
    plugins: [],
  }
;
export default config;

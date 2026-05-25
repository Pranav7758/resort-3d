import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        turquoise: {
          400: "#5CE0D2",
          500: "#40E0D0",
          600: "#30c4b5",
        },
        sand: {
          50:  "#FFF9F0",
          100: "#FFF3E0",
          200: "#FFE4C4",
          300: "#D4B896",
          400: "#C4A882",
        },
        ocean: {
          700: "#1A4B5E",
          800: "#0F3444",
          900: "#0A2533",
        },
        coral: {
          400: "#FF8A76",
          500: "#FF6B4A",
        },
        'stark-white': '#FFFBF5',
        'deep-dark': '#0a0a0a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
        'semi-wide': '0.15em',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;


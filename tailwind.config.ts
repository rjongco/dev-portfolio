import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        'gotham-bold-italic': ['Gotham Bold Italic', 'sans-serif'],
        'gotham-bold': ['Gotham Bold', 'sans-serif'],
        'gotham-book-italic': ['Gotham Book Italic', 'sans-serif'],
        'gotham-book': ['Gotham Book', 'sans-serif'],
        'gotham': ['Gotham', 'sans-serif'],
        'gotham-thin': ['Gotham Thin', 'sans-serif'],
        'gotham-medium-italic': ['Gotham Medium Italic', 'sans-serif'],
        'gotham-medium': ['Gotham Medium', 'sans-serif'],
        'pp-neue-montreal-bold': ['PP Neue Montreal Bold', 'sans-serif'],
        'pp-neue-montreal-book': ['PP Neue Montreal Book', 'sans-serif'],
        'pp-neue-montreal-italic': ['PP Neue Montreal Italic', 'sans-serif'],
        'pp-neue-montreal-medium': ['PP Neue Montreal Medium', 'sans-serif'],
        'pp-neue-montreal-semibold-italic': ['PP Neue Montreal SemiBold Italic', 'sans-serif'],
        'pp-neue-montreal-thin': ['PP Neue Montreal Thin', 'sans-serif'],
        incognito: ['Incognito', 'sans-serif'], // Reference the defined Incognito font family
        'ipa-gothic': ['IPA Gothic', 'sans-serif'],
        'signature': ['AgustinaSignature', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace']
      },
      screens: {
        xs: '375px',
      },
      colors: {
        bg: 'var(--color-bg)',
        'bg-secondary': 'var(--color-bg-secondary)',
        accent: 'var(--color-accent)',
        'accent-light': 'var(--color-accent-light)',
        text: 'var(--color-text)',
        'dark-1': 'var(--color-dark-1)',
        'dark-2': 'var(--color-dark-2)',
        'dark-3': 'var(--color-dark-3)',
        'light-1': 'var(--color-text-1)'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionTimingFunction: {
        'in-scroll': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      gridTemplateColumns: {
        'auto-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'auto-250': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      backgroundImage: {
        torch:
          'radial-gradient(525px at 50% 50%, var(--color-accent-torch), transparent 80%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  }
};
export default config;

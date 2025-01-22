/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redonda: ['Redonda', 'sans-serif'], 
        akina: ['Akina', 'sans-serif'], 
      },
      colors: {
        'blue': {
          600: '#0055cf',
          800: '#004b7d'
        },
        'yellow': {
          600: '#faa719',
        },
        'gray': {
          100: '#f6f6f6',
          500: '#bebebe'
        },
        'black': '#222222',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': 'Lexend, sans-serif',
        'inter': 'Inter, sans-serif'
      },
      colors: {
        'peach': '#EFE5DA',
        'wheat': '#FCF8F5',
      }
    },
  },
  plugins: [],
}


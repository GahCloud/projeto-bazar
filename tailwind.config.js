/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6f6f2',
          100: '#eceadf',
          200: '#d8d6c1',
          300: '#c5c0a4',
          400: '#b1aa86',
          500: '#978f6b',
          600: '#776f53',
          700: '#59523d',
          800: '#3b3628',
          900: '#1d1a14',
        },
        gold: {
          400: '#d4af37',
          500: '#c9a227',
        },
      },
    },
  },
  plugins: [],
};

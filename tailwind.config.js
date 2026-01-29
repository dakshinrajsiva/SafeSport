/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#004AAD',
          maroon: '#800020',
          green: '#7CA57A',
          yellow: '#FFBD59',
        },
      },
      fontFamily: {
        league: ['var(--font-league-gothic)'],
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};

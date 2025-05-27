/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        supreme: ['Supreme', 'sans-serif'],
        nikea: ['NIKEA', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

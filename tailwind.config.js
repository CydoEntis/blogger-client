/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka One', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'vivid-blue': '#31CAFF',
        'med-blue': '#2E3A5E',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DBAAE9',
        secondary: '#B3BAC6',
        background: '#282C33',
        primary100: '#dbaae933',
      },
    },
  },
  plugins: [],
};

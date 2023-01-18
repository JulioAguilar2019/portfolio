/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C778DD',
        secondary: '#ABB2BF',
        background: '#282C33',
      },
    },
  },
  plugins: [],
};

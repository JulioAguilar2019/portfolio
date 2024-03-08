/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    keyframes: {
      'blink-in': {
        '0%': {
          opacity: 0,
        },
        '80%': {
          opacity: 0.5,
        },
        '100%': {
          opacity: 1,
        },
      },
      'blink-out': {
        '0%': {
          opacity: 1,
        },
        '80%': {
          opacity: 0.7,
        },
        '100%': {
          opacity: 0,
        },
      },
    },
    animation: {
      blink: 'blink-in 500ms alternate infinite',
    },
    extend: {
      colors: {
        primary: '#DBAAE9',
        secondary: '#B3BAC6',
        background: '#282C33',
        primary100: '#ebcef2',
        background100: '#1b1e22',
        darkText: '#404040',
        accent: '#FFC107',
      },
    },
  },
};

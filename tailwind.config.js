/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': 'rgb(167 208 216)',
      },
      fontFamily: {
        RecklessNeue: [
          'RecklessNeue',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times, serif',
        ],
      },
      fontWeight: {
        'extra-light': 200,
        light: 300,
        normal: 400,
        medium: 500,
        'semi-bold': 600,
        bold: 700,
        'extra-bold': 800,
        black: 900,
      },
    },
  },
  plugins: [],
};

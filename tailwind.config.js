/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#A7D0D8',
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
    },
  },
  plugins: [],
};

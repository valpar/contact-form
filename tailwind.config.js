/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#A7D0D8',
      },
      lineHeight: {
        15: '3.75rem',
      },
    },
  },
  plugins: [],
};

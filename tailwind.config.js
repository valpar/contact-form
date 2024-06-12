/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        reckless: ['Reckless Neue', 'sans-serif'],
        'denim-light': ['Denim-Light', 'sans-serif'],
        'denim-regular': ['Denim-Regular', 'sans-serif'],
        'denim-semibold': ['Denim-SemiBold', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#A7D0D8',
        'link-blue': '#219dfb',
        'text-brand-black': '#140a24',
        'focus-blue': 'rgba(167, 208, 216, 0.2)',
      },
      lineHeight: {
        15: '3.75rem',
        12: '2.75rem',
        7.5: '1.875rem',
      },
      screens: {
        tall: { raw: '(min-height: 600px)' },
        'tall-md': { raw: '(min-height: 900px)' },
      },
      spacing: {
        '6p': '1.5rem', // 6% spacing
        '3p': '0.75rem', // 3% spacing
        '20px': '1.25rem',
        '70px': '4.375rem',
        '102px': '6.375rem',
        '108px': '6.75rem',
        '172px': '10.75rem',
        '52px': '3.25rem',
        2.5: '0.625rem',
        4.5: '1.125rem',
      },
      borderRadius: {
        '40px': '2.5rem',
      },
      gridTemplateColumns: {
        '35_65': '35% 65%',
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
    },
  },
  plugins: [],
};

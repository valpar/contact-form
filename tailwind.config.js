/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#A7D0D8',
        'text-brand-black': '#140a24',
      },
      lineHeight: {
        15: '3.75rem',
      },
      screens: {
        tall: { raw: '(min-height: 600px)' },
        'tall-md': { raw: '(min-height: 900px)' },
      },
      spacing: {
        '6p': '6%', // 6% spacing
        '3p': '3%', // 3% spacing
        '20px': '20px',
        '70px': '70px',
        '102px': '102px',
        '108px': '108px',
        '172px': '172px',
        '52px': '52px',
      },
      borderRadius: {
        '40px': '40px',
      },
      gridTemplateColumns: {
        '35_65': '35% 65%',
      },
    },
  },
  plugins: [],
};

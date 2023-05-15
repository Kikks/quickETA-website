/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      satoshi: ['"Inter", sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          main: '#FCB340',
          light: '#F8BD6F',
          dark: '#F4A528',
        },
        secondary: {
          main: '#38C1BA',
          dark: '#1B9690',
        },
      },
    },
  },
  plugins: [],
};

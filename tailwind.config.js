/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#1a1d21',
        card: '#22262a',
        accent: '#00ffd5',
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0077b6',
          dark: '#00b4d8',
        },
        body: {
          light: '#caf0f8',
          dark: '#03045e',
        },
        neon: '#90e0ef',
      },
    },
  },
  plugins: [],
};

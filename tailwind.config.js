/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFA100', // Orange vif
        gray: '#747678',    // Gris neutre
      },
      fontFamily: {
        sans: ['Montserrat', 'Open Sans', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

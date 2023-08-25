/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      backgroundTheme: {
        DEFAULT: '#fbf9ed',
      },
      blueTheme: {
        DEFAULT: '#ADC4CE ',
        dark: '#278EA5',
      },
    },
  },
  plugins: [],
};

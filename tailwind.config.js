/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vue-green': '#41B883',
        'vue-black': '#34495E',
      },
    },
  },
  daisyui: {
    themes: ['forest'],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};

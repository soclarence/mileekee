/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'mPurple': '#5232ED',
        'mBlue': '#0B0E38',
        'mGreen': '#157430',
        'mBlue2': '#15ADE2',
        'mOrange': '#ED904A',
        'litePurple': '#EAF3FE',
        'liteBlue': '#E9F9FF',
        'liteGreen': '#EBFFF0',
        'liteOrange': '#FEF1E8',
        'black': '#01000D'
      }
    },
  },
  plugins: [],
}
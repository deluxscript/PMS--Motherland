/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackColor: '#040404',
        yellowColor: 'rgba(241, 164, 29, 1)'
      }
    },
  },
  plugins: [],
}

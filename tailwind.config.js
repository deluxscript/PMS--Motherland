/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        450: '450px',
        190: '190px'
      },
      fontSize: {
        small: '9px'
      },
      colors: {
        blackColor: '#040404',
        sideBarColor: '#080606',
        yellowColor: 'rgba(241, 164, 29, 1)',
        greyColor: '#282828',
        winBg: '#00e600',
        scoreColor: '#323232',
        lossBg: '#e60000',
        drawBg: '#a0a0a0',
        defaultBg: '#3c3c3c',
        defaultColor: '#fefefe'
      },
      maxHeight: {
        popup: 'calc(100vh - 80px)',
      },
      zIndex: {
        2: '2',
      },
      minWidth: {
        100: '100px',
        150: '150px',
        190: '190px'
      },
      maxWidth: {
        190: '190px'
      },
      borderRadius: {
        circle: '50%'
      }
    },
  },
  plugins: [],
}

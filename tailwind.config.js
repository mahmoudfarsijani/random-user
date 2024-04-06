/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ss' : ['Tac One',' sans-serif']
      },
      colors:{
        'main':'#2C393C',
        'sky':'#2ABAE3',
        'light-gray':'#698991'
      }
    },
  },
  plugins: [],
}


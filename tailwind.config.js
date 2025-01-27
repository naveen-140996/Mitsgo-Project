/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
       colors:{
        primary:'#24ee89',
        secondary:"#9fe871",
       },
       fontFamily: {
          mulish: ['"Mulish"', "sans-serif"],
        },
      },
    },
    plugins: [],
  }
  
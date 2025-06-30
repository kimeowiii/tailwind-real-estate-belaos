/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
     colors: {
      primary:" #192f57",
      secondary: "#4668a5",
     },
     fontFamily:{
      poppins: "Poppins",
     
     }
    },
  },
  plugins: [],
};

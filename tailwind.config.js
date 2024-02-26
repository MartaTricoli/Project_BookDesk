/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        new_light_blue: "#8ecae6",
        new_dark_blue: "#219ebc",
        new_navy_blue: "#171F43",
        new_yellow: "#FFCF3D",
        new_orange: "#fb8500",
        new_red: "#d62828",
        new_beige: "#eae2b7",
      },
      fontFamily: {
        Montserrat: ['Montserrat'],
        MontserratAlt: ['Montserrat Alternates']
      },
      boxShadow: {
        "shadowCardShop": "2px 0px 5px 0px #219ebc",
        "shadowCardShop1": "4px 4px 10px 2px #219ebc",
      },
    },
  },
  plugins: [],
}


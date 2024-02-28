/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        Montserrat: ["Montserrat"],
        MontserratAlt: ["Montserrat Alternates"],
      },
      /* ilyasse */
      backgroundImage: {
        landingbg_light: "url('../assets/LandingPage/Bg-Libri-penna.jpg')",
        lanidingbg_dark: "url('../assets/LandingPage/landingbg-dark.png')",
      },
      animation: {
        "text-slide":
          "text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "text-slide": {
          "0%, 16%": {
            transform: "translateY(0%)",
          },
          "20%, 36%": {
            transform: "translateY(-16.66%)",
          },
          "40%, 56%": {
            transform: "translateY(-33.33%)",
          },
          "60%, 76%": {
            transform: "translateY(-50%)",
          },
          "80%, 96%": {
            transform: "translateY(-66.66%)",
          },
          "100%": {
            transform: "translateY(-83.33%)",
          },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      boxShadow: {
        shadowCardShop: "2px 0px 5px 0px #219ebc",
        shadowCardShop1: "4px 4px 10px 2px #219ebc",
      },
      spacing: {
        1480: "92.5",
      },
      boxShadow: {
        "shadowCardShop": "2px 0px 5px 0px #219ebc",
        "shadowCardShop1": "4px 4px 10px 2px #219ebc",
      },
      spacing: {
        '1480': '92.5'
      }
    },
  },
  plugins: [],
};

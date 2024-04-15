/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#ffffff",

        main: "#91BFE9", // blue
        lightIndigo: "#e0e7ff",
        accent: "#4346d9",
        secondary: "#ffffff", // white
        lightBlue: "#c6ebff", // blue for text hover
        greenDate: "#2ef514",
        orangeDate: "#f57914",
        redDate: "#f51448",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
};

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
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
};

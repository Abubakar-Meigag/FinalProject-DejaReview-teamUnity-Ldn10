/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#ffffff",
        accent: "#FDE68A",
        main: "#2d42c6", // blue
        secondary: "#ffffff", // white
        greenIcons: "#a8c544",
        babyBlue: "#70cdff", // blue for borders
        lightBlue: "#c6ebff", // blue for text hover
        modules: "#0fb76c", // green for icons
        warning: "#eaaa05", // orange
        oilGreen: "#a0c61a", // oil green
        green: "#3bbd4e", // green for UI/UX
        addIcons: "#524ab1",
        individual: "#096b23", // for the modules / individual
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
};

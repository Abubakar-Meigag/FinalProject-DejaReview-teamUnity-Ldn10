/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: "#53988f", //main panels
        mypurple: "#805DC0", 
        myturquoise: "#77D5C8", //turquoise
        mycream: "#f5ffd4", // light cream/green
        dark: "#43C0A2",
        secondary: "#ffffff",
        accent: "#43C0A2",
        light: "#f5ffd4", //background
        "base-100": "#fff5d7", //green
        "base-200": "#77D5C8", //icons
        info: "#43C0A2",
        success: "#43C0A2",
        warning: "#43C0A2",
        error: "#43C0A2",
        "dark-text": "#060606",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
};

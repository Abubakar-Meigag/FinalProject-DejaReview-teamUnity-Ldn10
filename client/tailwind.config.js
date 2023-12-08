/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: "#CC6781", //main panels
        mypurple: "#805DC0", // kristina purple
        myturquoise: "#77D5C8", // kristina turquoise
        mycream: "#f5ffd4", // kristina light cream/green
        dark: "#43C0A2",
        secondary: "#ffffff", //h
        accent: "#43C0A2",
        light: "#f5ffd4", //background
        "base-100": "#ACCF6E", //green
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

// mytheme: {

//   "primary": "#d1747c",

//   "secondary": "#23c9ff",

//   "accent": "#F35B04",

//   "neutral": "#29223A",

//   "base-100": "#362C5E",

//   "info": "#960099",

//   "success": "#9ef01a",

//   "warning": "#fcea10",

//   "error": "#d80032",
//             },
// 77D5C8<-----
// ACCF6E
// C76573
// 805DC0

//5a8bed

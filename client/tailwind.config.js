/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#272f44",
        primary: "#003049",
        dark: "#000000",
        secondary: "#fcbf49",
        accent: "#eae2b7",
        light: "#e7e6ea",
        "base-100": "#f3f5f7",
        "base-200": "#e5e5e5",
        info: "#8d99ae",
        success: "#f77f00",
        warning: "#fca311",
        error: "#d62828",
      },
    },
  },
  plugins: [require("daisyui"),
    (function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
  daisyui: {
    themes: ["cupcake"],
  },
};


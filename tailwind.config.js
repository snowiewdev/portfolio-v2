const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  // purge: ["./src/**/*.{js,vue,jsx,ts,tsx}", "./public/**/*.html"],
  prefix: "",
  darkMode: "class",
  content: [
    "./src/**/*.{js,vue,jsx,ts,tsx}",
    "./public/**/*.html",
    "./assets/**/*.{css}",
    "./components/*.{js,vue}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./pages/*.vue",
    "./*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "540px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "light-primary": "#E9E9E9", // main background
        "light-secondary": "#D2D1D1",
        "dark-primary": "#202527", // main background
        "dark-secondary": "#393939",
        accent: "#37474F",
        black: "#202527",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};

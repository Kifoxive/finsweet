/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        black: "#232536",
        yellow: "#ffd050",
        purple: "#592ea9",
        "dark-gray": " #4c4c4c",
        "medium-gray": " #6d6e76",
        "light-gray": " #f4f4f4",
        lavender: "#f4f0f8",
        "light-yellow": " #fbf6ea",
      },
      fontFamily: {
        sen: ["Sen", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

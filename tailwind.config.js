/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "light-grey": "#858584",
        "medium-grey": "#3B3B3B",
        "dark-grey": "#2B2B2B",
        lilac: "#A259FF",
      },
      fontFamily: {
        "space-mono": "Space Mono",
        "work-sans": "Work Sans",
      },
      screens: {
        tablet: "690px",
        desktop: "1050px",
      },
    },
  },
  plugins: [],
};

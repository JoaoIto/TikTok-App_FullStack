/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    width: {
      "2/5": "40%",
      "4/5": "80%",
      "full": "100%"
    },

    screens: {
      cellphone: "580px",
      // => @media (min-width: 580px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    minHeight: {
      tiktok: "90%",
    },
    colors: {
      tiktok: "#010101",
      ice: "#fafafa",
    },
    extend: {},
  },
  plugins: [],
};

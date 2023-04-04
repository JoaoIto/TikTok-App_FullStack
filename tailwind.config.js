/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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

    width:{
      "2/5": "40%",
      "3/5": "60%"
    },

    fontFamily:{
      Inter: ['Inter', 'sans-serif'],
    },

    colors: {
      tiktok: "#010101",
      ice: "#fafafa",
      pink: {
        DEFAULT: "#FE2C55",
        light: "#FED7E2",
      },
      blue: {
        DEFAULT: "#69C9D0",
        light: "#D5EFF2",
      },
    },

    boxShadow: {
      pink: "0 4px 6px -1px rgba(254, 44, 85, 0.1), 0 2px 4px -1px rgba(254, 44, 85, 0.06)",
      blue: "0 4px 6px -1px rgba(105, 201, 208, 0.1), 0 2px 4px -1px rgba(105, 201, 208, 0.06)",
    },
    extend: {},
  },
  plugins: [],
};

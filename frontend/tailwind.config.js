/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plusJakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#EB9475",
      },
    },
  },
  plugins: [],
};

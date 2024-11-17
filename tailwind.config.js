/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#58ff16",
        "stroke-green": "#4a9d36",
        "purple-heading": "#9d50ff",
      },
      fontFamily: {
        hackalite: "Rubik Iso",
        countdown: "Press Start 2P",
        subhackalite: "Orbitron",
      },
      screens: {
        xs: "400px", // Custom breakpoint for 400px
      },
    },
  },
  plugins: [],
};

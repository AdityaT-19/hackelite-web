/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
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
    animation: {
      shimmer: "shimmer 2s linear infinite",
    },
    keyframes: {
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
    },
  },

  plugins: [],
};

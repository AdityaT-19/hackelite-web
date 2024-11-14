/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
    './public/index.html'             
  ],
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
    },
  },
  plugins: [],
};

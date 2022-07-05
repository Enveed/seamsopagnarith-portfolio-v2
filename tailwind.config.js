/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs": "300px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    extend: {
      gridTemplateColumns: {
        "project-grid": "repeat(auto-fill, minmax(250px, 1fr))",
        "project-grid-md": "repeat(auto-fill, minmax(300px, 1fr))",
        "skill-grid": "repeat(2, minmax(140px, 200px))"
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "repeat-15": "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      screens: {
        xs: "319px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

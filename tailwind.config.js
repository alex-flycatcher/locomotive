/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#769DF0",
          DEFAULT: "#2563eb",
          dark: "#2C08AA",
        },
        secondary: "#0ee7df",
      },
    },
  },
  plugins: [],
};

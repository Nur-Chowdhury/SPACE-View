/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#4f4f4f",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          md: "2.5rem",
        },
      },
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        floating: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};

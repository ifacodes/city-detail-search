module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        0.1: "1px",
      },
      keyframes: {
        turn: {
          "0%": { transform: "rotate(-180deg)" },
          "50%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        turn: "turn 100ms ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "hack-propo": ['"HackNerdFontPropo"', "sans-serif"],
        "hack-mono": ['"HackNerdFontMono"', "monospace"],
        "hack": ['"HackNerdFont"', "sans-serif"],
        "neuemontreal": ["NeueMontreal", "sans-serif"],
      },
    },
  },
  plugins: [
    daisyui,
  ],
};

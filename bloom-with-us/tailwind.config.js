import tailwindcssAnimate from "tailwindcss-animate";
import tailwindAriaComponents from "tailwindcss-react-aria-components";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "dark-purple": "#9F86C0",
      "light-purple": "#BE95C4",
      "dark-purple-text": "#231942",
    },
    extend: {
      gridTemplateRows: {
        2: "10% 1fr",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindAriaComponents],
};

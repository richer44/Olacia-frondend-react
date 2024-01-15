/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        rubik: ["var(--font-rubik)"],
        manrope: ["var(--font-manrope)"],
      },
      keyframes: {
        "accordion-down": {
          "0%": { height: "0", opacity: "1" },
          "100%": { height: "300px", opacity: "1" },
        },
        "accordion-up": {
          "0%": { height: "300px", opacity: "1" },
          "100%": { height: "0", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.5s ease-out",
        "accordion-up": "accordion-up 0.5s ease-out",
      },
      boxShadow: {
        sidebar: "0px 0px 40px 0px rgba(31, 51, 116, 0.20)",
        activeMenu: "0px 10px 20px 0px rgba(31, 51, 116, 0.36)",
        cardLightShadow: "0px 0px 8.444px rgba(0, 0, 0, 0.05)",
      },

      colors: {
        red: "#EB0F35",
        "light-red": "#fb36401a",
        green: "#50cd89",
        "indigo-blue": "#1F3374",
        "slate-500": "#596798",
        "slate-50": "#F6F9FC",
        "cyan-blue": "#04C3FF",
        "dull-blue": "#0048d5",
        "zinc-black": "#303030",
        "zinc-400": "#8C959F",
        "neutral-black-800": "#272727",
        "neutral-black-700": "#414141",
        "neutral-500": "#6F6F6F",
        "neutral-200": "#DFDFDF",
        "stone-300": "#BDBDBD",
        gray: "#F4F4F4",
        grayFA: "#FAFAFA",
        "gray-200": "#E8E8E8",
        "gray-2E": "#2E2E2E",
        "gray-8A": "#8A8A8A",
        "gray-500": "#737C87",
      },
    },
  },
  plugins: [],
};

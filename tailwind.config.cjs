/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],

  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography"), require("daisyui")],

  darkMode: "class",

  theme: {
    extend: {
      content: {
        olivebranch: 'url("olive-branch.svg")',
        olive: 'url("olive.png)',
      },
      
      //fonts:
      //Bodoni Libre für Überschriften und nur maiuscul
      //Allura für unterüberschriften
      //didact gothic für text
      
    },
  },
  daisyui: {
    themes: [
      "pastel",
      "cupcake",
      {
        mytheme: {
          primary: "#B4CBB4",
          "primary-focus": "#9CB49C",
          "primary-content": "#1E1E1E",

          secondary: "#EDEDED",
          "secondary-focus": "#DADADA",
          "secondary-content": "#1E1E1E",

          accent: "#BAAF8D",
          "accent-focus": "#A79E81",
          "accent-content": "#1E1E1E",

          neutral: "#F5F5F5",
          "neutral-focus": "#E5E5E5",
          "neutral-content": "#1E1E1E",

          "base-100": "#ffffff",
          "base-200": "#F0F0F0",
          "base-300": "#E0E0E0",
          "base-content": "#1E1E1E",

          info: "#2094F3",
          success: "#009485",
          warning: "#FF9900",
          error: "#FF5724",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",

          "--heading-font-family": "Bodoni Moda, serif",
          "--text-font-family": "Didact Gothic, sans-serif",
        },
      },
    ],
  },
};

module.exports = config;

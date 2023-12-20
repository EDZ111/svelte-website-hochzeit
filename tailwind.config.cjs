/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],

  plugins: [require("flowbite/plugin"),require("@tailwindcss/typography"), require("daisyui")],

  darkMode: "class",

  theme: {
    extend: {
      content: {
        olivebranch: 'url("olive-branch.svg")',
        olive: 'url("olive.png)',
      },
      fontFamily: {
        titel: ['"Bodoni Moda"', "serif"],
        datum: ["Sacramento", '"sans serif"'],
        "text-normal": ['"Didact Gothic"', '"sans serif"'],
      },
      //fonts:
      //Bodoni Libre für Überschriften und nur maiuscul
      //Allura für unterüberschriften
      //didact gothic für text
      colors: {
        // flowbite-svelte
        //primary: { 50: '#FFF5F2',100: '#FFF1EE',200: '#FFE4DE',300: '#FFD5CC',400: '#FFBCAD',500: '#FE795D',600: '#EF562F',700: '#EB4F27',800: '#CC4522',900: '#A5371B'},
        //sage-dark
        primary: {
          50: "#86A7890D", // 10% opacity
          100: "#86A7891A", // 20% opacity
          200: "#86A78933", // 30% opacity
          300: "#86A7894D", // 40% opacity
          400: "#86A78966", // 50% opacity
          500: "#86A78980", // 60% opacity
          600: "#86A78999", // 70% opacity
          700: "#86A789B3", // 80% opacity
          800: "#86A789CC", // 90% opacity
          900: "#86A789E6", // 100% opacity
        },
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"],
  },
};

module.exports = config;

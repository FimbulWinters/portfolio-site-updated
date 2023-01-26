module.exports = {
  purge: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sanity/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: "#262a2c",
      menuColour: "#202736",
      hoverColour: "#5a434c",
      textColour: "#dc906a",
      secondaryText: "#e5e2ae",
      circles: "#abe2fe",
    },
    extend: {},
  },
  plugins: [],
};

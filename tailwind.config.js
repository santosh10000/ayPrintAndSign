/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      height: {
        111: "50vh",
      },
      colors: {
        navBackground: "#000000",
        headerText: "#FFFFEF",
        iconColor: "#0B8297",
        buttonBg: "#D6D7D8",
        bannerText: "#6ECBCB",
        bgProducts: "#F2F2F2",
        subText: "#8CC75D",
        bgFooter: "#F9F9FD",
        bgNavbar: "#FFFFFF",
        contactLink: "#04BEDF",
        bgProject: "rgb(249, 249, 249)",
        social: "#9058ff",
        hoverColor: "rgb(220,221,253, 0.8)",
      },
      fontFamily: {
        roboto: ['"Alumni Sans Pinstripe"', " sans-serif"],
        raleway: ['"Alumni Sans Pinstripe"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

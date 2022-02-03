module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
    },
    extend: {
      backgroundImage: {
        register: "url('./assets/bg.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#D6205E",
        },
        light: {
          DEFAULT: "#686868",
        },
      },
    },
  },
  plugins: [],
};

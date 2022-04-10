module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06f5f5",
        secondary: "#1597e8",
        dark: {
          DEFAULT: "#0a111c",
          light: "#101a27",
          dark: "#0a111c",
        },
      },
    },
  },
  plugins: [],
};

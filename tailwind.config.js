module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        weather: "url('../src/assets/img/may.png')",
      },
      backgroundPosition: {
        weather: "50% 10%",
      },
      backgroundSize: {
        weather: "140%",
      },
    },
  },
  plugins: [],
};

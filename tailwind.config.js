module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        weather: "url('../public/assets/img/may.png')",
      },
      backgroundPosition: {
        weather: "50% 45%",
      },
      backgroundSize: {
        weather: "140%",
      },
    },
  },
  plugins: [],
};

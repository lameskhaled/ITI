module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black": "#060606",
      },
    },
  },
  plugins: [require("daisyui")],
};

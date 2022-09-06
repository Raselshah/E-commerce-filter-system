/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1E90A5",
          secondary: "#F38740",
          accent: "#717171",
          neutral: "#8AD6E4",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

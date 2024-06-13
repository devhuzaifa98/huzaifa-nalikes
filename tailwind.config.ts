import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("tailwindcss-filters")],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ["Oxanium", "sans-serif"],
      },
      colors: {
        primary: {
          "100": "rgb(2, 5, 10)", // Primary-100
          "200": "rgb(10, 20, 30)", // Primary-200
          "300": "rgb(18, 35, 50)", // Primary-300
          "400": "rgb(26, 50, 70)", // Primary-400
          "500": "rgb(34, 65, 90)", // Primary-500
          "600": "rgb(42, 80, 110)", // Primary-600
          "700": "rgb(50, 95, 130)", // Primary-700
          "800": "rgb(58, 110, 150)", // Primary-800
          "900": "rgb(66, 125, 170)", // Primary-900
        },
        secondary: {
          "100": "rgb(21, 22, 30)", // Secondary-100
          "200": "rgb(32, 33, 45)", // Secondary-200
          "300": "rgb(43, 44, 60)", // Secondary-300
          "400": "rgb(54, 55, 75)", // Secondary-400
          "500": "rgb(65, 66, 90)", // Secondary-500
          "600": "rgb(76, 77, 105)", // Secondary-600
          "700": "rgb(87, 88, 120)", // Secondary-700
          "800": "rgb(98, 99, 135)", // Secondary-800
          "900": "rgb(109, 110, 150)", // Secondary-900
        },
        textSecondary: "rgb(109,110,118)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgb(2,5,10) 0%, rgba(29,28,41,1) 100%)",
      },
    },
  },
};
export default config;

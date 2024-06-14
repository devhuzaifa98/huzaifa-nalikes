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
          '50': '#f1f6fe',
          '100': '#e3ecfb',
          '200': '#c0d8f7',
          '300': '#88b7f1',
          '400': '#4893e8',
          '500': '#2175d6',
          '600': '#135ab6',
          '700': '#104794',
          '800': '#123f7a',
          '900': '#143666',
          '950': '#02050a',
        },
        secondary: {
          "50": "#f6f7f9",
          "100": "#ecedf2",
          "200": "#d4d7e3",
          "300": "#afb4ca",
          "400": "#838bad",
          "500": "#636d94",
          "600": "#4f567a",
          "700": "#414663",
          "800": "#383c54",
          "900": "#323548",
          "950": "#15161e",
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgb(2,5,10) 0%, rgba(21,22,30,1) 80%, rgb(2,5,10) 0%)",
      },
    },
  },
};
export default config;

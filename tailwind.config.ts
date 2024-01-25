import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        vermilion: {
          "50": "#fff6ec",
          "100": "#ffead3",
          "200": "#ffd1a5",
          "300": "#ffb06d",
          "400": "#ff8232",
          "500": "#ff5f0a",
          "600": "#ff4500",
          "700": "#cc2f02",
          "800": "#a1250b",
          "900": "#82220c",
          "950": "#460d04",
        },
        gold: {
          "50": "#ffffe7",
          "100": "#feffc1",
          "200": "#fffd86",
          "300": "#fff441",
          "400": "#ffe60d",
          "500": "#ffd700",
          "600": "#d19e00",
          "700": "#a67102",
          "800": "#89580a",
          "900": "#74480f",
          "950": "#442604",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          background: "linear-gradient(to right, #ff4500, #ffd700)",
          backgroundClip: "text",
          color: "transparent",
        },
      });
    }),
  ],
};
export default config;

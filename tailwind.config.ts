import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1424",
        paper: "#f2efe6",
        "paper-2": "#e7e2d5",
        amber: "#f2a900",
        red: "#c03b30",
        green: "#178a50",
        steel: "#5c6e89",
        line: "#b7b3a8",
        white: "#fffdf7",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "Impact", "sans-serif"],
        body: ["var(--font-plex-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

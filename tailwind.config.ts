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
        paper: "#F6EFE2",
        "paper-deep": "#EFE4CF",
        card: "#FBF6EB",
        ink: "#33291D",
        "ink-soft": "#6E5F4B",
        "ink-faint": "#94836B",
        terracotta: "#B5502A",
        "terracotta-deep": "#93401F",
        ochre: "#C98C1F",
        "ochre-soft": "#D9A93F",
        olive: "#5C6B45",
        hairline: "#DECFB4",
        // Legacy alias (used by a couple of utility classes on legal pages);
        // maps to the warm ochre accent.
        amber: "#C98C1F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-source-sans)", "system-ui", "sans-serif"],
        hand: ["var(--font-kalam)", "cursive"],
      },
      boxShadow: {
        warm: "0 14px 36px rgba(51,41,29,.13)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

// The BOQ+ app palette — the only colours the site may use (see
// docs/WEBSITE_PLAN.md §1). Mobbin references are for layout only.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Replaces Tailwind's default palette entirely: only app colours exist.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      navy: {
        950: "#070D18",
        900: "#131F33",
        800: "#24324B",
        700: "#2E3D57",
      },
      amber: {
        DEFAULT: "#F2A900",
        light: "#FFC233",
        dark: "#8A5A00",
      },
      slate: {
        600: "#4E5D78",
        500: "#5B6B87",
        300: "#AEBBD0",
        200: "#C3CFE0",
      },
      mist: "#DCE3EC",
      cloud: "#E6ECF4",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-plex-sans)", "Arial", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;

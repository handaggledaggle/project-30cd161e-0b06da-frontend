import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pt: {
          primary: "var(--pt-primary)",
          secondary: "var(--pt-secondary)",
          cta: "var(--pt-cta)",
          bg: "var(--pt-bg)",
          surface: "var(--pt-surface)",
          text: "var(--pt-text)",
          text2: "var(--pt-text-2)",
          border: "var(--pt-border)",
          success: "var(--pt-success)",
          error: "var(--pt-error)",
        },
      },
      fontFamily: {
        atkinson: ["var(--font-atkinson)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "pt-sm": "0 1px 2px rgba(2, 132, 199, 0.08)",
        "pt-md": "0 8px 18px rgba(2, 132, 199, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

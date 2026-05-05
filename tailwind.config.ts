import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#1a1a1a",
        amber: "#f59e0b",
        signal: "#22c55e",
        primary: "#e2e8f0",
        muted: "#6b7280",
      },
      fontFamily: {
        heading: ["Rajdhani", "Orbitron", "Barlow Condensed", "sans-serif"],
        body: ["JetBrains Mono", "IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        hud: "0 0 0 1px rgba(245, 158, 11, 0.28), 0 0 22px rgba(245, 158, 11, 0.08)",
        signal: "0 0 0 1px rgba(34, 197, 94, 0.22), 0 0 18px rgba(34, 197, 94, 0.08)",
      },
      backgroundImage: {
        "scanlines":
          "linear-gradient(rgba(226, 232, 240, 0.04) 1px, transparent 1px)",
        "circuit-grid":
          "linear-gradient(rgba(245, 158, 11, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        scanlines: "100% 4px",
        circuit: "48px 48px",
      },
      borderRadius: {
        none: "0",
      },
    },
  },
  plugins: [],
};

export default config;

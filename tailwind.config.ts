import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        serif: ["Instrument Serif", "Times New Roman", "serif"]
      },
      colors: {
        ink: {
          DEFAULT: "#08080a",
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          800: "#1c1c1f",
          900: "#101013",
          950: "#08080a"
        },
        amber: {
          glow: "#fb923c"
        }
      },
      keyframes: {
        "ping-soft": {
          "75%, 100%": { transform: "scale(1.8)", opacity: "0" }
        }
      }
    }
  },
  plugins: []
};

export default config;

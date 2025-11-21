import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        one: ["var(--font-livvic)"],
        two: ["var(--font-jost)"],
      },
    },
  },
  plugins: [],
};

export default config;

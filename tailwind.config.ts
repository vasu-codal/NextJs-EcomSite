import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayExtd: "var(--gray)",
        brownExtd: "var(--brown)",
        transperentExtd: "var(--transperent)",
      },
    },
  },
  plugins: [],
};
export default config;

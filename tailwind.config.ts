import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        glass: "0 10px 40px rgba(15, 23, 42, 0.15)",
      },
      colors: {
        glass: {
          border: "rgba(255,255,255,0.2)",
          panel: "rgba(255,255,255,0.3)",
        },
      },
    },
  },
};

export default config;

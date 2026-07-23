import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
     
      fontFamily: {
        cairo: ["var(--font-cairo)"],
        almarai: ["var(--font-almarai)"],
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },

        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },

      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "floatSlow 7s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};

export default config;
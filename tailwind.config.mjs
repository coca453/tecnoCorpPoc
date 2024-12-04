import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#eb6209",
          light: "#f28a39",
          medium: "#d96d18",
          dark: "#b34d08",
          contrast: "#ffffff",
          darkMode: "#c74f07",
        },
        secondary: {
          DEFAULT: "#023671",
          light: "#0450a3",
          dark: "#01254e",
          contrast: "#ffffff",
          darkMode: "#022a5b",
        },
        accent: {
          orange: "#ff8c42",
          blue: "#0070c0",
          darkMode: {
            orange: "#e57a3b",
            blue: "#005b9a",
          },
        },
        neutral: {
          light: "#f3f4f6",
          dark: "#374151",
          darker: "#242424",
          darkMode: "#1f1f1f",
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(135deg, rgba(117,189,201,0.75) 24%, rgba(16,42,67,0.95) 80%)",
      },
      keyframes: {
        slideIn: {
          from: {
            opacity: 0,
            transform: "translateY(100px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        pulse: {
          to: {
            opacity: 0,
            transform:
              "translate(-50%, -50%) scale(2.5)",
          },
        },
      },
      animation: {
        slideIn: "slideIn 2s ease-out",
        fadeIn: "fadeIn 1s ease-in-out",
        pulso: "pulse 1.3s ease-in-out infinite",
      },
    },
  },
  darkMode: "media", // O "class" si quieres controlarlo manualmente
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
          from: { opacity: 0, transform: "translateY(100px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 2s ease-out",
      },
    },
  },
  darkMode: "media", // O "class" si quieres controlarlo manualmente
  plugins: [],
};

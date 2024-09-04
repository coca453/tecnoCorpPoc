/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#eb6209",
          light: "#f28a39", // Un tono más claro de naranja
          dark: "#b34d08", // Un tono más oscuro de naranja
          contrast: "#ffffff", // Blanco para un alto contraste
          darkMode: "#c74f07", // Tono de naranja para modo oscuro
        },
        secondary: {
          DEFAULT: "#023671",
          light: "#0450a3", // Un tono más claro de azul
          dark: "#01254e", // Un tono más oscuro de azul
          contrast: "#ffffff", // Blanco para un alto contraste
          darkMode: "#022a5b", // Tono de azul para modo oscuro
        },
        accent: {
          orange: "#ff8c42", // Un color naranja más vibrante
          blue: "#0070c0", // Un azul más vibrante
          darkMode: {
            orange: "#e57a3b", // Tono de naranja vibrante para modo oscuro
            blue: "#005b9a", // Tono de azul vibrante para modo oscuro
          },
        },
        neutral: {
          light: "#f3f4f6", // Un gris muy claro
          dark: "#374151", // Un gris oscuro
          darker: "#242424", // El gris oscuro adicional
          darkMode: "#1f1f1f", // Gris más oscuro para modo oscuro
        },
      },
    },
    darkMode: "media", // Modo oscuro basado en las preferencias del sistema
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blue: {
          50: "#f0f4fa",
          100: "#d9e2f5",
          200: "#b3c5eb",
          300: "#8da8e0",
          400: "#668bd6",
          500: "#406ecc",
          600: "#3358a3",
          700: "#26427a",
          800: "#1a2c52",
          900: "#0d1629",
        },
        gold: {
          50: "#faf6e9",
          100: "#f5edd3",
          200: "#ebdba7",
          300: "#e2c97b",
          400: "#d8b74f",
          500: "#c9a55c",
          600: "#a88a3f",
          700: "#86702f",
          800: "#645520",
          900: "#423a10",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        nikea: ["var(--font-nikea)"],
        titles: ["var(--font-titles)"],
        montserrat: ["var(--font-montserrat)"],
        supreme: ["Supreme", ...fontFamily.sans],
        exo2: ["var(--font-exo2)"],
        rajdhani: ["var(--font-rajdhani)"],
        orbitron: ["var(--font-orbitron)"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s infinite",
        aurora: "aurora 15s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px 2px rgba(64, 110, 204, 0.3)" },
          "50%": { boxShadow: "0 0 15px 5px rgba(64, 110, 204, 0.6)" },
        },
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

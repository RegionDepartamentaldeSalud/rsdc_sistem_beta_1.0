/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070a",
        primary: {
          DEFAULT: "#00f2ff",
          dark: "#00a3ad",
        },
        secondary: {
          DEFAULT: "#7000ff",
          dark: "#4a00aa",
        },
        glass: "rgba(255, 255, 255, 0.03)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "futuristic-gradient": "linear-gradient(135deg, #05070a 0%, #0a0f1a 100%)",
      },
      boxShadow: {
        "neon-cyan": "0 0 15px rgba(0, 242, 255, 0.3)",
        "neon-purple": "0 0 15px rgba(112, 0, 255, 0.3)",
      },
    },
  },
  plugins: [],
}

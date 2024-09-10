import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"], // Enable dark mode by class
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',   // Fixed the extra space
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)", // Use the custom font
    },
    extend: {
      colors: {
        primary: "#1c1c22", // Primary background color
        accent: {
          DEFAULT: "#00ff99", // Accent color default
          hover: "#00e187", // Hover state for accent
        },
      },
      textColor: {
        skin: {
          base: "var(--text-color)", // Custom text color from CSS variables
          secondary: "var(--secondary-text-color)", // Secondary text color
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--fill-color)", // Custom background color
          'hover-fill': "var(--hover-fill-color)", // Hover background color
        },
      },
      borderColor: {
        skin: {
          base: "var(--border-color)", // Primary border color
          secondary: "var(--secondary-border-color)", // Secondary border color
        },
      },
      borderRadius: {
        lg: "var(--radius)", // Large border radius
        md: "calc(var(--radius) - 2px)", // Medium border radius
        sm: "calc(var(--radius) - 4px)", // Small border radius
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out", // Accordion down animation
        "accordion-up": "accordion-up 0.2s ease-out", // Accordion up animation
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Animate plugin for animations
} satisfies Config;

export default config;

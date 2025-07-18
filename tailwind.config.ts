import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark luxury color palette
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Primary colors - Purple accent (from ref design)
        primary: {
          50: "#faf7ff",
          100: "#f3f0ff",
          200: "#e9e3ff",
          300: "#d3c6ff",
          400: "#a855f7",
          500: "#9333ea",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        
        // Secondary colors - Emerald accent (from ref design)
        secondary: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        
        // Neutral colors for dark theme
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        
        // Glass effect colors
        glass: {
          light: "rgba(255, 255, 255, 0.05)",
          medium: "rgba(255, 255, 255, 0.1)",
          heavy: "rgba(255, 255, 255, 0.15)",
          border: "rgba(255, 255, 255, 0.2)",
        },
        
        // Status colors
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },
      
      // Typography - Sophisticated Manhattan/Editorial aesthetic
      fontFamily: {
        // Primary serif for headlines - magazine style
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        // Modern sans-serif for body text
        sans: ["var(--font-inter)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        // Monospace fallback
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      
      // Extended font weights for dramatic hierarchy
      fontWeight: {
        hairline: "100",
        thin: "200", 
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      
      // Spacing
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      
      // Border radius
      borderRadius: {
        "lg": "var(--radius)",
        "md": "calc(var(--radius) - 2px)",
        "sm": "calc(var(--radius) - 4px)",
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      
      // Backdrop filters for glass effect
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "40px",
      },
      
      // Box shadows
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-sm": "0 4px 16px 0 rgba(31, 38, 135, 0.2)",
        "glass-lg": "0 16px 48px 0 rgba(31, 38, 135, 0.5)",
        "glow": "0 0 20px rgba(132, 61, 255, 0.5)",
        "glow-lg": "0 0 40px rgba(132, 61, 255, 0.6)",
      },
      
      // Animations
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient": "gradient 15s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-10px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        shimmer: {
          "0%": {
            "background-position": "-1000px 0",
          },
          "100%": {
            "background-position": "1000px 0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
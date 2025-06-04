import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-poppins)"],
        heading: ["var(--font-poppins)"],
        mono: ["JetBrains Mono", "SF Mono", "Consolas", "monospace"],
      },
      colors: {
        // Emotional Color System
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
          DEFAULT: "#0ea5e9",
          foreground: "#ffffff",
        },

        // Emotional Secondary Colors
        emotion: {
          orange: {
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#f97316",
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
          },
          red: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d",
          },
          copper: {
            50: "#fdf8f6",
            100: "#f2e8e5",
            200: "#eaddd7",
            300: "#e0cfc5",
            400: "#d2bab0",
            500: "#bfa094",
            600: "#a18072",
            700: "#977669",
            800: "#846358",
            900: "#43302b",
          },
        },

        // Base colors updated for emotional theme
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      },

      // Emotional Gradients
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #082f49 0%, #0c4a6e 25%, #075985 50%, #0369a1 75%, #0ea5e9 100%)",
        "gradient-warm": "linear-gradient(135deg, #f97316 0%, #ef4444 50%, #bfa094 100%)",
        "gradient-glass": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        "gradient-emotion": "linear-gradient(135deg, #0ea5e9 0%, #f97316 50%, #ef4444 100%)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Emotional Animations
      animation: {
        "emotional-pulse": "emotionalPulse 3s ease-in-out infinite",
        "shimmer-emotion": "shimmerEmotion 2s infinite",
        float: "float 6s ease-in-out infinite",
      },

      // Box Shadows for Emotional Effects
      boxShadow: {
        "emotion-glow": "0 0 20px rgba(14, 165, 233, 0.3)",
        "emotion-warm": "0 0 20px rgba(249, 115, 22, 0.3)",
        "emotion-red": "0 0 20px rgba(239, 68, 68, 0.3)",
        "emotion-copper": "0 0 20px rgba(191, 160, 148, 0.3)",
        glass: "0 8px 32px rgba(8, 47, 73, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        "glass-strong": "0 20px 40px rgba(8, 47, 73, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
}

export default config

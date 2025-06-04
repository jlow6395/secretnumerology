// Emotional Color System - Inspired by premium bottle photography
export const emotionalTokens = {
  // Primary Colors - Deep Blue Gradient (from image background)
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9", // Main brand blue
    600: "#0284c7",
    700: "#0369a1", // Deep blue from image
    800: "#075985", // Darker blue
    900: "#0c4a6e", // Deepest blue
    950: "#082f49", // Almost black blue
  },

  // Secondary Colors - Warm Emotional Tones
  secondary: {
    // Orange (from bottle)
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316", // Main orange
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
    },

    // Red (from bottle)
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444", // Main red
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },

    // Copper/Bronze (from bottle caps)
    copper: {
      50: "#fdf8f6",
      100: "#f2e8e5",
      200: "#eaddd7",
      300: "#e0cfc5",
      400: "#d2bab0",
      500: "#bfa094", // Main copper
      600: "#a18072",
      700: "#977669",
      800: "#846358",
      900: "#43302b",
    },
  },

  // Gradient Definitions
  gradients: {
    // Primary blue gradient (like image background)
    primaryBlue: "linear-gradient(135deg, #0c4a6e 0%, #075985 25%, #0369a1 50%, #0284c7 75%, #0ea5e9 100%)",

    // Emotional warm gradient
    warmEmotion: "linear-gradient(135deg, #f97316 0%, #ef4444 50%, #bfa094 100%)",

    // Premium glass effect
    glassEffect: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",

    // Deep ocean (main background)
    deepOcean: "linear-gradient(180deg, #082f49 0%, #0c4a6e 50%, #075985 100%)",
  },

  // Emotional States
  emotions: {
    trust: "#0ea5e9", // Blue
    passion: "#ef4444", // Red
    energy: "#f97316", // Orange
    luxury: "#bfa094", // Copper
    mystery: "#082f49", // Deep blue
    warmth: "#fb923c", // Warm orange
  },

  // Glass & Reflection Effects
  effects: {
    glass: "rgba(255, 255, 255, 0.1)",
    glassStrong: "rgba(255, 255, 255, 0.15)",
    reflection: "rgba(255, 255, 255, 0.05)",
    shadow: "rgba(8, 47, 73, 0.3)",
    glow: "rgba(14, 165, 233, 0.4)",
  },
} as const

export type EmotionalTokens = typeof emotionalTokens

// Premium Numerology Color System - เพื่อรายได้ 300 ล้านบาท
export const premiumNumerologyTokens = {
  // Primary Brand Colors - Deep Purple & Gold (Luxury + Mystical)
  primary: {
    50: "#faf7ff", // Very light purple
    100: "#f3ecff", // Light purple
    200: "#e9d8ff", // Soft purple
    300: "#d8b9ff", // Medium light purple
    400: "#c084fc", // Medium purple
    500: "#a855f7", // Main brand purple
    600: "#9333ea", // Deep purple
    700: "#7c2d92", // Darker purple
    800: "#6b1f7a", // Very dark purple
    900: "#581c5c", // Deepest purple
    950: "#3b0a3f", // Almost black purple
  },

  // Secondary - Mystical Gold (Premium + Spiritual)
  secondary: {
    50: "#fffbeb", // Very light gold
    100: "#fef3c7", // Light gold
    200: "#fde68a", // Soft gold
    300: "#fcd34d", // Medium gold
    400: "#fbbf24", // Bright gold
    500: "#f59e0b", // Main gold
    600: "#d97706", // Deep gold
    700: "#b45309", // Darker gold
    800: "#92400e", // Bronze gold
    900: "#78350f", // Deep bronze
    950: "#451a03", // Dark bronze
  },

  // Accent Colors - Carefully Selected
  accent: {
    // Deep Teal - Trust & Wisdom
    teal: {
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
    },

    // Rose Gold - Feminine Energy
    rose: {
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be185d",
    },

    // Silver - Premium Touch
    silver: {
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
    },
  },

  // Semantic Colors - Psychology-Based
  semantic: {
    success: "#10b981", // Green - Growth, Money
    warning: "#f59e0b", // Gold - Attention, Value
    error: "#ef4444", // Red - Caution
    info: "#3b82f6", // Blue - Information

    // Special Numerology Colors
    lifePath: "#a855f7", // Purple - Life purpose
    expression: "#f59e0b", // Gold - Self expression
    soulUrge: "#14b8a6", // Teal - Inner desires
    personality: "#f43f5e", // Rose - Outer self
  },

  // Background System - Dark Luxury
  background: {
    primary: "#0a0a0a", // Pure black
    secondary: "#1a1a1a", // Dark gray
    tertiary: "#2a2a2a", // Medium dark
    card: "#1e1e1e", // Card background
    overlay: "rgba(10, 10, 10, 0.9)", // Modal overlay
  },

  // Text Colors - High Contrast
  text: {
    primary: "#ffffff", // Pure white
    secondary: "#e5e5e5", // Light gray
    tertiary: "#a3a3a3", // Medium gray
    muted: "#737373", // Dark gray
    accent: "#f59e0b", // Gold accent
  },

  // Gradient Definitions - Premium Feel
  gradients: {
    // Main brand gradient
    primary: "linear-gradient(135deg, #a855f7 0%, #7c2d92 50%, #581c5c 100%)",

    // Gold luxury gradient
    gold: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",

    // Mystical gradient
    mystical: "linear-gradient(135deg, #a855f7 0%, #14b8a6 50%, #f59e0b 100%)",

    // Premium glass effect
    glass: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",

    // Dark luxury background
    darkLuxury: "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
  },

  // Premium Effects
  effects: {
    // Glass morphism
    glass: "rgba(255, 255, 255, 0.08)",
    glassStrong: "rgba(255, 255, 255, 0.12)",

    // Glow effects
    purpleGlow: "0 0 30px rgba(168, 85, 247, 0.3)",
    goldGlow: "0 0 30px rgba(245, 158, 11, 0.3)",

    // Premium shadows
    premiumShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
    cardShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
  },
} as const

// Psychology-Based Color Meanings
export const colorPsychology = {
  purple: {
    meaning: "Spirituality, Luxury, Wisdom, Mystery",
    effect: "Creates premium feeling, spiritual connection",
    conversion: "High-end positioning, trust building",
  },
  gold: {
    meaning: "Wealth, Success, Achievement, Premium",
    effect: "Triggers desire for luxury, status symbol",
    conversion: "Premium pricing justification",
  },
  teal: {
    meaning: "Balance, Clarity, Healing, Trust",
    effect: "Calming, trustworthy, professional",
    conversion: "Reduces purchase anxiety",
  },
  black: {
    meaning: "Luxury, Sophistication, Power, Mystery",
    effect: "Premium positioning, exclusivity",
    conversion: "Justifies high prices",
  },
} as const

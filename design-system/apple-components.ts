// Component Variants - Apple Style
export const appleComponentVariants = {
  // Button System - เหมือน Apple
  button: {
    variant: {
      // Primary - สีน้ำเงิน Apple
      primary: "bg-accent-blue hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300",

      // Secondary - พื้นหลังเทาใส
      secondary:
        "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all duration-300",

      // Ghost - โปร่งใส
      ghost: "bg-transparent hover:bg-white/10 text-white transition-all duration-300",

      // Destructive - สีแดง Apple
      destructive: "bg-accent-red hover:bg-red-600 text-white shadow-lg transition-all duration-300",

      // Success - สีเขียว Apple
      success: "bg-accent-green hover:bg-green-600 text-white shadow-lg transition-all duration-300",
    },

    size: {
      sm: "px-3 py-1.5 text-sm rounded-lg",
      md: "px-4 py-2 text-base rounded-xl",
      lg: "px-6 py-3 text-lg rounded-xl",
      xl: "px-8 py-4 text-xl rounded-2xl",
    },

    state: {
      default: "font-medium",
      hover: "hover:scale-105 hover:shadow-glow-blue",
      active: "active:scale-95",
      disabled: "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none",
    },
  },

  // Card System - Apple Style
  card: {
    variant: {
      // Glass - แก้วใส เหมือน macOS
      glass: "bg-white/5 backdrop-blur-xl border border-white/10",

      // Dark - ดำเข้ม
      dark: "bg-primary-800 border border-primary-700",

      // Gradient - สีไล่
      gradient: "bg-gradient-to-br from-primary-800 to-primary-900 border border-primary-700",

      // Floating - ลอย
      floating: "bg-primary-800 shadow-2xl border border-primary-700",
    },

    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    },

    radius: {
      sm: "rounded-lg",
      md: "rounded-xl",
      lg: "rounded-2xl",
      xl: "rounded-3xl",
    },
  },

  // Text System - Apple Typography
  text: {
    variant: {
      // Display - หัวข้อใหญ่
      display: "font-bold tracking-tight",

      // Heading - หัวข้อ
      heading: "font-semibold tracking-tight",

      // Body - เนื้อหา
      body: "font-normal leading-relaxed",

      // Caption - คำอธิบาย
      caption: "font-medium text-sm opacity-70",

      // Code - โค้ด
      code: "font-mono text-sm bg-white/10 px-2 py-1 rounded",
    },

    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
    },

    color: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      tertiary: "text-text-tertiary",
      muted: "text-text-muted",
      accent: "text-accent-blue",
      success: "text-accent-green",
      warning: "text-accent-orange",
      error: "text-accent-red",
    },
  },

  // Input System - Apple Style
  input: {
    variant: {
      default: "bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-md",
      filled: "bg-primary-800 border border-primary-700 text-white",
      ghost: "bg-transparent border-b border-white/30 text-white rounded-none",
    },

    size: {
      sm: "px-3 py-2 text-sm rounded-lg",
      md: "px-4 py-3 text-base rounded-xl",
      lg: "px-6 py-4 text-lg rounded-xl",
    },

    state: {
      default:
        "focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-300",
      error: "border-accent-red focus:ring-accent-red",
      success: "border-accent-green focus:ring-accent-green",
    },
  },
} as const

export type AppleComponentVariants = typeof appleComponentVariants

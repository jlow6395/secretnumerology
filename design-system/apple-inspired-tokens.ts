// Design System แรงบันดาลใจจาก Apple
export const appleInspiredTokens = {
  // Color System - สีดำเป็นหลัก
  colors: {
    // Primary Colors - สีดำและขาว
    primary: {
      50: "#f8fafc", // ขาวอ่อนมาก
      100: "#f1f5f9", // ขาวอ่อน
      200: "#e2e8f0", // เทาอ่อนมาก
      300: "#cbd5e1", // เทาอ่อน
      400: "#94a3b8", // เทากลาง
      500: "#64748b", // เทา
      600: "#475569", // เทาเข้ม
      700: "#334155", // เทาเข้มมาก
      800: "#1e293b", // ดำอ่อน
      900: "#0f172a", // ดำ
      950: "#020617", // ดำเข้มมาก
    },

    // Accent Colors - สีเน้น (เหมือน Apple)
    accent: {
      blue: "#007AFF", // Apple Blue
      green: "#34C759", // Apple Green
      orange: "#FF9500", // Apple Orange
      red: "#FF3B30", // Apple Red
      purple: "#AF52DE", // Apple Purple
      pink: "#FF2D92", // Apple Pink
      yellow: "#FFCC00", // Apple Yellow
      indigo: "#5856D6", // Apple Indigo
    },

    // Gradient Colors - สีไล่ (เหมือนคีย์บอร์ด MacBook)
    gradient: {
      cosmic: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      sunset: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      ocean: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      forest: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      fire: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      space: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      aurora: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    },

    // Semantic Colors
    success: "#34C759",
    warning: "#FF9500",
    error: "#FF3B30",
    info: "#007AFF",

    // Background Colors
    background: {
      primary: "#000000", // ดำสนิท
      secondary: "#0f172a", // ดำอ่อน
      tertiary: "#1e293b", // เทาเข้ม
      card: "#1e293b", // การ์ด
      overlay: "rgba(0, 0, 0, 0.8)", // overlay
    },

    // Text Colors
    text: {
      primary: "#ffffff", // ขาวสนิท
      secondary: "#e2e8f0", // ขาวอ่อน
      tertiary: "#94a3b8", // เทา
      muted: "#64748b", // เทาอ่อน
      inverse: "#000000", // ดำ (สำหรับพื้นหลังขาว)
    },
  },

  // Typography - แรงบันดาลใจจาก Apple
  typography: {
    fontFamily: {
      primary: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Inter", "sans-serif"],
      secondary: ["SF Pro Text", "Inter", "system-ui", "sans-serif"],
      mono: ["SF Mono", "Monaco", "Consolas", "monospace"],
    },

    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem", // 72px - Apple style big headings
    },

    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },

    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },

  // Spacing System - Apple style
  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    32: "8rem", // 128px
    40: "10rem", // 160px
    48: "12rem", // 192px
    56: "14rem", // 224px
    64: "16rem", // 256px
  },

  // Border Radius - Apple style rounded corners
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    base: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    "4xl": "2rem", // 32px - Apple style big radius
    full: "9999px",
  },

  // Shadow System - Apple style shadows
  shadow: {
    none: "none",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",

    // Apple style glows
    glow: {
      blue: "0 0 20px rgba(0, 122, 255, 0.3)",
      green: "0 0 20px rgba(52, 199, 89, 0.3)",
      orange: "0 0 20px rgba(255, 149, 0, 0.3)",
      purple: "0 0 20px rgba(175, 82, 222, 0.3)",
    },
  },

  // Animation System - Apple style smooth animations
  animation: {
    duration: {
      instant: "0ms",
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      slower: "750ms",
      slowest: "1000ms",
    },

    easing: {
      linear: "linear",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Apple's signature easing
      apple: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      appleSpring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
  },

  // Blur Effects - Apple style backdrop blur
  blur: {
    none: "none",
    sm: "blur(4px)",
    base: "blur(8px)",
    md: "blur(12px)",
    lg: "blur(16px)",
    xl: "blur(24px)",
    "2xl": "blur(40px)",
    "3xl": "blur(64px)",
  },
} as const

export type AppleInspiredTokens = typeof appleInspiredTokens

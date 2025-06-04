// Component Variants System
export const componentVariants = {
  // Button Variants
  button: {
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl",
    },

    variant: {
      primary: "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600",
      secondary: "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700",
      outline: "border-2 border-amber-500 text-amber-600 hover:bg-amber-50",
      ghost: "text-amber-600 hover:bg-amber-50",
      mystical: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600",
    },

    state: {
      default: "transition-all duration-300 ease-in-out",
      hover: "hover:scale-105 hover:shadow-lg",
      active: "active:scale-95",
      disabled: "opacity-50 cursor-not-allowed",
    },
  },

  // Card Variants
  card: {
    elevation: {
      flat: "border border-neutral-200",
      low: "shadow-sm border border-neutral-100",
      medium: "shadow-md border border-neutral-100",
      high: "shadow-lg border border-neutral-100",
      floating: "shadow-xl border border-neutral-100",
    },

    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    },

    background: {
      white: "bg-white",
      neutral: "bg-neutral-50",
      gradient: "bg-gradient-to-br from-white to-neutral-50",
      mystical: "bg-gradient-to-br from-purple-50 to-indigo-50",
    },
  },

  // Text Variants
  text: {
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
    },

    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },

    color: {
      primary: "text-neutral-900",
      secondary: "text-neutral-600",
      muted: "text-neutral-500",
      accent: "text-amber-600",
      mystical: "bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent",
    },
  },
} as const

import React from "react"
import { cn } from "@/lib/utils"

interface NumerologyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "success"
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const NumerologyButton = React.forwardRef<HTMLButtonElement, NumerologyButtonProps>(
  (
    { className, variant = "primary", size = "md", children, isLoading, leftIcon, rightIcon, disabled, ...props },
    ref,
  ) => {
    // Button variants
    const variants = {
      primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
      secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md",
      ghost: "bg-transparent hover:bg-white/10 text-white",
      destructive: "bg-red-600 hover:bg-red-700 text-white shadow-lg",
      success: "bg-green-600 hover:bg-green-700 text-white shadow-lg",
    }

    // Button sizes
    const sizes = {
      sm: "px-3 py-1.5 text-sm rounded-lg",
      md: "px-4 py-2 text-base rounded-xl",
      lg: "px-6 py-3 text-lg rounded-xl",
      xl: "px-8 py-4 text-xl rounded-2xl",
    }

    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-2",
          "font-medium transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black",

          // Size variants
          sizes[size],

          // Color variants
          variants[variant],

          // State variants
          "hover:scale-105 active:scale-95",
          (disabled || isLoading) && "opacity-50 cursor-not-allowed hover:scale-100",

          className,
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Left Icon */}
        {leftIcon && !isLoading && <span className="flex-shrink-0">{leftIcon}</span>}

        {/* Loading Spinner */}
        {isLoading && (
          <svg className="animate-spin h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {/* Button Text */}
        <span className="flex-1">{children}</span>

        {/* Right Icon */}
        {rightIcon && !isLoading && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    )
  },
)

NumerologyButton.displayName = "NumerologyButton"

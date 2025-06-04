import React from "react"
import { cn } from "@/lib/utils"
import { appleComponentVariants } from "./apple-components"

interface AppleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof appleComponentVariants.button.variant
  size?: keyof typeof appleComponentVariants.button.size
  children: React.ReactNode
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const AppleButton = React.forwardRef<HTMLButtonElement, AppleButtonProps>(
  (
    { className, variant = "primary", size = "md", children, isLoading, leftIcon, rightIcon, disabled, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(
          // Base styles - Apple inspired
          "inline-flex items-center justify-center gap-2",
          "font-medium transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-black",

          // Size variants
          appleComponentVariants.button.size[size],

          // Color variants
          appleComponentVariants.button.variant[variant],

          // State variants
          appleComponentVariants.button.state.default,
          appleComponentVariants.button.state.hover,
          appleComponentVariants.button.state.active,

          // Disabled state
          (disabled || isLoading) && appleComponentVariants.button.state.disabled,

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

AppleButton.displayName = "AppleButton"

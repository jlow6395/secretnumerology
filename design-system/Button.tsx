import React from "react"
import { cn } from "@/lib/utils"
import { componentVariants } from "./components"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof componentVariants.button.variant
  size?: keyof typeof componentVariants.button.size
  children: React.ReactNode
  isLoading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, isLoading, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-lg font-medium",
          "focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2",

          // Size variants
          componentVariants.button.size[size],

          // Color variants
          componentVariants.button.variant[variant],

          // State variants
          componentVariants.button.state.default,
          componentVariants.button.state.hover,
          componentVariants.button.state.active,

          // Disabled state
          (disabled || isLoading) && componentVariants.button.state.disabled,

          className,
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

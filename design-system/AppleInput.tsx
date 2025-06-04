import React from "react"
import { cn } from "@/lib/utils"
import { appleComponentVariants } from "./apple-components"

interface AppleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: keyof typeof appleComponentVariants.input.variant
  size?: keyof typeof appleComponentVariants.input.size
  label?: string
  error?: string
  success?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isLoading?: boolean
}

export const AppleInput = React.forwardRef<HTMLInputElement, AppleInputProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      label,
      error,
      success,
      leftIcon,
      rightIcon,
      isLoading,
      type = "text",
      ...props
    },
    ref,
  ) => {
    const hasError = !!error
    const hasSuccess = !!success

    return (
      <div className="w-full space-y-2">
        {/* Label */}
        {label && <label className="block text-sm font-medium text-text-secondary">{label}</label>}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary">{leftIcon}</div>
          )}

          {/* Input Field */}
          <input
            className={cn(
              // Base styles
              "w-full transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black",

              // Size variants
              appleComponentVariants.input.size[size],

              // Variant styles
              appleComponentVariants.input.variant[variant],

              // State styles
              appleComponentVariants.input.state.default,

              // Icon padding
              leftIcon && "pl-10",
              (rightIcon || isLoading) && "pr-10",

              // Error state
              hasError && appleComponentVariants.input.state.error,

              // Success state
              hasSuccess && appleComponentVariants.input.state.success,

              className,
            )}
            ref={ref}
            type={type}
            {...props}
          />

          {/* Right Icon or Loading */}
          {(rightIcon || isLoading) && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {isLoading ? (
                <svg className="animate-spin h-4 w-4 text-text-tertiary" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <span className="text-text-tertiary">{rightIcon}</span>
              )}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-sm text-accent-red flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {error}
          </p>
        )}

        {/* Success Message */}
        {success && (
          <p className="text-sm text-accent-green flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {success}
          </p>
        )}
      </div>
    )
  },
)

AppleInput.displayName = "AppleInput"

// Textarea Component
interface AppleTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: keyof typeof appleComponentVariants.input.variant
  label?: string
  error?: string
  success?: string
}

export const AppleTextarea = React.forwardRef<HTMLTextAreaElement, AppleTextareaProps>(
  ({ className, variant = "default", label, error, success, ...props }, ref) => {
    const hasError = !!error
    const hasSuccess = !!success

    return (
      <div className="w-full space-y-2">
        {/* Label */}
        {label && <label className="block text-sm font-medium text-text-secondary">{label}</label>}

        {/* Textarea */}
        <textarea
          className={cn(
            // Base styles
            "w-full min-h-[100px] resize-y transition-all duration-300",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black",

            // Variant styles
            appleComponentVariants.input.variant[variant],
            "px-4 py-3 text-base rounded-xl",

            // State styles
            appleComponentVariants.input.state.default,

            // Error state
            hasError && appleComponentVariants.input.state.error,

            // Success state
            hasSuccess && appleComponentVariants.input.state.success,

            className,
          )}
          ref={ref}
          {...props}
        />

        {/* Error Message */}
        {error && (
          <p className="text-sm text-accent-red flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {error}
          </p>
        )}

        {/* Success Message */}
        {success && (
          <p className="text-sm text-accent-green flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {success}
          </p>
        )}
      </div>
    )
  },
)

AppleTextarea.displayName = "AppleTextarea"

// Select Component
interface AppleSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: keyof typeof appleComponentVariants.input.variant
  size?: keyof typeof appleComponentVariants.input.size
  label?: string
  error?: string
  success?: string
  options: { value: string; label: string }[]
}

export const AppleSelect = React.forwardRef<HTMLSelectElement, AppleSelectProps>(
  ({ className, variant = "default", size = "md", label, error, success, options, ...props }, ref) => {
    const hasError = !!error
    const hasSuccess = !!success

    return (
      <div className="w-full space-y-2">
        {/* Label */}
        {label && <label className="block text-sm font-medium text-text-secondary">{label}</label>}

        {/* Select Container */}
        <div className="relative">
          <select
            className={cn(
              // Base styles
              "w-full appearance-none transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black",
              "pr-10", // Space for arrow

              // Size variants
              appleComponentVariants.input.size[size],

              // Variant styles
              appleComponentVariants.input.variant[variant],

              // State styles
              appleComponentVariants.input.state.default,

              // Error state
              hasError && appleComponentVariants.input.state.error,

              // Success state
              hasSuccess && appleComponentVariants.input.state.success,

              className,
            )}
            ref={ref}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-primary-800 text-white">
                {option.label}
              </option>
            ))}
          </select>

          {/* Arrow Icon */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="h-4 w-4 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-sm text-accent-red flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {error}
          </p>
        )}

        {/* Success Message */}
        {success && (
          <p className="text-sm text-accent-green flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {success}
          </p>
        )}
      </div>
    )
  },
)

AppleSelect.displayName = "AppleSelect"

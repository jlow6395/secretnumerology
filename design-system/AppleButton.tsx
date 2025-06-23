import React from "react"
import { cn } from "@/lib/utils"
import { appleDarkNumerologyTokens } from "./apple-dark-numerology-tokens"

interface AppleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'premium'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
  glow?: boolean
}

export const AppleButton = React.forwardRef<HTMLButtonElement, AppleButtonProps>(
  (
    { 
      className, 
      variant = "secondary", 
      size = "md", 
      children, 
      leftIcon,
      rightIcon,
      loading = false,
      glow = false,
      disabled,
      ...props 
    },
    ref,
  ) => {
    // Enhanced size variants
    const sizeVariants = {
      sm: "px-5 py-2.5 text-sm rounded-2xl min-h-[40px]",
      md: "px-7 py-3.5 text-base rounded-2xl min-h-[48px]", 
      lg: "px-9 py-4 text-lg rounded-3xl min-h-[56px]",
    }

    // Enhanced base styles with better animations
    const baseStyles = [
      "relative inline-flex items-center justify-center gap-3",
      "font-semibold font-[SF_Pro_Text]",
      "transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
      "transform-gpu", // Hardware acceleration
      "focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-black",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
      "active:scale-[0.96]", // Apple-style press feedback
      "overflow-hidden",
      "group",
    ]

    // Enhanced variant styles with better gradients and shadows
    const variantStyles = {
      primary: [
        // Golden gradient - Premium actions
        "bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706]",
        "text-black font-bold",
        "shadow-[0_8px_24px_rgba(251,191,36,0.4),0_2px_8px_rgba(251,191,36,0.6)_inset]",
        "border border-yellow-400/50",
        "hover:shadow-[0_12px_32px_rgba(251,191,36,0.5),0_4px_12px_rgba(251,191,36,0.7)_inset]",
        "hover:scale-[1.05]",
        "hover:bg-gradient-to-r hover:from-[#f59e0b] hover:via-[#d97706] hover:to-[#b45309]",
        "focus:ring-[#fbbf24]/50",
        glow && "hover:shadow-[0_12px_32px_rgba(251,191,36,0.5),0_4px_12px_rgba(251,191,36,0.7)_inset,0_0_40px_rgba(251,191,36,0.4)]",
      ],
      secondary: [
        // Deep Blue gradient - Main actions
        "bg-gradient-to-r from-[#0ea5e9] via-[#0284c7] to-[#0369a1]",
        "text-white font-semibold",
        "shadow-[0_8px_24px_rgba(14,165,233,0.4),0_2px_8px_rgba(14,165,233,0.6)_inset]",
        "border border-blue-400/50",
        "hover:shadow-[0_12px_32px_rgba(14,165,233,0.5),0_4px_12px_rgba(14,165,233,0.7)_inset]",
        "hover:scale-[1.05]",
        "hover:bg-gradient-to-r hover:from-[#0284c7] hover:via-[#0369a1] hover:to-[#075985]",
        "focus:ring-[#0ea5e9]/50",
        glow && "hover:shadow-[0_12px_32px_rgba(14,165,233,0.5),0_4px_12px_rgba(14,165,233,0.7)_inset,0_0_40px_rgba(14,165,233,0.4)]",
      ],
      ghost: [
        // Enhanced glass effect - Subtle actions
        "bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02]",
        "text-white border border-white/20",
        "backdrop-blur-2xl",
        "shadow-[0_8px_24px_rgba(0,0,0,0.3),0_2px_8px_rgba(255,255,255,0.1)_inset]",
        "hover:bg-gradient-to-br hover:from-white/[0.12] hover:via-white/[0.08] hover:to-white/[0.04]",
        "hover:border-white/30",
        "hover:shadow-[0_12px_32px_rgba(0,0,0,0.4),0_4px_12px_rgba(255,255,255,0.15)_inset]",
        "hover:scale-[1.05]",
        "focus:ring-white/30",
      ],
      premium: [
        // Premium golden glass - Special actions
        "bg-gradient-to-br from-[rgba(251,191,36,0.12)] via-[rgba(245,158,11,0.08)] to-[rgba(217,119,6,0.04)]",
        "text-[#fbbf24] border border-[rgba(251,191,36,0.3)]",
        "backdrop-blur-2xl",
        "shadow-[0_8px_24px_rgba(251,191,36,0.3),0_2px_8px_rgba(251,191,36,0.2)_inset]",
        "hover:bg-gradient-to-br hover:from-[rgba(251,191,36,0.16)] hover:via-[rgba(245,158,11,0.12)] hover:to-[rgba(217,119,6,0.08)]",
        "hover:border-[rgba(251,191,36,0.4)]",
        "hover:shadow-[0_12px_32px_rgba(251,191,36,0.4),0_4px_12px_rgba(251,191,36,0.3)_inset]",
        "hover:scale-[1.05]",
        "focus:ring-[#fbbf24]/40",
        glow && "hover:shadow-[0_12px_32px_rgba(251,191,36,0.4),0_4px_12px_rgba(251,191,36,0.3)_inset,0_0_30px_rgba(251,191,36,0.3)]",
      ],
    }

    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeVariants[size],
          className,
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center gap-3">
          {loading ? (
            <>
              <div className="relative">
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                <div className="absolute inset-0 w-5 h-5 border-2 border-current/30 rounded-full" />
              </div>
              <span className="animate-pulse">กำลังโหลด...</span>
            </>
          ) : (
            <>
              {leftIcon && (
                <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {leftIcon}
                </span>
              )}
              <span className="font-semibold tracking-wide">{children}</span>
              {rightIcon && (
                <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5">
                  {rightIcon}
                </span>
              )}
            </>
          )}
        </div>
      </button>
    )
  },
)

AppleButton.displayName = "AppleButton"

// Enhanced Icon Button variant
export const AppleIconButton = React.forwardRef<HTMLButtonElement, 
  Omit<AppleButtonProps, 'leftIcon' | 'rightIcon' | 'children'> & {
    icon: React.ReactNode
    'aria-label': string
  }
>(
  (
    { 
      className, 
      variant = "ghost", 
      size = "md", 
      icon,
      glow = false,
      disabled,
      ...props 
    },
    ref,
  ) => {
    // Enhanced icon button sizes
    const iconSizeVariants = {
      sm: "p-2.5 rounded-2xl min-w-[40px] min-h-[40px]",
      md: "p-3 rounded-2xl min-w-[48px] min-h-[48px]", 
      lg: "p-4 rounded-3xl min-w-[56px] min-h-[56px]",
    }

    const baseStyles = [
      "relative inline-flex items-center justify-center",
      "transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
      "transform-gpu",
      "focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-black",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
      "active:scale-[0.92]",
      "overflow-hidden",
      "group",
    ]

    const variantStyles = {
      primary: [
        "bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706]",
        "text-black",
        "shadow-[0_8px_24px_rgba(251,191,36,0.4),0_2px_8px_rgba(251,191,36,0.6)_inset]",
        "border border-yellow-400/50",
        "hover:shadow-[0_12px_32px_rgba(251,191,36,0.5),0_4px_12px_rgba(251,191,36,0.7)_inset]",
        "hover:scale-110",
        "focus:ring-[#fbbf24]/50",
      ],
      secondary: [
        "bg-gradient-to-r from-[#0ea5e9] via-[#0284c7] to-[#0369a1]",
        "text-white",
        "shadow-[0_8px_24px_rgba(14,165,233,0.4),0_2px_8px_rgba(14,165,233,0.6)_inset]",
        "border border-blue-400/50",
        "hover:shadow-[0_12px_32px_rgba(14,165,233,0.5),0_4px_12px_rgba(14,165,233,0.7)_inset]",
        "hover:scale-110",
        "focus:ring-[#0ea5e9]/50",
      ],
      ghost: [
        "bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02]",
        "text-white border border-white/20",
        "backdrop-blur-2xl",
        "shadow-[0_8px_24px_rgba(0,0,0,0.3),0_2px_8px_rgba(255,255,255,0.1)_inset]",
        "hover:bg-gradient-to-br hover:from-white/[0.12] hover:via-white/[0.08] hover:to-white/[0.04]",
        "hover:border-white/30",
        "hover:scale-110",
        "focus:ring-white/30",
      ],
      premium: [
        "bg-gradient-to-br from-[rgba(251,191,36,0.12)] via-[rgba(245,158,11,0.08)] to-[rgba(217,119,6,0.04)]",
        "text-[#fbbf24] border border-[rgba(251,191,36,0.3)]",
        "backdrop-blur-2xl",
        "shadow-[0_8px_24px_rgba(251,191,36,0.3),0_2px_8px_rgba(251,191,36,0.2)_inset]",
        "hover:bg-gradient-to-br hover:from-[rgba(251,191,36,0.16)] hover:via-[rgba(245,158,11,0.12)] hover:to-[rgba(217,119,6,0.08)]",
        "hover:border-[rgba(251,191,36,0.4)]",
        "hover:scale-110",
        "focus:ring-[#fbbf24]/40",
        glow && "hover:shadow-[0_12px_32px_rgba(251,191,36,0.4),0_4px_12px_rgba(251,191,36,0.3)_inset,0_0_30px_rgba(251,191,36,0.3)]",
      ],
    }

    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          iconSizeVariants[size],
          className,
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
        
        {/* Icon */}
        <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </button>
    )
  },
)

AppleIconButton.displayName = "AppleIconButton"

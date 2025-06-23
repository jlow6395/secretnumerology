import React from "react"
import { cn } from "@/lib/utils"
import { appleDarkNumerologyTokens } from "./apple-dark-numerology-tokens"

interface AppleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'premium' | 'glass'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  hover?: boolean
  glow?: boolean
  premium?: boolean
}

export const AppleCard = React.forwardRef<HTMLDivElement, AppleCardProps>(
  (
    { 
      className, 
      variant = "default", 
      size = "md", 
      hover = false, 
      glow = false, 
      premium = false,
      children, 
      ...props 
    },
    ref,
  ) => {
    // Size variants with enhanced padding
    const sizeVariants = {
      sm: "p-4",
      md: "p-6", 
      lg: "p-8",
      xl: "p-10",
    }

    // Base styles with enhanced glassmorphism
    const baseStyles = [
      "relative overflow-hidden",
      "transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
      "transform-gpu", // Hardware acceleration
      "border border-white/10",
      "shadow-2xl shadow-black/40",
      "backdrop-blur-2xl",
    ]

    // Enhanced variant styles
    const variantStyles = {
      default: [
        "bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02]",
        "border-white/10",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(255,255,255,0.05)_inset]",
        "rounded-3xl",
      ],
      interactive: [
        "bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02]",
        "border-white/10",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(255,255,255,0.05)_inset]",
        "rounded-3xl",
        "cursor-pointer",
        "hover:bg-gradient-to-br hover:from-white/[0.12] hover:via-white/[0.08] hover:to-white/[0.04]",
        "hover:border-white/20",
        "hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_4px_16px_rgba(255,255,255,0.1)_inset]",
        "hover:scale-[1.02]",
        "active:scale-[0.98]",
        "group",
      ],
      premium: [
        "bg-gradient-to-br from-yellow-500/[0.08] via-orange-500/[0.05] to-yellow-500/[0.02]",
        "border-yellow-500/20",
        "shadow-[0_8px_32px_rgba(251,191,36,0.2),0_2px_8px_rgba(251,191,36,0.1)_inset]",
        "rounded-3xl",
        glow && "hover:shadow-[0_20px_60px_rgba(251,191,36,0.3),0_4px_16px_rgba(251,191,36,0.15)_inset,0_0_40px_rgba(251,191,36,0.2)]",
      ],
      glass: [
        "bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04]",
        "border-white/20",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(255,255,255,0.1)_inset]",
        "rounded-3xl",
        "backdrop-blur-3xl",
      ],
    }

    return (
      <div
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeVariants[size],
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
        
        {/* Premium Golden Glow */}
        {premium && glow && (
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/[0.02] via-transparent to-orange-500/[0.02] pointer-events-none" />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Hover Shine Effect for Interactive Cards */}
        {variant === 'interactive' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
        )}
      </div>
    )
  },
)

AppleCard.displayName = "AppleCard"

// Card Header Component
export const AppleCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 mb-6", className)}
    {...props}
  />
))
AppleCardHeader.displayName = "AppleCardHeader"

// Card Title Component
export const AppleCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-tight tracking-tight text-white font-[SF_Pro_Display]",
      className
    )}
    {...props}
  >
    {children}
  </h3>
))
AppleCardTitle.displayName = "AppleCardTitle"

// Card Description Component
export const AppleCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-400 leading-relaxed font-[SF_Pro_Text]", className)}
    {...props}
  />
))
AppleCardDescription.displayName = "AppleCardDescription"

// Card Content Component
export const AppleCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
AppleCardContent.displayName = "AppleCardContent"

// Card Footer Component
export const AppleCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-6 mt-6 border-t border-white/10", className)}
    {...props}
  />
))
AppleCardFooter.displayName = "AppleCardFooter"

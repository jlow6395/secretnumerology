import React from "react"
import { cn } from "@/lib/utils"
import { appleComponentVariants } from "./apple-components"

interface AppleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof appleComponentVariants.card.variant
  padding?: keyof typeof appleComponentVariants.card.padding
  radius?: keyof typeof appleComponentVariants.card.radius
  children: React.ReactNode
  hover?: boolean
  glow?: boolean
}

export const AppleCard = React.forwardRef<HTMLDivElement, AppleCardProps>(
  (
    { className, variant = "glass", padding = "md", radius = "lg", hover = false, glow = false, children, ...props },
    ref,
  ) => {
    return (
      <div
        className={cn(
          // Base styles
          "overflow-hidden transition-all duration-500",

          // Variant styles
          appleComponentVariants.card.variant[variant],

          // Padding variants
          appleComponentVariants.card.padding[padding],

          // Radius variants
          appleComponentVariants.card.radius[radius],

          // Hover effect
          hover && [
            "cursor-pointer",
            "hover:scale-105 hover:shadow-2xl",
            "hover:bg-white/10",
            "transform-gpu", // Hardware acceleration
          ],

          // Glow effect
          glow && "hover:shadow-glow-blue",

          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  },
)

AppleCard.displayName = "AppleCard"

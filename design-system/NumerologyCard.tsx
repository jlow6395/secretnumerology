import React from "react"
import { cn } from "@/lib/utils"

interface NumerologyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "dark" | "gradient" | "floating"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  radius?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
  hover?: boolean
  glow?: boolean
}

export const NumerologyCard = React.forwardRef<HTMLDivElement, NumerologyCardProps>(
  (
    { className, variant = "glass", padding = "md", radius = "lg", hover = false, glow = false, children, ...props },
    ref,
  ) => {
    // Card variants
    const variants = {
      glass: "bg-white/5 backdrop-blur-xl border border-white/10",
      dark: "bg-gray-900 border border-gray-800",
      gradient: "bg-gradient-to-br from-gray-900 to-black border border-gray-800",
      floating: "bg-gray-900 shadow-2xl border border-gray-800",
    }

    // Padding variants
    const paddings = {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    }

    // Radius variants
    const radiuses = {
      sm: "rounded-lg",
      md: "rounded-xl",
      lg: "rounded-2xl",
      xl: "rounded-3xl",
    }

    return (
      <div
        className={cn(
          // Base styles
          "overflow-hidden transition-all duration-500",

          // Variant styles
          variants[variant],

          // Padding variants
          paddings[padding],

          // Radius variants
          radiuses[radius],

          // Hover effect
          hover && [
            "cursor-pointer",
            "hover:scale-105 hover:shadow-2xl",
            "hover:bg-white/10",
            "transform-gpu", // Hardware acceleration
          ],

          // Glow effect
          glow && "hover:shadow-lg hover:shadow-blue-500/25",

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

NumerologyCard.displayName = "NumerologyCard"

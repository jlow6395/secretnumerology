import React from "react"
import { cn } from "@/lib/utils"
import { componentVariants } from "./components"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: keyof typeof componentVariants.card.elevation
  padding?: keyof typeof componentVariants.card.padding
  background?: keyof typeof componentVariants.card.background
  children: React.ReactNode
  hover?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, elevation = "medium", padding = "md", background = "white", hover = false, children, ...props },
    ref,
  ) => {
    return (
      <div
        className={cn(
          // Base styles
          "rounded-xl overflow-hidden",

          // Elevation variants
          componentVariants.card.elevation[elevation],

          // Padding variants
          componentVariants.card.padding[padding],

          // Background variants
          componentVariants.card.background[background],

          // Hover effect
          hover && "transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer",

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

Card.displayName = "Card"

import React from "react"
import { cn } from "@/lib/utils"
import { appleComponentVariants } from "./apple-components"

interface AppleTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  variant?: keyof typeof appleComponentVariants.text.variant
  size?: keyof typeof appleComponentVariants.text.size
  color?: keyof typeof appleComponentVariants.text.color
  children: React.ReactNode
  gradient?: boolean
}

export const AppleText = React.forwardRef<HTMLElement, AppleTextProps>(
  (
    {
      className,
      as: Component = "p",
      variant = "body",
      size = "base",
      color = "primary",
      gradient = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        className={cn(
          // Variant styles
          appleComponentVariants.text.variant[variant],

          // Size variants
          appleComponentVariants.text.size[size],

          // Color variants (only if not gradient)
          !gradient && appleComponentVariants.text.color[color],

          // Gradient text
          gradient && [
            "bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink",
            "bg-clip-text text-transparent",
          ],

          className,
        )}
        ref={ref as any}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

AppleText.displayName = "AppleText"

// Preset components - Apple style
export const AppleHeading1 = (props: Omit<AppleTextProps, "as" | "variant" | "size">) => (
  <AppleText as="h1" variant="display" size="6xl" {...props} />
)

export const AppleHeading2 = (props: Omit<AppleTextProps, "as" | "variant" | "size">) => (
  <AppleText as="h2" variant="heading" size="4xl" {...props} />
)

export const AppleHeading3 = (props: Omit<AppleTextProps, "as" | "variant" | "size">) => (
  <AppleText as="h3" variant="heading" size="2xl" {...props} />
)

export const AppleBody = (props: Omit<AppleTextProps, "as" | "variant">) => (
  <AppleText as="p" variant="body" {...props} />
)

export const AppleCaption = (props: Omit<AppleTextProps, "as" | "variant" | "color">) => (
  <AppleText as="span" variant="caption" color="tertiary" {...props} />
)

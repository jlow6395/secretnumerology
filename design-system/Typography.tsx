import React from "react"
import { cn } from "@/lib/utils"
import { componentVariants } from "./components"

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  size?: keyof typeof componentVariants.text.size
  weight?: keyof typeof componentVariants.text.weight
  color?: keyof typeof componentVariants.text.color
  children: React.ReactNode
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { className, as: Component = "p", size = "base", weight = "normal", color = "primary", children, ...props },
    ref,
  ) => {
    return (
      <Component
        className={cn(
          // Size variants
          componentVariants.text.size[size],

          // Weight variants
          componentVariants.text.weight[weight],

          // Color variants
          componentVariants.text.color[color],

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

Typography.displayName = "Typography"

// Preset components for common use cases
export const Heading1 = (props: Omit<TypographyProps, "as" | "size" | "weight">) => (
  <Typography as="h1" size="4xl" weight="bold" {...props} />
)

export const Heading2 = (props: Omit<TypographyProps, "as" | "size" | "weight">) => (
  <Typography as="h2" size="3xl" weight="semibold" {...props} />
)

export const Heading3 = (props: Omit<TypographyProps, "as" | "size" | "weight">) => (
  <Typography as="h3" size="2xl" weight="semibold" {...props} />
)

export const BodyLarge = (props: Omit<TypographyProps, "as" | "size">) => <Typography as="p" size="lg" {...props} />

export const BodyText = (props: Omit<TypographyProps, "as" | "size">) => <Typography as="p" size="base" {...props} />

export const Caption = (props: Omit<TypographyProps, "as" | "size" | "color">) => (
  <Typography as="span" size="sm" color="secondary" {...props} />
)

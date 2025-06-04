import React from "react"
import { cn } from "@/lib/utils"

interface NumerologyTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  variant?: "display" | "heading" | "body" | "caption" | "code"
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
  color?: "primary" | "secondary" | "tertiary" | "muted" | "accent" | "success" | "warning" | "error"
  children: React.ReactNode
  gradient?: boolean
}

export const NumerologyText = React.forwardRef<HTMLElement, NumerologyTextProps>(
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
    // Text variants
    const variants = {
      display: "font-bold tracking-tight",
      heading: "font-semibold tracking-tight",
      body: "font-normal leading-relaxed",
      caption: "font-medium text-sm opacity-70",
      code: "font-mono text-sm bg-white/10 px-2 py-1 rounded",
    }

    // Size variants
    const sizes = {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
    }

    // Color variants
    const colors = {
      primary: "text-white",
      secondary: "text-gray-300",
      tertiary: "text-gray-400",
      muted: "text-gray-500",
      accent: "text-blue-400",
      success: "text-green-400",
      warning: "text-yellow-400",
      error: "text-red-400",
    }

    return (
      <Component
        className={cn(
          // Variant styles
          variants[variant],

          // Size variants
          sizes[size],

          // Color variants (only if not gradient)
          !gradient && colors[color],

          // Gradient text
          gradient && ["bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400", "bg-clip-text text-transparent"],

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

NumerologyText.displayName = "NumerologyText"

// Preset components
export const NumerologyHeading1 = (props: Omit<NumerologyTextProps, "as" | "variant" | "size">) => (
  <NumerologyText as="h1" variant="display" size="6xl" {...props} />
)

export const NumerologyHeading2 = (props: Omit<NumerologyTextProps, "as" | "variant" | "size">) => (
  <NumerologyText as="h2" variant="heading" size="4xl" {...props} />
)

export const NumerologyHeading3 = (props: Omit<NumerologyTextProps, "as" | "variant" | "size">) => (
  <NumerologyText as="h3" variant="heading" size="2xl" {...props} />
)

export const NumerologyBody = (props: Omit<NumerologyTextProps, "as" | "variant">) => (
  <NumerologyText as="p" variant="body" {...props} />
)

export const NumerologyCaption = (props: Omit<NumerologyTextProps, "as" | "variant" | "color">) => (
  <NumerologyText as="span" variant="caption" color="tertiary" {...props} />
)

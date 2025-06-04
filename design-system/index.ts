// Design System Exports
export { designTokens } from "./tokens"
export { componentVariants } from "./components"
export { Button } from "./Button"
export { Card } from "./Card"
export { Typography, Heading1, Heading2, Heading3, BodyLarge, BodyText, Caption } from "./Typography"

// Utility functions for design system
export const getColor = (path: string) => {
  const keys = path.split(".")
  let value: any = designTokens.colors

  for (const key of keys) {
    value = value[key]
    if (!value) return undefined
  }

  return value
}

export const getSpacing = (size: keyof typeof designTokens.spacing) => {
  return designTokens.spacing[size]
}

export const getShadow = (level: keyof typeof designTokens.shadow) => {
  return designTokens.shadow[level]
}

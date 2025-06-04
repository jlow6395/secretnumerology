import type React from "react"
import type { LucideIcon } from "lucide-react"

export type CardVariant = "number" | "info" | "action"

export interface BaseCardProps {
  className?: string
  children?: React.ReactNode
}

export interface NumberCardProps extends BaseCardProps {
  variant: "number"
  title: string
  number: string | number
  description?: string
  color?: string
  icon?: LucideIcon
  badge?: string
  progress?: number
}

export interface InfoCardProps extends BaseCardProps {
  variant: "info"
  title: string
  description?: string
  icon?: LucideIcon
  badge?: string
  image?: string
  content?: React.ReactNode
}

export interface ActionCardProps extends BaseCardProps {
  variant: "action"
  title: string
  description?: string
  icon?: LucideIcon
  badge?: string
  action?: {
    label: string
    href?: string
    onClick?: () => void
  }
  disabled?: boolean
}

export type UnifiedCardProps = NumberCardProps | InfoCardProps | ActionCardProps

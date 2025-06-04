import type { LucideIcon } from "lucide-react"

export interface NavItem {
  id: string
  label: string
  href: string
  icon: LucideIcon
  color: string
  badge?: string
  description?: string
}

export interface NavSection {
  id: string
  title: string
  items: NavItem[]
}

export type NavigationConfig = NavSection[]

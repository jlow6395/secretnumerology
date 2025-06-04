"use client"

import type React from "react"

import { ChevronRight } from "lucide-react"
import type { NumberCardProps, InfoCardProps, ActionCardProps } from "@/types/card"

// Base Card Component
const BaseCard = ({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => {
  return (
    <div
      className={`bg-[#1a1a1a] rounded-xl border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-300 group ${
        onClick ? "cursor-pointer hover:scale-[1.02]" : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

// Number Card (for numerology numbers)
export const NumberCard = ({
  title,
  subtitle,
  number,
  description,
  color = "#8b5cf6",
  icon: Icon,
  progress,
  onClick,
  className = "",
}: NumberCardProps) => {
  return (
    <BaseCard className={`p-6 ${className}`} onClick={onClick}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}80)`,
                boxShadow: `0 8px 20px ${color}30`,
              }}
            >
              {number}
            </div>
            {Icon && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#0a0a0a] rounded-full flex items-center justify-center border border-[#3A3A3A]">
                <Icon className="w-3 h-3" style={{ color }} />
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            {subtitle && (
              <p className="font-medium" style={{ color }}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      {description && <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>}

      {/* Progress Bar */}
      {progress !== undefined && (
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-gray-400">Accuracy</span>
            <span className="text-gray-400">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-[#2A2A2A] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                backgroundColor: color,
              }}
            />
          </div>
        </div>
      )}

      {/* Action Button */}
      {onClick && (
        <button className="w-full mt-4 rounded-lg bg-[#2A2A2A] border border-[#3A3A3A] px-4 py-2 text-sm text-white transition-all hover:bg-[#3A3A3A] hover:border-[#4A4A4A] group-hover:border-opacity-80">
          <div className="flex items-center justify-center space-x-2">
            <span>ดูรายละเอียด</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </button>
      )}
    </BaseCard>
  )
}

// Info Card (for general information)
export const InfoCard = ({
  title,
  description,
  value,
  badge,
  color = "#8b5cf6",
  icon: Icon,
  onClick,
  className = "",
}: InfoCardProps) => {
  return (
    <BaseCard className={`p-4 ${className}`} onClick={onClick}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          {Icon && (
            <div
              className="h-10 w-10 rounded-lg flex items-center justify-center shadow-lg"
              style={{
                backgroundColor: `${color}20`,
                boxShadow: `0 4px 12px ${color}15`,
              }}
            >
              <Icon className="h-5 w-5" style={{ color }} />
            </div>
          )}
          <div>
            <h3 className="font-medium text-white text-sm">{title}</h3>
            {description && <p className="text-gray-400 text-xs">{description}</p>}
          </div>
        </div>

        <div className="text-right">
          {value && (
            <div className="text-lg font-bold" style={{ color }}>
              {value}
            </div>
          )}
          {badge && (
            <span
              className="px-2 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${color}20`,
                color: color,
              }}
            >
              {badge}
            </span>
          )}
        </div>
      </div>

      {onClick && (
        <div className="flex items-center justify-end mt-2">
          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
        </div>
      )}
    </BaseCard>
  )
}

// Action Card (for call-to-action items)
export const ActionCard = ({
  title,
  description,
  buttonText = "เรียนรู้เพิ่มเติม",
  color = "#8b5cf6",
  icon: Icon,
  onAction,
  className = "",
}: ActionCardProps) => {
  return (
    <BaseCard className={`p-6 text-center ${className}`}>
      {Icon && (
        <div className="flex justify-center mb-4">
          <div
            className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
            style={{
              backgroundColor: `${color}20`,
              boxShadow: `0 8px 20px ${color}30`,
            }}
          >
            <Icon className="h-8 w-8" style={{ color }} />
          </div>
        </div>
      )}

      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      {description && <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>}

      {onAction && (
        <button
          onClick={onAction}
          className="w-full rounded-lg px-4 py-3 font-medium text-white transition-all hover:opacity-90"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}80)`,
          }}
        >
          {buttonText}
        </button>
      )}
    </BaseCard>
  )
}

// Unified Card Component with variants
interface UnifiedCardProps {
  variant: "number" | "info" | "action"
  title?: string
  subtitle?: string
  number?: string | number
  description?: string
  value?: string
  badge?: string
  buttonText?: string
  color?: string
  icon?: React.ComponentType<any>
  progress?: number
  onClick?: () => void
  onAction?: () => void
  className?: string
  children?: React.ReactNode
}

export const UnifiedCard = ({ variant, children, ...props }: UnifiedCardProps) => {
  if (children) {
    return <BaseCard className={props.className}>{children}</BaseCard>
  }

  switch (variant) {
    case "number":
      return <NumberCard {...props} />
    case "info":
      return <InfoCard {...props} />
    case "action":
      return <ActionCard {...props} />
    default:
      return <BaseCard className={props.className}>{children}</BaseCard>
  }
}

// Also export as default
export default UnifiedCard

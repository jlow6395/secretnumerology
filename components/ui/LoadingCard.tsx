import React from 'react'
import { cn } from '@/lib/utils'

interface LoadingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'stats' | 'insight'
  className?: string
  showPulse?: boolean
}

export function LoadingCard({ variant = 'default', className, showPulse = true }: LoadingCardProps) {
  const baseClasses = [
    "relative overflow-hidden",
    "bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02]",
    "backdrop-blur-2xl border border-white/10 rounded-3xl",
    "shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(255,255,255,0.05)_inset]",
  ]

  const variants = {
    default: "p-6 h-32",
    feature: "p-6 h-24",
    stats: "p-4 h-20",
    insight: "p-8 h-40"
  }

  return (
    <div className={cn(baseClasses, variants[variant], className)}>
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -skew-x-12 animate-shimmer" />
      
      {/* Content based on variant */}
      {variant === 'feature' && (
        <div className="flex items-center gap-5">
          {/* Icon Skeleton */}
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-white/10 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
          </div>
          
          {/* Content Skeleton */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-4 bg-white/10 rounded-lg w-32 animate-pulse" />
              <div className="h-5 bg-red-500/20 rounded-full w-12 animate-pulse" />
            </div>
            <div className="h-3 bg-white/5 rounded-lg w-48 animate-pulse" />
          </div>
          
          {/* Arrow Skeleton */}
          <div className="w-6 h-6 bg-white/5 rounded animate-pulse" />
        </div>
      )}

      {variant === 'stats' && (
        <div className="text-center space-y-3">
          {/* Number Icon Skeleton */}
          <div className="w-10 h-10 mx-auto bg-white/10 rounded-xl animate-pulse" />
          {/* Number Skeleton */}
          <div className="h-6 bg-white/10 rounded-lg w-8 mx-auto animate-pulse" />
          {/* Label Skeleton */}
          <div className="h-3 bg-white/5 rounded w-16 mx-auto animate-pulse" />
        </div>
      )}

      {variant === 'insight' && (
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-5 bg-white/10 rounded-lg w-48 animate-pulse" />
              <div className="h-3 bg-white/5 rounded w-32 animate-pulse" />
            </div>
          </div>
          
          {/* Content Lines */}
          <div className="space-y-2">
            <div className="h-3 bg-white/5 rounded w-full animate-pulse" />
            <div className="h-3 bg-white/5 rounded w-4/5 animate-pulse" />
            <div className="h-3 bg-white/5 rounded w-3/4 animate-pulse" />
          </div>
          
          {/* Lucky Numbers */}
          <div className="flex items-center gap-3 pt-2">
            <div className="h-3 bg-yellow-500/20 rounded w-16 animate-pulse" />
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-6 bg-yellow-500/10 rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      )}

      {variant === 'default' && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-xl animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-32 animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-white/5 rounded w-full animate-pulse" />
            <div className="h-3 bg-white/5 rounded w-3/4 animate-pulse" />
          </div>
        </div>
      )}

      {/* Pulse Overlay */}
      {showPulse && (
        <div className="absolute inset-0 bg-white/[0.01] animate-pulse rounded-3xl" />
      )}
    </div>
  )
}

interface LoadingGridProps {
  count?: number
  variant?: 'feature' | 'stats'
  className?: string
}

export function LoadingGrid({ count = 4, variant = 'feature', className }: LoadingGridProps) {
  return (
    <div className={cn(
      variant === 'feature' ? "space-y-4" : "grid grid-cols-4 gap-4",
      className
    )}>
      {Array.from({ length: count }).map((_, i) => (
        <LoadingCard 
          key={i} 
          variant={variant} 
          style={{ animationDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  )
}

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'white'
  className?: string
}

export function LoadingSpinner({ size = 'md', variant = 'primary', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-3',
    lg: 'w-8 h-8 border-4'
  }

  const variantClasses = {
    primary: 'border-blue-500/30 border-t-blue-500',
    secondary: 'border-white/30 border-t-white',
    white: 'border-gray-300/30 border-t-gray-300'
  }

  return (
    <div className="relative inline-flex items-center justify-center">
      <div className={cn(
        "rounded-full animate-spin",
        sizeClasses[size],
        variantClasses[variant],
        className
      )} />
      
      {/* Secondary Ring */}
      <div className={cn(
        "absolute rounded-full animate-spin opacity-50",
        sizeClasses[size],
        variant === 'primary' ? 'border-purple-500/20 border-b-purple-500' : 
        variant === 'secondary' ? 'border-gray-500/20 border-b-gray-500' :
        'border-gray-400/20 border-b-gray-400',
        className
      )} 
      style={{ 
        animationDirection: 'reverse', 
        animationDuration: '2s' 
      }} />
    </div>
  )
}

interface LoadingStateProps {
  title?: string
  subtitle?: string
  className?: string
}

export function LoadingState({ title = "กำลังโหลด...", subtitle, className }: LoadingStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-12 text-center", className)}>
      <div className="relative mb-6">
        <LoadingSpinner size="lg" variant="primary" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-150 animate-pulse" />
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2 font-[SF_Pro_Display]">
        {title}
      </h3>
      
      {subtitle && (
        <p className="text-sm text-gray-400 font-[SF_Pro_Text]">
          {subtitle}
        </p>
      )}
    </div>
  )
}

interface ProgressBarProps {
  progress: number
  className?: string
  showPercentage?: boolean
  variant?: 'primary' | 'premium'
}

export function ProgressBar({ progress, className, showPercentage = true, variant = 'primary' }: ProgressBarProps) {
  const variantClasses = {
    primary: 'from-blue-500 to-purple-500',
    premium: 'from-yellow-500 to-orange-500'
  }

  return (
    <div className={cn("space-y-2", className)}>
      {showPercentage && (
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">ความคืบหน้า</span>
          <span className="text-sm font-medium text-white">{Math.round(progress)}%</span>
        </div>
      )}
      
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        
        {/* Progress Fill */}
        <div 
          className={cn(
            "h-full bg-gradient-to-r transition-all duration-500 ease-out relative overflow-hidden",
            variantClasses[variant]
          )}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
        </div>
      </div>
    </div>
  )
}

export function LoadingNumberCard() {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-[#2A2A2A] p-6 animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-2 flex-1">
          <div
            className="h-5 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "50%" }}
          />
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "70%" }}
          />
        </div>
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-shimmer flex items-center justify-center">
          <div className="h-6 w-6 bg-gradient-to-r from-[#3A3A3A] to-[#4A4A4A] rounded animate-shimmer" />
        </div>
      </div>
      <div className="space-y-3 mb-4">
        <div className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer" />
        <div
          className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
          style={{ width: "85%" }}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div
            className="h-3 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "30%" }}
          />
          <div
            className="h-3 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "20%" }}
          />
        </div>
        <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full animate-shimmer"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </div>
  )
}

export function LoadingInsightCard() {
  return (
    <div className="bg-gradient-to-r from-[#8b5cf6]/10 to-[#ec4899]/10 rounded-2xl border border-[#8b5cf6]/20 p-6 animate-pulse">
      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#8b5cf6]/30 to-[#ec4899]/30 animate-shimmer flex-shrink-0" />
        <div className="space-y-2 flex-1">
          <div
            className="h-5 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "60%" }}
          />
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "40%" }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "80%" }}
          />
          <div className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer" />
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "90%" }}
          />
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "70%" }}
          />
        </div>

        <div className="space-y-2">
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "75%" }}
          />
          <div className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer" />
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "85%" }}
          />
        </div>
      </div>
    </div>
  )
}

export function LoadingQuickActionCard() {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-[#2A2A2A] p-4 animate-pulse">
      <div className="flex items-center space-x-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] animate-shimmer" />
        <div className="space-y-2 flex-1">
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "70%" }}
          />
          <div
            className="h-3 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  )
}

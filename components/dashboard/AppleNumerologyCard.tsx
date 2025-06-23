/**
 * Apple-style Numerology Card Component
 * 
 * Features:
 * - Dark glassmorphic design
 * - Expandable content with + button
 * - Free vs Premium content tiers
 * - Smooth animations
 * - Touch-friendly for LINE LIFF
 */

'use client'

import React, { useState } from 'react'
import { Plus, Lock, Sparkles, Star } from 'lucide-react'
import { appleDarkNumerologyTokens } from '@/design-system/apple-dark-numerology-tokens'

// ========== TYPES ==========
interface NumerologyData {
  number: number
  type: 'lifePath' | 'expression' | 'soulUrge' | 'personality' | 'talent'
  title: string
  
  // Free content (always visible)
  basic: {
    shortDescription: string
    keyTraits: string[]
    image?: string
  }
  
  // Premium content (locked for free users)
  premium?: {
    chineseZodiacConnection: string
    positiveTraits: string[]
    negativeTraits: string[]
    dangerousWeaknesses: string[]
    successFoundations: string[]
    bornNegativeHabits: string[]
    loveAndRelationships: string
    careerGuidance: string
    influenceOnOtherNumbers: string
    compatibilityWithOtherLifePaths: string
    famousPeople: string[]
  }
}

interface AppleNumerologyCardProps {
  data: NumerologyData
  isPremiumUser: boolean
  onExpandClick?: (data: NumerologyData) => void
  onUpgradeClick?: () => void
  className?: string
}

// ========== COMPONENT ==========
export const AppleNumerologyCard: React.FC<AppleNumerologyCardProps> = ({
  data,
  isPremiumUser,
  onExpandClick,
  onUpgradeClick,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // Get number-specific gradient
  const numberGradient = appleDarkNumerologyTokens.numerology.numberCircle.gradients[
    data.number as keyof typeof appleDarkNumerologyTokens.numerology.numberCircle.gradients
  ] || appleDarkNumerologyTokens.numerology.numberCircle.gradients[1]
  
  // Get type-specific color
  const typeColor = appleDarkNumerologyTokens.colors.numerology[data.type]
  
  const handleExpandClick = () => {
    if (isPremiumUser && data.premium) {
      onExpandClick?.(data)
    } else {
      onUpgradeClick?.()
    }
  }

  return (
    <div 
      className={`
        group relative
        bg-black/20 backdrop-blur-xl
        border border-white/10
        rounded-2xl p-6
        transition-all duration-300 ease-out
        hover:border-white/20 hover:bg-white/5
        ${isHovered ? 'transform scale-[1.02]' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: appleDarkNumerologyTokens.shadows.glass,
      }}
    >
      {/* Number Circle */}
      <div className="flex items-center justify-between mb-4">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center relative overflow-hidden"
          style={{ background: numberGradient }}
        >
          <span className="text-2xl font-bold text-white relative z-10">
            {data.number}
          </span>
          
          {/* Glow effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-50 blur-md"
            style={{ background: numberGradient }}
          />
        </div>
        
        {/* Expand Button */}
        <button
          onClick={handleExpandClick}
          className={`
            w-10 h-10 rounded-full
            flex items-center justify-center
            transition-all duration-300
            ${isPremiumUser 
              ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
              : 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30'
            }
            group-hover:scale-110
            active:scale-95
          `}
        >
          {isPremiumUser ? (
            <Plus className="w-5 h-5 text-white transition-transform group-hover:rotate-90" />
          ) : (
            <Lock className="w-4 h-4 text-amber-400" />
          )}
        </button>
      </div>
      
      {/* Card Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white mb-1">
          {data.title}
        </h3>
        
        <div className="flex items-center gap-2">
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: typeColor }}
          />
          <span className="text-sm text-gray-400 capitalize">
            {data.type.replace(/([A-Z])/g, ' $1').trim()}
          </span>
        </div>
      </div>
      
      {/* Basic Content (Always Visible) */}
      <div className="space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          {data.basic.shortDescription}
        </p>
        
        {/* Key Traits */}
        <div className="flex flex-wrap gap-2">
          {data.basic.keyTraits.slice(0, 3).map((trait, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300 border border-white/20"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
      
      {/* Premium Indicator */}
      {!isPremiumUser && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-amber-400 font-medium">
                ปลดล็อคเนื้อหาเต็ม
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Star 
                  key={i}
                  className="w-3 h-3 text-amber-400 fill-current" 
                />
              ))}
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-2">
            การเชื่อมโยงกับนักษัตรจีน • ความรัก • อาชีพ • +7 หัวข้อ
          </p>
        </div>
      )}
      
      {/* Gold accent line (5% usage) */}
      <div 
        className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-50"
        style={{ 
          background: `linear-gradient(90deg, transparent, ${appleDarkNumerologyTokens.colors.accent.gold.primary}, transparent)` 
        }}
      />
      
      {/* Hover glow effect */}
      {isHovered && (
        <div 
          className="absolute inset-0 rounded-2xl opacity-30 blur-xl -z-10"
          style={{ 
            background: `radial-gradient(circle at center, ${typeColor}20, transparent 70%)` 
          }}
        />
      )}
    </div>
  )
}

// ========== LOADING STATE ==========
export const AppleNumerologyCardSkeleton: React.FC = () => {
  return (
    <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full bg-white/10" />
        <div className="w-10 h-10 rounded-full bg-white/10" />
      </div>
      
      <div className="space-y-3">
        <div className="h-6 bg-white/10 rounded w-3/4" />
        <div className="h-4 bg-white/10 rounded w-1/2" />
        <div className="h-16 bg-white/10 rounded" />
        
        <div className="flex gap-2">
          <div className="h-6 bg-white/10 rounded-full w-16" />
          <div className="h-6 bg-white/10 rounded-full w-20" />
          <div className="h-6 bg-white/10 rounded-full w-14" />
        </div>
      </div>
    </div>
  )
}

// ========== GRID LAYOUT ==========
interface AppleNumerologyGridProps {
  data: NumerologyData[]
  isPremiumUser: boolean
  onExpandClick?: (data: NumerologyData) => void
  onUpgradeClick?: () => void
  isLoading?: boolean
}

export const AppleNumerologyGrid: React.FC<AppleNumerologyGridProps> = ({
  data,
  isPremiumUser,
  onExpandClick,
  onUpgradeClick,
  isLoading = false
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <AppleNumerologyCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <AppleNumerologyCard
          key={`${item.type}-${item.number}`}
          data={item}
          isPremiumUser={isPremiumUser}
          onExpandClick={onExpandClick}
          onUpgradeClick={onUpgradeClick}
          className={`transform transition-all duration-300 delay-${index * 100}`}
        />
      ))}
    </div>
  )
} 
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ParticleProps {
  className?: string
  count?: number
  color?: 'blue' | 'gold' | 'purple'
}

export function FloatingParticles({ className, count = 20, color = 'blue' }: ParticleProps) {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    delay: number
    duration: number
  }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }))
    setParticles(newParticles)
  }, [count])

  const colorClasses = {
    blue: 'bg-blue-400/30',
    gold: 'bg-yellow-400/40',
    purple: 'bg-purple-400/30'
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={cn(
            "absolute rounded-full blur-sm animate-float",
            colorClasses[color]
          )}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

interface PremiumGlowProps {
  className?: string
  variant?: 'subtle' | 'medium' | 'strong'
  color?: 'blue' | 'gold' | 'purple'
  animate?: boolean
}

export function PremiumGlow({ className, variant = 'medium', color = 'gold', animate = true }: PremiumGlowProps) {
  const variants = {
    subtle: 'blur-lg scale-110',
    medium: 'blur-xl scale-125',
    strong: 'blur-2xl scale-150'
  }

  const colors = {
    blue: 'bg-blue-500/20',
    gold: 'bg-yellow-500/30',
    purple: 'bg-purple-500/25'
  }

  return (
    <div className={cn(
      "absolute inset-0 rounded-3xl pointer-events-none",
      variants[variant],
      colors[color],
      animate && "animate-pulse",
      className
    )} />
  )
}

interface PremiumBadgeProps {
  className?: string
  variant?: 'lock' | 'crown' | 'star'
  size?: 'sm' | 'md' | 'lg'
  glow?: boolean
}

export function PremiumBadge({ className, variant = 'crown', size = 'md', glow = true }: PremiumBadgeProps) {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const iconSize = {
    sm: 12,
    md: 16,
    lg: 20
  }

  const icons = {
    lock: (
      <svg width={iconSize[size]} height={iconSize[size]} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    crown: (
      <svg width={iconSize[size]} height={iconSize[size]} fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 16L3 8l5.5 5L12 4l3.5 9L21 8l-2 8H5zm2.7-2h8.6l.9-4.4L14 12l-2-5-2 5-3.2-2.4L7.7 14z"/>
      </svg>
    ),
    star: (
      <svg width={iconSize[size]} height={iconSize[size]} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  }

  return (
    <div className="relative">
      {glow && <PremiumGlow variant="subtle" className="scale-200" />}
      
      <div className={cn(
        "relative flex items-center justify-center rounded-full",
        "bg-gradient-to-br from-yellow-400 to-orange-500",
        "text-black font-bold",
        "shadow-[0_4px_12px_rgba(251,191,36,0.4)]",
        "border border-yellow-400/50",
        sizeClasses[size],
        className
      )}>
        {icons[variant]}
        
        {/* Inner Shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
      </div>
    </div>
  )
}

interface AnimatedBorderProps {
  className?: string
  variant?: 'primary' | 'premium' | 'success'
  speed?: 'slow' | 'normal' | 'fast'
  children: React.ReactNode
}

export function AnimatedBorder({ className, variant = 'premium', speed = 'normal', children }: AnimatedBorderProps) {
  const variants = {
    primary: 'from-blue-500 via-purple-500 to-blue-500',
    premium: 'from-yellow-400 via-orange-500 to-yellow-400',
    success: 'from-green-500 via-emerald-500 to-green-500'
  }

  const speeds = {
    slow: 'animate-spin',
    normal: 'animate-spin',
    fast: 'animate-spin'
  }

  const durations = {
    slow: '6s',
    normal: '4s',
    fast: '2s'
  }

  return (
    <div className={cn("relative overflow-hidden rounded-3xl", className)}>
      {/* Animated Border */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-75",
          variants[variant],
          speeds[speed]
        )}
        style={{ animationDuration: durations[speed] }}
      />
      
      {/* Inner Content */}
      <div className="relative m-[2px] rounded-3xl bg-black/90 backdrop-blur-xl">
        {children}
      </div>
    </div>
  )
}

interface PremiumCardWrapperProps {
  className?: string
  children: React.ReactNode
  showParticles?: boolean
  showGlow?: boolean
  showBorder?: boolean
}

export function PremiumCardWrapper({ 
  className, 
  children, 
  showParticles = true, 
  showGlow = true, 
  showBorder = true 
}: PremiumCardWrapperProps) {
  return (
    <div className={cn("relative", className)}>
      {showParticles && <FloatingParticles color="gold" count={12} />}
      {showGlow && <PremiumGlow variant="medium" color="gold" />}
      
      {showBorder ? (
        <AnimatedBorder variant="premium">
          <div className="p-6">
            {children}
          </div>
        </AnimatedBorder>
      ) : (
        <div className="relative">
          {children}
        </div>
      )}
    </div>
  )
}

interface ShimmerTextProps {
  children: React.ReactNode
  className?: string
  variant?: 'gold' | 'blue' | 'rainbow'
}

export function ShimmerText({ children, className, variant = 'gold' }: ShimmerTextProps) {
  const variants = {
    gold: 'from-yellow-400 via-orange-500 to-yellow-400',
    blue: 'from-blue-400 via-purple-500 to-blue-400',
    rainbow: 'from-red-400 via-yellow-400 via-green-400 via-blue-400 via-purple-400 to-red-400'
  }

  return (
    <span className={cn(
      "relative inline-block bg-gradient-to-r bg-clip-text text-transparent animate-shimmer",
      "bg-[length:200%_100%]",
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}

interface PulsingOrbProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'blue' | 'gold' | 'purple'
  intensity?: 'low' | 'medium' | 'high'
}

export function PulsingOrb({ className, size = 'md', color = 'blue', intensity = 'medium' }: PulsingOrbProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const colorClasses = {
    blue: 'bg-blue-500',
    gold: 'bg-yellow-500',
    purple: 'bg-purple-500'
  }

  const intensityClasses = {
    low: 'opacity-60',
    medium: 'opacity-80',
    high: 'opacity-100'
  }

  return (
    <div className={cn("relative", className)}>
      {/* Main Orb */}
      <div className={cn(
        "rounded-full animate-pulse",
        sizeClasses[size],
        colorClasses[color],
        intensityClasses[intensity]
      )} />
      
      {/* Outer Glow */}
      <div className={cn(
        "absolute inset-0 rounded-full animate-ping",
        sizeClasses[size],
        colorClasses[color],
        "opacity-30"
      )} />
      
      {/* Inner Shine */}
      <div className={cn(
        "absolute top-1/4 left-1/4 rounded-full bg-white/50",
        size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-1.5 h-1.5' : 'w-2 h-2'
      )} />
    </div>
  )
}

interface MagicSparklesProps {
  className?: string
  count?: number
  color?: 'gold' | 'blue' | 'white'
}

export function MagicSparkles({ className, count = 8, color = 'gold' }: MagicSparklesProps) {
  const [sparkles, setSparkles] = useState<Array<{
    id: number
    x: number
    y: number
    delay: number
    size: number
  }>>([])

  useEffect(() => {
    const newSparkles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      size: Math.random() * 8 + 4,
    }))
    setSparkles(newSparkles)
  }, [count])

  const colorClasses = {
    gold: 'text-yellow-400',
    blue: 'text-blue-400',
    white: 'text-white'
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={cn(
            "absolute animate-ping",
            colorClasses[color]
          )}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            fontSize: `${sparkle.size}px`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  )
} 
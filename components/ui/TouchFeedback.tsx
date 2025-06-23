import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TouchRippleProps {
  className?: string
  color?: 'blue' | 'white' | 'gold'
  children: React.ReactNode
  disabled?: boolean
}

export function TouchRipple({ className, color = 'white', children, disabled = false }: TouchRippleProps) {
  const [ripples, setRipples] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
  }>>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const colorClasses = {
    blue: 'bg-blue-400/30',
    white: 'bg-white/20',
    gold: 'bg-yellow-400/30'
  }

  const handleTouch = (event: React.TouchEvent | React.MouseEvent) => {
    if (disabled) return

    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = ('touches' in event ? event.touches[0].clientX : event.clientX) - rect.left
    const y = ('touches' in event ? event.touches[0].clientY : event.clientY) - rect.top
    const size = Math.max(rect.width, rect.height) * 2

    const newRipple = {
      id: Date.now(),
      x: x - size / 2,
      y: y - size / 2,
      size
    }

    setRipples(prev => [...prev, newRipple])

    // Haptic feedback for mobile
    if ('vibrate' in navigator) {
      navigator.vibrate(10)
    }

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 600)
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onTouchStart={handleTouch}
      onMouseDown={handleTouch}
    >
      {children}
      
      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className={cn(
            "absolute rounded-full pointer-events-none animate-ping",
            colorClasses[color]
          )}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animationDuration: '600ms',
            animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        />
      ))}
    </div>
  )
}

interface SwipeGestureProps {
  className?: string
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  threshold?: number
  children: React.ReactNode
}

export function SwipeGesture({
  className,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  children
}: SwipeGestureProps) {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    })
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distanceX = touchStart.x - touchEnd.x
    const distanceY = touchStart.y - touchEnd.y
    const isLeftSwipe = distanceX > threshold
    const isRightSwipe = distanceX < -threshold
    const isUpSwipe = distanceY > threshold
    const isDownSwipe = distanceY < -threshold

    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      // Horizontal swipe
      if (isLeftSwipe && onSwipeLeft) {
        onSwipeLeft()
      }
      if (isRightSwipe && onSwipeRight) {
        onSwipeRight()
      }
    } else {
      // Vertical swipe
      if (isUpSwipe && onSwipeUp) {
        onSwipeUp()
      }
      if (isDownSwipe && onSwipeDown) {
        onSwipeDown()
      }
    }
  }

  return (
    <div
      className={className}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  )
}

interface PullToRefreshProps {
  className?: string
  onRefresh: () => Promise<void>
  threshold?: number
  children: React.ReactNode
}

export function PullToRefresh({ className, onRefresh, threshold = 80, children }: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [startY, setStartY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current?.scrollTop === 0) {
      setStartY(e.touches[0].clientY)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY === 0 || containerRef.current?.scrollTop !== 0) return

    const currentY = e.touches[0].clientY
    const distance = Math.max(0, (currentY - startY) * 0.5)
    setPullDistance(distance)
  }

  const handleTouchEnd = async () => {
    if (pullDistance > threshold && !isRefreshing) {
      setIsRefreshing(true)
      try {
        await onRefresh()
      } finally {
        setIsRefreshing(false)
      }
    }
    setPullDistance(0)
    setStartY(0)
  }

  const progress = Math.min(pullDistance / threshold, 1)

  return (
    <div className={cn("relative", className)}>
      {/* Pull to Refresh Indicator */}
      {(pullDistance > 0 || isRefreshing) && (
        <div 
          className="absolute top-0 left-0 right-0 flex items-center justify-center bg-gradient-to-b from-blue-500/10 to-transparent backdrop-blur-sm z-10 transition-all duration-300"
          style={{ height: Math.max(60, pullDistance) }}
        >
          <div className="flex flex-col items-center gap-2">
            {isRefreshing ? (
              <div className="w-6 h-6 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            ) : (
              <div 
                className="w-6 h-6 text-blue-400 transition-transform duration-200"
                style={{ 
                  transform: `rotate(${progress * 180}deg) scale(${0.5 + progress * 0.5})` 
                }}
              >
                ↓
              </div>
            )}
            <span className="text-xs text-blue-400 font-medium">
              {isRefreshing ? 'กำลังรีเฟรช...' : 
               progress >= 1 ? 'ปล่อยเพื่อรีเฟรช' : 'ดึงลงเพื่อรีเฟรช'}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div
        ref={containerRef}
        className="h-full overflow-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ 
          transform: `translateY(${pullDistance}px)`,
          transition: pullDistance === 0 ? 'transform 0.3s ease-out' : 'none'
        }}
      >
        {children}
      </div>
    </div>
  )
}

interface ResponsiveContainerProps {
  className?: string
  children: React.ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function ResponsiveContainer({ 
  className, 
  children, 
  maxWidth = 'md', 
  padding = 'md' 
}: ResponsiveContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  }

  const paddingClasses = {
    none: '',
    sm: 'px-4 py-2',
    md: 'px-6 py-4',
    lg: 'px-8 py-6'
  }

  return (
    <div className={cn(
      "mx-auto w-full",
      maxWidthClasses[maxWidth],
      paddingClasses[padding],
      className
    )}>
      {children}
    </div>
  )
}

interface SafeAreaProps {
  className?: string
  children: React.ReactNode
  top?: boolean
  bottom?: boolean
  left?: boolean
  right?: boolean
}

export function SafeArea({ 
  className, 
  children, 
  top = true, 
  bottom = true, 
  left = true, 
  right = true 
}: SafeAreaProps) {
  return (
    <div className={cn(
      top && "pt-safe-top",
      bottom && "pb-safe-bottom",
      left && "pl-safe-left",
      right && "pr-safe-right",
      className
    )}>
      {children}
    </div>
  )
}

interface TouchTargetProps {
  className?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

export function TouchTarget({ className, children, size = 'md', onClick }: TouchTargetProps) {
  const sizeClasses = {
    sm: 'min-h-[40px] min-w-[40px]',
    md: 'min-h-[44px] min-w-[44px]',
    lg: 'min-h-[48px] min-w-[48px]'
  }

  return (
    <TouchRipple>
      <button
        className={cn(
          "flex items-center justify-center rounded-2xl transition-all duration-200",
          "active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50",
          sizeClasses[size],
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </TouchRipple>
  )
}

interface ScrollIndicatorProps {
  className?: string
  target?: React.RefObject<HTMLElement>
}

export function ScrollIndicator({ className, target }: ScrollIndicatorProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const element = target?.current || window

    const handleScroll = () => {
      if (target?.current) {
        const { scrollTop, scrollHeight, clientHeight } = target.current
        const progress = scrollTop / (scrollHeight - clientHeight)
        setScrollProgress(Math.min(Math.max(progress, 0), 1))
      } else {
        const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
        setScrollProgress(Math.min(Math.max(progress, 0), 1))
      }
    }

    if (target?.current) {
      target.current.addEventListener('scroll', handleScroll)
      return () => target.current?.removeEventListener('scroll', handleScroll)
    } else {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [target])

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 h-1 bg-white/10 z-50",
      className
    )}>
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  )
} 
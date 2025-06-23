"use client"

import React, { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { cn } from '@/lib/utils'

interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  href: string
  badge?: string
  premium?: boolean
}

const navItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: NumerologyIcons.home,
    href: '/dashboard',
  },
  {
    id: 'love',
    label: 'Love',
    icon: NumerologyIcons.love,
    href: '/dashboard/compatibility',
    badge: 'ฮิต',
  },
  {
    id: 'core',
    label: 'Core',
    icon: NumerologyIcons.calculator,
    href: '/dashboard/my-numbers',
  },
  {
    id: 'timeline',
    label: 'Timeline',
    icon: NumerologyIcons.timeline,
    href: '/dashboard/timeline',
    badge: 'ใหม่',
  },
  {
    id: 'ai',
    label: 'AI',
    icon: NumerologyIcons.aiChat,
    href: '/dashboard/ai-chat',
  },
]

export function AppleNavigation() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Auto-hide navigation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY
      const isNearBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 100

      if (isScrollingDown && currentScrollY > 100 && !isNearBottom) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Update active tab based on current route
  useEffect(() => {
    const currentItem = navItems.find(item => pathname.startsWith(item.href))
    if (currentItem) {
      setActiveTab(currentItem.id)
    }
  }, [pathname])

  const handleNavigation = (item: NavItem) => {
    setActiveTab(item.id)
    router.push(item.href)
    
    // Haptic feedback (if supported)
    if ('vibrate' in navigator) {
      navigator.vibrate(10)
    }
  }

  return (
    <>
      {/* Background Blur Overlay */}
      <div 
        className={cn(
          "fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-40 transition-all duration-500",
          "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
          "backdrop-blur-sm",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}
      />

      {/* Main Navigation Container */}
      <div 
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
          isVisible ? "translate-y-0" : "translate-y-full"
        )}
      >
        {/* Enhanced Glassmorphism Background */}
        <div className="relative mx-4 mb-8">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-white/5 rounded-[32px] blur-xl scale-105" />
          
          {/* Main Container */}
          <div className="relative bg-gradient-to-r from-black/40 via-black/60 to-black/40 backdrop-blur-3xl rounded-[32px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_4px_16px_rgba(255,255,255,0.05)_inset] overflow-hidden">
            
            {/* Top Highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Navigation Items */}
            <div className="flex items-center justify-around px-2 py-3">
              {navItems.map((item, index) => {
                const isActive = activeTab === item.id
                const Icon = item.icon
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    className={cn(
                      "relative flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl min-w-[64px]",
                      "transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                      "transform-gpu group",
                      "active:scale-95",
                      isActive ? [
                        "bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-blue-500/10",
                        "border border-blue-500/30",
                        "shadow-[0_8px_24px_rgba(59,130,246,0.3),0_2px_8px_rgba(59,130,246,0.2)_inset]",
                        "scale-105",
                      ] : [
                        "hover:bg-white/5",
                        "hover:scale-105",
                        "hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)]",
                      ]
                    )}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    {/* Active Indicator Glow */}
                    {isActive && (
                      <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-lg scale-110 animate-pulse" />
                    )}
                    
                    {/* Icon Container */}
                    <div className="relative">
                      <Icon 
                        size={24} 
                        className={cn(
                          "transition-all duration-300",
                          isActive ? "text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" : "text-gray-400 group-hover:text-gray-300"
                        )}
                      />
                      
                      {/* Premium Lock */}
                      {item.premium && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-2.5 h-2.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                      )}
                      
                      {/* Badge */}
                      {item.badge && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-0.5 rounded-full font-medium shadow-lg animate-pulse border border-red-400/50">
                          {item.badge}
                        </div>
                      )}
                    </div>
                    
                    {/* Label */}
                    <span className={cn(
                      "text-xs font-medium transition-all duration-300 font-[SF_Pro_Text]",
                      isActive ? "text-blue-300 font-semibold" : "text-gray-400 group-hover:text-gray-300"
                    )}>
                      {item.label}
                    </span>
                    
                    {/* Active Indicator Dot */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                        <div className="absolute inset-0 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                      </div>
                    )}
                    
                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />
                  </button>
                )
              })}
            </div>
            
            {/* Bottom Highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          
          {/* Home Indicator (iPhone style) */}
          <div className="flex justify-center mt-4 mb-2">
            <div className="w-32 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </>
  )
} 
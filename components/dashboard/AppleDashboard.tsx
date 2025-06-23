/**
 * Apple-style Dashboard for Secret Numerology
 * 
 * Features:
 * - Glassmorphism design
 * - Custom SVG icons
 * - Interactive cards
 * - Premium indicators
 * - Touch-friendly mobile UI
 */

"use client"

import React, { useState } from 'react'
import { NumerologyIcons, getNumberIcon } from '@/design-system/icons/NumerologyIcons'
import { AllNumberIcons, getCompleteNumberIcon } from '@/design-system/icons/AllNumberIcons'
import { appleDarkNumerologyTokens } from '@/design-system/apple-dark-numerology-tokens'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

interface DashboardProps {
  user: {
    full_name: string
    unlocked?: boolean
    date_of_birth?: string
  }
  numerologyData: any[]
  onCardClick?: (data: any) => void
  onUpgrade?: () => void
}

// ========== PREMIUM BADGE ==========
const PremiumBadge = ({ isPremium }: { isPremium: boolean }) => (
  <Badge 
    variant={isPremium ? "default" : "secondary"}
    className={`
      ${isPremium 
        ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black border-amber-400' 
        : 'bg-gray-800/50 text-gray-400 border-gray-600'
      }
      backdrop-blur-sm px-3 py-1 text-xs font-semibold
    `}
  >
    {isPremium ? '👑 Premium' : '🔒 Free'}
  </Badge>
)

// ========== INSIGHT OF THE DAY CARD ==========
const InsightOfTheDayCard = () => {
  const today = new Date().toLocaleDateString('th-TH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Card className="relative overflow-hidden bg-black/20 backdrop-blur-xl border border-white/10 p-8 mb-8">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
                     background: `linear-gradient(135deg, ${appleDarkNumerologyTokens.colors.numerology.lifePath}40, ${appleDarkNumerologyTokens.colors.accent.gold.primary}20, transparent 70%)`
        }}
      />
      
      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/80 to-blue-600/80 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <NumerologyIcons.insight size={32} color="#FFFFFF" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Insight of the Day</h2>
            <p className="text-gray-400 text-sm">{today}</p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-3">
            วันแห่งความคิดสร้างสรรค์และการสื่อสาร ✨
          </h3>
          
          <p className="text-gray-300 leading-relaxed">
            วันนี้คุณจะพบกับพลังงานที่เอื้อต่อการแสดงออกและการสื่อสาร ใช้โอกาสนี้ในการแบ่งปันไอเดียและสร้างสรรค์สิ่งใหม่ๆ พลังงานของเลข 3 จะช่วยเสริมความคิดสร้างสรรค์ของคุณ
          </p>
        </div>
        
        {/* Advice Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <NumerologyIcons.lotus size={20} color="#F59E0B" />
            <h4 className="text-white font-medium">คำแนะนำวันนี้</h4>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            ควรใช้เวลาในการเขียน วาดภาพ หรือกิจกรรมสร้างสรรค์อื่นๆ หลีกเลี่ยงการตัดสินใจสำคัญในเรื่องการเงิน ให้ความสำคัญกับการสื่อสารที่ชัดเจนและจริงใจ
          </p>
        </div>
        
        {/* Lucky Numbers */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm font-medium">เลขนำโชควันนี้:</span>
            <div className="flex gap-2">
              {[3, 7, 12].map((num, index) => (
                <div 
                  key={index}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-black text-sm font-bold shadow-lg"
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <NumerologyIcons.energy size={16} color="#F59E0B" />
            <span className="text-xs text-gray-400">พลังงาน: สูง</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Accent */}
      <div 
        className="absolute bottom-0 left-8 right-8 h-1 rounded-full opacity-60"
                 style={{ 
           background: `linear-gradient(90deg, transparent, ${appleDarkNumerologyTokens.colors.accent.gold.primary}, transparent)` 
         }}
      />
    </Card>
  )
}

// ========== DASHBOARD HEADER ==========
const DashboardHeader = ({ user }: { user: any }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center overflow-hidden border-2 border-white/20 backdrop-blur-sm">
            <NumerologyIcons.profile size={32} color="#FFFFFF" />
          </div>
          {user?.unlocked && (
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
              <span className="text-xs">👑</span>
            </div>
          )}
        </div>
        
        {/* User Info */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            สวัสดี, {user?.full_name?.split(' ')[0] || 'ผู้ใช้'} 👋
          </h1>
          <div className="flex items-center gap-3">
            <PremiumBadge isPremium={user?.unlocked || false} />
            <span className="text-gray-400 text-sm">
              สมาชิกตั้งแต่ 2024
            </span>
          </div>
        </div>
      </div>
      
      {/* Settings Button */}
      <Button 
        variant="ghost"
        size="icon"
        className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300"
      >
        <NumerologyIcons.settings size={24} color="#FFFFFF" />
      </Button>
    </div>
  )
}

// ========== QUICK STATS CARDS ==========
const QuickStatsCards = ({ data }: { data: any[] }) => {
  const stats = [
    {
      title: 'Life Path Number',
      value: data.find(d => d.type === 'lifePath')?.number || '?',
      icon: NumerologyIcons.lotus,
      color: '#8B5CF6',
      bgColor: 'from-purple-500/20 to-indigo-500/20'
    },
    {
      title: 'Talent Number', 
      value: data.find(d => d.type === 'talent')?.number || '?',
      icon: NumerologyIcons.trident,
      color: '#3B82F6',
      bgColor: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Lucky Today',
      value: '7',
      icon: NumerologyIcons.beads,
      color: '#F59E0B',
      bgColor: 'from-amber-500/20 to-yellow-500/20'
    },
    {
      title: 'Compatibility',
      value: '85%',
      icon: NumerologyIcons.energy,
      color: '#10B981',
      bgColor: 'from-green-500/20 to-emerald-500/20'
    }
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card 
          key={index}
          className={`
            relative overflow-hidden bg-black/20 backdrop-blur-xl border border-white/10 p-6
            hover:border-white/20 transition-all duration-300 cursor-pointer group
          `}
        >
          {/* Background Gradient */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          />
          
          {/* Content */}
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <stat.icon size={24} color={stat.color} />
              <span className="text-xs text-gray-400 font-medium">
                {stat.title}
              </span>
            </div>
            
            <div className="text-2xl font-bold text-white mb-1">
              {stat.value}
            </div>
            
            <div className="w-full bg-gray-700/50 rounded-full h-1">
              <div 
                className="h-1 rounded-full transition-all duration-500 group-hover:w-full"
                style={{ 
                  backgroundColor: stat.color,
                  width: '60%'
                }}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

// ========== NUMEROLOGY CARDS GRID ==========
const NumerologyCardsGrid = ({ 
  data, 
  isPremiumUser, 
  onCardClick, 
  onUpgrade 
}: {
  data: any[]
  isPremiumUser: boolean
  onCardClick?: (data: any) => void
  onUpgrade?: () => void
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => {
        const NumberIcon = getCompleteNumberIcon(item.number)
        const hasPreview = item.basic && Object.keys(item.basic).length > 0
        const hasPremium = item.premium && Object.keys(item.premium).length > 0
        
        return (
          <Card 
            key={index}
            className={`
              relative overflow-hidden bg-black/20 backdrop-blur-xl border border-white/10 p-6
              hover:border-white/20 transition-all duration-300 cursor-pointer group
              ${!isPremiumUser && hasPremium ? 'hover:border-amber-500/50' : ''}
            `}
            onClick={() => onCardClick?.(item)}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Premium Indicator */}
            {!isPremiumUser && hasPremium && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs">
                  👑 Premium
                </Badge>
              </div>
            )}
            
            {/* Content */}
            <div className="relative">
              {/* Number Icon */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <NumberIcon 
                    size={48} 
                                         color={
                       item.type === 'lifePath' ? appleDarkNumerologyTokens.colors.numerology.lifePath :
                       item.type === 'talent' ? appleDarkNumerologyTokens.colors.numerology.talent :
                       '#FFFFFF'
                     }
                  />
                </div>
              </div>
              
              {/* Title & Number */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {item.number}
                  </span>
                  {item.number >= 11 && (
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                      Master
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Preview Content */}
              {hasPreview && (
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {item.basic.shortDescription}
                  </p>
                  
                  {item.basic.keyTraits && (
                    <div className="flex flex-wrap gap-1">
                      {item.basic.keyTraits.slice(0, 3).map((trait: string, i: number) => (
                        <Badge 
                          key={i}
                          variant="secondary" 
                          className="bg-white/10 text-gray-300 border-white/20 text-xs px-2 py-1"
                        >
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10">
                {isPremiumUser || !hasPremium ? (
                  <Button 
                    variant="ghost" 
                    className="w-full text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                  >
                    ดูรายละเอียดเต็ม →
                  </Button>
                ) : (
                  <Button 
                    variant="outline"
                    className="w-full border-amber-500/50 text-amber-300 hover:bg-amber-500/10"
                    onClick={(e) => {
                      e.stopPropagation()
                      onUpgrade?.()
                    }}
                  >
                    <span className="mr-2">👑</span>
                    อัปเกรดเพื่อดู
                  </Button>
                )}
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

// ========== MAIN DASHBOARD COMPONENT ==========
export default function AppleDashboard({
  user,
  numerologyData,
  onCardClick,
  onUpgrade
}: DashboardProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <DashboardHeader user={user} />
      
      {/* Insight of the Day */}
      <InsightOfTheDayCard />
      
      {/* Quick Stats */}
      <QuickStatsCards data={numerologyData} />
      
      {/* Core Numbers Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-600 rounded-full" />
          <h2 className="text-2xl font-bold text-white">ตัวเลขสำคัญของคุณ</h2>
        </div>
        
        <NumerologyCardsGrid
          data={numerologyData}
          isPremiumUser={user?.unlocked || false}
          onCardClick={onCardClick}
          onUpgrade={onUpgrade}
        />
      </div>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: NumerologyIcons.love, label: 'ความรัก', color: '#EF4444' },
  
          { icon: NumerologyIcons.yantra, label: 'ยันต์', color: '#8B5CF6' },
          { icon: NumerologyIcons.aiChat, label: 'AI Chat', color: '#F59E0B' }
        ].map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className="h-20 flex-col gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
          >
            <action.icon size={24} color={action.color} />
            <span className="text-sm text-gray-300">{action.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
} 
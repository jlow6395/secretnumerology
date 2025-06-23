/**
 * Quick Action Cards Component
 * 
 * Features:
 * - Interactive action cards
 * - Custom icons for each feature
 * - Hover animations
 * - Premium indicators
 * - Touch-friendly design
 */

"use client"

import React from 'react'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { 
  Heart, 
  Phone, 
  BookOpen, 
  MessageCircle, 
  Sparkles, 
  TrendingUp,
  Users,
  Calendar,
  Star,
  Crown
} from 'lucide-react'

interface QuickAction {
  id: string
  title: string
  subtitle: string
  icon: React.ComponentType<{ size?: number; color?: string }>
  color: string
  bgGradient: string
  href: string
  isPremium?: boolean
  isNew?: boolean
  isPopular?: boolean
}

interface QuickActionCardsProps {
  isPremiumUser?: boolean
  onActionClick: (action: QuickAction) => void
  onUpgradeClick?: () => void
}

// ========== QUICK ACTIONS DATA ==========
const quickActions: QuickAction[] = [
  {
    id: 'love-compatibility',
    title: 'ความรักและความเข้ากัน',
    subtitle: 'ดูความเข้ากันได้ในความรัก',
    icon: ({ size = 24, color = '#EF4444' }) => <NumerologyIcons.love size={size} color={color} />,
    color: '#EF4444',
    bgGradient: 'from-red-500/20 to-pink-500/20',
    href: '/dashboard/compatibility',
    isPopular: true
  },
  {
    id: 'lucky-phone',
    title: 'เบอร์โทรมงคล',
    subtitle: 'หาเบอร์โทรที่เหมาะกับคุณ',
    icon: ({ size = 24, color = '#10B981' }) => <NumerologyIcons.phone size={size} color={color} />,
    color: '#10B981',
    bgGradient: 'from-green-500/20 to-emerald-500/20',
    href: '/dashboard/lucky-phone'
  },
  {
    id: 'ai-chat',
    title: 'AI ปรึกษาเลขศาสตร์',
    subtitle: 'คำแนะนำส่วนตัวจาก AI',
    icon: ({ size = 24, color = '#F59E0B' }) => <NumerologyIcons.aiChat size={size} color={color} />,
    color: '#F59E0B',
    bgGradient: 'from-amber-500/20 to-yellow-500/20',
    href: '/dashboard/ai-chat',
    isNew: true
  },
  {
    id: 'yantra',
    title: 'ยันต์และเครื่องรางมงคล',
    subtitle: 'ยันต์ที่เหมาะกับคุณ',
    icon: ({ size = 24, color = '#8B5CF6' }) => <NumerologyIcons.yantra size={size} color={color} />,
    color: '#8B5CF6',
    bgGradient: 'from-purple-500/20 to-indigo-500/20',
    href: '/dashboard/yantra',
    isPremium: true
  },
  {
    id: 'life-cycles',
    title: 'วงจรชีวิตและช่วงเวลา',
    subtitle: 'ช่วงเวลาสำคัญในชีวิต',
    icon: ({ size = 24, color = '#3B82F6' }) => <TrendingUp size={size} color={color} />,
    color: '#3B82F6',
    bgGradient: 'from-blue-500/20 to-cyan-500/20',
    href: '/dashboard/life-cycles',
    isPremium: true
  },
  {
    id: 'angel-numbers',
    title: 'เลขทูตสวรรค์',
    subtitle: 'ความหมายของเลขที่พบเจอ',
    icon: ({ size = 24, color = '#EC4899' }) => <Sparkles size={size} color={color} />,
    color: '#EC4899',
    bgGradient: 'from-pink-500/20 to-rose-500/20',
    href: '/dashboard/angel-numbers'
  },
  {
    id: 'reports',
    title: 'รายงานเต็มรูปแบบ',
    subtitle: 'ดาวน์โหลดรายงานส่วนตัว',
    icon: ({ size = 24, color = '#6366F1' }) => <BookOpen size={size} color={color} />,
    color: '#6366F1',
    bgGradient: 'from-indigo-500/20 to-purple-500/20',
    href: '/dashboard/reports',
    isPremium: true
  },
  {
    id: 'monk-support',
    title: 'ปรึกษาพระอาจารย์',
    subtitle: 'คำแนะนำจากพระอาจารย์',
    icon: ({ size = 24, color = '#F97316' }) => <NumerologyIcons.lotus size={size} color={color} />,
    color: '#F97316',
    bgGradient: 'from-orange-500/20 to-red-500/20',
    href: '/dashboard/monk-support',
    isPremium: true
  }
]

// ========== ACTION CARD COMPONENT ==========
const ActionCard: React.FC<{
  action: QuickAction
  isPremiumUser: boolean
  onClick: () => void
  onUpgradeClick?: () => void
}> = ({ action, isPremiumUser, onClick, onUpgradeClick }) => {
  const isLocked = action.isPremium && !isPremiumUser

  const handleClick = () => {
    if (isLocked) {
      onUpgradeClick?.()
    } else {
      onClick()
    }
  }

  return (
    <Card 
      className={`
        relative overflow-hidden bg-black/20 backdrop-blur-xl border border-white/10 p-6
        hover:border-white/20 transition-all duration-300 cursor-pointer group
        ${isLocked ? 'hover:border-amber-500/50' : ''}
      `}
      onClick={handleClick}
    >
      {/* Background Gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${action.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      
      {/* Badges */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        {action.isNew && (
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
            ✨ ใหม่
          </Badge>
        )}
        {action.isPopular && (
          <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs">
            🔥 ยอดนิยม
          </Badge>
        )}
        {action.isPremium && (
          <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs">
            👑 Premium
          </Badge>
        )}
      </div>

      {/* Lock Overlay for Premium Content */}
      {isLocked && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center">
            <Crown className="w-12 h-12 text-amber-400 mx-auto mb-3" />
            <p className="text-amber-300 font-medium text-sm">อัปเกรดเพื่อใช้งาน</p>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className={`relative ${isLocked && !isPremiumUser ? 'filter blur-sm group-hover:blur-none' : ''}`}>
        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <div 
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{
              boxShadow: `0 10px 30px ${action.color}20`
            }}
          >
            <action.icon size={32} color={action.color} />
          </div>
        </div>
        
        {/* Title & Subtitle */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
            {action.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {action.subtitle}
          </p>
        </div>
        
        {/* Action Button */}
        <div className="mt-6">
          <Button 
            variant="ghost" 
            className={`
              w-full transition-all duration-300
              ${isLocked 
                ? 'text-amber-300 hover:text-amber-200 hover:bg-amber-500/10' 
                : 'text-gray-300 hover:text-white hover:bg-white/10'
              }
            `}
          >
            {isLocked ? 'อัปเกรดเพื่อใช้งาน' : 'เริ่มใช้งาน'} →
          </Button>
        </div>
      </div>
    </Card>
  )
}

// ========== MAIN COMPONENT ==========
export const QuickActionCards: React.FC<QuickActionCardsProps> = ({
  isPremiumUser = false,
  onActionClick,
  onUpgradeClick
}) => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-yellow-500 rounded-full" />
          <h2 className="text-2xl font-bold text-white">เครื่องมือหลัก</h2>
        </div>
        
        {!isPremiumUser && (
          <Button 
            onClick={onUpgradeClick}
            variant="outline"
            className="border-amber-500/50 text-amber-300 hover:bg-amber-500/10"
          >
            <Crown className="w-4 h-4 mr-2" />
            ดูทั้งหมด
          </Button>
        )}
      </div>
      
      {/* Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action) => (
          <ActionCard
            key={action.id}
            action={action}
            isPremiumUser={isPremiumUser}
            onClick={() => onActionClick(action)}
            onUpgradeClick={onUpgradeClick}
          />
        ))}
      </div>
      
      {/* Premium CTA */}
      {!isPremiumUser && (
        <Card className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Crown className="w-12 h-12 text-amber-400" />
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-1">ปลดล็อกเครื่องมือทั้งหมด</h3>
              <p className="text-gray-300 text-sm">เข้าถึงฟีเจอร์พรีเมียมทั้งหมด ไม่จำกัดการใช้งาน</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-2">
                <NumerologyIcons.yantra size={24} color="#8B5CF6" />
              </div>
              <p className="text-sm text-gray-300">ยันต์มงคล</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
                <TrendingUp size={24} color="#3B82F6" />
              </div>
              <p className="text-sm text-gray-300">วงจรชีวิต</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-2">
                <BookOpen size={24} color="#6366F1" />
              </div>
              <p className="text-sm text-gray-300">รายงานเต็ม</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-2">
                <NumerologyIcons.lotus size={24} color="#F97316" />
              </div>
              <p className="text-sm text-gray-300">ปรึกษาพระ</p>
            </div>
          </div>
          
          <Button 
            onClick={onUpgradeClick}
            className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold px-8 py-3 rounded-full"
          >
            <Crown className="w-5 h-5 mr-2" />
            อัปเกรดเป็น Premium
          </Button>
        </Card>
      )}
    </div>
  )
}

export default QuickActionCards 
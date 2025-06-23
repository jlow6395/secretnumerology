/**
 * Dashboard Header Component
 * 
 * Features:
 * - User avatar with premium indicator
 * - Greeting message
 * - Settings button
 * - Profile menu dropdown
 * - Premium badge
 */

"use client"

import React, { useState } from 'react'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { User, Settings, Crown, LogOut, CreditCard, Bell } from 'lucide-react'

interface DashboardHeaderProps {
  user: {
    full_name: string
    unlocked?: boolean
    date_of_birth?: string
    email?: string
    profile_image?: string
  }
  onProfileClick?: () => void
  onSettingsClick?: () => void
  onUpgradeClick?: () => void
  onLogoutClick?: () => void
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

// ========== NOTIFICATION BELL ==========
const NotificationBell = () => {
  const [hasNotifications, setHasNotifications] = useState(true)
  
  return (
    <Button 
      variant="ghost"
      size="icon"
      className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 relative"
    >
      <Bell size={20} color="#FFFFFF" />
      {hasNotifications && (
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
          <span className="text-xs font-bold text-white">3</span>
        </div>
      )}
    </Button>
  )
}

// ========== MAIN HEADER COMPONENT ==========
export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  user,
  onProfileClick,
  onSettingsClick,
  onUpgradeClick,
  onLogoutClick
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  
  const getGreeting = () => {
    const hour = new Date().getHours()
    const firstName = user?.full_name?.split(' ')[0] || 'ผู้ใช้'
    
    if (hour < 12) return `สวัสดีตอนเช้า, ${firstName} 🌅`
    if (hour < 17) return `สวัสดีตอนบ่าย, ${firstName} ☀️`
    return `สวัสดีตอนเย็น, ${firstName} 🌙`
  }

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        {/* Avatar with Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
              <div className="relative cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center overflow-hidden border-2 border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-300">
                  {user?.profile_image ? (
                    <img 
                      src={user.profile_image} 
                      alt={user.full_name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <NumerologyIcons.profile size={32} color="#FFFFFF" />
                  )}
                </div>
                {user?.unlocked && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center border-2 border-black">
                    <Crown size={12} className="text-black" />
                  </div>
                )}
              </div>
            </Button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent 
            align="start" 
            className="w-64 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-2"
          >
            <DropdownMenuLabel className="px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <NumerologyIcons.profile size={20} color="#FFFFFF" />
                </div>
                <div>
                  <p className="font-semibold text-white">{user?.full_name}</p>
                  <p className="text-sm text-gray-400">{user?.email}</p>
                </div>
              </div>
            </DropdownMenuLabel>
            
            <DropdownMenuSeparator className="bg-white/10" />
            
            <DropdownMenuItem 
              onClick={onProfileClick}
              className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-xl cursor-pointer"
            >
              <User size={16} />
              <span>โปรไฟล์ของฉัน</span>
            </DropdownMenuItem>
            
            <DropdownMenuItem 
              onClick={onSettingsClick}
              className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-xl cursor-pointer"
            >
              <Settings size={16} />
              <span>การตั้งค่า</span>
            </DropdownMenuItem>
            
            {!user?.unlocked && (
              <DropdownMenuItem 
                onClick={onUpgradeClick}
                className="flex items-center gap-3 px-4 py-3 text-amber-400 hover:bg-amber-500/10 rounded-xl cursor-pointer"
              >
                <Crown size={16} />
                <span>อัปเกรดเป็น Premium</span>
              </DropdownMenuItem>
            )}
            
            <DropdownMenuSeparator className="bg-white/10" />
            
            <DropdownMenuItem 
              onClick={onLogoutClick}
              className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl cursor-pointer"
            >
              <LogOut size={16} />
              <span>ออกจากระบบ</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* User Info */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            {getGreeting()}
          </h1>
          <div className="flex items-center gap-3">
            <PremiumBadge isPremium={user?.unlocked || false} />
            <span className="text-gray-400 text-sm">
              สมาชิกตั้งแต่ 2024
            </span>
            {user?.unlocked && (
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                ✨ ใช้งานไม่จำกัด
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <NotificationBell />
        
        {/* Quick Settings */}
        <Button 
          variant="ghost"
          size="icon"
          onClick={onSettingsClick}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300"
        >
          <NumerologyIcons.settings size={24} color="#FFFFFF" />
        </Button>
        
        {/* Upgrade Button for Free Users */}
        {!user?.unlocked && (
          <Button 
            onClick={onUpgradeClick}
            className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold px-6 py-3 rounded-full"
          >
            <Crown size={16} className="mr-2" />
            อัปเกรด
          </Button>
        )}
      </div>
    </div>
  )
}

// ========== WELCOME CARD FOR NEW USERS ==========
export const WelcomeCard = ({ 
  userName, 
  onGetStarted 
}: { 
  userName: string
  onGetStarted: () => void 
}) => (
  <Card className="relative overflow-hidden bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 p-8 mb-8">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600" />
    </div>
    
    {/* Content */}
    <div className="relative text-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
        <NumerologyIcons.lotus size={40} color="#FFFFFF" />
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-3">
        ยินดีต้อนรับสู่ Secret Numerology! 🎉
      </h2>
      
      <p className="text-gray-300 mb-6 max-w-md mx-auto">
        {userName}, เริ่มต้นการเดินทางสู่การค้นพบตัวตนที่แท้จริงของคุณผ่านเลขศาสตร์โบราณ
      </p>
      
      <Button 
        onClick={onGetStarted}
        className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full"
      >
        เริ่มต้นเลย →
      </Button>
    </div>
  </Card>
)

export default DashboardHeader

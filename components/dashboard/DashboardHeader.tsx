"use client"

import { Bell, Settings, User, ChevronDown } from "lucide-react"
import Breadcrumb from "@/components/navigation/Breadcrumb"
import { useState } from "react"
import ProfileSettingsModal from "../profile/ProfileSettingsModal"

interface DashboardHeaderProps {
  title?: string
  subtitle?: string
  userName?: string
  className?: string
  profiles?: Array<{ id: string; name: string; avatar?: string }>
  activeProfileId?: string
  onProfileChange?: (profileId: string) => void
}

export default function DashboardHeader({
  title = "สวัสดี, สมชาย โจดี",
  subtitle = "ค้นพบความลับในตัวเลขของคุณวันนี้",
  userName = "สมชาย โจดี",
  className = "",
  profiles,
  activeProfileId,
  onProfileChange,
}: DashboardHeaderProps) {
  const [showProfileSettings, setShowProfileSettings] = useState(false)

  return (
    <div className={`bg-[#0a0a0a] ${className}`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 lg:px-6 py-3 border-b border-white/10">
        <Breadcrumb className="text-white/80" />

        <div className="flex items-center space-x-2 lg:space-x-4">
          <button className="relative p-2 text-white/80 hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-[#ff8c00] rounded-full animate-pulse" />
          </button>

          <button className="p-2 text-white/80 hover:text-white transition-colors">
            <Settings className="h-5 w-5" />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowProfileSettings(true)}
              className="flex items-center space-x-2 text-white hover:bg-white/10 rounded-lg px-2 lg:px-3 py-2 transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium hidden sm:block">{userName}</span>
              <ChevronDown className="h-4 w-4 opacity-70" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 lg:px-6 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">{title}</h1>
            <p className="text-white/80 text-base lg:text-lg">{subtitle}</p>
          </div>

          <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-medium hover:bg-white/30 transition-all text-sm lg:text-base">
            ดูรายงานเต็มรูปแบบ
          </button>
        </div>
      </div>

      {/* Profile Settings Modal */}
      {showProfileSettings && (
        <ProfileSettingsModal
          isOpen={showProfileSettings}
          onClose={() => setShowProfileSettings(false)}
          profiles={profiles || []}
          activeProfileId={activeProfileId || ""}
          onProfileChange={onProfileChange || (() => {})}
          onAddProfile={() => {}}
          onEditProfile={() => {}}
          onDeleteProfile={() => {}}
        />
      )}
    </div>
  )
}

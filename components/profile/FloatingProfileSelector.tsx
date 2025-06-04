"use client"

import { useState } from "react"
import { Plus, User, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Profile {
  id: string
  name: string
  avatar?: string
  birthDate: string
  isActive: boolean
}

interface FloatingProfileSelectorProps {
  profiles: Profile[]
  activeProfileId: string
  onProfileChange: (profileId: string) => void
  onAddProfile: () => void
  className?: string
}

export default function FloatingProfileSelector({
  profiles,
  activeProfileId,
  onProfileChange,
  onAddProfile,
  className = "",
}: FloatingProfileSelectorProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const activeProfile = profiles.find((p) => p.id === activeProfileId)

  return (
    <div className={cn("fixed top-4 left-1/2 transform -translate-x-1/2 z-50", className)}>
      {/* Compact View */}
      {!isExpanded && (
        <div
          onClick={() => setIsExpanded(true)}
          className="bg-[#1a1a1a]/95 backdrop-blur-md border border-[#2A2A2A] rounded-full px-4 py-2 cursor-pointer hover:border-[#3A3A3A] transition-all duration-300 shadow-lg"
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-medium">
                {activeProfile?.avatar ? (
                  <img
                    src={activeProfile.avatar || "/placeholder.svg"}
                    alt={activeProfile.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User className="w-4 h-4" />
                )}
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1a]" />
            </div>
            <span className="text-white text-sm font-medium">{activeProfile?.name || "เลือกโปรไฟล์"}</span>
            <div className="text-gray-400 text-xs">▼</div>
          </div>
        </div>
      )}

      {/* Expanded View */}
      {isExpanded && (
        <div className="bg-[#1a1a1a]/95 backdrop-blur-md border border-[#2A2A2A] rounded-2xl p-4 shadow-xl min-w-[320px] max-w-[90vw]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-medium">เลือกโปรไฟล์</h3>
            <button onClick={() => setIsExpanded(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Profile List - Horizontal Scroll */}
          <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
            {profiles.map((profile) => (
              <ProfileItem
                key={profile.id}
                profile={profile}
                isActive={profile.id === activeProfileId}
                onClick={() => {
                  onProfileChange(profile.id)
                  setIsExpanded(false)
                }}
              />
            ))}

            {/* Add Profile Button */}
            <button
              onClick={() => {
                onAddProfile()
                setIsExpanded(false)
              }}
              className="flex-shrink-0 w-16 h-20 bg-[#2A2A2A] border-2 border-dashed border-[#3A3A3A] rounded-xl flex flex-col items-center justify-center hover:border-purple-500 hover:bg-[#3A3A3A] transition-all duration-300 group"
            >
              <Plus className="w-6 h-6 text-gray-400 group-hover:text-purple-500 transition-colors" />
              <span className="text-xs text-gray-400 group-hover:text-purple-500 mt-1">เพิ่ม</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// Profile Item Component
function ProfileItem({
  profile,
  isActive,
  onClick,
}: {
  profile: Profile
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-shrink-0 w-16 h-20 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center p-2",
        isActive
          ? "border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/25"
          : "border-[#3A3A3A] bg-[#2A2A2A] hover:border-[#4A4A4A] hover:bg-[#3A3A3A]",
      )}
    >
      {/* Avatar */}
      <div className="relative mb-1">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium",
            isActive ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gradient-to-r from-gray-600 to-gray-500",
          )}
        >
          {profile.avatar ? (
            <img
              src={profile.avatar || "/placeholder.svg"}
              alt={profile.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <User className="w-4 h-4" />
          )}
        </div>
        {isActive && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1a]" />
        )}
      </div>

      {/* Name */}
      <span
        className={cn("text-xs font-medium truncate w-full text-center", isActive ? "text-white" : "text-gray-400")}
      >
        {profile.name}
      </span>
    </button>
  )
}

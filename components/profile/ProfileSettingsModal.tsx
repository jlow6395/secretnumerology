"use client"
import { X, Plus, Edit, Trash2, User, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface Profile {
  id: string
  name: string
  avatar?: string
  birthDate: string
  isActive: boolean
}

interface ProfileSettingsModalProps {
  isOpen: boolean
  onClose: () => void
  profiles: Profile[]
  activeProfileId: string
  onProfileChange: (profileId: string) => void
  onAddProfile: () => void
  onEditProfile: (profileId: string) => void
  onDeleteProfile: (profileId: string) => void
}

export default function ProfileSettingsModal({
  isOpen,
  onClose,
  profiles,
  activeProfileId,
  onProfileChange,
  onAddProfile,
  onEditProfile,
  onDeleteProfile,
}: ProfileSettingsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-[#1a1a1a] border border-[#2A2A2A] rounded-2xl p-6 w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-purple-500" />
            <h2 className="text-xl font-semibold text-white">จัดการโปรไฟล์</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile List */}
        <div className="space-y-3 mb-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className={cn(
                "flex items-center justify-between p-4 rounded-xl border transition-all",
                profile.id === activeProfileId
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-[#2A2A2A] bg-[#0f0f0f] hover:border-[#3A3A3A]",
              )}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    {profile.avatar ? (
                      <img
                        src={profile.avatar || "/placeholder.svg"}
                        alt={profile.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-5 h-5 text-white" />
                    )}
                  </div>
                  {profile.id === activeProfileId && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1a]" />
                  )}
                </div>
                <div>
                  <h3 className="text-white font-medium">{profile.name}</h3>
                  <p className="text-gray-400 text-sm">{profile.birthDate}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {profile.id !== activeProfileId && (
                  <button
                    onClick={() => onProfileChange(profile.id)}
                    className="text-purple-500 hover:text-purple-400 text-sm font-medium"
                  >
                    เลือก
                  </button>
                )}
                <button
                  onClick={() => onEditProfile(profile.id)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                {profiles.length > 1 && (
                  <button
                    onClick={() => onDeleteProfile(profile.id)}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Profile Button */}
        <button
          onClick={onAddProfile}
          className="w-full flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-[#3A3A3A] rounded-xl text-gray-400 hover:border-purple-500 hover:text-purple-500 transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>เพิ่มโปรไฟล์ใหม่</span>
        </button>
      </div>
    </div>
  )
}

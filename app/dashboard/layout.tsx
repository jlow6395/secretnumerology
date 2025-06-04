"use client"

import type React from "react"
import { useState } from "react"
import UnifiedSidebar from "@/components/navigation/UnifiedSidebar"
import UnifiedMobileNav from "@/components/navigation/UnifiedMobileNav"
import AddProfileModal from "@/components/profile/AddProfileModal"
import { useProfiles } from "@/hooks/useProfiles"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { profiles, activeProfile, activeProfileId, switchProfile, addProfile } = useProfiles()
  const [showAddModal, setShowAddModal] = useState(false)

  const handleAddProfile = () => {
    setShowAddModal(true)
  }

  const handleProfileAdd = (newProfile: { name: string; birthDate: string; avatar?: string }) => {
    addProfile(newProfile)
  }

  return (
    <div className="h-screen w-screen bg-[#0a0a0a] flex overflow-hidden">
      {/* Desktop Sidebar - เฉพาะที่นี่ */}
      <div className="hidden lg:flex w-64 flex-shrink-0">
        <UnifiedSidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#0a0a0a]">{children}</main>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <UnifiedMobileNav />
      </div>

      {/* Add Profile Modal */}
      <AddProfileModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} onAdd={handleProfileAdd} />
    </div>
  )
}

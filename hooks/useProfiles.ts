"use client"

import { useState } from "react"

interface Profile {
  id: string
  name: string
  avatar?: string
  birthDate: string
  isActive: boolean
}

export function useProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([
    {
      id: "1",
      name: "สมชาย โจดี",
      avatar: "/images/avatar.png",
      birthDate: "1990-05-15",
      isActive: true,
    },
    {
      id: "2",
      name: "แม่",
      birthDate: "1965-03-20",
      isActive: false,
    },
    {
      id: "3",
      name: "พ่อ",
      birthDate: "1960-08-10",
      isActive: false,
    },
  ])

  const [activeProfileId, setActiveProfileId] = useState("1")

  const activeProfile = profiles.find((p) => p.id === activeProfileId)

  const switchProfile = (profileId: string) => {
    setActiveProfileId(profileId)
    // Update active status
    setProfiles((prev) =>
      prev.map((p) => ({
        ...p,
        isActive: p.id === profileId,
      })),
    )
  }

  const addProfile = (newProfile: Omit<Profile, "id" | "isActive">) => {
    const id = Date.now().toString()
    const profile: Profile = {
      ...newProfile,
      id,
      isActive: false,
    }
    setProfiles((prev) => [...prev, profile])
    return id
  }

  const removeProfile = (profileId: string) => {
    if (profiles.length <= 1) return // Keep at least one profile

    setProfiles((prev) => prev.filter((p) => p.id !== profileId))

    // If removing active profile, switch to first remaining
    if (profileId === activeProfileId) {
      const remaining = profiles.filter((p) => p.id !== profileId)
      if (remaining.length > 0) {
        switchProfile(remaining[0].id)
      }
    }
  }

  const updateProfile = (profileId: string, updates: Partial<Profile>) => {
    setProfiles((prev) => prev.map((p) => (p.id === profileId ? { ...p, ...updates } : p)))
  }

  return {
    profiles,
    activeProfile,
    activeProfileId,
    switchProfile,
    addProfile,
    removeProfile,
    updateProfile,
  }
}

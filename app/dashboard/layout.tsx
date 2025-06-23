"use client"

import React from 'react'
import { AppleNavigation } from '@/components/navigation/AppleNavigation'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Apple Dark Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>
      
      {/* Main Content */}
      <main className="relative z-10 pb-24">
        {children}
      </main>
      
      {/* Apple Navigation */}
      <AppleNavigation />
    </div>
  )
}

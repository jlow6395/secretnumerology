"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Navigation from '@/components/Navigation'

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith("/dashboard")
  const isWizard = pathname?.startsWith("/wizard")

  // Dashboard Layout - ไม่มี header ที่นี่ เพราะจะมีใน dashboard layout
  if (isDashboard) {
    return (
      <main className="min-h-screen bg-black">
        {children}
      </main>
    )
  }

  // Wizard Layout - NO HEADER (บังคับ user flow)
  if (isWizard) {
    return (
      <main className="min-h-screen bg-black">
        {children}
      </main>
    )
  }

  // หน้าอื่นๆ ใช้ header จาก root layout โดยตรง
  return <>{children}</>
}

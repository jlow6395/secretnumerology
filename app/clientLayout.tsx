"use client"

import type React from "react"
import Link from "next/link"
import { ChevronDown, Moon } from "lucide-react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { usePathname } from "next/navigation"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith("/dashboard")
  const isWizard = pathname?.startsWith("/wizard")

  // Dashboard Layout - ไม่มี sidebar ที่นี่ เพราะจะมีใน dashboard layout
  if (isDashboard) {
    return (
      <html lang="th" suppressHydrationWarning>
        <body className={`${inter.className} m-0 p-0`}>
          <ThemeProvider defaultTheme="dark" storageKey="numerology-theme">
            {/* Dashboard จะจัดการ layout เอง */}
            {children}
          </ThemeProvider>
        </body>
      </html>
    )
  }

  // Wizard Layout - NO HEADER (บังคับ user flow)
  if (isWizard) {
    return (
      <html lang="th" suppressHydrationWarning>
        <body className={`${inter.className} bg-black min-h-screen`}>
          <ThemeProvider defaultTheme="dark" storageKey="numerology-theme">
            {/* ไม่มี header - บังคับให้ทำ wizard ให้เสร็จ */}
            <main className="min-h-screen bg-black">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    )
  }

  // Landing Page และหน้าอื่นๆ - มี header
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="numerology-theme">
          <header className="border-b border-gray-800 bg-black">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
              <div className="flex items-center space-x-2">
                <Link href="/" className="text-xl sm:text-2xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    SecretNumerology
                  </span>
                </Link>
              </div>

              <nav className="hidden space-x-4 md:flex">
                <div className="group relative">
                  <button className="flex items-center space-x-1 px-3 py-2 text-white hover:text-purple-300">
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>

                <div className="group relative">
                  <button className="flex items-center space-x-1 px-3 py-2 text-white hover:text-purple-300">
                    <span>โหราศาสตร์อินเดีย</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>

                <div className="group relative">
                  <button className="flex items-center space-x-1 px-3 py-2 text-white hover:text-purple-300">
                    <span>รายงาน</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>

                <div className="group relative">
                  <button className="flex items-center space-x-1 px-3 py-2 text-white hover:text-purple-300">
                    <span>เลขศาสตร์</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>

                <Link href="/blog" className="px-3 py-2 text-white hover:text-purple-300">
                  บล็อก
                </Link>

                <Link href="/dashboard" className="px-3 py-2 text-white hover:text-purple-300">
                  แดชบอร์ด
                </Link>
              </nav>

              <div className="flex items-center space-x-2">
                <button className="rounded-md bg-blue-600 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-blue-700">
                  ปรึกษาโหร
                </button>

                <button className="rounded-full p-1 text-white hover:bg-gray-800">
                  <Moon className="h-5 w-5" />
                </button>

                <div className="relative hidden sm:block">
                  <button className="flex items-center space-x-1 text-white hover:text-purple-300">
                    <span>ไทย</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

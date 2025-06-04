"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calculator, Phone, User, Star, FileText, Crown, MessageCircle, Shield, BookOpen } from "lucide-react"
import { ThemeToggle } from "../theme-toggle"

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", icon: Home, label: "Home" },
    { href: "/dashboard/my-numbers", icon: Calculator, label: "My Numbers" },
    { href: "/dashboard/lucky-phone", icon: Phone, label: "Lucky Phone" },
    { href: "/dashboard/monk-guidance", icon: User, label: "Monk Guidance" },
    { href: "/dashboard/angel-numbers", icon: Star, label: "Angel Numbers" },
    { href: "/dashboard/yantra", icon: Shield, label: "ยันต์หนุนดวง" },
    { href: "/dashboard/my-reports", icon: FileText, label: "My Reports" },
    { href: "/dashboard/blog", icon: BookOpen, label: "Blog" },
    { href: "/dashboard/upgrade", icon: Crown, label: "Upgrade Plan" },
    { href: "/dashboard/contact", icon: MessageCircle, label: "Contact" },
  ]

  return (
    <div className="fixed left-0 top-0 z-30 h-full w-64 border-r bg-card">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <span className="text-xl font-bold">SecretNumerology</span>
        </div>
        <ThemeToggle />
      </div>

      <div className="mt-6 px-3">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 rounded-lg px-4 py-3 transition-all ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="absolute bottom-8 left-0 w-full px-6">
        <div className="rounded-lg bg-secondary p-4">
          <p className="text-sm text-secondary-foreground">"ตัวเลขเป็นภาษาสากลที่เชื่อมโยงเราเข้ากับจักรวาล"</p>
        </div>
      </div>
    </div>
  )
}

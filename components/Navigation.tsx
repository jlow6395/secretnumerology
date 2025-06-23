"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/lib/AuthContext"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Home,
  User,
  Star,
  FileText,
  MessageSquare,
  LifeBuoy,
  LogOut,
  Settings,
  Heart,
  Briefcase,
  Users,
  Menu,
  X,
  Sparkles,
  Crown,
  Shield
} from "lucide-react"
import { Skeleton } from "./ui/skeleton"
import { toast } from 'sonner'

const mainNavItems = [
  { href: "/dashboard", label: "ภาพรวม", icon: Home },
  { href: "/dashboard/my-numbers", label: "ตัวเลขของฉัน", icon: User },
  { href: "/dashboard/compatibility", label: "ความเข้ากัน", icon: Heart },
  { href: "/dashboard/reports", label: "รายงาน", icon: FileText },
  { href: "/dashboard/ai-chat", label: "AI Chat", icon: MessageSquare },
]

const secondaryNavItems = [
  { href: "/dashboard/profile", label: "โปรไฟล์", icon: Settings },
  { href: "/help", label: "ความช่วยเหลือ", icon: LifeBuoy },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    try {
      await logout()
      toast.success('ออกจากระบบสำเร็จ')
      router.push('/')
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการออกจากระบบ')
    }
  }

  if (isLoading) {
    return (
      <aside className="w-64 flex-col border-r bg-background p-4 hidden lg:flex">
        <div className="flex items-center gap-2 p-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
            </div>
        </div>
        <nav className="mt-6 flex flex-col gap-1">
            {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-9 w-full rounded-md" />)}
        </nav>
      </aside>
    )
  }

  return (
    <aside className="w-64 flex-col border-r bg-background p-4 hidden lg:flex">
      {/* Profile Section */}
      <Link href="/dashboard/profile">
        <div className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted">
          <Avatar className="h-10 w-10 border">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback>{(user?.name || user?.email || "U").charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="overflow-hidden">
            <p className="truncate font-semibold">{user?.name || user?.email}</p>
            <p className="truncate text-sm text-muted-foreground">ดูโปรไฟล์</p>
          </div>
        </div>
      </Link>
      
      {/* Main Navigation */}
      <nav className="mt-6 flex flex-col gap-1">
        {mainNavItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>

      {/* Footer Navigation */}
      <nav className="mt-auto flex flex-col gap-1">
        {secondaryNavItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        ))}
         <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            <LogOut className="h-4 w-4" />
            ออกจากระบบ
          </Button>
      </nav>
    </aside>
  )
}

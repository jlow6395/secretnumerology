"use client"

import type React from "react"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const pathname = usePathname()

  // Auto-generate breadcrumbs if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname?.split("/").filter(Boolean) || []
    const breadcrumbs: BreadcrumbItem[] = [{ label: "หน้าหลัก", href: "/", icon: Home }]

    let currentPath = ""
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`

      // Map segments to Thai labels
      const labelMap: Record<string, string> = {
        dashboard: "แดชบอร์ด",
        "my-numbers": "เลขของฉัน",
        "numerology-formulas": "สูตรคำนวณ",
        "lucky-phone": "เบอร์มงคล",
        "monk-support": "พลังพระเกจิ",
        "angel-numbers": "Angel Numbers",
        yantra: "ยันต์หนุนดวง",
        compatibility: "ความเข้ากัน",
        "ai-chat": "ปรึกษา AI",
        "life-cycles": "วงจรชีวิต",
        reports: "รายงาน",
        blog: "บล็อก",
        love: "ความรัก",
        family: "ครอบครัว",
        work: "การงาน",
      }

      const label = labelMap[segment] || segment

      // Don't add href for the last item (current page)
      const href = index === segments.length - 1 ? undefined : currentPath

      breadcrumbs.push({ label, href })
    })

    return breadcrumbs
  }

  const breadcrumbItems = items || generateBreadcrumbs()

  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`}>
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400" />}

          {item.href ? (
            <Link
              href={item.href}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              <span>{item.label}</span>
            </Link>
          ) : (
            <div className="flex items-center space-x-1 text-white font-medium">
              {item.icon && <item.icon className="h-4 w-4" />}
              <span>{item.label}</span>
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

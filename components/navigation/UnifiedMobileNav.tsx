"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Home, Calculator, Heart, MoreHorizontal, X } from "lucide-react"
import { navigationConfig } from "@/config/navigation"

export default function UnifiedMobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const mainNavItems = [
    { id: "home", label: "หน้าหลัก", href: "/dashboard", icon: Home },
    { id: "numbers", label: "ตัวเลข", href: "/dashboard/my-numbers", icon: Calculator },
    { id: "love", label: "ความรัก", href: "/dashboard/compatibility", icon: Heart },
    { id: "more", label: "เพิ่มเติม", href: "#", icon: MoreHorizontal },
  ]

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard"
    }
    return pathname?.startsWith(href)
  }

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-[#1a1a1a] z-50">
        <div className="grid grid-cols-4 h-16">
          {mainNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === "more") {
                  setIsOpen(true)
                } else {
                  window.location.href = item.href
                }
              }}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                isActive(item.href) ? "text-[#ff8c00]" : "text-gray-400 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setIsOpen(false)}>
          <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a] rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[#1a1a1a]">
              <h3 className="text-lg font-bold text-white">เมนูทั้งหมด</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg bg-[#1a1a1a] text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 space-y-6">
              {navigationConfig.map((section) => (
                <div key={section.id}>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{section.title}</h4>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                          isActive(item.href)
                            ? "bg-[#1a1a1a] text-white border border-[#333333]"
                            : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
                        }`}
                      >
                        <item.icon className={`h-5 w-5 ${isActive(item.href) ? "text-[#ff8c00]" : ""}`} />
                        <span className="font-medium">{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

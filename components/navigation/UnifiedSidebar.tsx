"use client"

import type React from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { ChevronRight, ChevronLeft, Zap } from "lucide-react"
import { navigationConfig } from "@/config/navigation"
import type { NavItem } from "@/types/navigation"

interface UnifiedSidebarProps {
  className?: string
}

export default function UnifiedSidebar({ className = "" }: UnifiedSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const isActive = (item: NavItem) => {
    if (item.href === "/dashboard") {
      return pathname === "/dashboard"
    }
    return pathname?.startsWith(item.href)
  }

  const TooltipWrapper = ({
    children,
    content,
    show,
  }: {
    children: React.ReactNode
    content: string
    show: boolean
  }) => {
    if (!show) return <>{children}</>

    return (
      <div className="group/tooltip relative">
        {children}
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-[#1a1a1a] text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap border border-[#333333]">
            {content}
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#1a1a1a]" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`h-full w-full bg-[#0a0a0a] border-r border-[#1a1a1a] flex flex-col transition-all duration-300 ${className}`}
    >
      {/* Header */}
      <div className="flex h-16 items-center border-b border-[#1a1a1a] bg-[#0a0a0a] px-6 justify-between flex-shrink-0">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          {!collapsed && <span className="text-lg font-bold text-white">SecretNumerology</span>}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-lg bg-[#1a1a1a] p-2 text-gray-400 hover:bg-[#2a2a2a] hover:text-white transition-all"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation Content - Scrollable */}
      <div className="flex-1 overflow-y-auto py-4">
        {navigationConfig.map((section) => (
          <div key={section.id} className="mb-6">
            {/* Section Title */}
            {!collapsed && (
              <h3 className="px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
            )}

            {/* Section Items */}
            <nav className="space-y-1 px-3">
              {section.items.map((item) => {
                const active = isActive(item)
                return (
                  <TooltipWrapper key={item.id} content={item.label} show={collapsed}>
                    <a
                      href={item.href}
                      className={`group flex items-center rounded-lg transition-all duration-200 ${
                        collapsed ? "justify-center p-3" : "justify-between px-4 py-3"
                      } ${
                        active
                          ? "bg-[#1a1a1a] text-white border border-[#333333]"
                          : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
                      }`}
                    >
                      <div className={`flex items-center ${collapsed ? "" : "space-x-3"}`}>
                        <item.icon
                          className={`h-5 w-5 transition-colors ${
                            active ? "text-[#ff8c00]" : "group-hover:text-white"
                          }`}
                        />
                        {!collapsed && <span className="font-medium">{item.label}</span>}
                      </div>
                      {!collapsed && active && <div className="h-2 w-2 rounded-full bg-[#ff8c00]" />}
                    </a>
                  </TooltipWrapper>
                )
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* Bottom Section - Fixed */}
      <div className={`border-t border-[#1a1a1a] bg-[#0a0a0a] p-6 flex-shrink-0`}>
        {collapsed ? (
          <TooltipWrapper content="Upgrade Plan" show={true}>
            <button className="w-full rounded-lg bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] p-3 text-white transition-all hover:opacity-90 flex items-center justify-center">
              <Zap className="h-4 w-4" />
            </button>
          </TooltipWrapper>
        ) : (
          <button className="w-full rounded-lg bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] px-4 py-3 font-medium text-white transition-all hover:opacity-90">
            Upgrade Plan
          </button>
        )}
      </div>
    </div>
  )
}

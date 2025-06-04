"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, X, Calculator, TrendingUp, BookOpen, Search, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (itemId: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(itemId)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300)
  }

  const navigationItems = [
    {
      id: "calculator",
      label: "คำนวณเลขศาสตร์",
      icon: Calculator,
      href: "/calculator",
    },
    {
      id: "numerology",
      label: "เลขศาสตร์",
      icon: Sparkles,
      href: "/numerology",
      dropdown: [
        { label: "เลขชีวิต", href: "/numerology/life-path", description: "ค้นหาเส้นทางชีวิตของคุณ" },
        { label: "เลขแสดงออก", href: "/numerology/expression", description: "เปิดเผยความสามารถที่แท้จริง" },
        { label: "เลขดวงใจ", href: "/numerology/hearts-desire", description: "ความปรารถนาลึกในใจ" },
        { label: "เลขบุคลิกภาพ", href: "/numerology/personality", description: "บุคลิกภาพที่คนอื่นมองเห็น" },
        { label: "ความเข้ากัน", href: "/numerology/compatibility", description: "วิเคราะห์ความเข้ากันกับคนอื่น" },
        { label: "Angel Numbers", href: "/numerology/angel-numbers", description: "เลขนำโชคจากเทวดา" },
      ],
    },
    {
      id: "chinese-zodiac",
      label: "ปีนักษัตรจีน",
      icon: TrendingUp,
      href: "/chinese-zodiac",
    },
    {
      id: "blog",
      label: "บล็อก",
      icon: BookOpen,
      href: "/blog",
    },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-3xl border-b border-orange-500/20 shadow-2xl shadow-blue-900/50"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%)"
          : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Yin-Yang */}
          <a href="/" className="group flex items-center space-x-3 cursor-pointer">
            <div className="relative h-12 w-12 rounded-full overflow-hidden shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:shadow-orange-500/50 ring-2 ring-orange-500/30 group-hover:ring-orange-400/60">
              <Image
                src="/images/yin-yang-logo.png"
                alt="SecretNumerology Logo"
                width={48}
                height={48}
                className="object-cover group-hover:rotate-12 transition-transform duration-500"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col">
              <span
                className="text-xl font-bold bg-gradient-to-r from-slate-200 via-white to-slate-100 bg-clip-text text-transparent group-hover:from-amber-200 group-hover:via-yellow-100 group-hover:to-orange-200 transition-all duration-500 tracking-wide"
                style={{
                  fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                SecretNumerology
              </span>
              <span className="text-xs text-slate-400 group-hover:text-orange-300 transition-colors duration-300 font-medium -mt-1">
                เปิดเผยความลับแห่งตัวเลข
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className="relative group/nav"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.id)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <div
                  className="flex items-center space-x-1 text-slate-300 hover:text-white px-3 py-2 rounded-xl font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 hover:scale-105 active:scale-95 relative overflow-hidden group/item text-sm border border-transparent hover:border-orange-500/30"
                  onClick={() => {
                    if (item.dropdown) {
                      setActiveDropdown(activeDropdown === item.id ? null : item.id)
                    } else if (item.href) {
                      window.location.href = item.href
                    }
                  }}
                >
                  {/* Glow background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-amber-600/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl" />

                  <span className="relative z-10 group-hover/item:text-orange-200 transition-colors duration-300">
                    {item.label}
                  </span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`h-3 w-3 transition-all duration-300 relative z-10 ${
                        activeDropdown === item.id ? "rotate-180 text-orange-400" : "group-hover/item:text-orange-400"
                      }`}
                    />
                  )}
                </div>

                {/* Enhanced Dropdown Menu */}
                {item.dropdown && activeDropdown === item.id && (
                  <div
                    className="absolute top-full left-0 mt-2 w-80 backdrop-blur-3xl border border-orange-500/30 rounded-2xl shadow-2xl py-4 z-50 animate-in slide-in-from-top-2 duration-300"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%)",
                      boxShadow:
                        "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(249, 115, 22, 0.3), 0 0 20px rgba(249, 115, 22, 0.2)",
                    }}
                  >
                    {/* Dropdown Header */}
                    <div className="px-4 pb-3 border-b border-orange-500/20">
                      <h3 className="text-white font-semibold flex items-center space-x-2">
                        <item.icon className="h-4 w-4 text-orange-400" />
                        <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                          {item.label}
                        </span>
                      </h3>
                      <p className="text-slate-400 text-xs mt-1">เลือกหัวข้อที่สนใจ</p>
                    </div>

                    {/* Dropdown Items */}
                    <div className="px-2 pt-3">
                      {item.dropdown.map((dropdownItem, index) => (
                        <a
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-3 py-3 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300 rounded-xl mx-1 group/dropdown relative overflow-hidden border border-transparent hover:border-orange-500/30"
                          style={{
                            animationDelay: `${index * 50}ms`,
                          }}
                        >
                          {/* Item glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-red-600/5 to-amber-600/5 opacity-0 group-hover/dropdown:opacity-100 transition-opacity duration-300 rounded-xl" />

                          <div className="relative z-10">
                            <div className="font-semibold group-hover/dropdown:text-orange-300 transition-colors duration-300 flex items-center space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-60 group-hover/dropdown:opacity-100 transition-opacity duration-300" />
                              <span>{dropdownItem.label}</span>
                            </div>
                            <div className="text-xs text-slate-500 mt-1 group-hover/dropdown:text-slate-400 transition-colors duration-300 ml-3.5">
                              {dropdownItem.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Search Icon */}
            <button className="p-2 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 group border border-transparent hover:border-orange-500/30">
              <Search className="h-4 w-4 group-hover:text-orange-400 transition-colors duration-300" />
            </button>

            {/* Login/Dashboard Button */}
            <a
              href="/dashboard"
              className="group bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-orange-700 hover:via-red-700 hover:to-amber-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-600/50 active:scale-95 relative overflow-hidden text-sm border border-orange-500/30"
              style={{
                boxShadow: "0 4px 15px rgba(249, 115, 22, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-orange-100 transition-colors duration-300">เข้าสู่ระบบ</span>
            </a>

            {/* Language Selector */}
            <div className="text-slate-300 text-sm font-medium px-3 py-2 hover:text-orange-300 transition-colors duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 rounded-xl border border-transparent hover:border-orange-500/20">
              🇹🇭 ไทย
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 border border-transparent hover:border-orange-500/30"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden backdrop-blur-3xl border-t border-orange-500/20 shadow-2xl animate-in slide-in-from-top duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 58, 138, 0.98) 50%, rgba(15, 23, 42, 0.98) 100%)",
          }}
        >
          <div className="px-4 py-6 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.id}>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 py-3 px-3 rounded-xl font-medium transition-all duration-300 group border border-transparent hover:border-orange-500/30"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4 group-hover:text-orange-400 transition-colors duration-300" />
                  <span>{item.label}</span>
                </a>

                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className="ml-10 mt-2 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block text-slate-400 hover:text-orange-300 py-2 px-3 text-sm rounded-lg hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 transition-all duration-300 border border-transparent hover:border-orange-500/20"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-orange-500/20 space-y-3">
              <a
                href="/dashboard"
                className="block bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 rounded-xl font-semibold text-center hover:from-orange-700 hover:to-red-700 transition-all duration-300 border border-orange-500/30"
                onClick={() => setIsOpen(false)}
                style={{
                  boxShadow: "0 4px 15px rgba(249, 115, 22, 0.3)",
                }}
              >
                เข้าสู่ระบบ
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

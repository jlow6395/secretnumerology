"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calculator, Heart, Sparkles, ArrowRight, Star, ChevronRight, Play, BookOpen, TrendingUp, Zap, Crown, Phone, Shield, Calendar, FileText, MessageSquare } from 'lucide-react'
import MainNavigation from '@/components/MainNavigation'

// True Apple Design System - Premium Level
const appleDesign = {
  colors: {
    // Apple's True Black System
    background: {
      primary: '#000000',
      elevated: '#0a0a0a',
      surface: '#141414',
      overlay: 'rgba(0, 0, 0, 0.9)',
    },
    // Apple Blue - Exact Colors
    blue: {
      50: '#eff6ff',
      100: '#dbeafe', 
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',  // Apple's primary blue
      600: '#2563eb',  // Apple's interactive blue
      700: '#1d4ed8',  // Apple's deep blue
      800: '#1e40af',
      900: '#1e3a8a',
    },
    // Apple's Premium Gold
    gold: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a', 
      300: '#fcd34d',
      400: '#fbbf24',  // Apple's signature gold
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
    },
    // Apple's True White System
    white: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      tertiary: '#f3f4f6',
      quaternary: '#e5e7eb',
      muted: '#d1d5db',
      subtle: '#9ca3af',
      disabled: '#6b7280',
    },
    // True Apple Glassmorphism
    glass: {
      ultraLight: 'rgba(255, 255, 255, 0.02)',
      light: 'rgba(255, 255, 255, 0.05)',
      medium: 'rgba(255, 255, 255, 0.08)',
      strong: 'rgba(255, 255, 255, 0.12)',
      border: 'rgba(255, 255, 255, 0.08)',
      borderStrong: 'rgba(255, 255, 255, 0.15)',
    }
  },
  typography: {
    // Apple's Exact Font Stack
    display: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    text: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    weights: {
      ultralight: '100',
      thin: '200', 
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      heavy: '800',
      black: '900',
    },
    // Apple's Letter Spacing
    tracking: {
      tighter: '-0.05em',
      tight: '-0.025em', 
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
    }
  },
  shadows: {
    // Apple's Signature Shadows
    ambient: '0 0 0 1px rgba(255, 255, 255, 0.05)',
    small: '0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)',
    large: '0 8px 25px rgba(0, 0, 0, 0.5), 0 4px 10px rgba(0, 0, 0, 0.3)',
    xlarge: '0 20px 40px rgba(0, 0, 0, 0.6), 0 8px 16px rgba(0, 0, 0, 0.4)',
    // Apple's Glow Effects
    blueGlow: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)',
    goldGlow: '0 0 30px rgba(251, 191, 36, 0.4), 0 0 60px rgba(251, 191, 36, 0.2)',
    // Glassmorphism Shadows
    glass: '0 8px 32px rgba(0, 0, 0, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    glassStrong: '0 16px 68px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
  },
  blur: {
    // Apple's Backdrop Blur Values
    none: 'none',
    sm: 'blur(4px)',
    md: 'blur(8px)',
    lg: 'blur(12px)',
    xl: 'blur(16px)',
    '2xl': 'blur(24px)',
    '3xl': 'blur(40px)',
  },
  animations: {
    // Apple's Signature Easing
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    easeOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Apple's Timing
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
  }
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div 
      className="min-h-screen text-white overflow-hidden relative"
      style={{ 
        background: `
          radial-gradient(ellipse at top, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
          linear-gradient(180deg, ${appleDesign.colors.background.primary} 0%, ${appleDesign.colors.background.elevated} 100%)
        `
      }}
    >
      {/* Apple's Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{ 
            background: `radial-gradient(circle, ${appleDesign.colors.blue[500]} 0%, transparent 70%)`,
            filter: 'blur(60px)',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 animate-pulse"
          style={{ 
            background: `radial-gradient(circle, ${appleDesign.colors.gold[400]} 0%, transparent 70%)`,
            filter: 'blur(60px)',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Apple Navigation */}
      <AppleNavigation />

      {/* Hero Section */}
      <AppleHero />

      {/* Features Section */}
      <AppleFeatures />

      {/* CTA Section */}
      <AppleCTA />

      {/* Footer */}
      <AppleFooter />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .apple-glass {
          background: ${appleDesign.colors.glass.medium};
          border: 1px solid ${appleDesign.colors.glass.border};
          backdrop-filter: ${appleDesign.blur['2xl']};
          box-shadow: ${appleDesign.shadows.glass};
        }
        
        .apple-glass-strong {
          background: ${appleDesign.colors.glass.strong};
          border: 1px solid ${appleDesign.colors.glass.borderStrong};
          backdrop-filter: ${appleDesign.blur['3xl']};
          box-shadow: ${appleDesign.shadows.glassStrong};
        }
        
        .apple-button-primary {
          background: linear-gradient(135deg, ${appleDesign.colors.blue[600]} 0%, ${appleDesign.colors.blue[700]} 100%);
          box-shadow: ${appleDesign.shadows.blueGlow};
          transition: all ${appleDesign.animations.normal} ${appleDesign.animations.easeOut};
        }
        
        .apple-button-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: ${appleDesign.shadows.blueGlow}, ${appleDesign.shadows.large};
        }
        
        .apple-text-display {
          font-family: ${appleDesign.typography.display};
          font-weight: ${appleDesign.typography.weights.bold};
          letter-spacing: ${appleDesign.typography.tracking.tight};
        }
        
        .apple-text-body {
          font-family: ${appleDesign.typography.text};
          font-weight: ${appleDesign.typography.weights.regular};
          letter-spacing: ${appleDesign.typography.tracking.normal};
        }
      `}</style>
    </div>
  )
}

// Premium Apple Navigation
function AppleNavigation() {
  return <MainNavigation />
}

// Premium Apple Hero
function AppleHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Premium Badge */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div 
                className="apple-glass inline-flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-500 hover:scale-105 group"
              >
                <div 
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ 
                    background: `linear-gradient(135deg, ${appleDesign.colors.gold[400]} 0%, ${appleDesign.colors.gold[500]} 100%)`,
                    boxShadow: appleDesign.shadows.goldGlow
                  }}
                />
                <span 
                  className="apple-text-body text-sm font-medium transition-colors duration-300 group-hover:text-gold-400"
                  style={{ color: appleDesign.colors.gold[400] }}
                >
                  ค้นพบโชคชะตาของคุณ
                </span>
              </div>
            </div>

            {/* Hero Heading */}
            <h1 
              className="apple-text-display text-6xl lg:text-8xl leading-tight mb-8"
              style={{ 
                color: appleDesign.colors.white.primary,
                fontWeight: appleDesign.typography.weights.bold,
                letterSpacing: appleDesign.typography.tracking.tighter
              }}
            >
              ปลดล็อค
              <br />
              <span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                style={{
                  background: `linear-gradient(135deg, ${appleDesign.colors.blue[400]} 0%, #a855f7 50%, #06b6d4 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                ความลับเลขศาสตร์
              </span>
              <br />
              ในตัวคุณ
            </h1>

            {/* Premium Subtitle */}
            <p 
              className="apple-text-body text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl"
              style={{ 
                color: appleDesign.colors.white.tertiary,
                fontWeight: appleDesign.typography.weights.light
              }}
            >
              สำรวจสูตรเลขศาสตร์ศักดิ์สิทธิ์กว่า{" "}
              <span 
                className="apple-glass font-semibold px-4 py-2 rounded-lg border inline-flex items-center space-x-2"
                style={{ 
                  color: appleDesign.colors.gold[400],
                  border: `1px solid ${appleDesign.colors.gold[400]}30`
                }}
              >
                <Star className="h-4 w-4" />
                <span>17 สูตร</span>
              </span>{" "}
              และค้นพบพิมพ์เขียวชีวิตของคุณผ่านภูมิปัญญาโบราณและเทคโนโลยีสมัยใหม่
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/start">
                <Button 
                  className="apple-button-primary apple-text-body text-lg font-semibold px-8 py-4 rounded-2xl border-0 flex items-center space-x-3"
                  style={{ color: appleDesign.colors.white.primary }}
                >
                  <Sparkles className="h-5 w-5" />
                  <span>คำนวณเลขชีวิตฟรี</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/dashboard">
                <Button 
                  variant="outline"
                  className="apple-glass apple-text-body text-lg font-semibold px-8 py-4 rounded-2xl border-0 flex items-center space-x-3 transition-all duration-300 hover:scale-105"
                  style={{ color: appleDesign.colors.white.primary }}
                >
                  <Play className="h-5 w-5" />
                  <span>ดูตัวอย่างรายงาน</span>
                </Button>
              </Link>
            </div>

            {/* Premium Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-12">
              {[
                { value: "10K+", label: "ผู้ใช้ที่พึงพอใจ" },
                { value: "17+", label: "สูตรศักดิ์สิทธิ์" },
                { value: "15+", label: "ปีประสบการณ์" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div 
                    className="apple-text-display text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110"
                    style={{ fontWeight: appleDesign.typography.weights.heavy }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="apple-text-body text-sm"
                    style={{ 
                      color: appleDesign.colors.white.subtle,
                      fontWeight: appleDesign.typography.weights.medium
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Premium Form */}
          <div className="flex justify-center lg:justify-end">
            <AppleNumerologyForm />
          </div>
        </div>
      </div>
    </section>
  )
}

// Premium Apple Form
function AppleNumerologyForm() {
  const [name, setName] = useState("")
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")

  return (
    <div className="relative group">
      {/* Premium Glow Effect */}
      <div 
        className="absolute -inset-8 rounded-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-50"
        style={{ 
          background: `linear-gradient(135deg, ${appleDesign.colors.blue[600]} 0%, ${appleDesign.colors.gold[400]} 100%)`,
          filter: 'blur(40px)'
        }}
      />
      
      <div 
        className="apple-glass-strong relative p-10 rounded-3xl max-w-md w-full transition-all duration-500 hover:scale-105"
      >
        {/* Form Header */}
        <div className="text-center mb-8">
          <div 
            className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ 
              background: `linear-gradient(135deg, ${appleDesign.colors.blue[600]} 0%, ${appleDesign.colors.blue[700]} 100%)`,
              boxShadow: appleDesign.shadows.blueGlow
            }}
          >
            <Calculator className="h-10 w-10 text-white" />
          </div>
          <h3 
            className="apple-text-display text-3xl font-bold mb-3"
            style={{ 
              color: appleDesign.colors.white.primary,
              fontWeight: appleDesign.typography.weights.bold
            }}
          >
            ค้นพบตัวเลขแห่งชีวิต
          </h3>
          <p 
            className="apple-text-body"
            style={{ 
              color: appleDesign.colors.white.tertiary,
              fontWeight: appleDesign.typography.weights.light
            }}
          >
            กรอกข้อมูลเพื่อเริ่มการวิเคราะห์เลขศาสตร์แบบเจาะลึก
          </p>
        </div>

        {/* Premium Form Fields */}
        <div className="space-y-6">
          <div>
            <label 
              className="apple-text-body block text-sm font-medium mb-3"
              style={{ 
                color: appleDesign.colors.white.secondary,
                fontWeight: appleDesign.typography.weights.medium
              }}
            >
              ชื่อเต็ม
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ใส่ชื่อเต็มของคุณ"
              className="apple-glass w-full px-5 py-4 rounded-xl border-0 apple-text-body transition-all duration-300 focus:scale-105 focus:shadow-lg"
              style={{
                color: appleDesign.colors.white.primary,
                fontWeight: appleDesign.typography.weights.regular
              }}
            />
          </div>

          <div>
            <label 
              className="apple-text-body block text-sm font-medium mb-3"
              style={{ 
                color: appleDesign.colors.white.secondary,
                fontWeight: appleDesign.typography.weights.medium
              }}
            >
              วันเกิด
            </label>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: day, onChange: setDay, placeholder: "วัน", options: Array.from({ length: 31 }, (_, i) => i + 1) },
                { value: month, onChange: setMonth, placeholder: "เดือน", options: Array.from({ length: 12 }, (_, i) => i + 1) },
                { value: year, onChange: setYear, placeholder: "ปี", options: Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i) }
              ].map((field, index) => (
                <select
                  key={index}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="apple-glass px-4 py-4 rounded-xl border-0 apple-text-body transition-all duration-300 focus:scale-105"
                  style={{
                    color: appleDesign.colors.white.primary,
                    fontWeight: appleDesign.typography.weights.regular
                  }}
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Submit Button */}
        <Link href="/wizard/step1">
          <Button 
            className="apple-button-primary w-full mt-8 apple-text-body text-lg font-semibold py-5 rounded-2xl border-0 flex items-center justify-center space-x-3"
            style={{ color: appleDesign.colors.white.primary }}
          >
            <Sparkles className="h-6 w-6" />
            <span>เริ่มการวิเคราะห์</span>
            <ArrowRight className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

// Premium Apple Features
function AppleFeatures() {
  const features = [
    {
      icon: Star,
      title: "เลขชีวิตหลัก",
      description: "ค้นพบเส้นทางชีวิตและบุคลิกภาพที่แท้จริงของคุณผ่านการวิเคราะห์เชิงลึก",
      href: "/dashboard/my-numbers",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "ความเข้ากันได้",
      description: "วิเคราะห์ความสัมพันธ์ในงานและความรักด้วยอัลกอริทึมเลขศาสตร์ขั้นสูง",
      href: "/dashboard/compatibility",
      gradient: "from-rose-500 to-red-500",
    },
    {
      icon: Zap,
      title: "AI Chat",
      description: "ปรึกษาผู้เชี่ยวชาญเลขศาสตร์ด้วย AI ที่ผ่านการฝึกฝนจากภูมิปัญญาโบราณ",
      href: "/dashboard/ai-chat",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "โชคลาภโทรศัพท์",
      description: "เลือกเบอร์โทรศัพท์ที่เสริมดวงชะตาและเข้ากันกับเลขชีวิตของคุณ",
      href: "/dashboard/lucky-phone",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: BookOpen,
      title: "รายงานเชิงลึก",
      description: "รายงานเลขศาสตร์ครบครันทุกด้านของชีวิตพร้อมคำแนะนำการใช้ชีวิต",
      href: "/dashboard/reports",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Crown,
      title: "สมาชิกพรีเมียม",
      description: "ปลดล็อคฟีเจอร์พิเศษทั้งหมดและเข้าถึงการวิเคราะห์ระดับมืออาชีพ",
      href: "/pricing",
      gradient: "from-yellow-500 to-amber-500",
      isPremium: true
    },
  ]

  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <h2 
            className="apple-text-display text-5xl lg:text-6xl font-bold mb-8"
            style={{ 
              color: appleDesign.colors.white.primary,
              fontWeight: appleDesign.typography.weights.bold,
              letterSpacing: appleDesign.typography.tracking.tight
            }}
          >
            ฟีเจอร์เลขศาสตร์
            <span 
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-4"
              style={{
                background: `linear-gradient(135deg, ${appleDesign.colors.blue[400]} 0%, #a855f7 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              ครบครัน
            </span>
          </h2>
          <p 
            className="apple-text-body text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ 
              color: appleDesign.colors.white.tertiary,
              fontWeight: appleDesign.typography.weights.light
            }}
          >
            ค้นพบความลับของชีวิตผ่านเลขศาสตร์ด้วยเครื่องมือที่ครบครันและแม่นยำ
            พร้อมการวิเคราะห์แบบเจาะลึกจากผู้เชี่ยวชาญ
          </p>
        </div>

        {/* Premium Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AppleFeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Premium Apple Feature Card
function AppleFeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  href, 
  gradient,
  isPremium = false 
}: {
  icon: any
  title: string
  description: string
  href: string
  gradient: string
  isPremium?: boolean
}) {
  return (
    <Link href={href}>
      <div className="relative group cursor-pointer">
        <div 
          className="apple-glass-strong p-8 rounded-3xl transition-all duration-500 hover:scale-105 group"
        >
          {/* Premium Badge */}
          {isPremium && (
            <div className="absolute -top-3 -right-3">
              <div 
                className="px-4 py-2 rounded-full text-xs font-bold flex items-center space-x-2"
                style={{ 
                  background: `linear-gradient(135deg, ${appleDesign.colors.gold[400]} 0%, ${appleDesign.colors.gold[500]} 100%)`,
                  color: appleDesign.colors.background.primary,
                  boxShadow: appleDesign.shadows.goldGlow
                }}
              >
                <Crown className="h-3 w-3" />
                <span>Premium</span>
              </div>
            </div>
          )}
          
          {/* Premium Icon */}
          <div 
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
            style={{ boxShadow: appleDesign.shadows.medium }}
          >
            <Icon className="h-10 w-10 text-white" />
          </div>
          
          {/* Premium Content */}
          <h3 
            className="apple-text-display text-2xl font-bold mb-4"
            style={{ 
              color: appleDesign.colors.white.primary,
              fontWeight: appleDesign.typography.weights.bold
            }}
          >
            {title}
          </h3>
          
          <p 
            className="apple-text-body mb-6 leading-relaxed"
            style={{ 
              color: appleDesign.colors.white.tertiary,
              fontWeight: appleDesign.typography.weights.light
            }}
          >
            {description}
          </p>
          
          <div 
            className="apple-text-body flex items-center text-sm font-medium transition-all duration-300 group-hover:translate-x-2"
            style={{ color: appleDesign.colors.blue[400] }}
          >
            <span>เรียนรู้เพิ่มเติม</span>
            <ChevronRight className="h-4 w-4 ml-2" />
          </div>
        </div>
      </div>
    </Link>
  )
}

// Premium Apple CTA
function AppleCTA() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div 
          className="apple-glass-strong p-16 rounded-3xl transition-all duration-500 hover:scale-105"
        >
          <h2 
            className="apple-text-display text-5xl lg:text-6xl font-bold mb-8"
            style={{ 
              color: appleDesign.colors.white.primary,
              fontWeight: appleDesign.typography.weights.bold,
              letterSpacing: appleDesign.typography.tracking.tight
            }}
          >
            พร้อมเริ่มต้น
            <span 
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-4"
              style={{
                background: `linear-gradient(135deg, ${appleDesign.colors.blue[400]} 0%, #a855f7 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              การเดินทาง
            </span>
            <br />
            แล้วหรือยัง?
          </h2>
          
          <p 
            className="apple-text-body text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ 
              color: appleDesign.colors.white.tertiary,
              fontWeight: appleDesign.typography.weights.light
            }}
          >
            เข้าถึงการวิเคราะห์เลขศาสตร์แบบเต็มรูปแบบและค้นพบความลับที่ซ่อนอยู่ในตัวคุณ
            พร้อมคำแนะนำจากผู้เชี่ยวชาญ
          </p>
          
          <Link href="/start">
            <Button 
              className="apple-button-primary apple-text-body text-xl font-semibold px-12 py-6 rounded-2xl border-0 flex items-center space-x-4 mx-auto"
              style={{ color: appleDesign.colors.white.primary }}
            >
              <Sparkles className="h-6 w-6" />
              <span>เริ่มต้นเลย</span>
              <ArrowRight className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Premium Apple Footer
function AppleFooter() {
  return (
    <footer 
      className="py-16 px-6 lg:px-8 border-t"
      style={{
        background: appleDesign.colors.background.elevated,
        border: `1px solid ${appleDesign.colors.glass.border}`
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p 
          className="apple-text-body"
          style={{ 
            color: appleDesign.colors.white.subtle,
            fontWeight: appleDesign.typography.weights.light
          }}
        >
          © 2024 SecretNumerology. สงวนสิทธิ์ทุกประการ.
        </p>
      </div>
    </footer>
  )
}

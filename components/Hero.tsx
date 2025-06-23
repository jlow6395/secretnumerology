import { Sparkles, ArrowRight, Play, Star } from "lucide-react"
import Navigation from "./Navigation"
import NumerologyForm from "./NumerologyForm"

// Apple Dark Colors - Inline for now
const colors = {
  background: {
    primary: '#000000',
  },
  deepBlue: {
    400: '#38bdf8',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  golden: {
    primary: '#fbbf24',
    secondary: '#f59e0b',
  },
  text: {
    primary: '#ffffff',
    tertiary: '#d1d5db',
    quaternary: '#9ca3af',
  },
  glass: {
    primary: 'rgba(255, 255, 255, 0.03)',
    secondary: 'rgba(255, 255, 255, 0.05)',
    tertiary: 'rgba(255, 255, 255, 0.08)',
    border: 'rgba(255, 255, 255, 0.1)',
  },
  accent: {
    purple: '#8b5cf6',
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden"
             style={{ background: colors.background.primary }}>
      {/* Navigation */}
      <Navigation />

      {/* Apple-style Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle Deep Blue Overlays */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            background: `linear-gradient(135deg, 
              ${colors.deepBlue[900]}/20 0%, 
              transparent 50%, 
              ${colors.deepBlue[800]}/10 100%)`
          }}
        />

        {/* Elegant Floating Orbs with Apple Colors */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-10"
          style={{ 
            background: `radial-gradient(circle, ${colors.deepBlue[600]} 0%, transparent 70%)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 opacity-8"
          style={{ 
            background: `radial-gradient(circle, ${colors.golden.primary} 0%, transparent 70%)`
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse delay-500 opacity-6"
          style={{ 
            background: `radial-gradient(circle, ${colors.accent.purple} 0%, transparent 70%)`
          }}
        />

        {/* Refined Floating Particles */}
        <div 
          className="absolute top-20 left-10 h-1 w-1 rounded-full animate-pulse"
          style={{ backgroundColor: `${colors.golden.primary}60` }}
        />
        <div 
          className="absolute top-40 right-20 h-0.5 w-0.5 rounded-full animate-pulse delay-1000"
          style={{ backgroundColor: `${colors.deepBlue[400]}60` }}
        />
        <div 
          className="absolute bottom-40 left-20 h-1.5 w-1.5 rounded-full animate-pulse delay-500"
          style={{ backgroundColor: `${colors.accent.purple}60` }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Apple-style Badge */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div 
                className="group flex items-center space-x-3 rounded-full px-6 py-3 border transition-all duration-500 hover:scale-105"
                style={{
                  background: colors.glass.tertiary,
                  border: `1px solid ${colors.glass.border}`,
                  backdropFilter: 'blur(20px)'
                }}
              >
                <div 
                  className="p-1 rounded-full"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.golden.primary} 0%, ${colors.golden.secondary} 100%)`
                  }}
                >
                  <Sparkles className="h-3 w-3 text-black" />
                </div>
                <span 
                  className="text-sm font-medium tracking-wide"
                  style={{ 
                    color: colors.golden.primary,
                    fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  ค้นพบโชคชะตาของคุณ
                </span>
              </div>
            </div>

            {/* Apple-style Main Heading */}
            <h1 
              className="mb-8 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight"
              style={{ 
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                color: colors.text.primary
              }}
            >
              <span className="block mb-2">ปลดล็อค</span>
              <span 
                className="block mb-2 font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              >
                ความลับที่ซ่อนอยู่
              </span>
              <span className="block">ในตัวคุณ</span>
            </h1>

            {/* Apple-style Subtitle */}
            <p 
              className="mb-10 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light"
              style={{ 
                color: colors.text.tertiary,
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              สำรวจสูตรเลขศาสตร์ศักดิ์สิทธิ์กว่า{" "}
              <span 
                className="font-semibold px-3 py-1 rounded-lg border"
                style={{ 
                  color: colors.golden.primary,
                  background: colors.glass.secondary,
                  border: `1px solid ${colors.golden.primary}30`
                }}
              >
                17 สูตร
              </span>{" "}
              และค้นพบพิมพ์เขียวชีวิตของคุณผ่านภูมิปัญญาโบราณและข้อมูลเชิงลึกสมัยใหม่
            </p>

            {/* Apple-style CTA Buttons */}
            <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/start"
                className="group relative inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 active:scale-95 border"
                style={{
                  background: `linear-gradient(135deg, ${colors.deepBlue[600]} 0%, ${colors.deepBlue[700]} 100%)`,
                  color: colors.text.primary,
                  border: `1px solid ${colors.deepBlue[600]}`,
                  boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)'
                }}
              >
                <Sparkles className="h-5 w-5 relative z-10" />
                <span className="relative z-10 tracking-wide">คำนวณเลขชีวิตฟรี</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="/dashboard"
                className="group inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg border transition-all duration-500 hover:scale-105 active:scale-95"
                style={{
                  background: colors.glass.secondary,
                  color: colors.text.primary,
                  border: `1px solid ${colors.glass.border}`,
                  backdropFilter: 'blur(20px)'
                }}
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="tracking-wide">ดูตัวอย่างรายงาน</span>
              </a>
            </div>

            {/* Apple-style Trust Indicators */}
            <div className="mb-8 flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-current" 
                      style={{ color: colors.golden.primary }}
                    />
                  ))}
                </div>
                <span 
                  className="text-sm font-light"
                  style={{ color: colors.text.quaternary }}
                >
                  4.9/5 จาก 2,847 รีวิว
                </span>
              </div>
            </div>

            {/* Apple-style Stats */}
            <div className="hidden lg:block">
              <div className="mt-8 flex items-center justify-center space-x-8 lg:justify-start">
                {[
                  { value: "10K+", label: "ผู้ใช้ที่พึงพอใจ" },
                  { value: "17+", label: "สูตรศักดิ์สิทธิ์" },
                  { value: "15+", label: "ปีประสบการณ์" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div 
                      className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
                      style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className="text-sm font-light"
                      style={{ color: colors.text.quaternary }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Form */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Apple-style Glow Effect */}
              <div 
                className="absolute -inset-6 rounded-3xl blur-2xl opacity-20"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.deepBlue[600]} 0%, ${colors.golden.primary} 100%)`
                }}
              />
              <div 
                className="absolute -inset-3 rounded-3xl blur-xl opacity-30"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.deepBlue[700]} 0%, ${colors.golden.secondary} 100%)`
                }}
              />
              <NumerologyForm />
            </div>
          </div>
        </div>
      </div>

      {/* Apple-style Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div 
          className="w-6 h-10 border-2 rounded-full flex justify-center backdrop-blur-sm"
          style={{ 
            borderColor: `${colors.golden.primary}30`,
            background: colors.glass.primary
          }}
        >
          <div 
            className="w-1 h-3 rounded-full mt-2 animate-pulse"
            style={{ 
              background: `linear-gradient(to bottom, ${colors.golden.primary}, ${colors.golden.secondary})`
            }}
          />
        </div>
      </div>
    </section>
  )
}

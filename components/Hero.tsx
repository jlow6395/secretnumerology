import { Sparkles, ArrowRight, Play, Star } from "lucide-react"
import Navigation from "./Navigation"
import NumerologyForm from "./NumerologyForm"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <Navigation />

      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Subtle Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-amber-500/3 via-transparent to-orange-500/3" />

        {/* Elegant Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/8 to-red-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-500/6 to-orange-500/6 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-red-500/4 to-pink-500/4 rounded-full blur-3xl animate-pulse delay-500" />

        {/* Refined Floating Particles */}
        <div className="absolute top-20 left-10 h-1 w-1 rounded-full bg-orange-400/60 animate-pulse" />
        <div className="absolute top-40 right-20 h-0.5 w-0.5 rounded-full bg-amber-400/60 animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 h-1.5 w-1.5 rounded-full bg-red-400/60 animate-pulse delay-500" />
        <div className="absolute top-60 left-1/3 h-0.5 w-0.5 rounded-full bg-orange-300/60 animate-pulse delay-700" />
        <div className="absolute bottom-60 right-1/3 h-1 w-1 rounded-full bg-amber-300/60 animate-pulse delay-300" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Sophisticated Badge */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="group flex items-center space-x-3 rounded-full bg-gradient-to-r from-gray-900/80 to-black/80 px-6 py-3 backdrop-blur-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:scale-105">
                <div className="p-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-orange-300 font-medium tracking-wide">ค้นพบโชคชะตาของคุณ</span>
              </div>
            </div>

            {/* Elegant Main Heading */}
            <h1 className="mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              <span className="block mb-2 text-gray-100">ปลดล็อค</span>
              <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-red-400 bg-clip-text text-transparent mb-2 font-extrabold">
                ความลับที่ซ่อนอยู่
              </span>
              <span className="block text-gray-100">ในตัวคุณ</span>
            </h1>

            {/* Refined Subtitle */}
            <p className="mb-10 text-lg text-gray-300 sm:text-xl lg:text-2xl leading-relaxed font-light">
              สำรวจสูตรเลขศาสตร์ศักดิ์สิทธิ์กว่า{" "}
              <span className="font-semibold text-orange-300 bg-gradient-to-r from-orange-900/30 to-red-900/30 px-3 py-1 rounded-lg border border-orange-500/20">
                17 สูตร
              </span>{" "}
              และค้นพบพิมพ์เขียวชีวิตของคุณผ่านภูมิปัญญาโบราณและข้อมูลเชิงลึกสมัยใหม่
            </p>

            {/* Sophisticated CTA Buttons */}
            <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/wizard/step1"
                className="group relative inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 active:scale-95 border border-orange-400/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Sparkles className="h-5 w-5 relative z-10" />
                <span className="relative z-10 tracking-wide">คำนวณเลขชีวิตฟรี</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="/dashboard"
                className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-900/50 to-black/50 hover:from-gray-800/60 hover:to-black/60 text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-700/50 hover:border-orange-400/30 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="tracking-wide">ดูตัวอย่างรายงาน</span>
              </a>
            </div>

            {/* Elegant Trust Indicators */}
            <div className="mb-8 flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-400 font-light">4.9/5 จาก 2,847 รีวิว</span>
              </div>
            </div>

            {/* Sophisticated Stats */}
            <div className="hidden lg:block">
              <div className="mt-8 flex items-center justify-center space-x-8 lg:justify-start">
                {[
                  { value: "10K+", label: "ผู้ใช้ที่พึงพอใจ" },
                  { value: "17+", label: "สูตรศักดิ์สิทธิ์" },
                  { value: "15+", label: "ปีประสบการณ์" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Form */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Sophisticated Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-amber-500/10 rounded-3xl blur-2xl" />
              <div className="absolute -inset-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-xl" />
              <NumerologyForm />
            </div>
          </div>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

"use client"
import { Sparkles, Heart, Brain, Target, Calendar, Star, User, Eye } from "lucide-react"
import DashboardHeader from "@/components/dashboard/DashboardHeader"
import { useNumerologyData } from "@/hooks/useNumerologyData"
import { LoadingNumberCard, LoadingInsightCard, LoadingQuickActionCard } from "@/components/ui/LoadingCard"
import { ErrorBoundary } from "@/components/ui/ErrorBoundary"
import { ErrorState } from "@/components/ui/ErrorState"

export default function DashboardPage() {
  const { coreNumbers, luckyNumbers, insightOfDay, loading, error, retry } = useNumerologyData()

  const loShuGrid = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ]

  const birthDateGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  // Full page error state
  if (error && !loading) {
    return (
      <div className="w-full h-full bg-black">
        <DashboardHeader />
        <ErrorState error={error} onRetry={retry} type={error.includes("เชื่อมต่อ") ? "network" : "server"} />
      </div>
    )
  }

  if (loading) {
    return (
      <div className="w-full h-full bg-black">
        <DashboardHeader />
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6 space-y-8">
          <LoadingInsightCard />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[...Array(4)].map((_, i) => (
              <LoadingQuickActionCard key={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <LoadingNumberCard key={i} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="w-full h-full bg-black">
        <DashboardHeader />

        {/* Main Content */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6 pb-20 lg:pb-6 space-y-8">
          {/* Profile Greeting - Apple Style */}
          <section className="w-full backdrop-blur-2xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-3 font-sans tracking-tight">สวัสดี, สมชาย โจดี</h1>
                <p className="text-xl text-white/80 font-light">ค้นพบความลับในตัวเลขของคุณวันนี้</p>
              </div>
              <button className="mt-6 sm:mt-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50">
                ดูรายงานเต็มรูปแบบ
              </button>
            </div>
          </section>

          {/* Insight of the Day - Apple Style */}
          <section className="w-full backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/25">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-white tracking-tight">Insight of the Day</h2>
                <p className="font-body text-purple-300 text-sm">วันนี้ 26/05/2025</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h3 className="font-heading text-white font-medium mb-3 flex items-center">
                  <Sparkles className="h-5 w-5 mr-3 text-yellow-400" />
                  วันนี้คือวันของการเริ่มต้นใหม่...
                </h3>
                <p className="font-body text-white/80 leading-relaxed">{insightOfDay?.content}</p>
              </div>

              <div className="glass rounded-2xl p-6 border border-white/5">
                <h3 className="font-heading text-white font-medium mb-3 flex items-center">
                  <Target className="h-5 w-5 mr-3 text-orange-400" />
                  Insight ดีเยี่ยมของวันนี้ 8 ข้อความ
                </h3>
                <p className="font-body text-white/80 leading-relaxed">{insightOfDay?.tip}</p>
              </div>
            </div>
          </section>

          {/* Quick Actions - Apple Style */}
          <section className="w-full">
            <h2 className="font-display text-2xl font-semibold text-white mb-6 tracking-tight">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                className="backdrop-blur-xl bg-white/15 rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer group hover:bg-white/20"
                onClick={() => (window.location.href = "/dashboard/profile")}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-white font-medium text-sm">ไปโปรไฟล์ของคุณ</h3>
                    <p className="font-body text-white/60 text-xs">ข้อมูลส่วนตัวและการตั้งค่า</p>
                  </div>
                </div>
              </div>

              <div
                className="backdrop-blur-xl bg-white/15 rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer group hover:bg-white/20"
                onClick={() => (window.location.href = "/dashboard/ai-chat")}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/25 group-hover:shadow-pink-500/40 transition-all duration-300">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-white font-medium text-sm">AI Numerology Assistant</h3>
                    <p className="font-body text-white/60 text-xs">ถามคำถามเกี่ยวกับเลขศาสตร์</p>
                  </div>
                </div>
              </div>

              <div
                className="backdrop-blur-xl bg-white/15 rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer group hover:bg-white/20"
                onClick={() => (window.location.href = "/dashboard/lucky-phone")}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-white font-medium text-sm">สร้างเลขมงคล</h3>
                    <p className="font-body text-white/60 text-xs">สร้างเลขโทรศัพท์และเลขทะเบียน</p>
                  </div>
                </div>
              </div>

              <div
                className="backdrop-blur-xl bg-white/15 rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer group hover:bg-white/20"
                onClick={() => (window.location.href = "/dashboard/compatibility")}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-all duration-300">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-white font-medium text-sm">ความเข้ากัน</h3>
                    <p className="font-body text-white/60 text-xs">ตรวจสอบความเข้ากันในความรัก</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Numbers Section - Apple Style */}
          <section className="w-full">
            <h2 className="font-display text-2xl font-semibold text-white mb-6 tracking-tight">ตัวเลขสำคัญของคุณ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {coreNumbers?.map((number, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
                  onClick={() => (window.location.href = "/dashboard/my-numbers")}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold font-mono text-white shadow-2xl transition-all duration-300 group-hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, ${number.color}, ${number.color}80)`,
                            boxShadow: `0 8px 32px ${number.color}30`,
                          }}
                        >
                          {number.number}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-white">{number.title}</h3>
                        {number.subtitle && (
                          <p className="font-body font-medium" style={{ color: number.color }}>
                            {number.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {number.description && (
                    <p className="font-body text-white/70 text-sm mb-6 leading-relaxed">{number.description}</p>
                  )}

                  {number.progress !== undefined && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-3">
                        <span className="font-body text-white/60">Accuracy</span>
                        <span className="font-mono text-white/60">{number.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${number.progress}%`,
                            backgroundColor: number.color,
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <button className="w-full mt-4 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm font-body text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 group-hover:border-opacity-80">
                    <div className="flex items-center justify-center space-x-2">
                      <span>ดูรายละเอียด</span>
                      <Eye className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Lucky Numbers Section - Apple Style */}
          <section className="w-full">
            <h2 className="font-display text-2xl font-semibold text-white mb-6 tracking-tight">เลขนำโชคของคุณ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {luckyNumbers?.map((lucky, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
                  onClick={() => (window.location.href = "/dashboard/lucky-phone")}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-white font-medium text-sm mb-1">{lucky.title}</h3>
                      <p className="font-body text-white/60 text-xs">{lucky.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-2xl font-bold mb-1" style={{ color: lucky.color }}>
                        {lucky.number}
                      </div>
                      {lucky.active && (
                        <span
                          className="px-2 py-1 rounded-full text-xs font-medium font-body"
                          style={{
                            backgroundColor: `${lucky.color}20`,
                            color: lucky.color,
                          }}
                        >
                          ใช้งานอยู่
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Number Grids - Apple Style */}
          <section className="w-full">
            <h2 className="font-display text-2xl font-semibold text-white mb-6 tracking-tight">ตารางเลขนำโชค</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Birth Date Grid */}
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h3 className="font-heading text-xl font-semibold text-white mb-4 flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-blue-400" />
                  ลวง 3x3 เลขจากวันเกิด
                </h3>
                <p className="font-body text-white/60 text-sm mb-6">ตารางเลขจากวันเกิดของคุณที่มีพลังพิเศษ</p>

                <div className="grid grid-cols-3 gap-3 mb-6 max-w-48 mx-auto">
                  {birthDateGrid.flat().map((num, index) => (
                    <button
                      key={index}
                      className={`h-14 w-14 rounded-xl font-bold font-mono text-white transition-all duration-300 hover:scale-110 ${
                        [1, 2, 6, 7].includes(num)
                          ? "bg-gradient-to-br from-yellow-500 to-orange-500 shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40"
                          : "glass border border-white/10 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>

                <div className="text-center">
                  <p className="font-body text-xs text-white/60 mb-2">ผลรวม</p>
                  <div className="font-mono text-3xl font-bold text-yellow-400">45</div>
                </div>
              </div>

              {/* Lo Shu Grid */}
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h3 className="font-heading text-xl font-semibold text-white mb-4 flex items-center">
                  <Star className="h-6 w-6 mr-3 text-yellow-400" />
                  Lo Shu Grid
                </h3>
                <p className="font-body text-white/60 text-sm mb-6">ตารางเลขมงคลจากระบบจีนโบราณ</p>

                <div className="grid grid-cols-3 gap-3 mb-6 max-w-48 mx-auto">
                  {loShuGrid.map((row, rowIndex) =>
                    row.map((num, colIndex) => (
                      <button
                        key={`${rowIndex}-${colIndex}`}
                        className={`h-14 w-14 rounded-xl font-bold font-mono text-white transition-all duration-300 hover:scale-110 ${
                          [4, 3, 8].includes(num)
                            ? "bg-gradient-to-br from-red-500 to-pink-500 shadow-2xl shadow-red-500/25 hover:shadow-red-500/40"
                            : "glass border border-white/10 hover:border-white/20 hover:bg-white/10"
                        }`}
                      >
                        {num}
                      </button>
                    )),
                  )}
                </div>

                <div className="text-center">
                  <p className="font-body text-xs text-white/60 mb-2">พลังงาน</p>
                  <div className="font-mono text-3xl font-bold text-red-400">Strong</div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom CTA - Apple Style */}
          <section className="w-full glass-strong rounded-3xl p-8 text-center border border-white/10 bg-gradient-to-br from-orange-500/10 to-red-500/10">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 tracking-tight">ปลดล็อกศักยภาพที่แท้จริง</h2>
            <p className="font-body text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              ค้นพบความลับของตัวเลขและปลดล็อกศักยภาพที่แท้จริงของคุณด้วยการวิเคราะห์เลขศาสตร์แบบเจาะลึก พร้อมคำแนะนำจากผู้เชี่ยวชาญ
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white px-10 py-4 rounded-2xl font-semibold font-body transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">
              Upgrade Plan
            </button>
          </section>
        </div>
      </div>
    </ErrorBoundary>
  )
}

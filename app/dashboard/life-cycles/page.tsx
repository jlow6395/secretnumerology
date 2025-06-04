"use client"
import { Target, Calendar, Star, TrendingUp, ArrowLeft, Clock, Zap } from "lucide-react"
import Link from "next/link"
import UnifiedMobileNav from "@/components/navigation/UnifiedMobileNav"

export default function LifeCyclesOverviewPage() {
  // ข้อมูลผู้ใช้
  const userData = {
    name: "สมชาย ใจดี",
    currentAge: 26,
    personalYear: 5,
    personalMonth: 3,
  }

  // ข้อมูลทั้ง 3 ช่วงชีวิต
  const lifeCycles = [
    {
      id: "youth",
      period: "ช่วงเยาว์วัย",
      ageRange: "0-28 ปี",
      dominantNumber: 3,
      icon: Target,
      color: "#00E5FF",
      characteristics: [
        "ช่วงแห่งการเรียนรู้และสำรวจ",
        "พัฒนาบุคลิกภาพและความสามารถ",
        "การสร้างรากฐานชีวิต",
        "ความกระตือรือร้นและความคิดสร้างสรรค์",
      ],
      challenges: ["ความไม่แน่นอนในทิศทางชีวิต", "การขาดประสบการณ์", "ความกดดันจากสังคม"],
      opportunities: ["การศึกษาและพัฒนาทักษะ", "การสร้างเครือข่าย", "การทดลองและผิดพลาด"],
      keyYears: [
        { age: 9, description: "ปีแห่งการตื่นรู้ทางจิตวิญญาณ" },
        { age: 18, description: "ปีแห่งการเปลี่ยนแปลงครั้งใหญ่" },
        { age: 27, description: "ปีแห่งการเตรียมตัวสู่ช่วงถัดไป" },
      ],
      isActive: userData.currentAge <= 28,
      isCompleted: userData.currentAge > 28,
    },
    {
      id: "middle",
      period: "ช่วงกลางคน",
      ageRange: "29-56 ปี",
      dominantNumber: 7,
      icon: Zap,
      color: "#00FFA3",
      characteristics: [
        "ช่วงแห่งการสร้างสรรค์และความมั่นคง",
        "การพัฒนาอาชีพและครอบครัว",
        "ความรับผิดชอบและภาวะผู้นำ",
        "การค้นหาความหมายที่ลึกซึ้ง",
      ],
      challenges: ["ความเครียดจากภาระหน้าที่", "การสมดุลระหว่างงานและชีวิต", "วิกฤตกลางคน"],
      opportunities: ["การสร้างมรดกและผลงาน", "การเป็นที่ปรึกษา", "การขยายอิทธิพล"],
      keyYears: [
        { age: 36, description: "ปีแห่งการเปลี่ยนแปลงครั้งใหญ่" },
        { age: 45, description: "ปีแห่งการประเมินชีวิตใหม่" },
        { age: 54, description: "ปีแห่งการเตรียมตัวสู่วัยผู้สูงอายุ" },
      ],
      isActive: userData.currentAge >= 29 && userData.currentAge <= 56,
      isCompleted: userData.currentAge > 56,
    },
    {
      id: "senior",
      period: "ช่วงวัยชรา",
      ageRange: "57+ ปี",
      dominantNumber: 8,
      icon: Calendar,
      color: "#FFD166",
      characteristics: ["ช่วงแห่งภูมิปัญญาและการให้", "การเก็บเกี่ยวผลจากการทำงาน", "ความสงบและการยอมรับ", "การถ่ายทอดประสบการณ์"],
      challenges: ["ปัญหาสุขภาพ", "การปรับตัวกับการเปลี่ยนแปลง", "ความเหงาและการสูญเสีย"],
      opportunities: ["การเป็นที่ปรึกษา", "การทำงานเพื่อสังคม", "การใช้เวลากับครอบครัว"],
      keyYears: [
        { age: 63, description: "ปีแห่งการเริ่มต้นใหม่" },
        { age: 72, description: "ปีแห่งความสมบูรณ์" },
        { age: 81, description: "ปีแห่งภูมิปัญญาสูงสุด" },
      ],
      isActive: userData.currentAge >= 57,
      isCompleted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#1E1E1E] p-6 ml-64">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>กลับสู่ Dashboard</span>
        </Link>

        <div className="flex items-center space-x-4 mb-6">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#FFD166] flex items-center justify-center shadow-lg shadow-[#00E5FF]/30">
            <Clock className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Life Cycles Overview</h1>
            <p className="text-lg text-gray-400">ภาพรวมช่วงชีวิตทั้ง 3 ช่วง</p>
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#00E5FF]/30 shadow-lg shadow-[#00E5FF]/10">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#0099cc] flex items-center justify-center">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">อายุปัจจุบันของคุณ</h3>
              <p className="text-gray-400">{userData.currentAge} ปี</p>
            </div>
          </div>
          <p className="text-sm text-[#00E5FF]">
            {userData.currentAge <= 28
              ? "อยู่ในช่วงเยาว์วัยปลาย"
              : userData.currentAge <= 56
                ? "อยู่ในช่วงกลางคนต้น"
                : "อยู่ในช่วงวัยชรา"}
          </p>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400 mb-1">Personal Year</p>
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0099cc] flex items-center justify-center text-2xl font-bold text-white shadow-lg mx-auto">
              {userData.personalYear}
            </div>
          </div>
        </div>
      </div>

      {/* Life Cycles Grid */}
      <div className="space-y-8">
        {lifeCycles.map((cycle, index) => (
          <div
            key={cycle.id}
            className={`bg-[#1A1A1A] rounded-xl p-6 border transition-all ${
              cycle.isActive
                ? "border-[#00E5FF] shadow-lg shadow-[#00E5FF]/20"
                : cycle.isCompleted
                  ? "border-[#00FFA3]"
                  : "border-[#2A2A2A]"
            }`}
          >
            {/* Cycle Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div
                className={`h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg ${
                  cycle.isActive ? "animate-pulse" : ""
                }`}
                style={{
                  backgroundColor: `${cycle.color}20`,
                  boxShadow: `0 4px 12px ${cycle.color}15`,
                }}
              >
                <cycle.icon className="h-8 w-8" style={{ color: cycle.color }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <h2 className="text-2xl font-bold text-white">{cycle.period}</h2>
                  <span className="text-lg text-gray-400">{cycle.ageRange}</span>
                  {cycle.isActive && (
                    <span className="px-3 py-1 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] text-sm font-medium">
                      ช่วงปัจจุบัน
                    </span>
                  )}
                  {cycle.isCompleted && (
                    <span className="px-3 py-1 rounded-full bg-[#00FFA3]/20 text-[#00FFA3] text-sm font-medium">
                      ผ่านมาแล้ว
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-sm text-gray-400">เลขประจำช่วง:</span>
                  <div
                    className="h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: cycle.color }}
                  >
                    {cycle.dominantNumber}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Characteristics */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="h-5 w-5" style={{ color: cycle.color }} />
                  <h3 className="text-lg font-bold text-white">ลักษณะเด่น</h3>
                </div>
                <div className="space-y-3">
                  {cycle.characteristics.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div
                        className="h-2 w-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: cycle.color }}
                      ></div>
                      <p className="text-gray-300 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-5 w-5 text-[#FF5757]" />
                  <h3 className="text-lg font-bold text-white">ความท้าทาย</h3>
                </div>
                <div className="space-y-3">
                  {cycle.challenges.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-[#FF5757] mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opportunities */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-5 w-5 text-[#00FFA3]" />
                  <h3 className="text-lg font-bold text-white">โอกาส</h3>
                </div>
                <div className="space-y-3">
                  {cycle.opportunities.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-[#00FFA3] mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Years */}
            <div className="mt-6 pt-6 border-t border-[#2A2A2A]">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-5 w-5" style={{ color: cycle.color }} />
                <h3 className="text-lg font-bold text-white">ปีสำคัญในช่วงนี้</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cycle.keyYears.map((year, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-[#232323] border border-[#2A2A2A]"
                  >
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: cycle.color }}
                    >
                      {year.age}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">อายุ {year.age} ปี</p>
                      <p className="text-gray-400 text-xs">{year.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Card */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#00E5FF]/30 shadow-lg shadow-[#00E5FF]/10 mt-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#0099cc] flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">สรุปภาพรวม Life Cycles</h3>
            <p className="text-gray-400">การวิเคราะห์ช่วงชีวิตของคุณ</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-lg bg-[#232323]/50">
            <p className="text-2xl font-bold text-[#00E5FF] mb-1">{userData.currentAge <= 28 ? "93%" : "100%"}</p>
            <p className="text-sm text-gray-400">ช่วงเยาว์วัย</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-[#232323]/50">
            <p className="text-2xl font-bold text-[#00FFA3] mb-1">
              {userData.currentAge >= 29 && userData.currentAge <= 56
                ? `${Math.round(((userData.currentAge - 28) / 28) * 100)}%`
                : userData.currentAge > 56
                  ? "100%"
                  : "0%"}
            </p>
            <p className="text-sm text-gray-400">ช่วงกลางคน</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-[#232323]/50">
            <p className="text-2xl font-bold text-[#FFD166] mb-1">
              {userData.currentAge >= 57 ? `${Math.round(((userData.currentAge - 56) / 20) * 100)}%` : "0%"}
            </p>
            <p className="text-sm text-gray-400">ช่วงวัยชรา</p>
          </div>
        </div>
      </div>
      <UnifiedMobileNav />
    </div>
  )
}

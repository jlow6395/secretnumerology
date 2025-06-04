"use client"
import { Target, Calendar, Star, TrendingUp, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { UnifiedCard } from "@/components/ui/UnifiedCard"
import { UnifiedMobileNav } from "@/components/navigation/UnifiedMobileNav"

export default function YouthLifeCyclePage() {
  // ข้อมูลตัวอย่างสำหรับช่วงเยาว์วัย (0-28 ปี)
  const youthData = {
    period: "ช่วงเยาว์วัย",
    ageRange: "0-28 ปี",
    currentAge: 26,
    dominantNumber: 3, // คำนวณจากเดือนเกิด
    characteristics: [
      "ช่วงแห่งการเรียนรู้และสำรวจ",
      "พัฒนาบุคลิกภาพและความสามารถ",
      "การสร้างรากฐานชีวิต",
      "ความกระตือรือร้นและความคิดสร้างสรรค์",
    ],
    challenges: ["ความไม่แน่นอนในทิศทางชีวิต", "การขาดประสบการณ์", "ความกดดันจากสังคม", "การตัดสินใจที่สำคัญ"],
    opportunities: ["การศึกษาและพัฒนาทักษะ", "การสร้างเครือข่าย", "การทดลองและผิดพลาด", "การค้นหาตัวตน"],
    keyYears: [
      { age: 9, description: "ปีแห่งการตื่นรู้ทางจิตวิญญาณ" },
      { age: 18, description: "ปีแห่งการเปลี่ยนแปลงครั้งใหญ่" },
      { age: 27, description: "ปีแห่งการเตรียมตัวสู่ช่วงถัดไป" },
    ],
  }

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
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#0099cc] flex items-center justify-center shadow-lg shadow-[#00E5FF]/30">
            <Target className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{youthData.period}</h1>
            <p className="text-lg text-gray-400">{youthData.ageRange}</p>
          </div>
        </div>

        {/* Current Status */}
        <UnifiedCard variant="info" title="อายุปัจจุบันของคุณ" subtitle={`${youthData.currentAge} ปี`}>
          <p className="text-sm text-[#00E5FF]">อยู่ในช่วงเยาว์วัยปลาย</p>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400 mb-1">เลขประจำช่วง</p>
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0099cc] flex items-center justify-center text-2xl font-bold text-white shadow-lg mx-auto">
              {youthData.dominantNumber}
            </div>
          </div>
        </UnifiedCard>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Characteristics */}
        <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A]">
          <div className="flex items-center space-x-3 mb-6">
            <Star className="h-6 w-6 text-[#00E5FF]" />
            <h2 className="text-xl font-bold text-white">ลักษณะเด่นของช่วงนี้</h2>
          </div>
          <div className="space-y-4">
            {youthData.characteristics.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-[#00E5FF] mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A]">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="h-6 w-6 text-[#FF5757]" />
            <h2 className="text-xl font-bold text-white">ความท้าทาย</h2>
          </div>
          <div className="space-y-4">
            {youthData.challenges.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-[#FF5757] mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Opportunities */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A] mb-6">
        <div className="flex items-center space-x-3 mb-6">
          <Target className="h-6 w-6 text-[#00FFA3]" />
          <h2 className="text-xl font-bold text-white">โอกาสและแนวทาง</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {youthData.opportunities.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-gradient-to-r from-[#00FFA3]/10 to-[#00cc82]/10 border border-[#00FFA3]/20"
            >
              <p className="text-white font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Years */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A]">
        <div className="flex items-center space-x-3 mb-6">
          <Calendar className="h-6 w-6 text-[#FFD166]" />
          <h2 className="text-xl font-bold text-white">ปีสำคัญในช่วงนี้</h2>
        </div>
        <div className="space-y-4">
          {youthData.keyYears.map((year, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg bg-[#232323] border border-[#2A2A2A]"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#FFD166] to-[#ffb300] flex items-center justify-center text-black font-bold">
                {year.age}
              </div>
              <div>
                <p className="text-white font-medium">อายุ {year.age} ปี</p>
                <p className="text-gray-400 text-sm">{year.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <UnifiedMobileNav />
    </div>
  )
}

"use client"

import UnifiedCard from "@/components/ui/UnifiedCard"
import Breadcrumb from "@/components/navigation/Breadcrumb"
import { Star, Eye, Heart, Zap, Shield, Crown } from "lucide-react"

export default function AngelNumbersPage() {
  const todayNumbers = [
    { number: "111", meaning: "จุดเริ่มต้นใหม่", energy: 95 },
    { number: "222", meaning: "ความสมดุล", energy: 88 },
    { number: "333", meaning: "การเติบโต", energy: 92 },
    { number: "444", meaning: "ความมั่นคง", energy: 85 },
    { number: "555", meaning: "การเปลี่ยนแปลง", energy: 90 },
  ]

  const angelNumbers = [
    {
      number: "111",
      title: "จุดเริ่มต้นใหม่",
      description: "เทวดาส่งสัญญาณให้คุณเริ่มต้นสิ่งใหม่ ความคิดของคุณกำลังเป็นจริง",
      icon: Star,
      color: "#f59e0b",
      frequency: "สูงมาก",
      energy: 95,
    },
    {
      number: "222",
      title: "ความสมดุลและความอดทน",
      description: "เวลาแห่งความสมดุล ให้อดทนและเชื่อมั่นในกระบวนการ",
      icon: Eye,
      color: "#10b981",
      frequency: "สูง",
      energy: 88,
    },
    {
      number: "333",
      title: "การเติบโตทางจิตวิญญาณ",
      description: "เทวดาอยู่ใกล้คุณ ให้ความช่วยเหลือในการเติบโต",
      icon: Crown,
      color: "#8b5cf6",
      frequency: "ปานกลาง",
      energy: 92,
    },
    {
      number: "444",
      title: "ความมั่นคงและการป้องกัน",
      description: "คุณได้รับการป้องกันและสนับสนุนจากเทวดา",
      icon: Shield,
      color: "#06b6d4",
      frequency: "สูง",
      energy: 85,
    },
    {
      number: "555",
      title: "การเปลี่ยนแปลงที่สำคัญ",
      description: "การเปลี่ยนแปลงใหญ่กำลังจะมา เตรียมตัวให้พร้อม",
      icon: Zap,
      color: "#ec4899",
      frequency: "ปานกลาง",
      energy: 90,
    },
    {
      number: "666",
      title: "ความสมดุลในชีวิต",
      description: "ให้ความสำคัญกับครอบครัวและความสัมพันธ์",
      icon: Heart,
      color: "#f97316",
      frequency: "ต่ำ",
      energy: 78,
    },
    {
      number: "777",
      title: "ความโชคดีและการตื่นรู้",
      description: "คุณอยู่ในเส้นทางที่ถูกต้อง ความโชคดีกำลังมา",
      icon: Star,
      color: "#eab308",
      frequency: "สูงมาก",
      energy: 98,
    },
    {
      number: "888",
      title: "ความมั่งคั่งและความสำเร็จ",
      description: "ความมั่งคั่งทางการเงินและจิตวิญญาณกำลังมา",
      icon: Crown,
      color: "#10b981",
      frequency: "ปานกลาง",
      energy: 94,
    },
    {
      number: "999",
      title: "การสิ้นสุดและการเริ่มต้น",
      description: "บทหนึ่งกำลังจบลง เตรียมพร้อมสำหรับการเริ่มต้นใหม่",
      icon: Eye,
      color: "#8b5cf6",
      frequency: "ต่ำ",
      energy: 87,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Breadcrumb className="mb-4" />
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">Angel Numbers</h1>
            <p className="text-yellow-100">ข้อความจากเทวดาผ่านตัวเลขที่คุณเจอบ่อยๆ</p>
          </div>
        </div>

        {/* Today's Numbers */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">เลขเทวดาวันนี้</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {todayNumbers.map((item, index) => (
              <UnifiedCard
                key={index}
                variant="number"
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="p-4">
                  <div className="text-3xl font-bold text-white mb-2">{item.number}</div>
                  <div className="text-sm text-gray-300 mb-2">{item.meaning}</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-500"
                      style={{ width: `${item.energy}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{item.energy}% พลังงาน</div>
                </div>
              </UnifiedCard>
            ))}
          </div>
        </div>

        {/* All Angel Numbers */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">ความหมาย Angel Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {angelNumbers.map((angel) => (
              <UnifiedCard key={angel.number} variant="info" className="group hover:scale-105 transition-transform">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className="p-3 rounded-full"
                        style={{ backgroundColor: `${angel.color}20`, color: angel.color }}
                      >
                        <angel.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{angel.number}</div>
                        <div className="text-xs text-gray-400">ความถี่: {angel.frequency}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold" style={{ color: angel.color }}>
                        {angel.energy}%
                      </div>
                      <div className="text-xs text-gray-400">พลังงาน</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{angel.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{angel.description}</p>

                  {/* Energy Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>พลังงานเทวดา</span>
                      <span>{angel.energy}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${angel.energy}%`,
                          backgroundColor: angel.color,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    className="w-full py-2 px-4 rounded-lg text-white font-medium transition-colors"
                    style={{ backgroundColor: angel.color }}
                  >
                    ดูรายละเอียด
                  </button>
                </div>
              </UnifiedCard>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <UnifiedCard variant="info">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">วิธีใช้ Angel Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">สังเกต</h3>
                <p className="text-gray-300 text-sm">สังเกตเลขที่เจอบ่อยๆ ในชีวิตประจำวัน</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">ตีความ</h3>
                <p className="text-gray-300 text-sm">ดูความหมายและข้อความจากเทวดา</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">ปฏิบัติ</h3>
                <p className="text-gray-300 text-sm">นำคำแนะนำไปใช้ในชีวิตประจำวัน</p>
              </div>
            </div>
          </div>
        </UnifiedCard>
      </div>
    </div>
  )
}

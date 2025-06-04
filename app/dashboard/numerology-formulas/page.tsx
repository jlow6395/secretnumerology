"use client"

import UnifiedCard from "@/components/ui/UnifiedCard"
import Breadcrumb from "@/components/navigation/Breadcrumb"
import { Calculator, Target, Heart, Star, Crown } from "lucide-react"

export default function NumerologyFormulasPage() {
  const formulas = [
    {
      id: "life-path",
      name: "Life Path Number",
      description: "เลขเส้นทางชีวิต คำนวณจากวันเกิด",
      formula: "วัน + เดือน + ปี (ลดเหลือเลขเดียว)",
      example: "15/08/1990 = 1+5+0+8+1+9+9+0 = 33 = 3+3 = 6",
      icon: Target,
      color: "#8b5cf6",
      difficulty: "ง่าย",
      accuracy: 95,
    },
    {
      id: "expression",
      name: "Expression Number",
      description: "เลขแสดงออก คำนวณจากชื่อเต็ม",
      formula: "ผลรวมค่าตัวอักษรในชื่อเต็ม",
      example: "A=1, B=2, C=3... รวมทุกตัวอักษร",
      icon: Star,
      color: "#10b981",
      difficulty: "ปานกลาง",
      accuracy: 88,
    },
    {
      id: "soul-urge",
      name: "Soul Urge Number",
      description: "เลขแรงขับใจ คำนวณจากสระในชื่อ",
      formula: "ผลรวมค่าสระในชื่อเต็ม",
      example: "เฉพาะ A, E, I, O, U ในชื่อ",
      icon: Heart,
      color: "#ec4899",
      difficulty: "ปานกลาง",
      accuracy: 85,
    },
    {
      id: "personality",
      name: "Personality Number",
      description: "เลขบุคลิกภาพ คำนวณจากพยัญชนะ",
      formula: "ผลรวมค่าพยัญชนะในชื่อเต็ม",
      example: "ตัวอักษรที่ไม่ใช่สระในชื่อ",
      icon: Crown,
      color: "#f59e0b",
      difficulty: "ปานกลาง",
      accuracy: 82,
    },
    {
      id: "destiny",
      name: "Destiny Number",
      description: "เลขชะตากรรม คำนวณจากชื่อและนามสกุล",
      formula: "ผลรวมทุกตัวอักษรในชื่อ-นามสกุล",
      example: "รวมค่าตัวอักษรทั้งหมด",
      icon: Star,
      color: "#06b6d4",
      difficulty: "ง่าย",
      accuracy: 90,
    },
    {
      id: "maturity",
      name: "Maturity Number",
      description: "เลขวุฒิภาวะ คำนวณจาก Life Path + Expression",
      formula: "Life Path Number + Expression Number",
      example: "6 + 8 = 14 = 1+4 = 5",
      icon: Crown,
      color: "#8b5cf6",
      difficulty: "ง่าย",
      accuracy: 87,
    },
  ]

  const letterValues = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    O: 6,
    P: 7,
    Q: 8,
    R: 9,
    S: 1,
    T: 2,
    U: 3,
    V: 4,
    W: 5,
    X: 6,
    Y: 7,
    Z: 8,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Breadcrumb className="mb-4" />
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">สูตรคำนวณเลขศาสตร์</h1>
            <p className="text-green-100">เรียนรู้วิธีคำนวณเลขศาสตร์ด้วยตัวเอง</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <UnifiedCard variant="number" className="bg-gradient-to-r from-blue-500 to-cyan-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{formulas.length}</div>
              <div className="text-blue-100">สูตรทั้งหมด</div>
            </div>
          </UnifiedCard>

          <UnifiedCard variant="number" className="bg-gradient-to-r from-green-500 to-emerald-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">87%</div>
              <div className="text-green-100">ความแม่นยำเฉลี่ย</div>
            </div>
          </UnifiedCard>

          <UnifiedCard variant="number" className="bg-gradient-to-r from-purple-500 to-pink-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">26</div>
              <div className="text-purple-100">ตัวอักษรในระบบ</div>
            </div>
          </UnifiedCard>
        </div>

        {/* Formulas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {formulas.map((formula) => (
            <UnifiedCard key={formula.id} variant="info" className="group hover:scale-105 transition-transform">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: `${formula.color}20`, color: formula.color }}
                    >
                      <formula.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{formula.name}</h3>
                      <div className="text-sm text-gray-400">ระดับ: {formula.difficulty}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold" style={{ color: formula.color }}>
                      {formula.accuracy}%
                    </div>
                    <div className="text-xs text-gray-400">ความแม่นยำ</div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{formula.description}</p>

                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-400 mb-2">สูตร:</div>
                  <div className="text-white font-mono text-sm">{formula.formula}</div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-400 mb-2">ตัวอย่าง:</div>
                  <div className="text-green-400 font-mono text-sm">{formula.example}</div>
                </div>

                {/* Accuracy Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>ความแม่นยำ</span>
                    <span>{formula.accuracy}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${formula.accuracy}%`,
                        backgroundColor: formula.color,
                      }}
                    />
                  </div>
                </div>

                <button
                  className="w-full py-2 px-4 rounded-lg text-white font-medium transition-colors"
                  style={{ backgroundColor: formula.color }}
                >
                  ลองคำนวณ
                </button>
              </div>
            </UnifiedCard>
          ))}
        </div>

        {/* Letter Values Chart */}
        <UnifiedCard variant="info" className="mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">ตารางค่าตัวอักษร</h2>
            <div className="grid grid-cols-9 gap-2">
              {Object.entries(letterValues).map(([letter, value]) => (
                <div key={letter} className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-white font-bold">{letter}</div>
                  <div className="text-gray-400 text-sm">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </UnifiedCard>

        {/* Calculator Tool */}
        <UnifiedCard variant="action">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">เครื่องคำนวณ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">ชื่อเต็ม (ภาษาอังกฤษ)</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">วันเกิด</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
            <button className="mt-4 w-full md:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors">
              <Calculator className="h-4 w-4 inline mr-2" />
              คำนวณทั้งหมด
            </button>
          </div>
        </UnifiedCard>
      </div>
    </div>
  )
}

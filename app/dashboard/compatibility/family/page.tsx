"use client"

import { useState } from "react"
import { Users, ArrowLeft, Calculator, Home, Baby } from "lucide-react"
import UnifiedMobileNav from "@/components/navigation/UnifiedMobileNav"
import Link from "next/link"

export default function FamilyCompatibilityPage() {
  const [familyMembers, setFamilyMembers] = useState([
    { id: 1, name: "", birthDate: "", relationship: "father", lifePathNumber: 0 },
    { id: 2, name: "", birthDate: "", relationship: "mother", lifePathNumber: 0 },
  ])
  const [compatibilityResult, setCompatibilityResult] = useState<any>(null)

  const relationships = [
    { value: "father", label: "พ่อ", icon: "👨" },
    { value: "mother", label: "แม่", icon: "👩" },
    { value: "child", label: "ลูก", icon: "👶" },
    { value: "sibling", label: "พี่น้อง", icon: "👫" },
    { value: "spouse", label: "คู่สมรส", icon: "💑" },
    { value: "grandparent", label: "ปู่ย่าตายาย", icon: "👴" },
  ]

  const calculateLifePathNumber = (birthDate: string) => {
    if (!birthDate) return 0
    const digits = birthDate.replace(/\D/g, "").split("").map(Number)
    let sum = digits.reduce((acc, digit) => acc + digit, 0)

    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0)
    }

    return sum
  }

  const addFamilyMember = () => {
    const newId = Math.max(...familyMembers.map((m) => m.id)) + 1
    setFamilyMembers([
      ...familyMembers,
      { id: newId, name: "", birthDate: "", relationship: "child", lifePathNumber: 0 },
    ])
  }

  const removeFamilyMember = (id: number) => {
    if (familyMembers.length > 2) {
      setFamilyMembers(familyMembers.filter((member) => member.id !== id))
    }
  }

  const updateFamilyMember = (id: number, field: string, value: string) => {
    setFamilyMembers(familyMembers.map((member) => (member.id === id ? { ...member, [field]: value } : member)))
  }

  const calculateFamilyCompatibility = () => {
    const validMembers = familyMembers.filter((m) => m.name && m.birthDate)
    if (validMembers.length < 2) return

    const numbers = validMembers.map((m) => calculateLifePathNumber(m.birthDate))
    const avgNumber = numbers.reduce((sum, num) => sum + num, 0) / numbers.length

    // Calculate harmony score
    const variance = numbers.reduce((sum, num) => sum + Math.pow(num - avgNumber, 2), 0) / numbers.length
    const harmonyScore = Math.max(60, 100 - variance * 10)

    const result = {
      harmonyScore: Math.round(harmonyScore),
      familyNumber: Math.round(avgNumber),
      members: validMembers.map((m) => ({
        ...m,
        lifePathNumber: calculateLifePathNumber(m.birthDate),
      })),
      strengths: getFamilyStrengths(numbers),
      challenges: getFamilyChallenges(numbers),
      advice: getFamilyAdvice(numbers),
    }

    setCompatibilityResult(result)
  }

  const getFamilyStrengths = (numbers: number[]) => {
    return [
      "ความเข้าใจและเห็นอกเห็นใจกัน",
      "การสนับสนุนซึ่งกันและกัน",
      "ค่านิยมและเป้าหมายที่คล้ายกัน",
      "การสื่อสารที่เปิดเผย",
      "ความรักและความอบอุ่น",
    ].slice(0, 3)
  }

  const getFamilyChallenges = (numbers: number[]) => {
    return ["ความแตกต่างในมุมมอง", "การจัดการความขัดแย้ง", "ความต้องการส่วนตัว", "การแบ่งเวลาให้กัน"].slice(0, 2)
  }

  const getFamilyAdvice = (numbers: number[]) => {
    return ["จัดเวลาพูดคุยกันเป็นประจำ", "เคารพความแตกต่างของแต่ละคน", "สร้างกิจกรรมร่วมกัน", "แสดงความรักและความห่วงใย"]
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "#10b981"
    if (score >= 75) return "#f59e0b"
    if (score >= 60) return "#ec4899"
    return "#ef4444"
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] lg:ml-64">
      <div className="p-4 lg:p-8 pb-24 lg:pb-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/compatibility"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>กลับสู่ความเข้ากัน</span>
          </Link>

          <div className="flex items-center space-x-4 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center justify-center shadow-lg shadow-[#10b981]/30">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">ความเข้ากันในครอบครัว</h1>
              <p className="text-lg text-gray-400">วิเคราะห์ความสามัคคีในครอบครัว</p>
            </div>
          </div>
        </div>

        {/* Family Members Input */}
        <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center justify-center">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">ข้อมูลสมาชิกครอบครัว</h2>
              <p className="text-gray-400">กรอกข้อมูลสมาชิกในครอบครัว</p>
            </div>
          </div>

          <div className="space-y-6">
            {familyMembers.map((member, index) => (
              <div key={member.id} className="p-4 bg-[#0a0a0a] rounded-xl border border-[#2a2a2a]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Home className="h-5 w-5 text-[#10b981]" />
                    <span>สมาชิกคนที่ {index + 1}</span>
                  </h3>
                  {familyMembers.length > 2 && (
                    <button
                      onClick={() => removeFamilyMember(member.id)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      ลบ
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">ชื่อ</label>
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => updateFamilyMember(member.id, "name", e.target.value)}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#10b981]"
                      placeholder="กรอกชื่อ"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">ความสัมพันธ์</label>
                    <select
                      value={member.relationship}
                      onChange={(e) => updateFamilyMember(member.id, "relationship", e.target.value)}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white focus:outline-none focus:border-[#10b981]"
                    >
                      {relationships.map((rel) => (
                        <option key={rel.value} value={rel.value}>
                          {rel.icon} {rel.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">วันเกิด</label>
                    <input
                      type="date"
                      value={member.birthDate}
                      onChange={(e) => updateFamilyMember(member.id, "birthDate", e.target.value)}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white focus:outline-none focus:border-[#10b981]"
                    />
                  </div>
                </div>

                {member.birthDate && (
                  <div className="mt-4 p-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                    <p className="text-sm text-gray-400 mb-1">Life Path Number</p>
                    <p className="text-xl font-bold text-[#10b981]">{calculateLifePathNumber(member.birthDate)}</p>
                  </div>
                )}
              </div>
            ))}

            <div className="flex space-x-4">
              <button
                onClick={addFamilyMember}
                className="px-6 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-xl hover:bg-[#1a1a1a] transition-colors flex items-center space-x-2"
              >
                <Baby className="h-5 w-5" />
                <span>เพิ่มสมาชิก</span>
              </button>

              <button
                onClick={calculateFamilyCompatibility}
                disabled={familyMembers.filter((m) => m.name && m.birthDate).length < 2}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-[#10b981] to-[#059669] text-white font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Calculator className="h-5 w-5" />
                <span>วิเคราะห์ความสามัคคี</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {compatibilityResult && (
          <div className="space-y-6">
            {/* Harmony Score */}
            <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">คะแนนความสามัคคี</h2>
                  <p className="text-gray-400">{compatibilityResult.harmonyScore}%</p>
                </div>
              </div>

              <div className="text-center">
                <div
                  className="text-6xl font-bold mb-4"
                  style={{ color: getScoreColor(compatibilityResult.harmonyScore) }}
                >
                  {compatibilityResult.harmonyScore}%
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                  <div
                    className="h-4 rounded-full transition-all duration-1000"
                    style={{
                      width: `${compatibilityResult.harmonyScore}%`,
                      backgroundColor: getScoreColor(compatibilityResult.harmonyScore),
                    }}
                  />
                </div>
                <p className="text-gray-300">
                  {compatibilityResult.harmonyScore >= 90
                    ? "ครอบครัวที่สามัคคีมาก"
                    : compatibilityResult.harmonyScore >= 75
                      ? "ครอบครัวที่อบอุ่น"
                      : compatibilityResult.harmonyScore >= 60
                        ? "ครอบครัวที่ดี"
                        : "ต้องเสริมสร้างความสามัคคี"}
                </p>
              </div>
            </div>

            {/* Family Members Overview */}
            <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center justify-center">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">ภาพรวมสมาชิกครอบครัว</h2>
                  <p className="text-gray-400">เลข Life Path ของแต่ละคน</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {compatibilityResult.members.map((member: any, index: number) => (
                  <div key={member.id} className="p-4 bg-[#0a0a0a] rounded-xl border border-[#2a2a2a]">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center justify-center text-white font-bold">
                        {member.lifePathNumber}
                      </div>
                      <div>
                        <p className="font-bold text-white">{member.name}</p>
                        <p className="text-sm text-gray-400">
                          {relationships.find((r) => r.value === member.relationship)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analysis Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Strengths */}
              <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">จุดแข็งของครอบครัว</h2>
                    <p className="text-gray-400">สิ่งที่ดีในครอบครัว</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {compatibilityResult.strengths.map((strength: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-[#10b981] mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{strength}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">ความท้าทาย</h2>
                    <p className="text-gray-400">สิ่งที่ต้องปรับปรุง</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {compatibilityResult.challenges.map((challenge: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-[#f59e0b] mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advice */}
              <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#ec4899] to-[#f97316] flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">คำแนะนำ</h2>
                    <p className="text-gray-400">วิธีเสริมสร้างความสามัคคี</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {compatibilityResult.advice.map((advice: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-[#ec4899] mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{advice}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <UnifiedMobileNav />
    </div>
  )
}

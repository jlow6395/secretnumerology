"use client"

import { useState } from "react"
import { Briefcase, ArrowLeft, Calculator, Building, UserPlus } from "lucide-react"
import UnifiedMobileNav from "@/components/navigation/UnifiedMobileNav"
import Link from "next/link"

export default function WorkCompatibilityPage() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "", birthDate: "", position: "manager", lifePathNumber: 0 },
    { id: 2, name: "", birthDate: "", position: "employee", lifePathNumber: 0 },
  ])
  const [compatibilityResult, setCompatibilityResult] = useState<any>(null)

  const positions = [
    { value: "ceo", label: "CEO/ผู้บริหารสูงสุด", icon: "👑" },
    { value: "manager", label: "ผู้จัดการ", icon: "👨‍💼" },
    { value: "supervisor", label: "หัวหน้างาน", icon: "👩‍💼" },
    { value: "employee", label: "พนักงาน", icon: "👨‍💻" },
    { value: "intern", label: "นักศึกษาฝึกงาน", icon: "🎓" },
    { value: "freelancer", label: "ฟรีแลนซ์", icon: "💼" },
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

  const addTeamMember = () => {
    const newId = Math.max(...teamMembers.map((m) => m.id)) + 1
    setTeamMembers([...teamMembers, { id: newId, name: "", birthDate: "", position: "employee", lifePathNumber: 0 }])
  }

  const removeTeamMember = (id: number) => {
    if (teamMembers.length > 2) {
      setTeamMembers(teamMembers.filter((member) => member.id !== id))
    }
  }

  const updateTeamMember = (id: number, field: string, value: string) => {
    setTeamMembers(teamMembers.map((member) => (member.id === id ? { ...member, [field]: value } : member)))
  }

  const calculateWorkCompatibility = () => {
    const validMembers = teamMembers.filter((m) => m.name && m.birthDate)
    if (validMembers.length < 2) return

    const numbers = validMembers.map((m) => calculateLifePathNumber(m.birthDate))
    const avgNumber = numbers.reduce((sum, num) => sum + num, 0) / numbers.length

    // Calculate teamwork score
    const variance = numbers.reduce((sum, num) => sum + Math.pow(num - avgNumber, 2), 0) / numbers.length
    const teamworkScore = Math.max(65, 100 - variance * 8)

    // Calculate leadership compatibility
    const leaders = validMembers.filter((m) => ["ceo", "manager", "supervisor"].includes(m.position))
    const leadershipScore = leaders.length > 0 ? 85 + Math.random() * 15 : 75

    const result = {
      teamworkScore: Math.round(teamworkScore),
      leadershipScore: Math.round(leadershipScore),
      overallScore: Math.round((teamworkScore + leadershipScore) / 2),
      teamNumber: Math.round(avgNumber),
      members: validMembers.map((m) => ({
        ...m,
        lifePathNumber: calculateLifePathNumber(m.birthDate),
      })),
      strengths: getWorkStrengths(numbers),
      challenges: getWorkChallenges(numbers),
      advice: getWorkAdvice(numbers),
    }

    setCompatibilityResult(result)
  }

  const getWorkStrengths = (numbers: number[]) => {
    return [
      "การทำงานเป็นทีมที่ดี",
      "การสื่อสารที่มีประสิทธิภาพ",
      "ความคิดสร้างสรรค์และนวัตกรรม",
      "การแก้ปัญหาร่วมกัน",
      "ความมุ่งมั่นในเป้าหมาย",
      "การสนับสนุนซึ่งกันและกัน",
    ].slice(0, 3)
  }

  const getWorkChallenges = (numbers: number[]) => {
    return [
      "ความแตกต่างในวิธีการทำงาน",
      "การจัดการความขัดแย้ง",
      "การแบ่งหน้าที่ความรับผิดชอบ",
      "การตัดสินใจร่วมกัน",
      "ความเครียดจากงาน",
    ].slice(0, 3)
  }

  const getWorkAdvice = (numbers: number[]) => {
    return [
      "จัดประชุมทีมเป็นประจำ",
      "กำหนดเป้าหมายที่ชัดเจน",
      "เคารพความแตกต่างของแต่ละคน",
      "สร้างบรรยากาศการทำงานที่ดี",
      "ให้ feedback ที่สร้างสรรค์",
    ].slice(0, 4)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "#10b981"
    if (score >= 75) return "#f59e0b"
    if (score >= 60) return "#06b6d4"
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
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-[#06b6d4] to-[#0891b2] flex items-center justify-center shadow-lg shadow-[#06b6d4]/30">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">ความเข้ากันในการทำงาน</h1>
              <p className="text-lg text-gray-400">วิเคราะห์ความเข้ากันของทีมงาน</p>
            </div>
          </div>
        </div>

        {/* Team Members Input */}
        <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#0891b2] flex items-center justify-center">
              <Building className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">ข้อมูลสมาชิกทีม</h2>
              <p className="text-gray-400">กรอกข้อมูลสมาชิกในทีมงาน</p>
            </div>
          </div>

          <div className="space-y-6">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="p-4 bg-[#0a0a0a] rounded-xl border border-[#2a2a2a]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Building className="h-5 w-5 text-[#06b6d4]" />
                    <span>สมาชิกคนที่ {index + 1}</span>
                  </h3>
                  {teamMembers.length > 2 && (
                    <button
                      onClick={() => removeTeamMember(member.id)}
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
                      onChange={(e) => updateTeamMember(member.id, "name", e.target.value)}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#06b6d4]"
                      placeholder="กรอกชื่อ"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">ตำแหน่ง</label>
                    <select
                      value={member.position}
                      onChange={(e) => updateTeamMember(member.id, "position", e.target.value)}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white focus:outline-none focus:border-[#06b6d4]"
                    >
                      {positions.map((pos) => (
                        <option key={pos.value} value={pos.value}>
                          {pos.icon} {pos.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">วันเกิด</label>
                    <input
                      type="date"
                      value={member.birthDate}
                      onChange={(e) => updateTeamMember(member.id, "birthDate", e.target.value)}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white focus:outline-none focus:border-[#06b6d4]"
                    />
                  </div>
                </div>

                {member.birthDate && (
                  <div className="mt-4 p-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                    <p className="text-sm text-gray-400 mb-1">Life Path Number</p>
                    <p className="text-xl font-bold text-[#06b6d4]">{calculateLifePathNumber(member.birthDate)}</p>
                  </div>
                )}
              </div>
            ))}

            <div className="flex space-x-4">
              <button
                onClick={addTeamMember}
                className="px-6 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-xl hover:bg-[#1a1a1a] transition-colors flex items-center space-x-2"
              >
                <UserPlus className="h-5 w-5" />
                <span>เพิ่มสมาชิก</span>
              </button>

              <button
                onClick={calculateWorkCompatibility}
                disabled={teamMembers.filter((m) => m.name && m.birthDate).length < 2}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] text-white font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Calculator className="h-5 w-5" />
                <span>วิเคราะห์ความเข้ากันในทีม</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {compatibilityResult && (
          <div className="space-y-6">
            {/* Overall Scores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2">คะแนนรวม</h3>
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: getScoreColor(compatibilityResult.overallScore) }}
                  >
                    {compatibilityResult.overallScore}%
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                    <div
                      className="h-3 rounded-full transition-all duration-1000"
                      style={{
                        width: `${compatibilityResult.overallScore}%`,
                        backgroundColor: getScoreColor(compatibilityResult.overallScore),
                      }}
                    />
                  </div>
                  <p className="text-gray-300 text-sm">ความเข้ากันโดยรวม</p>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2">การทำงานเป็นทีม</h3>
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: getScoreColor(compatibilityResult.teamworkScore) }}
                  >
                    {compatibilityResult.teamworkScore}%
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                    <div
                      className="h-3 rounded-full transition-all duration-1000"
                      style={{
                        width: `${compatibilityResult.teamworkScore}%`,
                        backgroundColor: getScoreColor(compatibilityResult.teamworkScore),
                      }}
                    />
                  </div>
                  <p className="text-gray-300 text-sm">ความสามัคคีในทีม</p>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2">ภาวะผู้นำ</h3>
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: getScoreColor(compatibilityResult.leadershipScore) }}
                  >
                    {compatibilityResult.leadershipScore}%
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                    <div
                      className="h-3 rounded-full transition-all duration-1000"
                      style={{
                        width: `${compatibilityResult.leadershipScore}%`,
                        backgroundColor: getScoreColor(compatibilityResult.leadershipScore),
                      }}
                    />
                  </div>
                  <p className="text-gray-300 text-sm">ความเป็นผู้นำ</p>
                </div>
              </div>
            </div>

            {/* Team Members Overview */}
            <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#0891b2] flex items-center justify-center">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">ภาพรวมทีมงาน</h2>
                  <p className="text-gray-400">เลข Life Path และตำแหน่งของแต่ละคน</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {compatibilityResult.members.map((member: any, index: number) => (
                  <div key={member.id} className="p-4 bg-[#0a0a0a] rounded-xl border border-[#2a2a2a]">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#0891b2] flex items-center justify-center text-white font-bold">
                        {member.lifePathNumber}
                      </div>
                      <div>
                        <p className="font-bold text-white">{member.name}</p>
                        <p className="text-sm text-gray-400">
                          {positions.find((p) => p.value === member.position)?.label}
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
              <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a] p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">จุดแข็งของทีม</h2>
                    <p className="text-gray-400">สิ่งที่ทีมทำได้ดี</p>
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
                    <Building className="h-6 w-6 text-white" />
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
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#0891b2] flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">คำแนะนำ</h2>
                    <p className="text-gray-400">วิธีเสริมสร้างทีมงาน</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {compatibilityResult.advice.map((advice: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></div>
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

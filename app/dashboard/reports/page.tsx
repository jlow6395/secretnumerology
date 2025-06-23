"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import { AppleCard } from '@/design-system/AppleCard'
import { AppleButton } from '@/design-system/AppleButton'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { 
  calculateLifePathNumber, 
  calculateTalentNumber, 
  calculateSunNumber,
  calculateExpressionNumber,
  calculatePersonalityNumber,
  calculateHeartDesireNumber,
  calculatePersonalYear
} from '@/lib/numerology/core'

// Report types
const REPORT_TYPES = {
  basic: {
    name: 'รายงานพื้นฐาน',
    description: 'วิเคราะห์เลขศาสตร์พื้นฐาน 5 ตัวหลัก',
    price: 'ฟรี',
    features: [
      'Life Path Number',
      'Talent Number', 
      'Sun Number',
      'คำแนะนำพื้นฐาน',
      'ความเข้ากันในความรัก'
    ],
    color: '#10B981',
    icon: '📊'
  },
  premium: {
    name: 'รายงานพรีเมียม',
    description: 'วิเคราะห์เลขศาสตร์ครบถ้วน 14 สูตร',
    price: '฿299',
    features: [
      'เลขศาสตร์ครบ 14 สูตร',
      'การวิเคราะห์เชิงลึก',
      'คำทำนายรายปี',
      'ช่วงเวลาดีในชีวิต',
      'คำแนะนำการเงิน',
      'ความเข้ากันแบบละเอียด',
      'เลขนำโชครายวัน',
      'PDF ดาวน์โหลดได้'
    ],
    color: '#F59E0B',
    icon: '⭐'
  },
  vip: {
    name: 'รายงาน VIP',
    description: 'รายงานส่วนบุคคลแบบ 1:1 จากผู้เชี่ยวชาญ',
    price: '฿999',
    features: [
      'ทุกอย่างในแพ็คพรีเมียม',
      'การปรึกษา 1:1 กับผู้เชี่ยวชาญ',
      'รายงานส่วนบุคคลแบบละเอียด',
      'คำแนะนำเฉพาะตัว',
      'การติดตามผล 3 เดือน',
      'ยันต์เสริมดวงส่วนตัว',
      'คำปรึกษาไม่จำกัด',
      'รายงานพิเศษ 20+ หน้า'
    ],
    color: '#8B5CF6',
    icon: '👑'
  }
}

export default function ReportsPage() {
  const router = useRouter()
  const { activeProfile } = useAuth()
  const [selectedReport, setSelectedReport] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  // Demo data if no profile
  const demoProfile = {
    name: 'สมชาย ใจดี',
    birthDate: '1990-05-15',
    fullName: 'สมชาย ใจดี'
  }

  const currentProfile = activeProfile || demoProfile

  // Generate sample report data
  const generateReportData = () => {
    const lifePath = calculateLifePathNumber(currentProfile.birthDate)
    const talent = calculateTalentNumber(currentProfile.birthDate)
    const sunNumber = calculateSunNumber(currentProfile.birthDate)
    const expression = calculateExpressionNumber(currentProfile.name)
    const personality = calculatePersonalityNumber(currentProfile.name)
    const heartDesire = calculateHeartDesireNumber(currentProfile.name)
    const personalYear = calculatePersonalYear(currentProfile.birthDate, new Date().getFullYear())

    return {
      lifePath,
      talent,
      sunNumber,
      expression,
      personality,
      heartDesire,
      personalYear,
      compatibility: Math.floor(Math.random() * 30) + 70, // 70-100%
      luckyNumbers: [lifePath, sunNumber, personalYear],
      challenges: ['ความอดทน', 'การสื่อสาร', 'การตัดสินใจ'],
      opportunities: ['การเงิน', 'ความรัก', 'การงาน'],
      bestMonths: ['มีนาคม', 'มิถุนายน', 'กันยายน'],
      colors: ['น้ำเงิน', 'ทอง', 'เขียว']
    }
  }

  const handleReportSelect = (reportType: string) => {
    setSelectedReport(reportType)
    if (reportType === 'basic') {
      setShowPreview(true)
    } else {
      // For premium reports, show purchase flow
      alert(`กำลังเปิดหน้าชำระเงินสำหรับ ${REPORT_TYPES[reportType as keyof typeof REPORT_TYPES].name}`)
    }
  }

  const generateBasicReport = async () => {
    setIsGenerating(true)
    // Simulate report generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsGenerating(false)
    setShowPreview(true)
  }

  const reportData = generateReportData()

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">📋</div>
          <h1 className="text-4xl font-bold text-white">รายงานเลขศาสตร์</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            รายงานวิเคราะห์เลขศาสตร์แบบละเอียดและครบถ้วน<br />
            เพื่อช่วยให้คุณเข้าใจตัวเองและวางแผนชีวิตได้ดีขึ้น
          </p>
        </div>

        {/* Profile Info */}
        <AppleCard className="p-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">👤</div>
            <div>
              <h2 className="text-2xl font-bold text-white">{currentProfile.name}</h2>
              <p className="text-gray-400">
                เกิดวันที่ {new Date(currentProfile.birthDate).toLocaleDateString('th-TH', {
                  year: 'numeric',
                  month: 'long', 
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </AppleCard>

        {/* Report Types */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">เลือกประเภทรายงาน</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(REPORT_TYPES).map(([key, report]) => (
              <AppleCard 
                key={key}
                className={`p-6 cursor-pointer hover:scale-105 transition-all relative ${
                  key === 'vip' ? 'ring-2 ring-purple-500/50' : ''
                }`}
                onClick={() => handleReportSelect(key)}
              >
                {key === 'vip' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      แนะนำ
                    </div>
                  </div>
                )}

                <div className="text-center space-y-4">
                  <div className="text-5xl">{report.icon}</div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{report.name}</h3>
                    <div 
                      className="text-2xl font-bold mb-3"
                      style={{ color: report.color }}
                    >
                      {report.price}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{report.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {report.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="text-green-400">✓</div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <AppleButton
                      variant={key === 'basic' ? 'primary' : 'secondary'}
                      className="w-full"
                      style={{ 
                        backgroundColor: key !== 'basic' ? report.color : undefined,
                        borderColor: report.color 
                      }}
                    >
                      {key === 'basic' ? 'สร้างรายงานฟรี' : 'สั่งซื้อรายงาน'}
                    </AppleButton>
                  </div>
                </div>
              </AppleCard>
            ))}
          </div>
        </div>

        {/* Sample Reports */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">ตัวอย่างรายงาน</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AppleCard className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">📊</div>
                  <h3 className="text-xl font-bold text-white">รายงานพื้นฐาน</h3>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Life Path:</span>
                    <span className="text-white font-bold">{reportData.lifePath}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Talent:</span>
                    <span className="text-white font-bold">{reportData.talent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sun Number:</span>
                    <span className="text-white font-bold">{reportData.sunNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">ความเข้ากัน:</span>
                    <span className="text-green-400 font-bold">{reportData.compatibility}%</span>
                  </div>
                </div>

                <AppleButton
                  variant="primary"
                  className="w-full"
                  onClick={generateBasicReport}
                  disabled={isGenerating}
                >
                  {isGenerating ? 'กำลังสร้าง...' : 'ดูตัวอย่าง'}
                </AppleButton>
              </div>
            </AppleCard>

            <AppleCard className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⭐</div>
                  <h3 className="text-xl font-bold text-white">รายงานพรีเมียม</h3>
                </div>
                
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl p-4 space-y-3">
                  <div className="text-center mb-3">
                    <div className="text-amber-300 font-bold">เลขศาสตร์ครบ 14 สูตร</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-300">• Life Path</div>
                    <div className="text-gray-300">• Expression</div>
                    <div className="text-gray-300">• Personality</div>
                    <div className="text-gray-300">• Heart's Desire</div>
                    <div className="text-gray-300">• Personal Year</div>
                    <div className="text-gray-300">• และอีก 9 สูตร</div>
                  </div>
                  
                  <div className="text-center pt-2">
                    <div className="text-amber-300 text-sm">+ การวิเคราะห์เชิงลึก 15+ หน้า</div>
                  </div>
                </div>

                <AppleButton
                  variant="secondary"
                  className="w-full"
                  style={{ backgroundColor: '#F59E0B', color: 'white' }}
                  onClick={() => handleReportSelect('premium')}
                >
                  สั่งซื้อ ฿299
                </AppleButton>
              </div>
            </AppleCard>
          </div>
        </div>

        {/* Basic Report Preview Modal */}
        {showPreview && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <AppleCard className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">📊</div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">รายงานเลขศาสตร์พื้นฐาน</h2>
                      <p className="text-xl text-gray-400">{currentProfile.name}</p>
                    </div>
                  </div>
                  
                  <AppleButton
                    variant="ghost"
                    onClick={() => setShowPreview(false)}
                  >
                    ✕
                  </AppleButton>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">สรุปผลการวิเคราะห์</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">{reportData.lifePath}</div>
                      <div className="text-sm text-gray-300">Life Path</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">{reportData.talent}</div>
                      <div className="text-sm text-gray-300">Talent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">{reportData.compatibility}%</div>
                      <div className="text-sm text-gray-300">ความเข้ากัน</div>
                    </div>
                  </div>
                </div>

                {/* Detailed Analysis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">จุดแข็ง</h3>
                    <div className="space-y-3">
                      {reportData.opportunities.map((opportunity, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="text-green-400">✓</div>
                          <span className="text-gray-300">{opportunity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">จุดที่ควรพัฒนา</h3>
                    <div className="space-y-3">
                      {reportData.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="text-yellow-400">⚠</div>
                          <span className="text-gray-300">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Lucky Elements */}
                <div className="bg-white/5 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">สิ่งที่เสริมดวง</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">เลขนำโชค</h4>
                      <div className="flex gap-2">
                        {reportData.luckyNumbers.map((num, index) => (
                          <div key={index} className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                            {num}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">สีมงคล</h4>
                      <div className="flex gap-2">
                        {reportData.colors.map((color, index) => (
                          <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">เดือนดี</h4>
                      <div className="space-y-1">
                        {reportData.bestMonths.map((month, index) => (
                          <div key={index} className="text-sm text-gray-300">{month}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">คำแนะนำ</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• ใช้เลขนำโชคในการตัดสินใจสำคัญ</p>
                    <p>• พัฒนาจุดแข็งและปรับปรุงจุดอ่อน</p>
                    <p>• ใช้สีมงคลในเสื้อผ้าและของใช้</p>
                    <p>• วางแผนกิจกรรมสำคัญในเดือนที่ดี</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <AppleButton
                    variant="primary"
                    className="flex-1"
                    onClick={() => {
                      // TODO: Implement PDF download
                      alert('ฟีเจอร์ดาวน์โหลด PDF กำลังพัฒนา')
                    }}
                  >
                    📄 ดาวน์โหลด PDF
                  </AppleButton>
                  <AppleButton
                    variant="secondary"
                    className="flex-1"
                    onClick={() => handleReportSelect('premium')}
                  >
                    ⭐ อัพเกรดเป็นพรีเมียม
                  </AppleButton>
                </div>
              </div>
            </AppleCard>
          </div>
        )}

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">ความคิดเห็นจากผู้ใช้</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'คุณสมใจ',
                review: 'รายงานแม่นยำมาก ช่วยให้เข้าใจตัวเองมากขึ้น และวางแผนชีวิตได้ดีขึ้น',
                rating: 5,
                type: 'Premium'
              },
              {
                name: 'คุณมาลี',
                review: 'คุ้มค่ามาก รายงาน VIP ให้คำแนะนำที่ละเอียดและเฉพาะเจาะจง',
                rating: 5,
                type: 'VIP'
              },
              {
                name: 'คุณวิชัย',
                review: 'รายงานฟรีก็มีประโยชน์แล้ว แต่รายงานพรีเมียมคุ้มค่าจริงๆ',
                rating: 4,
                type: 'Basic'
              }
            ].map((testimonial, index) => (
              <AppleCard key={index} className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">👤</div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.type} Report</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <div key={i} className="text-yellow-400">⭐</div>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm italic">"{testimonial.review}"</p>
                </div>
              </AppleCard>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">
            รายงานเลขศาสตร์เป็นเครื่องมือช่วยในการทำความเข้าใจตัวเอง<br />
            ผลลัพธ์ควรใช้เป็นแนวทางและไม่ควรใช้เป็นตัวกำหนดชีวิตเพียงอย่างเดียว
          </p>
        </div>
      </div>
    </div>
  )
}

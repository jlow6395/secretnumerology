"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AppleCard, AppleCardHeader, AppleCardTitle, AppleCardContent } from '@/design-system/AppleCard'
import { AppleButton, AppleIconButton } from '@/design-system/AppleButton'
import { Badge } from '@/components/ui/badge'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { getCompleteNumberIcon } from '@/design-system/icons/AllNumberIcons'

// Import numerology functions
import { calculateLifePathNumber } from '@/lib/numerology/core'

interface CompatibilityResult {
  percentage: number
  level: string
  color: string
  description: string
  strengths: string[]
  challenges: string[]
  advice: string
}

type CompatibilityType = 'love' | 'work' | 'family'

const compatibilityTypes = [
  {
    id: 'love' as CompatibilityType,
    label: 'ความรัก',
    icon: <NumerologyIcons.love size={24} />,
    gradient: 'from-pink-500/20 to-red-500/20',
    description: 'ความเข้ากันในเรื่องความรัก'
  },
  {
    id: 'work' as CompatibilityType,
    label: 'การงาน',
    icon: <NumerologyIcons.insight size={24} />,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    description: 'ความเข้ากันในการทำงาน'
  },
  {
    id: 'family' as CompatibilityType,
    label: 'ครอบครัว',
    icon: <NumerologyIcons.lotus size={24} />,
    gradient: 'from-green-500/20 to-emerald-500/20',
    description: 'ความเข้ากันในครอบครัว'
  }
]

export default function CompatibilityPage() {
  const router = useRouter()
  const [selectedType, setSelectedType] = useState<CompatibilityType>('love')
  const [userNumber, setUserNumber] = useState('')
  const [partnerNumber, setPartnerNumber] = useState('')
  const [result, setResult] = useState<CompatibilityResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateCompatibility = async () => {
    if (!userNumber || !partnerNumber) return

    setIsCalculating(true)
    
    // Simulate calculation delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    const user = parseInt(userNumber)
    const partner = parseInt(partnerNumber)
    
    // Simple compatibility calculation
    const difference = Math.abs(user - partner)
    let percentage: number
    
    if (difference === 0) {
      percentage = 95 // Same numbers
    } else if (difference === 1 || difference === 8) {
      percentage = 85 // Adjacent or complementary
    } else if (difference === 2 || difference === 7) {
      percentage = 75 // Good compatibility
    } else if (difference === 3 || difference === 6) {
      percentage = 65 // Moderate compatibility
    } else {
      percentage = 55 // Challenging but workable
    }

    // Adjust based on type
    if (selectedType === 'work') {
      percentage += 5 // Work relationships are more flexible
    } else if (selectedType === 'family') {
      percentage += 10 // Family bonds are stronger
    }

    percentage = Math.min(percentage, 100)

    const getCompatibilityLevel = (score: number) => {
      if (score >= 90) return { level: 'ยอดเยี่ยม', color: 'text-green-400' }
      if (score >= 80) return { level: 'ดีมาก', color: 'text-blue-400' }
      if (score >= 70) return { level: 'ดี', color: 'text-yellow-400' }
      if (score >= 60) return { level: 'ปานกลาง', color: 'text-orange-400' }
      return { level: 'ท้าทาย', color: 'text-red-400' }
    }

    const { level, color } = getCompatibilityLevel(percentage)

    const compatibilityData: CompatibilityResult = {
      percentage,
      level,
      color,
      description: `เลข ${user} และ ${partner} มีความเข้ากันในระดับ${level}`,
      strengths: [
        'มีความเข้าใจซึ่งกันและกัน',
        'สามารถสื่อสารได้อย่างมีประสิทธิภาพ',
        'มีเป้าหมายที่สอดคล้องกัน',
        'สนับสนุนการเติบโตของกันและกัน'
      ],
      challenges: [
        'อาจมีมุมมองที่แตกต่างในบางเรื่อง',
        'ต้องใช้เวลาในการปรับตัว',
        'ควรหาจุดสมดุลในการตัดสินใจ'
      ],
      advice: selectedType === 'love' 
        ? 'ควรใช้เวลาร่วมกันมากขึ้น และเปิดใจรับฟังความคิดเห็นของกันและกัน'
        : selectedType === 'work'
        ? 'ควรแบ่งหน้าที่ตามจุดแข็งของแต่ละคน และสื่อสารอย่างชัดเจน'
        : 'ควรเคารพความแตกต่าง และสร้างความเข้าใจที่ดีในครอบครัว'
    }

    setResult(compatibilityData)
    setIsCalculating(false)
  }

  const resetCalculation = () => {
    setUserNumber('')
    setPartnerNumber('')
    setResult(null)
  }

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <AppleIconButton
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            }
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            aria-label="กลับ"
          />
          <div>
            <h1 className="text-2xl font-bold text-white font-[SF_Pro_Display]">
              ความเข้ากัน
            </h1>
            <p className="text-gray-400 text-sm">
              ตรวจสอบความเข้ากันในด้านต่างๆ
            </p>
          </div>
        </div>
      </div>

      {/* Type Selection */}
      <AppleCard variant="default" size="md" className="mb-6">
        <AppleCardHeader>
          <AppleCardTitle className="text-lg">เลือกประเภทความเข้ากัน</AppleCardTitle>
        </AppleCardHeader>
        <AppleCardContent>
          <div className="grid grid-cols-1 gap-3">
            {compatibilityTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${
                  selectedType === type.id
                    ? `bg-gradient-to-r ${type.gradient} border border-white/20`
                    : 'bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05]'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  selectedType === type.id ? 'bg-white/20' : 'bg-white/10'
                }`}>
                  {type.icon}
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-white">{type.label}</div>
                  <div className="text-sm text-gray-400">{type.description}</div>
                </div>
                {selectedType === type.id && (
                  <div className="w-5 h-5 text-blue-400">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </AppleCardContent>
      </AppleCard>

      {/* Number Input */}
      <AppleCard variant="default" size="md" className="mb-6">
        <AppleCardHeader>
          <AppleCardTitle className="text-lg">ใส่เลขเพื่อเปรียบเทียบ</AppleCardTitle>
        </AppleCardHeader>
        <AppleCardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                เลขของคุณ (Life Path Number)
              </label>
              <input
                type="number"
                min="1"
                max="33"
                value={userNumber}
                onChange={(e) => setUserNumber(e.target.value)}
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="เช่น 7"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                เลขของคู่ (Life Path Number)
              </label>
              <input
                type="number"
                min="1"
                max="33"
                value={partnerNumber}
                onChange={(e) => setPartnerNumber(e.target.value)}
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="เช่น 3"
              />
            </div>
          </div>
        </AppleCardContent>
      </AppleCard>

      {/* Calculate Button */}
      <div className="flex gap-3 mb-6">
        <AppleButton
          onClick={calculateCompatibility}
          disabled={!userNumber || !partnerNumber || isCalculating}
          loading={isCalculating}
          variant="secondary"
          size="lg"
          className="flex-1"
          glow
        >
          {isCalculating ? 'กำลังคำนวณ...' : 'คำนวณความเข้ากัน'}
        </AppleButton>
        
        {result && (
          <AppleIconButton
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            }
            variant="ghost"
            size="lg"
            onClick={resetCalculation}
            aria-label="รีเซ็ต"
          />
        )}
      </div>

      {/* Result */}
      {result && (
        <div className="space-y-4">
          {/* Compatibility Score */}
          <AppleCard variant="interactive" size="lg" className="text-center">
            <div className="mb-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16">
                  {getCompleteNumberIcon(parseInt(userNumber))}
                </div>
                <div className="text-2xl text-gray-400">+</div>
                <div className="w-16 h-16">
                  {getCompleteNumberIcon(parseInt(partnerNumber))}
                </div>
              </div>
              
              <div className="text-6xl font-bold text-white mb-2 font-[SF_Pro_Display]">
                {result.percentage}%
              </div>
              
              <Badge className={`${result.color} bg-white/10 border-white/20 text-lg px-4 py-2`}>
                {result.level}
              </Badge>
            </div>
            
            <p className="text-gray-300 text-center leading-relaxed">
              {result.description}
            </p>
          </AppleCard>

          {/* Strengths */}
          <AppleCard variant="default" size="md">
            <AppleCardHeader>
              <AppleCardTitle className="flex items-center gap-2 text-green-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                จุดแข็งของความสัมพันธ์
              </AppleCardTitle>
            </AppleCardHeader>
            <AppleCardContent>
              <ul className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{strength}</span>
                  </li>
                ))}
              </ul>
            </AppleCardContent>
          </AppleCard>

          {/* Challenges */}
          <AppleCard variant="default" size="md">
            <AppleCardHeader>
              <AppleCardTitle className="flex items-center gap-2 text-orange-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                ความท้าทายที่ควรระวัง
              </AppleCardTitle>
            </AppleCardHeader>
            <AppleCardContent>
              <ul className="space-y-2">
                {result.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </AppleCardContent>
          </AppleCard>

          {/* Advice */}
          <AppleCard variant="premium" size="md">
            <AppleCardHeader>
              <AppleCardTitle className="flex items-center gap-2 text-yellow-400">
                <NumerologyIcons.lotus className="w-5 h-5" />
                คำแนะนำจากเลขศาสตร์
              </AppleCardTitle>
            </AppleCardHeader>
            <AppleCardContent>
              <p className="text-gray-300 leading-relaxed">
                {result.advice}
              </p>
            </AppleCardContent>
          </AppleCard>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <AppleButton
              onClick={() => router.push('/dashboard/reports')}
              variant="ghost"
              size="md"
              leftIcon={<NumerologyIcons.reports size={20} />}
            >
              ดูรายงานเชิงลึก
            </AppleButton>
            
            <AppleButton
              onClick={() => router.push('/dashboard/ai-chat')}
              variant="ghost"
              size="md"
              leftIcon={<NumerologyIcons.aiChat size={20} />}
            >
              ปรึกษา AI
            </AppleButton>
          </div>
        </div>
      )}
    </div>
  )
}

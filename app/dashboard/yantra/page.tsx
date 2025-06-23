"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import { AppleCard } from '@/design-system/AppleCard'
import { AppleButton } from '@/design-system/AppleButton'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { calculateLifePathNumber, calculateSunNumber } from '@/lib/numerology/core'

// Yantra data based on numerology
const YANTRA_DATA = {
  1: {
    name: 'ยันต์ผู้นำ',
    description: 'เสริมความเป็นผู้นำ ความมั่นใจ และการเริ่มต้นใหม่',
    benefits: ['เพิ่มความมั่นใจ', 'ส่งเสริมความเป็นผู้นำ', 'ช่วยในการตัดสินใจ', 'เสริมความกล้าหาญ'],
    color: '#FF6B35',
    symbol: '🔥',
    mantra: 'โอม หริ นะโม นะมะ',
    bestTime: 'วันอาทิตย์ เวลา 6:00-12:00 น.',
    materials: ['ทองแดง', 'ใบลาน', 'หิน Ruby'],
    placement: 'ทิศตะวันออก',
    yantraPattern: `
    ॐ हृीं नमो नमः
    ४ ९ २
    ३ ५ ७  
    ८ १ ६
    `
  },
  2: {
    name: 'ยันต์ความรัก',
    description: 'เสริมความรัก ความสัมพันธ์ และความร่วมมือ',
    benefits: ['ดึงดูดความรัก', 'เสริมความสัมพันธ์', 'เพิ่มเสน่ห์', 'ช่วยในการทำงานร่วมกัน'],
    color: '#FF69B4',
    symbol: '💖',
    mantra: 'โอม ศรี นะโม นะมะ',
    bestTime: 'วันจันทร์ เวลา 18:00-24:00 น.',
    materials: ['เงิน', 'คริสตัล', 'หิน Moonstone'],
    placement: 'ทิศตะวันตก',
    yantraPattern: `
    ॐ श्रीं नमो नमः
    २ ७ ६
    ९ ५ १
    ४ ३ ८
    `
  },
  3: {
    name: 'ยันต์การสื่อสาร',
    description: 'เสริมความคิดสร้างสรรค์ การสื่อสาร และศิลปะ',
    benefits: ['เพิ่มความคิดสร้างสรรค์', 'ช่วยในการสื่อสาร', 'เสริมพรสวรรค์ด้านศิลปะ', 'ดึงดูดโอกาสใหม่'],
    color: '#FFD700',
    symbol: '🎨',
    mantra: 'โอม กัม นะโม นะมะ',
    bestTime: 'วันพุธ เวลา 12:00-18:00 น.',
    materials: ['ทองเหลือง', 'ไม้จันทน์', 'หิน Citrine'],
    placement: 'ทิศเหนือ',
    yantraPattern: `
    ॐ गं नमो नमः
    ६ १ ८
    ७ ५ ३
    २ ९ ४
    `
  },
  4: {
    name: 'ยันต์ความมั่นคง',
    description: 'เสริมความมั่นคง การทำงาน และความอดทน',
    benefits: ['เสริมความมั่นคงทางการเงิน', 'ช่วยในการทำงาน', 'เพิ่มความอดทน', 'สร้างรากฐานที่แข็งแรง'],
    color: '#8B4513',
    symbol: '🏔️',
    mantra: 'โอม รัง นะโม นะมะ',
    bestTime: 'วันเสาร์ เวลา 6:00-12:00 น.',
    materials: ['เหล็ก', 'หิน', 'หิน Garnet'],
    placement: 'ทิศใต้',
    yantraPattern: `
    ॐ रं नमो नमः
    ८ ३ ४
    १ ५ ९
    ६ ७ २
    `
  },
  5: {
    name: 'ยันต์เสรีภาพ',
    description: 'เสริมการเดินทาง ความเสรี และการผจญภัย',
    benefits: ['ดึงดูดโอกาสเดินทาง', 'เสริมความเสรี', 'ช่วยในการเปลี่ยนแปลง', 'เพิ่มพลังในการผจญภัย'],
    color: '#00CED1',
    symbol: '🌊',
    mantra: 'โอม หริ นะโม นะมะ',
    bestTime: 'วันพฤหัสบดี เวลา 18:00-24:00 น.',
    materials: ['ปรอท', 'แก้ว', 'หิน Aquamarine'],
    placement: 'ทิศตะวันออกเฉียงเหนือ',
    yantraPattern: `
    ॐ ह्रीं नमो नमः
    ४ ९ २
    ३ ५ ७
    ८ १ ६
    `
  },
  6: {
    name: 'ยันต์ครอบครัว',
    description: 'เสริมความรัก ครอบครัว และการดูแลผู้อื่น',
    benefits: ['เสริมความรักในครอบครัว', 'ช่วยในการดูแลผู้อื่น', 'เพิ่มความเมตตา', 'สร้างบ้านที่อบอุ่น'],
    color: '#FF69B4',
    symbol: '🏠',
    mantra: 'โอม ศุก นะโม นะมะ',
    bestTime: 'วันศุกร์ เวลา 12:00-18:00 น.',
    materials: ['ทองคำ', 'เงิน', 'หิน Rose Quartz'],
    placement: 'ทิศตะวันตกเฉียงใต้',
    yantraPattern: `
    ॐ शुक्र नमो नमः
    २ ७ ६
    ९ ५ १
    ४ ३ ८
    `
  },
  7: {
    name: 'ยันต์ปัญญา',
    description: 'เสริมปัญญา การทำสมาธิ และความเข้าใจธรรมชาติ',
    benefits: ['เพิ่มปัญญา', 'ช่วยในการทำสมาธิ', 'เสริมสติปัญญา', 'เข้าใจความลึกลับของชีวิต'],
    color: '#9370DB',
    symbol: '🔮',
    mantra: 'โอม เก นะโม นะมะ',
    bestTime: 'วันเสาร์ เวลา 18:00-24:00 น.',
    materials: ['เงิน', 'คริสตัล', 'หิน Amethyst'],
    placement: 'ทิศตะวันตกเฉียงเหนือ',
    yantraPattern: `
    ॐ के नमो नमः
    ६ १ ८
    ७ ५ ३
    २ ९ ४
    `
  },
  8: {
    name: 'ยันต์ความสำเร็จ',
    description: 'เสริมความสำเร็จ อำนาจ และการเงิน',
    benefits: ['เสริมความสำเร็จในการงาน', 'ดึงดูดความร่ำรวย', 'เพิ่มอำนาจ', 'ช่วยในการบริหาร'],
    color: '#000080',
    symbol: '👑',
    mantra: 'โอม ศนิ นะโม นะมะ',
    bestTime: 'วันเสาร์ เวลา 6:00-12:00 น.',
    materials: ['เหล็กดำ', 'หิน', 'หิน Sapphire'],
    placement: 'ทิศใต้',
    yantraPattern: `
    ॐ शनि नमो नमः
    ८ ३ ४
    १ ५ ९
    ६ ७ २
    `
  },
  9: {
    name: 'ยันต์ความเมตตา',
    description: 'เสริมความเมตตา การให้ และการช่วยเหลือผู้อื่น',
    benefits: ['เพิ่มความเมตตา', 'ช่วยในการให้', 'เสริมจิตใจที่ดี', 'ดึงดูดการช่วยเหลือ'],
    color: '#DC143C',
    symbol: '❤️',
    mantra: 'โอม มัง นะโม นะมะ',
    bestTime: 'วันอังคาร เวลา 12:00-18:00 น.',
    materials: ['ทองแดง', 'ใบลาน', 'หิน Coral'],
    placement: 'ทิศตะวันออกเฉียงใต้',
    yantraPattern: `
    ॐ मं नमो नमः
    ४ ९ २
    ३ ५ ७
    ८ १ ६
    `
  }
}

export default function YantraPage() {
  const router = useRouter()
  const { activeProfile } = useAuth()
  const [selectedYantra, setSelectedYantra] = useState<number | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  // Demo data if no profile
  const demoProfile = {
    name: 'สมชาย ใจดี',
    birthDate: '1990-05-15'
  }

  const currentProfile = activeProfile || demoProfile
  const lifePath = calculateLifePathNumber(currentProfile.birthDate)
  const sunNumber = calculateSunNumber(currentProfile.birthDate)

  // Recommended yantras based on numerology
  const recommendedYantras = [lifePath, sunNumber].filter((num, index, arr) => arr.indexOf(num) === index)

  const handleYantraSelect = (number: number) => {
    setSelectedYantra(number)
    setShowDetails(true)
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🔯</div>
          <h1 className="text-4xl font-bold text-white">ยันต์มงคล</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ยันต์ศักดิ์สิทธิ์ที่เหมาะสมกับเลขศาสตร์ของคุณ<br />
            เสริมพลังชีวิตและดึงดูดสิ่งดีๆ
          </p>
        </div>

        {/* Personal Recommendations */}
        <AppleCard className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <NumerologyIcons.yantra size={32} className="text-amber-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">ยันต์ที่แนะนำสำหรับคุณ</h2>
              <p className="text-gray-400">
                {currentProfile.name} • Life Path: {lifePath} • Sun Number: {sunNumber}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendedYantras.map((number) => {
              const yantra = YANTRA_DATA[number as keyof typeof YANTRA_DATA]
              if (!yantra) return null
              return (
                <div 
                  key={number}
                  className="relative bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all"
                  onClick={() => handleYantraSelect(number)}
                >
                  <div className="absolute top-4 right-4">
                    <div className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium">
                      แนะนำ
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{yantra.symbol}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{yantra.name}</h3>
                      <p className="text-amber-300">เลข {number}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{yantra.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {yantra.benefits.slice(0, 2).map((benefit, index) => (
                      <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </AppleCard>

        {/* All Yantras Grid */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">ยันต์ทั้ง 9 แบบ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(YANTRA_DATA).map(([number, yantra]) => {
              const isRecommended = recommendedYantras.includes(parseInt(number))
              
              return (
                <AppleCard 
                  key={number}
                  className={`relative p-6 cursor-pointer hover:scale-105 transition-all ${
                    isRecommended ? 'ring-2 ring-amber-500/50' : ''
                  }`}
                  onClick={() => handleYantraSelect(parseInt(number))}
                >
                  {isRecommended && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full text-xs font-medium">
                        แนะนำ
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center space-y-4">
                    <div className="text-5xl" style={{ color: yantra.color }}>
                      {yantra.symbol}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{yantra.name}</h3>
                      <div className="text-lg font-medium mb-2" style={{ color: yantra.color }}>
                        เลข {number}
                      </div>
                      <p className="text-gray-400 text-sm">{yantra.description}</p>
                    </div>
                    
                    <div className="space-y-2">
                      {yantra.benefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="bg-white/5 text-white px-3 py-1 rounded-full text-sm">
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </AppleCard>
              )
            })}
          </div>
        </div>

        {/* Yantra Details Modal */}
        {showDetails && selectedYantra && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <AppleCard className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-8 space-y-6">
                {(() => {
                  const yantra = YANTRA_DATA[selectedYantra as keyof typeof YANTRA_DATA]
                  return (
                    <>
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-6xl">{yantra.symbol}</div>
                          <div>
                            <h2 className="text-3xl font-bold text-white">{yantra.name}</h2>
                            <p className="text-xl" style={{ color: yantra.color }}>เลข {selectedYantra}</p>
                          </div>
                        </div>
                        
                        <AppleButton
                          variant="ghost"
                          onClick={() => setShowDetails(false)}
                        >
                          ✕
                        </AppleButton>
                      </div>

                      {/* Description */}
                      <div className="bg-white/5 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-3">คำอธิบาย</h3>
                        <p className="text-gray-300 text-lg">{yantra.description}</p>
                      </div>

                      {/* Benefits */}
                      <div className="bg-white/5 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">ประโยชน์</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {yantra.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="text-green-400">✓</div>
                              <span className="text-gray-300">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Yantra Pattern */}
                      <div className="bg-white/5 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">รูปแบบยันต์</h3>
                        <div className="bg-black/50 rounded-xl p-6 text-center">
                          <pre className="text-amber-300 text-lg font-mono whitespace-pre-line">
                            {yantra.yantraPattern}
                          </pre>
                        </div>
                      </div>

                      {/* Usage Instructions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/5 rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4">วิธีใช้</h3>
                          <div className="space-y-3 text-gray-300">
                            <div><strong>มนต์:</strong> {yantra.mantra}</div>
                            <div><strong>เวลาที่ดี:</strong> {yantra.bestTime}</div>
                            <div><strong>ทิศที่เหมาะสม:</strong> {yantra.placement}</div>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4">วัสดุที่เหมาะสม</h3>
                          <div className="space-y-2">
                            {yantra.materials.map((material, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: yantra.color }}></div>
                                <span className="text-gray-300">{material}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <AppleButton
                          variant="primary"
                          className="flex-1"
                          onClick={() => {
                            // TODO: Implement order functionality
                            alert('ฟีเจอร์การสั่งซื้อยังไม่พร้อมใช้งาน')
                          }}
                        >
                          🛒 สั่งทำยันต์
                        </AppleButton>
                        <AppleButton
                          variant="secondary"
                          className="flex-1"
                          onClick={() => router.push('/dashboard/ai-chat')}
                        >
                          💬 ปรึกษา AI
                        </AppleButton>
                      </div>
                    </>
                  )
                })()}
              </div>
            </AppleCard>
          </div>
        )}

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">
            ยันต์เป็นศาสตร์โบราณที่ใช้เพื่อเสริมพลังชีวิต<br />
            ผลลัพธ์ขึ้นอยู่กับความเชื่อและการปฏิบัติของแต่ละบุคคล
          </p>
        </div>
      </div>
    </div>
  )
}

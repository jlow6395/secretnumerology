"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AppleCard } from '@/design-system/AppleCard'
import { AppleButton } from '@/design-system/AppleButton'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'

// Angel Numbers data
const ANGEL_NUMBERS = {
  111: {
    meaning: 'การเริ่มต้นใหม่และโอกาสทอง',
    description: 'เลข 111 เป็นสัญญาณของการเริ่มต้นใหม่ เทวดาส่งสัญญาณให้คุณรู้ว่าคุณกำลังเข้าสู่ช่วงเวลาแห่งการเปลี่ยนแปลงที่ดี',
    messages: [
      'ความคิดของคุณกำลังกลายเป็นจริง',
      'เป็นเวลาที่เหมาะสมสำหรับการเริ่มต้นใหม่',
      'จงมั่นใจในความสามารถของตัวเอง',
      'โอกาสทองกำลังจะมาถึง'
    ],
    actions: [
      'ตั้งเป้าหมายใหม่และทำแผนการ',
      'เปิดใจรับสิ่งใหม่ๆ',
      'ใช้พลังความคิดเชิงบวก',
      'เริ่มโปรเจคที่เลื่อนมานาน'
    ],
    color: '#FFD700',
    energy: 'เริ่มต้น'
  },
  222: {
    meaning: 'ความสมดุลและความร่วมมือ',
    description: 'เลข 222 เป็นสัญญาณของความสมดุลในชีวิต เทวดาต้องการให้คุณรู้ว่าทุกอย่างกำลังเข้าที่เข้าทาง',
    messages: [
      'ความสัมพันธ์ของคุณกำลังพัฒนาไปในทางที่ดี',
      'ความอดทนจะนำมาซึ่งผลลัพธ์ที่ดี',
      'จงเชื่อมั่นในกระบวนการของชีวิต',
      'การทำงานร่วมกันจะประสบความสำเร็จ'
    ],
    actions: [
      'สร้างสมดุลระหว่างงานและชีวิต',
      'เสริมสร้างความสัมพันธ์ที่ดี',
      'ฝึกสมาธิและการทำใจให้สงบ',
      'หาพันธมิตรในการทำงาน'
    ],
    color: '#FF69B4',
    energy: 'สมดุล'
  },
  333: {
    meaning: 'การเติบโตทางจิตวิญญาณ',
    description: 'เลข 333 เป็นสัญญาณของการเติบโตทางจิตวิญญาณ เทวดาส่งแรงบันดาลใจให้คุณพัฒนาตัวเอง',
    messages: [
      'ความคิดสร้างสรรค์ของคุณกำลังบานปลิว',
      'เป็นเวลาที่เหมาะสมสำหรับการเรียนรู้',
      'จิตวิญญาณของคุณกำลังตื่นรู้',
      'ครูหรือผู้นำทางจะปรากฏตัว'
    ],
    actions: [
      'เรียนรู้สิ่งใหม่ๆ อย่างต่อเนื่อง',
      'แสดงออกทางศิลปะและความคิดสร้างสรรค์',
      'ทำสมาธิและฝึกสติ',
      'แบ่งปันความรู้กับผู้อื่น'
    ],
    color: '#9370DB',
    energy: 'สร้างสรรค์'
  },
  444: {
    meaning: 'ความมั่นคงและการปกป้อง',
    description: 'เลข 444 เป็นสัญญาณของความปลอดภัยและการปกป้องจากเทวดา คุณไม่ได้อยู่คนเดียว',
    messages: [
      'เทวดากำลังอยู่เคียงข้างคุณ',
      'รากฐานของคุณแข็งแรงและมั่นคง',
      'ความขยันหมั่นเพียรจะได้รับผลตอบแทน',
      'คุณกำลังอยู่ในเส้นทางที่ถูกต้อง'
    ],
    actions: [
      'มุ่งมั่นทำงานอย่างต่อเนื่อง',
      'สร้างรากฐานที่แข็งแรง',
      'วางแผนระยะยาว',
      'ขอบคุณสิ่งที่มีอยู่'
    ],
    color: '#8B4513',
    energy: 'มั่นคง'
  },
  555: {
    meaning: 'การเปลี่ยนแปลงครั้งใหญ่',
    description: 'เลข 555 เป็นสัญญาณของการเปลี่ยนแปลงที่สำคัญ เตรียมตัวรับการเปลี่ยนแปลงที่ดี',
    messages: [
      'การเปลี่ยนแปลงครั้งใหญ่กำลังจะเกิดขึ้น',
      'เปิดใจรับประสบการณ์ใหม่',
      'ความเสรีภาพกำลังจะมาถึง',
      'ผจญภัยใหม่รออยู่ข้างหน้า'
    ],
    actions: [
      'เตรียมตัวรับการเปลี่ยนแปลง',
      'ปล่อยวางสิ่งที่ไม่จำเป็น',
      'เปิดใจต่อโอกาสใหม่',
      'วางแผนการเดินทางหรือการผจญภัย'
    ],
    color: '#00CED1',
    energy: 'เปลี่ยนแปลง'
  },
  666: {
    meaning: 'การดูแลและความรับผิดชอบ',
    description: 'เลข 666 เป็นสัญญาณให้คุณมุ่งเน้นครอบครัวและการดูแลผู้อื่น สร้างสมดุลในชีวิต',
    messages: [
      'ครอบครัวและบ้านต้องการความสนใจ',
      'การดูแลผู้อื่นจะนำมาซึ่งความสุข',
      'สร้างสมดุลระหว่างวัตถุและจิตใจ',
      'ความรักและความเมตตาเป็นกุญแจสำคัญ'
    ],
    actions: [
      'ใช้เวลากับครอบครัวมากขึ้น',
      'ดูแลสุขภาพกายและใจ',
      'ช่วยเหลือผู้ที่ต้องการความช่วยเหลือ',
      'สร้างบ้านให้เป็นที่อบอุ่น'
    ],
    color: '#FF69B4',
    energy: 'ดูแล'
  },
  777: {
    meaning: 'ความโชคดีและการตื่นรู้',
    description: 'เลข 777 เป็นสัญญาณของความโชคดีและการตื่นรู้ทางจิตวิญญาณ คุณกำลังอยู่ในเส้นทางที่ถูกต้อง',
    messages: [
      'ความโชคดีกำลังจะมาถึง',
      'สัญชาตญาณของคุณแม่นยำ',
      'ปัญญาและความรู้จะเพิ่มขึ้น',
      'ความลึกลับของชีวิตกำลังเปิดเผย'
    ],
    actions: [
      'เชื่อใจสัญชาตญาณของตัวเอง',
      'เรียนรู้เรื่องจิตวิญญาณและปรัชญา',
      'ทำสมาธิและฝึกสติอย่างสม่ำเสมอ',
      'แบ่งปันปัญญาที่ได้รับ'
    ],
    color: '#9370DB',
    energy: 'ตื่นรู้'
  },
  888: {
    meaning: 'ความมั่งคั่งและความสำเร็จ',
    description: 'เลข 888 เป็นสัญญาณของความมั่งคั่งและความสำเร็จ ความพยายามของคุณกำลังจะได้รับผลตอบแทน',
    messages: [
      'ความมั่งคั่งทางการเงินกำลังจะมาถึง',
      'ความสำเร็จในการงานใกล้เข้ามาแล้ว',
      'ความสามารถในการบริหารจัดการเพิ่มขึ้น',
      'อำนาจและอิทธิพลจะขยายตัว'
    ],
    actions: [
      'วางแผนการเงินระยะยาว',
      'ลงทุนในสิ่งที่มีค่า',
      'พัฒนาทักษะการบริหาร',
      'ใช้ความสำเร็จเพื่อช่วยเหลือผู้อื่น'
    ],
    color: '#000080',
    energy: 'สำเร็จ'
  },
  999: {
    meaning: 'การจบสิ้นและการเริ่มต้นใหม่',
    description: 'เลข 999 เป็นสัญญาณของการจบสิ้นรอบหนึ่งและการเริ่มต้นใหม่ เตรียมตัวสำหรับบทใหม่ของชีวิต',
    messages: [
      'บทหนึ่งของชีวิตกำลังจะจบลง',
      'ภารกิจสำคัญกำลังจะสำเร็จ',
      'การให้และการช่วยเหลือจะนำมาซึ่งความสุข',
      'ความเป็นผู้นำจะเพิ่มขึ้น'
    ],
    actions: [
      'ปล่อยวางสิ่งที่ไม่ใช่ของเรา',
      'เตรียมตัวสำหรับการเริ่มต้นใหม่',
      'ช่วยเหลือผู้อื่นด้วยความเมตตา',
      'เป็นแบบอย่างที่ดีให้ผู้อื่น'
    ],
    color: '#DC143C',
    energy: 'ให้'
  },
  1111: {
    meaning: 'ประตูแห่งโอกาสเปิดกว้าง',
    description: 'เลข 1111 เป็นสัญญาณพิเศษที่บ่งบอกว่าประตูแห่งโอกาสกำลังเปิดกว้าง ความปรารถนาของคุณกำลังจะเป็นจริง',
    messages: [
      'ความคิดของคุณมีพลังสร้างสรรค์สูงมาก',
      'โอกาสพิเศษกำลังจะมาถึง',
      'การตื่นรู้ทางจิตวิญญาณเพิ่มขึ้น',
      'คุณกำลังเชื่อมต่อกับจักรวาล'
    ],
    actions: [
      'ตั้งความปรารถนาและเป้าหมายใหม่',
      'ใช้พลังจิตและการสร้างภาพ',
      'เปิดใจรับสัญญาณจากจักรวาล',
      'เตรียมตัวรับโอกาสทอง'
    ],
    color: '#FFD700',
    energy: 'ปาฏิหาริย์'
  }
}

export default function AngelNumbersPage() {
  const router = useRouter()
  const [searchNumber, setSearchNumber] = useState('')
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  const handleSearch = () => {
    if (searchNumber in ANGEL_NUMBERS) {
      setSelectedNumber(searchNumber)
      setShowDetails(true)
    } else {
      alert('ไม่พบข้อมูลสำหรับเลขนี้ กรุณาลองเลขอื่น')
    }
  }

  const handleNumberSelect = (number: string) => {
    setSelectedNumber(number)
    setShowDetails(true)
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">👼</div>
          <h1 className="text-4xl font-bold text-white">Angel Numbers</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ข้อความจากเทวดาผ่านตัวเลขที่คุณเห็นซ้ำๆ<br />
            ค้นหาความหมายและคำแนะนำสำหรับชีวิตของคุณ
          </p>
        </div>

        {/* Search Section */}
        <AppleCard className="p-6">
          <div className="text-center space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">ค้นหา Angel Number</h2>
              <p className="text-gray-400">ใส่เลขที่คุณเห็นบ่อยๆ เช่น 111, 222, 333</p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={searchNumber}
                  onChange={(e) => setSearchNumber(e.target.value)}
                  placeholder="เช่น 111, 222, 1111"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <AppleButton
                  variant="primary"
                  onClick={handleSearch}
                >
                  ค้นหา
                </AppleButton>
              </div>
            </div>
          </div>
        </AppleCard>

        {/* Popular Angel Numbers */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Angel Numbers ยอดนิยม</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(ANGEL_NUMBERS).map(([number, data]) => (
              <AppleCard 
                key={number}
                className="p-6 cursor-pointer hover:scale-105 transition-all group"
                onClick={() => handleNumberSelect(number)}
              >
                <div className="text-center space-y-4">
                  <div 
                    className="text-4xl font-bold mb-2"
                    style={{ color: data.color }}
                  >
                    {number}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{data.meaning}</h3>
                    <div 
                      className="text-sm font-medium mb-3 px-3 py-1 rounded-full bg-white/10"
                      style={{ color: data.color }}
                    >
                      พลังงาน: {data.energy}
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-3">{data.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {data.messages.slice(0, 2).map((message, index) => (
                      <div key={index} className="bg-white/5 text-white px-3 py-2 rounded-lg text-sm">
                        ✨ {message}
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <AppleButton
                      variant="secondary"
                      size="sm"
                      className="w-full group-hover:bg-white/20"
                    >
                      ดูรายละเอียด
                    </AppleButton>
                  </div>
                </div>
              </AppleCard>
            ))}
          </div>
        </div>

        {/* Angel Number Details Modal */}
        {showDetails && selectedNumber && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <AppleCard className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-8 space-y-6">
                {(() => {
                                     const angelData = selectedNumber && selectedNumber in ANGEL_NUMBERS 
                     ? ANGEL_NUMBERS[selectedNumber as keyof typeof ANGEL_NUMBERS] 
                     : null
                   if (!angelData) return null
                  return (
                    <>
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-6xl">👼</div>
                          <div>
                            <h2 
                              className="text-4xl font-bold mb-2"
                              style={{ color: angelData.color }}
                            >
                              {selectedNumber}
                            </h2>
                            <p className="text-xl text-white">{angelData.meaning}</p>
                            <div 
                              className="text-sm font-medium mt-2 px-3 py-1 rounded-full bg-white/10 inline-block"
                              style={{ color: angelData.color }}
                            >
                              พลังงาน: {angelData.energy}
                            </div>
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
                        <h3 className="text-xl font-bold text-white mb-3">ความหมาย</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">{angelData.description}</p>
                      </div>

                      {/* Messages from Angels */}
                      <div className="bg-white/5 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">ข้อความจากเทวดา</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {angelData.messages.map((message, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                              <div className="text-yellow-400 mt-1">✨</div>
                              <span className="text-gray-300">{message}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recommended Actions */}
                      <div className="bg-white/5 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">สิ่งที่ควรทำ</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {angelData.actions.map((action, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                              <div className="text-green-400 mt-1">✓</div>
                              <span className="text-gray-300">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* How to Connect */}
                      <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">วิธีเชื่อมต่อกับเทวดา</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center p-4">
                            <div className="text-3xl mb-2">🙏</div>
                            <h4 className="font-semibold text-white mb-2">สวดมนต์</h4>
                            <p className="text-gray-300 text-sm">สวดมนต์หรือภาวนาเพื่อเชื่อมต่อกับเทวดา</p>
                          </div>
                          <div className="text-center p-4">
                            <div className="text-3xl mb-2">🧘</div>
                            <h4 className="font-semibold text-white mb-2">ทำสมาธิ</h4>
                            <p className="text-gray-300 text-sm">ทำสมาธิเพื่อเปิดใจรับสัญญาณ</p>
                          </div>
                          <div className="text-center p-4">
                            <div className="text-3xl mb-2">💭</div>
                            <h4 className="font-semibold text-white mb-2">คิดบวก</h4>
                            <p className="text-gray-300 text-sm">รักษาความคิดเชิงบวกและใจที่เปิดกว้าง</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <AppleButton
                          variant="primary"
                          className="flex-1"
                          onClick={() => router.push('/dashboard/ai-chat')}
                        >
                          💬 ปรึกษา AI เพิ่มเติม
                        </AppleButton>
                        <AppleButton
                          variant="secondary"
                          className="flex-1"
                          onClick={() => {
                            navigator.share?.({
                              title: `Angel Number ${selectedNumber}`,
                              text: angelData.meaning,
                              url: window.location.href
                            }) || alert('คัดลอกลิงก์แล้ว')
                          }}
                        >
                          📤 แบ่งปัน
                        </AppleButton>
                      </div>
                    </>
                  )
                })()}
              </div>
            </AppleCard>
          </div>
        )}

        {/* How Angel Numbers Work */}
        <AppleCard className="p-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">Angel Numbers ทำงานอย่างไร?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-4xl">👁️</div>
                <h3 className="text-xl font-bold text-white">สังเกต</h3>
                <p className="text-gray-300">สังเกตเลขที่เห็นซ้ำๆ ในชีวิตประจำวัน เช่น เวลา, ป้ายทะเบียน, ใบเสร็จ</p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl">🤔</div>
                <h3 className="text-xl font-bold text-white">ตีความ</h3>
                <p className="text-gray-300">ค้นหาความหมายของเลขนั้นๆ และเชื่อมโยงกับสถานการณ์ในชีวิต</p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl">✨</div>
                <h3 className="text-xl font-bold text-white">ปฏิบัติ</h3>
                <p className="text-gray-300">ทำตามคำแนะนำและเปิดใจรับการเปลี่ยนแปลงที่จะเกิดขึ้น</p>
              </div>
            </div>
          </div>
        </AppleCard>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">
            Angel Numbers เป็นความเชื่อทางจิตวิญญาณ<br />
            ผลลัพธ์ขึ้นอยู่กับความเชื่อและการปฏิบัติของแต่ละบุคคล
          </p>
        </div>
      </div>
    </div>
  )
}

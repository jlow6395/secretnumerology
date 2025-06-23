/**
 * Apple-style Numerology Modal
 * 
 * Features:
 * - Full-screen modal design
 * - Custom SVG icons
 * - Premium content sections
 * - Smooth animations
 * - Touch-friendly interactions
 */

"use client"

import React, { useEffect, useState } from 'react'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { getCompleteNumberIcon } from '@/design-system/icons/AllNumberIcons'
import { appleDarkNumerologyTokens } from '@/design-system/apple-dark-numerology-tokens'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { X, Crown, Lock, Star, Heart, Briefcase, Users, TrendingUp } from 'lucide-react'

interface ModalProps {
  data: any
  isOpen: boolean
  isPremiumUser: boolean
  onClose: () => void
  onUpgrade?: () => void
}

// ========== PREMIUM CONTENT SECTION ==========
const PremiumContentSection = ({ 
  title, 
  content, 
  icon, 
  isPremiumUser, 
  onUpgrade 
}: {
  title: string
  content: any
  icon: React.ReactNode
  isPremiumUser: boolean
  onUpgrade?: () => void
}) => {
  if (!content) return null

  return (
    <Card className="relative overflow-hidden bg-black/20 backdrop-blur-xl border border-white/10 p-6">
      {/* Premium Overlay */}
      {!isPremiumUser && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="text-center">
            <Crown className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">เนื้อหาพรีเมียม</h4>
            <p className="text-gray-400 mb-4">อัปเกรดเพื่อดูเนื้อหาเต็ม</p>
            <Button 
              onClick={onUpgrade}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold"
            >
              <Crown className="w-4 h-4 mr-2" />
              อัปเกรดตอนนี้
            </Button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={!isPremiumUser ? 'filter blur-sm' : ''}>
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {!isPremiumUser && (
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs">
              👑 Premium
            </Badge>
          )}
        </div>
        
        {Array.isArray(content) ? (
          <ul className="space-y-2">
            {content.map((item: string, index: number) => (
              <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                <Star className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300 text-sm leading-relaxed">{content}</p>
        )}
      </div>
    </Card>
  )
}

// ========== COMPATIBILITY METER ==========
const CompatibilityMeter = ({ compatibility }: { compatibility?: string }) => {
  if (!compatibility) return null

  // Extract compatibility percentages (simplified)
  const getCompatibilityScore = (text: string) => {
    if (text.includes('ดี')) return 80
    if (text.includes('ท้าทาย')) return 40
    return 60
  }

  const score = getCompatibilityScore(compatibility)
  
  return (
    <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-6">
      <div className="flex items-center gap-3 mb-4">
        <NumerologyIcons.energy size={24} color="#F59E0B" />
        <h3 className="text-lg font-semibold text-white">ความเข้ากันได้</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">คะแนนความเข้ากัน</span>
          <span className="text-2xl font-bold text-amber-400">{score}%</span>
        </div>
        
        <div className="w-full bg-gray-700/50 rounded-full h-3">
          <div 
            className="h-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 transition-all duration-1000"
            style={{ width: `${score}%` }}
          />
        </div>
        
        <p className="text-gray-300 text-sm leading-relaxed">{compatibility}</p>
      </div>
    </Card>
  )
}

// ========== FAMOUS PEOPLE SECTION ==========
const FamousPeopleSection = ({ people }: { people?: string[] }) => {
  if (!people || people.length === 0) return null

  return (
    <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-6">
      <div className="flex items-center gap-3 mb-4">
        <NumerologyIcons.profile size={24} color="#8B5CF6" />
        <h3 className="text-lg font-semibold text-white">บุคคลที่มีเลขเดียวกัน</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {people.map((person, index) => (
          <div 
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-medium text-white text-sm">{person}</h4>
          </div>
        ))}
      </div>
    </Card>
  )
}

// ========== MAIN MODAL COMPONENT ==========
export const AppleNumerologyModal: React.FC<ModalProps> = ({
  data,
  isOpen,
  isPremiumUser,
  onClose,
  onUpgrade
}) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !data) return null

  const NumberIcon = getCompleteNumberIcon(data.number)
  const hasPreview = data.basic && Object.keys(data.basic).length > 0
  const hasPremium = data.premium && Object.keys(data.premium).length > 0

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`
        relative w-full h-full md:w-[90vw] md:h-[90vh] md:max-w-4xl md:rounded-3xl
        bg-black/90 backdrop-blur-xl border border-white/20 overflow-hidden
        transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }
      `}>
        {/* Background Pattern */}
                 <div className="absolute inset-0 opacity-10">
           <div 
             className="w-full h-full"
             style={{
               background: `radial-gradient(circle at 25% 25%, ${appleDarkNumerologyTokens.colors.numerology.lifePath}30 0%, transparent 50%)`
             }}
           />
         </div>

        {/* Header */}
        <div className="relative border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                                   <NumberIcon 
                     size={40} 
                     color={
                       data.type === 'lifePath' ? appleDarkNumerologyTokens.colors.numerology.lifePath :
                       data.type === 'talent' ? appleDarkNumerologyTokens.colors.numerology.talent :
                       '#FFFFFF'
                     }
                   />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{data.title}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {data.number}
                  </span>
                  {data.number >= 11 && (
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      Master Number
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="relative h-[calc(100%-88px)] overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Basic Information */}
            {hasPreview && (
              <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <NumerologyIcons.lotus size={24} color="#10B981" />
                  <h3 className="text-lg font-semibold text-white">ข้อมูลพื้นฐาน</h3>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {data.basic.shortDescription}
                </p>
                
                {data.basic.keyTraits && (
                  <div>
                    <h4 className="text-white font-medium mb-3">คุณสมบัติหลัก</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.basic.keyTraits.map((trait: string, index: number) => (
                        <Badge 
                          key={index}
                          variant="secondary" 
                          className="bg-white/10 text-gray-300 border-white/20"
                        >
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            )}

            {/* Premium Content Sections */}
            {hasPremium && (
              <>
                {/* Chinese Zodiac Connection */}
                <PremiumContentSection
                  title="การเชื่อมโยงนักษัตรจีน"
                  content={data.premium.chineseZodiacConnection}
                  icon={<NumerologyIcons.yantra size={24} color="#8B5CF6" />}
                  isPremiumUser={isPremiumUser}
                  onUpgrade={onUpgrade}
                />

                {/* Positive & Negative Traits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PremiumContentSection
                    title="จุดแข็ง"
                    content={data.premium.positiveTraits}
                    icon={<TrendingUp className="w-6 h-6 text-green-400" />}
                    isPremiumUser={isPremiumUser}
                    onUpgrade={onUpgrade}
                  />
                  
                  <PremiumContentSection
                    title="จุดที่ควรพัฒนา"
                    content={data.premium.negativeTraits}
                    icon={<Lock className="w-6 h-6 text-red-400" />}
                    isPremiumUser={isPremiumUser}
                    onUpgrade={onUpgrade}
                  />
                </div>

                {/* Love & Career */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PremiumContentSection
                    title="ความรักและความสัมพันธ์"
                    content={data.premium.loveAndRelationships}
                    icon={<Heart className="w-6 h-6 text-pink-400" />}
                    isPremiumUser={isPremiumUser}
                    onUpgrade={onUpgrade}
                  />
                  
                  <PremiumContentSection
                    title="คำแนะนำการงาน"
                    content={data.premium.careerGuidance}
                    icon={<Briefcase className="w-6 h-6 text-blue-400" />}
                    isPremiumUser={isPremiumUser}
                    onUpgrade={onUpgrade}
                  />
                </div>

                {/* Compatibility */}
                {data.premium.compatibilityWithOtherLifePaths && (
                  <CompatibilityMeter compatibility={data.premium.compatibilityWithOtherLifePaths} />
                )}

                {/* Famous People */}
                {data.premium.famousPeople && (
                  <FamousPeopleSection people={data.premium.famousPeople} />
                )}

                {/* Dangerous Weaknesses */}
                {data.premium.dangerousWeaknesses && (
                  <PremiumContentSection
                    title="จุดอ่อนที่ต้องระวัง"
                    content={data.premium.dangerousWeaknesses}
                    icon={<NumerologyIcons.trident size={24} color="#EF4444" />}
                    isPremiumUser={isPremiumUser}
                    onUpgrade={onUpgrade}
                  />
                )}
              </>
            )}

            {/* Upgrade CTA for Free Users */}
            {!isPremiumUser && hasPremium && (
              <Card className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 p-6 text-center">
                <Crown className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">ปลดล็อกเนื้อหาเต็ม</h3>
                <p className="text-gray-300 mb-6">
                  รับการตีความเลขศาสตร์แบบละเอียด พร้อมคำแนะนำเฉพาะตัวจากผู้เชี่ยวชาญ
                </p>
                <Button 
                  onClick={onUpgrade}
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold px-8 py-3"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  อัปเกรดเป็น Premium
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ========== USAGE EXAMPLE ==========
export const NumerologyModalExample: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPremium, setIsPremium] = useState(false)
  
  const sampleData: any = {
    number: 1,
    type: 'lifePath',
    title: 'เส้นทางชีวิต',
    basic: {
      shortDescription: 'คุณเป็นผู้มีความคิดริเริ่ม มีความเป็นผู้นำ และชอบเป็นคนแรก',
      keyTraits: ['ผู้นำ', 'มั่นใจ', 'อิสระ', 'สร้างสรรค์'],
    },
    premium: {
      chineseZodiacConnection: 'เลข 1 มีการเชื่อมโยงกับนักษัตรหนู ซึ่งเป็นสัญลักษณ์ของความฉลาด',
      positiveTraits: ['ความเป็นผู้นำตามธรรมชาติ', 'ความมั่นใจในตนเอง', 'ความคิดริเริ่ม'],
      negativeTraits: ['ความเอาแต่ใจ', 'ความเย่อหยิ่ง', 'การไม่ฟังคนอื่น'],
      dangerousWeaknesses: ['การเป็นเผด็จการ', 'ความดื้อรั้น'],
      successFoundations: ['การเป็นผู้นำ', 'การริเริ่มโครงการใหม่'],
      bornNegativeHabits: ['ความหยิ่ง', 'การไม่ยอมรับฟังความคิดเห็น'],
      loveAndRelationships: 'ในความรัก คุณต้องการคู่ที่เข้าใจและสนับสนุนความเป็นผู้นำของคุณ',
      careerGuidance: 'เหมาะกับงานที่ต้องเป็นผู้นำ เช่น CEO, ผู้ประกอบการ, หัวหน้าทีม',
      influenceOnOtherNumbers: 'เลข 1 มีอิทธิพลในการกระตุ้นพลังผู้นำในเลขอื่นๆ',
      compatibilityWithOtherLifePaths: 'เข้ากันได้ดีกับเลข 3, 5, 6 และมีความท้าทายกับเลข 4, 8',
      famousPeople: ['สตีฟ จอบส์', 'อุปราช ชนะพันธ์', 'บิล เกตส์']
    }
  }

  return (
    <div className="p-8">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          เปิด Modal
        </button>
        
        <button
          onClick={() => setIsPremium(!isPremium)}
          className={`px-6 py-3 rounded-lg ${isPremium ? 'bg-amber-600' : 'bg-gray-600'} text-white`}
        >
          {isPremium ? 'Premium User' : 'Free User'}
        </button>
      </div>
      
      <AppleNumerologyModal
        data={sampleData}
        isOpen={isModalOpen}
        isPremiumUser={isPremium}
        onClose={() => setIsModalOpen(false)}
        onUpgrade={() => alert('Upgrade clicked!')}
      />
    </div>
  )
} 
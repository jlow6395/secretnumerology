"use client"

import React, { useState } from 'react'
import { useAuth } from '@/lib/AuthContext'
import { AppleCard } from '@/design-system/AppleCard'
import { AppleButton } from '@/design-system/AppleButton'
import { QuickRegistrationModal } from '@/components/dashboard/QuickRegistrationModal'
import { LoadingState } from '@/components/ui/LoadingCard'
import { 
  calculateLifePathNumber, 
  calculateTalentNumber, 
  calculateSunNumber, 
  calculateMissingNumbers,
  calculatePersonalYear,
  calculatePersonalMonth,
  calculatePersonalDay
} from '@/lib/numerology/core'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Demo data for showcase
const DEMO_USER = {
  name: 'สมชาย ใจดี',
  birthDate: '1990-05-15',
  birthTime: '14:30',
  birthPlace: 'กรุงเทพฯ',
  gender: 'male' as const
}

export default function DashboardPage() {
  const { user, activeProfile, isLoading, isAuthenticated } = useAuth()
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showAddProfileModal, setShowAddProfileModal] = useState(false)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const router = useRouter()

  // Calculate real numerology data
  const currentProfile = activeProfile || (isDemoMode ? DEMO_USER : null)
  const numerologyData = currentProfile ? {
    lifePath: calculateLifePathNumber(currentProfile.birthDate),
    talent: calculateTalentNumber(currentProfile.birthDate),
    sunNumber: calculateSunNumber(currentProfile.birthDate),
    missingNumbers: calculateMissingNumbers(currentProfile.birthDate),
    personalYear: calculatePersonalYear(currentProfile.birthDate, new Date().getFullYear()),
    personalMonth: calculatePersonalMonth(currentProfile.birthDate, new Date().getFullYear(), new Date().getMonth() + 1),
    personalDay: calculatePersonalDay(currentProfile.birthDate, new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())
  } : null

  // Show loading while auth is initializing
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="min-h-screen flex items-center justify-center">
          <LoadingState 
            title="กำลังโหลดข้อมูล..." 
            subtitle="กรุณารอสักครู่"
          />
        </div>
      </div>
    )
  }

  // Welcome screen for new users
  if (!isAuthenticated && !isDemoMode && showWelcome) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="min-h-screen flex items-center justify-center p-4">
          <AppleCard className="max-w-2xl text-center">
            <div className="space-y-8 p-8">
              {/* Hero Section */}
              <div className="space-y-4">
                <div className="text-6xl mb-4">🔮</div>
                <h1 className="text-4xl font-bold text-white mb-4">
                  ยินดีต้อนรับสู่ Secret Numerology
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  ค้นพบความลึกลับของตัวเลขในชีวิตคุณ<br />
                  วิเคราะห์บุคลิกภาพ เส้นทางชีวิต และศักยภาพด้วยเลขศาสตร์
                </p>
              </div>

              {/* Features Preview */}
              <div className="grid grid-cols-2 gap-4 my-8">
                {[
                  { icon: '🎯', title: 'Life Path', desc: 'เส้นทางชีวิต' },
                  { icon: '💎', title: 'Talent Number', desc: 'เลขพรสวรรค์' },
                  { icon: '💕', title: 'Love Match', desc: 'ความเข้ากันในรัก' },
          
                ].map((feature, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <div className="text-sm font-medium text-white">{feature.title}</div>
                    <div className="text-xs text-gray-400">{feature.desc}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <AppleButton
                    variant="primary"
                    className="flex-1"
                    onClick={() => setShowRegisterModal(true)}
                  >
                    🌟 สร้างบัญชีและเริ่มใช้งาน
                  </AppleButton>
                  
                  <AppleButton
                    variant="secondary"
                    className="flex-1"
                    onClick={() => {
                      setIsDemoMode(true)
                      setShowWelcome(false)
                    }}
                  >
                    👀 ดูการออกแบบ (Demo)
                  </AppleButton>
                </div>

                <p className="text-xs text-gray-500">
                  Demo Mode ใช้ข้อมูลตัวอย่าง "{DEMO_USER.name}" เกิด {DEMO_USER.birthDate}
                </p>
              </div>
            </div>
          </AppleCard>
        </div>

        {/* Registration Modal */}
        <QuickRegistrationModal
          isOpen={showRegisterModal}
          onClose={() => setShowRegisterModal(false)}
          mode="register"
        />
      </div>
    )
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="min-h-screen p-4 space-y-6">
        {/* Demo Mode Banner */}
        {isDemoMode && (
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🎭</div>
                <div>
                  <div className="font-semibold text-yellow-300">Demo Mode</div>
                  <div className="text-sm text-yellow-200/80">
                    กำลังแสดงข้อมูลตัวอย่าง "{DEMO_USER.name}" - คำนวณจากข้อมูลจริง
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <AppleButton
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowRegisterModal(true)}
                >
                  สร้างบัญชีจริง
                </AppleButton>
                <AppleButton
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsDemoMode(false)
                    setShowWelcome(true)
                  }}
                >
                  ออกจาก Demo
                </AppleButton>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              สวัสดี, {currentProfile?.name || 'ผู้ใช้งาน'} 👋
            </h1>
            <p className="text-gray-400">
              {new Date().toLocaleDateString('th-TH', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          {isAuthenticated && (
            <AppleButton
              variant="primary"
              onClick={() => setShowAddProfileModal(true)}
            >
              ✨ เพิ่มดวงเกิด
            </AppleButton>
          )}
        </div>

        {/* Quick Stats */}
        {numerologyData && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { 
                title: 'Life Path', 
                value: numerologyData.lifePath, 
                icon: '🎯',
                description: 'เส้นทางชีวิต'
              },
              { 
                title: 'Talent', 
                value: numerologyData.talent, 
                icon: '💎',
                description: 'เลขพรสวรรค์'
              },
              { 
                title: 'Sun Number', 
                value: numerologyData.sunNumber, 
                icon: '☀️',
                description: 'เลขดวงอาทิตย์'
              },
              { 
                title: 'Missing', 
                value: numerologyData.missingNumbers.length > 0 ? numerologyData.missingNumbers.join(',') : 'ไม่มี', 
                icon: '🔍',
                description: 'เลขที่ขาดหาย'
              }
            ].map((stat, index) => (
              <AppleCard key={index} className="text-center p-4">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </AppleCard>
            ))}
          </div>
        )}

        {/* Current Timing */}
        {numerologyData && (
          <AppleCard className="p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              ⏰ พลังงานช่วงเวลาปัจจุบัน
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {[
                { 
                  value: numerologyData.personalYear, 
                  label: 'Personal Year', 
                  sublabel: `ปี ${new Date().getFullYear()}`, 
                  color: 'blue' 
                },
                { 
                  value: numerologyData.personalMonth, 
                  label: 'Personal Month', 
                  sublabel: `เดือน ${new Date().getMonth() + 1}`, 
                  color: 'green' 
                },
                { 
                  value: numerologyData.personalDay, 
                  label: 'Personal Day', 
                  sublabel: `วันที่ ${new Date().getDate()}`, 
                  color: 'purple' 
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold text-${item.color}-400 mb-2`}>
                    {item.value}
                  </div>
                  <div className="text-white font-medium text-sm mb-1">{item.label}</div>
                  <div className="text-gray-400 text-xs">{item.sublabel}</div>
                </div>
              ))}
            </div>
          </AppleCard>
        )}

        {/* Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2"
        >
          <Card className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 group cursor-pointer"
                onClick={() => router.push('/dashboard/timeline')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <NumerologyIcons.timeline size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Timeline</h3>
                  <p className="text-sm text-gray-400">เส้นทางชีวิตของคุณ</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            
            {/* แสดงข้อมูลจริงจาก user */}
            {(activeProfile || user) && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">ชื่อ:</span>
                  <span className="text-sm text-white font-medium">{(activeProfile || user)?.name}</span>
                </div>
                
                {((activeProfile || user)?.birthDate) && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">วันเกิด:</span>
                      <span className="text-sm text-white">{(activeProfile || user)?.birthDate}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">อายุปัจจุบัน:</span>
                      <span className="text-sm text-indigo-300 font-medium">
                        {(() => {
                          const birthDate = (activeProfile || user)?.birthDate
                          if (!birthDate) return 'ไม่ระบุ'
                          
                          let formattedDate = birthDate
                          if (birthDate.includes('/')) {
                            const [day, month, year] = birthDate.split('/')
                            formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
                          }
                          
                          const birth = new Date(formattedDate)
                          const today = new Date()
                          const age = today.getFullYear() - birth.getFullYear()
                          const monthDiff = today.getMonth() - birth.getMonth()
                          
                          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                            return `${age - 1} ปี`
                          }
                          return `${age} ปี`
                        })()}
                      </span>
                    </div>
                  </>
                )}
                
                <div className="pt-3 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                    <span>พร้อมดู Timeline ชีวิต</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* ถ้ามี user แต่ไม่มีวันเกิด */}
            {(activeProfile || user) && !(activeProfile || user)?.birthDate && (
              <div className="text-center py-4">
                <p className="text-sm text-yellow-400 mb-2">ยังไม่มีข้อมูลวันเกิด</p>
                <p className="text-xs text-gray-500">กรุณาเพิ่มข้อมูลวันเกิดเพื่อดู Timeline</p>
              </div>
            )}
          </Card>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'ความเข้ากันในความรัก',
              description: 'วิเคราะห์ความเข้ากันกับคนที่คุณรัก',
              icon: '💕',
              href: '/dashboard/compatibility',
              premium: false
            },

            {
              title: 'AI Chat เลขศาสตร์',
              description: 'ปรึกษา AI เกี่ยวกับเลขศาสตร์',
              icon: '🤖',
              href: '/dashboard/ai-chat',
              premium: false
            },
            {
              title: 'เลขของฉัน',
              description: 'ดูเลขศาสตร์ทั้งหมด 14 สูตร',
              icon: '📊',
              href: '/dashboard/my-numbers',
              premium: false
            },
            {
              title: 'สูตรเลขศาสตร์',
              description: 'เรียนรู้สูตรคำนวณต่างๆ',
              icon: '📐',
              href: '/dashboard/numerology-formulas',
              premium: false
            },
            {
              title: 'ยันต์มงคล',
              description: 'ยันต์เสริมดวงตามเลขศาสตร์',
              icon: '🔯',
              href: '/dashboard/yantra',
              premium: true
            },
            {
              title: 'วงจรชีวิต',
              description: 'ช่วงเวลาสำคัญในชีวิต',
              icon: '🌙',
              href: '/dashboard/life-cycles',
              premium: true
            },
            {
              title: 'Angel Numbers',
              description: 'ความหมายของเลขนางฟ้า',
              icon: '👼',
              href: '/dashboard/angel-numbers',
              premium: true
            },
            {
              title: 'รายงานเชิงลึก',
              description: 'วิเคราะห์แบบละเอียดครบถ้วน',
              icon: '📋',
              href: '/dashboard/reports',
              premium: true
            }
          ].map((feature, index) => (
            <AppleCard key={index} className="p-6 hover:scale-105 transition-transform cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{feature.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    {feature.premium && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs rounded-full font-medium">
                        Premium
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{feature.description}</p>
                  <AppleButton
                    variant="secondary"
                    size="sm"
                    onClick={() => window.location.href = feature.href}
                  >
                    เริ่มใช้งาน →
                  </AppleButton>
                </div>
              </div>
            </AppleCard>
          ))}
        </div>

        {/* Numerology Insight */}
        {numerologyData && (
          <AppleCard className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                💫 ข้อความจากดวงดาววันนี้
              </h3>
              <p className="text-gray-300 leading-relaxed">
                วันนี้เป็นวันที่ดีสำหรับการเริ่มต้นสิ่งใหม่ พลังงานเลข <span className="text-blue-400 font-semibold">{numerologyData.personalDay}</span> 
                {' '}จะช่วยให้คุณมีความมั่นใจและความคิดสร้างสรรค์
              </p>
              
              <div className="flex items-center gap-4">
                <span className="text-yellow-400 text-lg">🍀</span>
                <span className="text-sm text-gray-400 font-medium">เลขนำโชค:</span>
                <div className="flex gap-2">
                  {[numerologyData.lifePath, numerologyData.sunNumber, numerologyData.personalDay].map((num, idx) => (
                    <div key={idx} className="bg-yellow-500/20 text-yellow-300 text-sm px-3 py-1.5 rounded-xl font-medium border border-yellow-500/30">
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AppleCard>
        )}

        {/* Upgrade CTA for Demo Mode */}
        {isDemoMode && (
          <AppleCard className="p-8 text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
            <div className="space-y-4">
              <div className="text-4xl">✨</div>
              <h3 className="text-xl font-bold text-white">พร้อมเริ่มต้นแล้วใช่มั้ย?</h3>
              <p className="text-gray-300">
                สร้างบัญชีเพื่อบันทึกข้อมูลและใช้งานฟีเจอร์ทั้งหมด
              </p>
              <AppleButton
                variant="primary"
                onClick={() => setShowRegisterModal(true)}
              >
                🌟 สร้างบัญชีตอนนี้
              </AppleButton>
            </div>
          </AppleCard>
        )}
      </div>

      {/* Modals */}
      <QuickRegistrationModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        mode="register"
      />
      
      <QuickRegistrationModal
        isOpen={showAddProfileModal}
        onClose={() => setShowAddProfileModal(false)}
        mode="add-profile"
      />
    </div>
  )
}

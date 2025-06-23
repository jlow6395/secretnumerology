/**
 * Timeline Page - Life Journey Visualization
 * 
 * Features:
 * - Mobile: Vertical scrollable timeline
 * - Desktop: SVG horizontal timeline
 * - Current age indicator
 * - Pinnacle & Challenge periods
 * - Personal Year cycles
 * - Interactive period details
 */

"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { calculateLifeTimeline } from '@/lib/numerology/core'
import { useAuth } from '@/lib/AuthContext'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Calendar, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  Star, 
  ChevronRight,
  BookOpen,
  Target,
  User,
  Plus
} from 'lucide-react'

export default function TimelinePage() {
  const { user, activeProfile, isLoading: authLoading, isAuthenticated } = useAuth()
  const [timelineData, setTimelineData] = useState<any>(null)
  const [selectedPeriod, setSelectedPeriod] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>('mobile')

  useEffect(() => {
    const loadTimelineData = () => {
      try {
        // ใช้ข้อมูลจาก activeProfile หรือ user
        let birthDate = activeProfile?.birthDate || user?.birthDate
        
        if (birthDate) {
          // แปลงรูปแบบวันที่ให้เป็น YYYY-MM-DD
          let formattedDate = birthDate
          
          // ถ้าเป็นรูปแบบ DD/MM/YYYY ให้แปลง
          if (birthDate.includes('/')) {
            const [day, month, year] = birthDate.split('/')
            formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
          }
          
          const timeline = calculateLifeTimeline(formattedDate)
          setTimelineData(timeline)
        }
      } catch (error) {
        console.error('Error loading timeline data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (!authLoading) {
      loadTimelineData()
    }
  }, [user, activeProfile, authLoading])

  useEffect(() => {
    const handleResize = () => {
      setViewMode(window.innerWidth >= 768 ? 'desktop' : 'mobile')
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // แสดง loading ขณะโหลด auth
  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin">
            <NumerologyIcons.timeline size={48} className="text-blue-400" />
          </div>
          <p className="text-gray-400">กำลังโหลดเส้นทางชีวิตของคุณ...</p>
        </div>
      </div>
    )
  }

  // แสดงข้อความถ้ายังไม่ได้ login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <Card className="max-w-md text-center p-8 bg-black/40 backdrop-blur-sm border-white/10">
          <div className="mb-4">
            <User className="h-12 w-12 text-blue-400 mx-auto" />
          </div>
          <h2 className="text-xl font-bold mb-4">กรุณาเข้าสู่ระบบ</h2>
          <p className="text-gray-400 mb-6">
            เข้าสู่ระบบเพื่อดู Timeline ชีวิตของคุณ
          </p>
          <Button 
            onClick={() => window.location.href = '/auth/login'}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 mr-2"
          >
            เข้าสู่ระบบ
          </Button>
          <Button 
            onClick={() => window.location.href = '/auth/signup'}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            สมัครสมาชิก
          </Button>
        </Card>
      </div>
    )
  }

  // แสดงข้อความถ้าไม่มีข้อมูลวันเกิด
  if (!timelineData) {
    const currentUser = activeProfile || user
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <Card className="max-w-md text-center p-8 bg-black/40 backdrop-blur-sm border-white/10">
          <div className="mb-4">
            <AlertTriangle className="h-12 w-12 text-yellow-400 mx-auto" />
          </div>
          <h2 className="text-xl font-bold mb-4">ไม่พบข้อมูลวันเกิด</h2>
          <p className="text-gray-400 mb-2">สวัสดี {currentUser?.name || 'คุณ'}!</p>
          <p className="text-gray-400 mb-6">
            กรุณาเพิ่มข้อมูลวันเกิดของคุณเพื่อดู Timeline ชีวิต
          </p>
          <Button 
            onClick={() => window.location.href = '/dashboard/profile'}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 mr-2"
          >
            <Plus className="w-4 h-4 mr-2" />
            เพิ่มข้อมูลวันเกิด
          </Button>
          <Button 
            onClick={() => window.location.href = '/wizard/step1'}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            ไปที่ Wizard
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-600/20" />
      </div>

      <div className="relative z-10 pb-24">
        <TimelineHeader timelineData={timelineData} currentUser={activeProfile || user} />
        <CurrentStatusCard timelineData={timelineData} />
        
        {viewMode === 'mobile' ? (
          <MobileTimeline 
            timelineData={timelineData}
            onPeriodSelect={setSelectedPeriod}
          />
        ) : (
          <DesktopTimeline 
            timelineData={timelineData}
            onPeriodSelect={setSelectedPeriod}
          />
        )}
        
        <PersonalYearCycles timelineData={timelineData} />
        <KeyInsights timelineData={timelineData} />
      </div>

      <AnimatePresence>
        {selectedPeriod && (
          <PeriodDetailModal 
            period={selectedPeriod}
            onClose={() => setSelectedPeriod(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

const TimelineHeader = ({ timelineData, currentUser }: { timelineData: any, currentUser: any }) => (
  <div className="px-6 pt-8 pb-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-4"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-600 rounded-full" />
        <h1 className="text-3xl font-bold text-white">เส้นทางชีวิตของ {currentUser?.name || 'คุณ'}</h1>
        <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-500 rounded-full" />
      </div>
      
      <p className="text-gray-300 max-w-2xl mx-auto">
        ค้นพบ 4 ช่วงสำคัญของชีวิต พร้อมโอกาสและความท้าทายในแต่ละช่วงวัย
      </p>
      
      <div className="flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-gray-400">Life Path {timelineData.lifePathNumber}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="text-gray-400">อายุ {timelineData.currentAge} ปี</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400">ช่วงที่ {timelineData.currentPinnacle}</span>
        </div>
      </div>
      
      {/* User Info */}
      <div className="mt-4 p-4 bg-black/20 rounded-lg border border-white/10 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <p className="text-white font-medium">{currentUser?.name}</p>
            <p className="text-gray-400 text-sm">เกิด: {currentUser?.birthDate}</p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
)

const CurrentStatusCard = ({ timelineData }: { timelineData: any }) => {
  const activePeriod = timelineData.summary.activePeriod
  const progressPercentage = ((timelineData.currentAge - activePeriod.startAge) / (activePeriod.endAge - activePeriod.startAge)) * 100

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-6 mb-8"
    >
      <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-blue-500/20">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {activePeriod.pinnacleNumber}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{activePeriod.name}</h3>
            <p className="text-blue-300">อายุ {activePeriod.startAge}-{activePeriod.endAge} ปี</p>
          </div>
          <div className="ml-auto">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
              ปัจจุบัน
            </Badge>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{activePeriod.description}</p>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">ความคืบหน้าในช่วงนี้</span>
            <span className="text-blue-300">{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
            <div className="text-green-400 font-bold">โอกาส</div>
            <div className="text-sm text-gray-300 mt-1">{activePeriod.opportunities}</div>
          </div>
          <div className="text-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
            <div className="text-red-400 font-bold">ความท้าทาย</div>
            <div className="text-sm text-gray-300 mt-1">{activePeriod.challenges}</div>
          </div>
          <div className="text-center p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
            <div className="text-yellow-400 font-bold">คำแนะนำ</div>
            <div className="text-sm text-gray-300 mt-1">{activePeriod.advice}</div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

const MobileTimeline = ({ timelineData, onPeriodSelect }: { timelineData: any, onPeriodSelect: (period: any) => void }) => (
  <div className="px-6 space-y-6">
    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
      <Clock className="h-5 w-5 text-blue-400" />
      ช่วงชีวิตทั้งหมด
    </h2>
    
    {timelineData.timelinePeriods.map((period: any, index: number) => (
      <motion.div
        key={period.id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Card 
          className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
            period.isActive 
              ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30' 
              : 'bg-black/40 backdrop-blur-sm border-white/10 hover:border-white/20'
          }`}
          onClick={() => onPeriodSelect(period)}
        >
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                period.isActive 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
                  : 'bg-gray-600 text-gray-300'
              }`}>
                {period.pinnacleNumber}
              </div>
              {index < timelineData.timelinePeriods.length - 1 && (
                <div className="w-px h-16 bg-gray-600 mt-2"></div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">{period.name}</h3>
                {period.isActive && (
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    ปัจจุบัน
                  </Badge>
                )}
              </div>
              
              <p className="text-sm text-blue-300 mb-2">
                อายุ {period.startAge}-{period.endAge} ปี
              </p>
              
              <p className="text-gray-300 text-sm mb-3">
                {period.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {period.keyThemes.map((theme: string, idx: number) => (
                  <Badge key={idx} variant="outline" className="text-xs border-gray-600 text-gray-400">
                    {theme}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center text-sm text-gray-400">
                <span>Challenge {period.challengeNumber}</span>
                <ChevronRight className="h-4 w-4 ml-auto" />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    ))}
  </div>
)

const DesktopTimeline = ({ timelineData, onPeriodSelect }: { timelineData: any, onPeriodSelect: (period: any) => void }) => {
  const totalWidth = 800
  const periods = timelineData.timelinePeriods
  const currentAge = timelineData.currentAge
  
  const periodWidths = periods.map((period: any) => 
    ((period.endAge - period.startAge) / 99) * totalWidth
  )
  
  let currentX = 50
  const periodPositions = periods.map((period: any, index: number) => {
    const width = periodWidths[index]
    const position = {
      startX: currentX,
      endX: currentX + width,
      centerX: currentX + width / 2,
      width,
      period
    }
    currentX += width
    return position
  })
  
  const currentAgeX = 50 + (currentAge / 99) * totalWidth

  return (
    <div className="px-6 mb-8">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        Timeline ภาพรวม
      </h2>
      
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <svg className="w-full h-80" viewBox="0 0 900 320">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          <line x1="50" y1="160" x2="850" y2="160" 
                stroke="#3b82f6" strokeWidth="4" />
          
          {periodPositions.map((pos: any, index: number) => (
            <g key={index}>
              <rect 
                x={pos.startX} 
                y="120" 
                width={pos.width} 
                height="80"
                fill="#3b82f6" 
                opacity="0.2"
                className="cursor-pointer hover:opacity-30 transition-opacity"
                onClick={() => onPeriodSelect(pos.period)}
              />
              
              <circle 
                cx={pos.centerX} 
                cy="160" 
                r="20"
                fill={pos.period.isActive ? "#1e40af" : "#374151"} 
                stroke={pos.period.isActive ? "#3b82f6" : "#6b7280"} 
                strokeWidth="3"
                className="cursor-pointer hover:stroke-blue-400 transition-colors"
                onClick={() => onPeriodSelect(pos.period)}
              />
              <text 
                x={pos.centerX} 
                y="166" 
                textAnchor="middle" 
                fill="white" 
                fontSize="14"
                fontWeight="bold"
                className="pointer-events-none"
              >
                {pos.period.pinnacleNumber}
              </text>
              
              <text 
                x={pos.startX} 
                y="210" 
                textAnchor="middle" 
                fontSize="12" 
                fill="#9ca3af"
              >
                {pos.period.startAge}
              </text>
              {index === periodPositions.length - 1 && (
                <text 
                  x={pos.endX} 
                  y="210" 
                  textAnchor="middle" 
                  fontSize="12" 
                  fill="#9ca3af"
                >
                  {pos.period.endAge}
                </text>
              )}
              
              <text 
                x={pos.centerX} 
                y="240" 
                textAnchor="middle" 
                fontSize="11" 
                fill="#d1d5db"
                className="pointer-events-none"
              >
                {pos.period.name}
              </text>
              
              <rect 
                x={pos.centerX - 8} 
                y="100" 
                width="16" 
                height="15" 
                fill="#ef4444" 
                opacity="0.7"
                rx="2"
              />
              <text 
                x={pos.centerX} 
                y="110" 
                textAnchor="middle" 
                fontSize="10" 
                fill="white"
                fontWeight="bold"
              >
                C{pos.period.challengeNumber}
              </text>
            </g>
          ))}
          
          <line 
            x1={currentAgeX} 
            y1="80" 
            x2={currentAgeX} 
            y2="240"
            stroke="#fbbf24" 
            strokeWidth="3" 
            strokeDasharray="5,5" 
          />
          <text 
            x={currentAgeX} 
            y="70" 
            textAnchor="middle" 
            fontSize="14" 
            fill="#fbbf24" 
            fontWeight="bold"
          >
            อายุ {currentAge} ปี
          </text>
        </svg>
      </div>
    </div>
  )
}

const PersonalYearCycles = ({ timelineData }: { timelineData: any }) => (
  <div className="px-6 mb-8">
    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
      <Calendar className="h-5 w-5 text-purple-400" />
      Personal Year Cycles
    </h2>
    
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {timelineData.personalYearCycles.map((cycle: any, index: number) => (
        <motion.div
          key={cycle.age}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          <Card className={`p-3 text-center ${
            cycle.isCurrent 
              ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30' 
              : 'bg-black/40 backdrop-blur-sm border-white/10'
          }`}>
            <div className={`text-lg font-bold mb-1 ${
              cycle.isCurrent ? 'text-purple-300' : 'text-gray-300'
            }`}>
              {cycle.personalYear}
            </div>
            <div className="text-xs text-gray-400 mb-1">อายุ {cycle.age}</div>
            <div className="text-xs text-gray-500">{cycle.year}</div>
            {cycle.isCurrent && (
              <Badge variant="secondary" className="mt-2 text-xs bg-purple-500/20 text-purple-300 border-purple-500/30">
                ปีนี้
              </Badge>
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
)

const KeyInsights = ({ timelineData }: { timelineData: any }) => (
  <div className="px-6 mb-8">
    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
      <Star className="h-5 w-5 text-yellow-400" />
      Key Insights
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {timelineData.summary.keyInsights.map((insight: string, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border-yellow-500/20">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{insight}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
)

const PeriodDetailModal = ({ period, onClose }: { period: any, onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/20"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {period.pinnacleNumber}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{period.name}</h2>
            <p className="text-blue-300">อายุ {period.startAge}-{period.endAge} ปี</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </Button>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-2">คำอธิบาย</h3>
          <p className="text-gray-300">{period.description}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-white mb-3">หัวข้อสำคัญ</h3>
          <div className="flex flex-wrap gap-2">
            {period.keyThemes.map((theme: string, index: number) => (
              <Badge key={index} variant="outline" className="border-blue-500/30 text-blue-300">
                {theme}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-green-400" />
              <h4 className="font-bold text-green-400">โอกาส</h4>
            </div>
            <p className="text-sm text-gray-300">{period.opportunities}</p>
          </div>
          
          <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <h4 className="font-bold text-red-400">ความท้าทาย</h4>
            </div>
            <p className="text-sm text-gray-300">{period.challenges}</p>
          </div>
          
          <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-4 w-4 text-yellow-400" />
              <h4 className="font-bold text-yellow-400">คำแนะนำ</h4>
            </div>
            <p className="text-sm text-gray-300">{period.advice}</p>
          </div>
        </div>
        
        <div className="text-center pt-4">
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            เข้าใจแล้ว
          </Button>
        </div>
      </div>
    </motion.div>
  </motion.div>
) 
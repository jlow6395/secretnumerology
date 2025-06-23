"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Calculator, Calendar, User, Zap, Target, Heart, Star, TrendingUp, Clock, Copy, Share2 } from 'lucide-react'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { getCompleteNumberIcon } from '@/design-system/icons/AllNumberIcons'

// Import numerology calculation functions
import {
  calculateLifePathNumber,
  calculateTalentNumber,
  calculateDateNumber,
  calculateMonthNumber,
  calculateYearNumber,
  calculateSunNumber,
  calculateSpecialAbilitiesNumber,
  calculateMissingNumbers,
  calculateExpressionNumber,
  calculatePersonalityNumber,
  calculateHeartDesireNumber,
  calculateMaturityNumber,
  calculatePersonalYear,
  calculatePersonalMonth,
  calculatePersonalDay,
  calculateChallengeNumbers,
  calculatePinnaclesNumbers,
  getLifePeriodAges
} from '@/lib/numerology/core'

interface NumerologyResults {
  // Birth-based
  lifePathNumber: number
  talentNumber: string
  dateNumber: number
  monthNumber: number
  yearNumber: number
  sunNumber: number
  specialAbilitiesNumber: number
  missingNumbers: number[]
  
  // Name-based
  expressionNumber: number
  personalityNumber: number
  heartDesireNumber: number
  maturityNumber: number
  
  // Timing
  personalYear: number
  personalMonth: number
  personalDay: number
  
  // Advanced
  challengeNumbers: number[]
  pinnacleNumbers: number[]
  lifePeriodAges: any
}

export default function MyNumbersPage() {
  const router = useRouter()
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [fullName, setFullName] = useState('')
  const [results, setResults] = useState<NumerologyResults | null>(null)
  const [activeTab, setActiveTab] = useState('birth')
  const [isCalculating, setIsCalculating] = useState(false)

  // Demo data for immediate display
  const demoData = {
    dateOfBirth: '1990-05-15',
    fullName: 'SOMCHAI JAIDEE'
  }

  useEffect(() => {
    // Load demo data on mount
    setDateOfBirth(demoData.dateOfBirth)
    setFullName(demoData.fullName)
    calculateAllNumbers(demoData.dateOfBirth, demoData.fullName)
  }, [])

  const calculateAllNumbers = (birth: string, name: string) => {
    if (!birth) return

    setIsCalculating(true)
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const currentYear = new Date().getFullYear()
      const currentMonth = new Date().getMonth() + 1
      const currentDay = new Date().getDate()
      
      const lifePathNumber = calculateLifePathNumber(birth)
      
      const newResults: NumerologyResults = {
        // Birth-based
        lifePathNumber,
        talentNumber: calculateTalentNumber(birth),
        dateNumber: calculateDateNumber(birth),
        monthNumber: calculateMonthNumber(birth),
        yearNumber: calculateYearNumber(birth),
        sunNumber: calculateSunNumber(birth),
        specialAbilitiesNumber: calculateSpecialAbilitiesNumber(birth),
        missingNumbers: calculateMissingNumbers(birth),
        
        // Name-based (only if name is provided)
        expressionNumber: name ? calculateExpressionNumber(name) : 0,
        personalityNumber: name ? calculatePersonalityNumber(name) : 0,
        heartDesireNumber: name ? calculateHeartDesireNumber(name) : 0,
        maturityNumber: name ? calculateMaturityNumber(birth, name) : 0,
        
        // Timing
        personalYear: calculatePersonalYear(birth, currentYear),
        personalMonth: calculatePersonalMonth(birth, currentYear, currentMonth),
        personalDay: calculatePersonalDay(birth, currentYear, currentMonth, currentDay),
        
        // Advanced
        challengeNumbers: calculateChallengeNumbers(birth),
        pinnacleNumbers: calculatePinnaclesNumbers(birth),
        lifePeriodAges: getLifePeriodAges(lifePathNumber)
      }
      
      setResults(newResults)
      setIsCalculating(false)
    }, 1000)
  }

  const handleCalculate = () => {
    calculateAllNumbers(dateOfBirth, fullName)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You can add a toast notification here
  }

  const getNumberMeaning = (number: number | string, type: string) => {
    const meanings: { [key: string]: { [key: string]: string } } = {
      lifePath: {
        '1': 'ผู้นำ นักสู้ ความเป็นอิสระ',
        '2': 'ความร่วมมือ การทำงานเป็นทีม ความอ่อนโยน',
        '3': 'ความคิดสร้างสรรค์ การสื่อสาร ความสนุกสนาน',
        '4': 'ความมั่นคง การทำงานหนัก ความเป็นระเบียบ',
        '5': 'อิสรภาพ การผจญภัย ความหลากหลาย',
        '6': 'ความรับผิดชอบ การดูแล ความรัก',
        '7': 'ปัญญา การค้นหาความจริง จิตวิญญาณ',
        '8': 'ความสำเร็จ อำนาจ การจัดการ',
        '9': 'การให้ ความเป็นสากล การช่วยเหลือ',
        '11': 'สัญชาตญาณ แรงบันดาลใจ จิตวิญญาณสูง',
        '22': 'ผู้สร้าง วิสัยทัศน์ใหญ่ ความสำเร็จระดับโลก',
        '33': 'ครูผู้ใหญ่ การเสียสละ ความรักสากล'
      }
    }
    
    return meanings[type]?.[number.toString()] || 'ไม่มีข้อมูล'
  }

  const NumberCard = ({ 
    title, 
    value, 
    description, 
    icon: Icon, 
    color, 
    type = 'lifePath' 
  }: {
    title: string
    value: number | string | number[]
    description: string
    icon: any
    color: string
    type?: string
  }) => (
    <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon size={24} style={{ color }} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => copyToClipboard(`${title}: ${value}`)}
          className="w-8 h-8 text-gray-400 hover:text-white hover:bg-white/10"
        >
          <Copy size={16} />
        </Button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            {Array.isArray(value) ? value.join(', ') : value}
          </span>
          {!Array.isArray(value) && (
            <div className="w-8 h-8">
              {getCompleteNumberIcon(parseInt(value.toString().split('/')[0]) || parseInt(value.toString()))}
            </div>
          )}
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-3">
          <p className="text-gray-300 text-sm">
            {Array.isArray(value) 
              ? `จำนวนเลขที่ขาด: ${value.length} เลข`
              : getNumberMeaning(value, type)
            }
          </p>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-indigo-600/20" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
          >
            <ArrowLeft size={20} />
          </Button>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">เลขของฉัน</h1>
            <p className="text-gray-400">การคำนวณเลขศาสตร์ส่วนตัวทั้งหมด</p>
          </div>

          <Button
            onClick={() => router.push('/dashboard/numerology-formulas')}
            variant="outline"
            className="border-white/20 text-gray-300 hover:bg-white/10"
          >
            <Calculator size={16} className="mr-2" />
            ดูสูตร
          </Button>
        </div>

        {/* Input Form */}
        <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="dateOfBirth" className="text-white font-medium mb-2 block">
                วันเกิด
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="bg-white/5 border-white/20 text-white"
              />
            </div>
            
            <div>
              <Label htmlFor="fullName" className="text-white font-medium mb-2 block">
                ชื่อเต็ม (ภาษาอังกฤษ) - ไม่บังคับ
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="JOHN SMITH"
                value={fullName}
                onChange={(e) => setFullName(e.target.value.toUpperCase())}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
              />
            </div>
          </div>
          
          <Button
            onClick={handleCalculate}
            disabled={!dateOfBirth || isCalculating}
            className="mt-6 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white"
          >
            {isCalculating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                กำลังคำนวณ...
              </>
            ) : (
              <>
                <Calculator size={16} className="mr-2" />
                คำนวณเลขศาสตร์
              </>
            )}
          </Button>
        </Card>

        {/* Results */}
        {results && (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-black/20 backdrop-blur-xl border border-white/10">
              <TabsTrigger value="birth" className="data-[state=active]:bg-white/20">
                <Calendar size={16} className="mr-2" />
                จากวันเกิด
              </TabsTrigger>
              <TabsTrigger value="name" className="data-[state=active]:bg-white/20" disabled={!fullName}>
                <User size={16} className="mr-2" />
                จากชื่อ
              </TabsTrigger>
              <TabsTrigger value="timing" className="data-[state=active]:bg-white/20">
                <Clock size={16} className="mr-2" />
                เวลาปัจจุบัน
              </TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-white/20">
                <TrendingUp size={16} className="mr-2" />
                ขั้นสูง
              </TabsTrigger>
            </TabsList>

            {/* Birth-based Numbers */}
            <TabsContent value="birth" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <NumberCard
                  title="Life Path Number"
                  value={results.lifePathNumber}
                  description="เส้นทางชีวิตหลักของคุณ"
                  icon={Star}
                  color="#FFD700"
                  type="lifePath"
                />
                
                <NumberCard
                  title="Talent Number"
                  value={results.talentNumber}
                  description="พรสวรรค์และความสามารถ"
                  icon={Zap}
                  color="#9D4EDD"
                />
                
                <NumberCard
                  title="Date Number"
                  value={results.dateNumber}
                  description="บุคลิกภาพที่ปรากฏ"
                  icon={Calendar}
                  color="#06D6A0"
                />
                
                <NumberCard
                  title="Sun Number"
                  value={results.sunNumber}
                  description="พลังงานแกนกลาง"
                  icon={Target}
                  color="#FFB347"
                />
                
                <NumberCard
                  title="Special Abilities"
                  value={results.specialAbilitiesNumber}
                  description="ความสามารถพิเศษ"
                  icon={Heart}
                  color="#FF6B9D"
                />
                
                <NumberCard
                  title="Missing Numbers"
                  value={results.missingNumbers}
                  description="บทเรียนที่ต้องเรียนรู้"
                  icon={TrendingUp}
                  color="#FF4757"
                />
              </div>
            </TabsContent>

            {/* Name-based Numbers */}
            <TabsContent value="name" className="space-y-6">
              {fullName ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <NumberCard
                    title="Expression Number"
                    value={results.expressionNumber}
                    description="ศักยภาพที่แท้จริง"
                    icon={User}
                    color="#2ECC71"
                  />
                  
                  <NumberCard
                    title="Personality Number"
                    value={results.personalityNumber}
                    description="บุคลิกภาพภายนอก"
                    icon={Star}
                    color="#E74C3C"
                  />
                  
                  <NumberCard
                    title="Heart's Desire"
                    value={results.heartDesireNumber}
                    description="ความปรารถนาภายใน"
                    icon={Heart}
                    color="#F39C12"
                  />
                  
                  <NumberCard
                    title="Maturity Number"
                    value={results.maturityNumber}
                    description="เป้าหมายวัยผู้ใหญ่"
                    icon={TrendingUp}
                    color="#8E44AD"
                  />
                </div>
              ) : (
                <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-8 text-center">
                  <User size={48} className="mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-bold text-white mb-2">ต้องใส่ชื่อเต็ม</h3>
                  <p className="text-gray-400 mb-4">
                    กรุณาใส่ชื่อเต็มภาษาอังกฤษเพื่อคำนวณเลขจากชื่อ
                  </p>
                  <Button
                    onClick={() => document.getElementById('fullName')?.focus()}
                    variant="outline"
                    className="border-white/20 text-gray-300 hover:bg-white/10"
                  >
                    ใส่ชื่อ
                  </Button>
                </Card>
              )}
            </TabsContent>

            {/* Timing Numbers */}
            <TabsContent value="timing" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <NumberCard
                  title="Personal Year"
                  value={results.personalYear}
                  description={`ปี ${new Date().getFullYear()}`}
                  icon={Calendar}
                  color="#3498DB"
                />
                
                <NumberCard
                  title="Personal Month"
                  value={results.personalMonth}
                  description={`เดือน ${new Date().getMonth() + 1}`}
                  icon={Clock}
                  color="#1ABC9C"
                />
                
                <NumberCard
                  title="Personal Day"
                  value={results.personalDay}
                  description={`วันที่ ${new Date().getDate()}`}
                  icon={Target}
                  color="#E67E22"
                />
              </div>
            </TabsContent>

            {/* Advanced Numbers */}
            <TabsContent value="advanced" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center">
                      <TrendingUp size={24} className="text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Challenge Numbers</h3>
                      <p className="text-gray-400 text-sm">ความท้าทายในแต่ละช่วงชีวิต</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {results.challengeNumbers.map((challenge, index) => (
                      <div key={index} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3">
                        <span className="text-gray-300">Challenge {index + 1}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold">{challenge}</span>
                          <span className="text-xs text-gray-400">
                            {results.lifePeriodAges[`challenge${index + 1}` as keyof typeof results.lifePeriodAges]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                
                <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                      <Star size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Pinnacle Numbers</h3>
                      <p className="text-gray-400 text-sm">โอกาสในแต่ละช่วงชีวิต</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {results.pinnacleNumbers.map((pinnacle, index) => (
                      <div key={index} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3">
                        <span className="text-gray-300">Pinnacle {index + 1}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold">{pinnacle}</span>
                          <span className="text-xs text-gray-400">
                            {results.lifePeriodAges[`pinnacle${index + 1}` as keyof typeof results.lifePeriodAges]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        )}

        {/* Action Buttons */}
        {results && (
          <div className="mt-12 text-center">
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <NumerologyIcons.yantra size={48} color="#8B5CF6" className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">ต้องการรายงานเชิงลึก?</h3>
              <p className="text-gray-400 mb-6">รับการวิเคราะห์เลขศาสตร์แบบละเอียดจาก AI</p>
              
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => router.push('/dashboard/reports')}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white"
                >
                  ดูรายงานเต็ม
                </Button>
                <Button
                  onClick={() => router.push('/dashboard/ai-chat')}
                  variant="outline"
                  className="border-white/20 text-gray-300 hover:bg-white/10"
                >
                  ถาม AI
                </Button>
                <Button
                  onClick={() => copyToClipboard(JSON.stringify(results, null, 2))}
                  variant="outline"
                  className="border-white/20 text-gray-300 hover:bg-white/10"
                >
                  <Share2 size={16} className="mr-2" />
                  แชร์ผลลัพธ์
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { getCompleteNumberIcon } from '@/design-system/icons/AllNumberIcons'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Calculator, Calendar, User, Heart, Star, Zap, Target, TrendingUp, Clock } from 'lucide-react'

interface FormulaData {
  id: string
  name: string
  category: 'birth' | 'name' | 'timing' | 'advanced'
  formula: string
  description: string
  example: string
  result: string
  meaning: string
  icon: any
  color: string
}

export default function NumerologyFormulasPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'birth' | 'name' | 'timing' | 'advanced'>('all')

  const formulas: FormulaData[] = [
    // Birth-based Formulas
    {
      id: 'life-path',
      name: 'Life Path Number',
      category: 'birth',
      formula: 'วันเกิด + เดือนเกิด + ปีเกิด (ลดเหลือเลขเดียว)',
      description: 'เส้นทางชีวิตหลักของคุณ แสดงถึงจุดประสงค์และภารกิจในชีวิต',
      example: '15/05/1990 → 1+5+0+5+1+9+9+0 = 30 → 3+0 = 3',
      result: 'เลข 3',
      meaning: 'ความคิดสร้างสรรค์ การสื่อสาร ความมีเสน่ห์',
      icon: Star,
      color: '#FFD700'
    },
    {
      id: 'talent',
      name: 'Talent Number',
      category: 'birth',
      formula: 'ผลรวมตัวเลขทั้งหมดในวันเกิด (ไม่ลด)',
      description: 'พรสวรรค์และความสามารถธรรมชาติที่คุณมี',
      example: '15/05/1990 → 1+5+0+5+1+9+9+0 = 30',
      result: '30/3',
      meaning: 'พรสวรรค์ด้านการสื่อสาร แต่มีพลังงาน 30 (ความรับผิดชอบสูง)',
      icon: Zap,
      color: '#9D4EDD'
    },
    {
      id: 'date-number',
      name: 'Date Number',
      category: 'birth',
      formula: 'วันที่เกิด (ไม่เปลี่ยนแปลง)',
      description: 'บุคลิกภาพและลักษณะเด่นที่ปรากฏให้คนอื่นเห็น',
      example: 'เกิดวันที่ 15',
      result: 'เลข 15',
      meaning: 'ความเป็นผู้นำ มีความรับผิดชอบ ชอบช่วยเหลือคนอื่น',
      icon: Calendar,
      color: '#06D6A0'
    },
    {
      id: 'sun-number',
      name: 'Sun Number',
      category: 'birth',
      formula: 'วัน + เดือน (เฉพาะตัวเลข)',
      description: 'พลังงานแกนกลางและแรงขับเคลื่อนภายใน',
      example: '15 + 05 → 1+5+0+5 = 11 → 1+1 = 2',
      result: 'เลข 2',
      meaning: 'ความร่วมมือ การทำงานเป็นทีม ความอ่อนโยน',
      icon: Target,
      color: '#FFB347'
    },
    {
      id: 'special-abilities',
      name: 'Special Abilities',
      category: 'birth',
      formula: 'เดือน + ปี (เฉพาะตัวเลข)',
      description: 'ความสามารถพิเศษที่สามารถพัฒนาได้',
      example: '05 + 1990 → 0+5+1+9+9+0 = 24 → 2+4 = 6',
      result: 'เลข 6',
      meaning: 'ความสามารถด้านการดูแล การรักษา ความรับผิดชอบ',
      icon: Heart,
      color: '#FF6B9D'
    },
    {
      id: 'missing-numbers',
      name: 'Missing Numbers',
      category: 'birth',
      formula: 'เลข 1-9 ที่ไม่ปรากฏในวันเกิดและ Life Path',
      description: 'บทเรียนชีวิตที่ต้องเรียนรู้และพัฒนา',
      example: 'วันเกิด: 15/05/1990, Life Path: 3 → ขาด 2, 4, 6, 7, 8',
      result: 'เลข 2, 4, 6, 7, 8',
      meaning: 'ต้องเรียนรู้ความร่วมมือ ความมั่นคง ความรับผิดชอบ ปัญญา ความสำเร็จ',
      icon: TrendingUp,
      color: '#FF4757'
    },

    // Name-based Formulas
    {
      id: 'expression',
      name: 'Expression Number',
      category: 'name',
      formula: 'ผลรวมตัวอักษรทั้งหมดในชื่อเต็ม',
      description: 'ศักยภาพและความสามารถที่แท้จริงของคุณ',
      example: 'JOHN SMITH → J(1)+O(6)+H(8)+N(5)+S(1)+M(4)+I(9)+T(2)+H(8) = 44 → 4+4 = 8',
      result: 'เลข 8',
      meaning: 'ความสามารถด้านการจัดการ ความสำเร็จ อำนาจ',
      icon: User,
      color: '#2ECC71'
    },
    {
      id: 'personality',
      name: 'Personality Number',
      category: 'name',
      formula: 'ผลรวมพยัญชนะในชื่อเต็ม',
      description: 'บุคลิกภาพที่ผู้อื่นมองเห็นจากภายนอก',
      example: 'JOHN SMITH → J(1)+H(8)+N(5)+S(1)+M(4)+T(2)+H(8) = 29 → 2+9 = 11',
      result: 'เลข 11',
      meaning: 'บุคลิกภาพที่สว่างไสว เป็นแรงบันดาลใจ มีสัญชาตญาณ',
      icon: Star,
      color: '#E74C3C'
    },
    {
      id: 'heart-desire',
      name: "Heart's Desire",
      category: 'name',
      formula: 'ผลรวมสระในชื่อเต็ม',
      description: 'ความปรารถนาลึกๆ และแรงจูงใจภายใน',
      example: 'JOHN SMITH → O(6)+I(9) = 15 → 1+5 = 6',
      result: 'เลข 6',
      meaning: 'ปรารถนาความรัก ความรับผิดชอบ การดูแลคนอื่น',
      icon: Heart,
      color: '#F39C12'
    },
    {
      id: 'maturity',
      name: 'Maturity Number',
      category: 'name',
      formula: 'Life Path + Expression Number',
      description: 'เป้าหมายและความสำเร็จในช่วงวัยผู้ใหญ่',
      example: 'Life Path 3 + Expression 8 = 11',
      result: 'เลข 11',
      meaning: 'ความสำเร็จด้านจิตวิญญาณ การเป็นแรงบันดาลใจ',
      icon: TrendingUp,
      color: '#8E44AD'
    },

    // Timing Formulas
    {
      id: 'personal-year',
      name: 'Personal Year',
      category: 'timing',
      formula: 'วัน + เดือนเกิด + ปีปัจจุบัน',
      description: 'พลังงานและธีมหลักของปีนี้',
      example: '15/05 + 2024 → 1+5+0+5+2+0+2+4 = 19 → 1+9 = 1',
      result: 'ปีเลข 1',
      meaning: 'ปีแห่งการเริ่มต้นใหม่ ความเป็นผู้นำ โอกาสใหม่',
      icon: Calendar,
      color: '#3498DB'
    },
    {
      id: 'personal-month',
      name: 'Personal Month',
      category: 'timing',
      formula: 'Personal Year + เดือนปัจจุบัน',
      description: 'พลังงานและโฟกัสของเดือนนี้',
      example: 'Personal Year 1 + เดือน 12 = 13 → 1+3 = 4',
      result: 'เดือนเลข 4',
      meaning: 'เดือนแห่งการทำงานหนัก วางแผน สร้างความมั่นคง',
      icon: Clock,
      color: '#1ABC9C'
    },
    {
      id: 'personal-day',
      name: 'Personal Day',
      category: 'timing',
      formula: 'Personal Month + วันที่ปัจจุบัน',
      description: 'พลังงานและแนวทางของวันนี้',
      example: 'Personal Month 4 + วันที่ 25 = 29 → 2+9 = 11',
      result: 'วันเลข 11',
      meaning: 'วันแห่งสัญชาตญาณ ความสว่างไสว การรับรู้',
      icon: Target,
      color: '#E67E22'
    },

    // Advanced Formulas
    {
      id: 'challenge-numbers',
      name: 'Challenge Numbers',
      category: 'advanced',
      formula: 'ผลต่างของวัน-เดือน, ปี-วัน, ปี-เดือน และความท้าทายหลัก',
      description: 'บทเรียนและความท้าทายในแต่ละช่วงชีวิต',
      example: 'วัน 15→6, เดือน 05→5, ปี 1990→1 → |6-5|=1, |1-6|=5, |1-5|=4, |1-5|=4',
      result: 'Challenge: 1, 5, 4, 4',
      meaning: 'ความท้าทาย: ความเป็นผู้นำ, อิสรภาพ, ความมั่นคง',
      icon: TrendingUp,
      color: '#C0392B'
    },
    {
      id: 'pinnacle-numbers',
      name: 'Pinnacle Numbers',
      category: 'advanced',
      formula: 'วัน+เดือน, วัน+ปี, Pinnacle1+2, เดือน+ปี',
      description: 'โอกาสและจุดสูงสุดในแต่ละช่วงชีวิต',
      example: 'วัน 6+เดือน 5=11, วัน 6+ปี 1=7, 11+7=18→9, เดือน 5+ปี 1=6',
      result: 'Pinnacle: 11, 7, 9, 6',
      meaning: 'โอกาส: จิตวิญญาณ, ปัญญา, การให้, ความรัก',
      icon: Star,
      color: '#9B59B6'
    }
  ]

  const categories = [
    { id: 'all', name: 'ทั้งหมด', icon: Calculator, count: formulas.length },
    { id: 'birth', name: 'จากวันเกิด', icon: Calendar, count: formulas.filter(f => f.category === 'birth').length },
    { id: 'name', name: 'จากชื่อ', icon: User, count: formulas.filter(f => f.category === 'name').length },
    { id: 'timing', name: 'เวลา/ช่วงชีวิต', icon: Clock, count: formulas.filter(f => f.category === 'timing').length },
    { id: 'advanced', name: 'ขั้นสูง', icon: TrendingUp, count: formulas.filter(f => f.category === 'advanced').length }
  ]

  const filteredFormulas = selectedCategory === 'all' 
    ? formulas 
    : formulas.filter(f => f.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'birth': return '#3B82F6'
      case 'name': return '#10B981'
      case 'timing': return '#F59E0B'
      case 'advanced': return '#8B5CF6'
      default: return '#6B7280'
    }
  }

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
          
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">สูตรเลขศาสตร์</h1>
            <p className="text-gray-400">สูตรการคำนวณเลขศาสตร์ทั้งหมดในระบบ</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {categories.map((category) => (
              <Card
                key={category.id}
                className={`
                  cursor-pointer transition-all duration-300 p-4 text-center
                  ${selectedCategory === category.id 
                    ? 'bg-white/20 border-white/30' 
                    : 'bg-black/20 border-white/10 hover:border-white/20'
                  }
                `}
                onClick={() => setSelectedCategory(category.id as any)}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedCategory === category.id ? 'bg-white/20' : 'bg-white/10'
                  }`}>
                    <category.icon size={20} className="text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium text-sm">{category.name}</h3>
                    <Badge variant="secondary" className="mt-1 text-xs bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {category.count} สูตร
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Formulas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFormulas.map((formula) => (
            <Card key={formula.id} className="bg-black/20 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${formula.color}20` }}
                  >
                    <formula.icon size={24} style={{ color: formula.color }} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white">{formula.name}</h3>
                    <Badge 
                      variant="secondary" 
                      className="mt-1 text-xs border"
                      style={{ 
                        backgroundColor: `${getCategoryColor(formula.category)}20`,
                        color: getCategoryColor(formula.category),
                        borderColor: `${getCategoryColor(formula.category)}30`
                      }}
                    >
                      {categories.find(c => c.id === formula.category)?.name}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">{formula.description}</p>

              {/* Formula */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
                <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-blue-400" />
                  สูตรการคำนวณ
                </h4>
                <code className="text-green-300 text-sm font-mono bg-black/30 px-2 py-1 rounded">
                  {formula.formula}
                </code>
              </div>

              {/* Example */}
              <div className="space-y-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h4 className="text-white font-semibold text-sm mb-2">ตัวอย่างการคำนวณ</h4>
                  <p className="text-gray-300 text-sm font-mono">{formula.example}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-gray-400 text-xs">ผลลัพธ์:</span>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                      {formula.result}
                    </Badge>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h4 className="text-white font-semibold text-sm mb-2">ความหมาย</h4>
                  <p className="text-gray-300 text-sm">{formula.meaning}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-12 text-center">
          <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <NumerologyIcons.yantra size={48} color="#8B5CF6" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">พร้อมคำนวณเลขศาสตร์ของคุณ?</h3>
            <p className="text-gray-400 mb-6">ใช้สูตรเหล่านี้เพื่อค้นพบความลับในตัวเลขของคุณ</p>
            
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => router.push('/dashboard/my-numbers')}
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white"
              >
                คำนวณเลขของฉัน
              </Button>
              <Button
                onClick={() => router.push('/dashboard/ai-chat')}
                variant="outline"
                className="border-white/20 text-gray-300 hover:bg-white/10"
              >
                ถาม AI เกี่ยวกับสูตร
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

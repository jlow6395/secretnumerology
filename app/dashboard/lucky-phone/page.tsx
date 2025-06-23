"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Phone, Star, Zap, Heart, DollarSign, Shield, Copy, Check } from 'lucide-react'

interface PhoneAnalysis {
  number: string
  totalSum: number
  reducedNumber: number
  meaning: string
  energyType: string
  luckScore: number
  strengths: string[]
  weaknesses: string[]
  recommendations: string[]
  color: string
  element: string
}

export default function LuckyPhonePage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [analysis, setAnalysis] = useState<PhoneAnalysis | null>(null)
  const [suggestedNumbers, setSuggestedNumbers] = useState<string[]>([])
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null)

  const analyzePhoneNumber = (number: string): PhoneAnalysis => {
    // Remove all non-digits
    const digits = number.replace(/\D/g, '')
    
    // Calculate sum of all digits
    const totalSum = digits.split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    
    // Reduce to single digit (except master numbers 11, 22, 33)
    let reducedNumber = totalSum
    while (reducedNumber > 9 && ![11, 22, 33].includes(reducedNumber)) {
      reducedNumber = reducedNumber.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    }

    const meanings: Record<number, any> = {
      1: {
        meaning: 'เลขแห่งความเป็นผู้นำ และการเริ่มต้นใหม่',
        energyType: 'พลังงานผู้นำ',
        luckScore: 85,
        strengths: ['ความเป็นผู้นำ', 'ความมั่นใจ', 'การริเริ่ม', 'ความเป็นอิสระ'],
        weaknesses: ['ความเอาแต่ใจ', 'ความเย่อหยิ่ง', 'ไม่ชอบฟังคนอื่น'],
        recommendations: ['เหมาะกับธุรกิจส่วนตัว', 'การเป็นหัวหน้าทีม', 'งานที่ต้องตัดสินใจ'],
        color: '#FF6B6B',
        element: 'ไฟ'
      },
      2: {
        meaning: 'เลขแห่งความร่วมมือ และความสมดุล',
        energyType: 'พลังงานความร่วมมือ',
        luckScore: 75,
        strengths: ['ความร่วมมือ', 'การทำงานเป็นทีม', 'ความอ่อนโยน', 'การเป็นคนกลาง'],
        weaknesses: ['ความลังเล', 'ขาดความมั่นใจ', 'พึ่งพาคนอื่นมาก'],
        recommendations: ['งานที่ต้องร่วมมือ', 'การเป็นคนกลาง', 'งานด้านบริการ'],
        color: '#4ECDC4',
        element: 'น้ำ'
      },
      3: {
        meaning: 'เลขแห่งความคิดสร้างสรรค์ และการสื่อสาร',
        energyType: 'พลังงานสร้างสรรค์',
        luckScore: 90,
        strengths: ['ความคิดสร้างสรรค์', 'การสื่อสาร', 'ความมีเสน่ห์', 'ความสนุกสนาน'],
        weaknesses: ['ไม่มีระเบียบ', 'ขาดความมั่นคง', 'พูดมาก'],
        recommendations: ['งานศิลปะ', 'การตลาด', 'การแสดง', 'การเขียน'],
        color: '#FFE66D',
        element: 'อากาศ'
      },
      4: {
        meaning: 'เลขแห่งความมั่นคง และการทำงานหนัก',
        energyType: 'พลังงานมั่นคง',
        luckScore: 70,
        strengths: ['ความมั่นคง', 'ความขยัน', 'ความน่าเชื่อถือ', 'การวางแผน'],
        weaknesses: ['ความเครียด', 'ไม่ยืดหยุ่น', 'คิดมาก'],
        recommendations: ['งานบัญชี', 'การจัดการ', 'งานก่อสร้าง', 'การธนาคาร'],
        color: '#95E1D3',
        element: 'ดิน'
      },
      5: {
        meaning: 'เลขแห่งอิสรภาพ และการผจญภัย',
        energyType: 'พลังงานอิสรภาพ',
        luckScore: 80,
        strengths: ['ความอิสระ', 'การผจญภัย', 'ความยืดหยุ่น', 'ความสนุกสนาน'],
        weaknesses: ['ไม่มั่นคง', 'ขาดความรับผิดชอบ', 'เปลี่ยนใจง่าย'],
        recommendations: ['งานท่องเที่ยว', 'การขาย', 'งานสื่อ', 'ธุรกิจออนไลน์'],
        color: '#A8E6CF',
        element: 'อากาศ'
      },
      6: {
        meaning: 'เลขแห่งความรัก และความรับผิดชอบ',
        energyType: 'พลังงานความรัก',
        luckScore: 85,
        strengths: ['ความรัก', 'ความรับผิดชอบ', 'การดูแลคนอื่น', 'ความซื่อสัตย์'],
        weaknesses: ['ยุ่งกับคนอื่นมาก', 'เสียสละมากเกินไป', 'ควบคุมมาก'],
        recommendations: ['งานดูแลคนอื่น', 'การศึกษา', 'งานสุขภาพ', 'ธุรกิจครอบครัว'],
        color: '#FFB6C1',
        element: 'ดิน'
      },
      7: {
        meaning: 'เลขแห่งปัญญา และจิตวิญญาณ',
        energyType: 'พลังงานปัญญา',
        luckScore: 75,
        strengths: ['ปัญญา', 'ความลึกซึ้ง', 'การวิเคราะห์', 'จิตวิญญาณสูง'],
        weaknesses: ['เก็บตัว', 'คิดมาก', 'ไม่ชอบสังคม'],
        recommendations: ['งานวิจัย', 'การสอน', 'งานเทคโนโลยี', 'งานจิตวิญญาณ'],
        color: '#DDA0DD',
        element: 'น้ำ'
      },
      8: {
        meaning: 'เลขแห่งความสำเร็จ และอำนาจ',
        energyType: 'พลังงานความสำเร็จ',
        luckScore: 95,
        strengths: ['ความสำเร็จ', 'อำนาจ', 'ความมั่งคั่ง', 'ความมุ่งมั่น'],
        weaknesses: ['ความโลภ', 'ไม่มีเวลาให้ครอบครัว', 'เครียดมาก'],
        recommendations: ['ธุรกิจใหญ่', 'การเงิน', 'อสังหาริมทรัพย์', 'การจัดการ'],
        color: '#FFD700',
        element: 'ดิน'
      },
      9: {
        meaning: 'เลขแห่งการให้ และจิตใจกว้าง',
        energyType: 'พลังงานการให้',
        luckScore: 80,
        strengths: ['จิตใจกว้าง', 'การให้', 'ความเมตตา', 'วิสัยทัศน์กว้าง'],
        weaknesses: ['เสียสละมากเกินไป', 'ไม่ดูแลตัวเอง', 'อารมณ์แปรปรวน'],
        recommendations: ['งานสาธารณะ', 'การกุศล', 'งานศิลปะ', 'การบำบัด'],
        color: '#87CEEB',
        element: 'น้ำ'
      },
      11: {
        meaning: 'เลขแห่งการสว่างไสว และสัญชาตญาณ',
        energyType: 'พลังงานจิตวิญญาณ',
        luckScore: 90,
        strengths: ['สัญชาตญาณแรง', 'ความสว่างไสว', 'การเป็นแรงบันดาลใจ', 'พลังจิต'],
        weaknesses: ['ความเครียดสูง', 'อารมณ์แปรปรวน', 'ความกดดัน'],
        recommendations: ['งานจิตวิญญาณ', 'การบำบัด', 'งานศิลปะ', 'การสอน'],
        color: '#E6E6FA',
        element: 'อากาศ'
      },
      22: {
        meaning: 'เลขแห่งการสร้างสรรค์ใหญ่ และวิสัยทัศน์',
        energyType: 'พลังงานสร้างสรรค์ยิ่งใหญ่',
        luckScore: 95,
        strengths: ['วิสัยทัศน์ใหญ่', 'การสร้างสรรค์', 'ความเป็นผู้นำ', 'การเปลี่ยนแปลงโลก'],
        weaknesses: ['ความกดดันสูง', 'คาดหวังมาก', 'เครียดง่าย'],
        recommendations: ['โครงการใหญ่', 'การเปลี่ยนแปลงสังคม', 'นวัตกรรม', 'การเป็นผู้นำ'],
        color: '#F0E68C',
        element: 'ไฟ'
      },
      33: {
        meaning: 'เลขแห่งความรัก และการเป็นครูใหญ่',
        energyType: 'พลังงานครูใหญ่',
        luckScore: 100,
        strengths: ['ความรักสูงสุด', 'การเป็นครู', 'การเสียสละ', 'การรักษา'],
        weaknesses: ['ภาระหนักมาก', 'เสียสละมากเกินไป', 'ความกดดัน'],
        recommendations: ['การสอน', 'การรักษา', 'งานสาธารณะ', 'การให้คำปรึกษา'],
        color: '#FF69B4',
        element: 'น้ำ'
      }
    }

    const numberData = meanings[reducedNumber] || meanings[1]

    return {
      number: digits,
      totalSum,
      reducedNumber,
      ...numberData
    }
  }

  const generateLuckyNumbers = (baseNumber: number): string[] => {
    const luckyPatterns = [
      // Pattern based on base number
      `08${baseNumber}${baseNumber}${baseNumber}${baseNumber}${baseNumber}${baseNumber}${baseNumber}`,
      `09${baseNumber}${baseNumber}${baseNumber}${baseNumber}${baseNumber}${baseNumber}${baseNumber}`,
      `06${baseNumber}${baseNumber}${baseNumber}${baseNumber}${baseNumber}${baseNumber}${baseNumber}`,
      
      // Golden numbers (8, 6, 9)
      '0888888888',
      '0666666666',
      '0999999999',
      '0868686868',
      '0696969696',
      '0898989898',
      
      // Master numbers
      '0811111111',
      '0822222222',
      '0833333333',
      
      // Mixed lucky patterns
      '0812345678',
      '0987654321',
      '0886886886',
      '0668668668',
      '0998998998'
    ]

    return luckyPatterns.slice(0, 8).map(pattern => 
      pattern.replace(/^0/, '0' + Math.floor(Math.random() * 9 + 1).toString())
    )
  }

  const handleAnalyze = () => {
    if (!phoneNumber.trim()) return

    const result = analyzePhoneNumber(phoneNumber)
    setAnalysis(result)
    setSuggestedNumbers(generateLuckyNumbers(result.reducedNumber))
  }

  const copyToClipboard = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number)
      setCopiedNumber(number)
      setTimeout(() => setCopiedNumber(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const formatPhoneNumber = (number: string) => {
    return number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
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
            <h1 className="text-3xl font-bold text-white mb-2">เบอร์โทรมงคล</h1>
            <p className="text-gray-400">วิเคราะห์และแนะนำเบอร์โทรศัพท์ที่เหมาะกับคุณ</p>
          </div>
        </div>

        {/* Input Section */}
        <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-8 mb-8">
          <div className="text-center mb-8">
            <NumerologyIcons.phone size={48} color="#10B981" className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">วิเคราะห์เบอร์โทรศัพท์</h2>
            <p className="text-gray-400">ใส่เบอร์โทรศัพท์ที่คุณใช้อยู่หรือกำลังพิจารณา</p>
          </div>

          <div className="max-w-md mx-auto space-y-6">
            <div className="space-y-2">
              <Label className="text-white font-medium">เบอร์โทรศัพท์</Label>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="08x-xxx-xxxx"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-center text-xl font-mono h-14"
                maxLength={15}
              />
              <p className="text-xs text-gray-400 text-center">
                สามารถใส่เบอร์ในรูปแบบใดก็ได้ เช่น 081-234-5678 หรือ 0812345678
              </p>
            </div>

            <Button
              onClick={handleAnalyze}
              disabled={!phoneNumber.trim()}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-3 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              วิเคราะห์เบอร์นี้
            </Button>
          </div>
        </Card>

        {/* Analysis Result */}
        {analysis && (
          <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-8 mb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                   style={{ background: `linear-gradient(135deg, ${analysis.color}40, ${analysis.color}60)` }}>
                <span className="text-3xl font-bold text-white">{analysis.reducedNumber}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                เบอร์ {formatPhoneNumber(analysis.number)}
              </h3>
              
              <div className="flex items-center justify-center gap-4 mb-4">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  คะแนนโชค: {analysis.luckScore}/100
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  {analysis.element}
                </Badge>
              </div>

              <p className="text-xl text-gray-300 mb-6">{analysis.meaning}</p>
              
              {/* Energy Type */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-white font-medium">{analysis.energyType}</span>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-green-400" />
                  จุดแข็ง
                </h4>
                <div className="space-y-2">
                  {analysis.strengths.map((strength, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-gray-300 text-sm">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weaknesses */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-400" />
                  จุดที่ควรระวัง
                </h4>
                <div className="space-y-2">
                  {analysis.weaknesses.map((weakness, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      <span className="text-gray-300 text-sm">{weakness}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <NumerologyIcons.lotus size={20} color="#10B981" />
                คำแนะนำการใช้งาน
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysis.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-gray-300 text-sm">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* Suggested Lucky Numbers */}
        {suggestedNumbers.length > 0 && (
          <Card className="bg-black/20 backdrop-blur-xl border border-white/10 p-8">
            <div className="text-center mb-8">
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">เบอร์มงคลแนะนำ</h3>
              <p className="text-gray-400">เบอร์ที่เหมาะกับพลังงานของคุณ</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestedNumbers.map((number, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border border-white/10 p-4 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      
                      <div>
                        <p className="text-white font-mono text-lg">{formatPhoneNumber(number)}</p>
                        <p className="text-gray-400 text-xs">เบอร์มงคล #{index + 1}</p>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(number)}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20"
                    >
                      {copiedNumber === number ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm mb-4">
                💡 เบอร์เหล่านี้คำนวณจากพลังงานเลขศาสตร์ของคุณ
              </p>
              
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => router.push('/dashboard/reports')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  ดูรายงานเต็ม
                </Button>
                <Button
                  onClick={() => router.push('/dashboard/ai-chat')}
                  variant="outline"
                  className="border-white/20 text-gray-300 hover:bg-white/10"
                >
                  ปรึกษา AI
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

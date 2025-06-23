"use client"

import { useState } from 'react'
import { calculateLifePathNumber } from '@/lib/numerology/core'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function QuickTestPage() {
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleCalculate = async () => {
    if (!name || !birthDate) return
    
    setLoading(true)
    try {
      // คำนวณ Life Path Number
      const lifePathNumber = calculateLifePathNumber(birthDate)
      
      // ดึงข้อมูลการตีความจากฐานข้อมูล
      const { data: interpretation, error } = await supabase
        .from('numerology_interpretations')
        .select('*')
        .eq('number', lifePathNumber)
        .eq('type', 'Life Path')
        .single()

      if (error) {
        console.error('Database error:', error)
        setResult({
          name,
          birthDate,
          lifePathNumber,
          error: 'ไม่พบข้อมูลการตีความในฐานข้อมูล'
        })
      } else {
        setResult({
          name,
          birthDate,
          lifePathNumber,
          interpretation
        })
      }
    } catch (error) {
      console.error('Calculation error:', error)
      setResult({
        name,
        birthDate,
        error: 'เกิดข้อผิดพลาดในการคำนวณ'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">🔮 ทดสอบระบบเลขศาสตร์</h1>
      
      {/* Input Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>กรอกข้อมูลของคุณ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">ชื่อ-นามสกุล:</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="เช่น สมชาย ใจดี"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">วันเกิด:</label>
            <Input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <Button 
            onClick={handleCalculate} 
            disabled={loading || !name || !birthDate}
            className="w-full"
            size="lg"
          >
            {loading ? '⏳ กำลังคำนวณ...' : '🔮 ดูผลการตีความ'}
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              {result.error ? '❌' : '✨'} ผลการวิเคราะห์
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result.error ? (
              <div className="text-red-500 text-center">
                <p className="text-lg font-semibold">{result.error}</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">สวัสดี คุณ{result.name}!</h3>
                  <p className="text-gray-600 dark:text-gray-300">วันเกิด: {result.birthDate}</p>
                </div>

                {/* Life Path Number */}
                <div className="text-center p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg">
                  <div className="text-6xl font-bold text-orange-600 dark:text-orange-400 mb-4">
                    {result.lifePathNumber}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{result.interpretation?.title}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    {result.interpretation?.description}
                  </p>
                </div>

                {/* Detailed Interpretation */}
                {result.interpretation?.interpretation && (
                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">🔍 การตีความโดยละเอียด:</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {result.interpretation.interpretation}
                    </p>
                  </div>
                )}

                {/* Next Steps */}
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    ต้องการข้อมูลเพิ่มเติม?
                  </p>
                  <div className="space-x-2">
                    <Button asChild variant="outline" size="sm">
                      <a href="/wizard/step1">เริ่มต้น Wizard</a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href="/dashboard">ไปยัง Dashboard</a>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
} 
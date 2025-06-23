"use client"

import { useState } from 'react'
import { calculateLifePathNumber, calculateTalentNumber, findRecurringNumbers } from '@/lib/numerology/core'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TestNumerologyPage() {
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [dbData, setDbData] = useState<any>(null)

  const testCalculation = async () => {
    if (!name || !birthDate) return
    
    setLoading(true)
    try {
      // คำนวณตัวเลข
      const lifePath = calculateLifePathNumber(birthDate)
      const talent = calculateTalentNumber(birthDate)
      const recurring = findRecurringNumbers(birthDate)

      setResults({
        lifePath,
        talent,
        recurring,
        name,
        birthDate
      })

      // ดึงข้อมูลจาก Supabase
      const { data: interpretations, error } = await supabase
        .from('numerology_interpretations')
        .select('*')
        .eq('number', lifePath)
        .eq('type', 'Life Path')

      if (error) {
        console.error('Supabase error:', error)
        setDbData({ error: error.message })
      } else {
        setDbData(interpretations)
      }

    } catch (error) {
      console.error('Calculation error:', error)
      setResults({ error: error instanceof Error ? error.message : 'Unknown error' })
    } finally {
      setLoading(false)
    }
  }

  const testDatabase = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('numerology_interpretations')
        .select('number, type, title')
        .limit(10)

      if (error) {
        setDbData({ error: error.message })
      } else {
        setDbData(data)
      }
    } catch (error) {
      setDbData({ error: error instanceof Error ? error.message : 'Unknown error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">🧪 ทดสอบระบบเลขศาสตร์</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle>📝 กรอกข้อมูลทดสอบ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">ชื่อเต็ม:</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="เช่น สมชาย ใจดี"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">วันเกิด (YYYY-MM-DD):</label>
              <Input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <Button 
              onClick={testCalculation} 
              disabled={loading || !name || !birthDate}
              className="w-full"
            >
              {loading ? '⏳ กำลังคำนวณ...' : '🔢 คำนวณเลขศาสตร์'}
            </Button>
          </CardContent>
        </Card>

        {/* Database Test */}
        <Card>
          <CardHeader>
            <CardTitle>🗄️ ทดสอบฐานข้อมูล</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={testDatabase} 
              disabled={loading}
              className="w-full"
            >
              {loading ? '⏳ กำลังโหลด...' : '📊 ดูข้อมูลในฐานข้อมูล'}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Results */}
      {results && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>🎯 ผลการคำนวณ</CardTitle>
          </CardHeader>
          <CardContent>
            {results.error ? (
              <div className="text-red-500">❌ ข้อผิดพลาด: {results.error}</div>
            ) : (
              <div className="space-y-2">
                <p><strong>ชื่อ:</strong> {results.name}</p>
                <p><strong>วันเกิด:</strong> {results.birthDate}</p>
                <p><strong>🛤️ Life Path Number:</strong> {results.lifePath}</p>
                <p><strong>🎭 Talent Number:</strong> {results.talent}</p>
                <p><strong>🔄 Recurring Numbers:</strong> {results.recurring?.join(', ') || 'ไม่มี'}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Database Results */}
      {dbData && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>🗃️ ข้อมูลจากฐานข้อมูล</CardTitle>
          </CardHeader>
          <CardContent>
            {dbData.error ? (
              <div className="text-red-500">❌ ข้อผิดพลาดฐานข้อมูล: {dbData.error}</div>
            ) : (
              <div className="space-y-4">
                {Array.isArray(dbData) ? (
                  dbData.length > 0 ? (
                    <div>
                      <p className="font-semibold mb-2">✅ พบข้อมูล {dbData.length} รายการ:</p>
                      <div className="space-y-2">
                        {dbData.map((item, index) => (
                          <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                            <p><strong>เลข:</strong> {item.number}</p>
                            <p><strong>ประเภท:</strong> {item.type}</p>
                            <p><strong>ชื่อ:</strong> {item.title}</p>
                            {item.description && <p><strong>คำอธิบาย:</strong> {item.description}</p>}
                            {item.interpretation && (
                              <div className="mt-2">
                                <strong>การตีความ:</strong>
                                <p className="text-sm mt-1">{item.interpretation}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-yellow-600">⚠️ ไม่พบข้อมูลในฐานข้อมูล</div>
                  )
                ) : (
                  <pre className="text-sm bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-auto">
                    {JSON.stringify(dbData, null, 2)}
                  </pre>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
} 
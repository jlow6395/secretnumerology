"use client"

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useAuth } from '@/lib/AuthContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { calculateLifeTimeline } from '@/lib/numerology/core'

export default function DebugPage() {
  const [tests, setTests] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const [timelineData, setTimelineData] = useState<any>(null)
  const { user, supabaseUser, dbUser, activeProfile, isLoading, isAuthenticated } = useAuth()

  const runAllTests = async () => {
    setLoading(true)
    const results: any = {}

    // Test 1: Supabase Connection
    try {
      const { data, error } = await supabase.from('numerology_interpretations').select('count', { count: 'exact', head: true })
      results.supabaseConnection = { 
        success: !error, 
        count: data || 0,
        error: error?.message 
      }
    } catch (err) {
      results.supabaseConnection = { 
        success: false, 
        error: err instanceof Error ? err.message : 'Unknown error' 
      }
    }

    // Test 2: Check if table exists and has data
    try {
      const { data, error } = await supabase
        .from('numerology_interpretations')
        .select('number, type, title')
        .limit(5)
      
      results.tableData = {
        success: !error,
        data: data || [],
        error: error?.message
      }
    } catch (err) {
      results.tableData = { 
        success: false, 
        error: err instanceof Error ? err.message : 'Unknown error' 
      }
    }

    // Test 3: Environment Variables
    results.envVars = {
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      urlValue: process.env.NEXT_PUBLIC_SUPABASE_URL,
    }

    // Test 4: Auth Status
    results.authStatus = {
      isAuthenticated,
      hasUser: !!user,
      hasSupabaseUser: !!supabaseUser,
      hasDbUser: !!dbUser,
      hasActiveProfile: !!activeProfile,
      userEmail: supabaseUser?.email || 'N/A'
    }

    // Test 5: Timeline Calculation
    if (activeProfile?.birthDate || user?.birthDate) {
      try {
        const birthDate = activeProfile?.birthDate || user?.birthDate
        let formattedDate = birthDate
        
        if (birthDate?.includes('/')) {
          const [day, month, year] = birthDate.split('/')
          formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        }
        
        const timeline = calculateLifeTimeline(formattedDate!)
        setTimelineData(timeline)
        
        results.timelineCalculation = {
          success: true,
          birthDate: formattedDate,
          lifePathNumber: timeline?.lifePathNumber,
          currentAge: timeline?.currentAge,
          currentPinnacle: timeline?.currentPinnacle
        }
      } catch (err) {
        results.timelineCalculation = {
          success: false,
          error: err instanceof Error ? err.message : 'Unknown error'
        }
      }
    }

    setTests(results)
    setLoading(false)
  }

  useEffect(() => {
    runAllTests()
  }, [user, activeProfile, isAuthenticated])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>กำลังโหลดข้อมูล...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">🧪 Debug Dashboard</h1>
          <p className="text-gray-400">ตรวจสอบสถานะระบบและข้อมูล User</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Authentication Status */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">🔐 Authentication Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Authenticated:</span>
                <Badge variant={isAuthenticated ? "default" : "destructive"}>
                  {isAuthenticated ? "✅ Yes" : "❌ No"}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span>Has User:</span>
                <Badge variant={user ? "default" : "secondary"}>
                  {user ? "✅ Yes" : "❌ No"}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span>Has Supabase User:</span>
                <Badge variant={supabaseUser ? "default" : "secondary"}>
                  {supabaseUser ? "✅ Yes" : "❌ No"}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span>Has DB User:</span>
                <Badge variant={dbUser ? "default" : "secondary"}>
                  {dbUser ? "✅ Yes" : "❌ No"}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span>Has Active Profile:</span>
                <Badge variant={activeProfile ? "default" : "secondary"}>
                  {activeProfile ? "✅ Yes" : "❌ No"}
                </Badge>
              </div>
              {supabaseUser?.email && (
                <div className="text-sm text-gray-400 mt-2">
                  Email: {supabaseUser.email}
                </div>
              )}
            </CardContent>
          </Card>

          {/* User Data */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">👤 User Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {user ? (
                <>
                  <div><strong>Name:</strong> {user.name}</div>
                  <div><strong>Email:</strong> {user.email || 'N/A'}</div>
                  <div><strong>Birth Date:</strong> {user.birthDate || 'N/A'}</div>
                  <div><strong>Gender:</strong> {user.gender}</div>
                  <div><strong>Premium:</strong> {user.isPremium ? 'Yes' : 'No'}</div>
                </>
              ) : (
                <div className="text-gray-400">ไม่มีข้อมูล User</div>
              )}
            </CardContent>
          </Card>

          {/* Active Profile */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">👥 Active Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {activeProfile ? (
                <>
                  <div><strong>Name:</strong> {activeProfile.name}</div>
                  <div><strong>Birth Date:</strong> {activeProfile.birthDate}</div>
                  <div><strong>Relationship:</strong> {activeProfile.relationship}</div>
                  <div><strong>Gender:</strong> {activeProfile.gender}</div>
                </>
              ) : (
                <div className="text-gray-400">ไม่มี Active Profile</div>
              )}
            </CardContent>
          </Card>

          {/* Database User */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-orange-400">🗄️ Database User</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {dbUser ? (
                <>
                  <div><strong>Full Name:</strong> {dbUser.full_name || 'N/A'}</div>
                  <div><strong>Date of Birth:</strong> {dbUser.date_of_birth || 'N/A'}</div>
                  <div><strong>Unlocked:</strong> {dbUser.unlocked ? 'Yes' : 'No'}</div>
                  <div><strong>Updated:</strong> {dbUser.updated_at ? new Date(dbUser.updated_at).toLocaleDateString() : 'N/A'}</div>
                </>
              ) : (
                <div className="text-gray-400">ไม่มีข้อมูลในฐานข้อมูล</div>
              )}
            </CardContent>
          </Card>

          {/* Timeline Data */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-indigo-400">📈 Timeline Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {timelineData ? (
                <>
                  <div><strong>Life Path:</strong> {timelineData.lifePathNumber}</div>
                  <div><strong>Current Age:</strong> {timelineData.currentAge}</div>
                  <div><strong>Current Pinnacle:</strong> {timelineData.currentPinnacle}</div>
                  <div><strong>Active Period:</strong> {timelineData.summary.activePeriod.name}</div>
                </>
              ) : (
                <div className="text-gray-400">ไม่สามารถคำนวณ Timeline ได้</div>
              )}
            </CardContent>
          </Card>

          {/* Test Results */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-yellow-400">🧪 Test Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                onClick={runAllTests} 
                disabled={loading}
                className="w-full mb-4"
              >
                {loading ? 'กำลังทดสอบ...' : 'รันการทดสอบ'}
              </Button>
              
              {Object.keys(tests).map((key) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="capitalize">{key}:</span>
                  <Badge variant={tests[key]?.success ? "default" : "destructive"}>
                    {tests[key]?.success ? "✅ Pass" : "❌ Fail"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Detailed Test Results */}
        {Object.keys(tests).length > 0 && (
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">📊 Detailed Results</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm text-gray-300 bg-black/50 p-4 rounded overflow-auto">
                {JSON.stringify(tests, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => window.location.href = '/dashboard/timeline'}
            className="bg-blue-600 hover:bg-blue-700"
          >
            ไปที่ Timeline
          </Button>
          <Button 
            onClick={() => window.location.href = '/dashboard'}
            variant="outline"
          >
            ไปที่ Dashboard
          </Button>
          <Button 
            onClick={() => window.location.href = '/auth/login'}
            variant="outline"
          >
            เข้าสู่ระบบ
          </Button>
        </div>
      </div>
    </div>
  )
} 
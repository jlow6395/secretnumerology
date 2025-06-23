"use client"

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useAuth } from '@/lib/AuthContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { calculateLifeTimeline } from '@/lib/numerology/core'
import { liffService } from '@/lib/liff'
import { Copy, User, CheckCircle } from 'lucide-react'

export default function DebugPage() {
  const [tests, setTests] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const [timelineData, setTimelineData] = useState<any>(null)
  const { user, supabaseUser, dbUser, activeProfile, isLoading, isAuthenticated } = useAuth()
  const [lineProfile, setLineProfile] = useState<any>(null)
  const [copied, setCopied] = useState(false)
  const [manualUserId, setManualUserId] = useState('U49095b1f95e8d839b76d6d27ed0b1c96')

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

  const handleLineLogin = async () => {
    setLoading(true)
    try {
      // ใน localhost ให้ใช้ mock data แทน
      if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
        console.log('🔄 Mock LINE login for localhost...')
        
        // Mock LINE Profile สำหรับ testing - ใช้ Admin ID จริง
        const mockProfile = {
          userId: 'U49095b1f95e8d839b76d6d27ed0b1c96', // Admin LINE User ID จริง
          displayName: 'Admin User (jlow)',
          pictureUrl: 'https://via.placeholder.com/100',
          email: 'jlow6395@gmail.com'
        }
        
        console.log('📱 Mock LINE Profile:', mockProfile)
        setLineProfile(mockProfile)
        return
      }

      // Production: ใช้ LIFF จริง
      console.log('🔄 Initializing LINE...')
      await liffService.initialize()
      
      if (!liffService.isLoggedIn()) {
        console.log('🔄 Redirecting to LINE login...')
        await liffService.login()
        return
      }

      console.log('✅ Getting LINE profile...')
      const profile = await liffService.getProfile()
      console.log('📱 LINE Profile:', profile)
      
      setLineProfile(profile)
    } catch (error) {
      console.error('❌ LINE login error:', error)
      alert('เกิดข้อผิดพลาด: ' + error)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleManualInput = () => {
    if (manualUserId.trim()) {
      const manualProfile = {
        userId: manualUserId.trim(),
        displayName: 'Manual Input',
        pictureUrl: 'https://via.placeholder.com/100',
        email: 'manual@example.com'
      }
      setLineProfile(manualProfile)
    }
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

                 {/* Login Section */}
         {!lineProfile && (
           <div className="space-y-4">
             {/* LINE Login */}
             <Card className="bg-gray-900 border-gray-700">
               <CardHeader>
                 <CardTitle className="text-white flex items-center gap-2">
                   <User className="w-5 h-5" />
                   เข้าสู่ระบบด้วย LINE
                 </CardTitle>
               </CardHeader>
               <CardContent>
                 <Button
                   onClick={handleLineLogin}
                   disabled={loading}
                   className="w-full bg-[#00B900] hover:bg-[#009900] text-white py-6"
                 >
                   {loading ? (
                     <div className="flex items-center gap-2">
                       <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                       กำลังเข้าสู่ระบบ...
                     </div>
                   ) : (
                     <div className="flex items-center gap-2">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M19.365 9.863c.349 0 .63.285.631.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                       </svg>
                       {typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 
                         'ใช้ Mock LINE User ID' : 'เข้าสู่ระบบด้วย LINE'
                       }
                     </div>
                   )}
                 </Button>
               </CardContent>
             </Card>

             {/* Manual Input */}
             <Card className="bg-gray-900 border-gray-700">
               <CardHeader>
                 <CardTitle className="text-amber-400 flex items-center gap-2">
                   ✏️ หรือใส่ LINE User ID ด้วยตนเอง
                 </CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                 <div className="space-y-2">
                   <label className="text-gray-400 text-sm">LINE User ID (รูปแบบ: U1234567890abcdef):</label>
                   <input
                     type="text"
                     value={manualUserId}
                     onChange={(e) => setManualUserId(e.target.value)}
                     placeholder="U1234567890abcdef"
                     className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white font-mono"
                   />
                 </div>
                 <Button
                   onClick={handleManualInput}
                   disabled={!manualUserId.trim()}
                   className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                 >
                   ใช้ User ID นี้
                 </Button>
               </CardContent>
             </Card>
           </div>
         )}

        {/* Profile Display */}
        {lineProfile && (
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ข้อมูล LINE Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              
              {/* User ID - Most Important */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-blue-400 text-lg">🎯 LINE USER ID (สำคัญ!)</h3>
                  <Badge className="bg-blue-500 text-white">ADMIN_LINE_ID</Badge>
                </div>
                <div className="bg-black/50 p-3 rounded font-mono text-green-400 text-lg break-all">
                  {lineProfile.userId}
                </div>
                <Button
                  onClick={() => copyToClipboard(lineProfile.userId)}
                  className="mt-2 bg-blue-600 hover:bg-blue-700"
                  size="sm"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? 'คัดลอกแล้ว!' : 'คัดลอก User ID'}
                </Button>
              </div>

              {/* Other Info */}
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">Display Name:</label>
                  <div className="bg-gray-800 p-2 rounded font-mono">
                    {lineProfile.displayName}
                  </div>
                </div>

                {lineProfile.email && (
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Email:</label>
                    <div className="bg-gray-800 p-2 rounded font-mono">
                      {lineProfile.email}
                    </div>
                  </div>
                )}

                {lineProfile.pictureUrl && (
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Profile Picture:</label>
                    <img 
                      src={lineProfile.pictureUrl} 
                      alt="Profile" 
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                )}
              </div>

              {/* Instructions */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <h4 className="font-bold text-amber-400 mb-2">📝 ขั้นตอนต่อไป:</h4>
                <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                  <li>คัดลอก <strong>LINE USER ID</strong> ข้างบน</li>
                  <li>ส่งให้ผู้ดูแลระบบเพื่อตั้งค่า <code>ADMIN_LINE_ID</code></li>
                  <li>หลังตั้งค่าเสร็จ คุณจะได้สิทธิ์ Admin อัตโนมัติ</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Environment Info */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-400">🔧 Environment Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <span className="text-gray-400">LIFF ID:</span>
              <span className="ml-2 font-mono text-green-400">
                {process.env.NEXT_PUBLIC_LIFF_ID || 'ไม่ได้ตั้งค่า'}
              </span>
            </div>
            <div>
              <span className="text-gray-400">Current URL:</span>
              <span className="ml-2 font-mono text-blue-400">
                {typeof window !== 'undefined' ? window.location.origin : 'N/A'}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 
"use client"

import { useState, useEffect } from 'react'
import { liffService } from '@/lib/liff'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TestLinePage() {
  const [status, setStatus] = useState('ยังไม่ได้ทดสอบ')
  const [profile, setProfile] = useState<any>(null)
  const [logs, setLogs] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs(prev => [...prev, `[${timestamp}] ${message}`])
    console.log(message)
  }

  const testLineLogin = async () => {
    setLoading(true)
    setLogs([])
    
    try {
      addLog('🔄 เริ่มทดสอบ LINE Login...')
      
      // ตรวจสอบ Environment Variables
      const liffId = process.env.NEXT_PUBLIC_LIFF_ID
      addLog(`🔧 LIFF ID: ${liffId ? liffId : 'ไม่ได้ตั้งค่า'}`)
      
      if (!liffId) {
        setStatus('❌ ไม่ได้ตั้งค่า LIFF ID')
        return
      }

      // ตรวจสอบ URL ปัจจุบัน
      const currentUrl = window.location.origin
      addLog(`🌐 Current URL: ${currentUrl}`)
      
      // ตรวจสอบ LIFF Service
      addLog(`📱 LIFF Available: ${liffService.isAvailable()}`)
      
      // Initialize LIFF
      addLog('🔄 กำลัง Initialize LIFF...')
      await liffService.initialize()
      addLog('✅ LIFF Initialize สำเร็จ')
      
      // ตรวจสอบสถานะ Login
      const isLoggedIn = liffService.isLoggedIn()
      addLog(`🔐 Login Status: ${isLoggedIn ? 'เข้าสู่ระบบแล้ว' : 'ยังไม่ได้เข้าสู่ระบบ'}`)
      
      if (isLoggedIn) {
        // ดึงข้อมูล Profile
        addLog('📋 กำลังดึงข้อมูล Profile...')
        const userProfile = await liffService.getProfile()
        
        if (userProfile) {
          setProfile(userProfile)
          addLog(`👤 ได้ข้อมูล Profile: ${userProfile.displayName}`)
          addLog(`🆔 User ID: ${userProfile.userId}`)
          setStatus('✅ LINE Login สำเร็จ!')
        } else {
          addLog('❌ ไม่สามารถดึงข้อมูล Profile ได้')
          setStatus('❌ ไม่สามารถดึงข้อมูล Profile ได้')
        }
      } else {
        // ยังไม่ได้ Login - เริ่ม Login Process
        addLog('🔄 เริ่มกระบวนการ Login...')
        setStatus('🔄 กำลังเปลี่ยนเส้นทางไป LINE...')
        await liffService.login()
      }
      
    } catch (error: any) {
      addLog(`❌ เกิดข้อผิดพลาด: ${error.message}`)
      setStatus(`❌ เกิดข้อผิดพลาด: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const clearLogs = () => {
    setLogs([])
    setStatus('ยังไม่ได้ทดสอบ')
    setProfile(null)
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">🧪 LINE Login Test</h1>
          <p className="text-gray-400">ทดสอบการเข้าสู่ระบบด้วย LINE</p>
        </div>

        {/* Status */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-blue-400">📊 สถานะ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-mono p-4 bg-black/50 rounded">
              {status}
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-green-400">🎮 การควบคุม</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <Button
                onClick={testLineLogin}
                disabled={loading}
                className="bg-[#00B900] hover:bg-[#009900] text-white"
              >
                {loading ? '🔄 กำลังทดสอบ...' : '🚀 ทดสอบ LINE Login'}
              </Button>
              
              <Button
                onClick={clearLogs}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                🗑️ ล้าง Log
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Profile Info */}
        {profile && (
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">👤 ข้อมูล Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm">Display Name:</label>
                  <div className="bg-black/50 p-2 rounded font-mono">
                    {profile.displayName}
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-400 text-sm">User ID:</label>
                  <div className="bg-black/50 p-2 rounded font-mono text-green-400">
                    {profile.userId}
                  </div>
                </div>
                
                {profile.email && (
                  <div>
                    <label className="text-gray-400 text-sm">Email:</label>
                    <div className="bg-black/50 p-2 rounded font-mono">
                      {profile.email}
                    </div>
                  </div>
                )}
                
                {profile.pictureUrl && (
                  <div>
                    <label className="text-gray-400 text-sm">Profile Picture:</label>
                    <img 
                      src={profile.pictureUrl} 
                      alt="Profile" 
                      className="w-16 h-16 rounded-full mt-2"
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Logs */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-amber-400">📝 Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-black/50 p-4 rounded max-h-96 overflow-y-auto">
              {logs.length === 0 ? (
                <div className="text-gray-500 text-center py-8">
                  ยังไม่มี Log - กดปุ่ม "ทดสอบ LINE Login" เพื่อเริ่มต้น
                </div>
              ) : (
                <div className="space-y-1">
                  {logs.map((log, index) => (
                    <div key={index} className="text-sm font-mono text-gray-300">
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

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
            <div>
              <span className="text-gray-400">Full URL:</span>
              <span className="ml-2 font-mono text-blue-400">
                {typeof window !== 'undefined' ? window.location.href : 'N/A'}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-blue-500/10 border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-blue-400">📖 วิธีใช้งาน</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <ol className="list-decimal list-inside space-y-1 text-gray-300">
              <li>กดปุ่ม "ทดสอบ LINE Login" เพื่อเริ่มทดสอบ</li>
              <li>ระบบจะตรวจสอบการตั้งค่า LIFF ID</li>
              <li>หากยังไม่ได้ Login จะเปลี่ยนเส้นทางไป LINE</li>
              <li>หลัง Login สำเร็จ จะแสดงข้อมูล Profile</li>
              <li>ตรวจสอบ User ID ที่ได้เพื่อใช้เป็น Admin</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 
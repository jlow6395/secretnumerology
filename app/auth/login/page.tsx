"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import { liffService } from '@/lib/liff'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  User, 
  Crown, 
  Star,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Info
} from 'lucide-react'
import { toast } from 'sonner'

// LINE Icon Component
function LineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.631.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
    </svg>
  )
}

export default function LoginPage() {
  const { loginWithLine, isAuthenticated, isLoading } = useAuth()
  const [lineLoading, setLineLoading] = useState(false)
  const [isLineAvailable, setIsLineAvailable] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    // ตรวจสอบว่า LINE LIFF พร้อมใช้งานไหม
    setIsLineAvailable(liffService.isAvailable())
  }, [])

  const handleLineLogin = async () => {
    if (!isLineAvailable) {
      toast.error('LINE Login ยังไม่ได้ตั้งค่า กรุณาติดต่อผู้ดูแลระบบ')
      return
    }

    setLineLoading(true)
    try {
      const result = await loginWithLine()
      if (result.success) {
        toast.success('เข้าสู่ระบบด้วย LINE สำเร็จ!')
        router.push('/dashboard')
      } else {
        toast.error(result.error || 'ไม่สามารถเข้าสู่ระบบได้')
      }
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการเข้าสู่ระบบ')
    } finally {
      setLineLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          <p className="text-gray-400">กำลังตรวจสอบสถานะการเข้าสู่ระบบ...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🔮</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
            Secret Numerology
          </h1>
          <p className="text-gray-400">เข้าสู่ระบบเพื่อเริ่มต้นการเดินทางเลขศาสตร์</p>
        </div>

        {/* Login Card */}
        <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-white">เข้าสู่ระบบด้วย LINE</CardTitle>
            <p className="text-sm text-gray-400">ใช้บัญชี LINE ของคุณเพื่อเข้าสู่ระบบ</p>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* LINE Login Section */}
            {isLineAvailable ? (
              <div className="space-y-4">
                {/* User Login with LINE */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-green-500">สำหรับผู้ใช้ทั่วไป</span>
                    </div>
                    <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                      Recommended
                    </Badge>
                  </div>
                  
                  <Button
                    onClick={handleLineLogin}
                    disabled={lineLoading}
                    className="w-full bg-[#00B900] hover:bg-[#009900] text-white font-medium py-6 text-base transition-all duration-300 hover:scale-105"
                  >
                    {lineLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>กำลังเข้าสู่ระบบ...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <LineIcon />
                        <span>เข้าสู่ระบบด้วย LINE</span>
                        <Star className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </div>

                {/* Admin Info */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Crown className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-400 mb-1">สำหรับผู้ดูแลระบบ</h4>
                      <p className="text-gray-400 text-sm">
                        ใช้ LINE Login เหมือนกัน แต่จะได้สิทธิ์ Admin อัตโนมัติ<br />
                        <span className="text-amber-300">LINE ID ที่กำหนดไว้จะได้สิทธิ์พิเศษ</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* LINE Not Available Notice */
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-orange-400 mb-1">LINE Login ยังไม่พร้อมใช้งาน</h4>
                    <p className="text-gray-400 text-sm">
                      กรุณาตั้งค่า LINE LIFF ID ใน environment variables<br />
                      หรือทดลองใช้งานผ่านโหมดแขก
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Access */}
            <div className="space-y-3">
              <Separator className="bg-gray-700" />
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-3">หรือทดลองใช้งานโดยไม่ต้องสมัครสมาชิก</p>
                <Button
                  onClick={() => router.push('/calculator')}
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  ทดลองคำนวณเลขศาสตร์
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-400 mb-1">ข้อมูลความปลอดภัย</h4>
              <p className="text-gray-400 text-sm">
                เราใช้ LINE Login เพื่อความปลอดภัยสูงสุด<br />
                ข้อมูลของคุณจะถูกเข้ารหัสและปกป้องอย่างเข้มงวด
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
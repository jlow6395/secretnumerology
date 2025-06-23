"use client"

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import { liffService } from '@/lib/liff'
import { Card } from '@/components/ui/card'
import { Sparkles, CheckCircle, XCircle } from 'lucide-react'
import { toast } from 'sonner'

function AuthCallbackContent() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('กำลังประมวลผลการเข้าสู่ระบบ...')
  const { loginWithLine, user } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleLineCallback = async () => {
      try {
        console.log('🔄 LINE Callback page loaded')
        console.log('📍 Current URL:', window.location.href)
        console.log('🔍 Search params:', Object.fromEntries(searchParams.entries()))

        // Check for error in URL params first
        const error = searchParams.get('error')
        const errorDescription = searchParams.get('error_description')
        
        if (error) {
          console.error('❌ LINE Login error:', error, errorDescription)
          setStatus('error')
          setMessage(errorDescription || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ')
          toast.error('เข้าสู่ระบบไม่สำเร็จ')
          setTimeout(() => {
            router.push('/auth/login')
          }, 3000)
          return
        }

        // Initialize LIFF and check login status
        console.log('🔄 Initializing LIFF...')
        await liffService.initialize()
        
        if (liffService.isLoggedIn()) {
          console.log('✅ User is logged in via LINE')
          
          // Get LINE profile
          const profile = await liffService.getProfile()
          if (profile) {
            console.log('✅ LINE Profile:', { 
              userId: profile.userId, 
              displayName: profile.displayName 
            })
            
            // Use AuthContext to complete login
            const result = await loginWithLine()
            
            if (result.success) {
              setStatus('success')
              setMessage('เข้าสู่ระบบด้วย LINE สำเร็จ!')
              toast.success('เข้าสู่ระบบสำเร็จ! 🎉')
              
              // Redirect to dashboard after a short delay
              setTimeout(() => {
                console.log('🚀 Redirecting to dashboard...')
                router.push('/dashboard')
              }, 2000)
            } else {
              throw new Error(result.error || 'ไม่สามารถเข้าสู่ระบบได้')
            }
          } else {
            throw new Error('ไม่สามารถดึงข้อมูลจาก LINE ได้')
          }
        } else {
          console.log('⚠️ User not logged in, redirecting to login...')
          setStatus('error')
          setMessage('กรุณาเข้าสู่ระบบผ่าน LINE')
          setTimeout(() => {
            router.push('/auth/login')
          }, 2000)
        }
      } catch (error: any) {
        console.error('💥 LINE callback error:', error)
        setStatus('error')
        setMessage(error.message || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ')
        toast.error('เข้าสู่ระบบไม่สำเร็จ')
        
        // Redirect to login page after error
        setTimeout(() => {
          router.push('/auth/login')
        }, 3000)
      }
    }

    // Add a small delay to ensure URL parameters are ready
    const timer = setTimeout(handleLineCallback, 100)
    return () => clearTimeout(timer)
  }, [router, searchParams, loginWithLine])

  // If user is already logged in, redirect to dashboard
  useEffect(() => {
    if (user && status === 'loading') {
      console.log('✅ User already logged in, redirecting to dashboard')
      setStatus('success')
      setMessage('เข้าสู่ระบบแล้ว กำลังไปยัง Dashboard...')
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    }
  }, [user, status, router])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center p-8 bg-gray-900/80 backdrop-blur-sm border-gray-700">
        <div className="space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            {status === 'loading' && (
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-8 h-8 text-white animate-spin" />
              </div>
            )}
            {status === 'success' && (
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            )}
            {status === 'error' && (
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
                <XCircle className="w-8 h-8 text-white" />
              </div>
            )}
          </div>

          {/* Message */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">
              {status === 'loading' && 'กำลังประมวลผล...'}
              {status === 'success' && 'เข้าสู่ระบบสำเร็จ!'}
              {status === 'error' && 'เกิดข้อผิดพลาด'}
            </h2>
            <p className="text-gray-400">{message}</p>
          </div>

          {/* Loading indicator for success */}
          {status === 'success' && (
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <div className="animate-spin w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full"></div>
              <span>กำลังนำคุณไปยัง Dashboard...</span>
            </div>
          )}

          {/* Loading indicator for error */}
          {status === 'error' && (
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <div className="animate-spin w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full"></div>
              <span>กำลังนำคุณกลับไปหน้าเข้าสู่ระบบ...</span>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          <p className="text-gray-400">กำลังโหลด...</p>
        </div>
      </div>
    }>
      <AuthCallbackContent />
    </Suspense>
  )
} 
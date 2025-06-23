import { NextRequest, NextResponse } from 'next/server'
import type { PaymentRequest } from '@/lib/types/profileUnlock'

// Dynamic import to avoid build-time errors
const PaymentService = () => import('@/lib/services/paymentService').then(m => m.PaymentService)

export async function POST(request: NextRequest) {
  try {
    const body: PaymentRequest = await request.json()
    
    // Validate request
    if (!body.package_id || !body.user_id || !body.user_type) {
      return NextResponse.json(
        { success: false, error: 'ข้อมูลไม่ครบถ้วน' },
        { status: 400 }
      )
    }
    
    // Validate user_type
    if (!['google', 'line'].includes(body.user_type)) {
      return NextResponse.json(
        { success: false, error: 'ประเภทผู้ใช้ไม่ถูกต้อง' },
        { status: 400 }
      )
    }
    
    // Create payment
    const PaymentServiceClass = await PaymentService()
    const result = await PaymentServiceClass.createPromptPayPayment(body)
    
    if (!result.success) {
      return NextResponse.json(result, { status: 400 })
    }
    
    return NextResponse.json(result)
    
  } catch (error) {
    console.error('Payment creation API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' 
      },
      { status: 500 }
    )
  }
} 
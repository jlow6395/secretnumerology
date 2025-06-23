import { NextRequest, NextResponse } from 'next/server'

// Dynamic import to avoid build-time errors
const PaymentService = () => import('@/lib/services/paymentService').then(m => m.PaymentService)

export async function GET(
  request: NextRequest,
  { params }: { params: { payment_id: string } }
) {
  try {
    const { payment_id } = params
    
    if (!payment_id) {
      return NextResponse.json(
        { error: 'Payment ID is required' },
        { status: 400 }
      )
    }
    
    // Verify payment with Omise
    const PaymentServiceClass = await PaymentService()
    const verification = await PaymentServiceClass.verifyPayment(payment_id)
    
    return NextResponse.json(verification)
    
  } catch (error) {
    console.error('Payment verification API error:', error)
    return NextResponse.json(
      { 
        error: 'เกิดข้อผิดพลาดในการตรวจสอบการชำระเงิน',
        status: 'failed'
      },
      { status: 500 }
    )
  }
} 
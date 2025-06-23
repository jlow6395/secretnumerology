import { NextRequest, NextResponse } from 'next/server'

// Dynamic imports to avoid build-time errors
const PaymentService = () => import('@/lib/services/paymentService').then(m => m.PaymentService)
const ProfileUnlockService = () => import('@/lib/services/profileUnlockService').then(m => m.ProfileUnlockService)

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-omise-signature') || ''
    
    let payload
    try {
      payload = JSON.parse(body)
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON payload' },
        { status: 400 }
      )
    }
    
    // Process webhook
    const PaymentServiceClass = await PaymentService()
    const processed = await PaymentServiceClass.handleWebhook(payload, signature)
    
    if (!processed) {
      return NextResponse.json(
        { error: 'Failed to process webhook' },
        { status: 400 }
      )
    }
    
    // Handle successful payment
    if (payload.key === 'charge.complete' && payload.data.status === 'successful') {
      await handleSuccessfulPayment(payload.data)
    }
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function handleSuccessfulPayment(chargeData: any) {
  try {
    // Extract metadata from charge
    const metadata = chargeData.metadata || {}
    const userId = metadata.user_id
    const userType = metadata.user_type
    const packageId = metadata.package_id
    const profileCount = parseInt(metadata.profile_count || '0')
    
    if (!userId || !userType || !packageId || !profileCount) {
      console.error('Missing metadata in charge:', chargeData.id)
      return
    }
    
    // Unlock profiles for user
    const ProfileUnlockServiceClass = await ProfileUnlockService()
    await ProfileUnlockServiceClass.processSuccessfulPayment({
      payment_id: chargeData.id,
      user_id: userId,
      user_type: userType,
      package_id: packageId,
      profiles_purchased: profileCount,
      amount_thb: chargeData.amount
    })
    
    console.log(`Successfully unlocked ${profileCount} profiles for user ${userId}`)
    
  } catch (error) {
    console.error('Error processing successful payment:', error)
  }
} 
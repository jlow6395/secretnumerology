// Payment Service for PromptPay QR via Omise
import type { 
  PaymentRequest, 
  PaymentResponse, 
  PaymentVerification,
  ProfilePackage 
} from '../types/profileUnlock'
import { ProfileUnlockService } from './profileUnlockService'
import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

// สร้าง Supabase client แยกสำหรับ service ใช้งาน
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // Service role key สำหรับ bypass RLS
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

export class PaymentService {
  
  private static readonly OMISE_API_URL = 'https://api.omise.co'
  private static readonly PUBLIC_KEY = process.env.OMISE_PUBLIC_KEY
  private static readonly SECRET_KEY = process.env.OMISE_SECRET_KEY
  
  /**
   * สร้าง PromptPay QR Code สำหรับการชำระเงิน
   */
  static async createPromptPayPayment(request: PaymentRequest): Promise<PaymentResponse> {
    try {
      // Get package details from database
      const packageDetails = await this.getPackageDetails(request.package_id)
      if (!packageDetails) {
        return { success: false, error: 'ไม่พบแพ็กเกจที่เลือก' }
      }
      
      // Create Omise source (PromptPay)
      const sourceResponse = await fetch(`${this.OMISE_API_URL}/sources`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(this.PUBLIC_KEY + ':').toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          type: 'promptpay',
          amount: packageDetails.price_thb.toString(),
          currency: 'THB'
        })
      })
      
      if (!sourceResponse.ok) {
        throw new Error(`Omise source creation failed: ${sourceResponse.status}`)
      }
      
      const sourceData = await sourceResponse.json()
      
      // Create charge with the source
      const chargeResponse = await fetch(`${this.OMISE_API_URL}/charges`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(this.SECRET_KEY + ':').toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          amount: packageDetails.price_thb.toString(),
          currency: 'THB',
          source: sourceData.id,
          description: `Secret Numerology - ${packageDetails.name}`,
          metadata: JSON.stringify({
            user_id: request.user_id,
            user_type: request.user_type,
            package_id: request.package_id,
            package_name: packageDetails.name,
            profile_count: packageDetails.profile_count.toString()
          })
        })
      })
      
      if (!chargeResponse.ok) {
        throw new Error(`Omise charge creation failed: ${chargeResponse.status}`)
      }
      
      const chargeData = await chargeResponse.json()
      
      return {
        success: true,
        payment_id: chargeData.id,
        qr_code: sourceData.scannable_code?.image?.download_uri,
        payment_url: sourceData.scannable_code?.image?.download_uri
      }
      
    } catch (error) {
      console.error('Payment creation error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'เกิดข้อผิดพลาดในการสร้างการชำระเงิน'
      }
    }
  }
  
  /**
   * ตรวจสอบสถานะการชำระเงิน
   */
  static async verifyPayment(payment_id: string): Promise<PaymentVerification> {
    try {
      const response = await fetch(`${this.OMISE_API_URL}/charges/${payment_id}`, {
        headers: {
          'Authorization': `Basic ${Buffer.from(this.SECRET_KEY + ':').toString('base64')}`
        }
      })
      
      if (!response.ok) {
        throw new Error(`Payment verification failed: ${response.status}`)
      }
      
      const data = await response.json()
      
      let status: 'completed' | 'failed' | 'pending' = 'pending'
      
      if (data.status === 'successful' && data.paid) {
        status = 'completed'
      } else if (data.status === 'failed') {
        status = 'failed'
      }
      
      return {
        payment_id: data.id,
        status,
        transaction_id: data.transaction?.id,
        amount_thb: data.amount,
        paid_at: data.paid_at ? new Date(data.paid_at).toISOString() : undefined
      }
      
    } catch (error) {
      console.error('Payment verification error:', error)
      throw error
    }
  }
  
  /**
   * จัดการ Webhook จาก Omise
   */
  static async handleWebhook(payload: any, signature: string): Promise<boolean> {
    try {
      // Verify webhook signature
      if (!this.verifyWebhookSignature(JSON.stringify(payload), signature)) {
        console.error('Invalid webhook signature')
        return false
      }
      
      const { key, data } = payload
      
      if (key === 'charge.complete') {
        await this.processSuccessfulPayment(data)
        return true
      }
      
      if (key === 'charge.failed') {
        await this.processFailedPayment(data)
        return true
      }
      
      return false
      
    } catch (error) {
      console.error('Webhook processing error:', error)
      return false
    }
  }
  
  private static verifyWebhookSignature(payload: string, signature: string): boolean {
    try {
      // Omise webhook signature verification
      const webhookSigningKey = process.env.OMISE_WEBHOOK_SIGNING_KEY
      if (!webhookSigningKey) {
        console.warn('OMISE_WEBHOOK_SIGNING_KEY not configured, skipping signature verification')
        return true // ใน development อาจจะยังไม่ได้ตั้งค่า
      }
      
      const expectedSignature = crypto
        .createHmac('sha256', webhookSigningKey)
        .update(payload, 'utf8')
        .digest('hex')
      
      return crypto.timingSafeEqual(
        Buffer.from(signature, 'hex'),
        Buffer.from(expectedSignature, 'hex')
      )
    } catch (error) {
      console.error('Signature verification error:', error)
      return false
    }
  }
  
  private static async processSuccessfulPayment(chargeData: any): Promise<void> {
    try {
      console.log('Processing successful payment:', chargeData.id)
      
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
      
      // Use ProfileUnlockService to process the payment
      await ProfileUnlockService.processSuccessfulPayment({
        payment_id: chargeData.id,
        user_id: userId,
        user_type: userType,
        package_id: packageId,
        profiles_purchased: profileCount,
        amount_thb: chargeData.amount
      })
      
    } catch (error) {
      console.error('Error processing successful payment:', error)
    }
  }
  
  private static async processFailedPayment(chargeData: any): Promise<void> {
    try {
      console.log('Processing failed payment:', chargeData.id)
      
      // อัปเดตสถานะการชำระเงินในฐานข้อมูล
      const { error } = await supabase
        .from('user_profile_unlocks')
        .update({ payment_status: 'failed' })
        .eq('payment_id', chargeData.id)
      
      if (error) {
        console.error('Failed to update payment status:', error)
      }
      
    } catch (error) {
      console.error('Error processing failed payment:', error)
    }
  }
  
  private static async getPackageDetails(packageId: string): Promise<ProfilePackage | null> {
    try {
      const { data, error } = await supabase
        .from('profile_packages')
        .select('*')
        .eq('id', packageId)
        .eq('is_active', true)
        .single()
      
      if (error || !data) {
        console.error('Package not found:', packageId, error)
        return null
      }
      
      return {
        id: data.id,
        name: data.name,
        name_en: data.name_en,
        profile_count: data.profile_count,
        price_thb: data.price_thb,
        price_per_profile_thb: data.price_per_profile_thb,
        is_active: data.is_active,
        created_at: data.created_at
      }
      
    } catch (error) {
      console.error('Error fetching package details:', error)
      return null
    }
  }
  
  /**
   * จัดรูปแบบราคาเป็นภาษาไทย
   */
  static formatPrice(priceThb: number): string {
    const formatted = (priceThb / 100).toLocaleString('th-TH')
    return `฿${formatted}`
  }
  
  /**
   * คำนวณส่วนลด
   */
  static calculateSavings(packagePrice: number, singlePrice: number, count: number): number {
    const totalSinglePrice = singlePrice * count
    return Math.max(0, totalSinglePrice - packagePrice)
  }
} 
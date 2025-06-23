// Profile Unlock Service
// จัดการการปลดล็อกโปรไฟล์หลังจากชำระเงินสำเร็จ

import { createClient } from '@supabase/supabase-js'
import type { 
  ProfilePackage, 
  UserProfileUnlock, 
  UnlockedProfile 
} from '../types/profileUnlock'

// สร้าง Supabase client แยกสำหรับ service ใช้งาน
const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn('Supabase credentials not found during build time')
    return null
  }
  
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

const supabase = createSupabaseClient()

export interface PaymentUnlockData {
  payment_id: string
  user_id: string
  user_type: 'google' | 'line'
  package_id: string
  profiles_purchased: number
  amount_thb: number
}

export class ProfileUnlockService {
  
  /**
   * ประมวลผลการชำระเงินที่สำเร็จ
   */
  static async processSuccessfulPayment(data: PaymentUnlockData): Promise<boolean> {
    if (!supabase) {
      console.error('Supabase client not initialized')
      return false
    }
    
    try {
      console.log('Processing payment unlock:', data)
      
      // 1. ตรวจสอบว่าเคยประมวลผล payment นี้แล้วหรือไม่
      const { data: existingUnlock } = await supabase
        .from('user_profile_unlocks')
        .select('id')
        .eq('payment_id', data.payment_id)
        .single()
      
      if (existingUnlock) {
        console.log('Payment already processed:', data.payment_id)
        return true
      }
      
      // 2. Get package details from database
      const { data: packageData, error: packageError } = await supabase
        .from('profile_packages')
        .select('*')
        .eq('id', data.package_id)
        .single()
      
      if (packageError || !packageData) {
        console.error('Package not found:', data.package_id, packageError)
        return false
      }
      
      // 3. สร้างรายการปลดล็อกในฐานข้อมูล
      const unlockData = {
        user_id: data.user_id,
        user_type: data.user_type,
        package_id: data.package_id,
        profiles_purchased: data.profiles_purchased,
        profiles_used: 0,
        profiles_remaining: data.profiles_purchased,
        payment_id: data.payment_id,
        payment_status: 'completed',
        payment_method: 'promptpay',
        amount_thb: data.amount_thb,
        purchase_date: new Date().toISOString(),
        is_active: true
      }
      
      const { data: unlockResult, error: unlockError } = await supabase
        .from('user_profile_unlocks')
        .insert(unlockData)
        .select()
        .single()
      
      if (unlockError) {
        console.error('Failed to create unlock record:', unlockError)
        return false
      }
      
      console.log('Profile unlock created successfully:', unlockResult.id)
      
      // 4. ส่งอีเมลยืนยัน (ถ้าต้องการ)
      // await this.sendConfirmationEmail(data)
      
      return true
      
    } catch (error) {
      console.error('Error processing successful payment:', error)
      return false
    }
  }
  
  /**
   * ใช้โปรไฟล์ที่ปลดล็อกแล้ว (เมื่อผู้ใช้สร้างโปรไฟล์ใหม่)
   */
  static async useUnlockedProfile(
    userId: string, 
    userType: 'google' | 'line',
    profileData: {
      profile_name: string
      birth_date: string
      numerology_data?: any
    }
  ): Promise<{ success: boolean; unlock_id?: string; error?: string }> {
    if (!supabase) {
      return { success: false, error: 'Database connection not available' }
    }
    
    try {
      // 1. หา unlock ที่ยังใช้ได้
      const { data: availableUnlock, error: unlockError } = await supabase
        .from('user_profile_unlocks')
        .select('*')
        .eq('user_id', userId)
        .eq('user_type', userType)
        .eq('is_active', true)
        .gt('profiles_remaining', 0)
        .eq('payment_status', 'completed')
        .order('purchase_date', { ascending: true })
        .limit(1)
        .single()
      
      if (unlockError || !availableUnlock) {
        return { 
          success: false, 
          error: 'ไม่มีโปรไฟล์ที่ปลดล็อกแล้วให้ใช้งาน กรุณาซื้อแพ็กเกจเพิ่มเติม' 
        }
      }
      
      // 2. สร้างโปรไฟล์ที่ปลดล็อก
      const { data: profileResult, error: profileError } = await supabase
        .from('unlocked_profiles')
        .insert({
          unlock_id: availableUnlock.id,
          profile_name: profileData.profile_name,
          birth_date: profileData.birth_date,
          numerology_data: profileData.numerology_data || {},
          created_at: new Date().toISOString()
        })
        .select()
        .single()
      
      if (profileError) {
        console.error('Failed to create unlocked profile:', profileError)
        return { success: false, error: 'ไม่สามารถสร้างโปรไฟล์ได้' }
      }
      
      // 3. อัปเดตจำนวนโปรไฟล์ที่เหลือ
      const { error: updateError } = await supabase
        .from('user_profile_unlocks')
        .update({
          profiles_used: availableUnlock.profiles_used + 1,
          profiles_remaining: availableUnlock.profiles_remaining - 1
        })
        .eq('id', availableUnlock.id)
      
      if (updateError) {
        console.error('Failed to update unlock counts:', updateError)
        // Rollback โปรไฟล์ที่สร้าง
        await supabase.from('unlocked_profiles').delete().eq('id', profileResult.id)
        return { success: false, error: 'เกิดข้อผิดพลาดในการอัปเดตข้อมูล' }
      }
      
      return { 
        success: true, 
        unlock_id: availableUnlock.id 
      }
      
    } catch (error) {
      console.error('Error using unlocked profile:', error)
      return { success: false, error: 'เกิดข้อผิดพลาดภายในระบบ' }
    }
  }
  
  /**
   * ดึงข้อมูลโปรไฟล์ที่ปลดล็อกแล้วของผู้ใช้
   */
  static async getUserUnlockedProfiles(
    userId: string, 
    userType: 'google' | 'line'
  ): Promise<UnlockedProfile[]> {
    if (!supabase) {
      console.error('Supabase client not initialized')
      return []
    }
    
    try {
      const { data, error } = await supabase
        .from('unlocked_profiles')
        .select(`
          *,
          user_profile_unlocks!inner (
            user_id,
            user_type,
            package_id,
            payment_status
          )
        `)
        .eq('user_profile_unlocks.user_id', userId)
        .eq('user_profile_unlocks.user_type', userType)
        .eq('user_profile_unlocks.payment_status', 'completed')
        .order('created_at', { ascending: false })
      
      if (error) {
        console.error('Error fetching unlocked profiles:', error)
        return []
      }
      
      return data || []
      
    } catch (error) {
      console.error('Error in getUserUnlockedProfiles:', error)
      return []
    }
  }
  
  /**
   * ดึงข้อมูลการปลดล็อกของผู้ใช้
   */
  static async getUserUnlockSummary(
    userId: string, 
    userType: 'google' | 'line'
  ): Promise<{
    total_purchased: number
    total_used: number
    total_remaining: number
    unlocks: UserProfileUnlock[]
  }> {
    if (!supabase) {
      console.error('Supabase client not initialized')
      return {
        total_purchased: 0,
        total_used: 0,
        total_remaining: 0,
        unlocks: []
      }
    }
    
    try {
      const { data, error } = await supabase
        .from('user_profile_unlocks')
        .select('*')
        .eq('user_id', userId)
        .eq('user_type', userType)
        .eq('payment_status', 'completed')
        .eq('is_active', true)
        .order('purchase_date', { ascending: false })
      
      if (error) {
        console.error('Error fetching unlock summary:', error)
        return {
          total_purchased: 0,
          total_used: 0,
          total_remaining: 0,
          unlocks: []
        }
      }
      
      const unlocks = data || []
      const summary = {
        total_purchased: unlocks.reduce((sum, u) => sum + u.profiles_purchased, 0),
        total_used: unlocks.reduce((sum, u) => sum + u.profiles_used, 0),
        total_remaining: unlocks.reduce((sum, u) => sum + u.profiles_remaining, 0),
        unlocks
      }
      
      return summary
      
    } catch (error) {
      console.error('Error in getUserUnlockSummary:', error)
      return {
        total_purchased: 0,
        total_used: 0,
        total_remaining: 0,
        unlocks: []
      }
    }
  }
  
  /**
   * ตรวจสอบว่าผู้ใช้สามารถสร้างโปรไฟล์ใหม่ได้หรือไม่
   */
  static async canCreateProfile(
    userId: string, 
    userType: 'google' | 'line'
  ): Promise<{ canCreate: boolean; remaining: number }> {
    try {
      const summary = await this.getUserUnlockSummary(userId, userType)
      return {
        canCreate: summary.total_remaining > 0,
        remaining: summary.total_remaining
      }
    } catch (error) {
      console.error('Error checking profile creation eligibility:', error)
      return { canCreate: false, remaining: 0 }
    }
  }
  
  /**
   * ดึงข้อมูลแพ็กเกจทั้งหมด
   */
  static async getAvailablePackages(): Promise<ProfilePackage[]> {
    if (!supabase) {
      console.error('Supabase client not initialized')
      return []
    }
    
    try {
      const { data, error } = await supabase
        .from('profile_packages')
        .select('*')
        .eq('is_active', true)
        .order('profile_count', { ascending: true })
      
      if (error) {
        console.error('Error fetching packages:', error)
        return []
      }
      
      return data || []
      
    } catch (error) {
      console.error('Error in getAvailablePackages:', error)
      return []
    }
  }
} 
// Profile Unlock System Types
export interface ProfilePackage {
  id: string
  name: string
  name_en: string
  profile_count: number
  price_thb: number
  price_per_profile_thb: number
  is_active: boolean
  created_at: string
}

export interface UserProfileUnlock {
  id: string
  user_id: string
  user_type: 'google' | 'line'
  
  // Package info
  package_id: string
  profiles_purchased: number
  profiles_used: number
  profiles_remaining: number
  
  // Payment info
  payment_id?: string
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded'
  payment_method: string
  amount_thb: number
  
  // Metadata
  purchase_date: string
  expires_at?: string
  is_active: boolean
  created_at: string
}

export interface UnlockedProfile {
  id: string
  unlock_id: string
  
  // Profile info
  profile_id: string
  profile_name: string
  profile_birth_date: string
  
  // Unlock metadata
  unlocked_at: string
  unlock_type: 'purchase' | 'gift' | 'admin'
  created_at: string
}

// Payment Types
export interface PaymentRequest {
  package_id: string
  user_id: string
  user_type: 'google' | 'line'
  return_url?: string
}

export interface PaymentResponse {
  success: boolean
  payment_id?: string
  payment_url?: string
  qr_code?: string
  error?: string
}

export interface PaymentVerification {
  payment_id: string
  status: 'completed' | 'failed' | 'pending'
  transaction_id?: string
  amount_thb: number
  paid_at?: string
}

// Profile Unlock Service Response Types
export interface UnlockProfileRequest {
  unlock_id: string
  profile_data: {
    name: string
    birth_date: string
    birth_time?: string
    relationship?: string
    notes?: string
  }
}

export interface UnlockProfileResponse {
  success: boolean
  profile?: UnlockedProfile
  remaining_unlocks?: number
  error?: string
}

// Dashboard Types
export interface UnlockSummary {
  total_purchased: number
  total_used: number
  total_remaining: number
  active_unlocks: UserProfileUnlock[]
  unlocked_profiles: UnlockedProfile[]
} 
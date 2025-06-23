'use client'

import React, { useState } from 'react'
import { useAuth } from '@/lib/AuthContext'
import { AppleCard } from '@/design-system/AppleCard'
import { AppleButton } from '@/design-system/AppleButton'
import { AppleInput } from '@/design-system/AppleInput'
import { LoadingSpinner } from '@/components/ui/LoadingCard'
// import { MagicButton, LiquidCard } from '@/components/ui/FinalPolish'

interface QuickRegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  mode: 'register' | 'add-profile'
}

export function QuickRegistrationModal({ isOpen, onClose, mode }: QuickRegistrationModalProps) {
  const { quickRegister, createProfile, isLoading } = useAuth()
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    gender: 'other' as 'male' | 'female' | 'other',
    relationship: 'self' as 'self' | 'spouse' | 'child' | 'parent' | 'friend' | 'other',
    notes: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'กรุณาใส่ชื่อ'
    }

    if (!formData.birthDate) {
      newErrors.birthDate = 'กรุณาเลือกวันเกิด'
    }

    if (!formData.gender) {
      newErrors.gender = 'กรุณาเลือกเพศ'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      let result
      
      if (mode === 'register') {
        result = await quickRegister(formData)
      } else {
        result = await createProfile(formData)
      }

      if (result.success) {
        onClose()
        // Reset form
        setFormData({
          name: '',
          birthDate: '',
          birthTime: '',
          birthPlace: '',
          gender: 'other',
          relationship: 'self',
          notes: ''
        })
      } else {
        setErrors({ submit: result.error || 'เกิดข้อผิดพลาด' })
      }
    } catch (error) {
      setErrors({ submit: 'เกิดข้อผิดพลาดที่ไม่คาดคิด' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <AppleCard className="w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              {mode === 'register' ? '🌟 สร้างบัญชีใหม่' : '✨ เพิ่มดวงเกิด'}
            </h2>
            <p className="text-gray-400">
              {mode === 'register' 
                ? 'เริ่มต้นการเดินทางสู่ความลึกลับของเลขศาสตร์'
                : 'เพิ่มดวงเกิดของคนสำคัญในชีวิตคุณ'
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                ชื่อ-นามสกุล *
              </label>
              <AppleInput
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="ใส่ชื่อ-นามสกุล"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Birth Date */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                วันเกิด *
              </label>
              <AppleInput
                type="date"
                value={formData.birthDate}
                onChange={(e) => handleInputChange('birthDate', e.target.value)}
                className={errors.birthDate ? 'border-red-500' : ''}
              />
              {errors.birthDate && (
                <p className="mt-1 text-sm text-red-400">{errors.birthDate}</p>
              )}
            </div>

            {/* Birth Time */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                เวลาเกิด (ถ้าทราบ)
              </label>
              <AppleInput
                type="time"
                value={formData.birthTime}
                onChange={(e) => handleInputChange('birthTime', e.target.value)}
                placeholder="เลือกเวลาเกิด"
              />
              <p className="mt-1 text-xs text-gray-500">
                เวลาเกิดจะช่วยให้การวิเคราะห์แม่นยำยิ่งขึ้น
              </p>
            </div>

            {/* Birth Place */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                สถานที่เกิด
              </label>
              <AppleInput
                value={formData.birthPlace}
                onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                placeholder="เช่น กรุงเทพฯ, เชียงใหม่"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                เพศ *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'male', label: '👨 ชาย', color: 'from-blue-500 to-blue-600' },
                  { value: 'female', label: '👩 หญิง', color: 'from-pink-500 to-pink-600' },
                  { value: 'other', label: '🌈 อื่นๆ', color: 'from-purple-500 to-purple-600' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleInputChange('gender', option.value)}
                    className={`
                      p-3 rounded-2xl border-2 transition-all duration-200 text-sm font-medium
                      ${formData.gender === option.value
                        ? `bg-gradient-to-r ${option.color} border-white/20 text-white scale-105`
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {errors.gender && (
                <p className="mt-1 text-sm text-red-400">{errors.gender}</p>
              )}
            </div>

            {/* Relationship (only for add-profile mode) */}
            {mode === 'add-profile' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  ความสัมพันธ์
                </label>
                <select
                  value={formData.relationship}
                  onChange={(e) => handleInputChange('relationship', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <option value="self">ตัวเอง</option>
                  <option value="spouse">คู่สมรส</option>
                  <option value="child">ลูก</option>
                  <option value="parent">พ่อ/แม่</option>
                  <option value="friend">เพื่อน</option>
                  <option value="other">อื่นๆ</option>
                </select>
              </div>
            )}

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                หมายเหตุ (ถ้ามี)
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="เช่น ข้อมูลเพิ่มเติมหรือเหตุผลในการเพิ่มดวงเกิดนี้"
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
              />
            </div>

            {/* Error Message */}
            {errors.submit && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-2xl">
                <p className="text-sm text-red-400">{errors.submit}</p>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <AppleButton
                variant="secondary"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1"
              >
                ยกเลิก
              </AppleButton>
              
              <AppleButton
                variant={mode === 'register' ? 'primary' : 'primary'}
                disabled={isSubmitting}
                className="flex-1"
                onClick={() => {}} // Will be handled by form submit
                type="submit"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <LoadingSpinner size="sm" />
                    กำลังดำเนินการ...
                  </div>
                ) : (
                  mode === 'register' ? '🌟 สร้างบัญชี' : '✨ เพิ่มดวงเกิด'
                )}
              </AppleButton>
            </div>
          </form>

          {/* Additional Info */}
          <div className="text-center text-xs text-gray-500 pt-2 border-t border-white/10">
            {mode === 'register' ? (
              <>
                การสร้างบัญชีหมายความว่าคุณยอมรับ
                <br />
                <span className="text-blue-400">เงื่อนไขการใช้งาน</span> และ{' '}
                <span className="text-blue-400">นโยบายความเป็นส่วนตัว</span>
              </>
            ) : (
              'ข้อมูลทั้งหมดจะถูกเก็บไว้อย่างปลอดภัยในเครื่องของคุณ'
            )}
          </div>
        </div>
      </AppleCard>
    </div>
  )
} 
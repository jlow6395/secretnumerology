"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  Calendar, 
  Mail, 
  Lock, 
  Heart, 
  Briefcase, 
  Sparkles, 
  Target,
  ArrowRight,
  ArrowLeft
} from 'lucide-react'
import { toast } from 'sonner'
import { validateNumerologyData, validateEmail, validatePassword } from '@/lib/validation'

interface FormData {
  fullName: string
  dateOfBirth: string
  mainGoal: string
  email: string
  password: string
}

const GOALS = [
  { id: 'love', label: 'ความรัก & ความสัมพันธ์', icon: Heart, color: 'bg-pink-500' },
  { id: 'career', label: 'การงาน & ความสำเร็จ', icon: Briefcase, color: 'bg-blue-500' },
  { id: 'spiritual', label: 'จิตวิญญาณ & การเติบโต', icon: Sparkles, color: 'bg-purple-500' },
  { id: 'daily', label: 'คำแนะนำประจำวัน', icon: Target, color: 'bg-green-500' }
]

export default function QuickStartPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dateOfBirth: '',
    mainGoal: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const router = useRouter()

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      // Validate name and birth date
      const validation = validateNumerologyData({
        name: formData.fullName,
        birthDate: formData.dateOfBirth
      })
      
      if (!validation.isValid) {
        validation.errors.forEach(error => {
          if (error.includes('ชื่อ')) newErrors.fullName = error
          if (error.includes('วันเกิด')) newErrors.dateOfBirth = error
        })
      }
    }

    if (currentStep === 2) {
      if (!formData.mainGoal) {
        newErrors.mainGoal = 'กรุณาเลือกเป้าหมายหลักของคุณ'
      }
    }

    if (currentStep === 3) {
      const emailValidation = validateEmail(formData.email)
      if (!emailValidation.isValid) {
        newErrors.email = emailValidation.errors[0]
      }

      const passwordValidation = validatePassword(formData.password)
      if (!passwordValidation.isValid) {
        newErrors.password = passwordValidation.errors[0]
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 3) {
        setStep(step + 1)
      } else {
        handleComplete()
      }
    }
  }

  const handleComplete = async () => {
    setLoading(true)
    
    try {
      // Create account
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          }
        }
      })

      if (error) throw error

      if (data.user) {
        // Create profile
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: data.user.id,
              full_name: formData.fullName,
              date_of_birth: formData.dateOfBirth,
              main_goal: formData.mainGoal,
              updated_at: new Date().toISOString()
            }
          ])

        if (profileError) {
          console.error('Profile creation error:', profileError)
        }

        toast.success('ยินดีต้อนรับ! บัญชีของคุณพร้อมใช้งานแล้ว')
        router.push('/dashboard')
      }
    } catch (error: any) {
      console.error('Signup error:', error)
      toast.error('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
    } finally {
      setLoading(false)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <User className="w-16 h-16 mx-auto mb-4 text-blue-500" />
              <h2 className="text-2xl font-bold mb-2">คุณคือใคร?</h2>
              <p className="text-gray-600">เริ่มต้นด้วยการแนะนำตัวกันก่อน</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">ชื่อ-นามสกุล *</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="กรอกชื่อเต็มของคุณ"
                    className="pl-10"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">วันเกิด *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="pl-10"
                  />
                </div>
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
                )}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Target className="w-16 h-16 mx-auto mb-4 text-purple-500" />
              <h2 className="text-2xl font-bold mb-2">คุณต้องการอะไร?</h2>
              <p className="text-gray-600">เลือกสิ่งที่คุณสนใจมากที่สุด</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {GOALS.map((goal) => {
                const Icon = goal.icon
                const isSelected = formData.mainGoal === goal.id
                
                return (
                  <Card
                    key={goal.id}
                    className={`cursor-pointer transition-all ${
                      isSelected 
                        ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                        : 'hover:shadow-lg'
                    }`}
                    onClick={() => handleInputChange('mainGoal', goal.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 ${goal.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{goal.label}</h3>
                      {isSelected && (
                        <Badge className="bg-blue-500">เลือกแล้ว</Badge>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            
            {errors.mainGoal && (
              <p className="text-red-500 text-sm text-center">{errors.mainGoal}</p>
            )}
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h2 className="text-2xl font-bold mb-2">สร้างบัญชี</h2>
              <p className="text-gray-600">เกือบเสร็จแล้ว! สร้างบัญชีเพื่อบันทึกข้อมูล</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">อีเมล *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className="pl-10"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">รหัสผ่าน *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="อย่างน้อย 6 ตัวอักษร"
                    className="pl-10"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-2">สรุปข้อมูล:</h3>
              <div className="text-sm space-y-1">
                <p><strong>ชื่อ:</strong> {formData.fullName}</p>
                <p><strong>วันเกิด:</strong> {new Date(formData.dateOfBirth).toLocaleDateString('th-TH')}</p>
                <p><strong>สนใจ:</strong> {GOALS.find(g => g.id === formData.mainGoal)?.label}</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">เริ่มต้นใช้งาน</h1>
            <span className="text-sm text-gray-500">ขั้นตอน {step} จาก 3</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <Card>
          <CardContent className="p-8">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            ย้อนกลับ
          </Button>

          <Button
            onClick={handleNext}
            disabled={loading}
            className="min-w-[120px]"
          >
            {loading ? (
              'กำลังสร้าง...'
            ) : step === 3 ? (
              'เสร็จสิ้น'
            ) : (
              <>
                ถัดไป
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            มีบัญชีอยู่แล้ว?{' '}
            <Button variant="link" className="p-0" onClick={() => router.push('/auth/login')}>
              เข้าสู่ระบบ
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
} 
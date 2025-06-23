"use client"

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/AuthContext'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { User, Calendar, Save, Eye, EyeOff, LogOut } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface ProfileFormData {
  fullName: string
  dateOfBirth: string
  email: string
}

export default function ProfilePage() {
  const { user, dbUser, refreshDbUser, isLoading } = useAuth()
  const [formData, setFormData] = useState<ProfileFormData>({
    fullName: '',
    dateOfBirth: '',
    email: ''
  })
  const [originalData, setOriginalData] = useState<ProfileFormData>({
    fullName: '',
    dateOfBirth: '',
    email: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasChanges, setHasChanges] = useState(false)
  const [showEmailChange, setShowEmailChange] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (user && dbUser) {
      const data = {
        fullName: dbUser.full_name || '',
        dateOfBirth: dbUser.date_of_birth || '',
        email: user.email || ''
      }
      setFormData(data)
      setOriginalData(data)
    }
  }, [user, dbUser])

  useEffect(() => {
    const changed = JSON.stringify(formData) !== JSON.stringify(originalData)
    setHasChanges(changed)
  }, [formData, originalData])

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setError('กรุณากรอกชื่อ-นามสกุล')
      return false
    }

    if (formData.fullName.trim().length < 2) {
      setError('ชื่อ-นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร')
      return false
    }

    if (!formData.dateOfBirth) {
      setError('กรุณาเลือกวันเกิด')
      return false
    }

    const birthDate = new Date(formData.dateOfBirth)
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()
    
    if (age < 1 || age > 120) {
      setError('กรุณาเลือกวันเกิดที่ถูกต้อง')
      return false
    }

    if (birthDate > today) {
      setError('วันเกิดไม่สามารถเป็นวันในอนาคตได้')
      return false
    }

    return true
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSave = async () => {
    if (!validateForm()) return
    if (!user) return

    setLoading(true)
    setError('')

    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          full_name: formData.fullName.trim(),
          date_of_birth: formData.dateOfBirth,
          updated_at: new Date().toISOString()
        })

      if (error) throw error

      // รีเฟรชข้อมูล
      await refreshDbUser()
      
      // อัพเดต original data
      setOriginalData({ ...formData })
      
      toast.success('บันทึกข้อมูลสำเร็จ!')
      
    } catch (error: any) {
      console.error('Profile update error:', error)
      setError('ไม่สามารถบันทึกข้อมูลได้ กรุณาลองใหม่อีกครั้ง')
      toast.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      toast.success('ออกจากระบบสำเร็จ')
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
      toast.error('เกิดข้อผิดพลาดในการออกจากระบบ')
    }
  }

  const calculateAge = (birthDate: string) => {
    if (!birthDate) return null
    const birth = new Date(birthDate)
    const today = new Date()
    return today.getFullYear() - birth.getFullYear()
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Skeleton className="h-8 w-48 mb-6" />
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-32" />
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">โปรไฟล์ของฉัน</h1>
        <Button
          variant="outline"
          onClick={handleLogout}
          className="text-red-600 border-red-200 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4 mr-2" />
          ออกจากระบบ
        </Button>
      </div>

      <div className="space-y-6">
        {/* Profile Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              ข้อมูลส่วนตัว
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium">ชื่อ-นามสกุล *</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="กรอกชื่อ-นามสกุลของคุณ"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">วันเกิด *</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
              {formData.dateOfBirth && (
                <p className="text-sm text-gray-500">
                  อายุ: {calculateAge(formData.dateOfBirth)} ปี
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleSave}
                disabled={loading || !hasChanges}
                className="flex-1"
              >
                <Save className="w-4 h-4 mr-2" />
                {loading ? 'กำลังบันทึก...' : 'บันทึกข้อมูล'}
              </Button>
              
              {hasChanges && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setFormData({ ...originalData })
                    setError('')
                  }}
                >
                  ยกเลิก
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Account Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>ข้อมูลบัญชี</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowEmailChange(!showEmailChange)}
              >
                {showEmailChange ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">อีเมล</label>
              <Input
                value={formData.email}
                disabled
                className="bg-gray-50"
              />
              <p className="text-xs text-gray-500">
                ไม่สามารถเปลี่ยนอีเมลได้ในขณะนี้
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">สถานะบัญชี</label>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">ยืนยันแล้ว</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Summary */}
        {dbUser && dbUser.full_name && dbUser.date_of_birth && (
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <CardHeader>
              <CardTitle>สรุปข้อมูล</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">ชื่อ:</span>
                  <p>{dbUser.full_name}</p>
                </div>
                <div>
                  <span className="font-medium">อายุ:</span>
                  <p>{calculateAge(dbUser.date_of_birth)} ปี</p>
                </div>
                <div>
                  <span className="font-medium">สมาชิกตั้งแต่:</span>
                  <p>{new Date(dbUser.updated_at || '').toLocaleDateString('th-TH')}</p>
                </div>
                <div>
                  <span className="font-medium">สถานะ:</span>
                  <p className="text-green-600 font-medium">พร้อมใช้งาน</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

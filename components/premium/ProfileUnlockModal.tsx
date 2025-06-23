'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PaymentService } from '@/lib/services/paymentService'
import type { ProfilePackage } from '@/lib/types/profileUnlock'

interface ProfileUnlockModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (profilesUnlocked: number) => void
  currentUser: {
    id: string
    type: 'google' | 'line'
  }
}

const PACKAGES: ProfilePackage[] = [
  {
    id: '1',
    name: 'เพิ่ม 1 โปรไฟล์',
    name_en: 'Add 1 Profile',
    profile_count: 1,
    price_thb: 3900,
    price_per_profile_thb: 3900,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'แพ็ค 6 โปรไฟล์',
    name_en: '6 Profiles Pack',
    profile_count: 6,
    price_thb: 19900,
    price_per_profile_thb: 3317,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'แพ็ค 30 โปรไฟล์',
    name_en: '30 Profiles Pack',
    profile_count: 30,
    price_thb: 59900,
    price_per_profile_thb: 1997,
    is_active: true,
    created_at: new Date().toISOString()
  }
]

export default function ProfileUnlockModal({ 
  isOpen, 
  onClose, 
  onSuccess, 
  currentUser 
}: ProfileUnlockModalProps) {
  const [selectedPackage, setSelectedPackage] = useState<ProfilePackage | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null)
  const [paymentId, setPaymentId] = useState<string | null>(null)

  const handleSelectPackage = (pkg: ProfilePackage) => {
    setSelectedPackage(pkg)
    setQrCodeUrl(null)
    setPaymentId(null)
  }

  const handleCreatePayment = async () => {
    if (!selectedPackage) return

    setIsProcessing(true)
    try {
      const response = await fetch('/api/payment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          package_id: selectedPackage.id,
          user_id: currentUser.id,
          user_type: currentUser.type
        })
      })

      const result = await response.json()

      if (result.success) {
        setQrCodeUrl(result.qr_code)
        setPaymentId(result.payment_id)
        // Start polling for payment status
        startPaymentPolling(result.payment_id)
      } else {
        alert(result.error || 'เกิดข้อผิดพลาดในการสร้างการชำระเงิน')
      }
    } catch (error) {
      console.error('Payment creation error:', error)
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อ')
    } finally {
      setIsProcessing(false)
    }
  }

  const startPaymentPolling = (paymentId: string) => {
    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch(`/api/payment/verify/${paymentId}`)
        const result = await response.json()

        if (result.status === 'completed') {
          clearInterval(pollInterval)
          onSuccess(selectedPackage?.profile_count || 0)
          onClose()
        } else if (result.status === 'failed') {
          clearInterval(pollInterval)
          alert('การชำระเงินล้มเหลว กรุณาลองใหม่อีกครั้ง')
        }
      } catch (error) {
        console.error('Payment polling error:', error)
      }
    }, 3000) // Poll every 3 seconds

    // Stop polling after 10 minutes
    setTimeout(() => clearInterval(pollInterval), 600000)
  }

  const calculateSavings = (pkg: ProfilePackage) => {
    if (pkg.profile_count === 1) return 0
    const singlePrice = PACKAGES[0].price_thb
    const totalSinglePrice = singlePrice * pkg.profile_count
    return totalSinglePrice - pkg.price_thb
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-purple-800">
            ปลดล็อกโปรไฟล์เพิ่มเติม
          </DialogTitle>
        </DialogHeader>

        {!qrCodeUrl ? (
          <div className="space-y-4">
            <div className="text-center text-sm text-gray-600 mb-4">
              เลือกแพ็กเกจที่เหมาะกับคุณ
            </div>

            {PACKAGES.map((pkg) => {
              const savings = calculateSavings(pkg)
              const isSelected = selectedPackage?.id === pkg.id
              
              return (
                <Card 
                  key={pkg.id}
                  className={`cursor-pointer transition-all ${
                    isSelected 
                      ? 'ring-2 ring-purple-500 bg-purple-50' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => handleSelectPackage(pkg)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{pkg.name}</CardTitle>
                      {savings > 0 && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          ประหยัด {PaymentService.formatPrice(savings)}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">
                          {PaymentService.formatPrice(pkg.price_thb)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {PaymentService.formatPrice(pkg.price_per_profile_thb)}/โปรไฟล์
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold">
                          {pkg.profile_count} โปรไฟล์
                        </div>
                        <div className="text-sm text-gray-500">
                          ใช้งานถาวร
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            <div className="flex gap-3 pt-4">
              <Button 
                variant="outline" 
                onClick={onClose}
                className="flex-1"
              >
                ยกเลิก
              </Button>
              <Button 
                onClick={handleCreatePayment}
                disabled={!selectedPackage || isProcessing}
                className="flex-1 bg-purple-600 hover:bg-purple-700"
              >
                {isProcessing ? 'กำลังสร้าง...' : 'ชำระเงิน'}
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">
                สแกนเพื่อชำระเงิน
              </h3>
              <p className="text-sm text-green-700">
                {selectedPackage?.name} - {PaymentService.formatPrice(selectedPackage?.price_thb || 0)}
              </p>
            </div>

            {qrCodeUrl && (
              <div className="flex justify-center">
                <img 
                  src={qrCodeUrl} 
                  alt="PromptPay QR Code"
                  className="w-64 h-64 border border-gray-200 rounded-lg"
                />
              </div>
            )}

            <div className="text-sm text-gray-600 space-y-2">
              <p>• สแกน QR Code ด้วยแอปธนาคารของคุณ</p>
              <p>• ระบบจะอัปเดตอัตโนมัติเมื่อชำระเงินสำเร็จ</p>
              <p>• กรุณาอย่าปิดหน้าต่างนี้จนกว่าจะชำระเสร็จ</p>
            </div>

            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
              <span className="ml-2 text-sm text-gray-600">
                รอการชำระเงิน...
              </span>
            </div>

            <Button 
              variant="outline" 
              onClick={onClose}
              className="w-full"
            >
              ปิดหน้าต่าง
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
} 
"use client"

import { useState, useEffect } from "react"
import { AlertTriangle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExitWarningModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirmExit: () => void
}

export default function ExitWarningModal({ isOpen, onClose, onConfirmExit }: ExitWarningModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-gray-900 border border-white/20 rounded-2xl p-6 max-w-md mx-4 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/60 hover:text-white">
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-orange-500/20 rounded-full">
            <AlertTriangle className="h-6 w-6 text-orange-500" />
          </div>
          <h3 className="text-xl font-bold text-white">ต้องการออกจากการคำนวณ?</h3>
        </div>

        <p className="text-white/80 mb-6">หากคุณออกตอนนี้ ข้อมูลที่กรอกไว้จะหายไป และต้องเริ่มใหม่ทั้งหมด</p>

        <div className="flex space-x-3">
          <Button onClick={onClose} variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
            ยกเลิก
          </Button>
          <Button onClick={onConfirmExit} className="flex-1 bg-red-600 hover:bg-red-700 text-white">
            ออกจากการคำนวณ
          </Button>
        </div>
      </div>
    </div>
  )
}

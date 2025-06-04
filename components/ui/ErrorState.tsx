"use client"

import { AlertTriangle, RefreshCw, WifiOff, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorStateProps {
  error: string
  onRetry: () => void
  type?: "network" | "server" | "unknown" | "validation" | "timeout"
}

export function ErrorState({ error, onRetry, type = "unknown" }: ErrorStateProps) {
  const getErrorIcon = () => {
    switch (type) {
      case "network":
        return <WifiOff className="h-16 w-16 text-red-500" />
      case "server":
        return <AlertTriangle className="h-16 w-16 text-orange-500" />
      case "timeout":
        return <Clock className="h-16 w-16 text-yellow-500" />
      case "validation":
        return <AlertCircle className="h-16 w-16 text-orange-500" />
      default:
        return <AlertTriangle className="h-16 w-16 text-red-500" />
    }
  }

  const getErrorTitle = () => {
    switch (type) {
      case "network":
        return "ไม่สามารถเชื่อมต่อได้"
      case "server":
        return "เซิร์ฟเวอร์ขัดข้อง"
      default:
        return "เกิดข้อผิดพลาด"
    }
  }

  const getErrorDescription = () => {
    switch (type) {
      case "network":
        return "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณ"
      case "server":
        return "เซิร์ฟเวอร์กำลังมีปัญหา กรุณาลองใหม่ในอีกสักครู่"
      default:
        return error
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <div className="bg-[#1a1a1a] rounded-2xl border border-red-500/20 p-8 max-w-md w-full text-center">
        <div className="mb-4 flex justify-center">{getErrorIcon()}</div>

        <h3 className="text-xl font-bold text-white mb-2">{getErrorTitle()}</h3>

        <p className="text-gray-400 mb-6 leading-relaxed">{getErrorDescription()}</p>

        <Button
          onClick={onRetry}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center space-x-2 mx-auto"
        >
          <RefreshCw className="h-4 w-4" />
          <span>ลองใหม่อีกครั้ง</span>
        </Button>
      </div>
    </div>
  )
}

export function InlineErrorState({
  error,
  onRetry,
  compact = false,
}: { error: string; onRetry: () => void; compact?: boolean }) {
  if (compact) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-4 w-4 text-red-400" />
          <span className="text-red-300 text-sm">{error}</span>
        </div>
        <Button
          onClick={onRetry}
          size="sm"
          variant="ghost"
          className="text-red-300 hover:text-red-200 hover:bg-red-500/20"
        >
          <RefreshCw className="h-3 w-3" />
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center">
      <AlertTriangle className="h-8 w-8 text-red-400 mx-auto mb-3" />
      <p className="text-red-300 mb-4">{error}</p>
      <Button onClick={onRetry} size="sm" className="bg-red-600 hover:bg-red-700 text-white">
        <RefreshCw className="h-4 w-4 mr-2" />
        ลองใหม่
      </Button>
    </div>
  )
}

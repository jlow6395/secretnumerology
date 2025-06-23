"use client"

import { useEffect } from "react"
import { toast } from "sonner"
import { errorHandler } from "@/lib/errorHandler"

export function GlobalErrorHandler() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Global error:', event.error)
      errorHandler.logError(event.error, 'global')
      toast.error('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason)
      errorHandler.logError(new Error(event.reason), 'promise')
      toast.error('เกิดข้อผิดพลาดในการเชื่อมต่อ')
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return null
}

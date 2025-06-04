"use client"

import { useEffect } from "react"
import { useToast } from "@/components/ui/Toast"
import { errorHandler } from "@/lib/errorHandler"

export function GlobalErrorHandler() {
  const { showError } = useToast()

  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      errorHandler.logError(event.error, "Global Error")
      showError("เกิดข้อผิดพลาดในระบบ", "กรุณารีเฟรชหน้าเว็บ")
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      errorHandler.logError(new Error(event.reason), "Unhandled Promise Rejection")
      showError("เกิดข้อผิดพลาดในการประมวลผล", "กรุณาลองใหม่อีกครั้ง")
    }

    window.addEventListener("error", handleGlobalError)
    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    return () => {
      window.removeEventListener("error", handleGlobalError)
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [showError])

  return null
}

"use client"

import { useState, useCallback } from "react"
import { useToast } from "@/components/ui/Toast"
import { ApiErrorHandler } from "@/lib/apiErrorHandler"

interface ErrorRecoveryOptions {
  maxRetries?: number
  retryDelay?: number
  onError?: (error: any) => void
  onSuccess?: () => void
}

export function useErrorRecovery(options: ErrorRecoveryOptions = {}) {
  const { maxRetries = 3, retryDelay = 1000, onError, onSuccess } = options
  const [retryCount, setRetryCount] = useState(0)
  const [isRetrying, setIsRetrying] = useState(false)
  const { showError, showSuccess } = useToast()

  const executeWithRetry = useCallback(
    async (operation: () => Promise<any>) => {
      try {
        setIsRetrying(true)
        const result = await operation()
        setRetryCount(0)
        onSuccess?.()
        return result
      } catch (error) {
        const apiError = ApiErrorHandler.handle(error, "Error Recovery")

        if (retryCount < maxRetries && apiError.status !== 401 && apiError.status !== 403) {
          setRetryCount((prev) => prev + 1)
          showError("เกิดข้อผิดพลาด", `กำลังลองใหม่... (${retryCount + 1}/${maxRetries})`)

          setTimeout(() => {
            executeWithRetry(operation)
          }, retryDelay * Math.pow(2, retryCount)) // Exponential backoff
        } else {
          showError("ไม่สามารถดำเนินการได้", apiError.message)
          onError?.(error)
          setRetryCount(0)
        }
        throw error
      } finally {
        setIsRetrying(false)
      }
    },
    [retryCount, maxRetries, retryDelay, onError, onSuccess, showError],
  )

  const reset = useCallback(() => {
    setRetryCount(0)
    setIsRetrying(false)
  }, [])

  return {
    executeWithRetry,
    retryCount,
    isRetrying,
    reset,
    canRetry: retryCount < maxRetries,
  }
}

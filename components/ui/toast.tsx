"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"
import { X, AlertTriangle, CheckCircle, Info, AlertCircle } from "lucide-react"

interface Toast {
  id: string
  type: "success" | "error" | "warning" | "info"
  title: string
  message?: string
  duration?: number
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
  showError: (title: string, message?: string) => void
  showSuccess: (title: string, message?: string) => void
  showWarning: (title: string, message?: string) => void
  showInfo: (title: string, message?: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = crypto.randomUUID()
    const newToast = { ...toast, id }

    setToasts((prev) => [...prev, newToast])

    // Auto remove after duration
    const duration = toast.duration || 5000
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const showError = useCallback(
    (title: string, message?: string) => {
      addToast({ type: "error", title, message })
    },
    [addToast],
  )

  const showSuccess = useCallback(
    (title: string, message?: string) => {
      addToast({ type: "success", title, message })
    },
    [addToast],
  )

  const showWarning = useCallback(
    (title: string, message?: string) => {
      addToast({ type: "warning", title, message })
    },
    [addToast],
  )

  const showInfo = useCallback(
    (title: string, message?: string) => {
      addToast({ type: "info", title, message })
    },
    [addToast],
  )

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        showError,
        showSuccess,
        showWarning,
        showInfo,
      }}
    >
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  )
}

function ToastContainer({ toasts, onRemove }: { toasts: Toast[]; onRemove: (id: string) => void }) {
  if (toasts.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  )
}

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
  const getIcon = () => {
    switch (toast.type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case "error":
        return <AlertTriangle className="h-5 w-5 text-red-400" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-400" />
      case "info":
        return <Info className="h-5 w-5 text-blue-400" />
    }
  }

  const getBorderColor = () => {
    switch (toast.type) {
      case "success":
        return "border-green-500/20"
      case "error":
        return "border-red-500/20"
      case "warning":
        return "border-yellow-500/20"
      case "info":
        return "border-blue-500/20"
    }
  }

  return (
    <div
      className={`
      bg-[#1a1a1a] border ${getBorderColor()} rounded-xl p-4 shadow-lg backdrop-blur-sm
      min-w-[300px] max-w-[400px] animate-in slide-in-from-right duration-300
    `}
    >
      <div className="flex items-start space-x-3">
        {getIcon()}
        <div className="flex-1">
          <h4 className="text-sm font-medium text-white">{toast.title}</h4>
          {toast.message && <p className="text-xs text-gray-400 mt-1">{toast.message}</p>}
        </div>
        <button onClick={() => onRemove(toast.id)} className="text-gray-400 hover:text-white transition-colors">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within ToastProvider")
  }
  return context
}

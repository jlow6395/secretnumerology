"use client"

import { useNetworkStatus } from "@/hooks/useNetworkStatus"
import { WifiOff, Signal } from "lucide-react"

export function NetworkStatusIndicator() {
  const { isOnline, isSlowConnection, effectiveType } = useNetworkStatus()

  if (!isOnline) {
    return (
      <div className="fixed bottom-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 z-50">
        <WifiOff className="h-4 w-4" />
        <span className="text-sm">ไม่มีการเชื่อมต่ออินเทอร์เน็ต</span>
      </div>
    )
  }

  if (isSlowConnection) {
    return (
      <div className="fixed bottom-4 left-4 bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 z-50">
        <Signal className="h-4 w-4" />
        <span className="text-sm">การเชื่อมต่อช้า ({effectiveType})</span>
      </div>
    )
  }

  return null
}

export function NetworkStatusBanner() {
  const { isOnline, isSlowConnection } = useNetworkStatus()

  if (!isOnline) {
    return (
      <div className="bg-red-600 text-white text-center py-2 px-4">
        <div className="flex items-center justify-center space-x-2">
          <WifiOff className="h-4 w-4" />
          <span>ไม่มีการเชื่อมต่ออินเทอร์เน็ต - บางฟีเจอร์อาจไม่ทำงาน</span>
        </div>
      </div>
    )
  }

  if (isSlowConnection) {
    return (
      <div className="bg-yellow-600 text-white text-center py-2 px-4">
        <div className="flex items-center justify-center space-x-2">
          <Signal className="h-4 w-4" />
          <span>การเชื่อมต่อช้า - การโหลดอาจใช้เวลานานกว่าปกติ</span>
        </div>
      </div>
    )
  }

  return null
}

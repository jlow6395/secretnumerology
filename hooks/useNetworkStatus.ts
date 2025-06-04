"use client"

import { useState, useEffect } from "react"

interface NetworkStatus {
  isOnline: boolean
  isSlowConnection: boolean
  connectionType: string
  effectiveType: string
}

export function useNetworkStatus(): NetworkStatus {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>({
    isOnline: true,
    isSlowConnection: false,
    connectionType: "unknown",
    effectiveType: "unknown",
  })

  useEffect(() => {
    const updateNetworkStatus = () => {
      const connection =
        (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection

      setNetworkStatus({
        isOnline: navigator.onLine,
        isSlowConnection: connection
          ? connection.effectiveType === "slow-2g" || connection.effectiveType === "2g"
          : false,
        connectionType: connection ? connection.type || "unknown" : "unknown",
        effectiveType: connection ? connection.effectiveType || "unknown" : "unknown",
      })
    }

    // Initial check
    updateNetworkStatus()

    // Listen for changes
    window.addEventListener("online", updateNetworkStatus)
    window.addEventListener("offline", updateNetworkStatus)

    // Listen for connection changes
    const connection =
      (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    if (connection) {
      connection.addEventListener("change", updateNetworkStatus)
    }

    return () => {
      window.removeEventListener("online", updateNetworkStatus)
      window.removeEventListener("offline", updateNetworkStatus)
      if (connection) {
        connection.removeEventListener("change", updateNetworkStatus)
      }
    }
  }, [])

  return networkStatus
}

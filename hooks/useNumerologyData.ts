"use client"

import { useState, useEffect, useMemo } from "react"

interface NumerologyData {
  coreNumbers: Array<{
    title: string
    subtitle: string
    number: string
    description: string
    progress: number
    color: string
  }>
  luckyNumbers: Array<{
    title: string
    number: number
    color: string
    active: boolean
    description: string
  }>
  insightOfDay: {
    title: string
    content: string
    insight: string
    tip: string
  }
  loading: boolean
  error: string | null
  retryCount: number
}

export function useNumerologyData(): NumerologyData & { retry: () => void } {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  // Simulate realistic API call with error handling
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Simulate network delay (more realistic)
        const delay = Math.random() * 300 + 200 // 200-500ms
        await new Promise((resolve) => setTimeout(resolve, delay))

        // Simulate occasional errors (10% chance)
        if (Math.random() < 0.1 && retryCount === 0) {
          throw new Error("เกิดข้อผิดพลาดในการโหลดข้อมูล กรุณาลองใหม่อีกครั้ง")
        }

        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : "เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ")
        setLoading(false)
      }
    }

    fetchData()
  }, [retryCount])

  const retry = () => {
    setRetryCount((prev) => prev + 1)
  }

  const data = useMemo(
    () => ({
      coreNumbers: [
        {
          title: "Life Path",
          subtitle: "The Achiever",
          number: "1",
          description: "You are destined for individual success and recognition.",
          progress: 85,
          color: "#06b6d4",
        },
        {
          title: "Expression",
          subtitle: "The Creative",
          number: "3",
          description: "Your natural talent lies in communication and creativity.",
          progress: 92,
          color: "#10b981",
        },
        {
          title: "Soul Urge",
          subtitle: "The Seeker",
          number: "7",
          description: "Your soul desires knowledge and spiritual understanding.",
          progress: 78,
          color: "#f59e0b",
        },
      ],
      luckyNumbers: [
        { title: "เลขโทรศัพท์", number: 5, color: "#ef4444", active: false, description: "เลขมงคลสำหรับโทรศัพท์" },
        { title: "เลขทะเบียนรถ", number: 4, color: "#8b5cf6", active: false, description: "เลขนำโชคสำหรับรถยนต์" },
        { title: "เลขบัญชีธนาคาร", number: 1, color: "#06b6d4", active: true, description: "เลขมงคลทางการเงิน" },
        { title: "เลขที่บ้าน", number: 2, color: "#ec4899", active: true, description: "เลขนำโชคที่อยู่อาศัย" },
      ],
      insightOfDay: {
        title: "วันนี้คือวันของการเริ่มต้นใหม่...",
        content:
          "ด้วยพลังของเลข 3 ที่ครอบงำวันนี้ คุณจะพบกับโอกาสในการแสดงออกและความคิดสร้างสรรค์ที่ไม่เคยมีมาก่อน เปิดใจรับสิ่งใหม่ๆ และอย่าลืมแบ่งปันความสุขให้กับคนรอบข้าง",
        insight: "Insight ดีเยี่ยมของวันนี้ 8 ข้อความ",
        tip: "Life Path 1 ควรระมัดระวังเรื่องการเงินในช่วงนี้ หลีกเลี่ยงการลงทุนที่เสี่ยงสูง และมุ่งเน้นไปที่การสร้างความมั่นคงทางการเงินแทน",
      },
    }),
    [],
  )

  return {
    ...data,
    loading,
    error,
    retryCount,
    retry,
  }
}

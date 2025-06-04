"use client"

import { useEffect, useRef } from "react"

interface ChartData {
  month: string
  value: number
}

interface SpendingTrendChartProps {
  data: ChartData[]
}

export default function SpendingTrendChart({ data }: SpendingTrendChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Chart dimensions
    const chartWidth = rect.width - 40
    const chartHeight = rect.height - 60
    const barWidth = (chartWidth / data.length) * 0.6
    const barSpacing = (chartWidth / data.length) * 0.4
    const maxValue = Math.max(...data.map((item) => item.value))
    const scaleFactor = chartHeight / maxValue

    // Draw bars
    data.forEach((item, index) => {
      const x = 20 + index * (barWidth + barSpacing)
      const barHeight = item.value * scaleFactor
      const y = rect.height - 40 - barHeight

      // Define gradient based on value
      let gradient
      if (item.value > 75) {
        gradient = ctx.createLinearGradient(x, y, x, rect.height - 40)
        gradient.addColorStop(0, "#00FFA3")
        gradient.addColorStop(1, "#00FFA320")
      } else if (item.value > 50) {
        gradient = ctx.createLinearGradient(x, y, x, rect.height - 40)
        gradient.addColorStop(0, "#00E5FF")
        gradient.addColorStop(1, "#00E5FF20")
      } else {
        gradient = ctx.createLinearGradient(x, y, x, rect.height - 40)
        gradient.addColorStop(0, "#9C5FFF")
        gradient.addColorStop(1, "#9C5FFF20")
      }

      // Draw bar
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.roundRect(x, y, barWidth, barHeight, [4])
      ctx.fill()

      // Draw month label
      ctx.fillStyle = "#6C6C6C"
      ctx.font = "10px Inter, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.month, x + barWidth / 2, rect.height - 20)
    })
  }, [data])

  return (
    <div className="w-full h-[300px]">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}

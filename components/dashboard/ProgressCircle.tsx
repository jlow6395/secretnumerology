interface ProgressCircleProps {
  percentage: number
  color: string
  size: number
}

export default function ProgressCircle({ percentage, color, size }: ProgressCircleProps) {
  const radius = size / 2 - 10
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#2A2A2A" strokeWidth="8" fill="transparent" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="text-2xl font-bold text-white">{percentage}%</span>
        <span className="text-xs text-gray-400">Completed</span>
      </div>
    </div>
  )
}

"use client"

import type { LucideIcon } from "lucide-react"
import { ChevronDown, ChevronUp, Calculator, BookOpen } from "lucide-react"
import { useState } from "react"

interface FormulaCardProps {
  name: string
  id: string
  input: string
  output: string
  shortMeaning: string
  longMeaning: string
  calculation: string
  example1: string
  example2?: string
  connection?: string
  icon: LucideIcon
  bgGradient?: string
}

export default function FormulaCard({
  name,
  id,
  input,
  output,
  shortMeaning,
  longMeaning,
  calculation,
  example1,
  example2,
  connection,
  icon: Icon,
  bgGradient = "from-cyan-500 to-blue-500",
}: FormulaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="data-card group overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`rounded-full bg-gradient-to-r ${bgGradient} p-2 text-black`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{shortMeaning}</p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="rounded-full bg-secondary p-2 text-secondary-foreground transition-colors hover:bg-secondary/80"
        >
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-4 border-t pt-4">
          <div>
            <h4 className="mb-1 text-sm font-medium">ข้อมูลที่ใช้</h4>
            <p className="text-sm text-muted-foreground">{input}</p>
          </div>

          <div>
            <h4 className="mb-1 text-sm font-medium">ผลลัพธ์</h4>
            <p className="text-sm text-muted-foreground">{output}</p>
          </div>

          <div>
            <h4 className="mb-1 text-sm font-medium">ความหมาย</h4>
            <p className="text-sm text-muted-foreground">{longMeaning}</p>
          </div>

          <div>
            <h4 className="mb-1 flex items-center text-sm font-medium">
              <Calculator className="mr-1 h-4 w-4" />
              วิธีคำนวณ
            </h4>
            <div className="rounded-lg bg-secondary/50 p-3 text-sm">
              <pre className="whitespace-pre-wrap font-mono text-xs">{calculation}</pre>
            </div>
          </div>

          <div>
            <h4 className="mb-1 text-sm font-medium">ตัวอย่างการคำนวณ</h4>
            <div className="rounded-lg bg-secondary/50 p-3 text-sm">
              <pre className="whitespace-pre-wrap font-mono text-xs">{example1}</pre>
            </div>
          </div>

          {example2 && (
            <div>
              <h4 className="mb-1 text-sm font-medium">ตัวอย่างการคำนวณเพิ่มเติม</h4>
              <div className="rounded-lg bg-secondary/50 p-3 text-sm">
                <pre className="whitespace-pre-wrap font-mono text-xs">{example2}</pre>
              </div>
            </div>
          )}

          {connection && (
            <div>
              <h4 className="mb-1 flex items-center text-sm font-medium">
                <BookOpen className="mr-1 h-4 w-4" />
                เชื่อมกับระบบอื่น
              </h4>
              <p className="text-sm text-muted-foreground">{connection}</p>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <button className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
          ดูรายละเอียด
        </button>

        <div className="text-xs text-muted-foreground">ID: {id}</div>
      </div>
    </div>
  )
}

import type { LucideIcon } from "lucide-react"
import { Eye, BookmarkPlus } from "lucide-react"

interface NumerologyCardProps {
  title: string
  description: string
  icon: LucideIcon
  number?: number | string
  views?: number
  bgGradient?: string
}

export default function NumerologyCard({
  title,
  description,
  icon: Icon,
  number,
  views,
  bgGradient = "from-cyan-500 to-blue-500",
}: NumerologyCardProps) {
  return (
    <div className="data-card group overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`rounded-full bg-gradient-to-r ${bgGradient} p-2 text-black`}>
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-medium">{title}</h3>
        </div>

        {number && (
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${bgGradient} text-xl font-bold text-black`}
          >
            {number}
          </div>
        )}
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{description}</p>

      <div className="mt-4 flex items-center justify-between">
        <button className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
          ดูรายละเอียด
        </button>

        <div className="flex items-center space-x-3">
          {views && (
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Eye className="h-3.5 w-3.5" />
              <span>{views}</span>
            </div>
          )}

          <button className="rounded-full bg-secondary p-1.5 text-secondary-foreground opacity-0 transition-opacity group-hover:opacity-100">
            <BookmarkPlus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

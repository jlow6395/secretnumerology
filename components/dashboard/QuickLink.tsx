import type { LucideIcon } from "lucide-react"

interface QuickLinkProps {
  title: string
  icon: LucideIcon
  description: string
}

export default function QuickLink({ title, icon: Icon, description }: QuickLinkProps) {
  return (
    <div className="flex cursor-pointer items-center space-x-3 rounded-lg border border-gray-700 bg-gray-800/50 p-4 transition-all hover:border-purple-500 hover:bg-gray-700/50">
      <div className="rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-2">
        <Icon className="h-5 w-5 text-white" />
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </div>
  )
}

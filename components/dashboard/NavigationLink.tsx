import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface NavigationLinkProps {
  href: string
  icon: LucideIcon
  label: string
  isActive?: boolean
}

export default function NavigationLink({ href, icon: Icon, label, isActive = false }: NavigationLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 rounded-lg px-4 py-3 transition-all ${
        isActive ? "bg-[#1e1e1e] text-white" : "text-gray-400 hover:bg-[#1e1e1e] hover:text-white"
      }`}
    >
      <Icon className={`h-5 w-5 ${isActive ? "text-[#00ffaa]" : "text-gray-500"}`} />
      <span className="font-medium">{label}</span>
    </Link>
  )
}

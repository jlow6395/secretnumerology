import { User, Edit, LogOut } from "lucide-react"
import { UnifiedCard } from "@/components/ui/UnifiedCard"

interface ProfileCardProps {
  name: string
  birthdate: string
}

export default function ProfileCard({ name, birthdate }: ProfileCardProps) {
  return (
    <UnifiedCard variant="action" title="Profile" icon={User}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <button className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white">
            <Edit className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <User className="h-8 w-8" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-white">{name}</h3>
          <p className="text-sm text-gray-400">Born: {birthdate}</p>
        </div>
      </div>
    </UnifiedCard>
  )
}

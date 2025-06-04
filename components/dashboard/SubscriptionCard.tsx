import { Crown, Check } from "lucide-react"
import { UnifiedCard } from "@/components/ui/UnifiedCard"

interface SubscriptionCardProps {
  plan: "Free" | "Monthly" | "Yearly"
  expiryDate?: string
}

export default function SubscriptionCard({ plan, expiryDate }: SubscriptionCardProps) {
  const isPremium = plan !== "Free"

  return (
    <UnifiedCard variant="action" title="Subscription Plan" badge={isPremium ? "Premium" : undefined} icon={Crown}>
      <div className="mt-4">
        <div className="flex items-baseline space-x-2">
          <h3 className="text-2xl font-bold text-white">{plan}</h3>
          {expiryDate && <span className="text-sm text-gray-400">Expires: {expiryDate}</span>}
        </div>

        {isPremium ? (
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-400" />
              <span className="text-sm text-gray-300">Full Numerology Report</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-400" />
              <span className="text-sm text-gray-300">Monthly Predictions</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-400" />
              <span className="text-sm text-gray-300">Monk Support</span>
            </div>
          </div>
        ) : (
          <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 font-medium text-white transition-all hover:from-purple-700 hover:to-blue-700">
            Upgrade Now
          </button>
        )}
      </div>
    </UnifiedCard>
  )
}

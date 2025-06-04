export function LoadingCard() {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-[#2A2A2A] p-6 animate-pulse">
      <div className="flex items-center space-x-3 mb-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] animate-shimmer" />
        <div className="space-y-2 flex-1">
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "60%" }}
          />
          <div
            className="h-3 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "40%" }}
          />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer" />
        <div
          className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
          style={{ width: "80%" }}
        />
        <div
          className="h-2 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
          style={{ width: "90%" }}
        />
      </div>
    </div>
  )
}

export function LoadingNumberCard() {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-[#2A2A2A] p-6 animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-2 flex-1">
          <div
            className="h-5 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "50%" }}
          />
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "70%" }}
          />
        </div>
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-shimmer flex items-center justify-center">
          <div className="h-6 w-6 bg-gradient-to-r from-[#3A3A3A] to-[#4A4A4A] rounded animate-shimmer" />
        </div>
      </div>
      <div className="space-y-3 mb-4">
        <div className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer" />
        <div
          className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
          style={{ width: "85%" }}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div
            className="h-3 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "30%" }}
          />
          <div
            className="h-3 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "20%" }}
          />
        </div>
        <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full animate-shimmer"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </div>
  )
}

export function LoadingInsightCard() {
  return (
    <div className="bg-gradient-to-r from-[#8b5cf6]/10 to-[#ec4899]/10 rounded-2xl border border-[#8b5cf6]/20 p-6 animate-pulse">
      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#8b5cf6]/30 to-[#ec4899]/30 animate-shimmer flex-shrink-0" />
        <div className="space-y-2 flex-1">
          <div
            className="h-5 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "60%" }}
          />
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "40%" }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "80%" }}
          />
          <div className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer" />
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "90%" }}
          />
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "70%" }}
          />
        </div>

        <div className="space-y-2">
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "75%" }}
          />
          <div className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer" />
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "85%" }}
          />
        </div>
      </div>
    </div>
  )
}

export function LoadingQuickActionCard() {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-[#2A2A2A] p-4 animate-pulse">
      <div className="flex items-center space-x-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] animate-shimmer" />
        <div className="space-y-2 flex-1">
          <div
            className="h-4 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "70%" }}
          />
          <div
            className="h-3 bg-gradient-to-r from-[#2A2A2A] to-[#3A3A3A] rounded animate-shimmer"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  )
}

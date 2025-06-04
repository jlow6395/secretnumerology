"use client"
import { X, FileText, Download, BarChart3, TrendingUp, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

interface ReportsDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReportsDrawer({ isOpen, onClose }: ReportsDrawerProps) {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    onClose()
    router.push(href)
  }

  const reportsFeatures = [
    {
      icon: FileText,
      title: "Complete Reports",
      description: "รายงานเลขศาสตร์ฉบับสมบูรณ์",
      color: "#10b981",
      href: "/dashboard/reports",
    },
    {
      icon: BarChart3,
      title: "Life Analysis",
      description: "การวิเคราะห์ช่วงชีวิตและแนวโน้ม",
      color: "#10b981",
      href: "/dashboard/life-cycle/youth",
    },
    {
      icon: TrendingUp,
      title: "Future Predictions",
      description: "การทำนายและคำแนะนำอนาคต",
      color: "#10b981",
      href: "/dashboard/reports",
    },
    {
      icon: Download,
      title: "Download Center",
      description: "ดาวน์โหลดรายงานทั้งหมด",
      color: "#10b981",
      href: "/dashboard/reports",
    },
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-[#0a0a0a] rounded-t-3xl border-t border-[#2A2A2A] animate-slide-up">
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1 bg-[#3A3A3A] rounded-full" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A]">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Reports</h2>
                <p className="text-sm text-gray-400">รายงานและการวิเคราะห์</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="h-8 w-8 rounded-full bg-[#2A2A2A] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-4 max-h-[60vh] overflow-y-auto">
            <div className="space-y-3">
              {reportsFeatures.map((feature, index) => (
                <button
                  key={index}
                  className="w-full flex items-center space-x-4 p-4 rounded-xl bg-[#1a1a1a] border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all group"
                  onClick={() => handleNavigation(feature.href)}
                >
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: `${feature.color}20`,
                      boxShadow: `0 4px 12px ${feature.color}15`,
                    }}
                  >
                    <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-white font-medium">{feature.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Safe area for iOS */}
          <div className="h-safe-area-inset-bottom" />
        </div>
      </div>
    </>
  )
}

import { Sparkles, Calculator, Heart, Users, TrendingUp, Star } from "lucide-react"
import Navigation from "@/components/Navigation"

export default function NumerologyPage() {
  const numerologyTypes = [
    {
      icon: Calculator,
      title: "เลขชีวิต (Life Path)",
      description: "เลขที่สำคัญที่สุดในเลขศาสตร์ เปิดเผยเส้นทางชีวิตและจุดประสงค์ของคุณ",
      href: "/numerology/life-path",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: Sparkles,
      title: "เลขแสดงออก (Expression)",
      description: "เปิดเผยความสามารถและพรสวรรค์ที่คุณนำมาตั้งแต่เกิด",
      href: "/numerology/expression",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-100",
    },
    {
      icon: Heart,
      title: "เลขดวงใจ (Heart's Desire)",
      description: "ความปรารถนาลึกในใจและสิ่งที่หัวใจคุณต้องการจริงๆ",
      href: "/numerology/hearts-desire",
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-100",
    },
    {
      icon: Users,
      title: "เลขบุคลิกภาพ (Personality)",
      description: "บุคลิกภาพที่คนอื่นมองเห็นและความประทับใจแรกที่คุณสร้าง",
      href: "/numerology/personality",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-100",
    },
    {
      icon: TrendingUp,
      title: "ความเข้ากัน (Compatibility)",
      description: "วิเคราะห์ความเข้ากันกับคนรอบข้างในด้านต่างๆ",
      href: "/numerology/compatibility",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-100",
    },
    {
      icon: Star,
      title: "Angel Numbers",
      description: "เลขนำโชคจากเทวดาที่ส่งสัญญาณมาให้คุณ",
      href: "/numerology/angel-numbers",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-100",
    },
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        {/* Numerology page content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">เลขศาสตร์</h1>
          <p className="text-lg text-gray-600 text-center">ความรู้เกี่ยวกับเลขศาสตร์</p>
        </div>
      </div>
    </>
  )
}

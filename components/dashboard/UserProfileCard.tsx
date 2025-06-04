"use client"

import { User, Calendar, Star, Sparkles, Crown, Gift } from "lucide-react"

interface UserProfileCardProps {
  name: string
  birthDate: string
  age: {
    years: number
    months: number
    days: number
  }
  chineseZodiac: string
  chineseElement: string
  nickname: string
  currentZodiacYear?: string
  personalYear?: number
  personalMonth?: number
}

export default function UserProfileCard({
  name,
  birthDate,
  age,
  chineseZodiac,
  chineseElement,
  nickname,
  currentZodiacYear = "งู",
  personalYear = 5,
  personalMonth = 3,
}: UserProfileCardProps) {
  const getChineseZodiacEmoji = (zodiac: string) => {
    const zodiacMap: { [key: string]: string } = {
      หนู: "🐭",
      วัว: "🐂",
      เสือ: "🐅",
      กระต่าย: "🐰",
      มังกร: "🐲",
      งู: "🐍",
      ม้า: "🐴",
      แพะ: "🐐",
      ลิง: "🐵",
      ไก่: "🐓",
      หมา: "🐕",
      หมู: "🐷",
    }
    return zodiacMap[zodiac] || "🌟"
  }

  const getElementColor = (element: string) => {
    const elementColors: { [key: string]: { bg: string; text: string; glow: string } } = {
      ไม้: { bg: "from-emerald-500 to-green-600", text: "text-emerald-400", glow: "shadow-emerald-500/30" },
      ไฟ: { bg: "from-red-500 to-orange-600", text: "text-red-400", glow: "shadow-red-500/30" },
      ดิน: { bg: "from-amber-600 to-yellow-700", text: "text-amber-400", glow: "shadow-amber-500/30" },
      โลหะ: { bg: "from-gray-400 to-slate-600", text: "text-gray-300", glow: "shadow-gray-500/30" },
      น้ำ: { bg: "from-blue-500 to-cyan-600", text: "text-blue-400", glow: "shadow-blue-500/30" },
    }
    return (
      elementColors[element] || {
        bg: "from-purple-500 to-indigo-600",
        text: "text-purple-400",
        glow: "shadow-purple-500/30",
      }
    )
  }

  const elementStyle = getElementColor(chineseElement)

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] via-[#1F1F1F] to-[#151515] border border-[#2A2A2A] shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00E5FF] to-[#00FFA3] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#8b5cf6] to-[#ec4899] rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#00FFA3] flex items-center justify-center shadow-lg shadow-[#00FFA3]/30">
                <User className="h-7 w-7 text-black" />
              </div>
              <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                <Crown className="h-3 w-3 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                โปรไฟล์ของคุณ
              </h2>
              <p className="text-sm text-gray-400 flex items-center">
                <Sparkles className="h-3 w-3 mr-1" />
                ข้อมูลส่วนตัวและดวงชะตา
              </p>
            </div>
          </div>
          <Gift className="h-6 w-6 text-[#00FFA3] animate-pulse" />
        </div>

        {/* Welcome Message */}
        <div className="mb-6 p-5 rounded-xl bg-gradient-to-r from-[#00E5FF]/10 via-[#00FFA3]/10 to-[#8b5cf6]/10 border border-[#00FFA3]/20 backdrop-blur-sm">
          <div className="flex items-center space-x-3 mb-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#00FFA3] flex items-center justify-center">
              <span className="text-black font-bold text-sm">🙏</span>
            </div>
            <p className="text-white text-lg font-semibold">
              สวัสดีคุณ{" "}
              <span className="text-transparent bg-gradient-to-r from-[#00E5FF] to-[#00FFA3] bg-clip-text">{name}</span>
            </p>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed pl-11">
            ยินดีต้อนรับสู่โลกแห่งเลขศาสตร์ ขอให้คุณพบเจอความลับที่ซ่อนอยู่ในตัวเลข ✨
          </p>
        </div>

        {/* Main Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Birth Info Section */}
          <div className="p-4 rounded-xl bg-[#232323]/50 border border-[#2A2A2A] backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#0099cc] flex items-center justify-center">
                <Calendar className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-300">ข้อมูลการเกิด</span>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">วันเกิด</p>
                <p className="text-white font-bold text-lg">{birthDate}</p>
              </div>

              <div className="pt-2 border-t border-[#2A2A2A]">
                <p className="text-xs text-gray-500 mb-1">อายุปัจจุบัน</p>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-xl font-bold text-[#00E5FF]">{age.years}</p>
                    <p className="text-xs text-gray-400">ปี</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-[#00FFA3]">{age.months}</p>
                    <p className="text-xs text-gray-400">เดือน</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-[#FFD166]">{age.days}</p>
                    <p className="text-xs text-gray-400">วัน</p>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-[#2A2A2A] mt-3">
                <p className="text-xs text-gray-500 mb-2">เลขประจำตัวปัจจุบัน</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-2 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A]">
                    <div className="h-8 w-8 mx-auto rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0099cc] flex items-center justify-center text-white font-bold text-sm mb-1">
                      {personalYear}
                    </div>
                    <p className="text-xs text-[#00E5FF] font-medium">Personal Year</p>
                    <p className="text-xs text-gray-500">ปีส่วนตัว</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A]">
                    <div className="h-8 w-8 mx-auto rounded-full bg-gradient-to-r from-[#00FFA3] to-[#00cc82] flex items-center justify-center text-white font-bold text-sm mb-1">
                      {personalMonth}
                    </div>
                    <p className="text-xs text-[#00FFA3] font-medium">Personal Month</p>
                    <p className="text-xs text-gray-500">เดือนส่วนตัว</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chinese Zodiac Section */}
          <div className="p-4 rounded-xl bg-[#232323]/50 border border-[#2A2A2A] backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] flex items-center justify-center">
                <Star className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-300">นักษัตรจีน</span>
            </div>

            <div className="space-y-4">
              {/* Chinese Zodiac */}
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] flex items-center justify-center text-2xl border border-[#3A3A3A]">
                  {getChineseZodiacEmoji(chineseZodiac)}
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold text-lg">{chineseZodiac}</p>
                  <p className="text-xs text-gray-400">ปีนักษัตรของคุณ</p>
                </div>
              </div>

              {/* Current Year Zodiac */}
              <div className="pt-3 border-t border-[#2A2A2A]">
                <p className="text-xs text-gray-500 mb-2">ปีนักษัตรปัจจุบัน (2568)</p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#FFD166] to-[#ffb300] flex items-center justify-center text-lg border border-[#FFD166]/30">
                    {getChineseZodiacEmoji(currentZodiacYear)}
                  </div>
                  <div>
                    <p className="text-[#FFD166] font-bold">{currentZodiacYear}</p>
                    <p className="text-xs text-gray-400">ปีงู (ปีแห่งการเปลี่ยนแปลง)</p>
                  </div>
                </div>
              </div>

              {/* Element Section */}
              <div className="pt-3 border-t border-[#2A2A2A]">
                <p className="text-xs text-gray-500 mb-2">ธาตุประจำตัว</p>
                <div className="flex items-center space-x-3">
                  <div
                    className={`h-8 w-8 rounded-lg bg-gradient-to-r ${elementStyle.bg} flex items-center justify-center ${elementStyle.glow} shadow-lg`}
                  >
                    <span className="text-white font-bold text-sm">{chineseElement[0]}</span>
                  </div>
                  <div>
                    <p className={`font-bold ${elementStyle.text}`}>{chineseElement}</p>
                    <p className="text-xs text-gray-400">ธาตุหลัก</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nickname Section */}
        <div className="p-5 rounded-xl bg-gradient-to-r from-[#232323]/80 to-[#1A1A1A]/80 border border-[#2A2A2A] backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Crown className="h-5 w-5 text-yellow-400" />
                <p className="text-sm font-medium text-gray-400">ฉายาตามดวงของคุณ</p>
              </div>
              <p className="text-xl font-bold bg-gradient-to-r from-[#00E5FF] via-[#00FFA3] to-[#8b5cf6] bg-clip-text text-transparent">
                "{nickname}"
              </p>
              <p className="text-xs text-gray-500 mt-1">ตามหลักเลขศาสตร์และดวงชะตา</p>
            </div>
            <div className="text-3xl animate-pulse">✨</div>
          </div>
        </div>
      </div>
    </div>
  )
}

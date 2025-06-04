interface DashboardTopProps {
  userName: string
}

export default function DashboardTop({ userName }: DashboardTopProps) {
  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a0b2e] to-[#30176e]">
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
        <div className="h-full w-full bg-[url('/images/mystical-pattern.png')] bg-cover bg-center"></div>
      </div>

      <div className="relative z-10 flex flex-col items-start justify-between p-8 md:flex-row md:items-center">
        <div className="mb-6 md:mb-0">
          <h1 className="mb-2 text-3xl font-bold text-white">สวัสดี, {userName}</h1>
          <p className="text-lg text-purple-200">ค้นพบตัวเลขที่นำทางชะตาชีวิตของคุณ</p>
        </div>

        <button className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-purple-900/30 transition-all hover:shadow-xl hover:shadow-purple-900/40">
          ดูรายงานเลขศาสตร์ฉบับเต็ม
        </button>
      </div>
    </div>
  )
}

"use client"

import Link from "next/link"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            404
          </h1>
          <div className="text-2xl font-semibold text-white mt-2">ไม่พบหน้าที่ต้องการ</div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-400 text-lg leading-relaxed">ขออภัย หน้าที่คุณกำลังมองหาไม่มีอยู่ หรืออาจถูกย้ายไปแล้ว</p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            <Home className="h-5 w-5" />
            <span>กลับหน้าหลัก</span>
          </Link>

          <div className="flex space-x-4 justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center space-x-2 bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-2 rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>แดชบอร์ด</span>
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-2 rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              <Search className="h-4 w-4" />
              <span>บล็อก</span>
            </Link>
          </div>
        </div>

        {/* Numerology Touch */}
        <div className="mt-12 p-6 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
          <h3 className="text-lg font-semibold text-white mb-2">🔮 ความหมายของเลข 404</h3>
          <p className="text-gray-400 text-sm">
            ในเลขศาสตร์ เลข 4 หมายถึงความมั่นคง และการสร้างรากฐาน บางทีการหลงทางนี้อาจเป็นสัญญาณให้คุณกลับไปสร้างรากฐานใหม่
          </p>
        </div>
      </div>
    </div>
  )
}

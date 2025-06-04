"use client"

import UnifiedCard from "@/components/ui/UnifiedCard"
import Breadcrumb from "@/components/navigation/Breadcrumb"
import { MessageCircle, Star, Phone, Video } from "lucide-react"
import Image from "next/image"

export default function MonkSupportPage() {
  const monks = [
    {
      id: "luang-por-somchai",
      name: "หลวงพ่อสมชาย",
      temple: "วัดป่าสันติธรรม",
      speciality: "เลขศาสตร์และโหราศาสตร์",
      experience: "25 ปี",
      rating: 4.9,
      consultations: 1247,
      price: "฿299",
      available: true,
      image: "/images/monk-avatar.png",
    },
    {
      id: "luang-por-wisdom",
      name: "หลวงพ่อปัญญา",
      temple: "วัดธรรมกาย",
      speciality: "ดูดวงและแก้กรรม",
      experience: "30 ปี",
      rating: 4.8,
      consultations: 892,
      price: "฿399",
      available: true,
      image: "/images/monk-avatar.png",
    },
    {
      id: "luang-por-blessing",
      name: "หลวงพ่อพร",
      temple: "วัดสุทธิวราราม",
      speciality: "ปลุกเสกและคุ้มครอง",
      experience: "20 ปี",
      rating: 4.7,
      consultations: 654,
      price: "฿249",
      available: false,
      image: "/images/monk-avatar.png",
    },
  ]

  const services = [
    {
      id: "consultation",
      name: "ปรึกษาส่วนตัว",
      description: "ปรึกษาปัญหาชีวิตแบบตัวต่อตัว",
      icon: MessageCircle,
      price: "฿299",
      duration: "30 นาที",
      color: "#10b981",
    },
    {
      id: "blessing",
      name: "พิธีปลุกเสก",
      description: "ปลุกเสกของขลังและยันต์",
      icon: Star,
      price: "฿499",
      duration: "45 นาที",
      color: "#f59e0b",
    },
    {
      id: "phone",
      name: "ปรึกษาทางโทรศัพท์",
      description: "ปรึกษาผ่านโทรศัพท์",
      icon: Phone,
      price: "฿199",
      duration: "20 นาที",
      color: "#ec4899",
    },
    {
      id: "video",
      name: "ปรึกษาผ่านวิดีโอ",
      description: "ปรึกษาผ่าน Video Call",
      icon: Video,
      price: "฿349",
      duration: "30 นาที",
      color: "#8b5cf6",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Breadcrumb className="mb-4" />
          <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">พลังพระเกจิ</h1>
            <p className="text-orange-100">ปรึกษาและขอคำแนะนำจากพระเกจิอาจารย์</p>
          </div>
        </div>

        {/* Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">บริการที่ให้</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <UnifiedCard key={service.id} variant="action" className="group hover:scale-105 transition-transform">
                <div className="p-4 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${service.color}20`, color: service.color }}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                  <div className="text-lg font-bold text-white mb-1">{service.price}</div>
                  <div className="text-xs text-gray-400">{service.duration}</div>
                </div>
              </UnifiedCard>
            ))}
          </div>
        </div>

        {/* Monks */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">พระเกจิอาจารย์</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {monks.map((monk) => (
              <UnifiedCard key={monk.id} variant="info" className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative">
                      <Image
                        src={monk.image || "/placeholder.svg"}
                        alt={monk.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      {monk.available && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{monk.name}</h3>
                      <p className="text-gray-300 text-sm">{monk.temple}</p>
                      <p className="text-gray-400 text-xs">{monk.speciality}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-400">ประสบการณ์</div>
                      <div className="text-white font-semibold">{monk.experience}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">คะแนน</div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-white font-semibold">{monk.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-400">ปรึกษาแล้ว</div>
                      <div className="text-white font-semibold">{monk.consultations.toLocaleString()} ครั้ง</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{monk.price}</div>
                      <div className="text-xs text-gray-400">เริ่มต้น</div>
                    </div>
                  </div>

                  <button
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      monk.available
                        ? "bg-orange-600 hover:bg-orange-700 text-white"
                        : "bg-gray-600 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!monk.available}
                  >
                    {monk.available ? "จองเวลาปรึกษา" : "ไม่ว่าง"}
                  </button>
                </div>
              </UnifiedCard>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <UnifiedCard variant="info">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">วิธีการใช้บริการ</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-white mb-2">เลือกพระเกจิ</h3>
                <p className="text-gray-300 text-sm">เลือกพระเกจิที่เหมาะสม</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-white mb-2">จองเวลา</h3>
                <p className="text-gray-300 text-sm">เลือกวันและเวลาที่สะดวก</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-white mb-2">ชำระเงิน</h3>
                <p className="text-gray-300 text-sm">ชำระค่าบริการล่วงหน้า</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="font-semibold text-white mb-2">ปรึกษา</h3>
                <p className="text-gray-300 text-sm">ปรึกษาตามเวลาที่นัดหมาย</p>
              </div>
            </div>
          </div>
        </UnifiedCard>
      </div>
    </div>
  )
}

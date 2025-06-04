"use client"

import UnifiedCard from "@/components/ui/UnifiedCard"
import Breadcrumb from "@/components/navigation/Breadcrumb"
import { Shield, Star, Zap, Eye, Heart, Crown } from "lucide-react"

export default function YantraPage() {
  const yantraTypes = [
    {
      id: "protection",
      name: "ยันต์ป้องกัน",
      description: "ป้องกันอันตรายและสิ่งชั่วร้าย",
      icon: Shield,
      color: "#10b981",
      power: 95,
      price: "฿299",
    },
    {
      id: "wealth",
      name: "ยันต์เรียกทรัพย์",
      description: "เสริมดวงการเงินและความมั่งคั่ง",
      icon: Star,
      color: "#f59e0b",
      power: 88,
      price: "฿399",
    },
    {
      id: "love",
      name: "ยันต์เสน่ห์",
      description: "เสริมเสน่ห์และความน่ารัก",
      icon: Heart,
      color: "#ec4899",
      power: 92,
      price: "฿349",
    },
    {
      id: "power",
      name: "ยันต์อำนาจ",
      description: "เสริมอำนาจและความเป็นผู้นำ",
      icon: Crown,
      color: "#8b5cf6",
      power: 90,
      price: "฿449",
    },
    {
      id: "wisdom",
      name: "ยันต์ปัญญา",
      description: "เสริมสติปัญญาและความฉลาด",
      icon: Eye,
      color: "#06b6d4",
      power: 85,
      price: "฿279",
    },
    {
      id: "energy",
      name: "ยันต์พลังงาน",
      description: "เสริมพลังงานและความแข็งแรง",
      icon: Zap,
      color: "#f97316",
      power: 87,
      price: "฿329",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Breadcrumb className="mb-4" />
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">ยันต์หนุนดวง</h1>
            <p className="text-purple-100">เลือกยันต์ที่เหมาะสมเพื่อเสริมดวงชะตาของคุณ</p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <UnifiedCard variant="number" className="bg-gradient-to-r from-green-500 to-emerald-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">6</div>
              <div className="text-green-100">ยันต์ทั้งหมด</div>
            </div>
          </UnifiedCard>

          <UnifiedCard variant="number" className="bg-gradient-to-r from-blue-500 to-cyan-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">91%</div>
              <div className="text-blue-100">ประสิทธิภาพเฉลี่ย</div>
            </div>
          </UnifiedCard>

          <UnifiedCard variant="number" className="bg-gradient-to-r from-purple-500 to-pink-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1,247</div>
              <div className="text-purple-100">ผู้ใช้ที่ได้รับผล</div>
            </div>
          </UnifiedCard>
        </div>

        {/* Yantra Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {yantraTypes.map((yantra) => (
            <UnifiedCard key={yantra.id} variant="action" className="group hover:scale-105 transition-transform">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: `${yantra.color}20`, color: yantra.color }}
                  >
                    <yantra.icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: yantra.color }}>
                      {yantra.power}%
                    </div>
                    <div className="text-xs text-gray-400">ประสิทธิภาพ</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{yantra.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{yantra.description}</p>

                {/* Power Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>พลังยันต์</span>
                    <span>{yantra.power}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${yantra.power}%`,
                        backgroundColor: yantra.color,
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{yantra.price}</div>
                  <button
                    className="px-4 py-2 rounded-lg text-white font-medium transition-colors"
                    style={{ backgroundColor: yantra.color }}
                  >
                    เลือกยันต์
                  </button>
                </div>
              </div>
            </UnifiedCard>
          ))}
        </div>

        {/* How it Works */}
        <UnifiedCard variant="info" className="mt-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">วิธีการใช้ยันต์</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-white mb-2">เลือกยันต์</h3>
                <p className="text-gray-300 text-sm">เลือกยันต์ที่เหมาะสมกับความต้องการ</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-white mb-2">ปลุกเสก</h3>
                <p className="text-gray-300 text-sm">พระเกจิปลุกเสกด้วยมนต์ศักดิ์สิทธิ์</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-white mb-2">ใช้งาน</h3>
                <p className="text-gray-300 text-sm">นำติดตัวหรือวางในที่เหมาะสม</p>
              </div>
            </div>
          </div>
        </UnifiedCard>
      </div>
    </div>
  )
}

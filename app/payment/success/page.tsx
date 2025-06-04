"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Mail, Calendar, Star, Gift, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PaymentSuccessPage() {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-500/30 text-center">
            <CardContent className="p-8 space-y-6">
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </motion.div>

              {/* Success Message */}
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">ชำระเงินสำเร็จ!</h1>
                <p className="text-green-200">ขอบคุณสำหรับการสั่งซื้อ รายงานของคุณพร้อมแล้ว</p>
              </div>

              {/* Order Details */}
              <div className="bg-black/30 rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">หมายเลขคำสั่งซื้อ:</span>
                  <Badge variant="secondary">#NR-2025-001234</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">แพ็คเกจ:</span>
                  <span className="text-white font-semibold">รายงานเลขศาสตร์ + ยันต์หนุนดวง</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">ราคา:</span>
                  <span className="text-green-400 font-bold">฿1,299</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">วันที่สั่งซื้อ:</span>
                  <span className="text-white">27 พฤษภาคม 2025</span>
                </div>
              </div>

              {/* What's Included */}
              <div className="text-left space-y-3">
                <h3 className="text-xl font-semibold text-white text-center">สิ่งที่คุณได้รับ:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 bg-black/20 p-3 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-white">รายงานเลขศาสตร์ครบถ้วน</span>
                  </div>
                  <div className="flex items-center gap-3 bg-black/20 p-3 rounded-lg">
                    <Gift className="w-5 h-5 text-purple-400" />
                    <span className="text-white">ยันต์หนุนดวงส่วนตัว</span>
                  </div>
                  <div className="flex items-center gap-3 bg-black/20 p-3 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span className="text-white">พยากรณ์ 12 เดือน</span>
                  </div>
                  <div className="flex items-center gap-3 bg-black/20 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-green-400" />
                    <span className="text-white">การสนับสนุนตลอดชีพ</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    <Download className="w-4 h-4 mr-2" />
                    ดาวน์โหลดรายงาน
                  </Button>
                  <Button variant="outline" className="flex-1 border-green-500 text-green-400 hover:bg-green-500/10">
                    <Mail className="w-4 h-4 mr-2" />
                    ส่งทางอีเมล
                  </Button>
                </div>

                <Link href="/dashboard">
                  <Button variant="ghost" className="w-full text-green-400 hover:text-green-300">
                    ไปที่แดชบอร์ด
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Auto Redirect */}
              {countdown > 0 && <p className="text-sm text-gray-400">จะเปลี่ยนหน้าไปยังแดชบอร์ดอัตโนมัติใน {countdown} วินาที</p>}
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            หากมีคำถามหรือต้องการความช่วยเหลือ กรุณาติดต่อ{" "}
            <Link href="/help" className="text-green-400 hover:underline">
              ศูนย์ช่วยเหลือ
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

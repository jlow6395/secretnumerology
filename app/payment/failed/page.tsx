"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { XCircle, RefreshCw, ArrowLeft, CreditCard, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PaymentFailedPage() {
  const errorReasons = [
    "ยอดเงินในบัญชีไม่เพียงพอ",
    "ข้อมูลบัตรเครดิตไม่ถูกต้อง",
    "บัตรหมดอายุหรือถูกปิดการใช้งาน",
    "ธนาคารปฏิเสธการทำรายการ",
    "ปัญหาการเชื่อมต่อระหว่างการชำระเงิน",
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-red-900/50 to-orange-900/50 border-red-500/30 text-center">
            <CardContent className="p-8 space-y-6">
              {/* Error Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                  <XCircle className="w-12 h-12 text-white" />
                </div>
              </motion.div>

              {/* Error Message */}
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">การชำระเงินไม่สำเร็จ</h1>
                <p className="text-red-200">เกิดข้อผิดพลาดในการประมวลผลการชำระเงิน</p>
              </div>

              {/* Transaction Details */}
              <div className="bg-black/30 rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">หมายเลขอ้างอิง:</span>
                  <Badge variant="destructive">#ERR-2025-001234</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">เวลาที่เกิดข้อผิดพลาด:</span>
                  <span className="text-white">27 พฤษภาคม 2025, 14:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">จำนวนเงิน:</span>
                  <span className="text-white">฿1,299</span>
                </div>
              </div>

              {/* Possible Reasons */}
              <div className="text-left space-y-3">
                <h3 className="text-xl font-semibold text-white text-center">สาเหตุที่อาจเป็นไปได้:</h3>
                <div className="space-y-2">
                  {errorReasons.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-red-600 hover:bg-red-700">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    ลองชำระเงินอีกครั้ง
                  </Button>
                  <Button variant="outline" className="flex-1 border-red-500 text-red-400 hover:bg-red-500/10">
                    <CreditCard className="w-4 h-4 mr-2" />
                    เปลี่ยนวิธีชำระเงิน
                  </Button>
                </div>

                <Link href="/wizard/step9">
                  <Button variant="ghost" className="w-full text-red-400 hover:text-red-300">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    กลับไปเลือกแพ็คเกจ
                  </Button>
                </Link>
              </div>

              {/* Help Section */}
              <div className="bg-black/20 rounded-lg p-4 space-y-3">
                <h4 className="text-white font-semibold">ต้องการความช่วยเหลือ?</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    โทร 02-123-4567
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    support@secretnumerology.com
                  </Button>
                </div>
              </div>
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
          <p className="text-gray-400 text-sm">การชำระเงินของคุณปลอดภัยด้วยการเข้ารหัส SSL 256-bit</p>
        </motion.div>
      </div>
    </div>
  )
}

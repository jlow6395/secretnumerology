"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Shield } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 lg:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับ
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">ข้อกำหนดและเงื่อนไข</h1>
            <p className="text-gray-400 mt-1">อัพเดทล่าสุด: 27 พฤษภาคม 2025</p>
          </div>
        </div>

        {/* Quick Navigation */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileText className="w-5 h-5" />
              สารบัญ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="#terms" className="text-purple-400 hover:text-purple-300 text-sm">
                1. ข้อกำหนดการใช้งาน
              </a>
              <a href="#privacy" className="text-purple-400 hover:text-purple-300 text-sm">
                2. นโยบายความเป็นส่วนตัว
              </a>
              <a href="#payment" className="text-purple-400 hover:text-purple-300 text-sm">
                3. เงื่อนไขการชำระเงิน
              </a>
              <a href="#refund" className="text-purple-400 hover:text-purple-300 text-sm">
                4. นโยบายการคืนเงิน
              </a>
              <a href="#intellectual" className="text-purple-400 hover:text-purple-300 text-sm">
                5. ทรัพย์สินทางปัญญา
              </a>
              <a href="#contact" className="text-purple-400 hover:text-purple-300 text-sm">
                6. ติดต่อเรา
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Terms Content */}
        <div className="space-y-6">
          {/* Section 1 */}
          <Card id="terms" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">1. ข้อกำหนดการใช้งาน</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p>การใช้งานเว็บไซต์ SecretNumerology.com ถือว่าคุณยอมรับข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในเอกสารนี้</p>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">1.1 การยอมรับข้อกำหนด</h4>
                <p className="text-sm">ด้วยการเข้าถึงและใช้งานบริการของเรา คุณตกลงที่จะปฏิบัติตามข้อกำหนดเหล่านี้</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">1.2 การใช้งานที่เหมาะสม</h4>
                <p className="text-sm">คุณตกลงที่จะใช้บริการเพื่อวัตถุประสงค์ที่ถูกต้องตามกฎหมายเท่านั้น</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">1.3 ข้อจำกัดการใช้งาน</h4>
                <p className="text-sm">ห้ามใช้บริการเพื่อกิจกรรมที่ผิดกฎหมาย หรือละเมิดสิทธิของผู้อื่น</p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card id="privacy" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="w-5 h-5" />
                2. นโยบายความเป็นส่วนตัว
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p>เราให้ความสำคัญกับความเป็นส่วนตัวของข้อมูลของคุณ และมีมาตรการรักษาความปลอดภัยที่เข้มงวด</p>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">2.1 การเก็บรวบรวมข้อมูล</h4>
                <p className="text-sm">เราเก็บรวบรวมข้อมูลที่จำเป็นสำหรับการให้บริการเลขศาสตร์เท่านั้น</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">2.2 การใช้ข้อมูล</h4>
                <p className="text-sm">ข้อมูลของคุณจะถูกใช้เพื่อการคำนวณเลขศาสตร์และปรับปรุงบริการเท่านั้น</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">2.3 การแบ่งปันข้อมูล</h4>
                <p className="text-sm">เราจะไม่แบ่งปันข้อมูลส่วนตัวของคุณกับบุคคลที่สามโดยไม่ได้รับความยินยอม</p>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card id="payment" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">3. เงื่อนไขการชำระเงิน</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="space-y-2">
                <h4 className="text-white font-semibold">3.1 วิธีการชำระเงิน</h4>
                <p className="text-sm">เรายอมรับการชำระเงินผ่านบัตรเครดิต, บัตรเดบิต, และ QR Code</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">3.2 ความปลอดภัย</h4>
                <p className="text-sm">การชำระเงินทั้งหมดได้รับการปกป้องด้วยการเข้ารหัส SSL 256-bit</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">3.3 การยืนยันการชำระเงิน</h4>
                <p className="text-sm">คุณจะได้รับอีเมลยืนยันการชำระเงินภายใน 24 ชั่วโมง</p>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card id="refund" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">4. นโยบายการคืนเงิน</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">การรับประกันความพึงพอใจ 100%</h4>
                <p className="text-sm">หากคุณไม่พึงพอใจกับรายงานของเรา เราจะคืนเงินให้ 100% ภายใน 30 วัน</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">4.1 เงื่อนไขการคืนเงิน</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>ต้องขอคืนเงินภายใน 30 วันหลังการซื้อ</li>
                  <li>ต้องระบุเหตุผลที่ไม่พึงพอใจ</li>
                  <li>ไม่สามารถขอคืนเงินหลังจากดาวน์โหลดรายงานแล้ว 7 วัน</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card id="intellectual" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">5. ทรัพย์สินทางปัญญา</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p className="text-sm">เนื้อหา, ดิไซน์, โลโก้, และซอฟต์แวร์ทั้งหมดในเว็บไซต์นี้เป็นทรัพย์สินของ SecretNumerology.com</p>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">5.1 ลิขสิทธิ์</h4>
                <p className="text-sm">ห้ามคัดลอก, แจกจ่าย, หรือดัดแปลงเนื้อหาโดยไม่ได้รับอนุญาต</p>
              </div>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card id="contact" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">6. ติดต่อเรา</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p>หากมีคำถามเกี่ยวกับข้อกำหนดเหล่านี้ กรุณาติดต่อเราผ่าน:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">อีเมล</h4>
                  <p className="text-sm">support@secretnumerology.com</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">โทรศัพท์</h4>
                  <p className="text-sm">02-123-4567 (จันทร์-ศุกร์ 9:00-18:00)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30">
          <CardContent className="p-6 text-center">
            <p className="text-white font-semibold mb-2">ข้อกำหนดนี้มีผลบังคับใช้ตั้งแต่วันที่ 27 พฤษภาคม 2025</p>
            <p className="text-gray-300 text-sm">เราขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดเหล่านี้โดยไม่ต้องแจ้งให้ทราบล่วงหน้า</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

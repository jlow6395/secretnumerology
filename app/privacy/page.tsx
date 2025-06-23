"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, AlertTriangle, Phone, Mail, MapPin, Calendar, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">นโยบายความเป็นส่วนตัว</h1>
              <p className="text-gray-400">Privacy Policy - Secret Numerology</p>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            บริษัท ซีเครท นิวเมอโรโลยี จำกัด ให้ความสำคัญกับความเป็นส่วนตัวและการคุ้มครองข้อมูลส่วนบุคคลของลูกค้า
            เอกสารนี้อธิบายวิธีการเก็บรวบรวม ใช้ และปกป้องข้อมูลของคุณ
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">

          {/* ข้อมูลบริษัท */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-400">
                <FileText className="h-6 w-6" />
                <span>ข้อมูลบริษัท</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">ข้อมูลการติดต่อ</h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-blue-400" />
                      <span>123/45 อาคารเทคโนโลยี ถนนสุขุมวิท กรุงเทพฯ 10110</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-400" />
                      <span>083-823-4661</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-blue-400" />
                      <span>support@secretnumerology.com</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">ข้อมูลนิติบุคคล</h4>
                  <div className="space-y-2 text-gray-300">
                    <p><strong>บริษัท:</strong> ซีเครท นิวเมอโรโลยี จำกัด</p>
                    <p><strong>เลขทะเบียน:</strong> 0105564001234</p>
                    <p><strong>วันที่มีผล:</strong> 1 มกราคม 2024</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ข้อมูลที่เก็บรวบรวม */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-green-400">
                <Database className="h-6 w-6" />
                <span>ข้อมูลที่เราเก็บรวบรวม</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-4">ข้อมูลส่วนบุคคล</h4>
                  <div className="space-y-3">
                    {[
                      "ชื่อ-นามสกุล",
                      "วันเดือนปีเกิด",
                      "เวลาเกิด (ถ้ามี)",
                      "สถานที่เกิด (ถ้ามี)",
                      "เพศ",
                      "หมายเลขโทรศัพท์",
                      "ที่อยู่อีเมล"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">ข้อมูลการใช้งาน</h4>
                  <div className="space-y-3">
                    {[
                      "ประวัติการเข้าใช้งาน",
                      "ข้อมูลการชำระเงิน",
                      "การตั้งค่าบัญชีผู้ใช้",
                      "ประวัติการคำนวณ",
                      "ข้อมูลการโต้ตอบ",
                      "คุกกี้และข้อมูลเทคนิค"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* วัตถุประสงค์ */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-purple-400">
                <Eye className="h-6 w-6" />
                <span>วัตถุประสงค์ในการใช้ข้อมูล</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    title: "การให้บริการเลขศาสตร์",
                    items: ["คำนวณและวิเคราะห์เลขศาสตร์", "สร้างรายงานส่วนบุคคล", "ให้คำแนะนำและข้อมูลเชิงลึก"]
                  },
                  {
                    title: "การจัดการบัญชีและการชำระเงิน",
                    items: ["ยืนยันตัวตนและการสมัครสมาชิก", "ประมวลผลการชำระเงิน", "ส่งใบเสร็จและเอกสารทางการเงิน"]
                  },
                  {
                    title: "การปรับปรุงบริการ",
                    items: ["วิเคราะห์พฤติกรรมการใช้งาน", "พัฒนาฟีเจอร์ใหม่", "ปรับปรุงความแม่นยำของระบบ"]
                  },
                  {
                    title: "การสื่อสารและการตลาด",
                    items: ["ส่งข้อมูลข่าวสารและโปรโมชั่น", "แจ้งการอัปเดตระบบ", "ให้การสนับสนุนลูกค้า"]
                  }
                ].map((section, index) => (
                  <div key={index} className="border-l-4 border-purple-400 pl-6">
                    <h4 className="font-semibold text-white mb-3">{section.title}</h4>
                    <div className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ความปลอดภัย */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-amber-400">
                <Lock className="h-6 w-6" />
                <span>มาตรการรักษาความปลอดภัย</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-4">มาตรการทางเทคนิค</h4>
                  <div className="space-y-3">
                    {[
                      "เข้ารหัสข้อมูลด้วย SSL 256-bit",
                      "ระบบยืนยันตัวตนแบบสองขั้นตอน",
                      "การสำรองข้อมูลอัตโนมัติ",
                      "ระบบตรวจจับการเข้าถึงผิดปกติ",
                      "อัปเดตระบบรักษาความปลอดภัยสม่ำเสมอ"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Lock className="h-4 w-4 text-amber-400" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">มาตรการทางการบริหาร</h4>
                  <div className="space-y-3">
                    {[
                      "การอบรมพนักงานเรื่องความปลอดภัย",
                      "การควบคุมการเข้าถึงข้อมูล",
                      "นโยบายการใช้รหัสผ่านที่เข้มงวด",
                      "การตรวจสอบภายในอย่างสม่ำเสมอ",
                      "แผนรับมือเหตุการณ์ฉุกเฉิน"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-amber-400" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* สิทธิของเจ้าของข้อมูล */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-cyan-400">
                <CheckCircle className="h-6 w-6" />
                <span>สิทธิของเจ้าของข้อมูล</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-300 mb-6">
                  ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 คุณมีสิทธิในการ:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "สิทธิในการเข้าถึง", desc: "ขอดูข้อมูลส่วนบุคคลที่เราเก็บรักษา" },
                    { title: "สิทธิในการแก้ไข", desc: "ขอแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่สมบูรณ์" },
                    { title: "สิทธิในการลบ", desc: "ขอลบข้อมูลส่วนบุคคลในกรณีที่กำหนด" },
                    { title: "สิทธิในการคัดค้าน", desc: "คัดค้านการประมวลผลข้อมูลในกรณีที่กำหนด" },
                    { title: "สิทธิในการเคลื่อนย้าย", desc: "ขอรับข้อมูลในรูปแบบที่อ่านได้ด้วยเครื่อง" },
                    { title: "สิทธิในการถอนความยินยอม", desc: "ถอนความยินยอมในการประมวลผลข้อมูล" }
                  ].map((right, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">{right.title}</h4>
                      <p className="text-gray-400 text-sm">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* การติดต่อ */}
          <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-400">
                <Mail className="h-6 w-6" />
                <span>การติดต่อเรื่องความเป็นส่วนตัว</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-300">
                  หากมีข้อสงสัยหรือต้องการใช้สิทธิเกี่ยวกับข้อมูลส่วนบุคคล สามารถติดต่อเราได้ที่:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <Mail className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <p className="font-semibold text-white">อีเมล</p>
                    <p className="text-gray-400 text-sm">support@secretnumerology.com</p>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <Phone className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <p className="font-semibold text-white">โทรศัพท์</p>
                    <p className="text-gray-400 text-sm">083-823-4661</p>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <Calendar className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <p className="font-semibold text-white">เวลาทำการ</p>
                    <p className="text-gray-400 text-sm">จันทร์-ศุกร์ 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* การอัปเดต */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-bold text-white mb-4">การอัปเดตนโยบาย</h3>
              <p className="text-gray-300 mb-6">
                เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว และจะแจ้งให้ทราบผ่านเว็บไซต์หรืออีเมล
              </p>
              <p className="text-gray-500 text-sm">
                อัปเดตล่าสุด: 1 มกราคม 2024 | เริ่มมีผลบังคับใช้: 1 มกราคม 2024
              </p>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/">
              <Button variant="outline" className="px-8 py-3">
                กลับหน้าหลัก
              </Button>
            </Link>
            <Link href="/terms">
              <Button className="px-8 py-3 bg-blue-600 hover:bg-blue-700">
                ข้อกำหนดการใช้งาน
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

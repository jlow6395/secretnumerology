"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-bold text-white">นโยบายความเป็นส่วนตัว</h1>
            <p className="text-gray-400 mt-1">อัพเดทล่าสุด: 27 พฤษภาคม 2025</p>
          </div>
        </div>

        {/* Summary Card */}
        <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="w-6 h-6" />
              สรุปสำคัญ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">ข้อมูลปลอดภัย</p>
                  <p className="text-gray-300 text-sm">เข้ารหัส SSL 256-bit</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">ไม่แบ่งปันข้อมูล</p>
                  <p className="text-gray-300 text-sm">กับบุคคลที่สาม</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">เก็บข้อมูลขั้นต่ำ</p>
                  <p className="text-gray-300 text-sm">เฉพาะที่จำเป็น</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <UserCheck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">ควบคุมได้</p>
                  <p className="text-gray-300 text-sm">ลบข้อมูลได้ตลอดเวลา</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Sections */}
        <div className="space-y-6">
          {/* Data Collection */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Database className="w-5 h-5" />
                ข้อมูลที่เราเก็บรวบรวม
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="space-y-3">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">ข้อมูลส่วนตัว</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>ชื่อ-นามสกุล</li>
                    <li>วันเกิด (สำหรับการคำนวณเลขศาสตร์)</li>
                    <li>อีเมล (สำหรับการติดต่อ)</li>
                    <li>เบอร์โทรศัพท์ (ถ้าระบุ)</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">ข้อมูลการใช้งาน</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>IP Address และข้อมูลอุปกรณ์</li>
                    <li>ประวัติการเข้าชม</li>
                    <li>การตั้งค่าและความชอบ</li>
                    <li>ข้อมูลการชำระเงิน (เข้ารหัส)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Eye className="w-5 h-5" />
                การใช้ข้อมูลของคุณ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Badge className="bg-green-500">วัตถุประสงค์หลัก</Badge>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>คำนวณและสร้างรายงานเลขศาสตร์</li>
                    <li>ส่งรายงานและการอัพเดท</li>
                    <li>ให้บริการลูกค้าและการสนับสนุน</li>
                    <li>ปรับปรุงคุณภาพบริการ</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-blue-500">วัตถุประสงค์รอง</Badge>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>วิเคราะห์การใช้งานเว็บไซต์</li>
                    <li>ป้องกันการฉ้อโกงและการใช้งานผิด</li>
                    <li>ส่งข่าวสารและโปรโมชั่น (ถ้ายินยอม)</li>
                    <li>ปฏิบัติตามกฎหมาย</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Lock className="w-5 h-5" />
                ความปลอดภัยของข้อมูล
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">มาตรการรักษาความปลอดภัย</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>การเข้ารหัส SSL/TLS 256-bit</li>
                    <li>ระบบ Firewall และ Anti-malware</li>
                    <li>การสำรองข้อมูลอัตโนมัติ</li>
                    <li>การตรวจสอบความปลอดภัยสม่ำเสมอ</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">การควบคุมการเข้าถึง</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>เฉพาะพนักงานที่ได้รับอนุญาต</li>
                    <li>การยืนยันตัวตนแบบ 2 ขั้นตอน</li>
                    <li>บันทึกการเข้าถึงข้อมูล</li>
                    <li>การฝึกอบรมด้านความปลอดภัย</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <UserCheck className="w-5 h-5" />
                สิทธิของคุณ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">สิทธิในการเข้าถึง</h4>
                      <p className="text-sm">ขอดูข้อมูลส่วนตัวที่เราเก็บไว้</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">สิทธิในการแก้ไข</h4>
                      <p className="text-sm">ขอแก้ไขข้อมูลที่ไม่ถูกต้อง</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">สิทธิในการลบ</h4>
                      <p className="text-sm">ขอลบข้อมูลส่วนตัวทั้งหมด</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">สิทธิในการพกพา</h4>
                      <p className="text-sm">ขอข้อมูลในรูปแบบที่อ่านได้</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">สิทธิในการคัดค้าน</h4>
                      <p className="text-sm">คัดค้านการใช้ข้อมูลเพื่อการตลาด</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">สิทธิในการร้องเรียน</h4>
                      <p className="text-sm">ร้องเรียนต่อหน่วยงานกำกับดูแล</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Privacy */}
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                ติดต่อเรื่องความเป็นส่วนตัว
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว หรือต้องการใช้สิทธิของคุณ</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">เจ้าหน้าที่คุมครองข้อมูล</h4>
                  <p className="text-sm text-gray-300">privacy@secretnumerology.com</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">ที่อยู่</h4>
                  <p className="text-sm text-gray-300">
                    123 ถนนสุขุมวิท แขวงคลองตัน
                    <br />
                    เขตวัฒนา กรุงเทพฯ 10110
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button className="bg-purple-600 hover:bg-purple-700">ติดต่อเจ้าหน้าที่</Button>
                <Link href="/help">
                  <Button variant="outline" className="border-purple-500 text-purple-400">
                    ศูนย์ช่วยเหลือ
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

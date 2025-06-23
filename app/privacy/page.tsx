"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, AlertTriangle, Phone, Mail, MapPin } from "lucide-react"
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
            <p className="text-gray-400 mt-1">อัพเดทล่าสุด: 23 มกราคม 2025 | ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562</p>
          </div>
        </div>

        {/* PDPA Notice */}
        <Card className="bg-gradient-to-r from-amber-900/50 to-orange-900/50 border-amber-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="w-6 h-6" />
              ประกาศเรื่องการคุ้มครองข้อมูลส่วนบุคคล (PDPA)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray-300">
              บริษัท ซีเครท นูเมอโรโลจี จำกัด ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของท่าน 
              เราจึงจัดทำนโยบายนี้เพื่อแจ้งให้ท่านทราบถึงการเก็บ ใช้ เปิดเผย และคุ้มครองข้อมูลส่วนบุคคลของท่าน 
              ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
            </p>
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

        {/* Company Information */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              ข้อมูลผู้ควบคุมข้อมูลส่วนบุคคล
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold mb-2">SecretNumerology</h4>
                  <p className="text-sm">ผู้ให้บริการ: นาย สัญญา มาร์ท</p>
                  <p className="text-sm">เว็บไซต์: https://www.secretnumerology.com</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">ติดต่อเจ้าหน้าที่คุ้มครองข้อมูล (DPO)</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">support@secretnumerology.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">083-823-4661</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold mb-2">วัตถุประสงค์หลักของการประกอบธุรกิจ</h4>
                  <p className="text-sm">ให้บริการวิเคราะห์และคำนวณเลขศาสตร์ ให้คำปรึกษาด้านตัวเลขมงคล และบริการที่เกี่ยวข้อง</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">ผู้รับผิดชอบ</h4>
                  <p className="text-sm">นาย สัญญา มาร์ท (Sanya Mart)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Collection */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Database className="w-5 h-5" />
              ข้อมูลส่วนบุคคลที่เราเก็บรวบรวม
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">1. ข้อมูลส่วนบุคคลทั่วไป</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>ชื่อ-นามสกุล</li>
                  <li>วันเดือนปีเกิด และเวลาเกิด (สำหรับการคำนวณเลขศาสตร์)</li>
                  <li>สถานที่เกิด</li>
                  <li>เพศ</li>
                  <li>หมายเลขโทรศัพท์</li>
                  <li>ที่อยู่อีเมล</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">2. ข้อมูลการใช้งานเว็บไซต์</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>IP Address และข้อมูลเครื่องคอมพิวเตอร์</li>
                  <li>ประวัติการเข้าชมเว็บไซต์</li>
                  <li>Cookies และ Web Beacons</li>
                  <li>การตั้งค่าและความชอบส่วนบุคคล</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">3. ข้อมูลทางการเงิน</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>ข้อมูลการชำระเงิน (เข้ารหัสผ่าน Payment Gateway)</li>
                  <li>ประวัติการสั่งซื้อและการใช้บริการ</li>
                  <li>หมายเลขใบเสร็จและใบกำกับภาษี</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">4. ข้อมูลจาก LINE Platform</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>LINE User ID</li>
                  <li>ชื่อที่แสดงใน LINE</li>
                  <li>รูปโปรไฟล์ LINE</li>
                  <li>ที่อยู่อีเมลที่ลงทะเบียนกับ LINE (หากอนุญาต)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Basis */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="w-5 h-5" />
              ฐานทางกฎหมายในการประมวลผลข้อมูล
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">ความยินยอม (Consent)</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>การสมัครสมาชิกและใช้บริการ</li>
                  <li>การรับข่าวสารและโปรโมชั่น</li>
                  <li>การใช้ Cookies</li>
                </ul>
              </div>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-400 font-semibold mb-2">การปฏิบัติตามสัญญา (Contract)</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>การให้บริการเลขศาสตร์</li>
                  <li>การประมวลผลการชำระเงิน</li>
                  <li>การส่งมอบรายงาน</li>
                </ul>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold mb-2">ประโยชน์อันชอบธรรม (Legitimate Interest)</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>การป้องกันการฉ้อโกง</li>
                  <li>การปรับปรุงบริการ</li>
                  <li>การรักษาความปลอดภัย</li>
                </ul>
              </div>
              <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                <h4 className="text-orange-400 font-semibold mb-2">การปฏิบัติตามกฎหมาย (Legal Obligation)</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>การออกใบกำกับภาษี</li>
                  <li>การรายงานทางภาษี</li>
                  <li>การปฏิบัติตามคำสั่งศาล</li>
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
              วัตถุประสงค์ในการใช้ข้อมูลส่วนบุคคล
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Badge className="bg-green-500">วัตถุประสงค์หลัก</Badge>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>คำนวณและสร้างรายงานเลขศาสตร์ส่วนบุคคล</li>
                  <li>ให้บริการปรึกษาด้านตัวเลขมงคล</li>
                  <li>ส่งมอบรายงานและผลการวิเคราะห์</li>
                  <li>ให้บริการลูกค้าและการสนับสนุนทางเทคนิค</li>
                  <li>ประมวลผลการชำระเงินและออกใบเสร็จ</li>
                </ul>
              </div>
              <div className="space-y-2">
                <Badge className="bg-blue-500">วัตถุประสงค์รอง</Badge>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>วิเคราะห์การใช้งานเว็บไซต์และปรับปรุงบริการ</li>
                  <li>ป้องกันการฉ้อโกงและการใช้งานที่ผิดปกติ</li>
                  <li>ส่งข่าวสารและโปรโมชั่น (เฉพาะที่ได้รับความยินยอม)</li>
                  <li>ปฏิบัติตามกฎหมายและข้อบังคับที่เกี่ยวข้อง</li>
                  <li>การวิจัยและพัฒนาบริการใหม่ (ข้อมูลที่ไม่สามารถระบุตัวตน)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Database className="w-5 h-5" />
              ระยะเวลาการเก็บรักษาข้อมูล
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">ข้อมูลบัญชีผู้ใช้</h4>
                <p className="text-sm">เก็บไว้ตลอดระยะเวลาที่มีการใช้บริการ และอีก 3 ปีหลังจากปิดบัญชี เพื่อการปฏิบัติตามกฎหมายภาษี</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">ข้อมูลการทำธุรกรรม</h4>
                <p className="text-sm">เก็บไว้ 5 ปี ตามพระราชบัญญัติการบัญชี พ.ศ. 2543</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">ข้อมูล Log และการใช้งาน</h4>
                <p className="text-sm">เก็บไว้ 1 ปี เพื่อการรักษาความปลอดภัยและแก้ไขปัญหาทางเทคนิค</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">ข้อมูล Cookies</h4>
                <p className="text-sm">เก็บไว้ตามระยะเวลาที่กำหนดในแต่ละประเภท Cookie (1 เดือน ถึง 2 ปี)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Lock className="w-5 h-5" />
              มาตรการรักษาความปลอดภัยของข้อมูล
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">มาตรการทางเทคนิค</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>การเข้ารหัส SSL/TLS 256-bit</li>
                  <li>ระบบ Firewall และ Anti-malware</li>
                  <li>การสำรองข้อมูลอัตโนมัติทุกวัน</li>
                  <li>การตรวจสอบช่องโหว่ความปลอดภัยสม่ำเสมอ</li>
                  <li>ระบบ Intrusion Detection System (IDS)</li>
                </ul>
              </div>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-400 font-semibold mb-2">มาตรการทางการบริหาร</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>การควบคุมการเข้าถึงข้อมูลตามหน้าที่</li>
                  <li>การยืนยันตัวตนแบบ 2 ขั้นตอน (2FA)</li>
                  <li>การบันทึกและตรวจสอบการเข้าถึงข้อมูล</li>
                  <li>การฝึกอบรมพนักงานด้านความปลอดภัย</li>
                  <li>การทำลายข้อมูลอย่างปลอดภัยเมื่อหมดความจำเป็น</li>
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
              สิทธิของเจ้าของข้อมูลส่วนบุคคล
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <p className="text-sm">ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 ท่านมีสิทธิดังต่อไปนี้:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">สิทธิในการเข้าถึงข้อมูล</h4>
                    <p className="text-sm">ขอดูข้อมูลส่วนบุคคลที่เราเก็บรักษาไว้</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">สิทธิในการแก้ไขข้อมูล</h4>
                    <p className="text-sm">ขอแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่เป็นปัจจุบัน</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">สิทธิในการลบข้อมูล</h4>
                    <p className="text-sm">ขอลบข้อมูลส่วนบุคคลในกรณีที่กฎหมายอนุญาต</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">สิทธิในการพกพาข้อมูล</h4>
                    <p className="text-sm">ขอรับข้อมูลในรูปแบบที่อ่านได้ด้วยเครื่อง</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">สิทธิในการคัดค้าน</h4>
                    <p className="text-sm">คัดค้านการประมวลผลข้อมูลเพื่อการตลาด</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">สิทธิในการจำกัดการประมวลผล</h4>
                    <p className="text-sm">ขอจำกัดการใช้ข้อมูลในบางกรณี</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">7</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">สิทธิในการถอนความยินยอม</h4>
                    <p className="text-sm">ถอนความยินยอมได้ตลอดเวลา</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">8</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">สิทธิในการร้องเรียน</h4>
                    <p className="text-sm">ร้องเรียนต่อสำนักงาน กคส.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
              <h4 className="text-amber-400 font-semibold mb-2">วิธีการใช้สิทธิ</h4>
              <p className="text-sm">ท่านสามารถใช้สิทธิได้โดยติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเรา เราจะดำเนินการภายใน 30 วัน</p>
            </div>
          </CardContent>
        </Card>

        {/* Contact for Privacy */}
        <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              ติดต่อเรื่องการคุ้มครองข้อมูลส่วนบุคคล
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">หากมีคำถามเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคล หรือต้องการใช้สิทธิของท่าน</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               <div className="space-y-3">
                   <h4 className="text-white font-semibold">เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO)</h4>
                   <div className="space-y-2">
                     <div className="flex items-center gap-2">
                       <Mail className="w-4 h-4 text-purple-400" />
                       <span className="text-sm">support@secretnumerology.com</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <Phone className="w-4 h-4 text-purple-400" />
                       <span className="text-sm">083-823-4661</span>
                     </div>
                   </div>
                 </div>
              <div className="space-y-3">
                <h4 className="text-white font-semibold">สำนักงาน กคส.</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">02-142-1033</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">www.pdpc.go.th</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="bg-purple-600 hover:bg-purple-700">ติดต่อเจ้าหน้าที่ DPO</Button>
              <Link href="/help">
                <Button variant="outline" className="border-purple-500 text-purple-400">
                  ศูนย์ช่วยเหลือ
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <Card className="bg-gradient-to-r from-gray-900/80 to-black/80 border-gray-700">
          <CardContent className="p-6 text-center">
            <p className="text-white font-semibold mb-2">นโยบายนี้มีผลบังคับใช้ตั้งแต่วันที่ 23 มกราคม 2025</p>
            <p className="text-gray-300 text-sm mb-2">
              เราขอสงวนสิทธิ์ในการแก้ไขนโยบายนี้ โดยจะแจ้งให้ท่านทราบล่วงหน้า 30 วัน
            </p>
            <p className="text-gray-400 text-xs">
              อัพเดทล่าสุด: 23 มกราคม 2025 | เวอร์ชัน 2.0 | ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Shield, CreditCard, RefreshCw, Copyright, Phone, Mail, MapPin } from "lucide-react"
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
            <h1 className="text-3xl font-bold text-white">ข้อกำหนดและเงื่อนไขการใช้บริการ</h1>
            <p className="text-gray-400 mt-1">อัพเดทล่าสุด: 23 มกราคม 2025 | ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562</p>
          </div>
        </div>

        {/* Company Information */}
        <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileText className="w-6 h-6" />
              ข้อมูลผู้ให้บริการ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-2">SecretNumerology</h4>
                <p className="text-gray-300 text-sm">ผู้ให้บริการ: นาย สัญญา มาร์ท</p>
                <p className="text-gray-300 text-sm">เว็บไซต์: https://www.secretnumerology.com</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">ติดต่อเรา</h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">support@secretnumerology.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">083-823-4661</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
              <a href="#acceptance" className="text-purple-400 hover:text-purple-300 text-sm">
                1. การยอมรับข้อกำหนด
              </a>
              <a href="#services" className="text-purple-400 hover:text-purple-300 text-sm">
                2. บริการที่เราให้
              </a>
              <a href="#user-obligations" className="text-purple-400 hover:text-purple-300 text-sm">
                3. หน้าที่และความรับผิดชอบของผู้ใช้
              </a>
              <a href="#privacy" className="text-purple-400 hover:text-purple-300 text-sm">
                4. การคุ้มครองข้อมูล
              </a>
              <a href="#payment" className="text-purple-400 hover:text-purple-300 text-sm">
                5. เงื่อนไขการชำระเงิน
              </a>
              <a href="#refund" className="text-purple-400 hover:text-purple-300 text-sm">
                6. การคืนเงิน
              </a>
              <a href="#intellectual" className="text-purple-400 hover:text-purple-300 text-sm">
                7. ทรัพย์สินทางปัญญา
              </a>
              <a href="#liability" className="text-purple-400 hover:text-purple-300 text-sm">
                8. ข้อจำกัดความรับผิดชอบ
              </a>
              <a href="#termination" className="text-purple-400 hover:text-purple-300 text-sm">
                9. การยกเลิกบริการ
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Terms Content */}
        <div className="space-y-6">
          {/* Section 1 */}
          <Card id="acceptance" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">1. การยอมรับข้อกำหนดและเงื่อนไข</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p>การเข้าใช้งานเว็บไซต์ www.secretnumerology.com และบริการทั้งหมดของเรา ถือว่าท่านได้อ่าน เข้าใจ และยอมรับข้อกำหนดและเงื่อนไขนี้ทั้งหมด</p>
              <div className="space-y-3">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">1.1 ขอบเขตการใช้งาน</h4>
                  <p className="text-sm">ข้อกำหนดนี้ใช้บังคับกับการใช้งานเว็บไซต์ แอปพลิเคชัน และบริการทั้งหมดของเรา</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">1.2 การแก้ไขข้อกำหนด</h4>
                  <p className="text-sm">เราขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดนี้ โดยจะแจ้งให้ท่านทราบล่วงหน้า 30 วัน</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">1.3 อายุและความสามารถ</h4>
                  <p className="text-sm">ท่านต้องมีอายุไม่ต่ำกว่า 18 ปี หรือได้รับความยินยอมจากผู้ปกครอง</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card id="services" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">2. บริการที่เราให้</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">บริการหลัก</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>การคำนวณและวิเคราะห์เลขศาสตร์</li>
                    <li>รายงานเลขศาสตร์ส่วนบุคคล</li>
                    <li>คำปรึกษาด้านตัวเลขมงคล</li>
                    <li>การวิเคราะห์ความเข้ากันได้</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">บริการเสริม</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>AI Chat สำหรับคำปรึกษา</li>
                    <li>การวิเคราะห์ Timeline ชีวิต</li>
                    <li>เลขมงคลสำหรับโทรศัพท์</li>
                    <li>ราศีจีนและการเชื่อมโยง</li>
                  </ul>
                </div>
              </div>
              <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
                <h4 className="text-amber-400 font-semibold mb-2">ข้อจำกัดของบริการ</h4>
                <p className="text-sm">บริการของเราเป็นการให้ข้อมูลเพื่อการอ้างอิงเท่านั้น ไม่ใช่การพยากรณ์หรือการรับประกันผลลัพธ์ในอนาคต</p>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card id="user-obligations" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">3. หน้าที่และความรับผิดชอบของผู้ใช้</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="space-y-3">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">3.1 การใช้งานที่เหมาะสม</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>ใช้บริการเพื่อวัตถุประสงค์ส่วนตัวเท่านั้น</li>
                    <li>ไม่นำข้อมูลไปใช้ในทางการค้าโดยไม่ได้รับอนุญาต</li>
                    <li>ไม่แบ่งปันบัญชีผู้ใช้กับผู้อื่น</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">3.2 ข้อมูลที่ให้กับเรา</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>ให้ข้อมูลที่ถูกต้องและเป็นปัจจุบัน</li>
                    <li>รับผิดชอบในการอัพเดทข้อมูลส่วนตัว</li>
                    <li>ไม่ให้ข้อมูลเท็จหรือทำให้เข้าใจผิด</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-400 font-semibold mb-2">3.3 การกระทำที่ห้าม</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>ไม่พยายามเข้าถึงระบบโดยไม่ได้รับอนุญาต</li>
                    <li>ไม่ส่งข้อมูลที่เป็นอันตรายหรือมีไวรัส</li>
                    <li>ไม่ใช้บริการเพื่อกิจกรรมที่ผิดกฎหมาย</li>
                    <li>ไม่คัดลอกหรือดัดแปลงเนื้อหาโดยไม่ได้รับอนุญาต</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card id="privacy" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="w-5 h-5" />
                4. การคุ้มครองข้อมูลส่วนบุคคล
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p>เราให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของท่านตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">สิทธิของท่าน</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>เข้าถึงและขอสำเนาข้อมูล</li>
                    <li>แก้ไขข้อมูลที่ไม่ถูกต้อง</li>
                    <li>ลบหรือทำลายข้อมูล</li>
                    <li>ถอนความยินยอม</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">การรักษาความปลอดภัย</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>เข้ารหัส SSL/TLS 256-bit</li>
                    <li>ระบบสำรองข้อมูลอัตโนมัติ</li>
                    <li>การควบคุมการเข้าถึงที่เข้มงวด</li>
                    <li>การตรวจสอบความปลอดภัยสม่ำเสมอ</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <p className="text-sm">
                  รายละเอียดเพิ่มเติมเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคล โปรดดู
                  <Link href="/privacy" className="text-purple-400 hover:text-purple-300 ml-1">
                    นโยบายความเป็นส่วนตัว
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card id="payment" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                5. เงื่อนไขการชำระเงิน
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">5.1 ราคาและแพ็กเกจ</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                      <li>1 โปรไฟล์ = 39 บาท</li>
                      <li>6 โปรไฟล์ = 199 บาท</li>
                      <li>30 โปรไฟล์ = 599 บาท</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">5.2 วิธีการชำระเงิน</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                      <li>บัตรเครดิต/เดบิต</li>
                      <li>QR Code (PromptPay)</li>
                      <li>Internet Banking</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">5.3 ความปลอดภัยการชำระเงิน</h4>
                    <p className="text-sm">การชำระเงินทั้งหมดผ่านระบบ Payment Gateway ที่ได้มาตรฐาน PCI DSS</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">5.4 ใบเสร็จและภาษี</h4>
                    <p className="text-sm">ท่านจะได้รับใบเสร็จทางอีเมลภายใน 24 ชั่วโมง</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card id="refund" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                6. นโยบายการคืนเงิน
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">การรับประกันความพึงพอใจ 100%</h4>
                <p className="text-sm">หากท่านไม่พึงพอใจกับรายงานของเรา เราจะคืนเงินให้ 100% ภายใน 30 วัน</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">6.1 เงื่อนไขการคืนเงิน</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>ขอคืนเงินภายใน 30 วันหลังการซื้อ</li>
                    <li>ระบุเหตุผลที่ไม่พึงพอใจ</li>
                    <li>ไม่เคยขอคืนเงินมาก่อน</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">6.2 กระบวนการคืนเงิน</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>ติดต่อ support@secretnumerology.com</li>
                    <li>เราจะตรวจสอบภายใน 3 วันทำการ</li>
                    <li>คืนเงินภายใน 7-14 วันทำการ</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card id="intellectual" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Copyright className="w-5 h-5" />
                7. ทรัพย์สินทางปัญญา
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p className="text-sm">เนื้อหา ดิไซน์ โลโก้ ซอฟต์แวร์ และทรัพย์สินทางปัญญาทั้งหมดในเว็บไซต์นี้เป็นของบริษัท ซีเครท นูเมอโรโลจี จำกัด</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-400 font-semibold mb-2">7.1 สิ่งที่ห้ามทำ</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>คัดลอกเนื้อหาโดยไม่ได้รับอนุญาต</li>
                    <li>แจกจ่ายหรือขายต่อ</li>
                    <li>ดัดแปลงหรือสร้างงานดัดแปลง</li>
                    <li>ใช้เพื่อการค้าโดยไม่ได้รับอนุญาต</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">7.2 สิทธิการใช้งาน</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>ใช้บริการเพื่อวัตถุประสงค์ส่วนตัว</li>
                    <li>พิมพ์รายงานสำหรับตัวเอง</li>
                    <li>แบ่งปันกับครอบครัวได้</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card id="liability" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">8. ข้อจำกัดความรับผิดชอบ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
                <h4 className="text-amber-400 font-semibold mb-2">ข้อจำกัดสำคัญ</h4>
                <p className="text-sm">บริการเลขศาสตร์ของเราเป็นการให้ข้อมูลเพื่อการอ้างอิงและความบันเทิงเท่านั้น ไม่ใช่การพยากรณ์หรือคำแนะนำทางการเงิน การลงทุน หรือการตัดสินใจที่สำคัญ</p>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">8.1 ความถูกต้องของข้อมูล</h4>
                  <p className="text-sm">เราพยายามให้ข้อมูลที่ถูกต้อง แต่ไม่รับประกันความถูกต้อง ครบถ้วน หรือเป็นปัจจุบันของข้อมูลทั้งหมด</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">8.2 ความเสียหายทางอ้อม</h4>
                  <p className="text-sm">เราไม่รับผิดชอบต่อความเสียหายทางอ้อม การสูญเสียผลกำไร หรือความเสียหายที่เกิดจากการใช้บริการ</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 9 */}
          <Card id="termination" className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">9. การยกเลิกบริการ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">9.1 การยกเลิกโดยผู้ใช้</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>ท่านสามารถยกเลิกบัญชีได้ตลอดเวลา</li>
                    <li>ติดต่อ support@secretnumerology.com</li>
                    <li>ข้อมูลจะถูกลบตามนโยบายความเป็นส่วนตัว</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">9.2 การยกเลิกโดยเรา</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>กรณีละเมิดข้อกำหนดการใช้งาน</li>
                    <li>การใช้งานที่ผิดกฎหมาย</li>
                    <li>แจ้งให้ทราบล่วงหน้า 30 วัน</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">ติดต่อเรา</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p>หากมีคำถามเกี่ยวกับข้อกำหนดเหล่านี้ กรุณาติดต่อเราผ่าน:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                 <div className="space-y-2">
                   <h4 className="text-white font-semibold">บริการลูกค้า</h4>
                   <div className="space-y-1">
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
                 <div className="space-y-2">
                   <h4 className="text-white font-semibold">เจ้าหน้าที่ DPO</h4>
                   <div className="space-y-1">
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
                 <div className="space-y-2">
                   <h4 className="text-white font-semibold">ผู้รับผิดชอบ</h4>
                   <div className="flex items-start gap-2">
                     <MapPin className="w-4 h-4 text-purple-400 mt-0.5" />
                     <span className="text-sm">
                       นาย สัญญา มาร์ท<br />
                       SecretNumerology<br />
                       www.secretnumerology.com
                     </span>
                   </div>
                 </div>
              </div>
              <div className="flex gap-3">
                <Button className="bg-purple-600 hover:bg-purple-700">ติดต่อเรา</Button>
                <Link href="/privacy">
                  <Button variant="outline" className="border-purple-500 text-purple-400">
                    นโยบายความเป็นส่วนตัว
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <Card className="bg-gradient-to-r from-gray-900/80 to-black/80 border-gray-700">
          <CardContent className="p-6 text-center">
            <p className="text-white font-semibold mb-2">ข้อกำหนดนี้มีผลบังคับใช้ตั้งแต่วันที่ 23 มกราคม 2025</p>
            <p className="text-gray-300 text-sm mb-2">
              เราขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดเหล่านี้ โดยจะแจ้งให้ท่านทราบล่วงหน้า 30 วัน
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

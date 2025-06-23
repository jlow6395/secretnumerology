"use client"

import { FileText, Users, CreditCard, Shield, AlertTriangle, CheckCircle, Clock, Scale, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">ข้อกำหนดการใช้งาน</h1>
              <p className="text-gray-400">Terms of Service - Secret Numerology</p>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            ข้อกำหนดและเงื่อนไขการใช้บริการเว็บไซต์และแอปพลิเคชัน Secret Numerology 
            โปรดอ่านอย่างละเอียดก่อนใช้บริการ
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">

          {/* ข้อมูลบริษัท */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-400">
                <Users className="h-6 w-6" />
                <span>ข้อมูลผู้ให้บริการ</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">ข้อมูลบริษัท</h4>
                  <div className="space-y-2 text-gray-300">
                    <p><strong>ชื่อ:</strong> บริษัท ซีเครท นิวเมอโรโลยี จำกัด</p>
                    <p><strong>เลขทะเบียน:</strong> 0105564001234</p>
                    <p><strong>ประเภทธุรกิจ:</strong> บริการเลขศาสตร์และคำปรึกษา</p>
                  </div>
                </div>
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
              </div>
            </CardContent>
          </Card>

          {/* การยอมรับข้อกำหนด */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-green-400">
                <CheckCircle className="h-6 w-6" />
                <span>การยอมรับข้อกำหนด</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <p className="text-gray-300">
                  การใช้บริการของเราถือว่าคุณยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในเอกสารนี้
                </p>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">ข้อกำหนดที่สำคัญ</h4>
                  <div className="space-y-2">
                    {[
                      "ผู้ใช้ต้องมีอายุ 18 ปีขึ้นไป หรือได้รับอนุญาตจากผู้ปกครอง",
                      "ข้อมูลที่ให้ต้องเป็นความจริงและถูกต้อง",
                      "ต้องใช้บริการเพื่อวัตถุประสงค์ที่ถูกต้องตามกฎหมาย",
                      "ห้ามใช้บริการเพื่อการหลอกลวงหรือก่อความเสียหาย"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* บริการที่ให้ */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-purple-400">
                <Shield className="h-6 w-6" />
                <span>บริการที่เราให้</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-4">บริการฟรี</h4>
                    <div className="space-y-3">
                      {[
                        "คำนวณเลขชีวิตพื้นฐาน",
                        "รายงานเลขศาสตร์เบื้องต้น",
                        "คำแนะนำทั่วไป",
                        "เครื่องมือคำนวณออนไลน์"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-4">บริการ Premium</h4>
                    <div className="space-y-3">
                      {[
                        "รายงานเลขศาสตร์เชิงลึก",
                        "การวิเคราะห์ความเข้ากันได้",
                        "คำปรึกษาส่วนบุคคล",
                        "AI Chat และคำแนะนำขั้นสูง"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-400 font-semibold mb-2">ข้อจำกัดของบริการ</h4>
                  <p className="text-gray-300 text-sm">
                    บริการเลขศาสตร์ของเราเป็นการให้ข้อมูลและคำแนะนำเพื่อการอ้างอิงเท่านั้น 
                    ไม่ใช่การทำนายที่แน่นอน และไม่ควรใช้เป็นเหตุผลเดียวในการตัดสินใจสำคัญ
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* การชำระเงิน */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-amber-400">
                <CreditCard className="h-6 w-6" />
                <span>การชำระเงินและการเงิน</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-4">วิธีการชำระเงิน</h4>
                    <div className="space-y-3">
                      {[
                        "บัตรเครดิต/เดบิต",
                        "Internet Banking",
                        "Mobile Banking",
                        "QR Code Payment",
                        "True Money Wallet"
                      ].map((method, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CreditCard className="h-4 w-4 text-amber-400" />
                          <span className="text-gray-300">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-4">ราคาบริการ</h4>
                    <div className="space-y-3">
                      <div className="border border-gray-600 rounded-lg p-3">
                        <p className="text-white font-semibold">Basic Plan</p>
                        <p className="text-amber-400">39 บาท/เดือน</p>
                        <p className="text-gray-400 text-sm">1 โปรไฟล์</p>
                      </div>
                      <div className="border border-gray-600 rounded-lg p-3">
                        <p className="text-white font-semibold">Family Plan</p>
                        <p className="text-amber-400">199 บาท/เดือน</p>
                        <p className="text-gray-400 text-sm">6 โปรไฟล์</p>
                      </div>
                      <div className="border border-gray-600 rounded-lg p-3">
                        <p className="text-white font-semibold">Premium Plan</p>
                        <p className="text-amber-400">599 บาท/เดือน</p>
                        <p className="text-gray-400 text-sm">30 โปรไฟล์</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
                  <h4 className="text-amber-400 font-semibold mb-2">เงื่อนไขการชำระเงิน</h4>
                  <div className="space-y-2">
                    {[
                      "การชำระเงินจะถูกหักบัญชีทันทีเมื่อยืนยันการสั่งซื้อ",
                      "บริการจะเริ่มใช้งานได้ทันทีหลังการชำระเงินสำเร็จ",
                      "ใบเสร็จจะส่งทางอีเมลภายใน 24 ชั่วโมง",
                      "การต่ออายุจะทำอัตโนมัติยกเว้นแจ้งยกเลิกล่วงหน้า"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* การคืนเงิน */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-red-400">
                <Clock className="h-6 w-6" />
                <span>นโยบายการคืนเงิน</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-4">เงื่อนไขการคืนเงิน</h4>
                    <div className="space-y-3">
                      {[
                        "ขอคืนเงินได้ภายใน 7 วันแรก",
                        "ยังไม่ได้ใช้บริการเกิน 50% ของแพ็คเกจ",
                        "ไม่มีการละเมิดข้อกำหนดการใช้งาน",
                        "แจ้งขอคืนเงินผ่านช่องทางอย่างเป็นทางการ"
                      ].map((condition, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-4 h-4 bg-green-400 rounded-full mt-0.5"></div>
                          <span className="text-gray-300 text-sm">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-4">กระบวนการคืนเงิน</h4>
                    <div className="space-y-3">
                      {[
                        { step: "1", desc: "ส่งคำขอคืนเงินพร้อมเหตุผล" },
                        { step: "2", desc: "ทีมงานตรวจสอบภายใน 3-5 วันทำการ" },
                        { step: "3", desc: "แจ้งผลการพิจารณาทางอีเมล" },
                        { step: "4", desc: "โอนเงินคืนภายใน 7-14 วันทำการ" }
                      ].map((process, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {process.step}
                          </div>
                          <span className="text-gray-300 text-sm">{process.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-400 font-semibold mb-2">กรณีที่ไม่สามารถคืนเงินได้</h4>
                  <div className="space-y-2">
                    {[
                      "ใช้บริการครบตามแพ็คเกจแล้ว",
                      "เกินระยะเวลา 7 วันที่กำหนด",
                      "มีการละเมิดข้อกำหนดการใช้งาน",
                      "ขอคืนเงินโดยไม่มีเหตุผลสมควร"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-0.5"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ความรับผิดชอบ */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-orange-400">
                <Scale className="h-6 w-6" />
                <span>ความรับผิดชอบและข้อจำกัด</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-4">ความรับผิดชอบของเรา</h4>
                    <div className="space-y-3">
                      {[
                        "ให้บริการตามมาตรฐานที่กำหนด",
                        "รักษาความปลอดภัยของข้อมูล",
                        "ให้การสนับสนุนลูกค้าอย่างเหมาะสม",
                        "ปรับปรุงบริการอย่างต่อเนื่อง"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-4">ความรับผิดชอบของผู้ใช้</h4>
                    <div className="space-y-3">
                      {[
                        "ให้ข้อมูลที่ถูกต้องและครบถ้วน",
                        "ใช้บริการอย่างเหมาะสม",
                        "ปกป้องข้อมูลเข้าสู่ระบบ",
                        "ปฏิบัติตามข้อกำหนดการใช้งาน"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-orange-400" />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                  <h4 className="text-orange-400 font-semibold mb-2">ข้อจำกัดความรับผิดชอบ</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    เราไม่รับผิดชอบต่อความเสียหายที่เกิดจาก:
                  </p>
                  <div className="space-y-2">
                    {[
                      "การตัดสินใจโดยอาศัยผลการวิเคราะห์เลขศาสตร์เพียงอย่างเดียว",
                      "ความล่าช้าหรือขัดข้องของระบบที่เกิดจากสาเหตุสุดวิสัย",
                      "การใช้งานที่ผิดวัตถุประสงค์หรือไม่เป็นไปตามคำแนะนำ",
                      "ความเสียหายทางอ้อมหรือผลที่ตามมา"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* การแก้ไขข้อกำหนด */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-cyan-400">
                <FileText className="h-6 w-6" />
                <span>การแก้ไขข้อกำหนด</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-300">
                  เราขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดและเงื่อนไขนี้เป็นครั้งคราว เพื่อให้สอดคล้องกับการเปลี่ยนแปลงของบริการและกฎหมาย
                </p>
                <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
                  <h4 className="text-cyan-400 font-semibold mb-2">กระบวนการแก้ไข</h4>
                  <div className="space-y-2">
                    {[
                      "แจ้งให้ผู้ใช้ทราบล่วงหน้าอย่างน้อย 30 วัน",
                      "เผยแพร่ข้อกำหนดใหม่บนเว็บไซต์",
                      "ส่งการแจ้งเตือนทางอีเมลให้สมาชิก",
                      "การใช้บริการต่อไปถือว่ายอมรับข้อกำหนดใหม่"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-300 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* การติดต่อ */}
          <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-purple-400">
                <Mail className="h-6 w-6" />
                <span>การติดต่อเรื่องข้อกำหนด</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-300">
                  หากมีข้อสงสัยเกี่ยวกับข้อกำหนดการใช้งาน สามารถติดต่อเราได้ที่:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <Mail className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <p className="font-semibold text-white">อีเมล</p>
                    <p className="text-gray-400 text-sm">support@secretnumerology.com</p>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <Phone className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <p className="font-semibold text-white">โทรศัพท์</p>
                    <p className="text-gray-400 text-sm">083-823-4661</p>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <Clock className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <p className="font-semibold text-white">เวลาทำการ</p>
                    <p className="text-gray-400 text-sm">จันทร์-ศุกร์ 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* วันที่มีผล */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-bold text-white mb-4">วันที่มีผลบังคับใช้</h3>
              <p className="text-gray-300 mb-6">
                ข้อกำหนดและเงื่อนไขนี้มีผลบังคับใช้ตั้งแต่วันที่ 1 มกราคม 2024
              </p>
              <p className="text-gray-500 text-sm">
                อัปเดตล่าสุด: 1 มกราคม 2024 | เวอร์ชัน 1.0
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
            <Link href="/privacy">
              <Button className="px-8 py-3 bg-purple-600 hover:bg-purple-700">
                นโยบายความเป็นส่วนตัว
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

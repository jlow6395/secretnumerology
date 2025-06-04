"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  HelpCircle,
  Book,
  CreditCard,
  Download,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      category: "การใช้งาน",
      question: "เลขศาสตร์คืออะไร และมีความแม่นยำแค่ไหน?",
      answer: "เลขศาสตร์เป็นศาสตร์โบราณที่ศึกษาความสัมพันธ์ระหว่างตัวเลขกับชีวิตมนุษย์ ความแม่นยำขึ้นอยู่กับการตีความและประสบการณ์ของผู้วิเคราะห์",
    },
    {
      id: 2,
      category: "การชำระเงิน",
      question: "สามารถชำระเงินด้วยวิธีไหนได้บ้าง?",
      answer: "เรายอมรับการชำระเงินผ่านบัตรเครดิต, บัตรเดบิต, QR Code PromptPay, และการโอนเงินผ่านธนาคาร",
    },
    {
      id: 3,
      category: "รายงาน",
      question: "จะได้รับรายงานเมื่อไหร่หลังจากชำระเงิน?",
      answer: "รายงานจะถูกส่งให้ทันทีหลังจากการชำระเงินสำเร็จ และคุณสามารถดาวน์โหลดได้จากแดชบอร์ด",
    },
    {
      id: 4,
      category: "การคืนเงิน",
      question: "มีนโยบายการคืนเงินอย่างไร?",
      answer: "เรามีนโยบายการคืนเงิน 100% ภายใน 30 วัน หากคุณไม่พึงพอใจกับรายงานที่ได้รับ",
    },
    {
      id: 5,
      category: "บัญชีผู้ใช้",
      question: "จะเปลี่ยนข้อมูลส่วนตัวได้อย่างไร?",
      answer: "คุณสามารถแก้ไขข้อมูลส่วนตัวได้ที่หน้า Profile Settings ในแดชบอร์ด",
    },
    {
      id: 6,
      category: "ความปลอดภัย",
      question: "ข้อมูลของฉันปลอดภัยแค่ไหน?",
      answer: "เราใช้การเข้ารหัส SSL 256-bit และไม่แบ่งปันข้อมูลส่วนตัวกับบุคคลที่สาม",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับ
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">ศูนย์ช่วยเหลือ</h1>
            <p className="text-gray-400 mt-1">ค้นหาคำตอบหรือติดต่อทีมสนับสนุน</p>
          </div>
        </div>

        {/* Search */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="ค้นหาคำถามที่พบบ่อย..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="faq" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 bg-gray-900">
                <TabsTrigger value="faq" className="data-[state=active]:bg-purple-600">
                  คำถามที่พบบ่อย
                </TabsTrigger>
                <TabsTrigger value="contact" className="data-[state=active]:bg-purple-600">
                  ติดต่อเรา
                </TabsTrigger>
              </TabsList>

              {/* FAQ Tab */}
              <TabsContent value="faq" className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <Card key={faq.id} className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-0">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <Badge variant="secondary" className="mt-1">
                            {faq.category}
                          </Badge>
                          <h3 className="text-white font-medium">{faq.question}</h3>
                        </div>
                        {expandedFaq === faq.id ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      {expandedFaq === faq.id && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}

                {filteredFaqs.length === 0 && (
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-8 text-center">
                      <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-white font-semibold mb-2">ไม่พบคำตอบที่ค้นหา</h3>
                      <p className="text-gray-400 mb-4">ลองใช้คำค้นหาอื่น หรือติดต่อทีมสนับสนุนของเรา</p>
                      <Button className="bg-purple-600 hover:bg-purple-700">ติดต่อทีมสนับสนุน</Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Contact Tab */}
              <TabsContent value="contact" className="space-y-6">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">ส่งข้อความถึงเรา</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-gray-300 text-sm">ชื่อ</label>
                        <Input className="bg-gray-800 border-gray-700 text-white" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-gray-300 text-sm">อีเมล</label>
                        <Input type="email" className="bg-gray-800 border-gray-700 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-300 text-sm">หัวข้อ</label>
                      <Input className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-300 text-sm">ข้อความ</label>
                      <Textarea
                        rows={5}
                        className="bg-gray-800 border-gray-700 text-white resize-none"
                        placeholder="อธิบายปัญหาหรือคำถามของคุณ..."
                      />
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      ส่งข้อความ
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">ติดต่อเรา</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <Phone className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white font-medium">โทรศัพท์</p>
                    <p className="text-gray-400 text-sm">02-123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">อีเมล</p>
                    <p className="text-gray-400 text-sm">support@secretnumerology.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">เวลาทำการ</p>
                    <p className="text-gray-400 text-sm">จันทร์-ศุกร์ 9:00-18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">ลิงก์ที่เป็นประโยชน์</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/terms">
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <Book className="w-4 h-4 mr-2" />
                    ข้อกำหนดและเงื่อนไข
                  </Button>
                </Link>
                <Link href="/dashboard/profile">
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <Settings className="w-4 h-4 mr-2" />
                    ตั้งค่าบัญชี
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                  <Download className="w-4 h-4 mr-2" />
                  ดาวน์โหลดรายงาน
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                  <CreditCard className="w-4 h-4 mr-2" />
                  ประวัติการชำระเงิน
                </Button>
              </CardContent>
            </Card>

            {/* Status */}
            <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  สถานะระบบ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">เว็บไซต์:</span>
                    <Badge className="bg-green-500">ปกติ</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">การชำระเงิน:</span>
                    <Badge className="bg-green-500">ปกติ</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">รายงาน:</span>
                    <Badge className="bg-green-500">ปกติ</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

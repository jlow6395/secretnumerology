import { Calendar, Star, Sparkles } from "lucide-react"
import Navigation from "@/components/Navigation"

const zodiacAnimals = [
  { name: "หนู", nameEn: "Rat", year: "2020", icon: "🐭", description: "ฉลาด มีไหวพริบ และปรับตัวได้ดี" },
  { name: "วัว", nameEn: "Ox", year: "2021", icon: "🐂", description: "อดทน มั่นคง และเชื่อถือได้" },
  { name: "เสือ", nameEn: "Tiger", year: "2022", icon: "🐅", description: "กล้าหาญ มีความเป็นผู้นำ และมีเสน่ห์" },
  { name: "กระต่าย", nameEn: "Rabbit", year: "2023", icon: "🐰", description: "อ่อนโยน มีความเมตตา และรักสันติ" },
  { name: "มังกร", nameEn: "Dragon", year: "2024", icon: "🐲", description: "ทรงพลัง มีความมั่นใจ และโชคดี" },
  { name: "งู", nameEn: "Snake", year: "2025", icon: "🐍", description: "ฉลาด ลึกลับ และมีสัญชาตญาณดี" },
  { name: "ม้า", nameEn: "Horse", year: "2026", icon: "🐴", description: "มีพลัง รักอิสระ และมีความกระตือรือร้น" },
  { name: "แพะ", nameEn: "Goat", year: "2027", icon: "🐐", description: "อ่อนโยน มีความคิดสร้างสรรค์ และรักสันติ" },
  { name: "ลิง", nameEn: "Monkey", year: "2028", icon: "🐵", description: "ฉลาด มีไหวพริบ และชอบเล่นตลก" },
  { name: "ไก่", nameEn: "Rooster", year: "2029", icon: "🐓", description: "มั่นใจ ตรงต่อเวลา และมีความภาคภูมิใจ" },
  { name: "หมา", nameEn: "Dog", year: "2030", icon: "🐕", description: "ซื่อสัตย์ เชื่อถือได้ และมีความรับผิดชอบ" },
  { name: "หมู", nameEn: "Pig", year: "2031", icon: "🐷", description: "ใจดี มีความเมตตา และรักความสุข" },
]

export default function ChineseZodiacPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        {/* Header Section */}
        <div className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-medium">
                <Star className="h-4 w-4 mr-2" />
                ปีนักษัตรจีน
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              ปีนักษัตรจีน: 12 สัตว์มงคล
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ค้นพบความหมายลึกซึ้งของปีเกิดของคุณผ่านปีนักษัตรจีนโบราณ แต่ละสัตว์มีลักษณะเฉพาะและนำพาโชคลาภที่แตกต่างกัน
            </p>
          </div>
        </div>

        {/* Zodiac Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {zodiacAnimals.map((animal, index) => (
              <div
                key={animal.nameEn}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-100"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {animal.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-1">{animal.name}</h3>

                  <p className="text-sm text-amber-600 font-medium mb-2">{animal.nameEn}</p>

                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-sm font-medium mb-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    {animal.year}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">{animal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Information Section */}
        <div className="bg-white/60 backdrop-blur-sm border-t border-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  <Sparkles className="h-6 w-6 text-amber-500" />
                  <Sparkles className="h-6 w-6 text-orange-500" />
                  <Sparkles className="h-6 w-6 text-red-500" />
                </div>
              </div>
            </div>

            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                ปีนักษัตรจีน (หรือที่เรียกว่า Sheng Xiao) ประกอบด้วยสัตว์ 12 ตัว ได้แก่
                <span className="font-semibold text-amber-700">
                  {" "}
                  หนู, วัว, เสือ, กระต่าย, มังกร, งู, ม้า, แพะ, ลิง, ไก่, หมา, และหมู
                </span>
                ซึ่งแสดงถึงวงจร 12 ปี
              </p>

              <p className="text-lg leading-relaxed mb-6">
                ปี 2024 เป็นปีของมังกร ปีนักษัตรจีนถูกค้นพบครั้งแรกในสมัยราชวงศ์ฮั่นของจีน และอิงตามปฏิทินจันทรคติที่ใช้ในจีนโบราณ
              </p>

              <p className="text-lg leading-relaxed">
                ตัวอย่างเช่น ปีใหม่จีนมักจะเริ่มต้นในช่วงปลายเดือนมกราคมหรือต้นเดือนกุมภาพันธ์ ตามปฏิทินเกรกอเรียนที่เราใช้ในปัจจุบัน
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold mb-6">ค้นหาปีนักษัตรของคุณ</h2>

            <p className="text-xl mb-8 opacity-90">เริ่มต้นการเดินทางสู่การทำความเข้าใจตัวเองผ่านปีนักษัตรจีนโบราณ</p>

            <a
              href="/wizard/step1"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              เริ่มต้นเลย
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

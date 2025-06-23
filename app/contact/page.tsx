import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Navigation from "@/components/Navigation"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">ติดต่อเรา</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                มีคำถามเกี่ยวกับเลขศาสตร์หรือต้องการความช่วยเหลือ? เราพร้อมให้คำปรึกษา
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">ส่งข้อความถึงเรา</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      ชื่อ-นามสกุล
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="กรอกชื่อ-นามสกุล"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      อีเมล
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="กรอกอีเมล"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      หัวข้อ
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="หัวข้อที่ต้องการสอบถาม"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      ข้อความ
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="รายละเอียดที่ต้องการสอบถาม"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    ส่งข้อความ
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">ข้อมูลการติดต่อ</h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-black text-white p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">อีเมล</h3>
                      <p className="text-gray-600">support@secretnumerology.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-black text-white p-3 rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">โทรศัพท์</h3>
                      <p className="text-gray-600">083-823-4661</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-black text-white p-3 rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">ที่อยู่</h3>
                      <p className="text-gray-600">
                        บริษัท ซีเครท นิวเมอโรโลยี จำกัด
                        <br />
                        123/45 อาคารเทคโนโลยี ถนนสุขุมวิท
                        <br />
                        กรุงเทพฯ 10110
                        <br />
                        เลขทะเบียน: 0105564001234
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-black text-white p-3 rounded-full">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">เวลาทำการ</h3>
                      <p className="text-gray-600">จันทร์ - ศุกร์: 9:00 - 18:00</p>
                      <p className="text-gray-600">เสาร์ - อาทิตย์: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">คำถามที่พบบ่อย</h3>
                  <p className="text-gray-600 mb-4">ก่อนติดต่อเรา ลองดูคำถามที่พบบ่อยก่อน อาจจะมีคำตอบที่คุณต้องการ</p>
                  <a
                    href="/help"
                    className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
                  >
                    ดูคำถามที่พบบ่อย →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

import { Calculator, ArrowRight, Star, Target, Compass, Zap } from "lucide-react"
import Navigation from "@/components/Navigation"

export default function LifePathPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-orange-500/30"></div>

          <div className="relative py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                      <Compass className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-xl text-amber-200 font-medium">เลขศาสตร์</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    เลขชีวิต
                    <span className="block text-amber-200 text-3xl md:text-4xl mt-2">(Life Path Number)</span>
                  </h1>
                  <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                    เลขที่สำคัญที่สุดในเลขศาสตร์ เปิดเผยเส้นทางชีวิต จุดประสงค์ และความท้าทายที่คุณจะเผชิญ
                  </p>
                  <a
                    href="/calculator"
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-2xl transform hover:scale-105"
                  >
                    <Calculator className="h-5 w-5" />
                    <span>คำนวณเลขชีวิตของฉัน</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/30 shadow-2xl">
                    <div className="text-8xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                      ?
                    </div>
                    <p className="text-xl text-blue-100">เลขชีวิตของคุณคือเลขอะไร?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Life Path */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-8">
                เลขชีวิตคืออะไร?
              </h2>
              <p className="text-xl text-blue-700 leading-relaxed">
                เลขชีวิต (Life Path Number) คือเลขที่สำคัญที่สุดในเลขศาสตร์ คำนวณจากวันเกิดของคุณและเปิดเผยเส้นทางชีวิต จุดประสงค์
                และบทเรียนที่คุณมาเรียนรู้ในชีวิตนี้
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-10 mb-16 border border-amber-200 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-800 mb-8 text-center">วิธีคำนวณเลขชีวิต</h3>
              <div className="space-y-6 text-blue-700 text-lg">
                <p className="text-center">
                  <strong className="text-amber-600">ตัวอย่าง:</strong> วันเกิด 15 มีนาคม 1990
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <p className="font-semibold text-blue-800 mb-2">วัน</p>
                    <p>
                      1 + 5 = <span className="text-amber-600 font-bold">6</span>
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <p className="font-semibold text-blue-800 mb-2">เดือน</p>
                    <p>
                      มีนาคม = <span className="text-amber-600 font-bold">3</span>
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <p className="font-semibold text-blue-800 mb-2">ปี</p>
                    <p>
                      1+9+9+0 = 19 → 1+9 = 10 → 1+0 = <span className="text-amber-600 font-bold">1</span>
                    </p>
                  </div>
                </div>
                <div className="text-center bg-white rounded-xl p-6 shadow-md">
                  <p className="text-blue-800 mb-2">
                    รวม: 6 + 3 + 1 = 10 → 1 + 0 = <span className="text-3xl font-bold text-amber-600">1</span>
                  </p>
                  <p className="text-xl font-bold text-blue-800 mt-4">เลขชีวิต = 1</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Life Path Meanings */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-6">
                ความหมายของเลขชีวิต 1-9
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  number: 1,
                  title: "ผู้นำ",
                  description: "มีความเป็นผู้นำ มั่นใจ และชอบเป็นหัวหน้า",
                  gradient: "from-red-500 to-pink-500",
                },
                {
                  number: 2,
                  title: "ผู้ร่วมมือ",
                  description: "ชอบทำงานเป็นทีม มีความอ่อนโยน และเข้าใจผู้อื่น",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  number: 3,
                  title: "ผู้สร้างสรรค์",
                  description: "มีความคิดสร้างสรรค์ ชอบแสดงออก และมีเสน่ห์",
                  gradient: "from-amber-500 to-orange-500",
                },
                {
                  number: 4,
                  title: "ผู้ปฏิบัติ",
                  description: "มีระเบียบ ทำงานหนัก และเชื่อถือได้",
                  gradient: "from-emerald-500 to-teal-500",
                },
                {
                  number: 5,
                  title: "ผู้รักอิสระ",
                  description: "ชอบความเปลี่ยนแปลง ผจญภัย และอิสระ",
                  gradient: "from-purple-500 to-violet-500",
                },
                {
                  number: 6,
                  title: "ผู้ดูแล",
                  description: "รักครอบครัว มีความรับผิดชอบ และชอบช่วยเหลือ",
                  gradient: "from-rose-500 to-pink-500",
                },
                {
                  number: 7,
                  title: "ผู้แสวงหา",
                  description: "ชอบศึกษาค้นคว้า มีสัญชาตญาณ และลึกลับ",
                  gradient: "from-indigo-500 to-blue-500",
                },
                {
                  number: 8,
                  title: "ผู้ประสบความสำเร็จ",
                  description: "มุ่งมั่นสู่ความสำเร็จ มีอำนาจ และเก่งการเงิน",
                  gradient: "from-gray-600 to-gray-700",
                },
                {
                  number: 9,
                  title: "ผู้ให้",
                  description: "มีจิตใจกว้างขวาง ชอบช่วยเหลือ และมีวิสัยทัศน์",
                  gradient: "from-teal-500 to-green-500",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="bg-white rounded-2xl p-8 text-center border border-blue-100 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div
                    className={`bg-gradient-to-r ${item.gradient} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg`}
                  >
                    {item.number}
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{item.title}</h3>
                  <p className="text-blue-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-6">
                ประโยชน์ของการรู้เลขชีวิต
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">เข้าใจจุดประสงค์ชีวิต</h3>
                <p className="text-blue-600 leading-relaxed">รู้ว่าคุณมาเกิดเพื่ออะไร และควรมุ่งไปทางไหน</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <Star className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">ค้นหาจุดแข็ง</h3>
                <p className="text-blue-600 leading-relaxed">เปิดเผยความสามารถพิเศษและจุดแข็งของคุณ</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <Compass className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">วางแผนอนาคต</h3>
                <p className="text-blue-600 leading-relaxed">ใช้ข้อมูลในการตัดสินใจและวางแผนชีวิต</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">พร้อมค้นหาเลขชีวิตของคุณแล้วหรือยัง?</h2>
            <p className="text-xl text-blue-100 mb-10">ใช้เวลาเพียง 2 นาที เพื่อเปิดเผยเส้นทางชีวิตของคุณ</p>
            <a
              href="/calculator"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-full font-semibold text-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-2xl transform hover:scale-105"
            >
              <Calculator className="h-6 w-6" />
              <span>คำนวณเลขชีวิตฟรี</span>
              <ArrowRight className="h-6 w-6" />
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

import { Calculator, Heart, FileText, Sparkles, Phone, Star, Shield, Calendar } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Calculator,
      title: "เลขชีวิตส่วนตัว",
      description: "คำนวณเลข Life Path, Expression, Soul Urge และอีกมากมาย",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "ความเข้ากันในความรัก",
      description: "วิเคราะห์ความเข้ากันระหว่างคู่รักผ่านเลขศาสตร์",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Phone,
      title: "เบอร์โทรศัพท์มงคล",
      description: "เลือกเบอร์โทรศัพท์ที่เหมาะสมกับเลขชีวิตของคุณ",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Star,
      title: "Angel Numbers",
      description: "ค้นหาความหมายของเลขนำโชคจากเทวดา",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "ยันต์หนุนดวง",
      description: "ยันต์เสริมดวงชะตาตามเลขศาสตร์ส่วนตัว",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Calendar,
      title: "วงจรชีวิต",
      description: "วิเคราะห์ช่วงเวลาสำคัญในชีวิตผ่านเลขศาสตร์",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: FileText,
      title: "รายงานละเอียด",
      description: "รายงานเลขศาสตร์ครบถ้วนพร้อมคำแนะนำ",
      color: "from-gray-500 to-slate-500",
    },
    {
      icon: Sparkles,
      title: "พลังพระเกจิ",
      description: "คำแนะนำและพรจากพระเกจิอาจารย์",
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">ฟีเจอร์เลขศาสตร์ครบครัน</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ค้นพบความลับของชีวิตผ่านเลขศาสตร์ด้วยเครื่องมือที่ครบครันและแม่นยำ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">{feature.description}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="/wizard/step1"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-orange-500/30"
          >
            <Sparkles className="h-5 w-5" />
            <span>เริ่มต้นใช้งานฟรี</span>
          </a>
        </div>
      </div>
    </section>
  )
}

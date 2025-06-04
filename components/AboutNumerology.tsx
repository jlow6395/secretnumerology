import { Target, Sparkles, Sun, Hash, Brain, Heart, Star, Zap } from "lucide-react"

export default function AboutNumerology() {
  const concepts = [
    {
      icon: Target,
      title: "เลขชีวิตส่วนตัว",
      description: "เส้นทางชีวิตและจุดหมายปลายทางที่คุณมุ่งหน้าไป",
      color: "text-orange-400",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      icon: Sparkles,
      title: "เลขแสดงออก",
      description: "ความสามารถธรรมชาติและพรสวรรค์ที่คุณนำมาสู่โลก",
      color: "text-amber-400",
      bgColor: "from-amber-500/10 to-orange-500/10",
      borderColor: "border-amber-500/20",
    },
    {
      icon: Sun,
      title: "เลขดวงใจ",
      description: "ความปรารถนาลึกและสิ่งที่หัวใจคุณต้องการจริงๆ",
      color: "text-red-400",
      bgColor: "from-red-500/10 to-pink-500/10",
      borderColor: "border-red-500/20",
    },
    {
      icon: Hash,
      title: "เลขบุคลิกภาพ",
      description: "ภาพลักษณ์ภายนอกและวิธีที่คนอื่นมองคุณ",
      color: "text-yellow-400",
      bgColor: "from-yellow-500/10 to-amber-500/10",
      borderColor: "border-yellow-500/20",
    },
  ]

  const benefits = [
    {
      icon: Brain,
      title: "เข้าใจตัวเองลึกซึ้ง",
      description: "ค้นพบจุดแข็ง จุดอ่อน และศักยภาพที่ซ่อนอยู่",
    },
    {
      icon: Heart,
      title: "ปรับปรุงความสัมพันธ์",
      description: "เข้าใจและสร้างความสัมพันธ์ที่ดีกับคนรอบข้าง",
    },
    {
      icon: Star,
      title: "ตัดสินใจได้ดีขึ้น",
      description: "ใช้ข้อมูลเลขศาสตร์ในการวางแผนและตัดสินใจ",
    },
    {
      icon: Zap,
      title: "เสริมพลังชีวิต",
      description: "ใช้เลขมงคลและยันต์เพื่อเสริมดวงชะตา",
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Elegant Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/2 via-transparent to-red-500/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Refined Header */}
        <div className="text-center mb-20">
          <div className="mb-8 inline-flex items-center space-x-3 rounded-full bg-gradient-to-r from-gray-900/80 to-black/80 px-8 py-4 backdrop-blur-xl border border-orange-500/20">
            <div className="p-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm text-orange-300 font-medium tracking-wide">ภูมิปัญญาโบราณ</span>
          </div>

          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-8 tracking-tight">เลขศาสตร์คืออะไร?</h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            เลขศาสตร์เป็นศาสตร์โบราณที่ศึกษาความสัมพันธ์ลึกลับระหว่างตัวเลขกับชีวิตมนุษย์ ผ่านชื่อและวันเกิดของคุณ
            เราสามารถถอดรหัสความลับของบุคลิกภาพ ความสามารถ และเส้นทางชีวิตที่เหมาะสมที่สุด
          </p>
        </div>

        {/* Sophisticated Core Numbers */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12 tracking-wide">เลขหลักสำคัญ 4 ตัว</h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {concepts.map((concept, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${concept.bgColor} p-8 backdrop-blur-sm border ${concept.borderColor} transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer`}
              >
                <div className="text-center">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 border border-white/10">
                    <concept.icon className={`h-8 w-8 ${concept.color}`} />
                  </div>

                  <h4 className="mb-4 text-xl font-semibold text-white group-hover:text-orange-300 transition-colors tracking-wide">
                    {concept.title}
                  </h4>

                  <p className="text-sm text-gray-400 leading-relaxed font-light">{concept.description}</p>
                </div>

                {/* Sophisticated Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Elegant Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12 tracking-wide">ประโยชน์ที่คุณจะได้รับ</h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-orange-500/30 transition-all duration-500 hover:scale-105"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>

                <h4 className="mb-4 text-lg font-semibold text-white group-hover:text-orange-300 transition-colors tracking-wide">
                  {benefit.title}
                </h4>

                <p className="text-sm text-gray-400 leading-relaxed font-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sophisticated CTA */}
        <div className="text-center">
          <a
            href="/wizard/step1"
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-2xl font-semibold text-xl hover:from-orange-600 hover:to-red-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 border border-orange-400/20"
          >
            <Sparkles className="h-6 w-6" />
            <span className="tracking-wide">เริ่มค้นพบตัวเองเลย</span>
          </a>
        </div>
      </div>
    </section>
  )
}

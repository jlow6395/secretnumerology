import { Brain, Heart, User, Phone, Shield, Star, Zap, Target } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: Brain,
      title: "เลขหลักครบถ้วน 17+ สูตร",
      description: "ค้นพบเลข Life Path, Expression, Soul Urge, Personality และอีกมากมาย",
      gradient: "from-orange-500 to-red-500",
      features: ["เลขชีวิต", "เลขแสดงออก", "เลขดวงใจ", "เลขบุคลิกภาพ"],
    },
    {
      icon: Heart,
      title: "วิเคราะห์ความเข้ากันครบถ้วน",
      description: "ตรวจสอบความเข้ากันในความรัก การงาน และครอบครัว",
      gradient: "from-red-500 to-pink-500",
      features: ["ความรัก", "การงาน", "ครอบครัว", "มิตรภาพ"],
    },
    {
      icon: User,
      title: "คำแนะนำจากพระเกจิ",
      description: "รับคำแนะนำและพรจากพระเกจิอาจารย์ที่เชี่ยวชาญด้านเลขศาสตร์",
      gradient: "from-amber-500 to-orange-500",
      features: ["คำแนะนำส่วนตัว", "พรจากพระเกจิ", "ยันต์มงคล", "คาถาเสริมดวง"],
    },
    {
      icon: Phone,
      title: "เบอร์โทรศัพท์มงคล",
      description: "ค้นหาเบอร์โทรศัพท์ที่เหมาะสมกับเลขชีวิตและเสริมดวงชะตา",
      gradient: "from-green-500 to-teal-500",
      features: ["เบอร์มงคล", "เบอร์เสริมดวง", "เบอร์หลีกเลี่ยง", "คำแนะนำการใช้"],
    },
  ]

  const additionalFeatures = [
    {
      icon: Shield,
      title: "ยันต์เสริมดวง",
      description: "ยันต์ส่วนตัวตามเลขศาสตร์",
    },
    {
      icon: Star,
      title: "Angel Numbers",
      description: "ความหมายเลขนำโชคจากเทวดา",
    },
    {
      icon: Zap,
      title: "วงจรชีวิต",
      description: "ช่วงเวลาสำคัญในชีวิต",
    },
    {
      icon: Target,
      title: "เลขนำโชค",
      description: "เลขมงคลประจำวันและเดือน",
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/2 via-transparent to-red-500/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="mb-8 inline-flex items-center space-x-3 rounded-full bg-gradient-to-r from-gray-900/80 to-black/80 px-8 py-4 backdrop-blur-xl border border-orange-500/20">
            <div className="p-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
              <Star className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm text-orange-300 font-medium tracking-wide">ครบครันที่สุด</span>
          </div>

          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-8 tracking-tight">
            สิ่งที่คุณจะ
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> ได้รับ</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            ระบบเลขศาสตร์ที่ครบครันและแม่นยำที่สุด พร้อมคำแนะนำจากผู้เชี่ยวชาญ
          </p>
        </div>

        {/* Sophisticated Main Benefits */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/30 to-black/30 p-8 backdrop-blur-sm border border-gray-700/30 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative z-10">
                {/* Elegant Icon */}
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${benefit.gradient} shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-semibold text-white group-hover:text-orange-300 transition-colors tracking-wide">
                  {benefit.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed font-light">{benefit.description}</p>

                {/* Refined Features List */}
                <div className="grid grid-cols-2 gap-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-400 to-red-400" />
                      <span className="text-sm text-gray-400 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sophisticated Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5 opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl" />
            </div>
          ))}
        </div>

        {/* Elegant Additional Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12 tracking-wide">ฟีเจอร์เพิ่มเติม</h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-900/20 to-black/20 backdrop-blur-sm border border-gray-700/20 hover:border-orange-500/30 transition-all duration-500 hover:scale-105"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>

                <h4 className="mb-4 text-lg font-semibold text-white group-hover:text-orange-300 transition-colors tracking-wide">
                  {feature.title}
                </h4>

                <p className="text-sm text-gray-400 leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sophisticated Testimonial */}
        <div className="text-center bg-gradient-to-r from-orange-900/10 to-red-900/10 rounded-3xl p-12 border border-orange-500/20 backdrop-blur-sm">
          <div className="mb-8">
            <img
              src="/professional-woman-avatar.png"
              alt="คุณสมใจ"
              className="h-20 w-20 rounded-full mx-auto border-4 border-orange-400 shadow-2xl"
            />
          </div>

          <blockquote className="text-2xl font-medium text-white mb-6 max-w-4xl mx-auto leading-relaxed font-light">
            "SecretNumerology ช่วยให้ฉันเข้าใจตัวเองมากขึ้น และสามารถตัดสินใจในเรื่องสำคัญได้ดีขึ้น
            คำแนะนำจากพระเกจิทำให้ฉันรู้สึกมั่นใจและมีพลังใจมากขึ้น"
          </blockquote>

          <div className="text-orange-300 font-semibold text-xl tracking-wide">คุณสมใจ - นักธุรกิจ</div>

          <div className="flex justify-center mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

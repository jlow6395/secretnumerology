import { Shield, RefreshCw, Users, Star, Award, Heart, CheckCircle, Clock } from "lucide-react"

export default function Guarantee() {
  const guarantees = [
    {
      icon: Shield,
      title: "ความปลอดภัย 100%",
      description: "เข้ารหัส SSL 256-bit ปกป้องข้อมูลของคุณ",
      color: "text-emerald-400",
      bgColor: "from-emerald-500/10 to-green-500/10",
    },
    {
      icon: RefreshCw,
      title: "รับประกันคืนเงิน 30 วัน",
      description: "ไม่พอใจ? รับเงินคืนเต็มจำนวน ไม่ถามเหตุผล",
      color: "text-green-400",
      bgColor: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Users,
      title: "ผู้ใช้เชื่อถือ 10K+",
      description: "ร่วมกับผู้ใช้หลักหมื่นคนทั่วโลกที่พึงพอใจ",
      color: "text-orange-400",
      bgColor: "from-orange-500/10 to-red-500/10",
    },
    {
      icon: Star,
      title: "คะแนน 4.9/5 ดาว",
      description: "ได้รับการยกย่องอย่างต่อเนื่องจากผู้ใช้",
      color: "text-amber-400",
      bgColor: "from-amber-500/10 to-orange-500/10",
    },
  ]

  const testimonials = [
    {
      name: "คุณสมชาย",
      role: "นักธุรกิจ",
      image: "/professional-woman-avatar.png",
      rating: 5,
      text: "SecretNumerology เปลี่ยนชีวิตผม! ตอนนี้ผมเข้าใจตัวเองและสามารถตัดสินใจได้ดีขึ้นมาก",
    },
    {
      name: "คุณมาลี",
      role: "ครูอนุบาล",
      image: "/professional-woman-avatar.png",
      rating: 5,
      text: "คำแนะนำจากพระเกจิทำให้ฉันรู้สึกสงบใจและมีทิศทางในชีวิตชัดเจนขึ้น",
    },
    {
      name: "คุณวิชัย",
      role: "วิศวกร",
      image: "/professional-woman-avatar.png",
      rating: 5,
      text: "เลขโทรศัพท์มงคลที่แนะนำทำให้งานผมเจริญก้าวหน้าอย่างเห็นได้ชัด",
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "รางวัลแอปยอดเยี่ยม",
      description: "2023 Best Spiritual App",
    },
    {
      icon: Heart,
      title: "ความพึงพอใจ 99%",
      description: "จากผู้ใช้มากกว่า 10,000 คน",
    },
    {
      icon: CheckCircle,
      title: "ความแม่นยำสูง",
      description: "ตรวจสอบโดยผู้เชี่ยวชาญ",
    },
    {
      icon: Clock,
      title: "บริการ 24/7",
      description: "ทีมสนับสนุนพร้อมช่วยเหลือ",
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/2 via-transparent to-emerald-500/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="mb-8 inline-flex items-center space-x-3 rounded-full bg-gradient-to-r from-gray-900/80 to-black/80 px-8 py-4 backdrop-blur-xl border border-green-500/20">
            <div className="p-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm text-green-300 font-medium tracking-wide">เชื่อถือได้</span>
          </div>

          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-8 tracking-tight">
            ทำไมต้อง
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {" "}
              เชื่อใจเรา?
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            ด้วยประสบการณ์กว่า 15 ปี และความเชื่อใจจากผู้ใช้หลักหมื่นคน
          </p>
        </div>

        {/* Sophisticated Main Testimonial */}
        <div className="mb-20">
          <div className="text-center bg-gradient-to-r from-orange-900/10 to-red-900/10 rounded-3xl p-12 border border-orange-500/20 backdrop-blur-sm">
            <div className="mb-8">
              <img
                src="/professional-woman-avatar.png"
                alt="คุณสุดา"
                className="h-24 w-24 rounded-full mx-auto border-4 border-orange-400 shadow-2xl"
              />
            </div>

            <blockquote className="text-2xl font-medium text-white mb-6 max-w-4xl mx-auto leading-relaxed font-light">
              "ผมใช้ SecretNumerology มา 2 ปีแล้ว ความแม่นยำของการวิเคราะห์และคำแนะนำจากพระเกจิ ทำให้ธุรกิจผมเติบโตขึ้น 300%
              และชีวิตครอบครัวมีความสุขมากขึ้น"
            </blockquote>

            <div className="mb-6">
              <div className="text-orange-300 font-bold text-xl tracking-wide">คุณสุดา เจริญสุข</div>
              <div className="text-gray-400 font-light">CEO บริษัทเทคโนโลยี</div>
            </div>

            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Sophisticated Guarantees Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12 tracking-wide">การรับประกันของเรา</h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${guarantee.bgColor} backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-2xl border border-white/10`}
                >
                  <guarantee.icon className={`h-10 w-10 ${guarantee.color}`} />
                </div>

                <h4 className="mb-4 text-xl font-bold text-white group-hover:text-orange-300 transition-colors tracking-wide">
                  {guarantee.title}
                </h4>

                <p className="text-gray-400 leading-relaxed font-light">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Elegant Customer Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12 tracking-wide">เสียงจากลูกค้าจริง</h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-orange-500/30 rounded-3xl p-8 hover:scale-105 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full border-2 border-orange-400 mr-4 shadow-lg"
                  />
                  <div>
                    <div className="font-semibold text-white tracking-wide">{testimonial.name}</div>
                    <div className="text-sm text-gray-400 font-light">{testimonial.role}</div>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed font-light">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sophisticated Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12 tracking-wide">ความสำเร็จของเรา</h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-gray-900/20 to-black/20 border border-gray-700/20 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl">
                  <achievement.icon className="h-7 w-7 text-white" />
                </div>

                <h4 className="mb-3 text-lg font-semibold text-white tracking-wide">{achievement.title}</h4>

                <p className="text-sm text-gray-400 font-light">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sophisticated Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-900/10 to-red-900/10 rounded-3xl p-12 border border-orange-500/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6 tracking-wide">พร้อมเริ่มต้นการเดินทางแล้วหรือยัง?</h3>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
              เข้าร่วมกับผู้ใช้หลักหมื่นคนที่เปลี่ยนชีวิตด้วยเลขศาสตร์
            </p>

            <a
              href="/wizard/step1"
              className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 border border-orange-400/20"
            >
              <Shield className="h-6 w-6" />
              <span className="tracking-wide">เริ่มต้นอย่างปลอดภัย</span>
            </a>

            <div className="mt-6 text-sm text-gray-400 font-light">✓ ฟรี 100% ✓ ไม่ต้องใส่บัตรเครดิต ✓ ผลลัพธ์ทันที</div>
          </div>
        </div>
      </div>
    </section>
  )
}

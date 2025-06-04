import { Check, Star, Zap, Crown, Gift } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "รายงานฟรี",
      price: "0",
      currency: "฿",
      description: "ทดลองใช้เลขศาสตร์เบื้องต้น",
      features: ["เลขชีวิตพื้นฐาน", "คำอธิบายสั้นๆ", "ส่งทางอีเมล", "การสนับสนุนชุมชน"],
      buttonText: "รับฟรีเลย",
      buttonStyle:
        "border-2 border-gray-600/50 bg-gray-900/30 text-gray-300 hover:bg-gray-800/50 hover:border-orange-400/50 hover:text-orange-300",
      popular: false,
      icon: Gift,
    },
    {
      name: "รายงานครบถ้วน",
      price: "299",
      originalPrice: "849",
      currency: "฿",
      description: "วิเคราะห์เลขศาสตร์แบบครบครัน",
      features: [
        "เลขศาสตร์ครบ 17+ สูตร",
        "วิเคราะห์เส้นทางชีวิตละเอียด",
        "จุดแข็ง-จุดอ่อน",
        "เลขนำโชคส่วนตัว",
        "ดาวน์โหลดรายงาน PDF",
        "การสนับสนุนทางอีเมล",
      ],
      buttonText: "สั่งซื้อเลย",
      buttonStyle:
        "bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 hover:shadow-2xl hover:shadow-orange-900/40 border border-orange-400/20",
      popular: true,
      discount: "ลด 65%",
      icon: Star,
    },
    {
      name: "แพ็คเกจพรีเมียม",
      price: "599",
      originalPrice: "1,699",
      currency: "฿",
      description: "ครบครันที่สุด พร้อม AI และพระเกจิ",
      features: [
        "ทุกอย่างในรายงานครบถ้วน",
        "AI Chat Assistant (1 เดือน)",
        "คำแนะนำจากพระเกจิ",
        "พยากรณ์รายเดือน",
        "การสนับสนุนลำดับแรก",
        "วิเคราะห์ความเข้ากัน",
        "เบอร์โทรศัพท์มงคล",
        "ยันต์เสริมดวงส่วนตัว",
      ],
      buttonText: "อัปเกรดเลย",
      buttonStyle:
        "bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 hover:shadow-2xl hover:shadow-amber-900/40 border border-amber-400/20",
      popular: false,
      discount: "ลด 65%",
      icon: Crown,
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
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm text-orange-300 font-medium tracking-wide">ราคาพิเศษ</span>
          </div>

          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-8 tracking-tight">
            เลือกแพ็คเกจ
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              {" "}
              ที่เหมาะกับคุณ
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            เริ่มต้นด้วยรายงานฟรี หรือปลดล็อคพลังเต็มของเลขศาสตร์ด้วยแพ็คเกจครบครัน
          </p>

          {/* Sophisticated Limited Offer Banner */}
          <div className="inline-flex items-center space-x-3 rounded-full bg-gradient-to-r from-red-600/20 to-pink-600/20 px-8 py-4 shadow-2xl border border-red-500/30 backdrop-blur-sm animate-pulse">
            <Zap className="h-5 w-5 text-red-400" />
            <span className="text-lg font-bold text-red-300 tracking-wide">โปรโมชั่นพิเศษ - ลด 65% เหลือเพียง 3 วัน!</span>
          </div>
        </div>

        {/* Sophisticated Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                plan.popular
                  ? "border-orange-400/50 bg-gradient-to-br from-orange-900/20 to-red-900/20 shadow-2xl shadow-orange-900/25 scale-105"
                  : "border-gray-700/30 bg-gradient-to-br from-gray-900/30 to-black/30 hover:border-orange-400/30"
              }`}
            >
              {/* Sophisticated Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-6 py-2 shadow-2xl border border-orange-400/30">
                    <Star className="h-4 w-4 text-white" fill="currentColor" />
                    <span className="text-sm font-bold text-white tracking-wide">ยอดนิยม</span>
                  </div>
                </div>
              )}

              {/* Elegant Discount Badge */}
              {plan.discount && (
                <div className="absolute top-6 right-6">
                  <div className="rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-4 py-2 text-sm font-bold text-white animate-pulse border border-red-400/30">
                    {plan.discount}
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Sophisticated Icon & Title */}
                <div className="text-center mb-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl">
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{plan.name}</h3>
                  <p className="text-gray-400 font-light">{plan.description}</p>
                </div>

                {/* Elegant Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white tracking-tight">
                      {plan.currency}
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="ml-3 text-xl text-gray-400 line-through">
                        {plan.currency}
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  {plan.originalPrice && (
                    <div className="mt-2 text-green-400 font-semibold tracking-wide">
                      ประหยัด {plan.currency}
                      {Number.parseInt(plan.originalPrice) - Number.parseInt(plan.price)}
                    </div>
                  )}
                </div>

                {/* Refined Features */}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Sophisticated CTA Button */}
                <button
                  className={`w-full rounded-2xl px-8 py-4 font-bold text-lg transition-all duration-500 ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Elegant Money Back Guarantee */}
        <div className="text-center bg-gradient-to-r from-green-900/10 to-emerald-900/10 rounded-3xl p-8 border border-green-500/20 backdrop-blur-sm">
          <div className="mb-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-600 shadow-2xl">
              <Check className="h-8 w-8 text-white" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">รับประกันความพึงพอใจ 100%</h3>
          <p className="text-gray-300 max-w-2xl mx-auto font-light">
            หากไม่พอใจในรายงานของเรา เราจะคืนเงินให้ 100% ภายใน 30 วัน ไม่มีเงื่อนไข
          </p>
        </div>
      </div>
    </section>
  )
}

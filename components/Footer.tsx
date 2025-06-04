import {
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  Star,
  Users,
  Award,
  Shield,
  Clock,
  Zap,
  Target,
} from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "หน้าแรก", href: "/" },
    { name: "คำนวณเลขศาสตร์", href: "/calculator" },
    { name: "เลขศาสตร์", href: "/numerology" },
    { name: "ปีนักษัตรจีน", href: "/chinese-zodiac" },
    { name: "บล็อก", href: "/blog" },
  ]

  const numerologyLinks = [
    { name: "เลขชีวิต", href: "/numerology/life-path" },
    { name: "เลขแสดงออก", href: "/numerology/expression" },
    { name: "เลขดวงใจ", href: "/numerology/hearts-desire" },
    { name: "เลขบุคลิกภาพ", href: "/numerology/personality" },
    { name: "ความเข้ากัน", href: "/numerology/compatibility" },
    { name: "Angel Numbers", href: "/numerology/angel-numbers" },
  ]

  const companyLinks = [
    { name: "เกี่ยวกับเรา", href: "/about" },
    { name: "ติดต่อเรา", href: "/contact" },
    { name: "ทีมงาน", href: "/team" },
    { name: "ข่าวสาร", href: "/news" },
    { name: "อาชีพ", href: "/careers" },
  ]

  const supportLinks = [
    { name: "ศูนย์ช่วยเหลือ", href: "/help" },
    { name: "คำถามที่พบบ่อย", href: "/faq" },
    { name: "วิธีการใช้งาน", href: "/guide" },
    { name: "รายงานปัญหา", href: "/report" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-orange-400" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-orange-400" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-red-400" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-400" },
  ]

  const stats = [
    { icon: Users, value: "10K+", label: "ผู้ใช้งาน", color: "from-orange-500 to-red-500" },
    { icon: Star, value: "17+", label: "ปีประสบการณ์", color: "from-amber-500 to-orange-500" },
    { icon: Award, value: "4.9★", label: "คะแนนรีวิว", color: "from-yellow-500 to-amber-500" },
    { icon: Heart, value: "99%", label: "ความพึงพอใจ", color: "from-red-500 to-pink-500" },
  ]

  const trustFeatures = [
    { icon: Shield, title: "ความปลอดภัย", desc: "ข้อมูลเข้ารหัส SSL" },
    { icon: Clock, title: "บริการ 24/7", desc: "ช่วยเหลือตลอดเวลา" },
    { icon: Zap, title: "ผลลัพธ์ทันที", desc: "คำนวณแบบเรียลไทม์" },
    { icon: Target, title: "ความแม่นยำ", desc: "อัลกอริทึมที่แม่นยำ" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-orange-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse delay-2000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 bg-clip-text text-transparent mb-4">
              ความเชื่อใจจากผู้ใช้งานทั่วโลก
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              เข้าร่วมกับชุมชนผู้ที่เชื่อมั่นในพลังแห่งเลขศาสตร์และค้นพบความลับที่ซ่อนอยู่ในตัวคุณ
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm border border-white/10`}
                  >
                    <stat.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-3">
                  <feature.icon className="h-6 w-6 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                </div>
                <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative group">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-gray-800 via-gray-700 to-black flex items-center justify-center shadow-2xl border border-orange-500/30 group-hover:border-orange-500/50 transition-all duration-500">
                  <img
                    src="/images/yin-yang-logo.png"
                    alt="SecretNumerology Logo"
                    className="h-10 w-10 group-hover:rotate-180 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 bg-clip-text text-transparent">
                  SecretNumerology
                </span>
                <div className="text-sm text-gray-400 font-medium">เปิดเผยความลับแห่งตัวเลข</div>
              </div>
            </div>

            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              ปลดล็อคความลับที่ซ่อนอยู่ในตัวคุณด้วยพลังแห่งเลขศาสตร์ สำรวจสูตรเลขศาสตร์ศักดิ์สิทธิ์กว่า 17 สูตร และค้นพบพรมพิเศษวิชาของคุณ
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-orange-300 transition-colors duration-300 group">
                <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">support@secretnumerology.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-orange-300 transition-colors duration-300 group">
                <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">+66 2 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-orange-300 transition-colors duration-300 group">
                <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm">กรุงเทพมหานคร, ประเทศไทย</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition-all duration-300 hover:bg-orange-500/20 hover:scale-110 border border-white/10 hover:border-orange-500/30 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
              <span>ลิงก์ด่วน</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 transition-all hover:text-orange-300 text-sm hover:translate-x-2 transition-transform duration-300 block py-1 px-2 rounded-lg hover:bg-orange-500/10"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Numerology */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
              <span>เลขศาสตร์</span>
            </h3>
            <ul className="space-y-3">
              {numerologyLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 transition-all hover:text-orange-300 text-sm hover:translate-x-2 transition-transform duration-300 block py-1 px-2 rounded-lg hover:bg-orange-500/10"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
              <span>บริษัท</span>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 transition-all hover:text-orange-300 text-sm hover:translate-x-2 transition-transform duration-300 block py-1 px-2 rounded-lg hover:bg-orange-500/10"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
              <span>ช่วยเหลือ</span>
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 transition-all hover:text-orange-300 text-sm hover:translate-x-2 transition-transform duration-300 block py-1 px-2 rounded-lg hover:bg-orange-500/10"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Selector */}
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">ภาษา</h4>
              <button className="flex items-center space-x-2 rounded-xl bg-white/5 px-4 py-2 text-gray-300 transition-all hover:bg-orange-500/20 hover:text-white border border-white/10 hover:border-orange-500/30">
                <Globe className="h-4 w-4" />
                <span>🇹🇭 ไทย</span>
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-orange-900/20 via-red-900/20 to-amber-900/20 p-8 border border-orange-500/20 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 bg-clip-text text-transparent mb-2">
              รับข้อมูลเลขศาสตร์ล่าสุด
            </h3>
            <p className="text-gray-400 mb-6">สมัครรับจดหมายข่าวเพื่อรับเคล็ดลับเลขศาสตร์และข้อมูลใหม่ๆ</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="อีเมลของคุณ"
                className="flex-1 px-4 py-3 rounded-xl bg-black/30 border border-orange-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                สมัครสมาชิก
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-orange-500/20 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 SecretNumerology. สงวนลิขสิทธิ์ทั้งหมด</p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-orange-300 transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="/terms" className="text-gray-400 hover:text-orange-300 transition-colors">
                ข้อกำหนดการใช้งาน
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-orange-300 transition-colors">
                นโยบายคุกกี้
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

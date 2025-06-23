/**
 * Numerology Icon System for Secret Numerology App
 * 
 * หลักการออกแบบ:
 * 1. ใช้ icon ที่สื่อความหมายตรงกับเลขศาสตร์
 * 2. มีความสอดคล้องกับวัฒนธรรมไทย
 * 3. เข้าใจง่าย ไม่งงเวลาใช้งาน
 * 4. Beautiful & Premium feeling
 * 5. Apple design principles
 */

import {
  // Core numerology concepts
  Hash,           // สำหรับเลขทั่วไป
  Calculator,     // การคำนวณ
  Target,         // เป้าหมาย, จุดมุ่งหมาย
  Compass,        // เส้นทางชีวิต (Life Path)
  
  // Spiritual & mystical
  Sparkles,       // พลังจิตวิญญาณ, ความมหัศจรรย์
  Star,           // เลขเทวดา, ความสำคัญ
  Sun,            // พลังแสง, การเปล่งออรา
  Moon,           // พลังลึกลับ, จิตใต้สำนึก
  Zap,            // พลังงาน, แรงสั่นสะเทือน
  
  // Human characteristics
  Heart,          // ความรัก, ความรู้สึก, Soul Urge
  User,           // บุคลิกภาพ, ตัวตน
  Users,          // ความสัมพันธ์, ครอบครัว
  Eye,            // การมองเห็น, ความเข้าใจ
  
  // Life & growth
  Calendar,       // เวลา, วงจรชีวิต
  TrendingUp,     // การเติบโต, ความก้าวหน้า
  Clock,          // ช่วงเวลา, การจับเวลา
  Sunrise,        // จุดเริ่มต้น, ความหวัง
  
  // Career & success
  Briefcase,      // อาชีพ, การงาน
  Crown,          // ความสำเร็จ, ผู้นำ
  Trophy,         // ผลสำเร็จ, ชัยชนะ
  Gem,            // ความมีค่า, สิ่งล้ำค่า
  
  // Communication & expression
  MessageCircle,  // การสื่อสาร, Expression Number
  Megaphone,      // การแสดงออก
  Music,          // ศิลปะ, ความคิดสร้างสรรค์
  PenTool,        // การเขียน, การสร้างสรรค์
  
  // Technology & modern
  Phone,          // เบอร์โทรศัพท์
  Smartphone,     // เทคโนโลยี
  Wifi,           // การเชื่อมต่อ
  
  // Action & navigation
  Plus,           // เพิ่ม, ขยาย
  ChevronRight,   // นำทาง, ไปต่อ
  ArrowRight,     // ทิศทาง
  MoreHorizontal, // ตัวเลือกเพิ่มเติม
  
  // Status & feedback
  Lock,           // ล็อค, เนื้อหาพรีเมียม
  Unlock,         // ปลดล็อค
  Shield,         // ความปลอดภัย, การป้องกัน
  CheckCircle,    // เสร็จสิ้น, ความสำเร็จ
  XCircle,        // ปิด, ยกเลิก
  AlertCircle,    // แจ้งเตือน
  
  // Settings & controls
  Settings,       // การตั้งค่า
  Filter,         // กรอง, เลือก
  Search,         // ค้นหา
  Download,       // ดาวน์โหลด
  Share,          // แชร์
  
  // Emotions & feelings
  Smile,          // ความสุข
  Frown,          // ความเศร้า
  ThumbsUp,       // ชอบ
  
} from 'lucide-react'

// ========== ICON CATEGORIES ==========

/**
 * 🔢 CORE NUMEROLOGY ICONS
 * ไอคอนหลักสำหรับแนวคิดเลขศาสตร์
 */
export const CoreNumerologyIcons = {
  // เลขชีวิตหลัก
  lifePath: Compass,           // เส้นทางชีวิต - เหมือนเข็มทิศ
  expression: MessageCircle,   // การแสดงออก - การสื่อสาร
  soulUrge: Heart,            // ความปรารถนาของจิตวิญญาณ
  personality: User,          // บุคลิกภาพ
  talent: Sparkles,           // พรสวรรค์
  
  // เลขพิเศษ
  masterNumber: Crown,        // เลขมาสเตอร์ - ความยิ่งใหญ่
  angelNumber: Star,          // เลขเทวดา
  sunNumber: Sun,             // เลขดวงอาทิตย์
  
  // การคำนวณ
  calculate: Calculator,      // คำนวณ
  number: Hash,              // ตัวเลข
  formula: Target,           // สูตร
} as const

/**
 * 🌟 SPIRITUAL & MYSTICAL ICONS  
 * ไอคอนเชิงจิตวิญญาณและลึกลับ
 */
export const SpiritualIcons = {
  spirituality: Sparkles,     // จิตวิญญาณ
  mystical: Moon,            // ความลึกลับ
  energy: Zap,               // พลังงาน
  aura: Sun,                 // ออรา
  meditation: Eye,           // การทำสมาธิ
  yantra: Shield,            // ยันต์
  blessing: Star,            // พร
  protection: Shield,        // การปกป้อง
} as const

/**
 * 👥 RELATIONSHIP & COMPATIBILITY ICONS
 * ไอคอนเรื่องความสัมพันธ์และความเข้ากัน
 */
export const RelationshipIcons = {
  love: Heart,               // ความรัก
  compatibility: Users,      // ความเข้ากัน
  family: Users,            // ครอบครัว
  friendship: Users,        // มิตรภาพ
  partnership: Users,       // หุ้นส่วน
  marriage: Heart,          // การแต่งงาน
  soulmate: Heart,          // คู่แท้
} as const

/**
 * 💼 CAREER & SUCCESS ICONS
 * ไอคอนเรื่องอาชีพและความสำเร็จ
 */
export const CareerIcons = {
  career: Briefcase,         // อาชีพ
  success: Trophy,           // ความสำเร็จ
  leadership: Crown,         // ความเป็นผู้นำ
  wealth: Gem,              // ความมั่งคั่ง
  business: Briefcase,       // ธุรกิจ
  growth: TrendingUp,        // การเติบโต
  opportunity: Target,       // โอกาส
} as const

/**
 * 📅 TIME & CYCLES ICONS
 * ไอคอนเรื่องเวลาและวงจรชีวิต
 */
export const TimeIcons = {
  lifeCycle: Calendar,       // วงจรชีวิต
  personalYear: Calendar,    // ปีส่วนตัว
  personalMonth: Calendar,   // เดือนส่วนตัว
  timing: Clock,            // การจับเวลา
  future: Sunrise,          // อนาคต
  transformation: TrendingUp, // การเปลี่ยนแปลง
} as const

/**
 * 📱 MODERN LIFE ICONS
 * ไอคอนเรื่องชีวิตสมัยใหม่
 */
export const ModernLifeIcons = {

  technology: Smartphone,    // เทคโนโลยี
  connection: Wifi,         // การเชื่อมต่อ
  communication: MessageCircle, // การสื่อสาร
} as const

/**
 * 🎨 CREATIVE & EXPRESSION ICONS
 * ไอคอนเรื่องความคิดสร้างสรรค์และการแสดงออก
 */
export const CreativeIcons = {
  creativity: PenTool,       // ความคิดสร้างสรรค์
  art: Music,               // ศิลปะ
  expression: Megaphone,     // การแสดงออก
  inspiration: Sparkles,     // แรงบันดาลใจ
} as const

/**
 * 🔧 UI & INTERACTION ICONS
 * ไอคอนสำหรับ UI และการโต้ตอบ
 */
export const UIIcons = {
  expand: Plus,              // ขยาย
  navigate: ChevronRight,    // นำทาง
  close: XCircle,           // ปิด
  settings: Settings,        // ตั้งค่า
  premium: Crown,           // พรีเมียม
  locked: Lock,             // ล็อค
  unlocked: Unlock,         // ปลดล็อค
  success: CheckCircle,     // สำเร็จ
  warning: AlertCircle,     // เตือน
  download: Download,       // ดาวน์โหลด
  share: Share,            // แชร์
} as const

// ========== ICON MAPPING BY CONTEXT ==========

/**
 * 📊 DASHBOARD ICONS
 * ไอคอนสำหรับหน้า Dashboard
 */
export const DashboardIconMap = {
  insight: Sparkles,         // Insight of the day
  stats: TrendingUp,         // สถิติ
  profile: User,            // โปรไฟล์
  navigation: ChevronRight,  // การนำทาง
  premium: Crown,           // พรีเมียม
  settings: Settings,       // ตั้งค่า
} as const

/**
 * 🔢 NUMBER TYPE ICONS
 * ไอคอนตามประเภทของเลข
 */
export const NumberTypeIconMap = {
  1: Crown,                 // ผู้นำ
  2: Users,                // ความร่วมมือ
  3: MessageCircle,        // การสื่อสาร
  4: Shield,               // ความมั่นคง
  5: Zap,                  // ความเป็นอิสระ
  6: Heart,                // ความรัก
  7: Eye,                  // จิตวิญญาณ
  8: Trophy,               // ความสำเร็จ
  9: Star,                 // ความสมบูรณ์
  11: Crown,               // Master Number
  22: Gem,                 // Master Builder
  33: Sun,                 // Master Teacher
} as const

// ========== USAGE GUIDELINES ==========

/**
 * 📋 ICON USAGE RULES
 * กฎการใช้ไอคอนเพื่อความสวยงามและเข้าใจง่าย
 */
export const IconUsageGuidelines = {
  // ขนาดไอคอน
  sizes: {
    small: 'w-4 h-4',      // 16px - ใน text, badges
    medium: 'w-5 h-5',     // 20px - navigation, buttons
    large: 'w-6 h-6',      // 24px - cards, headers
    xlarge: 'w-8 h-8',     // 32px - featured elements
    hero: 'w-12 h-12',     // 48px - main features
  },
  
  // สีไอคอน
  colors: {
    primary: 'text-white',           // สีหลัก
    secondary: 'text-gray-400',      // สีรอง
    accent: 'text-amber-400',        // สีเน้น (ทอง 5%)
    success: 'text-green-400',       // สำเร็จ
    warning: 'text-amber-400',       // เตือน
    danger: 'text-red-400',          // อันตราย
    muted: 'text-gray-500',          // เบา
  },
  
  // Context การใช้งาน
  contexts: {
    navigation: 'ใช้ไอคอนที่คุ้นเคย เช่น Home, Settings, User',
    features: 'ใช้ไอคอนที่สื่อความหมายชัดเจน',
    status: 'ใช้สีและรูปร่างที่สื่อสถานะ',
    premium: 'ใช้ Crown, Lock, Sparkles สำหรับเนื้อหาพรีเมียม',
  }
} as const

// ========== RECOMMENDATION FUNCTIONS ==========

/**
 * 🎯 GET RECOMMENDED ICON
 * ฟังก์ชันแนะนำไอคอนตาม context
 */
export const getRecommendedIcon = (context: string, subContext?: string) => {
  const iconMap: Record<string, any> = {
    // Core numerology
    'life-path': CoreNumerologyIcons.lifePath,
    'expression': CoreNumerologyIcons.expression,
    'soul-urge': CoreNumerologyIcons.soulUrge,
    'personality': CoreNumerologyIcons.personality,
    'talent': CoreNumerologyIcons.talent,
    
    // Spiritual
    'spiritual': SpiritualIcons.spirituality,
    'mystical': SpiritualIcons.mystical,
    'energy': SpiritualIcons.energy,
    
    // Relationships
    'love': RelationshipIcons.love,
    'compatibility': RelationshipIcons.compatibility,
    'family': RelationshipIcons.family,
    
    // Career
    'career': CareerIcons.career,
    'success': CareerIcons.success,
    'business': CareerIcons.business,
    
    // Time
    'life-cycle': TimeIcons.lifeCycle,
    'timing': TimeIcons.timing,
    
    // Modern
    'phone': ModernLifeIcons.luckyPhone,
    'technology': ModernLifeIcons.technology,
    
    // UI
    'premium': UIIcons.premium,
    'locked': UIIcons.locked,
    'settings': UIIcons.settings,
  }
  
  return iconMap[context] || Hash
}

/**
 * 🌈 ICON COLOR SCHEME
 * รูปแบบสีสำหรับไอคอนแต่ละประเภท
 */
export const getIconColorScheme = (type: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger') => {
  const schemes = {
    primary: 'text-white hover:text-gray-200',
    secondary: 'text-gray-400 hover:text-gray-300',
    accent: 'text-amber-400 hover:text-amber-300',
    success: 'text-green-400 hover:text-green-300',
    warning: 'text-amber-400 hover:text-amber-300',
    danger: 'text-red-400 hover:text-red-300',
  }
  
  return schemes[type]
}

/**
 * 📱 RESPONSIVE ICON SIZES
 * ขนาดไอคอนที่เหมาะกับแต่ละอุปกรณ์
 */
export const getResponsiveIconSize = (size: 'sm' | 'md' | 'lg') => {
  const sizes = {
    sm: 'w-4 h-4 md:w-5 md:h-5',      // เล็ก
    md: 'w-5 h-5 md:w-6 md:h-6',      // กลาง
    lg: 'w-6 h-6 md:w-8 md:h-8',      // ใหญ่
  }
  
  return sizes[size]
}

// Export all icons and utilities
// Note: Already exported above using 'export const' declarations 
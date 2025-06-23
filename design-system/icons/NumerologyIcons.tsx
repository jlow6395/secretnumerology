/**
 * Custom SVG Icons for Secret Numerology App
 * 
 * Features:
 * - เฉพาะเลขศาสตร์ไทย
 * - Apple-style minimalism  
 * - Dark theme optimized
 * - Touch-friendly (24x24 minimum)
 * - Semantic meanings
 */

import React from 'react'

// ========== BASE ICON COMPONENT ==========
interface IconProps {
  className?: string
  size?: number
  color?: string
  strokeWidth?: number
}

export const BaseIcon: React.FC<IconProps & { children: React.ReactNode; viewBox?: string }> = ({ 
  children, 
  className = "", 
  size = 24, 
  color = "currentColor",
  strokeWidth = 1.5,
  viewBox = "0 0 24 24"
}) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
)

// ========== 🏠 DASHBOARD ICONS ==========

/**
 * ✨ Insight of the Day - ดวงดาววิเศษ
 */
export const InsightIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* ดาวหลัก */}
    <polygon points="12,2 15.09,8.26 22,9 17,14.74 18.18,21.02 12,17.77 5.82,21.02 7,14.74 2,9 8.91,8.26" />
    {/* แสงประกาย */}
    <path d="M12 2v4M12 18v4M22 12h-4M6 12H2" />
    {/* วงกลมกลาง */}
    <circle cx="12" cy="12" r="3" />
  </BaseIcon>
)

/**
 * 📊 Stats & Analytics - กราฟพลังงาน
 */
export const StatsIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* แกน X-Y */}
    <path d="M3 3v18h18" />
    {/* แท่งกราฟ */}
    <path d="M7 16V9M12 16V6M17 16v-3" />
    {/* จุดข้อมูล */}
    <circle cx="7" cy="9" r="1" />
    <circle cx="12" cy="6" r="1" />
    <circle cx="17" cy="13" r="1" />
    {/* เส้นเชื่อม */}
    <path d="M7 9l5-3 5 7" />
  </BaseIcon>
)

/**
 * 👤 Profile - ร่างมนุษย์กับออรา
 */
export const ProfileIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* หัว */}
    <circle cx="12" cy="7" r="4" />
    {/* ตัว */}
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    {/* ออรา */}
    <circle cx="12" cy="12" r="10" strokeDasharray="2 3" opacity="0.5" />
  </BaseIcon>
)

/**
 * ⚙️ Settings - เฟืองดวงดาว
 */
export const SettingsIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* เฟืองหลัก */}
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6M12 17v6M22.87 12l-5.2-3M6.33 15l-5.2 3M22.87 12l-5.2 3M6.33 9l-5.2-3" />
    {/* จุดกลาง */}
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </BaseIcon>
)

// ========== 🧭 NAVIGATION ICONS ==========

/**
 * 🏠 Home - บ้านทรงไทย
 */
export const HomeIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* หลังคาทรงไทย */}
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    {/* ประตู */}
    <polyline points="9,22 9,12 15,12 15,22" />
    {/* หลังคาชั้นบน */}
    <path d="M5 9l7-5 7 5" strokeDasharray="1 2" />
  </BaseIcon>
)

/**
 * ❤️ Love & Relationship - หัวใจคู่
 */
export const LoveIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* หัวใจคู่ */}
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    {/* เส้นเชื่อม */}
    <path d="M8 12h8M12 8v8" strokeWidth="1" />
  </BaseIcon>
)

/**
 * 📱 Numbers & Phone - โทรศัพท์มงคล
 */
export const PhoneIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* โทรศัพท์ */}
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    {/* หน้าจอ */}
    <rect x="7" y="5" width="10" height="12" rx="1" />
    {/* เลขมงคล */}
    <text x="12" y="13" textAnchor="middle" fontSize="8" fill="currentColor">888</text>
    {/* ปุ่มโฮม */}
    <circle cx="12" cy="19" r="1" />
  </BaseIcon>
)

/**
 * 📚 Reports - หนังสือเลขศาสตร์
 */
export const ReportsIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* หนังสือเปิด */}
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    {/* เลขศาสตร์ */}
    <circle cx="7" cy="9" r="1" />
    <path d="M5 13h4M16 9h3M16 13h3" />
    {/* สัญลักษณ์มงคล */}
    <path d="M17 9l1.5-1.5L17 6" strokeWidth="1" />
  </BaseIcon>
)

/**
 * 🤖 AI Chat - หุ่นยนต์ไทย
 */
export const AIChatIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* หัวหุ่นยนต์ */}
    <rect x="6" y="6" width="12" height="12" rx="2" />
    {/* ตา */}
    <circle cx="9" cy="10" r="1" />
    <circle cx="15" cy="10" r="1" />
    {/* ปาก */}
    <path d="M9 15h6" />
    {/* เสาอากาศ */}
    <path d="M9 6V4h6v2M12 4V2" />
    {/* พู่กระดิ่ง */}
    <circle cx="8" cy="4" r="1" strokeDasharray="1 1" />
    <circle cx="16" cy="4" r="1" strokeDasharray="1 1" />
    {/* ฟองคำพูด */}
    <path d="M21 15a2 2 0 0 1-2 2l-1 2-1-2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2z" strokeWidth="1" opacity="0.7" />
  </BaseIcon>
)

/**
 * 🧮 Calculator - เครื่องคำนวณเลขศาสตร์
 */
export const CalculatorIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* เครื่องคำนวณ */}
    <rect x="4" y="2" width="16" height="20" rx="2" />
    {/* หน้าจอ */}
    <rect x="6" y="4" width="12" height="4" rx="1" />
    {/* ปุ่มตัวเลข */}
    <circle cx="8" cy="12" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="16" cy="12" r="1" />
    <circle cx="8" cy="16" r="1" />
    <circle cx="12" cy="16" r="1" />
    <circle cx="16" cy="16" r="1" />
    <circle cx="8" cy="20" r="1" />
    <circle cx="12" cy="20" r="1" />
    <circle cx="16" cy="20" r="1" />
    {/* สัญลักษณ์ */}
    <path d="M6 6h12" strokeWidth="1" />
  </BaseIcon>
)

/**
 * ⏳ Timeline - เส้นเวลาชีวิต
 */
export const TimelineIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* เส้นเวลาหลัก */}
    <path d="M3 12h18" strokeWidth="2" />
    {/* จุดเหตุการณ์ */}
    <circle cx="6" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="18" cy="12" r="2" />
    {/* เส้นเวลาย่อย */}
    <path d="M6 8v8M12 6v12M18 9v6" strokeWidth="1" />
    {/* ป้ายอายุ */}
    <text x="6" y="6" textAnchor="middle" fontSize="6" fill="currentColor">0</text>
    <text x="12" y="4" textAnchor="middle" fontSize="6" fill="currentColor">30</text>
    <text x="18" y="7" textAnchor="middle" fontSize="6" fill="currentColor">60</text>
    {/* ลูกศรอนาคต */}
    <path d="M19 12l2-1v2l-2-1z" fill="currentColor" />
  </BaseIcon>
)

// ========== 🔢 NUMBER-SPECIFIC ICONS ==========

/**
 * 1️⃣ Number 1 - มงกุฎผู้นำ
 */
export const Number1Icon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} viewBox="0 0 32 32">
    {/* มงกุฎ */}
    <path d="M6 20h20l-2-8H8l-2 8zM12 12l2-6 4 6 2-6" />
    {/* อัญมณี */}
    <circle cx="16" cy="16" r="2" />
    <polygon points="13,14 16,10 19,14" />
    {/* เลข 1 */}
    <path d="M15 24h2v4h-2zM14 24h4" strokeWidth="2" />
  </BaseIcon>
)

/**
 * 2️⃣ Number 2 - คู่รักแฝด
 */
export const Number2Icon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} viewBox="0 0 32 32">
    {/* คนคู่ */}
    <circle cx="10" cy="8" r="3" />
    <circle cx="22" cy="8" r="3" />
    <path d="M5 24v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2M17 24v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
    {/* เส้นเชื่อม */}
    <path d="M13 16h6" strokeDasharray="2 2" />
    {/* หัวใจกลาง */}
    <path d="M16 20l-1-1a1 1 0 0 1 0-1.5l1-1 1 1a1 1 0 0 1 0 1.5l-1 1z" fill="currentColor" />
  </BaseIcon>
)

/**
 * 3️⃣ Number 3 - ไมโครโฟนสื่อสาร
 */
export const Number3Icon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} viewBox="0 0 32 32">
    {/* ไมค์ */}
    <rect x="12" y="4" width="8" height="12" rx="4" />
    <path d="M8 14a8 8 0 0 0 16 0M16 22v4M12 26h8" />
    {/* คลื่นเสียง */}
    <path d="M22 10a6 6 0 0 1 0 8M26 8a10 10 0 0 1 0 16M6 18a6 6 0 0 1 0-8M2 24a10 10 0 0 1 0-16" strokeWidth="1" />
  </BaseIcon>
)

/**
 * 7️⃣ Number 7 - ตาจิตวิญญาณ
 */
export const Number7Icon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} viewBox="0 0 32 32">
    {/* ตาใหญ่ */}
    <ellipse cx="16" cy="16" rx="12" ry="8" />
    {/* รูม่านตา */}
    <circle cx="16" cy="16" r="6" />
    <circle cx="16" cy="16" r="3" fill="currentColor" />
    {/* แสงจิตวิญญาณ */}
    <path d="M16 4v4M16 24v4M28 16h-4M8 16H4" strokeWidth="1" />
    <path d="M24.5 7.5l-2.8 2.8M10.3 21.7l-2.8 2.8M24.5 24.5l-2.8-2.8M10.3 10.3l-2.8-2.8" strokeWidth="1" opacity="0.7" />
    {/* เลข 7 กลาง */}
    <path d="M13 13h6l-3 6" strokeWidth="1" fill="none" />
  </BaseIcon>
)

// ========== 🎨 CUSTOM NUMEROLOGY ICONS ==========

/**
 * 🕉️ ยันต์ไทย - Yantra
 */
export const YantraIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} viewBox="0 0 32 32">
    {/* กรอบยันต์ */}
    <rect x="4" y="4" width="24" height="24" rx="2" />
    {/* เส้นตาราง */}
    <path d="M4 10h24M4 16h24M4 22h24M10 4v24M16 4v24M22 4v24" strokeWidth="0.5" />
    {/* สัญลักษณ์กลาง */}
    <circle cx="16" cy="16" r="6" />
    <polygon points="16,10 19,16 16,22 13,16" />
    {/* อักษรไทย */}
    <path d="M12 12h8v8h-8z" strokeWidth="0.5" strokeDasharray="1 1" />
    {/* ดอกบัว */}
    <path d="M16 8l2 2-2 2-2-2zM16 24l2-2-2-2-2 2z" strokeWidth="1" />
  </BaseIcon>
)

/**
 * ☯️ พลังงานสมดุล - Yin Yang
 */
export const EnergyIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* วงกลมใหญ่ */}
    <circle cx="12" cy="12" r="10" />
    {/* ส่วนโค้ง S */}
    <path d="M12 2a10 10 0 0 0 0 20 5 5 0 0 0 0-10 5 5 0 0 1 0-10z" fill="currentColor" />
    {/* จุดเล็ก */}
    <circle cx="12" cy="7" r="1.5" fill="none" stroke="currentColor" />
    <circle cx="12" cy="17" r="1.5" fill="currentColor" stroke="none" />
    {/* พลังงานรอบๆ */}
    <circle cx="12" cy="12" r="14" strokeDasharray="2 4" strokeWidth="0.5" opacity="0.3" />
  </BaseIcon>
)

/**
 * 🌸 ดอกบัวศักดิ์สิทธิ์ - Sacred Lotus
 */
export const LotusIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} viewBox="0 0 32 32">
    {/* กลีบบัวชั้นนอก */}
    <path d="M16 24c-2-2-8-8-8-12a8 8 0 0 1 16 0c0 4-6 10-8 12z" />
    <path d="M8 16c2-2 8-8 12-8a8 8 0 0 1 0 16c-4 0-10-6-12-8z" />
    <path d="M24 16c-2 2-8 8-12 8a8 8 0 0 1 0-16c4 0 10 6 12 8z" />
    <path d="M16 8c2 2 8 8 8 12a8 8 0 0 1-16 0c0-4 6-10 8-12z" />
    
    {/* กลีบชั้นใน */}
    <circle cx="16" cy="16" r="6" />
    <path d="M16 10l3 6-3 6-3-6z" />
    <path d="M10 16l6-3 6 3-6 3z" />
    
    {/* จุดกลาง */}
    <circle cx="16" cy="16" r="2" fill="currentColor" />
  </BaseIcon>
)

/**
 * 🔱 ตราไผ่สัตรูเข็ด - Trident
 */
export const TridentIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* คันไผ่ */}
    <path d="M12 2v20" />
    {/* หัวไผ่สามง่าม */}
    <path d="M8 6l4-4 4 4M8 6l4 4 4-4M12 2v4" />
    {/* ใบไผ่ */}
    <path d="M10 10l-2-2M14 10l2-2M10 14l-2-2M14 14l2-2" strokeWidth="1" />
    {/* ฐาน */}
    <path d="M8 22h8M10 22v2M14 22v2" />
    {/* พลังงาน */}
    <circle cx="12" cy="12" r="8" strokeDasharray="1 3" strokeWidth="0.5" opacity="0.4" />
  </BaseIcon>
)

/**
 * 📿 สร้อยมาลา - Prayer Beads
 */
export const BeadsIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* เม็ดประคำ */}
    <circle cx="12" cy="3" r="1.5" />
    <circle cx="18" cy="6" r="1.5" />
    <circle cx="21" cy="12" r="1.5" />
    <circle cx="18" cy="18" r="1.5" />
    <circle cx="12" cy="21" r="1.5" />
    <circle cx="6" cy="18" r="1.5" />
    <circle cx="3" cy="12" r="1.5" />
    <circle cx="6" cy="6" r="1.5" />
    
    {/* เส้นเชื่อม */}
    <path d="M12 3c4.5 0 9 4.5 9 9s-4.5 9-9 9-9-4.5-9-9 4.5-9 9-9z" strokeDasharray="0.5 2" strokeWidth="0.5" />
    
    {/* จี้กลาง */}
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9v6M9 12h6" strokeWidth="1" />
  </BaseIcon>
)

// ========== 🌟 SPECIAL NUMBER ICONS ==========

/**
 * 👑 Master Number 11
 */
export const MasterNumber11Icon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} viewBox="0 0 32 32">
    {/* มงกุฎคู่ */}
    <path d="M4 18h8l-1-8H5l-1 8zM20 18h8l-1-8h-6l-1 8z" />
    {/* เพชรคู่ */}
    <polygon points="8,12 10,8 12,12 10,16" />
    <polygon points="20,12 22,8 24,12 22,16" />
    {/* พลังเชื่อม */}
    <path d="M12 14h8" strokeDasharray="2 2" />
    <circle cx="16" cy="14" r="1" fill="currentColor" />
    {/* ตัวเลข 11 */}
    <path d="M7 22v4M11 22v4M21 22v4M25 22v4" strokeWidth="2" />
  </BaseIcon>
)

/**
 * 💎 Master Number 22
 */
export const MasterNumber22Icon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} viewBox="0 0 32 32">
    {/* เพชรใหญ่ */}
    <polygon points="16,4 22,10 20,20 12,20 10,10" />
    <path d="M10 10h12M12 20h8" />
    {/* แสงเพชร */}
    <path d="M16 4l-3 6M16 4l3 6M16 4v6" strokeWidth="1" />
    <path d="M10 10l6 10M22 10l-6 10M16 20v8" strokeWidth="1" />
    {/* ตัวเลข 22 */}
    <path d="M6 24h4v4H6zM22 24h4v4h-4z" strokeWidth="1" />
    <path d="M6 28h4M22 28h4" strokeWidth="2" />
  </BaseIcon>
)

/**
 * ☀️ Master Number 33
 */
export const MasterNumber33Icon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props} viewBox="0 0 32 32">
    {/* ดวงอาทิตย์ */}
    <circle cx="16" cy="16" r="8" />
    <circle cx="16" cy="16" r="4" fill="currentColor" />
    {/* แสงอาทิตย์ */}
    <path d="M16 2v4M16 26v4M30 16h-4M6 16H2" strokeWidth="2" />
    <path d="M26.5 5.5l-2.8 2.8M8.3 23.7l-2.8 2.8M26.5 26.5l-2.8-2.8M8.3 8.3l-2.8-2.8" strokeWidth="1.5" />
    {/* พลังสูงสุด */}
    <circle cx="16" cy="16" r="12" strokeDasharray="1 2" strokeWidth="0.5" opacity="0.5" />
    <circle cx="16" cy="16" r="16" strokeDasharray="2 4" strokeWidth="0.3" opacity="0.3" />
    {/* ตัวเลข 33 */}
    <path d="M4 20h4c2 0 2-4 0-4h4M24 20h4c2 0 2-4 0-4h4" strokeWidth="1.5" />
  </BaseIcon>
)

// ========== EXPORT ALL ICONS ==========
export const NumerologyIcons = {
  // Dashboard
  insight: InsightIcon,
  stats: StatsIcon,
  profile: ProfileIcon,
  settings: SettingsIcon,
  
  // Navigation
  home: HomeIcon,
  love: LoveIcon,
  phone: PhoneIcon,
  reports: ReportsIcon,
  aiChat: AIChatIcon,
  calculator: CalculatorIcon,
  timeline: TimelineIcon,
  
  // Numbers
  number1: Number1Icon,
  number2: Number2Icon,
  number3: Number3Icon,
  number7: Number7Icon,
  
  // Spiritual
  yantra: YantraIcon,
  energy: EnergyIcon,
  lotus: LotusIcon,
  trident: TridentIcon,
  beads: BeadsIcon,
  
  // Master Numbers
  master11: MasterNumber11Icon,
  master22: MasterNumber22Icon,
  master33: MasterNumber33Icon,
} as const

// Icon utilities
export const getNumberIcon = (number: number) => {
  const iconMap: Record<number, React.FC<IconProps>> = {
    1: Number1Icon,
    2: Number2Icon,
    3: Number3Icon,
    7: Number7Icon,
    11: MasterNumber11Icon,
    22: MasterNumber22Icon,
    33: MasterNumber33Icon,
  }
  
  return iconMap[number] || Number1Icon
}

export type NumerologyIconType = keyof typeof NumerologyIcons 
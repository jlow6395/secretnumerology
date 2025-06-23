import {
  Home,
  Calculator,
  Phone,
  Users,
  Star,
  Sparkles,
  Heart,
  Users2,
  Briefcase,
  Calendar,
  BookOpen,
  MessageCircle,
  Settings,
  User,
} from "lucide-react"

export const navigationConfig = [
  {
    id: "main",
    title: "หลัก",
    items: [
      {
        id: "dashboard",
        label: "แดชบอร์ด",
        href: "/dashboard",
        icon: Home,
      },
      {
        id: "my-numbers",
        label: "เลขของฉัน",
        href: "/dashboard/my-numbers",
        icon: Calculator,
      },
      {
        id: "lucky-phone",
        label: "เบอร์มงคล",
        href: "/dashboard/lucky-phone",
        icon: Phone,
      },
      {
        id: "personal-year",
        label: "พลังพระเครื่อง",
        href: "/dashboard/personal-year",
        icon: Users,
      },
      {
        id: "angel-numbers",
        label: "Angel Numbers",
        href: "/dashboard/angel-numbers",
        icon: Star,
      },
      {
        id: "yantra",
        label: "ยันต์หนุนดวง",
        href: "/dashboard/yantra",
        icon: Sparkles,
      },
    ],
  },
  {
    id: "compatibility",
    title: "ความเข้ากัน",
    items: [
      {
        id: "compatibility",
        label: "ความรัก",
        href: "/dashboard/compatibility",
        icon: Heart,
      },
      {
        id: "family-compatibility",
        label: "ครอบครัว",
        href: "/dashboard/compatibility/family",
        icon: Users2,
      },
      {
        id: "work-compatibility",
        label: "การงาน",
        href: "/dashboard/compatibility/work",
        icon: Briefcase,
      },
    ],
  },
  {
    id: "tools",
    title: "เครื่องมือ",
    items: [
      {
        id: "life-cycles",
        label: "วงจรชีวิต",
        href: "/dashboard/life-cycles",
        icon: Calendar,
      },
    ],
  },
  {
    id: "other",
    title: "อื่นๆ",
    items: [
      {
        id: "blog",
        label: "บล็อก",
        href: "/blog",
        icon: BookOpen,
      },
      {
        id: "ai-chat",
        label: "AI Chat",
        href: "/dashboard/ai-chat",
        icon: MessageCircle,
      },
      {
        id: "profile",
        label: "โปรไฟล์",
        href: "/dashboard/profile",
        icon: Settings,
      },
      {
        id: "numerology-formulas",
        label: "สูตรคำนวณ",
        href: "/dashboard/numerology-formulas",
        icon: BookOpen,
        description: "สูตรเลขศาสตร์ต่างๆ"
      },
      {
        id: "monk-support",
        label: "พลังพระเกจิ",
        href: "/dashboard/monk-support",
        icon: User,
        description: "พลังบารมีจากพระเกจิอาจารย์"
      },
    ],
  },
]

// Related pages configuration for different sections
export const relatedPagesConfig = {
  "my-numbers": [
    {
      title: "Timeline",
      href: "/dashboard/timeline",
      description: "ดูเหตุการณ์สำคัญในชีวิต"
    },
    {
      title: "Compatibility",
      href: "/dashboard/compatibility",
      description: "ความเข้ากันได้ในด้านต่างๆ"
    },
    {
      title: "Life Cycles",
      href: "/dashboard/life-cycles",
      description: "วงจรชีวิตและพลังงาน"
    }
  ],
  compatibility: [
    {
      title: "เลขของฉัน",
      description: "ดูเลขศาสตร์ส่วนตัวของคุณ",
      href: "/dashboard/my-numbers",
      category: "ข้อมูลส่วนตัว",
    },
    {
      title: "ความเข้ากันในครอบครัว",
      description: "ตรวจสอบความเข้ากันกับสมาชิกครอบครัว",
      href: "/dashboard/compatibility/family",
      category: "ความสัมพันธ์",
    },
    {
      title: "ความเข้ากันในการงาน",
      description: "ตรวจสอบความเข้ากันกับเพื่อนร่วมงาน",
      href: "/dashboard/compatibility/work",
      category: "ความสัมพันธ์",
    },
  ],
  "monk-support": [
    {
      title: "My Numbers",
      href: "/dashboard/my-numbers",
      description: "ดูเลขศาสตร์ทั้งหมดของคุณ"
    },
    {
      title: "Yantra",
      href: "/dashboard/yantra",
      description: "ยันต์มงคลและการป้องกัน"
    }
  ],
  numerology: [
    {
      title: "เลขของฉัน",
      href: "/dashboard/my-numbers",
      description: "ดูเลขศาสตร์ส่วนตัวของคุณ"
    },
    {
      title: "ความเข้ากัน",
      href: "/dashboard/compatibility",
      description: "ตรวจสอบความเข้ากันกับผู้อื่น"
    },
    {
      title: "Timeline",
      href: "/dashboard/timeline",
      description: "เส้นทางชีวิตและเหตุการณ์สำคัญ"
    }
  ],
}

export const pageNavigationConfig = {
  "my-numbers": {
    next: {
      title: "เบอร์มงคล",
      href: "/dashboard/lucky-phone",
      description: "ค้นหาเบอร์โทรศัพท์ที่เหมาะกับคุณ",
    },
  },
  "lucky-phone": {
    previous: {
      title: "เลขของฉัน",
      href: "/dashboard/my-numbers",
      description: "ดูเลขศาสตร์ส่วนตัวของคุณ",
    },
    next: {
      title: "ความเข้ากัน",
      href: "/dashboard/compatibility",
      description: "ตรวจสอบความเข้ากันกับผู้อื่น",
    },
  },
  compatibility: {
    previous: {
      title: "เบอร์มงคล",
      href: "/dashboard/lucky-phone",
      description: "ค้นหาเบอร์โทรศัพท์ที่เหมาะกับคุณ",
    },
    next: {
      title: "วงจรชีวิต",
      href: "/dashboard/life-cycles",
      description: "ดูวงจรชีวิตของคุณ",
    },
  },
  "monk-support": {
    previous: {
      title: "เลขของฉัน",
      href: "/dashboard/my-numbers",
      description: "ดูเลขศาสตร์ส่วนตัวของคุณ",
    },
    next: {
      title: "ยันต์มงคล",
      href: "/dashboard/yantra",
      description: "ยันต์เสริมดวงและป้องกัน",
    }
  },
}

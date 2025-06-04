// Related pages configuration for different sections
export const relatedPagesConfig = {
  "my-numbers": [
    {
      title: "สูตรคำนวณ",
      description: "เรียนรู้วิธีคำนวณเลขศาสตร์ด้วยตัวเอง",
      href: "/dashboard/numerology-formulas",
      category: "เครื่องมือ",
    },
    {
      title: "เบอร์มงคล",
      description: "ค้นหาเบอร์โทรศัพท์ที่เหมาะกับคุณ",
      href: "/dashboard/lucky-phone",
      category: "เครื่องมือ",
    },
    {
      title: "ความเข้ากันในความรัก",
      description: "ตรวจสอบความเข้ากันกับคู่รัก",
      href: "/dashboard/compatibility",
      category: "ความสัมพันธ์",
    },
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
  "lucky-phone": [
    {
      title: "เลขของฉัน",
      description: "ดูเลขศาสตร์ส่วนตัวของคุณ",
      href: "/dashboard/my-numbers",
      category: "ข้อมูลส่วนตัว",
    },
    {
      title: "Angel Numbers",
      description: "ความหมายของเลขนางฟ้า",
      href: "/dashboard/angel-numbers",
      category: "ความหมาย",
    },
    {
      title: "ยันต์หนุนดวง",
      description: "ยันต์เสริมดวงตามเลขศาสตร์",
      href: "/dashboard/yantra",
      category: "เครื่องรางของขลัง",
    },
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
}

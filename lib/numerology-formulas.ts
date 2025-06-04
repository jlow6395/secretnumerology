import { Calculator, Calendar, Hash, Heart, Star, Sun, User, Zap } from "lucide-react"

export const numerologyFormulas = [
  {
    name: "Confidence Score",
    id: "confidence_score",
    input: "ทุกสูตรที่จับมาวัดผล",
    output: "0-100",
    shortMeaning: "ตัววัดความแม่น",
    longMeaning:
      "ค่าความเชื่อมั่น (Confidence Score) คือการประเมินว่า Insight จากสูตร Numerology นั้น 'สอดคล้อง' กับ Insight จากศาสตร์อื่นๆ เช่น โหราศาสตร์จีน, ไทย, MBTI, Human Design, หรือแม้กระทั่งพฤติกรรมผู้ใช้ หรือ AI learning model",
    calculation: "คำนวณจากสูตรร่วม + ปัจจัยเสริม",
    example1:
      "ผู้ใช้เกิด: 29 ธ.ค. 1983\nต้องการดูวันที่ 14 พ.ค. 2025\nขั้นตอน:\n1. คำนวณ Personal Year:\n2 + 9 + 1 + 2 + 1 + 9 + 8 + 3 + 2 + 0 + 2 + 5 = 44 → 4 + 4 = 8\n\n→ Personal Year = 8\n1. เดือน: พฤษภาคม = 5\n2. วัน: 14\nรวมทั้งหมด = 8 + 5 + 1 + 4 = 18 → 1 + 8 = 9\n→ Personal Date Number = 9",
    example2: "ตัวอย่าง:ชื่อ: MART SANYAสระ: A(1), A(1), A(1)รวม: 1+1+1 = 3Heart's Desire Number = 3",
    connection: "ศาสตร์การเชื่อมโยงPersonal Year NumberPersonal Month คือ mini-cycle ของ PY นั้น",
    icon: Calculator,
    bgGradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Life Path Number",
    id: "life_path_number",
    input: "วันเดือนปีเกิด",
    output: "1-9, 11, 22, 33",
    shortMeaning: "เส้นทางชีวิตหลัก",
    longMeaning:
      "Life Path Number คือตัวเลขที่แสดงถึงเส้นทางชีวิตหลักของคุณ บ่งบอกถึงบุคลิกภาพ ความสามารถพิเศษ และความท้าทายที่คุณจะพบเจอตลอดชีวิต",
    calculation: "นำวัน เดือน และปีเกิดมาบวกกัน แล้วลดให้เหลือเลขโดด ยกเว้นเลขมาสเตอร์ 11, 22, 33",
    example1:
      "เกิดวันที่ 29 ธันวาคม 1983\nวัน: 2+9 = 11\nเดือน: 1+2 = 3\nปี: 1+9+8+3 = 21 = 2+1 = 3\nรวม: 11 + 3 + 3 = 17 = 1+7 = 8\nLife Path Number = 8",
    icon: Heart,
    bgGradient: "from-pink-500 to-red-500",
  },
  {
    name: "Expression Number",
    id: "expression_number",
    input: "ชื่อเต็ม (ภาษาอังกฤษ)",
    output: "1-9, 11, 22, 33",
    shortMeaning: "พรสวรรค์และความสามารถ",
    longMeaning:
      "Expression Number หรือ Destiny Number คือตัวเลขที่แสดงถึงพรสวรรค์และความสามารถที่ติดตัวมาแต่กำเนิด บ่งบอกถึงเป้าหมายชีวิตและสิ่งที่คุณควรทำเพื่อบรรลุศักยภาพสูงสุด",
    calculation: "แปลงตัวอักษรในชื่อเต็มเป็นตัวเลขตามระบบ Pythagorean (A=1, B=2, ..., Z=8) แล้วนำมาบวกกัน",
    example1:
      "ชื่อ: JOHN SMITH\nJ(1) + O(6) + H(8) + N(5) = 20\nS(1) + M(4) + I(9) + T(2) + H(8) = 24\nรวม: 20 + 24 = 44 = 4+4 = 8\nExpression Number = 8",
    icon: Hash,
    bgGradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Sun Number",
    id: "sun_number",
    input: "วันและเดือนเกิด",
    output: "1-9",
    shortMeaning: "บุคลิกภาพภายนอก",
    longMeaning:
      "Sun Number คือตัวเลขที่แสดงถึงบุคลิกภาพภายนอกที่คนอื่นมองเห็น บ่งบอกถึงความประทับใจแรกที่คุณสร้างให้กับผู้อื่น และวิธีที่คุณแสดงออกต่อโลกภายนอก",
    calculation: "นำวันและเดือนเกิดมาบวกกัน แล้วลดให้เหลือเลขโดด",
    example1: "เกิดวันที่ 29 ธันวาคม\nวัน: 29 = 2+9 = 11 = 1+1 = 2\nเดือน: 12 = 1+2 = 3\nรวม: 2 + 3 = 5\nSun Number = 5",
    icon: Sun,
    bgGradient: "from-amber-500 to-yellow-500",
  },
  {
    name: "Personal Year Number",
    id: "personal_year_number",
    input: "วันเดือนเกิด + ปีปัจจุบัน",
    output: "1-9",
    shortMeaning: "พลังงานประจำปี",
    longMeaning:
      "Personal Year Number คือตัวเลขที่แสดงถึงพลังงานและโอกาสที่จะเกิดขึ้นในปีนั้นๆ ช่วยให้คุณวางแผนและเตรียมพร้อมรับมือกับสิ่งที่จะเกิดขึ้นในปีนั้น",
    calculation: "นำวัน เดือนเกิด และปีปัจจุบันมาบวกกัน แล้วลดให้เหลือเลขโดด",
    example1:
      "เกิดวันที่ 29 ธันวาคม ต้องการดูปี 2024\nวัน: 2+9 = 11 = 1+1 = 2\nเดือน: 1+2 = 3\nปี: 2+0+2+4 = 8\nรวม: 2 + 3 + 8 = 13 = 1+3 = 4\nPersonal Year Number = 4",
    connection: "เชื่อมโยงกับ Personal Month Number และ Personal Day Number",
    icon: Calendar,
    bgGradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Heart's Desire Number",
    id: "hearts_desire_number",
    input: "สระในชื่อ (ภาษาอังกฤษ)",
    output: "1-9, 11, 22",
    shortMeaning: "ความปรารถนาภายใน",
    longMeaning:
      "Heart's Desire Number หรือ Soul Urge Number คือตัวเลขที่แสดงถึงความปรารถนาลึกๆ ภายในใจ แรงจูงใจ และสิ่งที่ทำให้คุณมีความสุขอย่างแท้จริง",
    calculation: "แปลงเฉพาะสระในชื่อเป็นตัวเลข (A=1, E=5, I=9, O=6, U=3) แล้วนำมาบวกกัน",
    example1: "ชื่อ: JOHN SMITH\nสระ: O(6), I(9)\nรวม: 6 + 9 = 15 = 1+5 = 6\nHeart's Desire Number = 6",
    icon: Star,
    bgGradient: "from-blue-500 to-indigo-500",
  },
  {
    name: "Personality Number",
    id: "personality_number",
    input: "พยัญชนะในชื่อ (ภาษาอังกฤษ)",
    output: "1-9, 11, 22",
    shortMeaning: "บุคลิกภาพที่แสดงออก",
    longMeaning:
      "Personality Number คือตัวเลขที่แสดงถึงบุคลิกภาพที่คุณแสดงออกต่อผู้อื่น วิธีที่คุณจัดการกับสถานการณ์ต่างๆ และภาพลักษณ์ที่คุณต้องการให้ผู้อื่นมองเห็น",
    calculation: "แปลงเฉพาะพยัญชนะในชื่อเป็นตัวเลข แล้วนำมาบวกกัน",
    example1:
      "ชื่อ: JOHN SMITH\nพยัญชนะ: J(1), H(8), N(5), S(1), M(4), T(2), H(8)\nรวม: 1 + 8 + 5 + 1 + 4 + 2 + 8 = 29 = 2+9 = 11 = 1+1 = 2\nPersonality Number = 2",
    icon: User,
    bgGradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Lucky Number",
    id: "lucky_number",
    input: "Life Path Number",
    output: "1-9",
    shortMeaning: "เลขนำโชค",
    longMeaning: "Lucky Number คือตัวเลขที่นำโชคและความโชคดีมาสู่คุณ เป็นตัวเลขที่คุณควรให้ความสำคัญและใช้ในชีวิตประจำวัน",
    calculation: "คำนวณจาก Life Path Number หรือใช้สูตรพิเศษเฉพาะ",
    example1: "Life Path Number = 8\nLucky Number = 8 หรือ 3 (ขึ้นอยู่กับระบบที่ใช้)",
    icon: Zap,
    bgGradient: "from-amber-500 to-red-500",
  },
]

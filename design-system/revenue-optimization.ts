// Revenue Optimization Strategy - เป้าหมาย 300 ล้านบาท
export const revenueOptimization = {
  // Color Strategy for Different Price Points
  pricePoints: {
    // Free/Lead Magnet (0-99 บาท)
    entry: {
      primary: "#6b7280", // Gray - Accessible
      accent: "#14b8a6", // Teal - Trust
      psychology: "Build trust, low commitment",
    },

    // Mid-tier (100-999 บาท)
    midTier: {
      primary: "#a855f7", // Purple - Premium
      accent: "#f59e0b", // Gold - Value
      psychology: "Premium feel, good value",
    },

    // High-end (1,000-9,999 บาท)
    premium: {
      primary: "#f59e0b", // Gold - Luxury
      accent: "#a855f7", // Purple - Exclusive
      psychology: "Luxury positioning, exclusivity",
    },

    // Ultra-premium (10,000+ บาท)
    luxury: {
      primary: "#000000", // Black - Ultimate luxury
      accent: "#f59e0b", // Gold - Success
      psychology: "Ultimate exclusivity, status symbol",
    },
  },

  // Conversion Funnel Colors
  funnel: {
    // Awareness Stage
    awareness: {
      colors: ["#14b8a6", "#6b7280"], // Teal, Gray
      purpose: "Build trust, provide value",
    },

    // Interest Stage
    interest: {
      colors: ["#a855f7", "#14b8a6"], // Purple, Teal
      purpose: "Create mystical appeal, maintain trust",
    },

    // Desire Stage
    desire: {
      colors: ["#f59e0b", "#a855f7"], // Gold, Purple
      purpose: "Trigger desire for premium, exclusivity",
    },

    // Action Stage
    action: {
      colors: ["#f59e0b", "#f43f5e"], // Gold, Rose
      purpose: "Urgency, immediate action",
    },
  },

  // A/B Testing Variations
  testVariations: {
    variant_a: {
      name: "Mystical Purple",
      primary: "#a855f7",
      cta: "#f59e0b",
      hypothesis: "Purple creates spiritual connection",
    },

    variant_b: {
      name: "Luxury Gold",
      primary: "#f59e0b",
      cta: "#a855f7",
      hypothesis: "Gold emphasizes premium value",
    },

    variant_c: {
      name: "Trust Teal",
      primary: "#14b8a6",
      cta: "#f59e0b",
      hypothesis: "Teal builds trust first",
    },
  },
} as const

// Revenue Targets & Color Psychology
export const revenueTargets = {
  // 300 ล้านบาท = 300,000,000 บาท
  totalTarget: 300_000_000,

  // Breakdown by product tiers
  breakdown: {
    // Free users (Lead generation) - 100,000 users
    free: {
      users: 100_000,
      conversionRate: 0.05, // 5% to paid
      colors: ["#6b7280", "#14b8a6"], // Gray, Teal
    },

    // Basic tier (99-499 บาท) - 5,000 customers
    basic: {
      customers: 5_000,
      averageValue: 299,
      revenue: 1_495_000, // 1.5 ล้าน
      colors: ["#a855f7", "#14b8a6"], // Purple, Teal
    },

    // Premium tier (500-2,999 บาท) - 50,000 customers
    premium: {
      customers: 50_000,
      averageValue: 1_499,
      revenue: 74_950_000, // 75 ล้าน
      colors: ["#f59e0b", "#a855f7"], // Gold, Purple
    },

    // VIP tier (3,000-9,999 บาท) - 30,000 customers
    vip: {
      customers: 30_000,
      averageValue: 5_999,
      revenue: 179_970_000, // 180 ล้าน
      colors: ["#000000", "#f59e0b"], // Black, Gold
    },

    // Ultra VIP (10,000+ บาท) - 4,000 customers
    ultraVip: {
      customers: 4_000,
      averageValue: 10_999,
      revenue: 43_996_000, // 44 ล้าน
      colors: ["#000000", "#ffffff"], // Black, White
    },
  },
} as const

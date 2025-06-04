// Component System เพื่อเพิ่มการแปลง (Conversion)
export const conversionComponents = {
  // CTA Buttons - Optimized for Sales
  cta: {
    // Primary CTA - สำหรับการซื้อ
    primary: {
      background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      hover: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
      shadow: "0 8px 25px rgba(245, 158, 11, 0.4)",
      text: "#000000", // Black text on gold
      psychology: "Gold = Success, Achievement, Premium",
    },

    // Secondary CTA - สำหรับ lead generation
    secondary: {
      background: "linear-gradient(135deg, #a855f7 0%, #7c2d92 100%)",
      hover: "linear-gradient(135deg, #c084fc 0%, #a855f7 100%)",
      shadow: "0 8px 25px rgba(168, 85, 247, 0.4)",
      text: "#ffffff",
      psychology: "Purple = Mystical, Exclusive, Spiritual",
    },

    // Urgency CTA - สำหรับ limited offers
    urgency: {
      background: "linear-gradient(135deg, #f43f5e 0%, #be185d 100%)",
      hover: "linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)",
      shadow: "0 8px 25px rgba(244, 63, 94, 0.4)",
      text: "#ffffff",
      psychology: "Rose = Urgency, Desire, Action",
    },
  },

  // Trust Building Elements
  trust: {
    // Testimonial cards
    testimonial: {
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(245, 158, 11, 0.2)",
      glow: "0 0 20px rgba(245, 158, 11, 0.1)",
    },

    // Security badges
    security: {
      background: "rgba(20, 184, 166, 0.1)",
      border: "1px solid rgba(20, 184, 166, 0.3)",
      text: "#14b8a6",
    },

    // Money back guarantee
    guarantee: {
      background: "rgba(16, 185, 129, 0.1)",
      border: "1px solid rgba(16, 185, 129, 0.3)",
      text: "#10b981",
    },
  },

  // Premium Pricing Cards
  pricing: {
    // Basic plan
    basic: {
      background: "rgba(255, 255, 255, 0.03)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      accent: "#6b7280",
    },

    // Popular plan (Most Chosen)
    popular: {
      background: "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(124, 45, 146, 0.1) 100%)",
      border: "2px solid #a855f7",
      glow: "0 0 30px rgba(168, 85, 247, 0.3)",
      badge: "linear-gradient(135deg, #a855f7 0%, #7c2d92 100%)",
    },

    // Premium plan
    premium: {
      background: "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.1) 100%)",
      border: "2px solid #f59e0b",
      glow: "0 0 30px rgba(245, 158, 11, 0.3)",
      badge: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    },
  },
} as const

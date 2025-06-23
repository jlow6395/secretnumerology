/**
 * Apple Dark Design Tokens for Numerology System
 * ระบบสีแบบ Apple Dark Theme + Numerology Mystical Elements
 * 
 * หลักการ:
 * - Pure Black Background (เหมือน Apple)
 * - Minimal Gold Accent (แค่ 5%)
 * - Glassmorphism Effects
 * - High Contrast Typography
 * - Deep Blue + Golden Glow
 */

const appleDarkNumerologyTokens = {
  // ========== COLOR SYSTEM ==========
  colors: {
    // Background Colors - Pure Apple Style
    background: {
      primary: '#000000',        // Pure black - main background
      secondary: '#0a0a0a',      // Almost black - cards
      tertiary: '#1a1a1a',       // Dark gray - elevated surfaces
      quaternary: '#2a2a2a',     // Medium dark - interactive elements
      overlay: 'rgba(0, 0, 0, 0.85)', // Modal overlay
    },

    // Deep Blue System - Primary Brand Color
    deepBlue: {
      50: '#f0f9ff',
      100: '#e0f2fe', 
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',           // Main brand blue
      600: '#0284c7',           // Interactive blue
      700: '#0369a1',           // Deep blue
      800: '#075985',           // Darker blue
      900: '#0c4a6e',           // Deepest blue
      950: '#082f49',           // Almost black blue
    },

    // Text Colors - High Contrast Apple Style
    text: {
      primary: '#ffffff',        // Pure white - main text (21:1 contrast)
      secondary: '#f3f4f6',      // Light gray - secondary text (18:1 contrast)  
      tertiary: '#d1d5db',       // Medium gray - tertiary text (12:1 contrast)
      quaternary: '#9ca3af',     // Gray - muted text (7:1 contrast)
      disabled: '#6b7280',       // Dark gray - disabled text (4.5:1 contrast)
    },

    // Golden Accent - ใช้แค่ 5% (Highlights, Dividers, Premium Features)
    golden: {
      primary: '#fbbf24',        // Main gold - premium highlights
      secondary: '#f59e0b',      // Secondary gold - active states
      tertiary: '#d97706',       // Dark gold - pressed states
      glow: 'rgba(251, 191, 36, 0.3)', // Golden glow effect
      subtle: 'rgba(251, 191, 36, 0.1)', // Subtle golden background
    },

    // Accent Colors - Functional Colors
    accent: {
      blue: '#3b82f6',           // Interactive elements
      green: '#10b981',          // Success states
      red: '#ef4444',            // Error states
      orange: '#f97316',         // Warning states
      purple: '#8b5cf6',         // Mystical elements
      cyan: '#06b6d4',           // Info states
    },

    // Glass Effects - True Glassmorphism
    glass: {
      primary: 'rgba(255, 255, 255, 0.03)',    // Ultra subtle glass
      secondary: 'rgba(255, 255, 255, 0.05)',  // Subtle glass
      tertiary: 'rgba(255, 255, 255, 0.08)',   // Medium glass  
      strong: 'rgba(255, 255, 255, 0.12)',     // Strong glass
      border: 'rgba(255, 255, 255, 0.1)',      // Glass borders
      shadow: 'rgba(0, 0, 0, 0.5)',            // Glass shadows
    },

    // Numerology Specific Colors
    numerology: {
      // Life Path Number Colors
      lifePath: {
        1: '#ef4444', // Red - Leadership
        2: '#f97316', // Orange - Cooperation  
        3: '#eab308', // Yellow - Communication
        4: '#22c55e', // Green - Stability
        5: '#06b6d4', // Cyan - Freedom
        6: '#3b82f6', // Blue - Nurturing
        7: '#8b5cf6', // Purple - Spirituality
        8: '#ec4899', // Pink - Material Success
        9: '#f43f5e', // Rose - Completion
        11: '#a855f7', // Purple - Master Number
        22: '#14b8a6', // Teal - Master Builder
        33: '#fbbf24', // Gold - Master Teacher
      },
    },
  },

  // ========== TYPOGRAPHY SYSTEM ==========
  typography: {
    // Font Families - Neo-Grotesque
    fontFamily: {
      display: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      text: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
      inter: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      ibmPlex: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"SF Mono", "Monaco", "Inconsolata", monospace',
    },

    // Font Sizes - Apple Scale
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
    },

    // Font Weights - Apple Style
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      heavy: '800',
    },

    // Line Heights - Apple Spacing
    lineHeight: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },

    // Letter Spacing - Apple Typography
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
    },
  },

  // ========== SPACING SYSTEM ==========
  spacing: {
    0: '0',
    1: '0.25rem',    // 4px
    2: '0.5rem',     // 8px  
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px - Base unit
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px
    8: '2rem',       // 32px
    10: '2.5rem',    // 40px
    12: '3rem',      // 48px
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem',      // 96px
    32: '8rem',      // 128px
  },

  // ========== BORDER RADIUS ==========
  borderRadius: {
    none: '0',
    xs: '0.125rem',   // 2px
    sm: '0.5rem',     // 8px - Small elements
    md: '0.75rem',    // 12px - Cards
    lg: '1rem',       // 16px - Modals
    xl: '1.5rem',     // 24px - Large cards
    '2xl': '2rem',    // 32px - Hero elements
    '3xl': '3rem',    // 48px - Apple style
    full: '9999px',   // Circles
  },

  // ========== SHADOWS SYSTEM ==========
  shadows: {
    // Apple-style shadows
    none: 'none',
    sm: '0 1px 2px rgba(0, 0, 0, 0.4)',
    md: '0 4px 6px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.4)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.4)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.6)',
    
    // Glass shadows
    glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
    glassStrong: '0 20px 40px rgba(0, 0, 0, 0.5)',
    
    // Glow effects - ใช้น้อย เฉพาะ Premium
    goldGlow: '0 0 20px rgba(251, 191, 36, 0.3)',
    blueGlow: '0 0 20px rgba(14, 165, 233, 0.3)',
    purpleGlow: '0 0 20px rgba(139, 92, 246, 0.3)',
  },

  // ========== ANIMATION SYSTEM ==========
  animation: {
    // Duration - Apple Timing
    duration: {
      instant: '0ms',
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '750ms',
    },
    
    // Easing - Apple Curves
    easing: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      
      // Apple-signature easing
      apple: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      appleSpring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
  },

  // ========== GLASSMORPHISM SYSTEM ==========
  glassmorphism: {
    // Backdrop Blur
    backdrop: {
      none: 'none',
      sm: 'blur(4px)',
      md: 'blur(8px)',
      lg: 'blur(12px)',
      xl: 'blur(20px)',
      '2xl': 'blur(40px)',
    },
    
    // Glass Component Presets
    presets: {
      // Subtle glass - สำหรับ cards ทั่วไป
      subtle: {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      
      // Medium glass - สำหรับ modals
      medium: {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
      },
      
      // Strong glass - สำหรับ navigation
      strong: {
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(40px)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
      },
      
      // Premium glass - ใช้ golden accent
      premium: {
        background: 'rgba(251, 191, 36, 0.05)',
        border: '1px solid rgba(251, 191, 36, 0.2)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(251, 191, 36, 0.1)',
      },
    },
  },

  // ========== COMPONENT VARIANTS ==========
  components: {
    // Button Variants
    button: {
      // Primary - Golden (Premium actions)
      primary: {
        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        color: '#000000',
        border: 'none',
        shadow: '0 4px 12px rgba(251, 191, 36, 0.3)',
        hover: {
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          transform: 'translateY(-1px)',
          shadow: '0 6px 16px rgba(251, 191, 36, 0.4)',
        },
      },
      
      // Secondary - Deep Blue
      secondary: {
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
        color: '#ffffff',
        border: 'none',
        shadow: '0 4px 12px rgba(14, 165, 233, 0.3)',
        hover: {
          background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
          transform: 'translateY(-1px)',
          shadow: '0 6px 16px rgba(14, 165, 233, 0.4)',
        },
      },
      
      // Ghost - Glass effect
      ghost: {
        background: 'rgba(255, 255, 255, 0.05)',
        color: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        hover: {
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
      },
    },

    // Card Variants
    card: {
      // Default glass card
      default: {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        borderRadius: '1rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      
      // Interactive card
      interactive: {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        borderRadius: '1rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        transition: 'all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        hover: {
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transform: 'translateY(-2px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
        },
      },
      
      // Premium card - ใช้ golden accent
      premium: {
        background: 'rgba(251, 191, 36, 0.03)',
        border: '1px solid rgba(251, 191, 36, 0.1)',
        backdropFilter: 'blur(12px)',
        borderRadius: '1rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(251, 191, 36, 0.05)',
      },
    },
  },

  // ========== LAYOUT SYSTEM ==========
  layout: {
    // Container Sizes
    container: {
      sm: '640px',
      md: '768px', 
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    
    // Grid System
    grid: {
      cols1: 'repeat(1, minmax(0, 1fr))',
      cols2: 'repeat(2, minmax(0, 1fr))',
      cols3: 'repeat(3, minmax(0, 1fr))',
      cols4: 'repeat(4, minmax(0, 1fr))',
      cols6: 'repeat(6, minmax(0, 1fr))',
      cols12: 'repeat(12, minmax(0, 1fr))',
    },
  },
} as const

// ========== TYPE DEFINITIONS ==========
export const appleDarkTokens = appleDarkNumerologyTokens;
export { appleDarkNumerologyTokens };

export type AppleDarkTokens = typeof appleDarkNumerologyTokens
export type ColorTokens = AppleDarkTokens['colors']
export type TypographyTokens = AppleDarkTokens['typography'] 
export type SpacingTokens = AppleDarkTokens['spacing']
export type GlassmorphismTokens = AppleDarkTokens['glassmorphism'] 
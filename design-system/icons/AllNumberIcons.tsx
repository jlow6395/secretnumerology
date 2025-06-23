/**
 * Complete Number Icons Set for Secret Numerology
 * 
 * Features:
 * - Numbers 1-9 with detailed Thai cultural symbolism
 * - Master Numbers 11, 22, 33 with special spiritual meanings
 * - Utility functions for icon selection
 * - Consistent API with size, color, and className props
 */

import React from 'react'
import { BaseIcon } from './NumerologyIcons'

// ========== COMPLETE NUMBER ICONS ==========

export const Number1CompleteIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 24, color = '#FFFFFF', className = '' 
}) => (
  <BaseIcon size={size} className={className}>
    <g fill={color}>
      {/* Crown - Leadership Symbol */}
      <path d="M12 2L14 6L18 4L16 8L20 7L17 11H7L4 7L8 8L6 4L10 6L12 2Z" />
      {/* Scepter */}
      <path d="M12 12V20M10 20H14" strokeWidth="2" stroke={color} fill="none" />
      {/* Gems */}
      <circle cx="8" cy="9" r="1" />
      <circle cx="16" cy="9" r="1" />
      <circle cx="12" cy="8" r="1" />
    </g>
  </BaseIcon>
)

export const Number2CompleteIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 24, color = '#FFFFFF', className = '' 
}) => (
  <BaseIcon size={size} className={className}>
    <g fill={color}>
      {/* Twin Hearts - Partnership */}
      <path d="M8 6C6 4 3 4 3 7C3 10 6 13 8 15C10 13 13 10 13 7C13 4 10 4 8 6Z" />
      <path d="M16 6C14 4 11 4 11 7C11 10 14 13 16 15C18 13 21 10 21 7C21 4 18 4 16 6Z" />
      {/* Connection Line */}
      <path d="M8 10H16" strokeWidth="2" stroke={color} fill="none" />
      {/* Balance Symbol */}
      <circle cx="12" cy="18" r="2" />
    </g>
  </BaseIcon>
)

export const Number3CompleteIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 24, color = '#FFFFFF', className = '' 
}) => (
  <BaseIcon size={size} className={className}>
    <g fill={color}>
      {/* Microphone - Communication */}
      <rect x="10" y="4" width="4" height="8" rx="2" />
      <path d="M8 10V12C8 14.2 9.8 16 12 16S16 14.2 16 12V10" strokeWidth="2" stroke={color} fill="none" />
      <path d="M12 16V20M8 20H16" strokeWidth="2" stroke={color} fill="none" />
      {/* Creative Sparkles */}
      <path d="M6 6L7 8L6 10L5 8L6 6Z" />
      <path d="M18 6L19 8L18 10L17 8L18 6Z" />
      <path d="M6 16L7 18L6 20L5 18L6 16Z" />
    </g>
  </BaseIcon>
)

export const Number4CompleteIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 24, color = '#FFFFFF', className = '' 
}) => (
  <BaseIcon size={size} className={className}>
    <g fill={color}>
      {/* Strong Foundation - Building */}
      <rect x="4" y="16" width="16" height="4" />
      <rect x="6" y="12" width="12" height="4" />
      <rect x="8" y="8" width="8" height="4" />
      <rect x="10" y="4" width="4" height="4" />
      {/* Pillars */}
      <rect x="6" y="4" width="2" height="16" />
      <rect x="16" y="4" width="2" height="16" />
    </g>
  </BaseIcon>
)

export const Number5CompleteIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 24, color = '#FFFFFF', className = '' 
}) => (
  <BaseIcon size={size} className={className}>
    <g fill={color}>
      {/* Freedom Wings */}
      <path d="M12 4L8 8L4 6L8 12L12 8L16 12L20 6L16 8L12 4Z" />
      {/* Adventure Compass */}
      <circle cx="12" cy="16" r="4" strokeWidth="2" stroke={color} fill="none" />
      <path d="M12 14L13 16L12 18L11 16L12 14Z" />
      {/* Movement Lines */}
      <path d="M2 12H4M20 12H22M12 2V4M12 20V22" strokeWidth="2" stroke={color} />
    </g>
  </BaseIcon>
)

export const Number6CompleteIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 24, color = '#FFFFFF', className = '' 
}) => (
  <BaseIcon size={size} className={className}>
    <g fill={color}>
      {/* Caring Heart with Home */}
      <path d="M12 4L8 2L4 4V8L8 12L12 8V4Z" />
      <path d="M12 8L16 6L20 8V12L16 16L12 12V8Z" />
      {/* Nurturing Hands */}
      <path d="M6 14C6 16 8 18 10 18H14C16 18 18 16 18 14" strokeWidth="2" stroke={color} fill="none" />
      {/* Family Symbol */}
      <circle cx="8" cy="20" r="1" />
      <circle cx="12" cy="20" r="1" />
      <circle cx="16" cy="20" r="1" />
    </g>
  </BaseIcon>
)

export const Number7CompleteIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 24, color = '#FFFFFF', className = '' 
}) => (
  <BaseIcon size={size} className={className}>
    <g fill={color}>
      {/* Third Eye - Spiritual Insight */}
      <circle cx="12" cy="8" r="3" />
      <circle cx="12" cy="8" r="1" fill="#000" />
      {/* Mystical Triangle */}
      <path d="M12 4L8 12H16L12 4Z" strokeWidth="2" stroke={color} fill="none" />
      {/* Meditation Lotus */}
      <path d="M6 16C6 18 8 20 10 20H14C16 20 18 18 18 16" strokeWidth="2" stroke={color} fill="none" />
      <path d="M8 16C8 17 9 18 10 18H14C15 18 16 17 16 16" strokeWidth="2" stroke={color} fill="none" />
      {/* Wisdom Rays */}
      <path d="M4 8L6 10M20 8L18 10M4 16L6 14M20 16L18 14" strokeWidth="2" stroke={color} />
    </g>
  </BaseIcon>
)

export const Number8CompleteIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 24, color = '#FFFFFF', className = '' 
}) => (
  <BaseIcon size={size} className={className}>
    <g fill={color}>
      {/* Infinity Symbol - Material Success */}
      <path d="M8 12C6 10 4 10 4 12C4 14 6 14 8 12C10 10 12 10 12 12C12 14 14 14 16 12C18 10 20 10 20 12C20 14 18 14 16 12C14 14 12 14 12 12C12 10 10 10 8 12Z" />
      {/* Crown of Achievement */}
      <path d="M12 2L14 4L18 3L16 6L20 5L17 8H7L4 5L8 6L6 3L10 4L12 2Z" />
      {/* Golden Coins */}
      <circle cx="8" cy="18" r="2" />
      <circle cx="16" cy="18" r="2" />
      <circle cx="12" cy="20" r="2" />
    </g>
  </BaseIcon>
)

export const Number9CompleteIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 24, color = '#FFFFFF', className = '' 
}) => (
  <BaseIcon size={size} className={className}>
    <g fill={color}>
      {/* Universal Love - Global Heart */}
      <circle cx="12" cy="12" r="8" strokeWidth="2" stroke={color} fill="none" />
      <path d="M12 8C10 6 7 6 7 9C7 12 10 15 12 17C14 15 17 12 17 9C17 6 14 6 12 8Z" />
      {/* Completion Circle */}
      <circle cx="12" cy="12" r="4" strokeWidth="2" stroke={color} fill="none" />
      {/* Wisdom Points */}
      <circle cx="12" cy="4" r="1" />
      <circle cx="20" cy="12" r="1" />
      <circle cx="12" cy="20" r="1" />
      <circle cx="4" cy="12" r="1" />
    </g>
  </BaseIcon>
)

// ========== MASTER NUMBERS ==========

export const MasterNumber11CompleteIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 24, color = '#FFFFFF', className = '' 
}) => (
  <BaseIcon size={size} className={className}>
    <g fill={color}>
      {/* Twin Pillars of Light */}
      <rect x="8" y="4" width="2" height="16" />
      <rect x="14" y="4" width="2" height="16" />
      {/* Spiritual Crown */}
      <path d="M6 4L8 2L10 4L12 2L14 4L16 2L18 4" strokeWidth="2" stroke={color} fill="none" />
      {/* Enlightenment Rays */}
      <path d="M4 8L6 10M18 10L20 8M4 16L6 14M18 14L20 16" strokeWidth="2" stroke={color} />
      {/* Sacred Geometry */}
      <circle cx="11" cy="12" r="1" />
      <circle cx="13" cy="12" r="1" />
    </g>
  </BaseIcon>
)

export const MasterNumber22CompleteIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 24, color = '#FFFFFF', className = '' 
}) => (
  <BaseIcon size={size} className={className}>
    <g fill={color}>
      {/* Master Builder - Sacred Architecture */}
      <path d="M4 20L12 4L20 20H4Z" strokeWidth="2" stroke={color} fill="none" />
      <path d="M8 16L16 16M10 12L14 12" strokeWidth="2" stroke={color} />
      {/* Twin Foundations */}
      <rect x="6" y="18" width="4" height="2" />
      <rect x="14" y="18" width="4" height="2" />
      {/* Cosmic Connection */}
      <circle cx="12" cy="8" r="2" strokeWidth="2" stroke={color} fill="none" />
      <path d="M12 2V6M12 10V14" strokeWidth="2" stroke={color} />
    </g>
  </BaseIcon>
)

export const MasterNumber33CompleteIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 24, color = '#FFFFFF', className = '' 
}) => (
  <BaseIcon size={size} className={className}>
    <g fill={color}>
      {/* Triple Flame - Master Teacher */}
      <path d="M8 20C8 16 10 14 12 10C14 14 16 16 16 20C16 22 14 22 12 22C10 22 8 22 8 20Z" />
      <path d="M6 18C6 15 7 13 8 11C9 13 10 15 10 18" />
      <path d="M14 18C14 15 15 13 16 11C17 13 18 15 18 18" />
      {/* Divine Triangle */}
      <path d="M12 2L8 8L16 8L12 2Z" />
      {/* Sacred Hearts */}
      <path d="M6 6C5 5 4 5 4 6C4 7 5 8 6 9" />
      <path d="M18 6C19 5 20 5 20 6C20 7 19 8 18 9" />
    </g>
  </BaseIcon>
)

// ========== UTILITY FUNCTIONS ==========

export const getCompleteNumberIcon = (number: number) => {
  const iconMap: { [key: number]: React.FC<{ size?: number; color?: string; className?: string }> } = {
    1: Number1CompleteIcon,
    2: Number2CompleteIcon,
    3: Number3CompleteIcon,
    4: Number4CompleteIcon,
    5: Number5CompleteIcon,
    6: Number6CompleteIcon,
    7: Number7CompleteIcon,
    8: Number8CompleteIcon,
    9: Number9CompleteIcon,
    11: MasterNumber11CompleteIcon,
    22: MasterNumber22CompleteIcon,
    33: MasterNumber33CompleteIcon
  }
  
  return iconMap[number] || Number1CompleteIcon
}

export const getAllCompleteNumberIcons = () => ({
  1: Number1CompleteIcon,
  2: Number2CompleteIcon,
  3: Number3CompleteIcon,
  4: Number4CompleteIcon,
  5: Number5CompleteIcon,
  6: Number6CompleteIcon,
  7: Number7CompleteIcon,
  8: Number8CompleteIcon,
  9: Number9CompleteIcon,
  11: MasterNumber11CompleteIcon,
  22: MasterNumber22CompleteIcon,
  33: MasterNumber33CompleteIcon
})

// ========== EXPORT ALL ICONS ==========
export const AllNumberIcons = {
  1: Number1CompleteIcon,
  2: Number2CompleteIcon,
  3: Number3CompleteIcon,
  4: Number4CompleteIcon,
  5: Number5CompleteIcon,
  6: Number6CompleteIcon,
  7: Number7CompleteIcon,
  8: Number8CompleteIcon,
  9: Number9CompleteIcon,
  11: MasterNumber11CompleteIcon,
  22: MasterNumber22CompleteIcon,
  33: MasterNumber33CompleteIcon,
  
  // Utility functions
  getCompleteNumberIcon,
  getAllCompleteNumberIcons
} 
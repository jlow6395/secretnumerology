// ==================== NUMEROLOGY LIBRARY INDEX ====================

// Types
export * from './types';

// Constants
export * from './constants';

// Core calculator functions
export * from './calculator';

// Legacy compatibility - re-export from core for backward compatibility
export { calculateLifePathNumber as calculateLifePath } from './core';
export { calculateExpressionNumber } from './core';
export { calculatePersonalityNumber } from './core';
export { calculateHeartDesireNumber } from './core';
export { calculatePersonalYear, calculatePersonalMonth, calculatePersonalDay } from './core';
export { calculateSunNumber } from './core';
export { calculateTalentNumber } from './core';
export { calculateMaturityNumber } from './core';

// Utility functions
export { reduceToSingleDigit, nameToNumbers, parseDate, validateInput } from './calculator'; 
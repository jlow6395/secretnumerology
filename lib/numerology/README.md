# Numerology Library Documentation

## ภาพรวม

Library นี้เป็นระบบการคำนวณเลขศาสตร์ (Numerology) ที่ครบถ้วนและใช้งานง่าย ใช้ระบบ Pythagorean Numerology ที่เป็นมาตรฐานสากล

## Features

- ✅ **การคำนวณครบถ้วน**: Life Path, Expression, Heart's Desire, Personality Numbers
- ✅ **Personal Cycles**: Personal Year, Month, Day Numbers
- ✅ **Additional Numbers**: Sun Number, Talent Number, Maturity Number
- ✅ **Confidence Score**: ระบบประเมินความแม่นยำ
- ✅ **Type Safety**: เขียนด้วย TypeScript พร้อม type definitions ครบถ้วน
- ✅ **Validation**: ตรวจสอบข้อมูลอินพุตอย่างละเอียด
- ✅ **Error Handling**: จัดการข้อผิดพลาดอย่างเหมาะสม

## Installation

```bash
# หากเป็น external library
npm install @your-org/numerology

# หรือใช้ใน project นี้โดยตรง
import { calculateNumerologyProfile } from '@/lib/numerology'
```

## Quick Start

```typescript
import { calculateNumerologyProfile } from '@/lib/numerology';

const profile = calculateNumerologyProfile({
  fullName: 'John Smith',
  dateOfBirth: '1990-12-25'
});

console.log('Life Path Number:', profile.lifePath.number);
console.log('Description:', profile.lifePath.description);
```

## API Reference

### Main Functions

#### `calculateNumerologyProfile(input: NumerologyInput): NumerologyProfile`

คำนวณโปรไฟล์เลขศาสตร์ที่สมบูรณ์

**Parameters:**
- `input.fullName`: ชื่อเต็มภาษาอังกฤษ
- `input.dateOfBirth`: วันเกิด (YYYY-MM-DD)
- `input.currentDate`: วันที่ต้องการวิเคราะห์ (optional)

**Returns:** `NumerologyProfile` object ที่มีการคำนวณครบถ้วน

### Individual Calculation Functions

#### Core Numbers

```typescript
// Life Path Number
const lifePath = calculateLifePath('1990-12-25');

// Expression Number
const expression = calculateExpression('John Smith');

// Heart's Desire Number
const heartDesire = calculateHeartDesire('John Smith');

// Personality Number
const personality = calculatePersonality('John Smith');
```

#### Personal Cycles

```typescript
// Personal Year
const personalYear = calculatePersonalYear('1990-12-25', 2024);

// Personal Month
const personalMonth = calculatePersonalMonth('1990-12-25', 2024, 12);

// Personal Day
const personalDay = calculatePersonalDay('1990-12-25', 2024, 12, 25);
```

#### Additional Numbers

```typescript
// Sun Number
const sunNumber = calculateSunNumber('1990-12-25');

// Talent Number
const talentNumber = calculateTalentNumber('1990-12-25');

// Maturity Number
const maturityNumber = calculateMaturityNumber(8, 5); // lifePath + expression
```

### Utility Functions

```typescript
// Reduce number to single digit or master number
const reduced = reduceToSingleDigit(29); // Returns 11 (master number)

// Convert name to numbers
const numbers = nameToNumbers('JOHN'); // Returns [1, 6, 8, 5]

// Parse date string
const date = parseDate('1990-12-25'); // Returns { day: 25, month: 12, year: 1990 }

// Validate input
validateInput({ fullName: 'John Smith', dateOfBirth: '1990-12-25' });
```

## Types

### Core Types

```typescript
interface NumerologyInput {
  fullName: string;
  dateOfBirth: string; // YYYY-MM-DD format
  currentDate?: string; // YYYY-MM-DD format, defaults to today
}

interface NumerologyResult {
  number: number;
  rawSum?: number;
  description: string;
  meaning: string;
  calculation: string;
}

interface LifePathResult extends NumerologyResult {
  type: 'life_path';
  challenges: string[];
  opportunities: string[];
}

// ... more types available
```

## Constants

### Number Meanings

```typescript
import { NUMBER_MEANINGS } from '@/lib/numerology/constants';

const meaning = NUMBER_MEANINGS[8];
console.log(meaning.name); // "นักธุรกิจ"
console.log(meaning.description); // "คุณเป็นผู้มีความมุ่งมั่น..."
```

### Personal Year Meanings

```typescript
import { PERSONAL_YEAR_MEANINGS } from '@/lib/numerology/constants';

const yearMeaning = PERSONAL_YEAR_MEANINGS[1];
console.log(yearMeaning.theme); // "การเริ่มต้นใหม่"
```

## Components

### React Components

```typescript
import { NumerologyForm, NumerologyCard, NumerologyGrid } from '@/components/numerology';

// Form component
<NumerologyForm onResult={handleResult} onError={handleError} />

// Display single result
<NumerologyCard result={lifePath} showDetails={true} />

// Display multiple results in grid
<NumerologyGrid results={[lifePath, expression]} columns={2} />
```

## Examples

### Basic Usage

```typescript
import { calculateNumerologyProfile } from '@/lib/numerology';

const profile = calculateNumerologyProfile({
  fullName: 'Mary Johnson',
  dateOfBirth: '1985-06-15'
});

console.log('Profile:', {
  lifePath: profile.lifePath.number,
  expression: profile.expression.number,
  heartDesire: profile.heartDesire.number,
  personality: profile.personality.number,
  confidence: profile.confidenceScore
});
```

### Error Handling

```typescript
try {
  const profile = calculateNumerologyProfile({
    fullName: 'John123', // Invalid name
    dateOfBirth: 'invalid-date' // Invalid date
  });
} catch (error) {
  console.error('Calculation error:', error.message);
}
```

### Custom Date Analysis

```typescript
// Analyze for specific date
const profile = calculateNumerologyProfile({
  fullName: 'John Smith',
  dateOfBirth: '1990-12-25',
  currentDate: '2025-01-01' // New Year analysis
});

console.log('New Year Energy:', profile.personalDay);
```

## Validation Rules

### Name Validation
- ต้องมีอย่างน้อย 2 ตัวอักษร
- ใช้ตัวอักษรภาษาอังกฤษเท่านั้น (A-Z, a-z)
- อนุญาตให้มีช่องว่าง
- ไม่อนุญาตตัวเลขหรือสัญลักษณ์พิเศษ

### Date Validation
- รูปแบบ YYYY-MM-DD
- ปีต้องอยู่ระหว่าง 1900 ถึงปัจจุบัน
- เดือนต้องอยู่ระหว่าง 1-12
- วันต้องอยู่ระหว่าง 1-31

## Calculation Methods

### Pythagorean System

```
A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9
J=1, K=2, L=3, M=4, N=5, O=6, P=7, Q=8, R=9
S=1, T=2, U=3, V=4, W=5, X=6, Y=7, Z=8
```

### Master Numbers
- 11, 22, 33 ไม่ต้องลดเป็นเลขเดี่ยว
- ยกเว้นในบางการคำนวณเฉพาะ (เช่น Year Number)

### Confidence Score Algorithm
- Base Score: 40%
- Uniqueness Bonus: 40% (ยิ่งตัวเลขหลากหลาย ยิ่งแม่นยำ)
- Master Number Bonus: 20% (มี master number เพิ่มความแม่นยำ)

## Performance

- ⚡ การคำนวณเร็ว: < 1ms สำหรับโปรไฟล์สมบูรณ์
- 📦 ขนาดเล็ก: ไม่มี external dependencies
- 🔒 Type Safe: TypeScript support เต็มรูปแบบ

## Browser Support

- ✅ Chrome, Firefox, Safari, Edge (modern versions)
- ✅ Node.js 16+
- ✅ React 18+
- ✅ Next.js 13+

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

MIT License - see LICENSE file for details

## Changelog

### v2.0.0 (2024-12-28)
- ✨ เพิ่ม TypeScript support เต็มรูปแบบ
- ✨ เพิ่ม React components
- ✨ เพิ่ม Confidence Score system
- ✨ ปรับปรุง validation และ error handling
- 🔧 Refactor โครงสร้างโค้ดให้ดีขึ้น
- 📚 เพิ่ม documentation ครบถ้วน

### v1.0.0
- 🎉 Initial release
- ✅ Basic numerology calculations
- ✅ Core number support 
# Secret Numerology V2 🔮

ระบบเลขศาสตร์สมัยใหม่แบบ Profile-Centric Monetization พร้อม AI Chat ที่ฉลาด

## 🎯 ฟีเจอร์หลัก

### 💰 Profile-Centric Monetization
- **Micro-payment**: จ่ายเพื่อปลดล็อกโปรไฟล์เพิ่มเติม
- **Smart Pricing**: ฿39/1คน, ฿199/6คน, ฿599/30คน
- **Family/Friends Focus**: วิเคราะห์ความสัมพันธ์หลายมิติ

### 🤖 Smart AI Chat
- **Memory System**: AI จำข้อมูลส่วนตัว ความชอบ เป้าหมาย
- **Tier-based**: Free (10 msg), Paid (100 msg), Premium (∞)
- **Thai-optimized**: ตอบเป็นภาษาไทยที่เข้าใจบริบท

### 📊 Advanced Analysis
- **First Person View**: มองจากมุมของแต่ละคน
- **Relationship Charts**: กราฟความสัมพันธ์แบบ interactive
- **AI Insights**: คำแนะนำเฉพาะตัวจาก AI

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Supabase
- **Payment**: Omise (PromptPay QR)
- **AI**: OpenRouter (Claude, Llama)
- **Auth**: Google OAuth + LINE Login

### Database Schema
```sql
profile_packages (id, name, profile_count, price_thb)
user_profile_unlocks (user_id, package_id, profiles_remaining)
unlocked_profiles (unlock_id, profile_name, birth_date)
ai_conversations (user_id, conversation_type)
ai_messages (conversation_id, content, numerology_context)
ai_user_memory (user_id, memory_type, memory_content)
```

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/secret-numerology-v2.git
cd secret-numerology-v2
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env.local
```

แก้ไขไฟล์ `.env.local`:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-key

# Omise Payment
OMISE_PUBLIC_KEY=pkey_live_xxxxx
OMISE_SECRET_KEY=skey_live_xxxxx

# AI Services  
OPENROUTER_API_KEY=sk-or-xxxxx

# Authentication
ADMIN_EMAIL=jlow6395@gmail.com
GOOGLE_CLIENT_ID=your-google-client
LINE_CHANNEL_ID=your-line-channel
```

### 3. Database Setup
```bash
# Run migrations
npx supabase db push

# หรือใน production
npm run db:migrate
```

### 4. Development
```bash
npm run dev
```

### 5. Production Deploy
```bash
# Build
npm run build

# Deploy to Vercel
vercel --prod

# หรือ Deploy to your server
npm start
```

## 📡 API Endpoints

### Payment APIs
- `POST /api/payment/create` - สร้าง PromptPay QR
- `GET /api/payment/verify/[id]` - ตรวจสอบสถานะ
- `POST /api/webhooks/omise` - รับ webhook จาก Omise

### AI Chat APIs  
- `POST /api/ai/chat` - Smart AI Chat
- `GET /api/ai/memory` - ดึงความทรงจำ AI

## 🔧 Configuration

### Feature Flags
```env
NEXT_PUBLIC_ENABLE_AI_CHAT=true
NEXT_PUBLIC_ENABLE_PROFILE_UNLOCK=true
NEXT_PUBLIC_ENABLE_LINE_LOGIN=true
```

### Payment Configuration
- **PromptPay**: สแกน QR ผ่าน Banking App
- **Webhook**: Auto-unlock หลังชำระเงิน
- **Security**: SSL + Signature verification

### AI Configuration
```typescript
// Model Selection by Tier
free: 'meta-llama/llama-3.1-8b-instruct'
paid: 'anthropic/claude-3-haiku'  
premium: 'anthropic/claude-3.5-sonnet'
```

## 🛡️ Security

- **RLS Policies**: Row Level Security ใน Supabase
- **Webhook Verification**: HMAC signature validation
- **Environment Variables**: Sensitive data protection
- **Admin Controls**: Special access for `jlow6395@gmail.com`

## 📱 Mobile-First Design

- **Responsive**: ใช้งานได้ทุกหน้าจอ
- **Touch-friendly**: ปุ่มกดง่าย UX สมูท
- **LINE Integration**: เข้าสู่ระบบผ่าน LINE
- **Thai Language**: ภาษาไทยทั้งระบบ

## 🔄 Development Workflow

### Git Flow
```bash
# Feature development
git checkout -b feature/new-feature
git commit -m "Add new feature"
git push origin feature/new-feature

# Deploy to staging
git checkout staging
git merge feature/new-feature
git push origin staging

# Deploy to production
git checkout main
git merge staging
git push origin main
```

### Testing
```bash
# Run tests
npm test

# E2E tests
npm run test:e2e

# Payment testing (use Omise test keys)
OMISE_PUBLIC_KEY=pkey_test_xxx npm run dev
```

## 📊 Analytics & Monitoring

- **User Journey**: Wizard → Unlock → Dashboard → AI Chat
- **Conversion Tracking**: Payment success rates
- **AI Usage**: Message limits และ model performance
- **Database Performance**: Query optimization

## 🎨 Design System

- **Apple-inspired**: Modern, clean, premium feel
- **Numerology Icons**: Custom icon set
- **Color Tokens**: Consistent theming
- **Typography**: Readable Thai fonts

## 📝 License

Private project - All rights reserved

## 👥 Team

- **Designer**: Thai UX/UI focus
- **Developer**: Full-stack Next.js
- **Target**: 300M users via viral growth

---

**Domain**: [www.secretnumerology.com](https://www.secretnumerology.com)
**Status**: Ready for production deployment 🚀 
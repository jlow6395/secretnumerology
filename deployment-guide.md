# 🚀 Secret Numerology V2 - Deployment Guide

## 📊 ระบบพร้อม Deploy แล้ว!

Build ผ่าน ✅ - ระบบ LINE LIFF และ Supabase เชื่อมต่อครบถ้วน

## 🔧 Environment Variables ที่ต้องตั้งค่า

### 1. Database (Supabase)
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 2. Authentication
```bash
# LINE LIFF (สำหรับผู้ใช้ทั่วไป)
NEXT_PUBLIC_LIFF_ID=your-liff-id
LINE_CHANNEL_ID=your-line-channel-id
LINE_CHANNEL_SECRET=your-line-channel-secret

# Google OAuth (สำหรับ Admin: jlow6395@gmail.com)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Payment (รอ Omise credentials)
```bash
OMISE_PUBLIC_KEY=pkey_live_xxxxx
OMISE_SECRET_KEY=skey_live_xxxxx
OMISE_WEBHOOK_SECRET=your-webhook-secret
```

### 4. AI Services
```bash
OPENROUTER_API_KEY=sk-or-xxxxx
```

### 5. Site Configuration
```bash
NEXT_PUBLIC_SITE_URL=https://www.secretnumerology.com
NEXT_PUBLIC_BASE_URL=https://www.secretnumerology.com
NODE_ENV=production
```

## 📋 ขั้นตอน Deploy

### 1. Setup Supabase Project
1. ไปที่ https://supabase.com/dashboard
2. สร้าง New Project
3. รัน migrations: `supabase db push`
4. Copy URL และ Keys

### 2. Setup LINE Login
1. ไปที่ https://developers.line.biz/console/
2. สร้าง LINE Login Channel
3. ตั้งค่า Callback URL: `https://www.secretnumerology.com/auth/callback`
4. Copy Channel ID และ Secret

### 3. Deploy to Vercel
1. Connect GitHub repo
2. ตั้งค่า Environment Variables
3. Deploy

### 4. Configure Domain
1. Point www.secretnumerology.com to Vercel
2. Update NEXT_PUBLIC_SITE_URL

## 🎯 Features ที่พร้อมใช้

### ✅ Authentication System
- **Admin**: Google OAuth (jlow6395@gmail.com)
- **Users**: LINE Login + LIFF
- **Guest**: Temporary profiles

### ✅ Core Features
- Numerology calculations
- Profile management
- Chinese Zodiac integration
- Timeline system
- Compatibility analysis

### ✅ Premium Features (รอ Omise)
- Profile unlock system
- AI Chat with memory
- Advanced relationship analysis
- Payment via PromptPay QR

### ✅ API Endpoints
- `/api/ai/chat` - Smart AI Chat
- `/api/payment/create` - Generate QR codes
- `/api/payment/verify/[id]` - Verify payments
- `/api/webhooks/omise` - Payment webhooks

## 🔄 Current Status

**Build**: ✅ Success (55/55 pages)
**LINE LIFF**: ✅ Integrated
**Supabase**: ✅ Connected
**Payment**: ⏳ Pending Omise credentials
**Domain**: ⏳ Ready for DNS setup

## 📱 Mobile-First Design
- Thai language only
- Apple-inspired dark theme
- Touch-optimized UI
- Responsive design

## 🎯 Target: 300 Million Users
- Viral growth strategy
- Family-oriented features
- Micro-payment model
- Social sharing features

---
**Ready to Deploy**: ระบบพร้อมใช้งาน รอแค่ตั้งค่า credentials! 
# 🚀 Secret Numerology V2 - ขั้นตอน Deploy (LINE Only)

## 📊 สถานะปัจจุบัน
- ✅ **Build**: ผ่านแล้ว (55/55 pages)
- ✅ **Local Supabase**: ตั้งค่าแล้ว + Migrations ครบ 4 ไฟล์
- ✅ **LINE LIFF**: Code พร้อม (รอ credentials)
- ✅ **Authentication**: ปรับเป็น LINE-only แล้ว
- ❌ **Production Environment**: ต้องสร้าง

---

## **Phase 1: Setup Production Database** 🗄️

### 1.1 สร้าง Supabase Cloud Project
```bash
1. ไปที่ https://supabase.com/dashboard
2. คลิก "New Project"
3. Organization: เลือกหรือสร้างใหม่
4. Name: "secret-numerology-v2"
5. Database Password: ตั้งรหัสผ่านแรง (เก็บไว้!)
6. Region: Southeast Asia (Singapore)
7. Pricing Plan: Free (เริ่มต้น)
8. คลิก "Create new project"
9. รอ 2-3 นาที
```

### 1.2 Copy Production Keys
```bash
# ใน Supabase Dashboard
1. ไปที่ Settings > API
2. Copy ค่าเหล่านี้:
   - Project URL: https://xxxxx.supabase.co
   - anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   - service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 1.3 Link Local กับ Cloud
```bash
# ใน terminal ที่ project root
supabase login

# Link กับ project
supabase link --project-ref YOUR_PROJECT_REF

# Push migrations ที่มีอยู่ 4 ไฟล์
supabase db push

# ตรวจสอบ
supabase status
```

---

## **Phase 2: Setup LINE Login Channel** 📱

### 2.1 สร้าง LINE Provider
```bash
1. ไปที่ https://developers.line.biz/console/
2. ล็อกอินด้วย LINE account
3. คลิก "Create a new provider"
4. Provider name: "Secret Numerology"
5. คลิก "Create"
```

### 2.2 สร้าง LINE Login Channel
```bash
1. ใน Provider ที่สร้าง คลิก "Create a channel"
2. เลือก "LINE Login"
3. กรอกข้อมูล:
   - Channel name: "Secret Numerology"
   - Channel description: "เลขศาสตร์ไทย - ระบบวิเคราะห์เลขชะตา"
   - App type: Web app
   - Email address: your@email.com
   - Privacy policy URL: https://www.secretnumerology.com/privacy
   - Terms of use URL: https://www.secretnumerology.com/terms
4. คลิก "Create"
```

### 2.3 ตั้งค่า Channel Settings
```bash
# ใน Channel ที่สร้าง
1. ไปที่ "LINE Login settings"
2. Callback URL: https://www.secretnumerology.com/auth/callback
3. Email permission: Request (สำหรับ Admin)
4. OpenID Connect: Allow
5. Bot link feature: Disable
6. คลิก "Update"
```

### 2.4 สร้าง LIFF App
```bash
1. ใน Channel ไปที่ "LIFF" tab
2. คลิก "Add"
3. กรอกข้อมูล:
   - LIFF app name: "Secret Numerology"
   - Size: Full
   - Endpoint URL: https://www.secretnumerology.com
   - Scope: profile, openid, email
   - Bot link feature: Off
   - Scan QR: Off
4. คลิก "Add"
```

### 2.5 Copy LINE Credentials
```bash
# ใน Channel Settings
1. Channel ID: 1234567890
2. Channel secret: xxxxxxxxxxxxx

# ใน LIFF tab
3. LIFF ID: 1234567890-AbCdEfGh
```

---

## **Phase 3: Update Environment Variables** ⚙️

### 3.1 แก้ไข .env.local
```bash
# แทนที่ค่าใน .env.local ด้วยค่าจริง
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

NEXT_PUBLIC_LIFF_ID=1234567890-AbCdEfGh
LINE_CHANNEL_ID=1234567890
LINE_CHANNEL_SECRET=xxxxxxxxxxxxx

# Admin LINE ID (จะหาได้หลัง deploy)
ADMIN_LINE_ID=U1234567890abcdef

NEXT_PUBLIC_SITE_URL=https://www.secretnumerology.com
NEXT_PUBLIC_BASE_URL=https://www.secretnumerology.com
```

### 3.2 ทดสอบ Local
```bash
npm run dev

# เปิด http://localhost:3000
# ทดสอบ LINE Login
# ดู console.log เพื่อหา LINE User ID
```

---

## **Phase 4: Deploy to Vercel** 🚀

### 4.1 Connect GitHub
```bash
1. ไปที่ https://vercel.com/dashboard
2. คลิก "New Project"
3. Import from GitHub
4. เลือก "SECRET NUMEROLOGY V2" repo
5. คลิก "Import"
```

### 4.2 Configure Build Settings
```bash
# Vercel จะ detect Next.js อัตโนมัติ
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Node.js Version: 18.x
```

### 4.3 Add Environment Variables
```bash
# ใน Vercel Dashboard > Settings > Environment Variables
# Add ทีละตัว (อย่าใส่ NODE_ENV):

NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_LIFF_ID=1234567890-AbCdEfGh
LINE_CHANNEL_ID=1234567890
LINE_CHANNEL_SECRET=xxxxxxxxxxxxx
ADMIN_LINE_ID=U1234567890abcdef
NEXT_PUBLIC_SITE_URL=https://www.secretnumerology.com
NEXT_PUBLIC_BASE_URL=https://www.secretnumerology.com

# Optional (สำหรับภายหลัง)
OMISE_PUBLIC_KEY=pkey_test_xxxxx
OMISE_SECRET_KEY=skey_test_xxxxx
OPENROUTER_API_KEY=sk-or-xxxxx
```

### 4.4 Deploy
```bash
1. คลิก "Deploy"
2. รอ 2-3 นาที
3. ได้ URL: https://your-project-xxxxx.vercel.app
4. ทดสอบเบื้องต้น
```

---

## **Phase 5: Domain Configuration** 🌐

### 5.1 Add Custom Domain
```bash
# ใน Vercel Dashboard > Settings > Domains
1. Add Domain: www.secretnumerology.com
2. Add Domain: secretnumerology.com (redirect to www)
```

### 5.2 Configure DNS
```bash
# ที่ Domain Provider (GoDaddy/Namecheap/etc)
# Add CNAME Record:
Name: www
Type: CNAME
Value: cname.vercel-dns.com
TTL: 3600

# Add A Record (for apex domain):
Name: @
Type: A
Value: 76.76.19.61
TTL: 3600
```

### 5.3 Update LINE Channel
```bash
# กลับไปที่ LINE Developers Console
1. อัปเดต Callback URL: https://www.secretnumerology.com/auth/callback
2. อัปเดต LIFF Endpoint: https://www.secretnumerology.com
3. คลิก "Update"
```

---

## **Phase 6: หา Admin LINE ID** 👑

### 6.1 วิธีหา LINE User ID
```bash
# วิธีที่ 1: ผ่าน Console Log
1. เข้า https://www.secretnumerology.com
2. เข้าสู่ระบบด้วย LINE (account ที่ต้องการเป็น Admin)
3. เปิด Browser Developer Tools (F12)
4. ดู Console Log จะมี: "👑 Admin check: { userId: 'U1234...', isAdmin: false }"
5. Copy LINE User ID

# วิธีที่ 2: ผ่าน Database
1. เข้า Supabase Dashboard > Table Editor
2. ดู table "line_users"
3. หา record ที่ display_name ตรงกับ account ที่ต้องการ
4. Copy line_id
```

### 6.2 Update Admin LINE ID
```bash
# ใน Vercel Dashboard > Settings > Environment Variables
1. แก้ไข ADMIN_LINE_ID
2. ใส่ค่า LINE User ID ที่หาได้
3. Redeploy (หรือรอ auto-deploy)
```

---

## **Phase 7: Testing** 🧪

### 7.1 Test Authentication
```bash
1. เข้า https://www.secretnumerology.com/auth/login
2. คลิก "เข้าสู่ระบบด้วย LINE"
3. ตรวจสอบ redirect ไป LINE
4. ตรวจสอบ callback กลับมา
5. ตรวจสอบ Dashboard access
```

### 7.2 Test Admin Privileges
```bash
1. Login ด้วย LINE account ที่ตั้งเป็น Admin
2. ตรวจสอบ isPremium: true
3. ตรวจสอบ isAdmin: true
4. ทดสอบ features พิเศษ
```

### 7.3 Test Core Features
```bash
1. Numerology Calculator
2. Profile Management
3. Dashboard Navigation
4. Data Persistence
```

---

## **Phase 8: Optional Setup** ⚡

### 8.1 Omise Payment (เมื่อพร้อม)
```bash
1. สมัคร https://dashboard.omise.co
2. ยืนยันตัวตน (KYC)
3. Copy Live Keys
4. Update Environment Variables
```

### 8.2 OpenRouter AI (เมื่อพร้อม)
```bash
1. สมัคร https://openrouter.ai
2. Top up credits
3. Copy API Key
4. Update OPENROUTER_API_KEY
```

---

## **🎯 Checklist ก่อน Go Live**

### Technical
- [ ] ✅ Build ผ่าน (Done)
- [ ] Database Migrations deployed
- [ ] Environment Variables ครบ
- [ ] Domain pointing ถูกต้อง
- [ ] SSL Certificate active

### Authentication  
- [ ] LINE Login working
- [ ] Admin privileges ถูกต้อง
- [ ] Profile creation/management
- [ ] Logout functionality

### Core Features
- [ ] Numerology calculations
- [ ] Profile management
- [ ] Dashboard navigation
- [ ] Data persistence

### Performance
- [ ] Page load speed < 3 seconds
- [ ] Mobile responsive
- [ ] Error handling
- [ ] Basic SEO

---

## **🚨 Important Notes**

1. **ทำตามลำดับ** - อย่าข้าม Phase
2. **เก็บ credentials ปลอดภัย** - อย่าใส่ใน GitHub
3. **ทดสอบ local ก่อน** - `npm run dev`
4. **Backup database** ก่อน push migrations
5. **Monitor errors** หลัง deploy

---

## **📞 Next Steps**

1. **เริ่ม Phase 1**: สร้าง Supabase project
2. **ถ่ายภาพหน้าจอ** credentials ทุกขั้นตอน
3. **ทดสอบทีละ Phase** อย่ารีบ
4. **หา Admin LINE ID** หลัง deploy
5. **Setup monitoring** สำหรับ production

---

**🎉 Ready to Deploy!** - เริ่มจาก Phase 1 ได้เลย! 
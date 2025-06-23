# 🚀 คู่มือทดสอบ LINE Login - Secret Numerology V2

## 📋 ข้อมูล Configuration ปัจจุบัน

### LINE LIFF Settings:
- **LIFF ID**: `2007563809-E0YXRpZM`
- **Channel ID**: `2007563809`
- **Channel Secret**: `ae1dead8697ca0255d08a3a78fb5a02a`

### URLs ที่ต้องใช้:
- **Local Development**: `http://localhost:3002`
- **Production**: `https://www.secretnumerology.com`

## 🧪 วิธีทดสอบ LINE Login

### 1. ทดสอบ Local Development

```bash
# 1. เริ่ม Development Server
npm run dev

# 2. เปิดเบราว์เซอร์ไปที่
http://localhost:3002/test-line
```

### 2. ตั้งค่า LINE Developers Console

1. **เข้า LINE Developers Console**:
   - ไป https://developers.line.biz/console/
   - เลือก Channel ID: `2007563809`

2. **ตั้งค่า LIFF**:
   - ไปที่ **LIFF tab**
   - คลิก LIFF ID: `2007563809-E0YXRpZM`
   - ตั้งค่า **Endpoint URL**:

   **สำหรับ Local Testing:**
   ```
   http://localhost:3002/auth/callback
   ```

   **สำหรับ Production:**
   ```
   https://www.secretnumerology.com/auth/callback
   ```

3. **Scope Settings**:
   - ✅ `openid`
   - ✅ `profile`
   - ✅ `email` (ถ้าต้องการ)

### 3. ขั้นตอนการทดสอบ

#### 🔧 Local Testing:

1. **เปิดหน้าทดสอบ**: `http://localhost:3002/test-line`
2. **กดปุ่ม "ทดสอบ LINE Login"**
3. **ตรวจสอบ Logs**:
   - LIFF ID ถูกต้อง ✅
   - LIFF Initialize สำเร็จ ✅
   - Login Status: ยังไม่ได้เข้าสู่ระบบ
4. **จะเปลี่ยนเส้นทางไป LINE**
5. **หลัง Login สำเร็จ จะกลับมาที่**: `http://localhost:3002/auth/callback`
6. **ระบบจะแสดงข้อมูล Profile และ User ID**

#### 🌐 Production Testing:

1. **อัปเดต LIFF Endpoint URL** ใน LINE Console เป็น:
   ```
   https://www.secretnumerology.com/auth/callback
   ```

2. **Deploy ไป Vercel**:
   ```bash
   # ตั้งค่า Environment Variables ใน Vercel:
   NEXT_PUBLIC_LIFF_ID=2007563809-E0YXRpZM
   LINE_CHANNEL_ID=2007563809
   LINE_CHANNEL_SECRET=ae1dead8697ca0255d08a3a78fb5a02a
   ADMIN_LINE_ID=U1234567890abcdef
   # ... และ variables อื่นๆ
   ```

3. **ทดสอบบน Production**:
   - ไป `https://www.secretnumerology.com/test-line`
   - ทำตามขั้นตอนเดียวกับ Local

### 4. หา LINE User ID จริง

#### วิธีที่ 1: ใช้หน้าทดสอบ
1. ไป `/test-line`
2. Login ด้วย LINE
3. คัดลอก **User ID** ที่แสดงใน Profile section

#### วิธีที่ 2: ตรวจสอบ Console Log
1. เปิด Developer Tools (F12)
2. ไปที่ Console tab
3. Login ด้วย LINE
4. หา log ที่แสดง `🆔 User ID: Uxxxxxxxxxxxxxxx`

#### วิธีที่ 3: ตรวจสอบ Database
```javascript
// ใน Supabase SQL Editor
SELECT line_id, display_name, created_at 
FROM line_users 
ORDER BY created_at DESC 
LIMIT 5;
```

### 5. ตั้งค่า Admin

หลังได้ LINE User ID จริงแล้ว:

1. **อัปเดต Environment Variables**:
   ```bash
   # Local (.env.local)
   ADMIN_LINE_ID=Uxxxxxxxxxxxxxxx

   # Production (Vercel Dashboard)
   ADMIN_LINE_ID=Uxxxxxxxxxxxxxxx
   ```

2. **Restart Development Server**:
   ```bash
   npm run dev
   ```

3. **Deploy Production**:
   ```bash
   vercel --prod
   ```

## 🐛 Troubleshooting

### ปัญหาที่พบบ่อย:

#### 1. "LIFF ID not configured"
- ✅ ตรวจสอบ `.env.local` มี `NEXT_PUBLIC_LIFF_ID`
- ✅ Restart development server

#### 2. "LINE Login ยังไม่พร้อมใช้งาน"
- ✅ ตรวจสอบ LIFF Endpoint URL ใน LINE Console
- ✅ ตรวจสอบ Domain ตรงกับที่ตั้งค่าไว้

#### 3. Login แล้วไม่ได้ข้อมูล Profile
- ✅ ตรวจสอบ Scope ใน LIFF settings
- ✅ ตรวจสอบ Console log มี error ไหม

#### 4. Callback page แสดง error
- ✅ ตรวจสอบ URL callback ถูกต้อง
- ✅ ตรวจสอบ Network tab ใน Developer Tools

## 📱 หน้าที่ใช้ทดสอบ

### หน้าหลักสำหรับทดสอบ:
- **`/test-line`** - หน้าทดสอบ LINE Login แบบละเอียด
- **`/auth/login`** - หน้า Login จริงของระบบ
- **`/auth/callback`** - หน้า Callback หลัง LINE Login
- **`/debug`** - หน้า Debug ทั่วไปของระบบ

### ขั้นตอนการทดสอบแบบเร็ว:
1. ไป `/test-line`
2. กด "ทดสอบ LINE Login"
3. Login ด้วย LINE
4. คัดลอก User ID
5. ตั้งเป็น `ADMIN_LINE_ID`
6. ทดสอบ Admin privileges ใน `/dashboard`

## ✅ เมื่อทดสอบสำเร็จแล้ว

หลังจากระบบทำงานถูกต้อง:

1. **ลบหน้าทดสอบ** (ถ้าต้องการ):
   ```bash
   rm app/test-line/page.tsx
   ```

2. **อัปเดต Production Environment**:
   - ตั้งค่า Environment Variables ใน Vercel
   - Deploy production
   - ทดสอบ Production URL

3. **แจ้งผู้ใช้**:
   - LINE Login พร้อมใช้งาน
   - URL สำหรับเข้าสู่ระบบ: `https://www.secretnumerology.com/auth/login`

---

## 🎯 สรุป

ระบบ LINE Login ถูกตั้งค่าไว้ครบถ้วนแล้ว:
- ✅ LIFF Configuration
- ✅ Authentication Flow
- ✅ Database Integration
- ✅ Admin System
- ✅ Testing Tools

**ขั้นตอนสุดท้าย**: ทดสอบเพื่อหา LINE User ID จริง แล้วตั้งเป็น Admin! 
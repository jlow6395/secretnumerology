# 📱 Phase 6: Update LINE Callback URLs

## 🎯 ขั้นตอนที่ต้องทำ:

### 1. เข้า LINE Developers Console
- ไป: https://developers.line.biz/console/
- เลือก Channel: **SecretNumerology** (Channel ID: 2007563809)

### 2. อัพเดท LIFF App Settings
1. ไปที่ **LIFF** tab
2. คลิกที่ LIFF App: `secretnumerology` (2007563809-E0YXRpZM)
3. อัพเดท **Endpoint URL**:
   - **เก่า**: `http://localhost:3001` หรือ `https://localhost:3001`
   - **ใหม่**: `https://www.secretnumerology.com`

### 3. อัพเดท Channel Settings (ถ้ามี)
1. ไปที่ **Basic settings** tab
2. หา **Webhook URL** (ถ้ามี):
   - **เก่า**: `http://localhost:3001/api/webhooks/line`
   - **ใหม่**: `https://www.secretnumerology.com/api/webhooks/line`

### 4. อัพเดท Login Channel (ถ้ามี)
1. ไปที่ **LINE Login** tab  
2. อัพเดท **Callback URL**:
   - **เก่า**: `http://localhost:3001/auth/callback`
   - **ใหม่**: `https://www.secretnumerology.com/auth/callback`

---

## ✅ URL ที่ต้องเปลี่ยน:

| Setting | Old URL | New URL |
|---------|---------|---------|
| **LIFF Endpoint** | `http://localhost:3001` | `https://www.secretnumerology.com` |
| **Login Callback** | `http://localhost:3001/auth/callback` | `https://www.secretnumerology.com/auth/callback` |
| **Webhook URL** | `http://localhost:3001/api/webhooks/line` | `https://www.secretnumerology.com/api/webhooks/line` |

---

## 🔍 การตรวจสอบ:
1. **LIFF URL**: https://liff.line.me/2007563809-E0YXRpZM
2. **Production Site**: https://www.secretnumerology.com
3. **Privacy Policy**: https://www.secretnumerology.com/privacy
4. **Terms of Service**: https://www.secretnumerology.com/terms

---

## 📋 ขั้นตอนต่อไป (Phase 7):
หลังจากอัพเดท LINE Callback URLs แล้ว:
1. ทดสอบ LINE Login
2. หา Admin LINE ID
3. อัพเดท ADMIN_LINE_ID environment variable
4. ทดสอบระบบทั้งหมด
5. **Go Live!** 🚀

**กรุณาอัพเดท LINE Callback URLs แล้วแจ้งกลับมา!** 
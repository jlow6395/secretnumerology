"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Bell, Shield, CreditCard, Download, Trash2, Edit3, Save, X } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    weekly: true,
  })

  const [profile, setProfile] = useState({
    fullName: "สมชาย โจดี",
    email: "somchai@example.com",
    phone: "081-234-5678",
    birthDate: "15/03/1990",
    avatar: "/images/avatar.png",
  })

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 lg:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">โปรไฟล์ของฉัน</h1>
            <p className="text-gray-400 mt-1">จัดการข้อมูลส่วนตัวและการตั้งค่า</p>
          </div>
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
            Premium Member
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info Card */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white flex items-center gap-2">
                  <User className="w-5 h-5" />
                  ข้อมูลส่วนตัว
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-purple-400 hover:text-purple-300"
                >
                  {isEditing ? <X className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                  {isEditing ? "ยกเลิก" : "แก้ไข"}
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={profile.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-purple-500 text-white text-xl">
                      {profile.fullName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button variant="outline" size="sm" className="border-gray-700">
                      เปลี่ยนรูปภาพ
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">ชื่อ-นามสกุล</Label>
                    {isEditing ? (
                      <Input
                        value={profile.fullName}
                        onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    ) : (
                      <p className="text-white bg-gray-800/50 p-3 rounded-md">{profile.fullName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300">วันเกิด</Label>
                    {isEditing ? (
                      <Input
                        value={profile.birthDate}
                        onChange={(e) => setProfile({ ...profile, birthDate: e.target.value })}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    ) : (
                      <p className="text-white bg-gray-800/50 p-3 rounded-md">{profile.birthDate}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300">อีเมล</Label>
                    {isEditing ? (
                      <Input
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    ) : (
                      <p className="text-white bg-gray-800/50 p-3 rounded-md">{profile.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300">เบอร์โทรศัพท์</Label>
                    {isEditing ? (
                      <Input
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    ) : (
                      <p className="text-white bg-gray-800/50 p-3 rounded-md">{profile.phone}</p>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex gap-2 pt-4">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Save className="w-4 h-4 mr-2" />
                      บันทึก
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      ยกเลิก
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  การแจ้งเตือน
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">แจ้งเตือนทางอีเมล</p>
                    <p className="text-sm text-gray-400">รับข่าวสารและอัพเดทใหม่</p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>

                <Separator className="bg-gray-700" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Push Notification</p>
                    <p className="text-sm text-gray-400">แจ้งเตือนบนมือถือ</p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                  />
                </div>

                <Separator className="bg-gray-700" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">SMS</p>
                    <p className="text-sm text-gray-400">แจ้งเตือนทาง SMS</p>
                  </div>
                  <Switch
                    checked={notifications.sms}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                  />
                </div>

                <Separator className="bg-gray-700" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">รายงานประจำสัปดาห์</p>
                    <p className="text-sm text-gray-400">สรุปดวงชะตาประจำสัปดาห์</p>
                  </div>
                  <Switch
                    checked={notifications.weekly}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, weekly: checked })}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Status */}
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  สถานะบัญชี
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">แพ็คเกจ:</span>
                  <Badge className="bg-purple-500">Premium</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">วันหมดอายุ:</span>
                  <span className="text-white">15/06/2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">รายงานคงเหลือ:</span>
                  <span className="text-green-400">ไม่จำกัด</span>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-4">
                  <CreditCard className="w-4 h-4 mr-2" />
                  จัดการการสมัครสมาชิก
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">การดำเนินการ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-gray-700">
                  <Download className="w-4 h-4 mr-2" />
                  ดาวน์โหลดรายงาน
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-700">
                  <Mail className="w-4 h-4 mr-2" />
                  ส่งรายงานทางอีเมล
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-700">
                  <Shield className="w-4 h-4 mr-2" />
                  เปลี่ยนรหัสผ่าน
                </Button>
                <Separator className="bg-gray-700" />
                <Button variant="destructive" className="w-full justify-start">
                  <Trash2 className="w-4 h-4 mr-2" />
                  ลบบัญชี
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

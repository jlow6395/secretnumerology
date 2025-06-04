"use client"

import type React from "react"
import { useState } from "react"
import { AppleButton } from "./AppleButton"
import { AppleCard } from "./AppleCard"
import { AppleText, AppleHeading1, AppleHeading2, AppleHeading3 } from "./AppleText"
import { AppleInput, AppleTextarea, AppleSelect } from "./AppleInput"
import { AppleForm, AppleFormField, AppleFormActions } from "./AppleForm"

export default function AppleShowcase() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    category: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    alert("ส่งข้อมูลเรียบร้อยแล้ว!")
  }

  return (
    <div className="min-h-screen bg-black p-8 space-y-12">
      {/* Typography Showcase */}
      <section className="space-y-8">
        <AppleHeading1 className="text-center">Design System Showcase</AppleHeading1>
        <AppleText variant="body" size="lg" color="secondary" className="text-center max-w-2xl mx-auto">
          ระบบออกแบบแรงบันดาลใจจาก Apple พร้อมชิ้นส่วนที่สวยงามและใช้งานง่าย
        </AppleText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Typography Card */}
          <AppleCard variant="glass" padding="lg" hover glow>
            <div className="space-y-4">
              <AppleHeading2>Typography</AppleHeading2>
              <AppleHeading3 size="xl">Heading 3</AppleHeading3>
              <AppleText variant="body">ข้อความปกติที่อ่านง่าย มีความชัดเจน และสวยงาม</AppleText>
              <AppleText variant="caption">คำอธิบายเพิ่มเติมด้วยตัวอักษรเล็ก</AppleText>
              <AppleText gradient size="lg" className="font-bold">
                ข้อความไล่สี
              </AppleText>
            </div>
          </AppleCard>

          {/* Buttons Card */}
          <AppleCard variant="dark" padding="lg" hover>
            <div className="space-y-4">
              <AppleHeading3>Buttons</AppleHeading3>
              <div className="space-y-3">
                <AppleButton variant="primary" size="md" className="w-full">
                  Primary Button
                </AppleButton>
                <AppleButton variant="secondary" size="md" className="w-full">
                  Secondary Button
                </AppleButton>
                <AppleButton variant="ghost" size="md" className="w-full">
                  Ghost Button
                </AppleButton>
                <AppleButton
                  variant="success"
                  size="sm"
                  className="w-full"
                  leftIcon={
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  }
                >
                  With Icon
                </AppleButton>
              </div>
            </div>
          </AppleCard>

          {/* Cards Showcase */}
          <AppleCard variant="gradient" padding="lg" hover glow>
            <div className="space-y-4">
              <AppleHeading3>Card Variants</AppleHeading3>
              <div className="space-y-3">
                <AppleCard variant="glass" padding="sm" radius="md">
                  <AppleText size="sm">Glass Card</AppleText>
                </AppleCard>
                <AppleCard variant="dark" padding="sm" radius="md">
                  <AppleText size="sm">Dark Card</AppleText>
                </AppleCard>
                <AppleCard variant="floating" padding="sm" radius="md">
                  <AppleText size="sm">Floating Card</AppleText>
                </AppleCard>
              </div>
            </div>
          </AppleCard>
        </div>
      </section>

      {/* Form Showcase */}
      <section className="max-w-4xl mx-auto">
        <AppleHeading2 className="text-center mb-8">Form Components</AppleHeading2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <AppleForm
            title="ติดต่อเรา"
            description="กรอกข้อมูลเพื่อติดต่อทีมงาน"
            variant="glass"
            isLoading={isLoading}
            onSubmit={handleSubmit}
          >
            <AppleFormField>
              <AppleInput
                label="ชื่อ"
                placeholder="กรอกชื่อของคุณ"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                leftIcon={
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                }
              />
            </AppleFormField>

            <AppleFormField>
              <AppleInput
                label="อีเมล"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                leftIcon={
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
            </AppleFormField>

            <AppleFormField>
              <AppleSelect
                label="หมวดหมู่"
                value={formData.category}
                onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                options={[
                  { value: "", label: "เลือกหมวดหมู่" },
                  { value: "general", label: "ทั่วไป" },
                  { value: "support", label: "ขอความช่วยเหลือ" },
                  { value: "feedback", label: "ข้อเสนอแนะ" },
                ]}
              />
            </AppleFormField>

            <AppleFormField>
              <AppleTextarea
                label="ข้อความ"
                placeholder="เขียนข้อความของคุณที่นี่..."
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                rows={4}
              />
            </AppleFormField>

            <AppleFormActions>
              <AppleButton type="submit" variant="primary" size="lg" isLoading={isLoading}>
                ส่งข้อความ
              </AppleButton>
              <AppleButton type="button" variant="ghost" size="lg">
                ยกเลิก
              </AppleButton>
            </AppleFormActions>
          </AppleForm>

          {/* Input Variants */}
          <div className="space-y-6">
            <AppleCard variant="glass" padding="lg">
              <AppleHeading3 className="mb-6">Input Variants</AppleHeading3>

              <div className="space-y-4">
                <AppleInput
                  variant="default"
                  placeholder="Default Input"
                  leftIcon={
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  }
                />

                <AppleInput
                  variant="filled"
                  placeholder="Filled Input"
                  rightIcon={
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  }
                />

                <AppleInput variant="ghost" placeholder="Ghost Input" />

                <AppleInput placeholder="Error State" error="กรุณากรอกข้อมูลให้ถูกต้อง" />

                <AppleInput placeholder="Success State" success="ข้อมูลถูกต้อง" />

                <AppleInput placeholder="Loading State" isLoading />
              </div>
            </AppleCard>
          </div>
        </div>
      </section>
    </div>
  )
}

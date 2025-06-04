"use client"

import type React from "react"

import { useState } from "react"
import { X, User, Calendar, Camera } from "lucide-react"

interface AddProfileModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (profile: { name: string; birthDate: string; avatar?: string }) => void
}

export default function AddProfileModal({ isOpen, onClose, onAdd }: AddProfileModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    avatar: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.birthDate) {
      onAdd(formData)
      setFormData({ name: "", birthDate: "", avatar: "" })
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-2xl p-6 w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">เพิ่มโปรไฟล์ใหม่</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Avatar Upload */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                {formData.avatar ? (
                  <img
                    src={formData.avatar || "/placeholder.svg"}
                    alt="Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User className="w-8 h-8 text-white" />
                )}
              </div>
              <button
                type="button"
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Camera className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>

          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">ชื่อ-นามสกุล</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="กรอกชื่อ-นามสกุล"
              required
            />
          </div>

          {/* Birth Date Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">วันเกิด</label>
            <div className="relative">
              <input
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData((prev) => ({ ...prev, birthDate: e.target.value }))}
                className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                required
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#2A2A2A] border border-[#3A3A3A] text-white py-3 rounded-lg hover:bg-[#3A3A3A] transition-colors"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              เพิ่มโปรไฟล์
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

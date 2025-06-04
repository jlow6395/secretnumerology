"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

const NumerologyForm: React.FC = () => {
  const router = useRouter()
  const [name, setName] = useState("")
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(name.trim() !== "" && day !== "" && month !== "" && year !== "")
  }, [name, day, month, year])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (isFormValid) {
      // ในโปรดักชันจริง คุณอาจต้องการเก็บข้อมูลนี้ใน localStorage หรือ context
      // เพื่อให้สามารถใช้ในหน้าถัดไปได้
      localStorage.setItem("numerology_name", name)
      localStorage.setItem("numerology_birthdate", `${day}/${month}/${year}`)

      // นำทางไปยัง step ถัดไป
      router.push("/wizard/step2")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto p-6 rounded-lg shadow-md bg-purple-800/30 backdrop-blur-sm border border-purple-500/20"
    >
      <div className="mb-4 flex items-center justify-center">
        <div className="flex items-center space-x-2 rounded-full bg-purple-900/40 px-4 py-2 backdrop-blur-sm border border-purple-500/20">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-300">เริ่มต้นการเดินทางของคุณ</span>
        </div>
      </div>

      <h3 className="mb-6 text-center text-xl font-semibold text-white">ค้นพบตัวเลขแห่งชีวิตของคุณ</h3>

      <div className="mb-4">
        <label htmlFor="name" className="block text-purple-200 text-sm font-bold mb-2">
          ชื่อเต็ม:
        </label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-purple-700/20 text-white border-purple-500/20"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ใส่ชื่อเต็มของคุณ"
        />
      </div>

      <div className="mb-6">
        <label className="block text-purple-200 text-sm font-bold mb-2">วันเกิด:</label>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <select
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-purple-700/20 text-white border-purple-500/20"
              required
            >
              <option value="">วัน</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-purple-700/20 text-white border-purple-500/20"
              required
            >
              <option value="">เดือน</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-purple-700/20 text-white border-purple-500/20"
              required
            >
              <option value="">ปี (ค.ศ.)</option>
              {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-purple-900/25 transition-all hover:shadow-xl hover:shadow-purple-900/40 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="relative z-10">คำนวณเลขศาสตร์ของฉัน</span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
      </button>
    </form>
  )
}

export default NumerologyForm

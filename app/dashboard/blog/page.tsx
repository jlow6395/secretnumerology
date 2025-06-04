"use client"

import UnifiedCard from "@/components/ui/UnifiedCard"
import Breadcrumb from "@/components/navigation/Breadcrumb"
import { Calendar, User, Eye, Heart } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    id: "numerology-2024",
    title: "เลขศาสตร์ปี 2024: ปีแห่งการเปลี่ยนแปลง",
    excerpt: "ปี 2024 เป็นปีเลข 8 ในเลขศาสตร์ ซึ่งหมายถึงความมั่งคั่ง อำนาจ และความสำเร็จ แต่ก็มาพร้อมกับความท้าทาย...",
    author: "อาจารย์สมชาย",
    date: "15 มกราคม 2024",
    readTime: "5 นาที",
    views: 1247,
    likes: 89,
    image: "/images/numerology-article1.png",
    category: "เลขศาสตร์",
  }

  const blogPosts = [
    {
      id: "life-path-guide",
      title: "คู่มือ Life Path Number ฉบับสมบูรณ์",
      excerpt: "เรียนรู้วิธีคำนวณและตีความ Life Path Number ของคุณ พร้อมคำแนะนำสำหรับแต่ละเลข",
      author: "อาจารย์ปัญญา",
      date: "12 มกราคม 2024",
      readTime: "8 นาที",
      views: 892,
      likes: 67,
      image: "/images/numerology-article2.png",
      category: "คู่มือ",
    },
    {
      id: "angel-numbers-meaning",
      title: "ความหมาย Angel Numbers ที่คุณควรรู้",
      excerpt: "เมื่อคุณเห็นเลขซ้ำๆ เช่น 111, 222, 333 นั่นอาจเป็นข้อความจากเทวดา มาดูความหมายกัน",
      author: "อาจารย์สุดา",
      date: "10 มกราคม 2024",
      readTime: "6 นาที",
      views: 654,
      likes: 45,
      image: "/images/numerology-article3.png",
      category: "Angel Numbers",
    },
    {
      id: "compatibility-love",
      title: "เลขศาสตร์กับความรัก: หาคู่ที่ใช่",
      excerpt: "ใช้เลขศาสตร์ช่วยหาคู่ที่เข้ากันได้ เรียนรู้วิธีคำนวณความเข้ากันในความรัก",
      author: "อาจารย์มาลี",
      date: "8 มกราคม 2024",
      readTime: "7 นาที",
      views: 543,
      likes: 38,
      image: "/images/numerology-article1.png",
      category: "ความรัก",
    },
    {
      id: "lucky-numbers-daily",
      title: "เลขนำโชครายวัน: วิธีใช้ให้เกิดประโยชน์",
      excerpt: "เรียนรู้วิธีหาเลขนำโชครายวันและนำไปใช้ในชีวิตประจำวันให้เกิดประโยชน์สูงสุด",
      author: "อาจารย์วิชัย",
      date: "5 มกราคม 2024",
      readTime: "4 นาที",
      views: 432,
      likes: 29,
      image: "/images/numerology-article2.png",
      category: "เลขนำโชค",
    },
    {
      id: "yantra-power",
      title: "พลังยันต์: ศาสตร์โบราณที่ยังใช้ได้",
      excerpt: "ยันต์คืออะไร ทำไมถึงมีพลัง และจะเลือกยันต์ที่เหมาะสมกับตัวเองอย่างไร",
      author: "หลวงพ่อสมชาย",
      date: "3 มกราคม 2024",
      readTime: "9 นาที",
      views: 321,
      likes: 22,
      image: "/images/numerology-article3.png",
      category: "ยันต์",
    },
  ]

  const categories = [
    { name: "ทั้งหมด", count: 24, active: true },
    { name: "เลขศาสตร์", count: 8 },
    { name: "Angel Numbers", count: 5 },
    { name: "ความรัก", count: 4 },
    { name: "คู่มือ", count: 3 },
    { name: "ยันต์", count: 2 },
    { name: "เลขนำโชค", count: 2 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Breadcrumb className="mb-4" />
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">บล็อกเลขศาสตร์</h1>
            <p className="text-indigo-100">บทความและความรู้เกี่ยวกับเลขศาสตร์</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <UnifiedCard variant="number" className="bg-gradient-to-r from-blue-500 to-cyan-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24</div>
              <div className="text-blue-100">บทความทั้งหมด</div>
            </div>
          </UnifiedCard>

          <UnifiedCard variant="number" className="bg-gradient-to-r from-green-500 to-emerald-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.2K</div>
              <div className="text-green-100">ผู้อ่านรายเดือน</div>
            </div>
          </UnifiedCard>

          <UnifiedCard variant="number" className="bg-gradient-to-r from-purple-500 to-pink-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">289</div>
              <div className="text-purple-100">ไลค์ทั้งหมด</div>
            </div>
          </UnifiedCard>

          <UnifiedCard variant="number" className="bg-gradient-to-r from-orange-500 to-red-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">7</div>
              <div className="text-orange-100">หมวดหมู่</div>
            </div>
          </UnifiedCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <UnifiedCard variant="info" className="mb-8 overflow-hidden">
              <div className="relative">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">แนะนำ</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span className="bg-indigo-600 text-white px-2 py-1 rounded text-xs">{featuredPost.category}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">{featuredPost.title}</h2>
                <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{featuredPost.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                    อ่านต่อ
                  </button>
                </div>
              </div>
            </UnifiedCard>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <UnifiedCard
                  key={post.id}
                  variant="info"
                  className="group hover:scale-105 transition-transform overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-3 text-xs text-gray-400 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                        อ่านเพิ่มเติม
                      </button>
                    </div>
                  </div>
                </UnifiedCard>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <UnifiedCard variant="info" className="mb-6">
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-4">หมวดหมู่</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                        category.active ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </UnifiedCard>

            {/* Popular Posts */}
            <UnifiedCard variant="info" className="mb-6">
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-4">บทความยอดนิยม</h3>
                <div className="space-y-3">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={post.id} className="flex space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-medium line-clamp-2 mb-1">{post.title}</h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-400">
                          <Eye className="h-3 w-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </UnifiedCard>

            {/* Newsletter */}
            <UnifiedCard variant="action">
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">รับข่าวสารใหม่</h3>
                <p className="text-gray-300 text-sm mb-4">รับบทความเลขศาสตร์ใหม่ๆ ส่งตรงถึงอีเมลของคุณ</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="อีเมลของคุณ"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    สมัครรับข่าวสาร
                  </button>
                </div>
              </div>
            </UnifiedCard>
          </div>
        </div>
      </div>
    </div>
  )
}

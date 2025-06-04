import Navigation from "@/components/Navigation"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        {/* About page content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">เกี่ยวกับเรา</h1>
          <p className="text-lg text-gray-600 text-center">เนื้อหาเกี่ยวกับเว็บไซต์เลขศาสตร์</p>
        </div>
      </div>
    </>
  )
}

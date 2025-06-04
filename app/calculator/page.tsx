import Navigation from "@/components/Navigation"

export default function CalculatorPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        {/* Calculator page content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">เครื่องคำนวณเลขศาสตร์</h1>
          <p className="text-lg text-gray-600 text-center">เครื่องคำนวณเลขศาสตร์ออนไลน์</p>
        </div>
      </div>
    </>
  )
}

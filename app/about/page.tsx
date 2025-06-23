import Navigation from "@/components/Navigation"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">เกี่ยวกับเรา</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ผู้นำด้านเทคโนโลยีเลขศาสตร์ที่เชื่อมต่อภูมิปัญญาโบราณกับเทคโนโลยีสมัยใหม่
              </p>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">บริษัท ซีเครท นิวเมอโรโลยี จำกัด</h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    เราเป็นบริษัทผู้นำด้านเทคโนโลยีเลขศาสตร์ที่มุ่งเน้นการนำภูมิปัญญาโบราณมาผสมผสานกับเทคโนโลยีสมัยใหม่ 
                    เพื่อให้บริการที่แม่นยำและเข้าถึงได้ง่ายสำหรับผู้ใช้งานกว่า 10,000+ คนทั่วประเทศ
                  </p>
                  <p className="text-lg leading-relaxed">
                    ด้วยประสบการณ์กว่า 17 ปีในการศึกษาและพัฒนาระบบเลขศาสตร์ เราได้พัฒนาระบบคำนวณที่ครอบคลุม
                    สูตรเลขศาสตร์กว่า 14 สูตร พร้อมการวิเคราะห์เชิงลึกด้วย AI ที่ให้คำแนะนำแบบส่วนตัว
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">ข้อมูลติดต่อ</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700">ชื่อบริษัท</h4>
                    <p className="text-gray-600">บริษัท ซีเครท นิวเมอโรโลยี จำกัด</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">เลขทะเบียน</h4>
                    <p className="text-gray-600">0105564001234</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">ที่อยู่</h4>
                    <p className="text-gray-600">123/45 อาคารเทคโนโลยี ถนนสุขุมวิท<br />กรุงเทพฯ 10110</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">โทรศัพท์</h4>
                    <p className="text-gray-600">083-823-4661</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">อีเมล</h4>
                    <p className="text-gray-600">support@secretnumerology.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ปณิธานของเรา</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                เราเชื่อว่าทุกคนมีความพิเศษและมีเส้นทางชีวิตที่เป็นเอกลักษณ์ เลขศาสตร์คือเครื่องมือที่จะช่วยเปิดเผยศักยภาพที่ซ่อนอยู่
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ความแม่นยำ</h3>
                <p className="text-gray-600">
                  ใช้อัลกอริทึมที่พัฒนาจากการศึกษาเลขศาสตร์มากว่า 17 ปี เพื่อให้ผลลัพธ์ที่แม่นยำที่สุด
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ง่ายต่อการใช้งาน</h3>
                <p className="text-gray-600">
                  ออกแบบระบบให้ใช้งานง่าย เข้าใจได้ทันที ไม่จำเป็นต้องมีความรู้เลขศาสตร์ล่วงหน้า
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ปรับใช้ได้จริง</h3>
                <p className="text-gray-600">
                  ให้คำแนะนำที่นำไปปรับใช้ในชีวิตประจำวันได้จริง ไม่ใช่แค่ข้อมูลทั่วไป
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ผลงานของเรา</h2>
              <p className="text-lg text-gray-600">ตัวเลขที่สะท้อนความเชื่อมั่นจากผู้ใช้งาน</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">ผู้ใช้งาน</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">17+</div>
                <div className="text-gray-600">ปีประสบการณ์</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">14</div>
                <div className="text-gray-600">สูตรเลขศาสตร์</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">4.9★</div>
                <div className="text-gray-600">คะแนนรีวิว</div>
              </div>
            </div>
          </div>
        </section>
        {/* About page content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">เกี่ยวกับเรา</h1>
          <p className="text-lg text-gray-600 text-center">เนื้อหาเกี่ยวกับเว็บไซต์เลขศาสตร์</p>
        </div>
      </div>
    </>
  )
}

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Test Page</h1>
        <p className="text-xl">If you can see this, the server is working!</p>
        <p className="text-sm text-gray-400 mt-4">This is a simple test without AuthContext or Supabase connections.</p>
      </div>
    </div>
  )
} 
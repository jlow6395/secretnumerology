import Navigation from "@/components/Navigation"

export default function Loading() {
  // You can add any UI inside Loading, including a skeleton.
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-grow flex items-center justify-center">
        <p>Loading feed...</p>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

interface Step4Props {
  onNext: () => void
  onBack: () => void
}

const Step4: React.FC<Step4Props> = ({ onNext, onBack }) => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Step 4: Confirmation</h2>
        <p className="mb-6">Please review your information and confirm your submission.</p>

        {/* Display user information here */}
        <div className="mb-4">
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
          <p>Address: 123 Main St</p>
        </div>

        <div className="flex justify-between">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onNext}
          >
            Confirm & Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step4

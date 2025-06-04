const Step5 = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold mb-6">Step 5: Confirmation</h1>
        <p className="mb-4">Please review your information below and confirm your submission.</p>

        {/* Display user information here */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <p>John Doe</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <p>john.doe@example.com</p>
          </div>
          {/* Add more information fields as needed */}
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Confirm and Submit
        </button>
      </div>
    </div>
  )
}

export default Step5

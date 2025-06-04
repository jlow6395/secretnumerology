const Step8 = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-center mb-8">Step 8: Confirmation</h1>
        <div className="bg-white shadow-md rounded-lg p-8">
          <p className="text-gray-700 leading-relaxed">
            Please review your information below and confirm your submission.
          </p>
          {/* Display user information here */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Your Information:</h2>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            {/* Add more user information as needed */}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Confirm and Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step8

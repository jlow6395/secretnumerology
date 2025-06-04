const Step2 = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold mb-6">Step 2: More Information</h1>
        <p className="mb-4">Please provide some additional information to help us personalize your experience.</p>

        <form>
          <div className="mb-4">
            <label htmlFor="occupation" className="block text-gray-700 text-sm font-bold mb-2">
              Occupation:
            </label>
            <input
              type="text"
              id="occupation"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your occupation"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="interests" className="block text-gray-700 text-sm font-bold mb-2">
              Interests:
            </label>
            <textarea
              id="interests"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your interests"
            />
          </div>

          {/* Add more form fields as needed */}

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Step2

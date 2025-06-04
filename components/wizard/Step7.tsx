const Step7 = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold mb-6">Step 7: Confirmation</h1>
        <p className="mb-4">
          Please review the information you have provided. If everything is correct, click "Submit" to complete the
          process.
        </p>

        {/* Display summary of information entered in previous steps */}
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> john.doe@example.com
          </p>
          {/* Add more summary details here */}
        </div>

        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Back</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Step7

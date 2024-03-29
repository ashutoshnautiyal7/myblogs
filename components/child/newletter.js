import React from 'react'

export default function newletter() {
  return (
    <div className="w-full md:container  mx-auto relative p-5">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gradient-to-r from-cyan-500 to-blue-500 p-10 lg:p-[60px] rounded-2xl">
	  <div>
	  <h3 className="text-white text-3xl font-semibold">Sign up for our newsletter</h3>

	  <p className="text-xl text-white mt-4">
		  Get the best news on weelky basis! Join now and don&apos;t miss it.
	  </p>
	  </div>

	  <div>
	  <div className="flex items-stretch">
		  <input
		  type="email"
		  placeholder="Enter your email"
		  className="px-4 -mx-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
	  />

		  <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-2 md:px-5 rounded-lg font-semibold ml-4 border-4 border-white">
		  Subscribe
		  </button>
	  </div>

	  <p className="text-white mt-2 text-sm">
		  We care about your data in our <a href="#" className="underline">privacy policy</a>.
	  </p>
	  </div>
  </div>
</div>
  )
}

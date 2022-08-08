import React from 'react'

export default function newletter() {
  return (
    <div class="w-full md:container  mx-auto relative p-5">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gradient-to-r from-cyan-500 to-blue-500 p-10 lg:p-[60px] rounded-2xl">
	  <div>
	  <h3 class="text-white text-3xl font-semibold">Sign up for our newsletter</h3>

	  <p class="text-xl text-white mt-4">
		  Get the best news on weelky basis! Join now and don't miss it.
	  </p>
	  </div>

	  <div>
	  <div class="flex items-stretch">
		  <input
		  type="email"
		  placeholder="Enter your email"
		  class="px-4 -mx-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
	  />

		  <button class="bg-blue-500 hover:bg-blue-600 text-white py-3 px-2 md:px-5 rounded-lg font-semibold ml-4 border-4 border-white">
		  Subscribe
		  </button>
	  </div>

	  <p class="text-white mt-2 text-sm">
		  We care about your data in our <a href="#" class="underline">privacy policy</a>.
	  </p>
	  </div>
  </div>
</div>
  )
}

import React from 'react'

export default function newletter() {
  return (
    <section className='bg-gray-50 mt-20 py-16 text-center'>
        <h1 className='font-bold text-3xl'>Subscribe Newsletter</h1>

        <div className="py-4">
            <input type="text" className='shadow border-2 rounded-md w-9/12 py-3 px-3 text-gray-700 focus:outline-orange-700 focus:shadow-outline ' placeholder='Enter your Email' />
        </div>

        <button className='bg-gradient-to-r from-orange-400 to-pink-500 px-20 py-3 rounded-full text-gray-50 text-xl '>Subscribe</button>

    </section>
  )
}

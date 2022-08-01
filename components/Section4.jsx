import React from 'react'
import Author from './child/author'
import Link from 'next/link'
import Image from 'next/image'

export default function Section4() {
  return (
    <section className='container mx-auto py-16'>

        <div className="grid lg:grid-cols-2 space-x-10">

            <div className="item">
                <h1 className='font-bold text-4xl py-12 '>Business </h1>
                <div className="flex flex-col gap-6 ">

                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                </div>

            </div>

            <div className="item">
                <h1 className='font-bold text-4xl py-12 '>Travel </h1>
                <div className="flex flex-col gap-6 ">

                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                </div>

            </div>

        </div>
        
    </section>
  )
}

function Post(){
    return (

        <div className="flex gap-5">
            <div className="image flex flex-col justify-start ">

            <div className='image' >
                    <Image src={"/images/img1.jpg"} className="rounded" width={300} height={300} />
                </div>
            </div>

            <div className="info flex flex-col justify-center ">
                <div className="cat">
                    <Link href={"/"}><a className='text-center text-orange-600 '>Business Travel </a></Link>
                    <Link href={"/"}><a className='text-center text-gray-600'> - july 27, 2022</a></Link>
                </div>

                <div className="title ">
                    <Link href={"/"}><a className='  text-center text-justify text-xl  font-semibold'>your most unhappy customers are your greatest source of learning  </a></Link>
                </div>

                <Author />

            </div>

           


        </div>
    )
}

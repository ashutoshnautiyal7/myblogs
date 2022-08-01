import React from 'react'
import Author from './child/author'
import Link from 'next/link'
import Image from 'next/image'

// now we'll be importing the data from the backend via getpost() this is the fetch api in helper.js
import getPost from '../lib/helper'

// we'll better use swr to fetch our data --> fetcher 
import fetcher from '../lib/fetcher'




 export default function Section2() {

    // console.log(getPost())
    // getPost().then( res => console.log(res))
  return (
    <section className='container mx-auto  py-10'>
        <h1 className='font-bold text-4xl py-12 text-center '>Latest Posts</h1>

        {/* grid columns */}
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-14  ">

            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}

        </div>
    </section>
  )
}

function Post(){
    return(
         <div className="item">

            <div className="images">
                <div className='image' >
                    <Image src={"/images/img1.jpg"} className="" width={500} height={350} />
                </div>
            </div>

            <div className="info flex justify-center flex-col py-4 ">
                <div className="cat">
                    <Link href={"/"}><a className='text-center text-orange-600 '>Business Travel </a></Link>
                    <Link href={"/"}><a className='text-center text-gray-600'> - july 27, 2022</a></Link>
                </div>

                <div className="title">
                    <Link href={"/"}><a className='text-center text-xl font-semibold'>your most unhappy curstomers are your greatest source of learning  </a></Link>
                </div>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iste repellat quo aperiam possimus porro a repellendus eos, officia itaque quidem quae, minima saepe. Possimus veritatis, impedit quo dolore sunt alias facilis dolores ipsum nostrum vero inventore similique animi sequi maxime. Nulla, iure et.</p>

                <Author />


            </div>
         </div>
    )
}

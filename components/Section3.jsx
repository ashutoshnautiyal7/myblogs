import React from 'react'
import Author from './child/author'
import Link from 'next/link'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {Autoplay} from 'swiper'

// Import Swiper styles
import 'swiper/css';

export default function Section3() {
  return (
    <section className='container mx-auto py-16 '>

        <h1 className='font-bold text-4xl py-12 text-center '>Most Popular </h1>
        
            <Swiper

                        spaceBetween={100}
                        autoplay={{
                            delay:1500
                        }}
                        loop={true}

                        slidesPerView={2}

                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        <SwiperSlide>{Post()}</SwiperSlide>
                        <SwiperSlide>{Post()}</SwiperSlide>
                        <SwiperSlide>{Post()}</SwiperSlide>
                        <SwiperSlide>{Post()}</SwiperSlide>
                        ...
            </Swiper>

    </section>
  )
}

function Post(){
    return(
         <div className="item">

            <div className="images">
                <div className='image' >
                    <Image src={"/images/img1.jpg"} className="" width={600} height={450} />
                </div>
            </div>

            <div className="info flex justify-center flex-col py-4 ">
                <div className="cat">
                    <Link href={"/"}><a className='text-center text-orange-600 '>Business Travel </a></Link>
                    <Link href={"/"}><a className='text-center text-gray-600'> - july 27, 2022</a></Link>
                </div>

                <div className="title ">
                    <Link href={"/"}><a className='  text-center text-justify text-3xl  font-semibold'>your most unhappy customers are your greatest source of learning  </a></Link>
                </div>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iste repellat quo aperiam possimus porro a repellendus eos, officia itaque quidem quae, minima saepe. Possimus veritatis, impedit quo dolore sunt alias facilis dolores ipsum nostrum vero inventore similique animi sequi maxime. Nulla, iure et.</p>

                <Author />


            </div>
         </div>
    )
}
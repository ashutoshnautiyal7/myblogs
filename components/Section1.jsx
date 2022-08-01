import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './child/author'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {Autoplay} from 'swiper'

// Import Swiper styles
import 'swiper/css';



export default function Section1() {

    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition:"right"
    }


  return (
    <section className='py-16' style={bg}>
        <div className="container mx-auto">
            <h1 className="font-bold text-4xl  pb-12 text-center">Trending</h1>
                <Swiper


                    autoplay={{
                        delay:1500
                    }}
                    loop={true}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    ...
                </Swiper>
        </div>
    </section>
  )
}


function Slide(){
    return(

        <div className="grid md:grid-cols-2">
            <div className='image' >
                <Image src={"/images/img1.jpg"} width={600} height={600} />
            </div>


            <div className='info flex flex-col justify-center'>
                <div className="cat">
                    <Link href={"/"}><a className='text-center text-orange-600 '>Business Travel </a></Link>
                    <Link href={"/"}><a className='text-center text-gray-600'> - july 27, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className='text-center text-3xl md:text-6xl '>your most unhappy curstomers are your greatest source of learning  </a></Link>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iste repellat quo aperiam possimus porro a repellendus eos, officia itaque quidem quae, minima saepe. Possimus veritatis, impedit quo dolore sunt alias facilis dolores ipsum nostrum vero inventore similique animi sequi maxime. Nulla, iure et.</p>

                    <Author />
                </div>
            </div>

        </div>
    )
}
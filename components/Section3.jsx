import React, { useEffect, useState } from 'react'
import Author from './child/author'
import Link from 'next/link'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {Autoplay} from 'swiper'

// Import Swiper styles
import 'swiper/css';

import Spinner from './child/spinner'


export default function Section3() {

    // fetching the data from popular object
     // fetching the data from the backend 
     const [data, setData] = useState([]);
     const [loading, setLoading] = useState(false);
   
     useEffect(() => {
       setLoading(true);
       fetch('/api/popular')
         .then((res) => res.json())
         .then((data) => {
           setData(data);
         })
         .catch((err) => {
           console.log(err);
         })
         .finally(() => {
           setLoading(false);
         });
     }, []);
   
     if (loading) {
       return <Spinner ></Spinner>
     }
 
 

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

                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        >
                        {/* <SwiperSlide>{Post()}</SwiperSlide>
                        <SwiperSlide>{Post()}</SwiperSlide>
                        <SwiperSlide>{Post()}</SwiperSlide>
                        <SwiperSlide>{Post()}</SwiperSlide>
                        ... */}

                        {data.map((item) => (
                        // <Post data={item} />
                            <SwiperSlide><Post data={item} /></SwiperSlide>
                        ))}

                    
            </Swiper>

    </section>
  )
}

function Post({data}){

    const {id, category, img, published ,description,  author, title} = data;

    return(
         <div className="item">

            <div className="images">
                <div className='image' >
                    <Image src={img || "/images/img1.jpg"} className="" width={600} height={450} />
                </div>
            </div>

            <div className="info flex justify-center flex-col py-4 ">
                <div className="cat">
                    <Link href={"/"}><a className='text-center text-orange-600 '>{category} </a></Link>
                    <Link href={"/"}><a className='text-center text-gray-600'> - {published}</a></Link>
                </div>

                <div className="title ">
                    <Link href={"/"}><a className='  text-center text-justify text-3xl  font-semibold'>title  </a></Link>
                </div>

                <p>{description}</p>

                {author?<Author></Author>:<></> }


            </div>
         </div>
    )
}
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Author from './child/author'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {Autoplay} from 'swiper'

// Import Swiper styles
import 'swiper/css';


import Spinner from './child/spinner'


export default function Section1() {

    // fetching the data from the backend 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      fetch('/api/trending')
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



    SwiperCore.use([Autoplay])

    // const bg = {
    //     background: "url('/images/banner.png') no-repeat",
    //     backgroundPosition:"right"
    // }

    
     

  return (
    <section >
        <div className="container mx-auto">
            <h1 className="font-medium text-4xl my-8 text-center">Trending</h1>
                <Swiper


                    autoplay={{
                        delay:1500
                    }}
                    loop={true}
                    slidesPerView={1}
                    
                    >


                    {/* <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide> */}

                    {data.map((item) => (
                        // <Post data={item} />
                        <SwiperSlide key={item.id}><Slide data={item} /></SwiperSlide>
                    ))}
                </Swiper>
        </div>

     
    </section>

    
  )
}


function Slide({data}){

    const {id, category, img, published ,subtitle,  author, title} = data;

    return(

        <div className="grid md:grid-cols-2 m-2 p-1">
            <div className='image flex flex-col items-center justify-center'  >
                <Link href={`/trending/${id}`}>
                  <Image src={img || "/images/img1.jpg"} className="rounded-md" width={600} height={600} alt='image' />
                </Link>
            </div>


            <div className='info flex flex-col justify-center md:pl-8 lg:p-2'>
                <div className="cat">
                    <Link href={`/trending/${id}`}><a className='text-center text-orange-600 p-1 md:p-2 '>{category} </a></Link>
                    <Link href={`/trending/${id}`}><a className='text-center text-gray-600  p-1 md:p-2'> - {published}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/trending/${id}`}><a className='text-center text-3xl xl:text-6xl my-1 '>{title}  </a></Link>

                    <p className='mt-5'>{subtitle}</p>

                    {author?<Author {...author}></Author>:<></> }
                    {/* ...author is the way of destructing the author object --> now we can put the changes in <Author> component */}
                </div>
            </div>

        </div>
    )
}
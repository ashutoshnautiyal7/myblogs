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
                    
                    >


                    {/* <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide> */}

                    {data.map((item) => (
                        // <Post data={item} />
                        <SwiperSlide><Slide data={item} /></SwiperSlide>
                    ))}

                    
                    ...
                </Swiper>
        </div>
    </section>
  )
}


function Slide({data}){

    const {id, category, img, published ,description,  author, title} = data;

    return(

        <div className="grid md:grid-cols-2">
            <div className='image' >
                <Link href={`/posts/${id}`}>
                  <Image src={img || "/images/img1.jpg"} width={600} height={600} />
                </Link>
            </div>


            <div className='info flex flex-col justify-center'>
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className='text-center text-orange-600 '>{category} </a></Link>
                    <Link href={`/posts/${id}`}><a className='text-center text-gray-600'> - {published}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}><a className='text-center text-3xl md:text-6xl '>{title}  </a></Link>

                    <p>{description}</p>

                    {author?<Author {...author}></Author>:<></> }
                    {/* ...author is the way of destructing the author object --> now we can put the changes in <Author> component */}
                </div>
            </div>

        </div>
    )
}
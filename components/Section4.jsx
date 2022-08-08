import React, { useEffect, useState } from 'react'
import Author from './child/author'
import Link from 'next/link'
import Image from 'next/image'
import Spinner from './child/spinner'


import Section42 from './Section42'
export default function Section4() {


    // fetching the data from popular object
     // fetching the data from the backend 
     const [data, setData] = useState([]);
     const [loading, setLoading] = useState(false);
     
   
     useEffect(() => {
       setLoading(true);
       fetch('/api/posts')
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
    <section className='container mx-auto mb-16 md:mb-20 '>

        <div className="grid lg:grid-cols-2 md:space-x-10">

            <div className="item">
                <h1 className='font-medium  text-gray-700 text-4xl py-12 mx-auto text-center md:text-start'>Business </h1>
                <div className="flex flex-col gap-6 ">

                    {/* {Post()}
                    {Post()}
                    {Post()}
                    {Post()} */}
                    {data[1] ? <Post data={data[1]} />:<></>}
                    {data[2] ? <Post data={data[2]} />:<></>}
                    {data[3] ? <Post data={data[3]} />:<></>}
                </div>

            </div>
            
            <Section42 />


        </div>
        
    </section>
  )
}



function Post({data}){

    const {id, category, img, published ,description,  author, title} = data;

    return (

        <div className="flex flex-col sm:flex-row  md:gap-5 items-center justify-center text-center sm:items-start sm:justify-between sm:text-start ">
            <div className="image flex flex-col justify-start ">

            <div className='image' >
            <Link href={`/posts/${id}`}>
                    <Image src={img || "/images/img1.jpg"} className="rounded" width={300} height={300} />
            </Link>
                </div>
            </div>

            <div className="info flex flex-col justify-center px-2 ">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className='text-center text-orange-600 '>{category} </a></Link>
                    <Link href={`/posts/${id}`}><a className='text-center text-gray-600'> - {published}</a></Link>
                </div>

                <div className="title ">
                    <Link href={`/posts/${id}`}><a className='  text-center text-justify text-xl  font-medium'>{title}</a></Link>
                </div>

                <div className='mx-auto sm:mx-0'>
                {author?<Author {...author}></Author>:<></> }

                </div>
        
            </div>

        </div>
    )
}


function Trending({data}){

    const {id, category, img, published ,description,  author, title} = data;

    return (

        <div className="flex flex-col sm:flex-row  md:gap-5 items-center justify-center text-center sm:items-start sm:justify-between sm:text-start ">
            <div className="image flex flex-col justify-start ">

            <div className='image' >
            <Link href={`/Trending/${id}`}>
                    <Image src={img || "/images/img1.jpg"} className="rounded" width={300} height={300} />
            </Link>
                </div>
            </div>

            <div className="info flex flex-col justify-center px-2 ">
                <div className="cat">
                    <Link href={`/Trending/${id}`}><a className='text-center text-orange-600 '>{category} </a></Link>
                    <Link href={`/posts/${id}`}><a className='text-center text-gray-600'> - {published}</a></Link>
                </div>

                <div className="title ">
                    <Link href={`/Trending/${id}`}><a className='  text-center text-justify text-xl  font-medium'>{title}</a></Link>
                </div>

                <div className='mx-auto sm:mx-0'>
                {author?<Author {...author}></Author>:<></> }

                </div>
        
            </div>

        </div>
    )
}

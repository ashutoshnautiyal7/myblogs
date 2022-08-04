import React, { useEffect, useState } from 'react'
import Author from './child/author'
import Link from 'next/link'
import Image from 'next/image'
import Spinner from './child/spinner'


export default function Section4() {


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
    <section className='container mx-auto py-16'>

        <div className="grid lg:grid-cols-2 space-x-10">

            <div className="item">
                <h1 className='font-bold text-4xl py-12 '>Business </h1>
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

            <div className="item">
                <h1 className='font-bold text-4xl py-12 '>Travel </h1>
                <div className="flex flex-col gap-6 ">
{/* 
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()} */}

                    {data[4] ? <Post data={data[4]} />:<></>}
                    {data[6] ? <Post data={data[6]} />:<></>}
                    {data[2] ? <Post data={data[2]} />:<></>}
                </div>

            </div>

        </div>
        
    </section>
  )
}

function Post({data}){

    const {id, category, img, published ,description,  author, title} = data;

    return (

        <div className="flex gap-5">
            <div className="image flex flex-col justify-start ">

            <div className='image' >
            <Link href={`/posts/${id}`}>
                    <Image src={img || "/images/img1.jpg"} className="rounded" width={300} height={300} />
            </Link>
                </div>
            </div>

            <div className="info flex flex-col justify-center ">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className='text-center text-orange-600 '>{category} </a></Link>
                    <Link href={`/posts/${id}`}><a className='text-center text-gray-600'> - {published}</a></Link>
                </div>

                <div className="title ">
                    <Link href={`/posts/${id}`}><a className='  text-center text-justify text-xl  font-semibold'>{title}</a></Link>
                </div>

                {author?<Author {...author}></Author>:<></> }
            </div>

           


        </div>
    )
}

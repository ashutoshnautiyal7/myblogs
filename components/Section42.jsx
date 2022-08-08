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
 
   
    
 
 

  return (
    <section className=''>

        

            <div className="item">
                <h1 className='font-medium  text-gray-700 text-4xl py-12 mx-auto text-center md:text-start'>Trending </h1>
                <div className="flex flex-col gap-6 ">

                    {/* {Post()}
                    {Post()}
                    {Post()}
                    {Post()} */}
                    {data[1] ? <Trending data={data[1]} />:<></>}
                    {data[2] ? <Trending data={data[2]} />:<></>}
                    {data[3] ? <Trending data={data[3]} />:<></>}
                </div>

            </div>


       
        
    </section>
  )
}



function Trending({data}){

    const {id, category, img, published ,description,  author, title} = data;

    return (

        <div className="flex flex-col sm:flex-row  md:gap-5 items-center justify-center text-center sm:items-start sm:justify-between sm:text-start ">
            <div className="image flex flex-col justify-start ">

            <div className='image' >
            <Link href={`/trending/${id}`}>
                    <Image src={img || "/images/img1.jpg"} className="rounded" width={300} height={300} />
            </Link>
                </div>
            </div>

            <div className="info flex flex-col justify-center px-2 ">
                <div className="cat">
                    <Link href={`/trending/${id}`}><a className='text-center text-orange-600 '>{category} </a></Link>
                    <Link href={`/trending/${id}`}><a className='text-center text-gray-600'> - {published}</a></Link>
                </div>

                <div className="title ">
                    <Link href={`/trending/${id}`}><a className='  text-center text-justify text-xl  font-medium'>{title}</a></Link>
                </div>

                <div className='mx-auto sm:mx-0'>
                {author?<Author {...author}></Author>:<></> }

                </div>
        
            </div>

        </div>
    )
}

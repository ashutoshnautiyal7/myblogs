import React, { useEffect, useState } from 'react'
import Author from './child/author'
import Link from 'next/link'
import Image from 'next/image'

import Spinner from './child/spinner'


export default function Section6() {



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

    <section className='container mx-auto  md:py-10'>
        <h1 className='font-medium text-4xl text-gray-700 py-12 text-center '>Latest Posts</h1>

        {/* grid columns */}
        <div className="grid  md:grid-cols-2 xl:grid-cols-3 gap-12  ">

            {/* {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()} */}

          
            {data.map((item) => (
            <Post key={item.id} data={item} />
            ))}

        </div>
    </section>
  )
}


function Post({data}){

  const {id, category, img, published ,subtitle,  author, title} = data;



    return(
         <div className="m-1 item border-2 border-gray-400 shadow-lg rounded-lg mx-2 md:mx-0 ">

            <div className="images">
                <div className='image ' >
                  <Link href={`/posts/${id}`}>
                    <Image src={img || "/images/bg.webp"} className="rounded-t-md sm:w-fulljj" width={500} height={350 } alt='noimage' />
                  </Link>
                </div>
            </div>

            <div className="info flex justify-center flex-col py-4 mx-3  ">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className='text-center text-orange-600 '>{category}</a></Link>
                    <Link href={`/posts/${id}`}><a className='text-center text-gray-600'> - {published}</a></Link>
                </div>

                <div className="title">
                    <Link href={`/posts/${id}`}><a className='text-center text-xl md:text-2xl font-medium'>{title} </a></Link>
                </div>

                <p>{subtitle}</p>

                {/* {author?<Author {...author}></Author>:<></> } */}
                <br />
                <hr className='border-2 border-gray-400' />
                {author?<Author {...author}></Author>:<></> }


            </div>
         </div>
    )
}

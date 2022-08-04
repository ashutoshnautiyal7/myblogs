import React, { useEffect, useState } from 'react'
import Author from './child/author'
import Link from 'next/link'
import Image from 'next/image'





// now we'll be importing the data from the backend via getpost() this is the fetch api in helper.js
// import getPost from '../lib/helper'

// we'll better use swr to fetch our data --> fetcher // error on mapping so tried the other way out
// import fetcher from '../lib/fetcher'

import Spinner from './child/spinner'




 export default function Section2() {

    // const {data, isLoading, isError} = fetcher('api/posts')

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
    // if(data) console.log(data);


    // console.log(getPost())
    // getPost().then( res => console.log(res))xx
  return (
    <section className='container mx-auto  py-10'>
        <h1 className='font-bold text-4xl py-12 text-center '>Latest Posts</h1>

        {/* grid columns */}
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-14  ">

            {/* {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()} */}

            {/* {
                data.map((value, index) => {
                    <Post data={value} key={index} />
                })
            } */}
            {/* {data.map((item) => (
            <li key={item.id}>{item.published}</li>
            ))} */}
            {data.map((item) => (
            <Post data={item} />
            ))}

        </div>
    </section>
  )
}

function Post({data}){

    // data is having an object which we are destructuring down there
    const {id, category, img, published , author, title} = data;

    return(
         <div className="item">

            <div className="images">
                <div className='image' >
                  <Link href={`/posts/${id}`}>
                    <Image src={img || "/images/img1.jpg"} className="" width={500} height={350} />
                  </Link>
                </div>
            </div>

            <div className="info flex justify-center flex-col py-4 ">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className='text-center text-orange-600 '>{category}</a></Link>
                    <Link href={`/posts/${id}`}><a className='text-center text-gray-600'> - {published}</a></Link>
                </div>

                <div className="title">
                    <Link href={`/posts/${id}`}><a className='text-center text-xl font-semibold'>{title} </a></Link>
                </div>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iste repellat quo aperiam possimus porro a repellendus eos, officia itaque quidem quae, minima saepe. Possimus veritatis, impedit quo dolore sunt alias facilis dolores ipsum nostrum vero inventore similique animi sequi maxime. Nulla, iure et.</p>

                {author?<Author {...author}></Author>:<></> }


            </div>
         </div>
    )
}

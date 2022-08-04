import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import Author from "./author"
import Spinner from './spinner'




export default function related() {

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
    
    <div className="pt-20">
      <h1 className="font-bold text-4xl py-12">Related</h1>

      <div className="flex flex-col gap-10">
        {/* {post()}
        {post()}
        {post()}
        {post()} */}

        {
            data.map((item) => (
              <Post data={item} ></Post>
            ))
        }
      </div>
    </div>
  )
}

function Post({data}){

  const { id, title , category, img , published, author} = data;

  return(
    <div className="flex gap-5 ">
      <div className="image flex flex-col justify-start ">

      <div className='image' >
              <Image src={img ||"/images/img1.jpg"} className="rounded" width={300} height={300} />
          </div>
      </div>

      <div className="info flex flex-col justify-center ">
                <div className="cat">
                    <Link href={"/"}><a className='text-center text-orange-600 '>{category} </a></Link>
                    <Link href={"/"}><a className='text-center text-gray-600'> - {published}</a></Link>
                </div>

                <div className="title ">
                    <Link href={"/"}><a className='  text-center text-justify text-xl  font-semibold'>{title}  </a></Link>
                </div>

                {/* {author?<Author {...author}></Author>:<></> } */}
            </div>

    </div>
  )
}
import Image from "next/image"
import Link from "next/link"
import Author from "../../components/child/author"
import Related from "../../components/child/related"
import Format from "../../layout/format"


export default function related() {
  return (
    
    <div className="pt-20">
      <h1 className="font-bold text-4xl py-12">Related</h1>

      <div className="flex flex-col gap-10">
        {post()}
        {post()}
        {post()}
        {post()}
      </div>
    </div>
  )
}

function post(){
  return(
    <div className="flex gap-5 ">
      <div className="image flex flex-col justify-start ">

      <div className='image' >
              <Image src={"/images/img1.jpg"} className="rounded" width={300} height={300} />
          </div>
      </div>

      <div className="info flex flex-col justify-center ">
                <div className="cat">
                    <Link href={"/"}><a className='text-center text-orange-600 '>Business Travel </a></Link>
                    <Link href={"/"}><a className='text-center text-gray-600'> - july 27, 2022</a></Link>
                </div>

                <div className="title ">
                    <Link href={"/"}><a className='  text-center text-justify text-xl  font-semibold'>your most unhappy customers are your greatest source of learning  </a></Link>
                </div>

                <Author />

            </div>

    </div>
  )
}
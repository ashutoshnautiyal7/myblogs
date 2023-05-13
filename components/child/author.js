import Image from "next/image"
import Link from "next/link"


export default function author({name , img, designation}) {

  if(!name && !img) return <></>
  return (
    <div className="author flex py-5">
        <Image src={img || '/images/author/author1.jpg'} width={60} alt="noimage" height={60} className="rounded-full" ></Image>
        <div className="flex flex-col justify-center px-4">
          <Link href={'/'} ><a className="font-bold text-md text-gray-800 hover:text-gray-600">{name}</a></Link>
          <span className="text-sm text-gray-500 ">{designation}</span>
        </div>
    

    </div>
  )
}

import React from 'react'
import {  ImFacebook, ImTwitter,   } from  'react-icons/im';
import {FaInstagram} from 'react-icons/fa'
import Link from 'next/link';


function Header() {
  return (
    <div className='p-2 flex justify-between xl:container mx-auto'>

        <div className="left ">
            <input className='' type="text" placeholder='Search..' />
        </div>

        <div className="middle">
            Design
        </div>

        <div className="right flex space-x-4">
            <Link href={"/#"}><h1><ImFacebook /></h1></Link>
            <Link href={"/#"}><h1><FaInstagram /></h1></Link>
            <Link href={"/#"}><h1><ImTwitter /></h1></Link>
            
            {/* <h1><FaBeer /></h1> */}
        </div>
    </div>
  )
}

export default Header
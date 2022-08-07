import React from 'react'

import {  ImFacebook, ImTwitter,   } from  'react-icons/im';
import {FaInstagram} from 'react-icons/fa'
import Link from 'next/link';
import Newletter from './child/newletter';



function Footer() {
  return (
    <footer className='bg-gray-50  ' >

      <Newletter />

      <div className="container mx-auto flex justify-center py-12  "  >
        <div className="py-5">
          <div className="flex gap-6 justify-center ">
            <Link href={"/#"}><h1><ImFacebook /></h1></Link>
            <Link href={"/#"}><h1><FaInstagram /></h1></Link>
            <Link href={"/#"}><h1><ImTwitter /></h1></Link>
            
            {/* <h1><FaBeer /></h1> */}
          </div>
          <p className='py-5 text-gray-400 mx-2 text-center '> Copyright 2022 NO Rights Reserverd, Feel free to copy</p>
          <p className=' text-gray-400 text-center'> Terms and conditions not applied</p>
        </div>
      </div>
    </footer>


    
  )
}

export default Footer
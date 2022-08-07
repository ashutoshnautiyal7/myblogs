

import { ImFacebook, ImInstagram, ImLinkedin, ImReddit, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'
import Image from "next/image";
import Section5 from "./Section5";

export default function Header() {
  return (
    // <header className=" bg-black min-w-full text-white">
    //     <div className="lg:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            
    //         <div className="w-full  flex justify-center">
    //             <div className="flex gap-3 md:gap-6">
    //                 <Link href={"/"}><a><ImFacebook color="#ffffff" /></a></Link>
    //                 <Link href={"/"}><a><ImTwitter color="#ffffff" /></a></Link>                    
    //                 <Link href={"/"}><a><ImYoutube color="#ffffff" /></a></Link>
    //             </div>
    //         </div>
            
    //         <div className="hidden md:inline-block shrink w-80 sm:order-1 order-1">
    //             <Link href={"/"}>
    //                 <a className="font-medium uppercase text-3xl">Design</a>
    //             </Link>
    //         </div>
            
    //     </div>
    // </header>

    <header className= "bg text-black  ">

        <div className="container mx-auto justify-evenly flex flex-col items-center justify-center md:flex-row    ">

           

            <div className="center p-2 md:order-2 leading-relaxed">
                <div className="img  flex flex-col items-center justify-center text-center mt-8">
                    <Image src={"/images/bg.webp"} className="rounded-full  p-2 " width={100} height={100}></Image>
                    <h1 className="font-medium  mt-5  text-xl  md:text-2xl ">Akash</h1>
                    <h2 className="text-sm  md:text-lg leading-relaxed">Professional Writer and Personal blogger</h2>
                </div>
            </div>

            <div className="left p-2 order-1 ">
                <div className="flex gap-3 md:gap-6">
                    <Link href={"/"}><a><ImFacebook color="#3B5998"   /></a></Link>
                    <Link href={"/"}><a><ImTwitter color="#00acee "  /></a></Link>                    
                    <Link href={"/"}><a><ImYoutube color="#c4302b"   /></a></Link>
                </div>
            </div>

            <div className="right hidden md:block md:order-3">
                <div className="flex gap-3 md:gap-6">
                    <Link href={"/"}><a><ImReddit color="#c4302b"   /></a></Link>
                    <Link href={"/"}><a><ImInstagram color="#00acee "  /></a></Link>                    
                    <Link href={"/"}><a><ImLinkedin color="#3B5998"   /></a></Link>
                </div>
            </div>

        </div>
        
        <div className="container mx-auto mt-4">
            <hr/>
        </div>
{/*         
        <div className="container mx-auto  hidden lg:block  ">
            
            
                <div className="flex  justify-evenly w-2/3 mx-auto p-3  font-semibold">
                    

                        <ul>Home</ul>
                        <ul>Lifestyle</ul>
                        <ul>Inspiration</ul>
                        <ul>Pages</ul>
                        <ul>Contact</ul>
                    
                </div>


        </div> */}

        <Section5 />

        <div className="navbody container mx-auto my-24 p">
            <div className="flex flex-col items-center justify-center md:w-[55%] mx-auto text-white xl:text-black text-center p-1">
                <h1 className="fade-in-text font-medium text-2xl md:text-4xl p-1  md:p-3 my-3 animate-pulse translate-x-7">I'm Akash Dravid.</h1>
                <p className="p-2 sm:p-0 text-lg ">
                Hello, I’m a content writer who is fascinated by content fashion, celebrity and lifestyle. I helps clients bring the right content to the right people.
                </p>
                <button className="btn my-8 px-4 py-2 border-2 border-gray-200 rounded-full md:hover:bg-white md:hover:scale-110 duration-200 font-medium">
                    About me
                </button>
            </div>
        </div>



        <div className="relative -mt-12 lg:-mt-24">
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>


    </header>
  )
}
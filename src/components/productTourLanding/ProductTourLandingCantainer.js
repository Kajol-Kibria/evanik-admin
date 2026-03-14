'use client'
import React, { useState } from 'react'
import Image from '../../../node_modules/next/image'
import { IoCloseOutline } from "react-icons/io5";
import Link from '../../../node_modules/next/link';
export default function ProductTourLandingCantainer() {
    const [tour, setTour] = useState(false);
    const [toursection, setTourSection] = useState(1);
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 2xl:px-44 p-5 text-[#3a3b4c] relative'>
        <div className='flex flex-col items-center'>
            <p className='text-4xl sm:text-5xl font-bold mb-4 text-center'>Get Started with Evanik</p>
            <p className='font-medium'>Begin your journey with Evanik and discover how easy it is to streamline your business operations.</p>
            <p className='font-medium'>Let&apos;s get you set up in no time!</p>
            <button onClick={()=>setTour(!tour)} className='blueButton w-40 my-4'>Take a Tour</button>
        </div>
        <div className='sm:flex items-center gap-10 mt-5'>
            <div className='shd px-7 py-5 sm:px-12 sm:py-9 rounded-3xl sm:w-1/2 text-lg'>
                <p className='text-blue font-semibold mb-2'>Manage Your Sales, Inventory, and Returns</p>
                <p>Effortlessly handle your sales, keep track of inventory, and process returns with our intuitive tools. Stay organized and in control.</p>
                <div className=''>
                <Image className='mt-5 w-full 2xl:w-[80%] mx-auto object-contain' src='/images/img-product-tour-left.jpg' alt='a' width={387} height={387}/>
                </div>
            </div>
            <div className='shd px-7 py-5 sm:px-12 sm:py-9 rounded-3xl sm:w-1/2  text-lg my-8 sm:my-0'>
                <p className='text-blue font-semibold mb-2'>Manage Your Sales, Inventory, and Returns</p>
                <p>Effortlessly handle your sales, keep track of inventory, and process returns with our intuitive tools. Stay organized and in control.</p>
                <div className=''>
                <Image className='mt-5 w-full 2xl:w-[80%] mx-auto object-contain' src='/images/img-product-tour-right.png' alt='a' width={387} height={387}/>
                </div>
            </div>
        </div>
        <div onClick={()=>{setTour(!tour); setTourSection(1)}} className={`${tour?'z-50':'-z-50'} bg-[#07092087] fixed w-screen h-screen top-[72px] right-0 left-[66.63] bottom-0`}>
        </div>
        <div className={`${tour?'block':'hidden'}`}>
        <div className={`w-[300px] fixed top-[88px] ${toursection===1?'right-[245px]':'' || toursection===2?'right-[195px]':'' || toursection===3?'right-[142px]':'' || toursection===4?'right-[92px]':'' || toursection==5?'right-[40px]':'' || toursection===6?'top-[195px] left-[80px]':''} transition-all duration-300 bg-white z-50 p-5 rounded-lg`}>
            <div className={`${toursection == 6 ?'top-7 -left-1':'-top-1 right-7'} absolute w-5 h-5 bg-white rotate-45`}></div>
            <div className='flex justify-end px-[6px]'>
            <button className='text-gray-500 hover:text-black transition-all duration-300' onClick={()=>{setTour(!tour); setTourSection(1)}}><IoCloseOutline size={25}/></button>
            </div>        
        {/* change acording toursection state */}
            <div>
            <p className={`${toursection==1?'block':'hidden'}`}>Get quick resolutions to your queries with our AI chatbot, ask eVa.</p>
            <p className={`${toursection==2?'block':'hidden'}`}>Click here to instantly sync your product listings, orders, inventory, and customer data across all sales channels in real-time.</p>
            <p className={`${toursection==3?'block':'hidden'}`}>Personalize your profile, branches, channels, products, reconciliation, and account settings all in one place.</p>
            <div className={`${toursection==4?'block':'hidden'}`}>
                <p className='mb-4'>Need Help?</p>
                <p>Explore all our resources by clicking here.</p>
            </div>
            <div className={`${toursection==5?'block':'hidden'}`}>
                <p className='mb-4'>Stay Informed</p>
                <p>Access all your notifications, alerts, and warnings right here.</p>
            </div>
            <p className={`${toursection==6?'block':'hidden'}`}>Get quick resolutions to your queries with our AI chatbot, ask eVa.</p>
            <div className='flex items-center justify-between mt-4'>
                <p>{toursection}/6</p>
                <div className='flex gap-4'>
                <div className={`${toursection > 1?'block':'hidden'}`}>
                <button onClick={()=>setTourSection(toursection - 1)} className={` buttonBlue w-20`}>Back</button>
                </div>
                <div className={`${toursection < 6?'block':'hidden'}`}>
                <button onClick={()=>setTourSection(toursection + 1)} className='blueButton w-20'>Next</button>
                </div>
                <div className={`${toursection === 6?'block':'hidden'}`}>
                <Link href='/dashboard' onClick={()=>{setTour(!tour); setTourSection(1)}} className='blueButton w-20 text-center'>Okay</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

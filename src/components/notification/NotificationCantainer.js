'use client'
import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import Image from '../../../node_modules/next/image';
import { RiFilePdfLine } from "react-icons/ri";


export default function NotificationCantainer(props) {
    const [more, setMore] = useState(false);
    const dataArray = [
        {
            ID:1,
            Title:'Return Incomplete For Amazon',
            Action:'',
        },
        {
            ID:2,
            Title:'Unpaid Orders For Amazon',
            Action:'',
        },
        {
            ID:3,
            Title:'Return Not Received For Flipkart',
            Action:'',
        },
    ];
  return (
    <div className='shd p-5 rounded-lg absolute z-[60] w-[500px] top-14 right-12 bg-white'>
        <div className='flex items-center justify-between'>
            <p className='text-blue font-semibold text-lg'>Notification</p>
            <button className='text-gray-500 hover:text-black transition-all duration-300' onClick={()=>props.setState(!props.state)}><IoCloseOutline size={25}/></button>
        </div>
        <div className='space-y-3  my-2  text-gray-700'>
           {dataArray.map((data)=>(
            <div key={data.ID} className='flex items-center justify-between '>
                <div className='flex items-center gap-2 '>
                    <div className='p-2.5 border border-[#f3eaaf] rounded-full bg-[#FBF8E4] text-[#7e7224]'>
                       <RiFilePdfLine size={16}/>
                    </div>
                    <p className='font-medium'>{data.Title}</p>
                </div>
                <button className='text-sm hover:text-blue hover:bg-blue/10 hover:border-blue transition-all duration-300 font-semibold px-3 py-2 border rounded-xl '>Action</button>
            </div>
           ))}
        </div>
        <div>
            <button className='flex items-center gap-2 justify-center text-blue font-semibold w-full text-center py-3'>
                <FaArrowDown size={14}/>
                Load more...
            </button>
        </div>
    </div>
  )
}

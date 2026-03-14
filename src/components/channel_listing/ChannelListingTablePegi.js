'use client'
import { getdata ,getLength } from '@/alldatafiles/channelListingdata';
import React, { useState } from 'react'
import Image from 'next/image'
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RiLinkM } from "react-icons/ri";
import CustomSlideCheck from '../common/CustomSlideCheck'
import Pagination from '../common/Pagination';

export default function ChannelListingTablePegi() {
  
    const [limit, setLimit] = useState(7);
    const [page, setPage] = useState(1);
    let totalPage = Math.ceil(getLength() / limit);
    function handlePageChange(value) {
      if (value === "Previous") {
        if (page !== 1) {
          setPage(page - 1);
        }
      } else if (value === "Next") {
        if (page !== totalPage) {
          setPage(page + 1);
        }
      }
    }
    const dataArray = getdata(page, limit);
  return (
    <div>
      <div className='sm:h-[422px] w-full  mx-auto overflow-auto my-5'>
        <table className="w-[1200px] sm:w-full">
              <thead>  
                  <tr className=' text-[13px]  text-left font-semibold   text-gray-500'>
                      <th><h1>Channel</h1></th>
                      <th><h1>M/P SKU</h1></th>
                      <th><h1>Listing Name</h1></th>
                      <th><h1>Master Sku</h1></th>
                      <th><h1>Combo?</h1></th>
                      <th><h1>Mapped?</h1></th>
                      <th><h1>Action</h1></th>
                  </tr>
                      
              </thead>
              <tbody>
                  {dataArray.map((data, i)=>(
                  <tr key={i} className='max-h-[54px] h-[54px] border-t text-sm text-black'>
                      <td>
                        <p className='w-9 h-9 flex items-center justify-center border rounded-lg text-gray-800 font-medium'>{data.channel}</p>
                      </td>
                      <td>
                        {data.mpsku}
                      </td>
                      <td className='max-w-[10vw]'>
                        <div className='flex items-center gap-2 py-2'>
                          <Image className='border rounded-lg w-9 h-9' src={data.listingImage} alt='' width={40} height={40}/>
                          <p className='text-sm font-semibold'>{data.listingName}</p>
                        </div>
                      </td>
                      <td>{data.mastersku}</td>
                      <td>
                        <div className='flex'>
                          <CustomSlideCheck/>
                          </div>
                      </td>
                      <td>
                          <p className='text-green'><FaCheck size={20}/></p>
                          <p className='text-red-500 hidden'><IoClose size={22}/></p>
                      </td>
                      <td>
                        <div className=' text-blue flex items-center gap-3'>
                        <RiLinkM size={21}/>
                      </div>
                      </td>
                  </tr>
                  ))}
              </tbody>
             </table>
        </div>
        <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}

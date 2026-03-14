'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import Image from 'next/image'



export default function FBATable(props) {
    
    
  return (
    <div>
        <div><div className='sm:h-[422px] w-full  mx-auto overflow-auto my-5'>
    <table   className="  w-[1200px] sm:w-full">
          <thead className=''>
                   
              <tr className=' text-[14px]  text-left font-semibold   text-gray-500'>
                  
                  <th ><h1 className=''>Status</h1></th>
                  <th ><h1 className=''>SKU</h1></th>
                  <th ><h1 className=''>Description</h1></th>
                  <th ><h1 className=''>Available</h1></th>
                  <th ><h1 className=''>Inbound</h1></th>
                  <th ><h1 className=''>Unfulfillable</h1></th>
                  <th ><h1 className=''>Reserved</h1></th>
              </tr>
                  
          </thead>
          <tbody>
              {props.dataArray.map(data=>(

              <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={data.ID}>
                  
                  <td className='text-xs font-semibold text-gray-700'>{data.Status}</td>
                  <td className='w-40 pr-3'>{data.SKU}</td>
                  <td className=''>
                    <div className='flex items-start gap-2 py-2'>
                    <Image className='border rounded-lg' src={data.ProductImage} alt='' width={34} height={34}/>
                    <div>
                      <p className='text-black font-semibold'>{data.Product}</p>
                      <p className='text-xs text-gray-700'>{data.ProductDes}</p>
                    </div>
                    </div>
                  </td>
                  <td>
                    {data.Available}
                  </td> 
                  <td>
                    {data.Inbound}
                  </td> 
                  <td>
                    {data.Unfulfillable}
                  </td> 
                  <td>
                    {data.Reserved}
                  </td> 
                  
              </tr>
              ))}
          </tbody>
         </table>
    </div></div>
    </div>
  )
}

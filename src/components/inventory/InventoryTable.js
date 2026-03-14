'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import Image from 'next/image'
import DropButton from '../common/DropButton'
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import IconButton from '../common/IconButton'
import { BsThreeDots } from 'react-icons/bs'
import { RiLinkM } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";
import { RiPencilLine } from "react-icons/ri";
import CustomSlideCheck from '../common/CustomSlideCheck'



export default function InventoryTable(props) {
    
      const [value1, setValue1] = useState("Clothing");
      const [value2, setValue2] = useState("02");
    
  return (
    <div>
        <div><div className='sm:h-[422px] w-full  mx-auto overflow-auto my-5'>
    <table className="w-[1200px] sm:w-full">
          <thead>  
              <tr className=' text-[13px]  text-left font-semibold   text-gray-500'>
                  <th ><h1>SKU</h1></th>
                  <th ><h1>Product Info</h1></th>
                  <th ><h1>Categrory</h1></th>
                  <th ><h1>Current Stock</h1></th>
                  <th ><h1>Available Stock</h1></th>
                  <th ><h1>Combo</h1></th>
                  <th ><h1></h1></th>
                  <th ><h1></h1></th>
                  <th ><h1>Action</h1></th>
              </tr>
                  
          </thead>
          <tbody>
              {props.dataArray.map((data, i)=>(
              <tr key={i} className='max-h-[54px] h-[54px] border-t text-sm text-black'>
                  <td>{data.SKU}</td>
                  <td>
                    <p className='text-black font-semibold'>{data.ProductName}</p>
                    <p className='text-sm  text-gray-700'>{data.Category}</p>
                  </td>
                  <td>
                   <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter"]}/>
                  </td>
                  <td>{data.InStock}</td>
                  <td>{data.Available}</td>
                  
                  <td>
                      <p className='text-green'><FaCheck size={20}/></p>
                      <p className='text-red-500 hidden'><IoClose size={22}/></p>
                  </td>
                  <td>
                   <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter"]}/>
                  </td>
                  <td>
                    <div>
                    <CustomSlideCheck/>
                    </div>
                  </td>
                  <td >
                    <div className=' text-blue flex items-center gap-3'>
                    <RiLinkM size={21}/>
                    <HiOutlineEye size={21}/>
                    <RiPencilLine size={21}/>
                    <IconButton svg={<BsThreeDots/>} items={["This week", "This Month", "This Quarter"]}/>
                    </div>
                  </td>
              </tr>
              ))}
          </tbody>
         </table>
    </div></div>
    </div>
  )
}

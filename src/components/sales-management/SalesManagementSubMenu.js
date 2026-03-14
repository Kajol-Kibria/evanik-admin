'use client'
import React, { useState } from 'react'

import { IoIosArrowForward } from "react-icons/io";
import PurchaseOrder from '../product-managment/PurchaseOrder';
import PurchaseList from '../product-managment/PurchaseList';
import GoodsReceiptNote from '../product-managment/GoodsReceiptNote';

export default function SalesManagementSubMenu() {
    const [subpage,setSubpage] = useState('Sale Order')
  return (
    <div>
        <div>
                <div className='sm:flex items-start  gap-8'>
                <div className='bg-white  sm:w-[28%] w-full my-4 sm:my-0'>
                <div className=''>
        
                  <div onClick={()=>setSubpage('Sale Order')} className={`${subpage ==='Sale Order'?'bg-blue text-white border border-blue':'bg-white border text-black'} px-6 py-5 rounded-t-md cursor-pointer`}>
                    <div className='flex items-center justify-between font-medium'>
                      <p>Sale Order</p>
                      <IoIosArrowForward/>
                    </div>
                    <p className='text-sm mt-2 hidden 2xl:block'>Every section filled, every detail</p>
                  </div>
                  <div onClick={()=>setSubpage('Sale List')} className={`${subpage ==='Sale List'?'bg-blue text-white border border-blue':'bg-white border-x text-black'} px-6 py-5  cursor-pointer`}>
                  <div className='flex items-center justify-between font-medium'>
                    <p>Sale List</p>
                    <IoIosArrowForward/>
                  </div>
                  <p className='text-sm mt-2  hidden 2xl:block'>Every section filled, every detail</p>
                </div>
                <div onClick={()=>setSubpage('Challan')} className={`${subpage ==='Challan'?'bg-blue text-white border border-blue':'bg-white border text-black'} px-6 py-5  rounded-b-md cursor-pointer`}>
                    <div className='flex items-center justify-between font-medium'>
                      <p>Challan</p>
                      <IoIosArrowForward/>
                    </div>
                    <p className='text-sm mt-2  hidden 2xl:block'>Every section filled, every detail</p>
                  </div>
                </div>
                </div>
        
                {/* show based on state */}
                <div className='sm:w-[70%]'>
                  <div  className={`${subpage === "Sale Order"? 'block':'hidden'}`}>
                             <PurchaseOrder/>
                            </div>
                    
                            <div className={`${subpage === "Sale List"? 'block':'hidden'}`}>
                              <PurchaseList/>
                            </div>
        
                            <div className={`${subpage === "Challan"? 'block':'hidden'}`}>
                            <GoodsReceiptNote/>
                            </div>
                </div>
              </div>
            </div>
    </div>
  )
}

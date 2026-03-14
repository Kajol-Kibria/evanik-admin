'use client'
import React, { useState } from 'react'

import { IoIosArrowForward } from "react-icons/io";
import PurchaseOrder from './PurchaseOrder';
import PurchaseList from './PurchaseList';
import GoodsReceiptNote from './GoodsReceiptNote';
import UploadPurchaseOrder from './UploadPurchaseOrder';

export default function ProductManagmentSubMenu() {

const [subpage,setSubpage] = useState('Purchase Order')

  return (
    <div>
        <div className='sm:flex items-start justify-between gap-8'>
        <div className=' sm:w-[28%] w-full my-4 sm:my-0'>
        <div>
          <div onClick={()=>setSubpage('Purchase Order')} className={`${subpage ==='Purchase Order'?'bg-blue text-white border-blue':'bg-white text-black'}  border px-6 py-5 rounded-t-md cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Purchase Order</p>
              <IoIosArrowForward/>
            </div>
            <p className='text-sm mt-2 hidden 2xl:block'>Official document for supplier transaction management</p>
          </div>
          <div onClick={()=>setSubpage('Purchase List')} className={`${subpage ==='Purchase List'?'bg-blue text-white  border-blue':'bg-white  text-black'} border-b border-x px-6 py-5  cursor-pointer`}>
          <div className='flex items-center justify-between font-medium'>
            <p>Purchase List</p>
            <IoIosArrowForward/>
          </div>
          <p className='text-sm mt-2  hidden 2xl:block'>Comprehensive record of Purchases from Suppliers</p>
        </div>
        <div onClick={()=>setSubpage('Goods Receipt Note')} className={`${subpage ==='Goods Receipt Note'?'bg-blue text-white border-blue':'bg-white text-black'} border-x px-6 py-5 cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Goods Receipt Note</p>
              <IoIosArrowForward/>
            </div>
            <p className='text-sm mt-2  hidden 2xl:block'>Document verifying receipt of goods</p>
          </div>
        <div onClick={()=>setSubpage('Upload Purchase Order')} className={`${subpage ==='Upload Purchase Order'?'bg-blue text-white border-blue':'bg-white text-black'}  border px-6 py-5  rounded-b-md cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Upload Purchase Order</p>
              <IoIosArrowForward/>
            </div>
            <p className='text-sm mt-2  hidden 2xl:block'>Upload Purchase Order</p>
          </div>
        </div>
        </div>

        {/* show based on state */}
        <div className='sm:w-[70%]'>
          <div  className={`${subpage === "Purchase Order"? 'block':'hidden'}`}>
                     <PurchaseOrder/>
                    </div>
            
                    <div className={`${subpage === "Purchase List"? 'block':'hidden'}`}>
                      <PurchaseList/>
                    </div>

                    <div className={`${subpage === "Goods Receipt Note"? 'block':'hidden'}`}>
                    <GoodsReceiptNote/>
                    </div>
                    <div className={`${subpage === "Upload Purchase Order"? 'block':'hidden'}`}>
                    <UploadPurchaseOrder/>
                    </div>
        </div>
      </div>
    </div>
  )
}

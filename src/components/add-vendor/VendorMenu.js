'use client'
import React, { useState } from 'react'

import OrderDetailsVendor from './OrderDetailsVendor'
import AddressVendor from './AddressVendor'
import ContactVendor from './ContactVendor'
import BankDetailsVendor from './BankDetailsVendor'
import CustomFieldsVendor from './CustomFieldsVendor'
import RemarksVendor from './RemarksVendor'
import { IoIosArrowForward } from 'react-icons/io'
export default function VendorMenu() {
    const [subpage,setSubpage] = useState('Other Details')
  return (
    <div>
        <div className='sm:flex items-start  gap-8'>
        <div className='2xl:w-[22%] sm:w-[33%] w-full  my-4 sm:my-0'>
        <div className='grid grid-cols-2 sm:grid-cols-1 border sm:border-none'>

          <div onClick={()=>setSubpage('Other Details')} className={`${subpage ==='Other Details'?'bg-blue text-white sm:border border-blue':'bg-white sm:border text-black'} border-b px-6 py-5 sm:rounded-t-md cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Other Details</p>
              <IoIosArrowForward className="hidden sm:block"/>
            </div>
            <p className='text-sm mt-2 hidden sm:block '>Every section filled, every detail</p>
          </div>
          <div onClick={()=>setSubpage('Address')} className={`${subpage ==='Address'?'bg-blue text-white sm:border-x border-b border-blue':'bg-white border-b sm:border-x text-black'} px-6 py-5  cursor-pointer`}>
          <div className='flex items-center justify-between font-medium'>
            <p>Address</p>
            <IoIosArrowForward className="hidden sm:block"/>
          </div>
          <p className='text-sm mt-2 hidden sm:block '>Every section filled, every detail</p>
        </div>
        <div onClick={()=>setSubpage('Contact Persons')} className={`${subpage ==='Contact Persons'?'bg-blue text-white border-b sm:border-x border-blue':'bg-white border-b sm:border-x text-black'} px-6 py-5  cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Contact Persons</p>
              <IoIosArrowForward className="hidden sm:block"/>
            </div>
            <p className='text-sm mt-2 hidden sm:block '>Every section filled, every detail</p>
          </div>
        <div onClick={()=>setSubpage('Bank Details')} className={`${subpage ==='Bank Details'?'bg-blue text-white border-b sm:border-x border-blue':'bg-white sm:border-x border-b text-black'} px-6 py-5  cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Bank Details</p>
              <IoIosArrowForward className="hidden sm:block"/>
            </div>
            <p className='text-sm mt-2 hidden sm:block '>Every section filled, every detail</p>
          </div>
        <div onClick={()=>setSubpage('Custom fields')} className={`${subpage ==='Custom fields'?'bg-blue text-white sm:border-x border-blue':'bg-white sm:border-x text-black'} px-6 py-5 cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Custom fields</p>
              <IoIosArrowForward className="hidden sm:block"/>
            </div>
            <p className='text-sm mt-2 hidden sm:block '>Every section filled, every detail</p>
          </div>
        <div onClick={()=>setSubpage('Remarks')} className={`${subpage ==='Remarks'?'bg-blue text-white sm:border border-blue':'bg-white sm:border text-black'} px-6 py-5  sm:rounded-b-md cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Remarks</p>
              <IoIosArrowForward className="hidden sm:block"/>
            </div>
            <p className='text-sm mt-2 hidden sm:block '>Every section filled, every detail</p>
          </div>
        </div>
        </div>

        {/* show based on state */}
        <div className='w-full'>
          <div  className={`${subpage === "Other Details"? 'block':'hidden'}`}>
                     <OrderDetailsVendor/>
                    </div>
            
                    <div className={`${subpage === "Address"? 'block':'hidden'}`}>
                      <AddressVendor/>
                    </div>

                    <div className={`${subpage === "Contact Persons"? 'block':'hidden'}`}>
                    <ContactVendor/>
                    </div>

                    <div className={`${subpage === "Bank Details"? 'block':'hidden'}`}>
                    <BankDetailsVendor/>
                    </div>

                    <div className={`${subpage === "Custom fields"? 'block':'hidden'}`}>
                    <CustomFieldsVendor/>
                    </div>

                    <div className={`${subpage === "Remarks"? 'block':'hidden'}`}>
                    <RemarksVendor/>
                    </div>
        </div>
      </div>
    </div>
  )
}

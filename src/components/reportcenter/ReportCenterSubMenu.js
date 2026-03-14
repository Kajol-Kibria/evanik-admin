'use client'
import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { RiExchangeLine } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineReconciliation } from "react-icons/ai";
import { BiCalculator } from "react-icons/bi";
import { TbBuildingCommunity } from "react-icons/tb";
import { RiBookMarkedLine } from "react-icons/ri";
import ReportTable from './ReportTable';
import { financial, inventory, otherReports, payments, reconciliation, sales, warehouse } from '@/alldatafiles/reportsdata';

export default function ReportCenterSubMenu() {
  
      const [subpage,setSubpage] = useState(1)
      
  return (
    <div>
      <div className='flex items-center justify-between my-4'>
             <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Reports Center</p>
              <div className='sm:flex items-center mt-4 sm:mt-0 sm:mr-4'>
                              <input className='pl-5 pr-14 sm:w-[500px] w-full border-2 border-blue/20 outline-none placeholder:text-gray-600 focus:placeholder-transparent placeholder:text-sm py-3 rounded-lg' placeholder='Search Reports'/>
                              <button className='text-gray-600 -ml-10'><IoIosSearch size={22}/></button>
              </div>
     </div>
                <div>
                <p className='text-blue font-semibold my-4'>Report Category</p>
                <div className='sm:flex gap-8'>
                                <div className='sm:w-[28%] my-4 sm:my-0 rounded-md shd h-[100%]'>
                                <div onClick={()=>setSubpage(1)} className={` ${subpage ===1?'bg-blue text-white  border-blue':'bg-white  text-gray-900'} border-b rounded-t-md px-6 py-5  cursor-pointer`}>
                                  <div>
                                    <div className='flex items-center gap-3 font-medium'>
                                      <RiExchangeLine className={`${subpage === 1? 'text-white':'text-blue'}`} size={22}/>
                                      <p className='text-[16px]'>Sales & Returns</p>
                                    </div>
                                    <p className={`${subpage ===1?'text-white':'text-gray-600 '} text-xs font-medium hidden sm:block pt-4`}>Sales, Returns and Business Reports</p>
                                  </div>     
                                </div>
                                <div onClick={()=>setSubpage(2)} className={`${subpage ===2?'bg-blue text-white  border-blue':'bg-white  text-gray-900'} border-b px-6 py-5  cursor-pointer`}>
                                  <div >
                                    <div className='flex items-center gap-3 font-medium'>
                                      <RiSecurePaymentLine className={`${subpage === 2? 'text-white':'text-blue'}`} size={22}/>
                                      <p className='text-[16px]'>Payments</p>
                                    </div>
                                    <p className={`${subpage ===2?'text-white':'text-gray-600 '} text-xs font-medium hidden sm:block pt-4`}>Settlements and Transactional</p>
                                  </div>     
                                </div>
                                <div onClick={()=>setSubpage(3)} className={` ${subpage ===3?'bg-blue text-white  border-blue':'bg-white  text-gray-900'} border-b px-6 py-5  cursor-pointer`}>
                                  <div>
                                    <div className='flex items-center gap-3 font-medium'>
                                      <RiShoppingCartLine className={`${subpage === 3? 'text-white':'text-blue'}`} size={22}/>
                                      <p className='text-[16px]'>Inventory</p>
                                    </div>
                                    <p className={`${subpage ===3?'text-white':'text-gray-600 '} text-xs font-medium hidden sm:block pt-4`}>Product and Inventory</p>
                                  </div>     
                                </div>
                                <div onClick={()=>setSubpage(4)} className={`${subpage ===4?'bg-blue text-white  border-blue':'bg-white  text-gray-900'}  border-b  px-6 py-5  cursor-pointer`}>
                                  <div >
                                    <div className='flex items-center gap-3 font-medium'>
                                      <AiOutlineReconciliation className={`${subpage === 4? 'text-white':'text-blue'}`} size={22}/>
                                      <p className='text-[16px]'>Reconciliation</p>
                                    </div>
                                    <p className={`${subpage ===4?'text-white':'text-gray-600 '} text-xs font-medium hidden sm:block pt-4`}>Reconciliation and Claims</p>
                                  </div>     
                                </div>
                                <div  onClick={()=>setSubpage(5)} className={`${subpage ===5?'bg-blue text-white  border-blue':'bg-white  text-gray-900'} border-b   px-6 py-5  cursor-pointer`}>
                                  <div>
                                    <div className='flex items-center gap-3 font-medium'>
                                      <BiCalculator className={`${subpage === 5? 'text-white':'text-blue'}`} size={22}/>
                                      <p className='text-[16px]'>Financial</p>
                                    </div>
                                    <p className={`${subpage ===5?'text-white':'text-gray-600 '} text-xs font-medium hidden sm:block pt-4`}>Accounting and Financial</p>
                                  </div>     
                                </div>
                                <div onClick={()=>setSubpage(6)} className={`${subpage ===6?'bg-blue text-white  border-blue':'bg-white  text-gray-900'}  border-b  px-6 py-5  cursor-pointer`}>
                                  <div >
                                    <div className='flex items-center gap-3 font-medium'>
                                      <TbBuildingCommunity className={`${subpage === 6? 'text-white':'text-blue'}`} size={22}/>
                                      <p className='text-[16px]'>Warehouse</p>
                                    </div>
                                    <p className={`${subpage ===6?'text-white':'text-gray-600 '} text-xs font-medium hidden sm:block pt-4`}>Warehouse Management Reports</p>
                                  </div>     
                                </div>
                                <div onClick={()=>setSubpage(7)} className={`${subpage ===7?'bg-blue text-white  border-blue':'bg-white  text-gray-900'} rounded-b-md  px-6 py-5 cursor-pointer`}>
                                  <div>
                                    <div className='flex items-center gap-2 font-medium'>
                                      <RiBookMarkedLine className={`${subpage === 7? 'text-white':'text-blue'}`} size={22}/>
                                      <p className='text-[16px]'>Other Reports</p>
                                    </div>
                                      <p className={`${subpage ===7?'text-white':'text-gray-600 '} text-xs font-medium hidden sm:block pt-4`}>All other Reports</p>
                                  </div>     
                                </div>
                                </div>
                                {/* show based on state */}
                              <div className='sm:w-[70%] bg-white p-7 shd rounded-md '>
                                            <div  className={`${subpage === 1? 'block':'hidden'}`}>
                                              <p className='text-blue font-semibold mb-4'>Sales & Returns</p> 
                                              <ReportTable dataArray={sales}/>  
                                            </div>
                                            <div className={`${subpage === 2? 'block':'hidden'}`}>
                                              <p className='text-blue font-semibold mb-4'>Payments</p>
                                              <ReportTable dataArray={payments}/>
                                            </div>
                                            <div className={`${subpage ===3? 'block':'hidden'}`}>
                                              <p className='text-blue font-semibold mb-4'>Inventory</p>
                                              <ReportTable dataArray={inventory}/>
                                            </div>
                                            <div className={`${subpage === 4? 'block':'hidden'}`}>
                                              <p className='text-blue font-semibold mb-4'>Reconciliation</p>
                                              <ReportTable dataArray={reconciliation}/>
                                            </div>
                                            <div className={`${subpage === 5? 'block':'hidden'}`}>
                                              <p className='text-blue font-semibold mb-4'>Financial</p>
                                              <ReportTable dataArray={financial}/>
                                            </div>
                                            <div className={`${subpage === 6? 'block':'hidden'}`}>
                                              <p className='text-blue font-semibold mb-4'>Warehouse</p>
                                              <ReportTable dataArray={warehouse}/>
                                            </div>
                                            <div className={`${subpage === 7? 'block':'hidden'}`}>
                                              <p className='text-blue font-semibold mb-4'>Other Reports</p>
                                              <ReportTable dataArray={otherReports}/>
                                            </div>
                              </div>
                    </div>
            </div>
    </div>
  )
}

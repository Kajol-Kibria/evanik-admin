'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Pagination from '../common/Pagination';
import { MdArrowDropDown } from 'react-icons/md';

import { getpendingdata, getPendinglength } from '../../alldatafiles/pendingdata';
import { getPicklistlength, getpPicklistdata } from '../../alldatafiles/picklistdata';

export default function InProgress() {

 const [pendinglimit, setPendinglimit] = useState(5);
          const [pendingpage, setPendingpage] = useState(1);
           let pendingTotalPage = Math.ceil(getPendinglength()/pendinglimit);
           function handlependingPageChange(value){
            if (value === 'Previous') {
              if (pendingpage !== 1) {
                setPendingpage(pendingpage - 1);
              }
            } else if (value === 'Next') {
              if (pendingpage !== pendingTotalPage) {
                setPendingpage(pendingpage + 1);
              }
            }
            
          }
           const [picklistlimit, setPicklistlimit] = useState(5);
                 const [picklistpage, setPicklistpage] = useState(1);
                  let picklistTotalPage = Math.ceil(getPicklistlength()/picklistlimit);
                  function handlepicklistPageChange(value){
                    if (value === 'Previous') {
                      if (picklistpage !== 1) {
                        setPicklistpage(picklistpage - 1);
                      }
                    } else if (value === 'Next') {
                      if (picklistpage !== picklistTotalPage) {
                        setPicklistpage(picklistpage + 1);
                      }
                    }
                    
                  }


          const pendingdata = getpendingdata(pendingpage, pendinglimit);
          const picklistdata = getpPicklistdata(picklistpage, picklistlimit);
          const [subprogress, setSubprogress] = useState('Pending to Process')
          

  return (
    <div>
         <div className='sm:flex items-center justify-between'>
            <div className='flex items-center  w-fit'>
                    <div onClick={()=>{setSubprogress('Pending to Process')}} className={`${subprogress === 'Pending to Process' ? 'text-blue border-blue':'text-gray-800'} border-b-2 text-[15px]   cursor-pointer w-36 text-center py-2   `}>Pending to Process</div>
                    <div onClick={()=>{setSubprogress('Picklist Pending')}}  className={`${subprogress === 'Picklist Pending' ? 'text-blue border-blue':'text-gray-800'} border-b-2 text-[15px]  cursor-pointer w-36 text-center py-2 `}>Picklist Pending</div>
                </div>
                <div>
                <div className=' font-medium text-gray-600 py-[10px]'>Total orders - <span className='text-blue'>57</span></div>
                </div>
            </div>
            <div>
            <div className={`${subprogress === "Pending to Process"? 'block':'hidden'}`}>
              <div className=' w-full  mx-auto overflow-auto my-5'>
                <table className="  w-[1200px] sm:w-full">
                  <thead>
                    <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                      <th className='p-3'><input type='checkbox'/></th>
                      <th className='py-3'>Batch Details</th>
                      <th>Item Qty</th>
                      <th>Order Qty</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingdata.map((data, i)=>(

                    <tr key={i} className='bg-[#f3f4fb]/70 border-y ' >
                      <td className='px-3 py-2'><input type='checkbox'/></td>
                      <td >
                        <div className='flex items-center gap-4'>
                        <div className='mt-1'>
                        <div  className='w-9 h-9 content-center text-center rounded-lg border'>{data.logo}</div>
                        </div>
                        <div>
                        <div className='flex items-center gap-1 text-xs text-gray-700'>Batch ID:<p className='text-black text-sm'>{data.BatchID}</p></div>
                        <div className='flex items-center gap-1 text-xs text-gray-700'>Create Date:<p className='text-black text-sm'>{data.CreateDate}</p></div>
                        </div>
                        </div>
                      </td>
                      <td>{data.ItemQty}</td>
                      <td>{data.OrderQty}</td>
                      
                      <td className='w-1/4 py-2'>
                        <div className='grid gap-2'>
                        <button className="w-fit py-2 sm:px-3 hover:bg-[#5356f7] rounded-xl border  bg-blue text-white transition-all duration-300 font-semibold ">
                        Pick inventory
                        </button>
                        <button className=" w-fit py-2 sm:px-3 hover:bg-[#5356f7] rounded-xl border  bg-blue text-white transition-all duration-300 font-semibold ">
                        Process Without Inventory
                        </button>
                        <div className='flex items-center gap-4 mt-2'>
                          <button>
                          <div className='w-9 h-9 flex items-center justify-center border rounded-full'>
                          <svg width="14" height="16" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M15 4.5H20V6.5H18V19.5C18 19.7652 17.8946 20.0196 17.7071 20.2071C17.5196 20.3946 17.2652 20.5 17 20.5H3C2.73478 20.5 2.48043 20.3946 2.29289 20.2071C2.10536 20.0196 2 19.7652 2 19.5V6.5H0V4.5H5V1.5C5 1.23478 5.10536 0.98043 5.29289 0.792893C5.48043 0.605357 5.73478 0.5 6 0.5H14C14.2652 0.5 14.5196 0.605357 14.7071 0.792893C14.8946 0.98043 15 1.23478 15 1.5V4.5ZM16 6.5H4V18.5H16V6.5ZM7 2.5V4.5H13V2.5H7Z" fill="#FD4539"></path>
                          </svg>
                          </div>
                          </button>
                          <button>
                          <div className='w-10 h-10 flex items-center justify-center border rounded-full'>
                        <svg width="18" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.20244 10.4268L3.94585 11.4359L10.4999 16.7002L17.0539 11.4367L15.7973 10.4276L11.3888 13.968V4.74537H9.61085V13.9674L5.20244 10.4268ZM18.4997 4.03139V2.1281L2.50011 2.12733V4.03062L0.722168 4.03139V0.700195H20.2777V4.03139H18.4997Z" fill="#68698A"></path>
                        </svg>
                        </div>
                          </button>
                        </div>
                        </div>

                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination currentPage={pendingpage} totalPage = {pendingTotalPage} onPageChange={handlependingPageChange}/>
            </div>
            <div className={`${subprogress === "Picklist Pending"? 'block':'hidden'}`}>
            <div className=' w-full  overflow-auto mx-auto  my-5'>
                <table className="  w-[1200px] sm:w-full">
                  <thead>
                    <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                      <th className='p-3'><input type='checkbox'/></th>
                      <th className='py-3'>Picklist Details</th>
                      <th>Item Qty Required</th>
                      <th>Item Qty Picked</th>
                      <th>Item Qty Pending</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {picklistdata.map((data, i)=>(

                    <tr className='bg-[#fff7f5]/70 border-y ' key={i}>
                      <td className='px-3 py-2'><input type='checkbox'/></td>
                      <td >
                        <div className='flex items-center gap-4'>
                        <div className='mt-1'><div  className='w-9 h-9 content-center text-center rounded-lg border'>{data.logo}</div></div>
                        <div>
                        <div className='flex items-center gap-1 text-xs text-gray-700'>Picklist ID:<p className='text-black text-sm'>{data.PicklistID}</p></div>
                        <div className='flex items-center gap-1 text-xs text-gray-700'>Create Date:<p className='text-black text-sm'>{data.CreateDate}</p></div>
                        </div>
                        </div>
                      </td>
                      <td>{data.ItemQtyRequired}</td>
                      <td>{data.ItemQtyPicked}</td>
                      <td className='text-red-500'>{data.ItemQtyPending}</td>
                      <td className='px-3 py-2'>
                        <div className='text-[#1f674f] text-xs font-semibold flex items-center gap-3 mb-2'>
                        <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="42" height="42" rx="21" fill="#C8E3DA"></rect>
                            <path d="M19.5153 23.2281L25.9497 16.793L26.9402 17.7828L19.5153 25.2077L15.0605 20.7529L16.0503 19.7631L19.5153 23.2281Z" fill="#1F674F"></path>
                          </svg>
                          Pick inventory</div>
                      <button className="w-full py-2 sm:px-3 hover:bg-[#5356f7] rounded-xl border  bg-blue text-white transition-all duration-300 font-semibold ">
                        Update Picklist
                        </button>
                        <div className='flex items-center gap-4 mt-2'>
                          
                          <button>
                          <div className='w-9 h-9 flex items-center justify-center border rounded-full'>
                          <svg width="14" height="16" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M15 4.5H20V6.5H18V19.5C18 19.7652 17.8946 20.0196 17.7071 20.2071C17.5196 20.3946 17.2652 20.5 17 20.5H3C2.73478 20.5 2.48043 20.3946 2.29289 20.2071C2.10536 20.0196 2 19.7652 2 19.5V6.5H0V4.5H5V1.5C5 1.23478 5.10536 0.98043 5.29289 0.792893C5.48043 0.605357 5.73478 0.5 6 0.5H14C14.2652 0.5 14.5196 0.605357 14.7071 0.792893C14.8946 0.98043 15 1.23478 15 1.5V4.5ZM16 6.5H4V18.5H16V6.5ZM7 2.5V4.5H13V2.5H7Z" fill="#FD4539"></path>
                          </svg>
                          </div>
                          </button>
                          <button>
                          <div className='w-10 h-10 flex items-center justify-center border rounded-full'>
                        <svg width="18" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.20244 10.4268L3.94585 11.4359L10.4999 16.7002L17.0539 11.4367L15.7973 10.4276L11.3888 13.968V4.74537H9.61085V13.9674L5.20244 10.4268ZM18.4997 4.03139V2.1281L2.50011 2.12733V4.03062L0.722168 4.03139V0.700195H20.2777V4.03139H18.4997Z" fill="#68698A"></path>
                        </svg>
                        </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination currentPage={picklistpage} totalPage = {picklistTotalPage} onPageChange={handlepicklistPageChange}/>
            </div>
            </div>
    </div>
  )
}

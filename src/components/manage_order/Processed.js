'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Pagination from '../common/Pagination';
import { MdArrowDropDown } from 'react-icons/md';
import { getProcesseddata, getProcessedlength } from '../../alldatafiles/processeddata';
import DropButton from '../common/DropButton';
import { IoIosSearch } from 'react-icons/io';
export default function Processed() {


     const [value5, setValue5] = useState('Print Label')
     const [value6, setValue6] = useState('RTD Status')
     const [value7, setValue7] = useState('M/P Status')
     const [value8, setValue8] = useState('Courier')
     const [processedlimit, setProcessedlimit] = useState(5);
                     const [processedpage, setProcessedpage] = useState(1);
                      let processedTotalPage = Math.ceil(getProcessedlength()/processedlimit);
                      function handleprocessedPageChange(value){
                        if (value === 'Previous') {
                          if (processedpage !== 1) {
                            setProcessedpage(processedpage - 1);
                          }
                        } else if (value === 'Next') {
                          if (processedpage !== processedTotalPage) {
                            setProcessedpage(processedpage + 1);
                          }
                        }
                        
                      }
              
                const processeddata = getProcesseddata(processedpage, processedlimit);
  return (
    <div>
        <div className='sm:flex items-center justify-between my-5 '>
            <div className='sm:flex gap-2 items-center justify-center'>             
               <div className='flex scrollmenu gap-2 items-center justify-center mt-4 '> 
               <DropButton state={value5} setState={setValue5} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
               <DropButton state={value6} setState={setValue6} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
               <DropButton state={value7} setState={setValue7} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
               <DropButton state={value8} setState={setValue8} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>             
               </div> 
               <div className='relative'>
                    <input className='mt-4 sm:mt-0 w-full sm:w-52 2xl:w-auto outline-none border-blue/30 border-2 pl-4 pr-10 rounded-xl py-[5px] placeholder:text-sm placeholder:font-thin placeholder:text-gray-700 ' placeholder='Search Order ID'/>
                    <button className='mt-2 sm:mt-0 absolute right-2 top-1/2 -translate-y-1/2 text-gray-600'><IoIosSearch size={20}/></button>
                   </div>
            </div>
            <div>
            <div className='flex items-center gap-4 mt-3  sm:mt-0 sm:pl-5 rounded-xl text-sm'>
                <div className=' font-medium text-gray-600 py-[10px]'>Total orders - <span className='text-blue'>57</span></div>
                <button className='rounded-xl hover:bg-blue hover:text-white text-blue border-blue border transition-all duration-300 px-6 py-[10px] '>Document</button>
            </div>
            </div>
           </div>
           <div className=' w-full overflow-auto mx-auto  my-5'>
                <table className="  w-[1200px] sm:w-full text-sm">
                  <thead>
                    <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                      <th className='p-3'><input type='checkbox'/></th>
                      <th className='py-3'>Order ID</th>
                      <th >Order Item ID</th>
                      <th>Pakage (L * B* H)</th>
                      <th>Qty</th>
                      <th>Print Label</th>
                      <th>RTD Status</th>
                      <th>M/P Status</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processeddata.map((data, i)=>(

                    <tr className=' border-y ' key={i}>
                      <td className='px-3 py-5'><input type='checkbox'/></td>
                      <td >
                        {data.OrderID}
                      </td>
                      <td>{data.OrderItemID}</td>
                      <td>{data.Pakage}</td>
                      <td >{data.Qty}</td>
                     
                      <td className='space-x-5'>
                        <button>
                        <svg width="17" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.19922 17.8984H1.19922C0.934002 17.8984 0.679648 17.7931 0.492112 17.6055C0.304576 17.418 0.199219 17.1637 0.199219 16.8984V6.89844C0.199219 6.63322 0.304576 6.37887 0.492112 6.19133C0.679648 6.00379 0.934002 5.89844 1.19922 5.89844H4.19922V1.89844C4.19922 1.63322 4.30458 1.37887 4.49211 1.19133C4.67965 1.00379 4.934 0.898438 5.19922 0.898438H15.1992C15.4644 0.898438 15.7188 1.00379 15.9063 1.19133C16.0939 1.37887 16.1992 1.63322 16.1992 1.89844V5.89844H19.1992C19.4644 5.89844 19.7188 6.00379 19.9063 6.19133C20.0939 6.37887 20.1992 6.63322 20.1992 6.89844V16.8984C20.1992 17.1637 20.0939 17.418 19.9063 17.6055C19.7188 17.7931 19.4644 17.8984 19.1992 17.8984H16.1992V19.8984C16.1992 20.1637 16.0939 20.418 15.9063 20.6055C15.7188 20.7931 15.4644 20.8984 15.1992 20.8984H5.19922C4.934 20.8984 4.67965 20.7931 4.49211 20.6055C4.30458 20.418 4.19922 20.1637 4.19922 19.8984V17.8984ZM4.19922 15.8984V14.8984C4.19922 14.6332 4.30458 14.3789 4.49211 14.1913C4.67965 14.0038 4.934 13.8984 5.19922 13.8984H15.1992C15.4644 13.8984 15.7188 14.0038 15.9063 14.1913C16.0939 14.3789 16.1992 14.6332 16.1992 14.8984V15.8984H18.1992V7.89844H2.19922V15.8984H4.19922ZM6.19922 2.89844V5.89844H14.1992V2.89844H6.19922ZM6.19922 15.8984V18.8984H14.1992V15.8984H6.19922ZM3.19922 8.89844H6.19922V10.8984H3.19922V8.89844Z" fill="#68698A"></path>
                            </svg>
                        </button>
                        <button>
                        <svg width="15" height="19" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1992 20.8984H1.19922C0.934002 20.8984 0.679648 20.7931 0.492112 20.6055C0.304576 20.418 0.199219 20.1637 0.199219 19.8984V1.89844C0.199219 1.63322 0.304576 1.37887 0.492112 1.19133C0.679648 1.00379 0.934002 0.898438 1.19922 0.898438H17.1992C17.4644 0.898438 17.7188 1.00379 17.9063 1.19133C18.0939 1.37887 18.1992 1.63322 18.1992 1.89844V19.8984C18.1992 20.1637 18.0939 20.418 17.9063 20.6055C17.7188 20.7931 17.4644 20.8984 17.1992 20.8984ZM16.1992 18.8984V2.89844H2.19922V18.8984H16.1992ZM5.19922 5.89844H13.1992V7.89844H5.19922V5.89844ZM5.19922 9.89844H13.1992V11.8984H5.19922V9.89844ZM5.19922 13.8984H13.1992V15.8984H5.19922V13.8984Z" fill="#68698A"></path>
                            </svg>
                        </button>
                      </td>
                      <td className='space-x-5'>
                        <button>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.364 5.086L11.314 0.136002L12.728 1.55L7.778 6.5L12.728 11.45L11.314 12.864L6.364 7.914L1.414 12.864L0 11.45L4.95 6.5L0 1.55L1.414 0.136002L6.364 5.086Z" fill="#F53C30"></path>
                      </svg>
                        </button>
                      </td>
                      <td className={`${data.Status === 'Delivered'?'text-[#1f674f]':'text-red-500'} `}>{data.Status}</td>
                      <td className='px-3 py-2'>
                        <div className='grid items-center '> 
                          <div>{data.area}</div>
                          <div>{data.Couriername}</div>
                          <div className='text-blue'>{data.TrackingId}</div>
                        </div>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
           <Pagination currentPage={processedpage} totalPage = {processedTotalPage} onPageChange={handleprocessedPageChange}/>
            
    </div>
  )
}

'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Pagination from '../common/Pagination';
import { MdArrowDropDown } from 'react-icons/md';
import { getProcessingData, getProcessingLength } from '../../alldatafiles/newdata';
export default function New() {

    const [limit, setLimit] = useState(7);
          const [page, setPage] = useState(1);
           let totalPage = Math.ceil(getProcessingLength()/limit);
          function handlePageChange(value){
              if (value === 'Previous') {
                if (page !== 1) {
                  setPage(page - 1);
                }
              } else if (value === 'Next') {
                if (page !== totalPage) {
                  setPage(page + 1);
                }
              }
              
            }
   const dataArray = getProcessingData(page, limit);
   const [batchvalue, setBatchvalue] = useState('Batch Picklist');
   const [pageSize, setPageSize] = useState('Select Page Size');
   const [otherType, setOtherType] = useState('Other Type');
   const [show, setShow] = useState(false);
   


  return (
    <div>
        <div>
        
                      <div className='sm:flex items-center justify-between'>
                        <div className='flex flex-wrap items-center gap-3'>
                        <button className='rounded-xl hover:bg-blue hover:text-white border-blue text-blue border transition-all duration-300 px-4 h-[42px] font-semibold text-[13px]'>Manual Picklist</button>
                        <Menu>
                                                     <MenuButton className='flex items-center gap-1 rounded-xl hover:bg-blue hover:text-white border-blue text-blue border transition-all duration-300 px-4 h-[42px] font-semibold text-[13px]'>
                                                       {batchvalue}
                                                       <MdArrowDropDown size={17}/>
                                                        </MenuButton>
                                                         <MenuItems anchor="bottom" className='mt-2 py-2 rounded-lg bg-white border border-blue/40'>
                        
                                                         <MenuItem onClick={()=>{setBatchvalue('This Week')}} className='pr-12 pl-4 py-1 text-sm z-10'><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100">This Week</p></MenuItem>
                                                          <MenuItem onClick={()=>{setBatchvalue('This Month')}} className='pr-12 pl-4 py-1 text-sm'><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Month</p></MenuItem>
                                                          <MenuItem onClick={()=>{setBatchvalue('This Quarter')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Quarter</p></MenuItem>
                                                          <MenuItem onClick={()=>{setBatchvalue('This Year')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Year</p></MenuItem>
                                                          
                                                          </MenuItems>
                        </Menu>
                        <Menu>
                                                     <MenuButton className='flex items-center gap-1 rounded-xl hover:bg-blue hover:text-white border-blue text-blue border transition-all duration-300 px-4 h-[42px] font-semibold text-[13px]'>
                                                       {pageSize}
                                                       <MdArrowDropDown size={17}/>
                                                        </MenuButton>
                                                         <MenuItems anchor="bottom" className='mt-2 py-2 rounded-lg bg-white border border-blue/40'>
                        
                                                         <MenuItem onClick={()=>{setPageSize('This Week')}} className='pr-12 pl-4 py-1 text-sm z-10'><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100">This Week</p></MenuItem>
                                                          <MenuItem onClick={()=>{setPageSize('This Month')}} className='pr-12 pl-4 py-1 text-sm'><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Month</p></MenuItem>
                                                          <MenuItem onClick={()=>{setPageSize('This Quarter')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Quarter</p></MenuItem>
                                                          <MenuItem onClick={()=>{setPageSize('This Year')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Year</p></MenuItem>
                                                          
                                                          </MenuItems>
                        </Menu>
                        <Menu>
                                                     <MenuButton className='flex items-center gap-1 rounded-xl hover:bg-blue hover:text-white border-blue text-blue border transition-all duration-300 px-4 h-[42px] font-semibold text-[13px]'>
                                                       {otherType}
                                                       <MdArrowDropDown size={17}/>
                                                        </MenuButton>
                                                         <MenuItems anchor="bottom" className='mt-2 py-2 rounded-lg bg-white border border-blue/40'>
                        
                                                         <MenuItem onClick={()=>{setOtherType('This Week')}} className='pr-12 pl-4 py-1 text-sm z-10'><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100">This Week</p></MenuItem>
                                                          <MenuItem onClick={()=>{setOtherType('This Month')}} className='pr-12 pl-4 py-1 text-sm'><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Month</p></MenuItem>
                                                          <MenuItem onClick={()=>{setOtherType('This Quarter')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Quarter</p></MenuItem>
                                                          <MenuItem onClick={()=>{setOtherType('This Year')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Year</p></MenuItem>
                                                          
                                                          </MenuItems>
                        </Menu>
                        </div>
                        <div className='flex items-center sm: gap-2 sm:gap-8 mt-4 sm:mt-0 text-sm'>
                          <div className='flex items-center gap-2'><input type='checkbox'/><label>SKU</label></div>
                          <div className='flex items-center gap-2'><input type='checkbox'/><label className='flex gap-1'>Breaching -<p className='text-red-600'>(0)</p></label></div>
                          <div className='flex gap-1'>Total orders - <p className='text-blue'>(0)</p></div>
                        </div>
                      </div>
        
        
        
        
                    
                      <div className='sm:h-[426px] w-full  mx-auto overflow-auto my-5 '>
                    <table   className=" w-[1200px] sm:w-full">
                    <thead className=''>
                             
                        <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                            <th><input type='checkbox'/></th>
                            <th ><h1 className='py-2'>Order details</h1></th>
                            <th ><h1 className=''>Order Qty</h1></th>
                            <th ><h1 className=''>Available Stock</h1></th>
                            <th ><h1 className=''>Shipping details</h1></th>
                        </tr>
                            
                    </thead>
                    <tbody>
                        {dataArray.map((data, i) => (
        
                        <tr key={i} className={`  border-y text-sm text-black`} >
                            
                            <td   className=' content-start py-3'><input type='checkbox'/></td>
                            <td className='flex items-start gap-3 py-2 '>
                              
                              <div className='mt-1'>
                              <div className='w-9 h-9 content-center text-center rounded-lg border'>fk</div>
                              </div>
                              <div className='mt-1'><Image className='border rounded-lg' src={data.Logo} alt='' width={34} height={34}/></div>
                              <div className={`${show?'h-[90px]':'h-10'} overflow-hidden transition-[height] duration-500`}>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Order ID:<p className='text-black text-sm '>{data.OrderID}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>SLA:<p className='text-red-600 text-sm '>{data.SLA}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Date:<p className='text-black text-sm'>{data.Date}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Order Value:<p className='text-black text-sm'>{data.Ordervalue}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>
                                  Master SKU:
                                  <p className='text-red-600 text-sm'>{data.MasterSKU}
                                  </p>
                                  <Menu>
                                    <MenuButton className=''>
                                    <svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M12.7573 6.67143L11.3433 5.25744L2.0293 14.5714V15.9854H3.4433L12.7573 6.67143ZM14.1713 5.25744L15.5853 3.84343L14.1713 2.42943L12.7573 3.84343L14.1713 5.25744ZM4.2713 17.9854H0.0292969V13.7424L13.4643 0.307435C13.6518 0.119964 13.9061 0.0146484 14.1713 0.0146484C14.4365 0.0146484 14.6908 0.119964 14.8783 0.307435L17.7073 3.13644C17.8948 3.32396 18.0001 3.57827 18.0001 3.84343C18.0001 4.1086 17.8948 4.36291 17.7073 4.55044L4.2723 17.9854H4.2713Z" fill="#626BCC"></path>
                                    </svg>
                                    </MenuButton>
        
                                    <MenuItems anchor="bottom" className='mt-2 py-2 rounded-lg bg-white border border-blue/40'>
                                    <div className='p-2'>
                                      <p className='text-xs text-gray-600 mb-2'>Map Master SKU</p>
                                      <select className='w-full border p-2 text-sm'>
                                        <option>One</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                      </select>
                                    </div>
                                      <MenuItem className='pr-20 pl-4 py-1 text-sm z-10'>
                                        <p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100">
                                          Settings
                                        </p>
                                      </MenuItem>
                                      <MenuItem className='pr-20 pl-4 py-1 text-sm'>
                                        <p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >
                                          Support
                                        </p>
                                      </MenuItem>
                                      <MenuItem className='pr-20 pl-4 py-1 text-sm text-left' >
                                        <p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >
                                          License
                                        </p>
                                      </MenuItem>
                                    </MenuItems>
                                  </Menu>
                                  </div>
                              </div>
                            </td>
                            <td className=' content-start text-start'>
                              <p className=' h-[62px] content-center'>{data.Qty}</p>
                            </td>
                            <td className=' content-start text-start'>
                                <p className=' h-[62px] content-center'>{data.Availablestock}</p>
                            </td>

                            <td className='py-2 '>
                            <div className={`${show ?'h-[90px]':'h-12'}   overflow-hidden transition-[height] duration-500`}>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>City:<p className='text-black text-sm'>{data.City}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>State:<p className='text-black text-sm'>{data.State}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Name:<p className='text-black text-sm'>{data.Name}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Phone:<p className='text-black text-sm'>{data.Phone}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Address:<p className='text-black text-sm'>{data.Address}</p></div>
                              </div>
                            </td>
                            <td className=' content-start text-start'><button className=' h-[62px] content-center' onClick={()=>setShow(!show)} ><MdArrowDropDown size={17}/></button></td>
                            
                                
                            
                        </tr>
                        ))}
                    </tbody>
                   </table>
              </div>
               <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
                    </div>
    </div>
  )
}

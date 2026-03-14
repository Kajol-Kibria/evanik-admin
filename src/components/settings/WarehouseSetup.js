'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination'
import { getdata, getLength } from '../../../alldatafiles/WarehouseSetupdata';
import { MdArrowDropDown } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { RiDeleteBin7Line } from "react-icons/ri";
import DropButton from '../common/DropButton';
export default function WarehouseSetup() {
                        const [value1, setValue1] = useState('Default')
                        const [limit, setLimit] = useState(6);
                        const [page, setPage] = useState(1);
                         let totalPage = Math.ceil(getLength()/limit);
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
                
                          const dataArray = getdata(page, limit);

  return (
    <div>
      <p className='font-semibold text-blue'>Warehouse setup</p>
      <div>
        <div className=' w-full  mx-auto overflow-auto my-5'>
                                <table   className="  w-[1200px] sm:w-full">
                                      <thead >    
                                          <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                                              <th><h1 >ID</h1></th>
                                              <th><h1 className='py-2'>Warehouse Name</h1></th>
                                              <th><h1 >Branch</h1></th>
                                              <th><h1 >Type</h1></th>
                                              <th><h1 >Action</h1></th>
                                          </tr> 
                                      </thead>
                                      <tbody>
                                          {dataArray.map(data=>(
                                          <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={data.ID}>
                                         
                                              <td >{data.ID}</td>
                                              <td >{data.WarehouseName}</td>
                                              <td >{data.Branch}</td>
                                              <td >
                                              <Menu>
                                                <MenuButton className='flex items-center gap-1 text-sm py-1.5 px-4 rounded-full text-[#1f674f] bg-[#e7fbe4] border border-[#e7fbe4] hover:bg-blue/10 focus:text-blue hover:text-blue transition-all duration-300  hover:border-blue/40'>
                                                  {value1}
                                                  <MdArrowDropDown size={17}/>
                                                </MenuButton>
                                                <MenuItems anchor="bottom" className='mt-2 py-2 rounded-lg bg-white border border-blue/40'>
                                                  <MenuItem onClick={()=>{setValue1('Dropshipment')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >Dropshipment</p></MenuItem>
                                                  <MenuItem onClick={()=>{setValue1('M/P Warehouse')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >M/P Warehouse</p></MenuItem>
                                                  <MenuItem onClick={()=>{setValue1('FBA')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >FBA</p></MenuItem>
                                                </MenuItems>
                                              </Menu> 
                                              </td>
                                              <td>
                                                <button className='text-red-500'><RiDeleteBin7Line size={17}/></button>
                                              </td>
                                              
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

'use client'
import React, { useState } from 'react'
import { getdata, getLength } from '../../../alldatafiles/TierSetupdata';
import Pagination from '../common/Pagination';
import { MdArrowDropDown } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { RiPencilLine } from "react-icons/ri";
import { LuPlus } from "react-icons/lu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from '../../../node_modules/next/image';
import CustomTooltip from '../common/Tooltip';
import CustomSelect from '../common/CustomSelect';
export default function Tiersetup() {
          const aquaticCreatures = [
            { label: '1mg', value: '1mg' },
            { label: 'amazon', value: 'amazon' },
            { label: 'Flipkart', value: 'Flipkart' },
            { label: 'Jiomart', value: 'Jiomart' },
            { label: 'Crab', value: 'Crab' },
            { label: 'Lobster', value: 'Lobster' },
          ];
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
          <div className='sm:flex gap-4 items-start justify-end space-y-3 sm:space-y-0'>
          <CustomSelect options={aquaticCreatures}/>  
          <CustomSelect options={aquaticCreatures}/>  
                    <Dialog>
                      <DialogTrigger>
                      <p className='text-gray-600 border h-9 w-9 flex items-center justify-center rounded-full hover:border-blue hover:bg-blue/10 transition-all duration-300'><LuPlus size={17}/></p>
                      </DialogTrigger>
                      <DialogContent className=' overflow-auto max-h-[90vh]'>
                        <DialogHeader>
                          <DialogTitle>
                            <p className='text-blue text-2xl mb-3'>Add Tier</p>
                          </DialogTitle>
                          <div className='grid sm:grid-cols-2 py-5'>
                                <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>State SellerId</option>
                                    <option>vendor one</option>
                                    <option>vendor two</option>
                                    <option>vendor three</option>
                                    </select>
                                    <label className="flex  gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip></CustomTooltip>
                                    SellerId
                                    </label>
                                </div> 
                                <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>State Tier</option>
                                    <option>vendor one</option>
                                    <option>vendor two</option>
                                    <option>vendor three</option>
                                    </select>
                                    <label className="flex  gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip></CustomTooltip>
                                    Tier
                                    </label>
                                </div>
                                <div className='grid sm:w-[90%]'>
                                    <label className='flex gap-2 items-center text-sm'>
                                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                        Start Date
                                    </label>
                                    <input className='border-gray-700/40 border-b p-3 outline-none text-black' type='date'></input>
                                </div>                         
                                <div className='grid sm:w-[90%]'>
                                    <label className='flex gap-2 items-center text-sm'>
                                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                        End Date
                                    </label>
                                    <input className='border-gray-700/40 border-b p-3 outline-none text-black' type='date'></input>
                                </div>                         
                          </div>
                          <span className='flex items-center justify-end gap-5 mt-8'>
                          <DialogTrigger><div className='buttonBlue w-28'>Close</div></DialogTrigger>
                          <DialogTrigger><div className='blueButton w-28'>Update</div></DialogTrigger>
                          </span>
                          
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
        
          </div>
          <div className=' w-full  mx-auto overflow-auto my-5'>
                                <table   className="  w-[800px] sm:w-full">
                                      <thead >    
                                          <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                                              <th className='px-2'><input type='checkbox'/></th>
                                              <th><h1 >#ID</h1></th>
                                              <th><h1 className='py-2'>Channel</h1></th>
                                              <th><h1 >SellerId</h1></th>
                                              <th><h1 >Tier</h1></th>
                                              <th className='2xl:px-10'><h1 >Tier ( From - To)</h1></th>
                                          </tr> 
                                      </thead>
                                      <tbody>
                                          {dataArray.map(data=>(
                                          <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={data.ID}>
                                              <td className='px-2'><input type='checkbox'/></td>
                                              <td >{data.ID}</td>
                                              <td >{data.Channel}</td>
                                              <td >{data.SellerId}</td>
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
                                              <td className='sm:w-1/4 2xl:px-10'>
                                                <div className='flex items-center gap-4'>
                                                  <input className='w-32' type='date'/> 
                                                  <p className='text-xs text-gray-700'>to</p>
                                                  <input className='w-32' type='date'/>
                                                <button className='text-blue'><RiPencilLine size={17}/></button>
                                                </div>
                                              </td>
                                          </tr>
                                          ))}
                                      </tbody>
                                     </table>
                                </div>
                      <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}

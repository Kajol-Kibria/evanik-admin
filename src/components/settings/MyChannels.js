'use client'
import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io';
import DropButton from '../common/DropButton';
import { LuFileDown } from "react-icons/lu";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomSlideCheck from '../common/CustomSlideCheck';
import { RiPencilLine } from "react-icons/ri";
import { RiDeleteBin7Line } from "react-icons/ri";
export default function MyChannels() {
  const [value1, setValue1] = useState('All')
  return (
    <div>
      <div className='sm:flex items-center justify-between'>
              <button className='flex items-center gap-2 font-semibold text-gray-700 my-4 text-[13px] border py-2 px-3 rounded-xl focus:text-blue hover:text-blue transition-all duration-300  focus:border-blue/40 hover:border-blue/40'>
              CSV <LuFileDown size={15}/>
              </button>
              <div className='flex items-center gap-4'>
              <div className='flex items-center mr-4'>
                <input className='pl-5 pr-14  w-40  border-2 border-blue/20 outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-xl' placeholder='search'/>
                <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
              </div>
              <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday', 'Previous Week', 'Previous Month', 'Previous Year']}/>
              </div>
        </div>
        {/* nested acordation */}
        <div className='my-4'>
               <Accordion className='shd'>
                      <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}>
                      <div className='flex items-center justify-between w-full'>
                      <div className='flex items-center gap-3'>
                      <p className='w-9 h-9 text-center content-center border rounded-lg'>az</p>
                      <p className=' text-blue font-semibold'>Amazon</p>
                      </div>
                      <div className='flex items-center gap-5 mx-3'>
                        <p className='text-xs'>Store: <span className='text-black text-sm'>1</span></p>
                        <p className='text-xs'>Channel: <span className='text-black text-sm'>1mg</span></p>
                      </div>
                      </div>
                      </AccordionSummary>
                      <AccordionDetails className='pt-0 pb-1'>
                      <div>
                      <Accordion className='shadow-none'>
                          <AccordionSummary
                          className='p-0'
                          expandIcon={<ExpandMoreIcon />}>
                          <div className='flex items-center justify-between w-full'>
                          <div className='flex items-baseline text-sm gap-3'>
                          <input type='checkbox'/>
                          <label >A2ZN1U7S568F87</label>
                          </div>
                          <div className='flex items-center gap-5 mx-3'>
                          <span className=" text-[#1f674f] px-4 py-1 bg-[#e7fbe4] text-xs rounded-md font-semibold">Active</span>
                          </div>
                          </div>
                          </AccordionSummary>
                          <AccordionDetails className='px-0'>
                          <div className='space-y-8 rounded-md bg-[#f3f4fb]'>
                          <div className='grid grid-cols-2 2xl:grid-cols-5 gap-4 py-4 px-5'>
                            <div>
                              <p className='text-xs'>Channel Id</p>
                              <p className='font-medium'>13</p>
                            </div>
                            <div>
                              <p className='text-xs'>Store Name</p>
                              <p className='font-medium'>Blinkit</p>
                            </div>
                            <div>
                              <p className='text-xs'>Username</p>
                              <p className='font-medium'>naturevitindia@gmail.com</p>
                            </div>
                            <div>
                              <p className='text-xs'>Password</p>
                              <p className='font-medium'>********</p>
                            </div>
                            <div>
                              <p className='text-xs'>Marketplace ID</p>
                              <p className='font-medium'>03</p>
                            </div>
                            <div>
                              <p className='text-xs'>API Key</p>
                              <p className='font-medium'>4603</p>
                            </div>
                            <div>
                              <p className='text-xs'>Seller ID</p>
                              <p className='font-medium'>Blinkit</p>
                            </div>
                            <div>
                              <p className='text-xs'>API Access Token</p>
                              <p className='font-medium'>13</p>
                            </div>
                            <div>
                              <p className='text-xs'>API Refresh Token</p>
                              <p className='font-medium'>13</p>
                            </div>
                            <div></div>
                            <div className='flex flex-col items-start'>
                              <p className='text-xs mb-2'>MCF</p>
                              <CustomSlideCheck/>
                            </div>
                            <div className='flex items-center gap-4'>
                              <button className='text-gray-500'><RiPencilLine size={23}/></button>
                              <button className='text-red-500'><RiDeleteBin7Line size={23}/></button>
                            </div>
                          </div>
                          </div>
                          </AccordionDetails>
                      </Accordion>
                      </div>
                      <div>
                      <Accordion className='shadow-none'>
                          <AccordionSummary
                          className='p-0'
                          expandIcon={<ExpandMoreIcon />}>
                          <div className='flex items-center justify-between w-full'>
                          <div className='flex items-baseline text-sm gap-3'>
                          <input type='checkbox'/>
                          <label >Jiomart</label>
                          </div>
                          <div className='flex items-center gap-5 mx-3'>
                          <span className=" text-[#1f674f] px-4 py-1 bg-[#e7fbe4] text-xs rounded-md font-semibold">Active</span>
                          </div>
                          </div>
                          </AccordionSummary>
                          <AccordionDetails className='px-0'>
                          <div className='space-y-8 rounded-md bg-[#f3f4fb]'>
                          <div className='grid grid-cols-2 2xl:grid-cols-5 gap-4 py-4 px-5'>
                            <div>
                              <p className='text-xs'>Channel Id</p>
                              <p className='font-medium'>13</p>
                            </div>
                            <div>
                              <p className='text-xs'>Store Name</p>
                              <p className='font-medium'>Blinkit</p>
                            </div>
                            <div>
                              <p className='text-xs'>Username</p>
                              <p className='font-medium'>naturevitindia@gmail.com</p>
                            </div>
                            <div>
                              <p className='text-xs'>Password</p>
                              <p className='font-medium'>********</p>
                            </div>
                            <div>
                              <p className='text-xs'>Marketplace ID</p>
                              <p className='font-medium'>03</p>
                            </div>
                            <div>
                              <p className='text-xs'>API Key</p>
                              <p className='font-medium'>4603</p>
                            </div>
                            <div>
                              <p className='text-xs'>Seller ID</p>
                              <p className='font-medium'>Blinkit</p>
                            </div>
                            <div>
                              <p className='text-xs'>API Access Token</p>
                              <p className='font-medium'>13</p>
                            </div>
                            <div>
                              <p className='text-xs'>API Refresh Token</p>
                              <p className='font-medium'>13</p>
                            </div>
                            <div></div>
                            <div className='flex flex-col items-start'>
                              <p className='text-xs mb-2'>MCF</p>
                              <CustomSlideCheck/>
                            </div>
                            <div className='flex items-center gap-4'>
                              <button className='text-gray-500'><RiPencilLine size={23}/></button>
                              <button className='text-red-500'><RiDeleteBin7Line size={23}/></button>
                            </div>
                          </div>
                          </div>
                          </AccordionDetails>
                        </Accordion>
                        </div>
                      </AccordionDetails>
                </Accordion>
          </div>
    </div>
  )
}

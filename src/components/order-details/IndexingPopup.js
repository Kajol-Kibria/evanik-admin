'use client'
import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CustomTooltip from '../common/Tooltip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import CustomRadio from '../common/CustomRadio';
export default function IndexingPopup() {
  return (
    
    <div className=' '>
        <Accordion className='shd mb-4'  defaultExpanded>
                <AccordionSummary
                className=''
                expandIcon={<ExpandMoreIcon />}>
                <div className='grid'>
                <p className='text-blue text-base font-semibold'>3. Select shipping speed</p>
                <p className='text-xs mt-1'>Some helper text can go here</p>
                </div>
                </AccordionSummary>
                
                <AccordionDetails className='p-0'>
                <div className='mx-5 text-left'>
                  <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Full Name
                                    </label>
                  </div>
                  <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Street address
                                    </label>
                  </div>

                  <button className='pb-5 text-sm underline text-blue'>+ Add a line</button>
                  <div className='grid grid-cols-2 gap-2'>
                  <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Pincode
                                    </label>
                  </div>
                  
                  <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Select a State</option>
                                    <option>Branch one</option>
                                    <option>Branch two</option>
                                    <option>Branch three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    State
                                    </label>
                     </div>
                  <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Select a Country</option>
                                    <option>Branch one</option>
                                    <option>Branch two</option>
                                    <option>Branch three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Country
                                    </label>
                     </div>
                  </div>
                     <div>
                      <p className='my-3 text-sm text-blue font-semibold'>Customer contact information</p>
                      <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Phone Number
                                    </label>
                      </div>
                      <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Email address
                                    </label>
                      </div>
                     </div>
                </div>
                </AccordionDetails>
          </Accordion>


          <Accordion className=' shd mb-4 '  defaultExpanded>
                <AccordionSummary
                className=''
                expandIcon={<ExpandMoreIcon />}>
                <div className='grid'>
                <p className='text-blue text-base font-semibold'>3. Select shipping speed</p>
                <p className='text-xs mt-1'>Some helper text can go here</p>
                </div>
                </AccordionSummary>
                
                <AccordionDetails >
                  <div className='mx-5 text-left'>
                    <input type='text' placeholder='Search by title, MSKU, ASIN or FNSKU' className='placeholder:text-gray-500 placeholder:text-sm border-2 border-blue/20 outline-none px-3 py-3 rounded-lg w-full'/>
                    <p className='p-4 my-3 border rounded-lg text-sm'>Use the search field above to add items to this order</p>
                    <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Order ID
                                    </label>
                  </div>
                  <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Packing slip comments
                                    </label>
                  </div>

                  <button className='pb-5 text-sm underline text-blue'>+ Optional details</button>
                  
                  </div>
                </AccordionDetails>
          </Accordion>
        <Accordion className='shd mb-5'  defaultExpanded>
                <AccordionSummary
                className=''
                expandIcon={<ExpandMoreIcon />}>
                <div className='grid'>
                <p className='text-blue text-base font-semibold'>3. Select shipping speed</p>
                <p className='text-xs mt-1'>Some helper text can go here</p>
                </div>
                </AccordionSummary>
                
                <AccordionDetails className='p-0'>
                <div className='mx-5 text-left'>
                  <div className='flex gap-16 pb-4 border-b'>
                    <div>
                      <CustomRadio id={'Standard'} txt={'Standard'}/>
                      <div className='flex items-center '>
                        <p className='text-gray-600 mx-5 text-sm'>Arrives by:</p>
                        <span className=' font-semibold '>11 July 2025</span>
                      </div>
                    </div>
                    <div>
                      <CustomRadio id={'Expedited'} txt={'Expedited'}/>
                      <div className='flex items-center '>
                        <p className='text-gray-600 mx-5 text-sm'>Arrives by:</p>
                        <span className=' font-semibold '>11 July 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-2 py-4'>
                    <div>
                      <div className='flex items-center '>
                        <p className='text-gray-600 mx-5 text-sm'>Delivery weight::
                        </p>
                        <span className=' font-semibold '>11 July 2025</span>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center '>
                        <p className='text-gray-600 mx-5 text-sm'>Order total:</p>
                        <span className=' font-semibold '>04</span>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center '>
                        <p className='text-gray-600 mx-5 text-sm'>Dispatch date:</p>
                        <span className=' font-semibold '>11 July 2025</span>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center '>
                        <p className='text-gray-600 mx-5 text-sm'>Delivery date:</p>
                        <span className=' font-semibold '>11 July 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
                </AccordionDetails>
          </Accordion>
    </div>
    
  )
}

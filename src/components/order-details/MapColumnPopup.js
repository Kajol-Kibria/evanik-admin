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
export default function MapColumnPopup() {
  return (
    <div className='space-y-10 py-6'>
            <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Select</option>
                                    <option>Branch one</option>
                                    <option>Branch two</option>
                                    <option>Branch three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Order details
                                    </label>
            </div>
            <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Select</option>
                                    <option>Branch one</option>
                                    <option>Branch two</option>
                                    <option>Branch three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Product details
                                    </label>
            </div>
            <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Select</option>
                                    <option>Branch one</option>
                                    <option>Branch two</option>
                                    <option>Branch three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Shipping details
                                    </label>
            </div>
            <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Select</option>
                                    <option>Branch one</option>
                                    <option>Branch two</option>
                                    <option>Branch three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Status
                                    </label>
            </div>
            <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Select</option>
                                    <option>Branch one</option>
                                    <option>Branch two</option>
                                    <option>Branch three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Action
                                    </label>
            </div>
    </div>
  )
}

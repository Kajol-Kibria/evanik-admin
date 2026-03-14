'use client'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomTooltip from '../common/Tooltip';
import IconButton from '../common/IconButton';
import Image from 'next/image';
import CustomRadio from '../common/CustomRadio';

export default function GoodRNAcordation() {
  return (
    <div>
        <Accordion className='shd'  defaultExpanded>
        <AccordionSummary
        className='text-blue text-lg font-semibold px-8'
        expandIcon={<ExpandMoreIcon />}>
       Basic Info
        </AccordionSummary>
        <AccordionDetails className='py-3'>
          <div>
            <div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              <div className='flex sm:w-[90%]  justify-between items-center'>
                <div className="relative z-0  w-full mb-5 group">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  GRN No #<span className='text-red-500'> *</span>
                  </label>
              </div>
              <div className='px-3'>
                  <IconButton svg={<Image width={17} height={17} src='/images/icon-settings.svg' alt='hello'/>}/>
              </div>
              </div>
              
                <div className="relative z-0  sm:w-[90%] mb-5 group">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Supplier
                  </label>
              </div>
             
                <div className=' relative sm:w-[90%]'>
                        <label className='flex absolute -top-2.5 gap-2 items-center text-sm'>
                            <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                            GRN Date
                        </label>
                     <input className='border-gray-700/40 border-b p-2.5 w-full  outline-none text-black' type='date'></input>
                 </div>


                 
                <div className="relative z-0  sm:w-[90%] mb-5 group text-black">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Payment Terms
                  </label>
              </div>
                <div className="relative z-0  sm:w-[90%] mb-5 group text-black">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Transporter
                  </label>
              </div>
                <div className="relative z-0  sm:w-[90%] mb-5 group text-black">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  PO No
                  </label>
              </div>
                <div className="relative z-0  sm:w-[90%] mb-5 group text-black">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Vehicle No
                  </label>
              </div>
              <div className=' relative sm:w-[90%]'>
                        <label className='flex absolute -top-2.5 gap-2 items-center text-sm'>
                            <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                            PO Date
                        </label>
                     <input className='border-gray-700/40 border-b p-2.5 w-full  outline-none text-black' type='date'></input>
                 </div>
              </div>

           

            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      
    </div>
  )
}

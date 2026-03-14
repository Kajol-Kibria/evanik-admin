'use client'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RiPencilLine } from "react-icons/ri";
import CustomTooltip from '../common/Tooltip';
import Image from '../../../node_modules/next/image';
import CustomSelect from '../common/CustomSelect';

export default function AccountingSettings() {
  const aquaticCreatures = [
    { label: '1mg', value: '1mg' },
    { label: 'amazon', value: 'amazon' },
    { label: 'Flipkart', value: 'Flipkart' },
    { label: 'Jiomart', value: 'Jiomart' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
  ];
  return (
    <div>
      <div className='sm:flex items-center justify-between py-5 px-4 rounded-3xl bg-[#f1f8f6] my-4'>
                    <div className='flex items-center gap-5'>
                      <div className='bg-[#c8e3da] h-[50px] w-[50px] content-center flex items-center justify-center contain-content rounded-full'>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0005 6.49902V14.499C11.0005 15.2947 10.6844 16.0577 10.1218 16.6203C9.5592 17.183 8.79614 17.499 8.00049 17.499H5.83049C5.59458 18.1665 5.13029 18.7291 4.51968 19.0874C3.90907 19.4456 3.19146 19.5765 2.4937 19.4568C1.79593 19.3372 1.16294 18.9747 0.706614 18.4334C0.250285 17.8921 0 17.207 0 16.499C0 15.7911 0.250285 15.1059 0.706614 14.5647C1.16294 14.0234 1.79593 13.6609 2.4937 13.5412C3.19146 13.4215 3.90907 13.5524 4.51968 13.9107C5.13029 14.2689 5.59458 14.8315 5.83049 15.499H8.00049C8.26571 15.499 8.52006 15.3937 8.70759 15.2061C8.89513 15.0186 9.00049 14.7642 9.00049 14.499V6.49902C9.00049 5.70337 9.31656 4.94031 9.87917 4.3777C10.4418 3.81509 11.2048 3.49902 12.0005 3.49902H15.0005V0.499023L20.0005 4.49902L15.0005 8.49902V5.49902H12.0005C11.7353 5.49902 11.4809 5.60438 11.2934 5.79192C11.1058 5.97945 11.0005 6.23381 11.0005 6.49902ZM3.00049 17.499C3.2657 17.499 3.52006 17.3937 3.70759 17.2061C3.89513 17.0186 4.00049 16.7642 4.00049 16.499C4.00049 16.2338 3.89513 15.9795 3.70759 15.7919C3.52006 15.6044 3.2657 15.499 3.00049 15.499C2.73527 15.499 2.48092 15.6044 2.29338 15.7919C2.10584 15.9795 2.00049 16.2338 2.00049 16.499C2.00049 16.7642 2.10584 17.0186 2.29338 17.2061C2.48092 17.3937 2.73527 17.499 3.00049 17.499Z" fill="#1F674F"></path>
                      </svg>
                      </div>
                      <p className='text-sm w-2/3 sm:w-[85%]'>Sellers using more than three platforms see a 50% higher revenue growth rate.</p>
                    </div>
                    <button className='bg-[#c8e3da] mt-3 sm:mt-0 min-w-full sm:min-w-52 py-3 px-3 rounded-xl text-[#1f674f] font-semibold'>Visit Platforms Page</button>
       </div>
       <div className='flex items-center justify-between'>
        <p className='text-blue font-semibold '>Tax Groups</p>
        <div  className='flex items-center gap-3'>
          <button className='buttonBlue'>Bulk Edit</button>
          <button className='buttonBlue'>Tax Group +</button>
        </div>
       </div>

       <div>
        <div className='my-4'>
            <Accordion className='shd '>
              <AccordionSummary
              className='  py-0  '
              expandIcon={<ExpandMoreIcon />}>
                <div className='w-full sm:flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                  <input type='checkbox'/>
                  <p className='text-blue font-semibold'>RAJASTHAN - 12</p> 
                  </div>
                  <div className='flex items-center gap-1 my-3 sm:my-0'>
                    <p className='mx-2 border text-[13px] py-1 px-4 rounded-lg hover:border-blue hover:text-blue  hover:bg-blue/10 transition-all duration-300'>Update</p>
                    <p className='mx-2 border text-[13px] py-1 px-4 rounded-lg hover:border-blue hover:text-blue  hover:bg-blue/10 transition-all duration-300'>Delete</p>
                    </div>
                </div>
              </AccordionSummary>
              <AccordionDetails className='space-y-8'>
              <form >
                <div className='sm:flex justify-between gap-10 space-y-10 sm:space-y-0'>
                <CustomSelect options={aquaticCreatures}/>
                <div className="relative z-0  sm:my-0 sm:w-1/2 mb-5 group text-black">
                                                <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                                <option>12</option>
                                                <option>5</option>
                                                <option>18</option>
                                                </select>
                                                <label className="flex  gap-2 items-center text-gray-700 font-medium absolute text-[14px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                                Select GST Tag
                                                </label>
                </div>
                </div>
                <div className='sm:flex items-baseline my-10 gap-4 space-y-10 sm:space-y-0'>
                <div className='grid relative sm:w-1/3'>
                  <label className='absolute top-1 -translate-y-6 flex gap-2 items-center text-sm'>
                          <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                          Price Range - From
                  </label>
                  <input className='border-gray-700/40 border-b px-3 py-2.5 outline-none text-black' type='number'/>
                </div>
                <div className='grid relative sm:w-1/3'>
                  <label className='absolute top-1 -translate-y-6 flex gap-2 items-center text-sm'>
                          <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                          Price Range - To
                  </label>
                  <input className='border-gray-700/40 border-b px-3 py-2.5 outline-none text-black' type='number'/>
                </div>
                <div className="relative z-0 sm:w-1/3 mb-5 group text-black">
                                                <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                                <option>0%</option>
                                                <option>3%</option>
                                                <option>5%</option>
                                                <option>12%</option>
                                                <option>18%</option>
                                                <option>28%</option>
                                                </select>
                                                <label className="flex  gap-2 items-center text-gray-700 font-medium absolute text-[14px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                                GST Tax Slab
                                                </label>
                  </div>
                </div>
                <div className='sm:flex items-baseline gap-5 space-y-10 sm:space-y-0'>
                <div className="relative z-0 sm:w-1/2 mb-5 group text-black">
                                                <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                                <option>Select State</option>
                                                <option>5</option>
                                                <option>18</option>
                                                </select>
                                                <label className="flex  gap-2 items-center text-gray-700 font-medium absolute text-[14px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                                State
                                                </label>
                  </div>
                  <div className='grid relative sm:w-1/2'>
                    <label className='absolute top-1 -translate-y-6 flex gap-2 items-center text-sm'>
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        Wef
                    </label>
                    <input className='border-gray-700/40 border-b px-3 py-2.5 outline-none text-black' type='date'></input>
                  </div>
                </div>
              </form>
              </AccordionDetails>
            </Accordion>
            </div>          
       </div>
    </div>
  )
}

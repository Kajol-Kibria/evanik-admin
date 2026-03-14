import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Image from 'next/image';
import CustomRadio from '../common/CustomRadio'
import IconButton from '../common/IconButton'
import CustomTooltip from '../common/Tooltip'
import AttachFile from '../common/AttachFile';
import { LuPlus } from "react-icons/lu";
import { RiDeleteBin7Line } from "react-icons/ri";
import CustomSlideCheck from '../common/CustomSlideCheck';

export default function AddManually() {
  const [addDes, setAddDes] = useState(false);
  const [upType, setUpType] = useState(true);
  const [gstTax, setGstTax] = useState();
  const [productStatus, setProductStatus] = useState('');
  return (
    <div>
      <Accordion className='shd'  defaultExpanded>
        <AccordionSummary
        className='text-blue text-lg font-semibold px-8'
        expandIcon={<ExpandMoreIcon />}>
       Basic Info
        </AccordionSummary>
        <AccordionDetails className='py-3 px-9'>
          <div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <div className="relative z-0 mb-5 group text-black">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  SKU
                  </label>
              </div>
              <div className="relative z-0 mb-5 group text-black">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Product Title
                  </label>
              </div>
                <div className="relative z-0 mb-5 group text-black">
                  <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
              
                  <option>Category</option>
                  <option>vendor one</option>
                  <option>vendor two</option>
                  <option>vendor three</option>
                  
                  </select>
                  <label className="flex  gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                 <CustomTooltip txt={'Tooltip text'}><CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip></CustomTooltip>
                 Category
                  </label>
                  
              </div>
                <div className="relative z-0 mb-5 group text-black">
                  <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                  <option>Sub-Category</option>
                  <option>Branch one</option>
                  <option>Branch two</option>
                  <option>Branch three</option>
                  </select>
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Sub-Category
                  </label>
              </div>
                <div className="relative z-0 mb-5 group text-black">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Brand
                  </label>
              </div>
              <div className="relative z-0 mb-5 group text-black">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Accounting SKU
                  </label>
              </div>
            </div>
            <div>
              <button onClick={()=>setAddDes(true)} className={`${addDes?'hidden':'block'} text-sm font-medium text-blue`}>+ Add Description (Optional)</button>
              <div className={`${addDes?'block':'hidden'} mt-4 relative z-0 mb-5 group text-black`}>
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Description
                  </label>
              </div>
            </div>
            <div className='sm:flex items-center justify-between'>
            <div className='flex gap-1 text-sm pt-4 pb-1'>
                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                Upload Bulk
            </div>
            <div>
              <button onClick={()=>setUpType(true)} className='mr-3 mt-2 sm:mt-0'><CustomRadio id={'Manual Upload'} txt={'Manual Upload'}/></button>
              <button onClick={()=>setUpType(false)}><CustomRadio id={'Upload Via Link'} txt={'Upload Via Link'}/></button>
            </div>
            </div>
            <div className={`${upType?'block':'hidden'}`}>
            <AttachFile/>
            </div>
            <div className={`${upType?'hidden':'block'}`}>
            <div className={`mt-4 relative z-0 mb-5 group text-black`}>
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Upload Via Link
                  </label>
              </div>
            </div>
          </div>
          <div>
            <p className='text-blue text-lg font-semibold my-4'>Other Info</p>
            <div className='sm:flex items-baseline gap-4'>
            <div className="sm:w-1/3 relative z-0 mb-5 group text-black">
                  <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                  <option>Select UOM</option>
                  <option>Branch one</option>
                  <option>Branch two</option>
                  <option>Branch three</option>
                  </select>
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  UOM
                  </label>
              </div>
              <div className={`sm:w-1/3 mt-4 relative z-0 mb-5 group text-black`}>
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Colour
                  </label>
              </div>
              <div className={`sm:w-1/3 mt-4 relative z-0 mb-5 group text-black`}>
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Size
                  </label>
              </div>
            </div>
            <div className='sm:flex items-center justify-between'>
            <div className={`sm:w-[42%] mt-4 relative z-0 mb-5 group text-black`}>
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Size
                  </label>
              </div>
              <div className={`sm:w-[42%] mt-4 relative z-0 mb-5 group text-black`}>
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Size
                  </label>
              </div>
                <button className='border h-10 w-10 flex items-center justify-center rounded-full'><LuPlus size={22}/></button>
            </div>
            <div>
            <p className='text-blue text-lg font-semibold my-4'>Size Info</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 2xl:gap-4 items-center justify-between'>
              <div className='flex items-baseline justify-center'>
                  <div className="relative z-0 mb-5 group text-black">
                      <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                      <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                      Weight
                      </label>
                  </div>
                  <select className='border-b border-gray-700/40 py-3 outline-none'>
                    <option>gm</option>
                    <option>kg</option>
                  </select>
              </div>
              <div className=' flex items-baseline justify-center'>
                  <div className="relative z-0 mb-5 group text-black">
                      <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                      <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                      Length
                      </label>
                  </div>
                  <select className='border-b border-gray-700/40 py-3 outline-none'>
                    <option>cm</option>
                    <option>in</option>
                    <option>mm</option>
                    <option>mtr</option>
                  </select>
              </div>
              <div className=' flex items-baseline justify-center'>
                  <div className="relative z-0 mb-5 group text-black">
                      <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                      <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                      Width
                      </label>
                  </div>
                  <select className='border-b border-gray-700/40 py-3 outline-none'>
                    <option>cm</option>
                    <option>in</option>
                    <option>mm</option>
                    <option>mtr</option>
                  </select>
              </div>
              <div className=' flex items-baseline justify-center'>
                  <div className="relative z-0 mb-5 group text-black">
                      <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                      <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                      Height
                      </label>
                  </div>
                  <select className='border-b border-gray-700/40 py-3 outline-none'>
                    <option>cm</option>
                    <option>in</option>
                    <option>mm</option>
                    <option>mtr</option>
                  </select>
              </div>
            </div>
            </div>
            <div className='py-4'>
              <p className='text-blue text-lg font-semibold my-4'>GST Tax Group</p>
            <div className='flex justify-between gap-2'>
              <button onClick={()=>setGstTax(0)} className={`${gstTax == 0 ?'border-blue text-blue bg-blue/10':'border-[#e0e1ff]'} w-full border py-1.5 text-xs font-semibold rounded-xl text-center hover:border-blue hover:text-blue hover:bg-blue/10 transition-all duration-200`}>0</button>
              <button onClick={()=>setGstTax(3)} className={`${gstTax == 3 ?'border-blue text-blue bg-blue/10':'border-[#e0e1ff]'} w-full border py-1.5 text-xs font-semibold rounded-xl text-center hover:border-blue hover:text-blue hover:bg-blue/10 transition-all duration-200`}>3</button>
              <button onClick={()=>setGstTax(5)} className={`${gstTax == 5 ?'border-blue text-blue bg-blue/10':'border-[#e0e1ff]'} w-full border py-1.5 text-xs font-semibold rounded-xl text-center hover:border-blue hover:text-blue hover:bg-blue/10 transition-all duration-200`}>5</button>
              <button onClick={()=>setGstTax(12)} className={`${gstTax == 12 ?'border-blue text-blue bg-blue/10':'border-[#e0e1ff]'} w-full border py-1.5 text-xs font-semibold rounded-xl text-center hover:border-blue hover:text-blue hover:bg-blue/10 transition-all duration-200`}>12</button>
              <button onClick={()=>setGstTax(18)} className={`${gstTax == 18 ?'border-blue text-blue bg-blue/10':'border-[#e0e1ff]'} w-full border py-1.5 text-xs font-semibold rounded-xl text-center hover:border-blue hover:text-blue hover:bg-blue/10 transition-all duration-200`}>18</button>
              <button onClick={()=>setGstTax(28)} className={`${gstTax == 28 ?'border-blue text-blue bg-blue/10':'border-[#e0e1ff]'} w-full border py-1.5 text-xs font-semibold rounded-xl text-center hover:border-blue hover:text-blue hover:bg-blue/10 transition-all duration-200`}>28</button>
            </div>
            </div>
            <div className='py-4'>
              <p className='text-blue text-lg font-semibold my-4'>HSN/UPC/EAN/Barcode Info</p>
              <div className='sm:flex justify-between gap-4'>
              <div className="sm:w-1/3 relative z-0 mb-5 group text-black">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  HSN
                  </label>
              </div>
              <div className="sm:w-1/3 relative z-0 mb-5 group text-black">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  UPC/EAN
                  </label>
              </div>
              <div className="sm:w-1/3 relative z-0 mb-5 group text-black">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Barcode
                  </label>
              </div>
              </div>
            </div>
            <div className='py-4'>
              <div className='flex items-center justify-between'>
              <p className='text-blue text-lg font-semibold my-4'>Currency</p>
              <button className='text-blue text-sm'>View Past History</button>
              </div>
              <div className='sm:flex justify-between gap-4'>
                <div className="sm:w-1/2 relative z-0 mb-5 group text-black">
                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                    COGS (Excl. GST)
                    </label>
                </div>
                <div className="sm:w-1/2 relative z-0 mb-5 group text-black">
                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                    Compare at price
                    </label>
                </div>
              </div>
              <div className='sm:flex items-end justify-between gap-4'>
                <div className='grid  sm:w-[40%]'>
                    <label className='flex gap-2 items-center text-sm'>
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        COGS Start Date
                    </label>
                    <input className='border-gray-700/40 border-b p-3 outline-none text-black' type='date'></input>
                </div>
                <div className='grid  sm:w-[40%]'>
                    <label className='flex gap-2 items-center text-sm'>
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        COGS End Date
                    </label>
                    <input className='border-gray-700/40 border-b p-3 outline-none text-black' type='date'></input>
                </div>
                <button className='text-red-500 border h-10 w-10 flex items-center justify-center rounded-full'><RiDeleteBin7Line size={17}/></button>
                <button className='border h-10 w-10 flex items-center justify-center rounded-full'><LuPlus size={22}/></button>
              </div>
            </div>
            <div className='py-4'>
              <p className='text-blue text-lg font-semibold my-4'>Tracking Info</p>
              <div className='sm:flex items-center justify-between'>
                <div>
                    <div className='flex gap-2 items-center text-sm'>
                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                      Batch / Lot Tracking
                    </div>
                    <div className='flex items-center gap-3 my-2'><CustomSlideCheck/><p>No</p></div>     
                </div>
                <div>
                    <div className='flex gap-2 items-center text-sm'>
                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                      Serial / Tracking
                    </div>
                    <div className='flex items-center gap-3 my-2'><CustomSlideCheck/><p>No</p></div>     
                </div>
                <div>
                    <div className='flex gap-2 items-center text-sm'>
                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                      Expiry Date Tracking
                    </div>
                    <div className='flex items-center gap-3 my-2'><CustomSlideCheck/><p>No</p></div>     
                </div>
              </div>
            </div>
            <div className='py-4'>
            <p className='text-blue text-lg font-semibold my-4'>Product Alert</p>
            <div className='sm:flex justify-between gap-4'>
                <div className="sm:w-1/2 relative z-0 mb-5 group text-black">
                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                    Reorder Level
                    </label>
                </div>
                <div className="sm:w-1/2 relative z-0 mb-5 group text-black">
                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                    Reorder quantity
                    </label>
                </div>
              </div>
            </div>
            <div  className='py-4'>
              <p className='text-blue text-lg font-semibold my-4'>Set Product Status</p>
            <div className='flex justify-between gap-2'>
              <button onClick={()=>setProductStatus('Pending')} className={`${productStatus == 'Pending' ?'border-blue text-blue bg-blue/10':'border-[#e0e1ff]'} w-full border py-1.5 text-xs font-semibold rounded-xl text-center hover:border-blue hover:text-blue hover:bg-blue/10 transition-all duration-200`}>Pending</button>
              <button onClick={()=>setProductStatus('Inactive')} className={`${productStatus == 'Inactive' ?'border-blue text-blue bg-blue/10':'border-[#e0e1ff]'} w-full border py-1.5 text-xs font-semibold rounded-xl text-center hover:border-blue hover:text-blue hover:bg-blue/10 transition-all duration-200`}>Inactive</button>
              <button onClick={()=>setProductStatus('Active')} className={`${productStatus == 'Active' ?'border-blue text-blue bg-blue/10':'border-[#e0e1ff]'} w-full border py-1.5 text-xs font-semibold rounded-xl text-center hover:border-blue hover:text-blue hover:bg-blue/10 transition-all duration-200`}>Active</button>
            </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

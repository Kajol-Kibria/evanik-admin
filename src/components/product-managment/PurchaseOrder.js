'use client'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import Button from '@mui/material/Button';
import Image from 'next/image';
import IconButton from '../common/IconButton';
import CustomRadio from '../common/CustomRadio';
import CustomTooltip from '../common/Tooltip';
import TransactionTable from './TransactionTable';
import { getdata, getLength } from '../../alldatafiles/transactiondata';
import Subtotal from './Subtotal';
import AttachFile from '../common/AttachFile';

export default function PurchaseOrder() {


  const [limit, setLimit] = React.useState(7);
        const [page, setPage] = React.useState(1);
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
        <div>
          <div>
            
      <Accordion className='border-blue/20  border-t border-x shadow-none'  defaultExpanded>
        <AccordionSummary
        className='text-blue text-lg font-semibold px-8'
        expandIcon={<ExpandMoreIcon />}>
       Basic Info
        </AccordionSummary>
        <AccordionDetails className='py-3'>
          <div>
            <div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                  <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
              
                  <option>Select a vendor</option>
                  <option>vendor one</option>
                  <option>vendor two</option>
                  <option>vendor three</option>
                  
                  </select>
                  <label className="flex  gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                 <CustomTooltip txt={'Tooltip text'}><CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip></CustomTooltip>
                  <p>Vendor Name <span className='text-red-500'>*</span></p>
                  </label>
                  
              </div>
                <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                  <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                  <option>Select a Branch</option>
                  <option>Branch one</option>
                  <option>Branch two</option>
                  <option>Branch three</option>
                  </select>
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  <p>Branch<span className='text-red-500'> *</span></p>
                  </label>
              </div>
                <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Reference#
                  </label>
              </div>
              <div className='flex justify-between items-center'>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Purchase Order#<span className='text-red-500'> *</span>
                  </label>
              </div>
              <div className='px-3'>
                  <IconButton svg={<Image width={17} height={17} src='/images/icon-settings.svg' alt='hello'/>}/>
              </div>
              </div>
              </div>

            <div>
              <div>
              <div className='flex gap-1 text-sm my-4'>
              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
              Delivery Address<span className='text-red-500'> *</span>
              </div>
              <div className='flex items-center gap-5'>
              <CustomRadio id={'Organization'} txt={'Organization'}/>
              <CustomRadio id={'Customer'} txt={'Customer'}/>
              </div>
              </div>
              <div className='my-4'>
              <div className='flex gap-1 text-sm '>
              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
              Organization Address
              </div>
              <textarea className='border-gray-700/40 border-b w-full outline-none h-10'/>
              </div>
            </div>


            <div className='sm:flex gap-20 sm:w-[95%] justify-between'>
            <div className="relative sm:w-1/2  z-0  mb-5 group">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Organization Contact
                  </label>
              </div>
              <div className="relative sm:w-1/2   z-0  mb-5 group">
                  <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Organization Name
                  </label>
              </div>
            </div>


            <div>
              <button className='text-blue font-medium'>Change destination to deliver</button>
              <div className='grid sm:grid-cols-2 gap-4 my-4'>
                {/* date pickers */}
                <div className='grid  sm:w-[90%]'>
                <label className='flex gap-2 items-center text-sm'>
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Date
                </label>
                <input className='border-gray-700/40 border-b p-3 outline-none text-black' type='date'></input>
                </div>
                <div className='grid  sm:w-[90%]'>
                <label className='flex gap-2 items-center text-sm'>
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Expected Delivery Date
                </label>
                <input className='border-gray-700/40 border-b p-3 outline-none text-black' type='date'></input>
                </div>
                <div className="relative z-0  sm:w-[90%] my-5 group">
                  <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                  <option>Due on Reciept</option>
                  <option> one</option>
                  <option> two</option>
                  <option> three</option>
                  </select>
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Payment Terms
                  </label>
              </div>
              <div className='flex justify-between items-center'>
                <div className="relative z-0 w-full my-5 group">
                <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                  <option>Select a CRM Owner</option>
                  <option> one</option>
                  <option> two</option>
                  <option> three</option>
                  </select>
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  CRM Owner
                  </label>
              </div>
              <div className='px-3'>
                  <IconButton svg={<Image width={17} height={17} src='/images/icon-settings.svg' alt='hello'/>}/>
              </div>
              </div>
              <div className="relative z-0  sm:w-[90%] my-5 group">
                  <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                  <option>Choose shipment preference or type to add</option>
                  <option>one</option>
                  <option>two</option>
                  <option>three</option>
                  </select>
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                  Shipment Preference
                  </label>
              </div>
              </div>
              <div className='flex items-center gap-2'>
              <input
            id="checkbox"
            type="checkbox"
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"/>
            <label className='text-sm font-medium'>This transaction is applicable for reverse charge</label>
            </div>
            </div>

            </div>
          </div>
        </AccordionDetails>
      </Accordion>
          </div>
      <div>

      <Accordion className='border-blue/20 border-b border-x shadow-none'  defaultExpanded>
        <AccordionSummary
        className='text-blue text-lg font-semibold px-8'
        expandIcon={<ExpandMoreIcon />}>
       At Transaction Level
        </AccordionSummary>
        <AccordionDetails>
          
          <div>
            <div className='flex items-center justify-between my-2'>
              <p className='text-lg font-semibold'>Item</p>
              <button className='buttonBlue w-32 shadow-lg'>Bulk Action</button>
            </div>
            <TransactionTable dataArray={dataArray}/>
          </div>

          <div className='sm:flex gap-5 my-6'>
            <div className='sm:w-1/3'>
            <Subtotal/>
            </div>
            <div className='sm:w-2/3'>
              <div className='flex gap-1 text-sm '>
              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
              Customer Notes
              </div>
              <textarea placeholder='Your note here' className='w-full h-full px-5 py-3 border rounded-md border-blue/30  outline-none '/>
              </div>
          </div>
          
         <AttachFile/>
         
              <div className='flex gap-1 text-sm pt-5 pb-1'>
              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
              Customer Notes
              </div>
              <textarea placeholder='Your note here' className='w-full h-full px-5 py-3 border rounded-md border-blue/30  outline-none '/>
              

        </AccordionDetails>
      </Accordion>
          </div>
      
      
    </div>
    </div>
  )
}


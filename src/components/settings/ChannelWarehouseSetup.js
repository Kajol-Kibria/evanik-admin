import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RiPencilLine } from "react-icons/ri";
export default function ChannelWarehouseSetup() {
  return (
    <div>
      <p className='font-semibold text-blue my-4'>Channel Warehouse setup</p>
      <div className='my-4'>
       <Accordion className='shd '>
              <AccordionSummary
              className=' text-blue font-semibold py-0 border '
              expandIcon={<ExpandMoreIcon />}>
              <p>amazon:</p>
              <span className='px-2 text-gray-500 font-medium'> 18 Warehouses</span>
              </AccordionSummary>
              <AccordionDetails className='space-y-8'>
              <form className='sm:flex items-center justify-between'>
                  <p className='font-semibold text-sm'>Nature Vit-(YNOF)</p>
                  <div className='sm:flex items-center gap-5'>
                  <div className='flex flex-col sm:flex-row sm:items-center my-3 sm:my-0'>
                    <label className='text-xs  mr-2'>Pincode:</label>
                    <input type='text' className='py-1 text-sm border-b border-gray-400 outline-none font-semibold text-blue' placeholder='Type location'/>
                  </div>
                  <div className='flex flex-col sm:flex-row sm:items-center my-3 sm:my-0'>
                    <label className='text-xs  mr-2'>Enter Location:</label>
                    <input type='text' className='py-1 text-sm border-b border-gray-400 outline-none font-semibold text-blue' placeholder='Type location'/>
                  </div>
                  <button className='text-gray-500 pr-2'><RiPencilLine size={20}/></button>
                  </div>
                </form>
              </AccordionDetails>
            </Accordion>
            </div>
            <div className='my-4'>
             <Accordion className='shd'>
              <AccordionSummary
              className=' text-blue font-semibold py-0 border '
              expandIcon={<ExpandMoreIcon />}>
              <p>amazon:</p>
              <span className='px-2 text-gray-500 font-medium'> 18 Warehouses</span>
              </AccordionSummary>
              <AccordionDetails className='space-y-8'>
                <form className='sm:flex items-center justify-between'>
                  <p className='font-semibold text-sm'>Nature Vit-(YNOF)</p>
                  <div className='sm:flex items-center gap-5'>
                  <div className='flex flex-col sm:flex-row sm:items-center my-3 sm:my-0'>
                    <label className='text-xs  mr-2'>Pincode:</label>
                    <input type='text' className='py-1 text-sm border-b border-gray-400 outline-none font-semibold text-blue' placeholder='Type location'/>
                  </div>
                  <div className='flex flex-col sm:flex-row sm:items-center my-3 sm:my-0'>
                    <label className='text-xs  mr-2'>Enter Location:</label>
                    <input type='text' className='py-1 text-sm border-b border-gray-400 outline-none font-semibold text-blue' placeholder='Type location'/>
                  </div>
                  <button className='text-gray-500 pr-2'><RiPencilLine size={20}/></button>
                  </div>
                </form>
                <form className='sm:flex items-center justify-between'>
                  <p className='font-semibold text-sm'>Nature Vit-(YNOF)</p>
                  <div className='sm:flex items-center gap-5'>
                  <div className='flex flex-col sm:flex-row sm:items-center my-3 sm:my-0'>
                    <label className='text-xs  mr-2'>Pincode:</label>
                    <input type='text' className='py-1 text-sm border-b border-gray-400 outline-none font-semibold text-blue' placeholder='Type location'/>
                  </div>
                  <div className='flex flex-col sm:flex-row sm:items-center my-3 sm:my-0'>
                    <label className='text-xs  mr-2'>Enter Location:</label>
                    <input type='text' className='py-1 text-sm border-b border-gray-400 outline-none font-semibold text-blue' placeholder='Type location'/>
                  </div>
                  <button className='text-gray-500 pr-2'><RiPencilLine size={20}/></button>
                  </div>
                </form>
              </AccordionDetails>
            </Accordion>
            </div>
    </div>
  )
}

import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RiPencilLine } from "react-icons/ri";
export default function TicketDetails() {
  return (
    <div className='sm:flex items-start gap-6'>
        <div className='sm:w-full shd rounded-lg px-5 py-4'>
        <div>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-xs text-gray-700 py-[3px]'>Reference ID:</p>
                        <p>IN24081222192378952057</p>
                    </div>
                    <p className='text-[#AA791D] bg-[#fbf3e4] py-1 px-2 rounded-lg text-xs font-medium'>Pending Seller action</p>
                    {/* <p className={`${data.status==='Pending Seller action'?'text-[#AA791D] bg-[#fbf3e4]':'' || data.status==='Closed : No response from Seller'?'text-[#68698a] bg-[#e7e5f3]':'' || data.status==='Claim Approved'?'text-[#1f674f] bg-[#E7FBE4]':'' || data.status==='Not Approved'?'text-[#fd4539] bg-[#ffdddb]':''} py-1 px-2 rounded-lg text-xs font-medium`}>{data.status}</p> */}
                </div>
                <div className='py-2'>
                <p className='text-xs text-gray-700 py-[3px]'>Subject:</p>
                <p className='text-blue font-semibold '>There is a mismatch in my returns report</p>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <p className='text-xs text-gray-700 py-[3px]'>Creation Date</p>
                    <p>10:19 pm , 12 Aug 24</p>
                  </div>
                  <div>
                    <p className='text-xs text-gray-700 py-[3px]'>Last Updated Date</p>
                    <p>2:23 pm, 13 Aug 24</p>
                  </div>
                  <div>
                    <p className='text-xs text-gray-700 py-[3px]'>Issue</p>
                    <p>Order Processing Related</p>
                  </div>
                  <div>
                    <p className='text-xs text-gray-700 py-[3px]'>Sub Issue</p>
                    <p>Returns</p>
                  </div>
                  <div>
                    <p className='text-xs text-gray-700 py-[3px]'>Expected Resolution Time:</p>
                    <p>11:59 pm , Saturday, Aug 17 2024</p>
                  </div>
                </div>
            </div>
            <hr className='my-7'/>
            <div className='space-y-4'>
            <div className='sm:flex items-start justify-between'>
                <p className='text-blue font-semibold '>Latest Reply</p>
                <p className='text-[12px] font-medium text-gray-600'>From: Agent | 02:23 pm , Tuesday, Aug 13 2024</p>
            </div>
            <p>Dear Seller,</p>
            <p>We acknowledge your query regarding the mismatch in the return report.</p>
            <p>We regret for the inconvenience caused to you.Once you write back to us with the requested information, we will proceed with this incident.</p>
            <p>Please note that the IN24081222192378952057 will be auto-closed within 3 days incase we do not receive a response from you.Warm Regards</p>
            <p>eVanik Support</p>
            </div>
        </div>
        <div className='sm:min-w-[425px] shd rounded-lg px-5 py-4 my-4 sm:my-0'>
        <p className='text-lg text-blue font-semibold'>Previous Tickets Sessions</p>
        <div className='my-4'>
            <Accordion defaultExpanded className='py-1 shadow-none border border-[#e0e1ff] bg-[#fcfeff] '>
              <AccordionSummary
              className='py-0 border '
              expandIcon={<ExpandMoreIcon />}>
                <div className='w-full text-gray-600 flex items-center justify-between'>
                    <p className='font-semibold'>Auto Response</p>
                    <p className='text-[12px] font-medium mx-2'>10:19 pm, Monday, Aug 12 2024</p>
                </div>
              </AccordionSummary>
              <AccordionDetails className='space-y-8'>
              <p className='text-[13px] w-[345px] text-black'>Hi, Thanks for writing in! We have noted your query and the expected time for resolution is 11:59 pm, Saturday, Aug 17 2024. For future reference, do use this incident number IN24081222192378952057.In case we require any further information to resolve your query, we will reach out to you in 24 hours.Warm RegardseVanik Seller Support</p>
              </AccordionDetails>
            </Accordion>
        </div>
        <div className='my-4'>
            <Accordion className='py-1 shadow-none border border-[#e0e1ff] bg-[#fcfeff] '>
              <AccordionSummary
              className='py-0 border '
              expandIcon={<ExpandMoreIcon />}>
                <div className='w-full text-gray-600 flex items-center justify-between'>
                    <p className='font-semibold'>From : Seller</p>
                    <p className='text-[12px] font-medium mx-2'>10:19 pm, Monday, Aug 12 2024</p>
                </div>
              </AccordionSummary>
              <AccordionDetails className='space-y-8'>
              <p className='text-[13px] w-[345px] text-black'>Hi, Thanks for writing in! We have noted your query and the expected time for resolution is 11:59 pm, Saturday, Aug 17 2024. For future reference, do use this incident number IN24081222192378952057.In case we require any further information to resolve your query, we will reach out to you in 24 hours.Warm RegardseVanik Seller Support</p>
              </AccordionDetails>
            </Accordion>
        </div>
        <div className='my-4'>
            <Accordion className='py-1 shadow-none border border-[#e0e1ff] bg-[#fcfeff] '>
              <AccordionSummary
              className='py-0 border '
              expandIcon={<ExpandMoreIcon />}>
                <div className='w-full text-gray-600 flex items-center justify-between'>
                    <p className='font-semibold'>From : Seller</p>
                    <p className='text-[12px] font-medium mx-2'>10:19 pm, Monday, Aug 12 2024</p>
                </div>
              </AccordionSummary>
              <AccordionDetails className='space-y-8'>
              <p className='text-[13px] w-[345px] text-black'>Hi, Thanks for writing in! We have noted your query and the expected time for resolution is 11:59 pm, Saturday, Aug 17 2024. For future reference, do use this incident number IN24081222192378952057.In case we require any further information to resolve your query, we will reach out to you in 24 hours.Warm RegardseVanik Seller Support</p>
              </AccordionDetails>
            </Accordion>
        </div>
      </div>
    </div>
  )
}

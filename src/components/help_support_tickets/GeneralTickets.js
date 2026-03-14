'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import { IoIosSearch } from 'react-icons/io';
import { getdata, getLength } from '../../../alldatafiles/GeneralTicketsdata';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CreateTicket from './CreateTicket';
export default function GeneralTickets() {
        const [limit, setLimit] = useState(7);
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
        const [value1, setValue1] = useState('Issue Type')
        const [value2, setValue2] = useState('Sub Issue Type')
        const [value3, setValue3] = useState('Status')
  return (
    <div>
    <div className='sm:flex justify-between items-center gap-4'>
        <div className='sm:flex items-center gap-4'>
        <div className='sm:flex gap-4 space-y-2 sm:space-y-0'>
            <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
            <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
            <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
        </div>
        <div className='sm:flex gap-8 my-4 sm:my-0'>
            <div className='flex items-center mt-4 sm:mt-0'>
                <input className='pl-5 pr-14 w-full sm:w-52 border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='Creation Date'/>
                <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
            </div>
            <div className='flex items-center mt-4 sm:mt-0'>
                <input className='pl-5 pr-14 w-full sm:w-52  border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='Reference ID'/>
                <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
            </div>      
        </div>
        </div>
        <div>
            <Dialog>
              <DialogTrigger>
              <p className='blueButton'>Create Ticket</p>
              </DialogTrigger>
              <DialogContent className=' overflow-auto max-h-[90vh]'>
                <DialogHeader>
                  <DialogTitle>
                    <p className='text-blue text-2xl mb-3'>Create New Ticket</p>
                  </DialogTitle>
                  <CreateTicket/>
                  <span className='flex items-center justify-end gap-5 mt-8'>
                  <DialogTrigger><div className='buttonBlue w-28'>Cancel</div></DialogTrigger>
                  <DialogTrigger><div className='blueButton w-28'>Create</div></DialogTrigger>
                  </span>
                  
                </DialogHeader>
              </DialogContent>
            </Dialog>
            
        </div>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 my-4'>
        {dataArray.map((data)=>(
            <div key={data.ID} className='p-5 shd rounded-lg'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-xs text-gray-700 py-[3px]'>Reference ID:</p>
                        <p>{data.referenceId}</p>
                    </div>
                    <p className={`${data.status==='Pending Seller action'?'text-[#AA791D] bg-[#fbf3e4]':'' || data.status==='Closed : No response from Seller'?'text-[#68698a] bg-[#e7e5f3]':'' || data.status==='Claim Approved'?'text-[#1f674f] bg-[#E7FBE4]':'' || data.status==='Not Approved'?'text-[#fd4539] bg-[#ffdddb]':''} py-1 px-2 rounded-lg text-xs font-medium`}>{data.status}</p>
                </div>
                <p className='text-blue font-semibold py-2'>{data.title}</p>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <p className='text-xs text-gray-700 py-[3px]'>Issue</p>
                    <p>{data.issue}</p>
                  </div>
                  <div>
                    <p className='text-xs text-gray-700 py-[3px]'>Creation Date</p>
                    <p>{data.creationDate}</p>
                  </div>
                  <div>
                    <p className='text-xs text-gray-700 py-[3px]'>Sub Issue</p>
                    <p>{data.subIssue}</p>
                  </div>
                  <div>
                    <p className='text-xs text-gray-700 py-[3px]'>Last Updated Date</p>
                    <p>{data.lastUpdatedDate}</p>
                  </div>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

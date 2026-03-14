'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { IoIosSearch } from 'react-icons/io';
import Image from '../../../node_modules/next/image'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'
import DropButton from '../common/DropButton'

export default function CommissionReconciliationButtons() {
    const [value1, setValue1] = useState('1mg')
    const [value2, setValue2] = useState('Store Name')
  return (
    <div>
    <div className='flex items-center justify-between mb-5'>
        <p className="my-4 sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
        Commission Reconciliation
        </p>
        <div className='flex items-center gap-4'>
           <button className='min-w-10 min-h-10 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
            <Dialog>
              <DialogTrigger>
                <p className='blueButton'>Update Commission</p>
              </DialogTrigger>
              <DialogContent className=' overflow-auto max-h-[90vh]'>
                <DialogHeader>
                    <DialogTitle>
                      <p className='text-blue text-2xl mb-3'>Enter Commission for Sales Periods</p>
                    </DialogTitle>
                    Commission
                    <span className='flex items-center justify-end gap-5 pt-10'>
                      <DialogTrigger><div className='buttonBlue w-28'>Cancel</div></DialogTrigger>
                      <DialogTrigger><div className='blueButton w-28'>Save Commission</div></DialogTrigger>
                    </span>
                </DialogHeader>
              </DialogContent>
            </Dialog>
        </div>
      </div>
      <div className='sm:flex items-center gap-4'>
                <div className='sm:flex gap-4 space-y-2 sm:space-y-0'>
                    <CustomDateRangePicker/>
                    <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center mt-4 sm:mt-0 mr-5'>
                        <input className='pl-5 pr-14 w-full sm:w-auto border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='Search Order ID/ SKU with respective date'/>
                        <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                    </div>
                </div>

        </div>
    </div>
  )
}

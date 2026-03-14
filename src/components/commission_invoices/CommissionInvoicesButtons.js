'use client'
import React, { useState } from 'react'
import Image from '../../../node_modules/next/image'
import { IoIosSearch } from 'react-icons/io';
import DropButton from '../common/DropButton';
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker';
import Select from 'react-select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import InvoiceDetails from './InvoiceDetails';
import CustomSelect from '../common/CustomSelect';
export default function CommissionInvoicesButtons() {

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
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c] my-7'>Commission Invoices</p>
        <div className='sm:flex items-start justify-between'>
            <div className='sm:flex items-start gap-4'>
            <div className='sm:flex items-start gap-4 my-4 sm:my-0 space-y-4 sm:space-y-0'>
                <CustomDateRangePicker/>
                <CustomSelect options={aquaticCreatures}/>
                <CustomSelect options={aquaticCreatures}/>
                </div>
                <div className='flex items-center mt-4 sm:mt-0 sm:mr-5'>
                    <input className='pl-5 pr-14 w-full sm:w-auto border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='Search'/>
                    <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                </div>
            </div>
            <div className='flex items-center gap-4 my-4 sm:my-0'>
                <button className='w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
                <button className='w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-upload.svg' alt='' width={15} height={15}/></button>            
                <Dialog>
                    <DialogTrigger>
                    <span className='w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-plus.svg' alt='' width={15} height={15}/></span>            
                    </DialogTrigger>
                    <DialogContent className=' overflow-auto max-h-[90vh]'>
                        <DialogHeader>
                    <DialogTitle>
                      <p className='text-blue text-2xl mb-3'>Invoice Details</p>
                    </DialogTitle>
                    <InvoiceDetails/>
                    <span className='flex items-center justify-end gap-5 pt-10'>
                      <DialogTrigger><div className='buttonBlue w-28'>Close</div></DialogTrigger>
                      <DialogTrigger><div className='blueButton w-28'>Add</div></DialogTrigger>
                    </span>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            </div>
        </div>
    </div>
  )
}

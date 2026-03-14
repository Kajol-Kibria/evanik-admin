'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UpdateWeightages from './UpdateWeightages';
import Image from '../../../node_modules/next/image';
import Select from 'react-select';
import CustomSelect from '../common/CustomSelect';


export default function InventoryPlanButtons() {


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
      <div className='flex items-center justify-between'>
        <p className="my-4 sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
          Inventory Planning
        </p>
            <Dialog>
              <DialogTrigger>
                <p className='blueButton'>Update Weightages</p>
              </DialogTrigger>
              <DialogContent className=' overflow-auto max-h-[90vh]'>
                <DialogHeader>
                    <DialogTitle>
                      <p className='text-blue text-2xl mb-3'>Enter Weight for Sales Periods</p>
                    </DialogTitle>
                    <UpdateWeightages/>
                    <span className='flex items-center justify-end gap-5 pt-10'>
                      <DialogTrigger><div className='buttonBlue w-28'>Cancel</div></DialogTrigger>
                      <DialogTrigger><div className='blueButton w-28'>Save Weight</div></DialogTrigger>
                    </span>
                </DialogHeader>
              </DialogContent>
            </Dialog>
      </div>
      <div className='sm:flex gap-2 items-center my-4'>
        <CustomSelect options={aquaticCreatures}/>
        <CustomSelect options={aquaticCreatures}/>
        <input className='mt-4 sm:mt-0 w-full sm:w-auto outline-none border-blue/30 border-2 px-4 rounded-xl py-1.5 placeholder:text-sm placeholder:font-thin placeholder:text-gray-700' placeholder='Search'/>
        <button className='min-w-10 min-h-10 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
      </div>
    </div>
  )
}

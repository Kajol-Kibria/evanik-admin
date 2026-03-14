import React from 'react'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'
import Select from 'react-select';
import Image from '../../../node_modules/next/image';
import CustomSelect from '../common/CustomSelect';
export default function TaxMisMatchedButtons() {
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
      <div className='sm:flex items-center justify-between py-5'>
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Tax Rate Reconciliation</p>
        <div className='flex items-center gap-4 my-4 sm:my-0'>
          <button className='min-w-10 min-h-10 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
          <button className='min-w-10 min-h-10 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-upload.svg' alt='' width={15} height={15}/></button>
        </div> 
      </div>
        <div className='sm:flex items-start gap-4 space-y-2 sm:space-y-0 my-5'>
          <CustomDateRangePicker/>
          <CustomSelect options={aquaticCreatures}/>
        </div>
    </div>
  )
}

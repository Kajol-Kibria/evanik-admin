'use client'
import React from 'react'
import PurchaseTable from './PurchaseTable'
import { getdata, getLength } from '../../alldatafiles/Purchasedata';
import Pagination from '../common/Pagination';

export default function PurchaseList() {


      const [limit, setLimit] = React.useState(6);
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
        <div className='sm:flex gap-5  my-4'>
    <section className='w-full  p-4 rounded-lg bg-[#F3F4FB] '>
      <span className='px-2 py-1 font-semibold text-sm mb-3 rounded bg-gray-500/20 text-gray-700'>
        ₹ 62,322
      </span>
      <div className='pt-3'>Total Outstanding Payables</div>
    </section>
    <section className='w-full  p-4 rounded-lg bg-[#FBF8E4] '>
      <span className='px-2 py-1 font-semibold text-sm mb-3 rounded bg-gray-500/20 text-gray-700'>
        ₹ 62,322
      </span>
      <div className='pt-3'>Due Today</div>
    </section>
    <section className='w-full  p-4 rounded-lg bg-[#F1F8F6] '>
      <span className='px-2 py-1 font-semibold text-sm mb-3 rounded bg-gray-500/20 text-gray-700'>
        ₹ 62,322
      </span>
      <div className='pt-3'>Due within 30 days</div>
    </section>
    <section className='w-full  p-4 rounded-lg bg-[#F5EFFA] '>
      <span className='px-2 py-1 font-semibold text-sm mb-3 rounded bg-gray-500/20 text-gray-700'>
        ₹ 62,322
      </span>
      <div className='pt-3'>Overdue Bills</div>
    </section>
  
  
</div>
        </div>

        <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
        <button className="text-[13px] shadow-xl w-28 border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-2  font-medium">Generate GRN</button>
        <button className="text-[13px] shadow-xl w-28 border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-2  font-medium">Delete Bulk</button>
        </div>
           
            <button className='blueButton'>Add New Purchase Order</button>
        </div>
        <div>
        <PurchaseTable dataArray={dataArray}/>
        <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}

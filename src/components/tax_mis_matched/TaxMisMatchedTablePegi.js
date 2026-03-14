'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination'
import { getdata , getLength} from '@/alldatafiles/taxratereconciliationdata';

export default function TaxMisMatchedTablePegi() {
                  const [limit, setLimit] = useState(5);
                  const [page, setPage] = useState(1);
                  let totalPage = Math.ceil(getLength() / limit);
                  function handlePageChange(value) {
                    if (value === "Previous") {
                      if (page !== 1) {
                        setPage(page - 1);
                      }
                    } else if (value === "Next") {
                      if (page !== totalPage) {
                        setPage(page + 1);
                      }
                    }
                  }
                
                  const dataArray = getdata(page, limit);
  return (
    <div>
<div>
        <div className='sm:h-[400px] w-full  mx-auto overflow-auto my-5'>
          <table className="w-[700px] sm:w-full">
          <thead className=''>
              <tr className='text-[13px] text-left font-semibold   text-gray-500'>
                  <th className='py-2'>Seller ID</th>
                  <th>SKU</th>
                  <th>Order Details</th>
                  <th>Tax on Channel</th>
                  <th>Tax: User Defined</th>
              </tr>
          </thead>
          <tbody>
              {dataArray.map((data, i)=>(
              <tr key={i} className='max-h-[54px] h-[54px] border-t text-sm text-black font-medium'>
                  <td className='py-2'>{data.sellerID}</td>
                  <td className=''>{data.sku}</td>
                  <td className=''>{data.orderdetails}</td>
                  <td className=''>{data.taxonchannel}</td>
                  <td className=''>{data.taxuserdefined}</td>
              </tr>
              ))}
          </tbody>
         </table>
    </div>
    <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
    </div>
  )
}
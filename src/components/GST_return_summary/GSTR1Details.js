'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination';
import { getdata , getLength} from '../../../alldatafiles/GSTR1Detailsdata';
import { IoIosSearch } from 'react-icons/io';
import Image from '../../../node_modules/next/image';
export default function GSTR1Details() {
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
  return (
    <div>
      <div className='sm:flex items-center justify-between'>
      <div className='grid grid-cols-2 sm:grid-cols-6 gap-5'>
        <div className='text-xs font-medium'>
          <p className='text-gray-500 mb-2'>Date Range</p>
          <p>1 Feb 2021 - 28 Feb 2021</p>
        </div>
        <div className='text-xs font-medium'>
          <p className='text-gray-500 mb-2'>Channel</p>
          <p>Amazon, Flipkart <span className='text-blue'> +2</span></p>
        </div>
        <div className='text-xs font-medium'>
          <p className='text-gray-500 mb-2'>Store</p>
          <p>BLR005, BLR <span className='text-blue'> +2</span></p>
        </div>
        <div className='text-xs font-medium'>
          <p className='text-gray-500 mb-2'>GST Type</p>
          <p>Inter State, Intra State</p>
        </div>
        <div className='text-xs font-medium'>
          <p className='text-gray-500 mb-2'>Registration Type</p>
          <p>B2B, B2C</p>
        </div>
        <div className='text-xs font-medium'>
          <p className='text-gray-500 mb-2'>Branch</p>
          <p>BLR-New-005</p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
      <div className='flex items-center mt-4 sm:mt-0 mr-5'>
          <input className='pl-5 pr-14 w-full sm:w-auto border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='search'/>
          <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
      </div>
      <button className='w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
      </div>
      </div>
        <div className='sm:h-[422px] w-full  mx-auto overflow-auto my-5'>
            <table className="w-[1200px] 2xl:w-full">
                  <thead>
                      <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                        <th className='py-2 w-[14%] pr-3'>Particulars</th>
                        <th className='w-[14%] pr-3'>Party Name</th>
                        <th className='w-[14%] pr-3'>GST Registration Type</th>
                        <th className='w-[6%] pr-3'>Voucher Count</th>
                        <th className='w-[6%] pr-3'>Taxable Amount</th>
                        <th className='w-[6%] pr-3'>IGST</th>
                        <th className='w-[6%] pr-3'>CGST</th>
                        <th className='w-[6%] pr-3'>SGST/UTGST</th>
                        <th className='w-[6%] pr-3'>Cess</th>
                        <th className='w-[6%] pr-3'>Tax Amount</th>
                        <th className='w-[6%] pr-3'>Invoice Amount</th>
                      </tr>
                  </thead>
                  <tbody>
                      {dataArray.map((data , i)=>(
                      <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={i}>
                        <td>{data.Particulars}</td>
                        <td>{data.PartyName}</td>
                        <td>{data.GSTRegistrationType}</td>
                        <td>{data.VoucherCount}</td>
                        <td>{data.TaxableAmount}</td>
                        <td>{data.IGST}</td>
                        <td>{data.CGST}</td>
                        <td>{data.SGSTUTGST}</td>
                        <td>{data.Cess}</td>
                        <td>{data.TaxAmount}</td>
                        <td>{data.InvoiceAmount}</td>
                      </tr>
                      ))}
                  </tbody>
                 </table>
            </div>
        <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}

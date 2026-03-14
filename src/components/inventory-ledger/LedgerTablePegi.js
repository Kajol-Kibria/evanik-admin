'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination';
import { getdata ,getLength} from '../../alldatafiles/ledgerdata';
export default function LedgerTablePegi() {
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
        <div>
                <div>
                      <div className='sm:h-[400px] w-full  mx-auto overflow-auto my-5'>
                    <table   className="  w-[1200px] sm:w-full">
                          <thead className=''>
                                   
                              <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                                 
                                  <th ><h1 className=''>Date</h1></th>
                                  <th ><h1 className=''>Master Sku code</h1></th>
                                  <th ><h1 className=''>SKU Code</h1></th>
                                  <th ><h1 className=''>Type</h1></th>
                                  <th ><h1 className=''>Initial Available</h1></th>
                                  <th ><h1 className=''>Add/Remove Quantity</h1></th>
                                  <th ><h1 className=''>Available Quantity</h1></th>
                                  <th ><h1 className=''>Remark</h1></th>
                                  
                              </tr>
                                  
                          </thead>
                          <tbody>
                              {dataArray.map((data,index)=>(
                
                              <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={index}>
                                  <td className=''>{data.Date}</td>
                                  <td className=''>{data.MasterSkucode}</td>
                                  <td className=''>{data.SKUCode}</td>
                                  <td className=''>{data.Type}</td>
                                  <td className=''>{data.InitialAvailable}</td>
                                  <td className=''>{data.AddRemoveQuantity}</td>
                                  <td className=''>{data.AvailableQuantity}</td>
                                  <td className=''>{data.Remark}</td>
                                  
                              </tr>
                              ))}
                          </tbody>
                         </table>
                    </div>
                    </div>
                    <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
            </div>
    </div>
  )
}

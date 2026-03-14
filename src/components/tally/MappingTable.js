'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination'

export default function MappingTable(props) {
          const [limit, setLimit] = useState(6);
                      const [page, setPage] = useState(1);
                       let totalPage = Math.ceil(props.getLength()/limit);
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
              
                        const dataArray = props.getdata(page, limit);
  return (
    <div>
      <div className='flex items-center justify-between'>
            <p className='text-[22px] font-medium'>Tally Company name</p>
            <div className='flex gap-3'>
            <button className='hover:border-blue cursor-pointer transition-all duration-300 w-10 h-10 flex items-center justify-center border rounded-full'>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M4.01397 2.81136C5.7378 1.31764 7.94315 0.496827 10.2241 0.500009C15.471 0.500009 19.7241 4.75316 19.7241 10C19.7241 12.0292 19.0876 13.9102 18.0046 15.453L14.9741 10H17.8241C17.8242 8.51004 17.3864 7.05292 16.565 5.8098C15.7437 4.56668 14.575 3.59241 13.2044 3.00812C11.8338 2.42384 10.3217 2.25532 8.85607 2.52352C7.39045 2.79172 6.036 3.48481 4.96112 4.51661L4.01397 2.81136ZM16.4343 17.1886C14.7104 18.6824 12.5051 19.5032 10.2241 19.5C4.97727 19.5 0.724121 15.2468 0.724121 10C0.724121 7.9708 1.36062 6.0898 2.44362 4.54701L5.47412 10H2.62412C2.624 11.49 3.06183 12.9471 3.88319 14.1902C4.70454 15.4333 5.87318 16.4076 7.24379 16.9919C8.61441 17.5762 10.1265 17.7447 11.5922 17.4765C13.0578 17.2083 14.4122 16.5152 15.4871 15.4834L16.4343 17.1886Z" fill="#68698A"></path>
            </svg>
            </button> 
            <button className='hover:border-blue cursor-pointer transition-all duration-300 w-10 h-10 flex items-center justify-center border rounded-full'>
            <svg width="18" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.20244 10.4268L3.94585 11.4359L10.4999 16.7002L17.0539 11.4367L15.7973 10.4276L11.3888 13.968V4.74537H9.61085V13.9674L5.20244 10.4268ZM18.4997 4.03139V2.1281L2.50011 2.12733V4.03062L0.722168 4.03139V0.700195H20.2777V4.03139H18.4997Z" fill="#68698A"></path>
            </svg>
            </button> 
            </div>
        </div>
    <div className=' w-full  mx-auto overflow-auto my-5'>
                                <table   className="  w-[1200px] sm:w-full">
                                      <thead >    
                                          <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                                              <th><h1 className='py-2'>Name</h1></th>
                                              <th><h1 >Type</h1></th>
                                              <th><h1 >Action</h1></th>
                                          </tr> 
                                      </thead>
                                      <tbody>
                                          {dataArray.map(data=>(
                                          <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={data.ID}>
                                         
                                              <td >{data.Name}</td>
                                              <td >{data.Type}</td>
                                              <td >
                                                <div className='flex items-center gap-4'>
                                                <button className='buttonBlue'>Create in Tally</button>
                                                <button className='blueButton w-24'>Map</button>
                                                </div>
                                              </td>
                                              
                                          </tr>
                                          ))}
                                      </tbody>
                                     </table>
                                </div>
                          
                          <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}

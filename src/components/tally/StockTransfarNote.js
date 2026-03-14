'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import { IoIosSearch } from 'react-icons/io'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'
import CustomRadio from '../common/CustomRadio'
import { getdata, getLength } from '../../../alldatafiles/StockTransfarNotedata'
import Pagination from '../common/Pagination'

export default function StockTransfarNote() {
  
          const [value1, setValue1] = useState('Channel')
          const [value2, setValue2] = useState('From Branch')
          const [value3, setValue3] = useState('From WH')
          const [value4, setValue4] = useState('To WH')
          
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
      <div className='2xl:flex gap-4'>
                    <div className='sm::flex gap-4'>
                            <div className='sm:flex gap-4'>
                            <input type='text' defaultValue={'Tallly Company name'} className='bg-gray-500/10 text-sm py-2 rounded-lg px-4 outline-none'/>
                            <div className='sm:flex gap-8 my-4 sm:my-0'>
                            <div className='flex items-center mt-4 sm:mt-0'>
                                <input className='pl-5 pr-14  w-52 border border-blue/20 outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='search'/>
                                <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                            </div>
                            <div className='flex items-center mr-4 mt-4 sm:mt-0'>
                                <input className='pl-5 pr-14  w-40  border border-blue/20 outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='Port'/>
                              <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                            </div>
                            
                          </div>
                        </div>           
                      </div>
                      <div className='flex scrollmenu gap-4 my-4 2xl:my-0'>
                                  <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                                  <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                                  <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                                  <DropButton state={value4} setState={setValue4} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                      </div>
         </div>
         <div className='my-4 2xl:flex items-center gap-4'>
          <div className='flex gap-4'>
         <button className="text-[13px] shadow-xl w-28 border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-2  font-medium">Bulk Action</button>
         <CustomDateRangePicker/>
          </div>
                          <div className='sm:flex items-center gap-4 text-sm font-medium text-gray-600 my-4 sm:my-0'>
                          <p>Data Type:</p>
                          <div className='sm:flex gap-4 items-center'>
                            <CustomRadio id={'Stock Transfer Note'} txt={'Stock Transfer Note'}/>
                            <CustomRadio id={'Stock Transfer Note Same WH'} txt={'Stock Transfer Note Same WH'}/>
                            <button className='blueButton sm:w-28 w-full my-4 sm:my-0'>Search</button>
                          </div>
                          </div>
         </div>

                <div className=' w-full  mx-auto overflow-auto my-5'>
                      <table   className="  w-[1200px] sm:w-full">
                            <thead >
                                     
                                <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                                  <th>
                                  <input
                                    id={'all'}
                                    type="checkbox"
                                    value=""
                                    className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
                                  />                                   
                                  </th>
                                    <th><h1 >Invoice No.</h1></th>
                                    <th><h1 >Invoice Date</h1></th>
                                    <th><h1 >SKU</h1></th>
                                    <th><h1 className='px-2 py-2'>QTY</h1></th>
                                    <th><h1 className='px-2'>Rate</h1></th>
                                    <th><h1 className='px-2'>Total</h1></th>
                                    <th><h1 >Sales ledger Name</h1></th>
                                    <th><h1 >Purchase Ledger Name</h1></th>
                                </tr> 
                            </thead>
                            <tbody>
                                {dataArray.map(data=>(
                  
                                <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={data.ID}>
                                    <td>
                                    <input
                                    id={data.ID}
                                    type="checkbox"
                                    value=""
                                    className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg "
                                    />                                   
                                    </td>
                                    <td >{data.InvoiceNo}</td>
                                    <td >{data.InvoiceDate}</td>
                                    <td >{data.SKU}</td>
                                    <td className='px-3 '>{data.QTY}</td>
                                    <td className='px-3'>{data.Rate}</td>
                                    <td className='px-3'>{data.Total}</td>
                                    <td >{data.SalesledgerName}</td>
                                    <td >{data.PurchaseLedgerName}</td>
                                </tr>
                                ))}
                            </tbody>
                           </table>
                      </div>
                
                <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}

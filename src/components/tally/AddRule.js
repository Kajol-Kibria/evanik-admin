'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import Pagination from '../common/Pagination'
import { getdata, getLength } from '../../../alldatafiles/AddRuledata'

export default function AddRule() {
  
            const [value1, setValue1] = useState('Channel')
            const [value2, setValue2] = useState('Rule Type')
            const [value3, setValue3] = useState('Rule')
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
      <div className='sm:flex justify-between items-center gap-4'>
      <div className='flex gap-4 my-4 sm:my-0'>
                                  <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                                  <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                                  <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
      </div>
      <button className='blueButton sm:w-28 w-full my-4 sm:my-0'>Add</button>
      </div>
      <div className=' w-full  mx-auto overflow-auto my-5'>
                            <table   className="  w-[1200px] sm:w-full">
                                  <thead >
                                           
                                      <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                                       
                                          <th><h1 className='py-2'>Rule Type</h1></th>
                                          <th><h1 >Rule</h1></th>
                                          <th><h1 >Channel(s)</h1></th>
                                      </tr> 
                                  </thead>
                                  <tbody>
                                      {dataArray.map(data=>(
                                      <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={data.ID}>
                                     
                                          <td >{data.RuleType}</td>
                                          <td >
                                            <select className='sm:w-80 text-blue outline-none py-5'>
                                              <option>As per channel monthly tax reports</option>
                                              <option>As per channel monthly tax reports</option>
                                              <option>As per channel monthly tax reports</option>
                                            </select>
                                          </td>
                                          <td >
                                            <div className='flex items-center gap-2'>
                                            {data.Channels.map((i)=>{
                                              return(
                                                <div key={i} className='w-10 h-10 content-center text-center rounded-lg border'>{i}</div>
                                              )
                                            })}
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

'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton';
import { getdata , getLength} from '../../../alldatafiles/ClaimableReportsLogdata';
import Pagination from '../common/Pagination';
import Image from '../../../node_modules/next/image';
import Link from '../../../node_modules/next/link';
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker';

export default function ClaimableReportsLog() {
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
      const [value1, setValue1] = useState('Channel')
      const [value2, setValue2] = useState('Report Type')
      const onChange = (ranges) => {
        console.log(ranges);
      };
  return (
    <div >
        <div className='flex scrollmenu gap-4 space-y-2 sm:space-y-0'>
                    <button className="text-[13px] shadow-xl w-28 border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-2  font-medium">Bulk Action</button>
                    <CustomDateRangePicker/>
                    <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
        </div>
        <div className='sm:h-[380px] w-full  mx-auto overflow-auto my-5'>
            <table className="w-[1200px] sm:w-full">
                  <thead>
                      <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                          <th><input  type='checkbox'/></th>
                          <th><h1 className='  my-2'>Channel</h1></th>
                          <th><h1>Date Sent</h1></th>
                          <th><h1>Report Type</h1></th>
                          <th><h1>Records</h1></th>
                          <th><h1>Record Value</h1></th>
                          <th><h1>Sent to</h1></th>
                          <th><h1>Download Link</h1></th>
                      </tr>
                  </thead>
                  <tbody>
                      {dataArray.map(data=>(
                      <tr key={data.ID} className='max-h-[54px] h-[54px] border-t text-sm text-black '>
                          <td><input type='checkbox'/></td>
                          <td>
                            <div className='flex items-center gap-2'>
                            <p className='w-9 h-9 flex items-center justify-center border rounded-lg'>fk</p>
                            <p>{data.Channel}</p>
                            </div>
                          </td>
                          <td>
                            <div className='flex gap-2 items-baseline' >
                            {data.DateSent}
                            <p className='text-xs text-gray-700'>{data.TimeSent}</p>
                            </div>
                          </td>
                          <td>{data.ReportType}</td>
                          <td>{data.Records}</td>
                          <td>{data.RecordValue}</td>
                          <td>{data.SentTo}</td>
                          <td>
                            <Link href={data.DownloadLink} className='flex items-center gap-3'>
                              <Image src='/images/icon-link.svg' alt='' width={14} height={14}/>
                              <p>Link</p>
                            </Link>
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

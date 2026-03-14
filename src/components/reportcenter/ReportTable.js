import React from 'react'
import Link from '../../../node_modules/next/link'

export default function ReportTable(props) {
  return (
    <div>
        <table className='w-full text-left text-sm'>
            <thead className='border-b'>
                <tr>
                    <th className='text-gray-700 font-semibold  py-2'>Report Name</th>
                    <th className='text-gray-700 font-semibold '>Type</th>
                    <th className='text-gray-700 font-semibold '>Action</th>
                </tr>  
            </thead>
            <tbody className=' font-medium'>
                {props.dataArray.map((data, i)=>(
                    <tr key={i} className='border-b'>
                    <td className='py-4'>{data.ReportName}</td>
                    <td>{data.Type}</td>
                    <td>
                        <Link href={data.Link} className='hover:border-blue cursor-pointer transition-all duration-300 w-9 h-9 flex items-center justify-center border rounded-full'>
                        <svg width="15" height="15" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3V5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10ZM17.707 7.707L12 13.414L10.586 12L16.293 6.293L13 3H21V11L17.707 7.707Z" fill="#68698A"></path>
                        </svg>
                        </Link>
                    </td>
                </tr>
                ))}
            </tbody>
        </table> 
    </div>
  )
}

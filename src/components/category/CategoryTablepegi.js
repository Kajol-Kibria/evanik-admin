'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { HiOutlineEye } from "react-icons/hi";
import Pagination from '../common/Pagination';
import { RiPencilLine } from "react-icons/ri";

import { getdata , getLength} from '@/alldatafiles/categoriedata';
export default function CategoryTablepegi() {
     const [limit, setLimit] = useState(7);
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
      <div className='sm:h-[422px] w-full  mx-auto overflow-auto my-5'>
        <table className="w-[1200px] sm:w-full">
              <thead>  
                  <tr className=' text-[13px]  text-left font-semibold   text-gray-500'>
                      <th><h1>Cat ID</h1></th>
                      <th><h1>Category</h1></th>
                      <th><h1>Products</h1></th>
                      <th><h1>Mapping Rule</h1></th>
                      <th><h1>Action</h1></th>
                  </tr>  
              </thead>
              <tbody>
                  {dataArray.map((data, i)=>(
                  <tr key={i} className='max-h-[54px] h-[54px] border-t text-sm text-black font-medium'>
                      <td>
                        <p>{data.catID}</p>
                      </td>
                      <td className='max-w-[10vw]'>
                        <div className='flex items-center gap-2 py-2'>
                          <Image className='border rounded-lg w-9 h-9' src={data.category.image} alt='' width={40} height={40}/>
                          <div>
                            <p className='text-sm font-semibold'>{data.category.name}</p>
                            <p className='text-xs text-gray-700'>{data.category.description}</p>
                          </div>
                        </div>
                      </td>
                      <td>{data.products}</td>
                      <td className='text-[#8c8aa7]'>
                        <button><RiPencilLine size={21}/></button>
                      </td>
                      <td>
                        <div className=' text-[#8c8aa7] flex items-center gap-3'>
                            <button><RiPencilLine size={21}/></button>
                            <button><HiOutlineEye size={21}/></button>
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

'use client'
import React, { useState } from 'react'
import CustomAccordation from './CustomAccordation';
import Image from '../../../node_modules/next/image';
import { getdata , getLength} from '../../../alldatafiles/ProductWisePLdata';
import Pagination from '../common/Pagination';
export default function ProductWisePLTable() {

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
        {dataArray.map((data, i)=>(
        <div key={i}>
            <CustomAccordation data={data}/>
        </div>
        ))}
        <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}

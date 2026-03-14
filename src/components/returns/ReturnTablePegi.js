'use client'
import React, { useState } from 'react'
import ReturnsTable from './Table'
import Pagination from '../common/Pagination'
import { getdata, getLength } from '../../../alldatafiles/data';

export default function ReturnTablePegi() {
      
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
    <ReturnsTable data={dataArray} />
    <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}

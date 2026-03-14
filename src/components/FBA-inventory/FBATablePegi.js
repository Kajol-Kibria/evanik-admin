'use client'
import FBATable from './FBATable';
import React, { useState } from 'react'
import Pagination from '../common/Pagination';
import { getLength , getdata} from '../../alldatafiles/fbainventorydata';

export default function FBATablePegi() {
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
              <FBATable dataArray={dataArray}/>
              <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}

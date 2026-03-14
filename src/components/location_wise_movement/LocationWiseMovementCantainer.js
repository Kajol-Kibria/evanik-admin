'use client'
import React, { useState } from 'react'
import DownloadApp from '../common/DownloadApp'
import LocationWiseMovementButtons from './LocationWiseMovementButtons'
import LocationWiseMovementTable from './LocationWiseMovementTable'
import { getdata , getLength} from "../../../alldatafiles/LocationWiseMovementdata";
import Pagination from '../common/Pagination'

export default function LocationWiseMovementCantainer() {
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
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
        <DownloadApp/>
        <LocationWiseMovementButtons/>
        <LocationWiseMovementTable data={dataArray}/>
        <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
            
    </div>
  )
}

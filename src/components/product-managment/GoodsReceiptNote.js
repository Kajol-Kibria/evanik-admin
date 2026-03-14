'use client'
import React, { useState } from 'react'
import GoodsReceiptTable from './GoodsReceiptTable'
import { getdata, getLength } from '../../alldatafiles/goodreceiptdata';
import GoodRNAcordation from './GoodRNAcordation';
import GrossAmount from './GrossAmount';
import CustomTooltip from '../common/Tooltip';
import Image from 'next/image';
import DeliveryInfo from './DeliveryInfo';

export default function GoodsReceiptNote() {
  
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
    <div className=''>
        <GoodRNAcordation/>
        <GoodsReceiptTable dataArray={dataArray}/>
        <div className='sm:flex w-full justify-between gap-5'>
        <div className='shd sm:w-[60%] border py-10 px-5 rounded-lg'>
          <DeliveryInfo/>
        </div>
          <div className='sm:w-[40%]  my-4 sm:my-0'>
            <GrossAmount/>
          </div>
        </div>
    </div>
  )
}

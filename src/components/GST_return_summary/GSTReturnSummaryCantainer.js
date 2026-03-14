import React from 'react'
import GSTReturnSummarySubMenu from './GSTReturnSummarySubMenu'
import DownloadApp from '../common/DownloadApp'

export default function GSTReturnSummaryCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'> 
        <DownloadApp/>
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c] my-7'>GSTR1 Return Summary</p>
        <GSTReturnSummarySubMenu/>
    </div>
  )
}

import React from 'react'
import FySummaryReportsButtons from './FySummaryReportsButtons'
import FySummaryReportsTable from './FySummaryReportsTable'

export default function FySummaryReportsCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
        <FySummaryReportsButtons/>
        <FySummaryReportsTable/>
    </div>
  )
}

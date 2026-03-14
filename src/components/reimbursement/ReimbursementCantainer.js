import React from 'react'
import DownloadApp from '../common/DownloadApp'
import ReimbursementButtons from './ReimbursementButtons'
import ReimbursementTablePegi from './ReimbursementTablePegi'

export default function ReimbursementCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <DownloadApp/>
      <ReimbursementButtons/>
      <ReimbursementTablePegi/>
    </div>
  )
}

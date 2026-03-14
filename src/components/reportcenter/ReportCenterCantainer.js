
import ReportCenterSubMenu from './ReportCenterSubMenu'
import React from 'react'
import DownloadApp from '../common/DownloadApp'
export default function ReportCenterCantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <DownloadApp/>
      <ReportCenterSubMenu/>
    </div>
  )
}

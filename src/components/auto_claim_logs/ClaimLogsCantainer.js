import React from 'react'
import DownloadApp from '../common/DownloadApp'
import ClaimLogsSubMenu from './ClaimLogsSubMenu'

export default function ClaimLogsCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
        <DownloadApp/>
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c] my-5'>Claim Logs</p>
        <ClaimLogsSubMenu/>
    </div>
  )
}

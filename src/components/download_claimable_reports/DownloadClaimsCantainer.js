'use client'
import React, { useState } from 'react'
import DownloadApp from '../common/DownloadApp'
import DownloadClaimsSubMenu from './DownloadClaimsSubMenu'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'

export default function DownloadClaimsCantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <DownloadApp/>
        <div className='sm:flex items-center justify-between'>
            <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c] my-5'>Download Claims</p>
            <div className='flex items-center gap-4'>
                    <CustomDateRangePicker/>
                <button className='blueButton'>Generate</button>
            </div>
        </div>
        <DownloadClaimsSubMenu/>
    </div>
  )
}

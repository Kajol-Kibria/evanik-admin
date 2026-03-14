import React from 'react'
import CustomTooltip from '../common/Tooltip'

import Image from 'next/image'
import AttachFile from '../common/AttachFile'

export default function RemarksVendor() {
  return (
    <div>
        <div className='flex gap-1 text-sm pt-5 pb-1'>
          <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
            Remarks ( For Internal Use)
        </div>
        <textarea placeholder='Your note here' className='w-full h-full px-5 py-3 border rounded-md border-blue/30  outline-none '/>
        <AttachFile/>          
    </div>
  )
}

import React from 'react'
import AttachFile from '../common/AttachFile'

export default function UploadPurchaseOrder() {
  return (
    <div className='p-5 bg-white shd rounded-lg'>
        <div className='text-blue text-lg font-semibold'>
        Upload Purchase Order
        </div>
        <div>
            <AttachFile/>
        </div>
    </div>
  )
}

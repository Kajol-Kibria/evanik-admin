import React from 'react'
import DownloadExcel from './DownloadExcel'
import AttachFile from '../common/AttachFile'
import CustomTooltip from '../common/Tooltip'
import Image from '../../../node_modules/next/image'

export default function BulkUpload() {
  return (
    <div className='shd p-5 rounded-lg'>
      <DownloadExcel/>
       <div className='flex gap-1 text-sm pt-4 pb-1'>
            <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
            Upload Bulk
        </div>
      <AttachFile/>
      <div className=' text-sm'>
              <p className='font-semibold text-blue my-5'>A complete and accurate product master is crucial for streamlining order and inventory management, generating precise reports, integrating with accounting systems, and conducting profit and loss analysis.</p>
              <div>
                <div className='flex items-center gap-3 my-3'>
                <Image src='/images/icon-ai-tips.svg' alt='' height={30} width={30}/>
                <p>Ensure all mandatory fields are updated accurately to guarantee seamless order and inventory management, precise reporting, and effective accounting integration.</p>
                </div>
              </div>
              <div>
                <div className='flex items-center gap-3 my-3'>
                <Image src='/images/icon-ai-tips.svg' alt='' height={30} width={30}/>
                <p>Avoid changing the file format or columns to ensure smooth data upload and integration without errors.</p>
                </div>
              </div>
              <div>
                <div className='flex items-center gap-3 my-3'>
                <Image src='/images/icon-ai-tips.svg' alt='' height={30} width={30}/>
                <p>Please keep this page open until the upload is complete; you will receive an email notification once the process is finished</p>
                </div>
              </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 mt-8">
                <div className="border-blue/30 border bg-white rounded-3xl shd p-6">
                <div className='flex items-center  gap-3 mb-2'>
                  <div className='bg-blue/10 p-4 contain-content rounded-full'>
                  <Image className=' ' src='/images/arrow.svg' width={23} height={23} alt=''></Image>
                  </div>
                  <p className='w-4/5'>
                  145 Marketplace listings are unmapped
                  </p>
                    </div>
                  <button className="mt-4  text-sm hover:bg-[#5356f7] bg-blue transition-all duration-150 text-white font-semibold py-3 px-4 rounded-xl w-full">
                  Map Listing
                  </button>
                </div>
                <div className="border-blue/30 border bg-white rounded-3xl shd p-6">
                <div className='flex  items-center gap-3 mb-2'>
                  <div className='bg-blue/10 p-4 contain-content rounded-full'>
                  <Image src='/images/arrow.svg' width={23} height={23} alt=''></Image>
                  </div>
                  <p className='w-4/5'>
                  23 Products with missing Accounting SKU
                  </p>
                </div>
                  <button className="mt-4 text-sm hover:bg-[#5356f7] bg-blue transition-all duration-150 text-white font-semibold py-3 px-4 rounded-xl w-full">
                  Update Accounting SKUs
                  </button>
                </div>
                <div className="border-blue/30 border bg-white rounded-3xl shd p-6">
                <div className='flex items-center gap-3 mb-2'>
                  <div className='bg-blue/10 p-4 contain-content rounded-full'>
                  <Image src='/images/arrow.svg' width={23} height={23} alt=''></Image>
                  </div>
                  <p className='w-4/5'>
                  COGS price is missing for 234 SKUs
                  </p>
                  </div>
                  <button className="mt-4 text-sm hover:bg-[#5356f7] bg-blue transition-all duration-150 text-white font-semibold py-3 px-4 rounded-xl w-full">
                    Update COGS
                  </button>
                </div>
              </div>
    </div>
  )
}

import React from 'react'
import Image from '../../../node_modules/next/image'
import AttachFile from '../common/AttachFile'
import CustomTooltip from '../common/Tooltip'
import DownloadExcel from './DownloadExcel'
export default function CommisionFeesetup() {
  return (
    <div className='shd p-5 rounded-lg'>
          <DownloadExcel/>
           <div className='flex gap-1 text-sm pt-4 pb-1'>
                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                Upload Product wise Commission Fee
            </div>
          <AttachFile/>
          <div className=' text-sm'>
                  <p className='font-semibold text-blue my-5'>AI Driven Tips & Tricks for a good Seller Logo that improve sells</p>
                  <div>
                    <div className='flex items-center gap-3 my-3'>
                    <Image src='/images/icon-ai-tips.svg' alt='' height={30} width={30}/>
                    <p>The logo should be relevant to your industry and resonate with your target audience</p>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center gap-3 my-3'>
                    <Image src='/images/icon-ai-tips.svg' alt='' height={30} width={30}/>
                    <p>The logo should be relevant to your industry and resonate with your target audience</p>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center gap-3 my-3'>
                    <Image src='/images/icon-ai-tips.svg' alt='' height={30} width={30}/>
                    <p>The logo should be relevant to your industry and resonate with your target audience</p>
                    </div>
                  </div>
            </div>
        </div>
  )
}

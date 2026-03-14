import React from 'react'
import TurnoverAction from './TurnoverAction'
import CustomTooltip from '../common/Tooltip'
import Image from '../../../node_modules/next/image'

export default function TC() {
  return (
    <div className='p-6 shd rounded-lg'>
      <TurnoverAction/>
            <div className='my-4'>
                              <div className='flex gap-1 text-sm '>
                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                              Enter T&C
                              </div>
                              <textarea className='bg-transparent px-4 py-3 border w-full rounded-lg outline-none h-60'/>
            </div>
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

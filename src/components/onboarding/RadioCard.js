import React from 'react'
import CustomRadio from '../common/CustomRadio'


export default function RadioCard(props) {
  return (
    <div>
        <div className='rounded-lg shd py-6 px-7  '>
                    <div className='flex items-center justify-between  w-full gap-5'>
                        <div className='flex items-center gap-3'>
                        <CustomRadio/>
                        <p className='font-semibold text-gray-700'>{props.txt}</p>
                        </div>
                    </div>
                </div>        
    </div>
  )
}

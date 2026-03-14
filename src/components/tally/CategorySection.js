import Image from 'next/image'
import React from 'react'

export default function CategorySection(props) {
  return (
    <div className='sm:flex justify-between '>
        <div className='sm:w-2/3'>
        <p className='text-blue font-semibold my-4'>Videos</p>
        <div className='h-[59vh] 2xl:h-[62vh] overflow-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:pr-3'>
        {props.video.map(data=>(
            <div key={data.ID} className='shd p-4 rounded-lg'>
                <div className=' flex justify-between items-center'>
                    <div className='w-1/3'>
                    <p className='font-semibold text-gray-700 pb-2 2xl:pb-0'>{data.Title}</p>
                    </div>
                    <a href='#'><Image src={data.Image} alt='a' width={130} height={130}/></a>
                </div>
                <p className='text-sm py-2'>Some information on <a href='#' className='text-blue'>{data.Title}</a></p>
            </div>
        ))}
        </div>
        </div>
        </div>
        <div className='sm:w-1/3 '>
        <p className='text-blue font-semibold my-4'>Documents</p>
        <div className='sm:px-5 h-[59vh] 2xl:h-[62vh] overflow-auto'>
        {props.documents.map(data=>(
            <div key={data.ID} className='shd p-4 rounded-lg mb-4'>
                <div className='2xl:flex justify-between items-center'>
                    <div>
                    <p className='font-semibold text-gray-700'>{data.Title}</p>
                    <p className='text-sm py-2'>Some information on <a href='#' className='text-blue'>{data.Title}</a></p>
                    </div>
                    <a href='#'><Image src={data.Image} alt='a' width={130} height={130}/></a>
                </div>
            </div>
        ))}
        </div>
        </div>
    </div>
  )
}

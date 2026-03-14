import Image from 'next/image'
import React from 'react'
import ChromeExtension from './ChromeExtension'

export default function TallyTop() {
  return (
    <div>
        <div className='sm:flex items-center justify-between'>
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Tally Integration</p>
        <ChromeExtension/>
        </div>
    </div>
  )
}

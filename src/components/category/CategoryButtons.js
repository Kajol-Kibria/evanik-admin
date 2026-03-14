import React from 'react'
import { IoIosSearch } from 'react-icons/io';

export default function CategoryButtons() {
  return (
    <div>
        <div>
            <div className='sm:flex items-center justify-between'>
            <p className="my-4 sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
            Categories
            </p>
            <div className=' sm:flex items-center gap-4 '>
            <div className=' flex items-center gap-4 my-4 sm:my-0 '>
                <button className='buttonBlue w-32'>Add</button>
                <button className='blueButton w-32'>Upload</button>
                <button className='blueButton w-32'>Download</button>
            </div>
            </div>
            </div>
            <div className='sm:flex items-center my-3 justify-between'>
            
            <div className='sm:flex items-center gap-5 text-sm'>
                <div className='flex items-center mt-4 sm:mt-0 mr-5'>
                    <input className='pl-5 pr-14 w-full sm:w-auto border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='search'/>
                    <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                 </div>
            </div>
            </div>
        </div>
    </div>
  )
}

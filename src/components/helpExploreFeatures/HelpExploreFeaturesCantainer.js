import React from 'react'
import { Onevideodata ,Onedocumentsdata} from '../../../alldatafiles/CategoryOnedata';
import CategorySection from '../tally/CategorySection';
import ChromeExtension from '../tally/ChromeExtension';
import { IoIosSearch } from "react-icons/io";
export default function HelpExploreFeaturesCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <div className='flex items-center justify-between'>
            <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Explore features</p>
            <ChromeExtension/>
        </div>
        <div className='flex items-center my-4'>
            <input className='pl-5 pr-14 sm:w-[600px] w-full border-2 border-blue/20 outline-none placeholder:text-gray-600 focus:placeholder-transparent py-2.5 rounded-xl' placeholder='Enter search text here'/>
            <button className='text-gray-600 -ml-10'><IoIosSearch size={25}/></button>
        </div>
        <CategorySection video={Onevideodata} documents={Onedocumentsdata}/>
    </div>
  )
}

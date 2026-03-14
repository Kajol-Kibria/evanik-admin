import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";
import { RiDeleteBin7Line } from "react-icons/ri";

export default function BranchSetup() {

    const dataArray = [
        {
            ID:1,
            GSTIN:'data',
            Country:'India',
            City:'Jodhpur',
            State:'Rajasthan',
            Address:'data',
        },
        {
            ID:2,
            GSTIN:'data',
            Country:'India',
            City:'Jodhpur',
            State:'Rajasthan',
            Address:'data',
        },
        {
            ID:26,
            GSTIN:'data',
            Country:'India',
            City:'Jodhpur',
            State:'Rajasthan',
            Address:'data',
        },
        {
            ID:762,
            GSTIN:'data',
            Country:'India',
            City:'Jodhpur',
            State:'Rajasthan',
            Address:'data',
        },
        {
            ID:276,
            GSTIN:'data',
            Country:'India',
            City:'Jodhpur',
            State:'Rajasthan',
            Address:'data',
        },
        {
            ID:2897,
            GSTIN:'data',
            Country:'India',
            City:'Jodhpur',
            State:'Rajasthan',
            Address:'data',
        },
    ]

  return (
    <div>
        <div className='flex items-center justify-between text-sm p-4 rounded-md bg-[#f8f5f1] text-[#c18029]'>
               <div className='flex items-center gap-2'>
               <BsInfoCircleFill size={16}/>
                Setup your Branch
               </div>
            <button className='buttonBlue'>Add Branch</button>
            </div>

            <div className='grid sm:grid-cols-2 grid-cols-1 gap-5 my-5'>
                {dataArray.map((data)=>(
                <div key={data.ID} className='bg-white shd p-5 rounded-lg'>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold text-blue'>Default</p>
                        <div className='flex items-center gap-3'>
                            <button className='text-gray-500'><RiPencilLine size={20}/></button>
                            <button className='text-red-500'><RiDeleteBin7Line/></button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4 mt-4'>
                            <div>
                                <p className='text-xs text-gray-700'>GSTIN</p>
                                <p>{data.GSTIN}</p>
                            </div>
                            <div>
                                <p className='text-xs text-gray-700'>Country</p>
                                <p>{data.Country}</p>
                            </div>
                            <div>
                                <p className='text-xs text-gray-700'>City</p>
                                <p>{data.City}</p>
                            </div>
                            <div>
                                <p className='text-xs text-gray-700'>State</p>
                                <p>{data.State}</p>
                            </div>
                            <div>
                                <p className='text-xs text-gray-700'>Address</p>
                                <p>{data.Address}</p>
                            </div>
                    </div>
                </div>
                ))}
            </div>
    </div>
  )
}

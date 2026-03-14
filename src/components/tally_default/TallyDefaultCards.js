import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import Link from '../../../node_modules/next/link';
export default function TallyDefaultCards() {
  return (
    <div>
        <div className='flex items-center justify-between px-4 py-3 rounded-2xl bg-[#f8f5f1] text-[#c18029] my-6'>
            <div className='flex items-center gap-2 text-sm '>
                <BsInfoCircleFill size={16}/>
                You have not set up accounting, complete it to continue further.
            </div>
            <button className='blueButton'>Help Links</button>
        </div>
        <div className='grid sm:grid-cols-3 gap-7 relative'>
            <div className='shd rounded-2xl p-5 space-y-3'>
                <p className='text-blue font-semibold text-lg cursor-pointer'>Setup Warehouse</p>
                <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/ElZK2Yz58Ho" title="How to add Shopify account with eVanik"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                </div>
                <div className='flex items-center gap-3'>
                <div className='my-3 relative flex items-center justify-center'>
                    <div style={{ background: `conic-gradient(#6972D2 ${3.6 * 70}deg, #6b6b6b35 10deg)` }} className='flex items-center justify-center w-12 h-12 rounded-full'></div>
                    <div className='bg-[#ffffff] absolute w-10 h-10 rounded-full content-center text-center text-xs'>65%</div>
                </div>
                <div className='text-sm space-y-1'>
                    <p>Warehouse setup</p>
                    <p>70% complete</p>
                </div>
                </div>
                <p className='font-medium'>Some information on <Link href='#' className='text-blue'>How to setup Warehouse</Link></p>
                <button className='buttonBlue w-full'>Warehouse Setup</button>
            </div>
            <div className='shd rounded-2xl p-5 space-y-3'>
                <p className='text-blue font-semibold text-lg cursor-pointer'>Setup GST</p>
                <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/ElZK2Yz58Ho" title="How to add Shopify account with eVanik"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                </div>
                <div className='flex items-center gap-3'>
                <div className='my-3 relative flex items-center justify-center'>
                    <div style={{ background: `conic-gradient(#6972D2 ${3.6 * 70}deg, #6b6b6b35 10deg)` }} className='flex items-center justify-center w-12 h-12 rounded-full'></div>
                    <div className='bg-[#ffffff] absolute w-10 h-10 rounded-full content-center text-center text-xs'>65%</div>
                </div>
                <div className='text-sm space-y-1'>
                    <p>GST setup</p>
                    <p>70% complete</p>
                </div>
                </div>
                <p className='font-medium'>Some information on <Link href='#' className='text-blue'>How to setup GST</Link></p>
                <button className='buttonBlue w-full'>GST Setup</button>
            </div>
            <div className='shd rounded-2xl p-5 space-y-3'>
                <p className='text-blue font-semibold text-lg cursor-pointer'>Setup Branch</p>
                <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/ElZK2Yz58Ho" title="How to add Shopify account with eVanik"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                </div>
                <div className='flex items-center gap-3'>
                <div className='my-3 relative flex items-center justify-center'>
                    <div style={{ background: `conic-gradient(#6972D2 ${3.6 * 70}deg, #6b6b6b35 10deg)` }} className='flex items-center justify-center w-12 h-12 rounded-full'></div>
                    <div className='bg-[#ffffff] absolute w-10 h-10 rounded-full content-center text-center text-xs'>65%</div>
                </div>
                <div className='text-sm space-y-1'>
                    <p>Branch Setup</p>
                    <p>70% complete</p>
                </div>
                </div>
                <p className='font-medium'>Some information on <Link href='#' className='text-blue'>How to setup Branch</Link></p>
                <button className='buttonBlue w-full'>Branch Setup</button>
            </div>
            <div className='shd rounded-2xl p-5 space-y-3'>
                <p className='text-blue font-semibold text-lg cursor-pointer'>Setup Product</p>
                <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/ElZK2Yz58Ho" title="How to add Shopify account with eVanik"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                </div>
                <div className='flex items-center gap-3'>
                <div className='my-3 relative flex items-center justify-center'>
                    <div style={{ background: `conic-gradient(#6972D2 ${3.6 * 70}deg, #6b6b6b35 10deg)` }} className='flex items-center justify-center w-12 h-12 rounded-full'></div>
                    <div className='bg-[#ffffff] absolute w-10 h-10 rounded-full content-center text-center text-xs'>65%</div>
                </div>
                <div className='text-sm space-y-1'>
                    <p>Product Setup</p>
                    <p>70% complete</p>
                </div>
                </div>
                <p className='font-medium'>Some information on <Link href='#' className='text-blue'>How to setup Product</Link></p>
                <button className='buttonBlue w-full'>Product Setup</button>
            </div>
        </div>
    </div>
  )
}

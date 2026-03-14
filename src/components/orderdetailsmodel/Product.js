import React from 'react'
import Image from 'next/image'
export default function Product() {
  return (
    <div>
        <div className='my-10 p-6 rounded-lg border shd'>
                    <div className="flex justify-between text-gray-600  text-[13px] font-semibold   px-2 mb-4">
                    <div className='w-2/4'>Product</div>
                    <div className='sm:w-1/4'>Qty</div>
                    <div className='sm:w-1/4'>Price</div>
                </div>
                <div className="flex items-center py-2 text-sm justify-between border-t ">
                    <div className="w-2/4 flex gap-2 items-center">
                    <Image className='border rounded-lg' src="/images/img-product.jpg" alt="Product Image" width={34} height={34} />
                    <div className='font-semibold text-gray-900'>
                        <p >Nike Sportswear</p>
                        <p className="font-medium text-xs">Size: L</p>
                    </div>
                    </div>
                    <div className='sm:w-1/4'>1</div>
                    <div className='sm:w-1/4'>₹ 100</div>
                </div>
                <div className="flex items-center py-2 text-sm justify-between border-t ">
                    <div className="w-2/4 flex gap-2 items-center">
                    <Image className='border rounded-lg' src="/images/img-product.jpg" alt="Product Image" width={34} height={34} />
                    <div className='font-semibold text-gray-900'>
                        <p >Nike Sportswear</p>
                        <p className="font-medium text-xs">Size: L</p>
                    </div>
                    </div>
                    <div className='sm:w-1/4'>1</div>
                    <div className='sm:w-1/4'>₹ 100</div>
                </div>
                <div className="flex items-center py-2 text-sm justify-between border-t ">
                    <div className="w-2/4 flex gap-2 items-center">
                    <Image className='border rounded-lg' src="/images/img-product.jpg" alt="Product Image" width={34} height={34} />
                    <div className='font-semibold text-gray-900'>
                        <p >Nike Sportswear</p>
                        <p className="font-medium text-xs">Size: L</p>
                    </div>
                    </div>
                    <div className='sm:w-1/4'>1</div>
                    <div className='sm:w-1/4'>₹ 100</div>
                </div>
                <div className="flex gap-4 justify-between mt-4">
                        <button className="w-full py-[10px] sm:px-4 rounded-xl border border-blue text-blue/70 font-semibold text-sm">
                        Completed
                        </button>
                        <button className="w-full py-[10px] sm:px-4 rounded-xl border border-blue text-blue hover:bg-blue hover:text-white transition-all duration-300 font-semibold text-sm">
                        Return
                        </button>
                        <button className="w-full py-[10px] sm:px-4 px-1 rounded-xl border border-blue text-blue/70 font-semibold text-sm">
                        Replacement
                        </button>
                    </div>
                </div>
    </div>
  )
}

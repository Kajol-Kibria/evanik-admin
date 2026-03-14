import React from 'react'
import Image from 'next/image'
export default function WholeOrder() {
  return (
    <div>
        <div className="shadow-sm rounded-lg">
                        <h2 className=" bg-[#525cc7] text-white font-semibold rounded-t-lg p-4">Whole Order</h2>
                        <div className="bg-white p-6 rounded-b-lg shd">
                            <div className="flex justify-between text-gray-600  text-[13px] font-semibold   px-2 mb-4">
                                <div className='w-2/4'>Product</div>
                                <div className='sm:w-1/4'>Qty</div>
                                <div className='sm:w-1/4'>Price</div>
                            </div>
                            <div className="flex items-center py-2 text-sm justify-between mb-4 border-y ">
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
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex gap-5 items-center">
                                <div className='bg-blue/10 w-14 h-14 flex justify-center items-center contain-content rounded-full'>
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.9696 11.0975H3.872V4.90226H6.9696C7.79113 4.90226 8.57902 5.22861 9.15993 5.80953C9.74085 6.39044 10.0672 7.17832 10.0672 7.99986C10.0672 8.82139 9.74085 9.60928 9.15993 10.1902C8.57902 10.7711 7.79113 11.0975 6.9696 11.0975ZM5.4208 6.45106V9.54866H6.9696C7.38037 9.54866 7.77431 9.38548 8.06477 9.09503C8.35522 8.80457 8.5184 8.41063 8.5184 7.99986C8.5184 7.58909 8.35522 7.19515 8.06477 6.90469C7.77431 6.61424 7.38037 6.45106 6.9696 6.45106H5.4208ZM9.2928 1.80466H1.5488V14.1951H12.3904V4.90226H9.2928V1.80466ZM0 1.02406C0 0.599693 0.346157 0.255859 0.773626 0.255859H10.0672L13.9392 4.12786V14.964C13.9399 15.0657 13.9206 15.1666 13.8823 15.2608C13.8441 15.355 13.7876 15.4408 13.7162 15.5132C13.6448 15.5856 13.5598 15.6433 13.4662 15.6828C13.3725 15.7224 13.2719 15.7431 13.1702 15.7439H0.768979C0.565605 15.7424 0.370951 15.6611 0.227068 15.5173C0.0831844 15.3736 0.0016221 15.179 0 14.9757V1.02406Z" fill="#626BCC"></path>
                                </svg>
                                </div>
                                <button  className="text-blue-500 ">return.pdf</button>
                                </div>
                                <div className='w-12 h-12 flex items-center justify-center border rounded-full'>
                                <svg width="18" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M5.20244 10.4268L3.94585 11.4359L10.4999 16.7002L17.0539 11.4367L15.7973 10.4276L11.3888 13.968V4.74537H9.61085V13.9674L5.20244 10.4268ZM18.4997 4.03139V2.1281L2.50011 2.12733V4.03062L0.722168 4.03139V0.700195H20.2777V4.03139H18.4997Z" fill="#68698A"></path>
                                </svg>
                                </div>
                            </div>
        
                            </div>
                        </div>
    </div>
  )
}

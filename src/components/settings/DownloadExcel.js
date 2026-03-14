import React from 'react'

export default function DownloadExcel() {
  return (
    <div>
     <div className='sm:flex items-center justify-between py-3 px-4 rounded-3xl bg-[#f1f8f6]'>
                    <div className='flex items-center gap-5'>
                    <div className='bg-[#c8e3da] h-[60px] w-[60px] content-center flex items-center justify-center contain-content rounded-full'>
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.859512 1.87707L13.4295 0.0820702C13.5005 0.0718936 13.5728 0.0770859 13.6415 0.0972954C13.7103 0.117505 13.7739 0.152259 13.828 0.199203C13.8822 0.246146 13.9256 0.304182 13.9554 0.369378C13.9851 0.434573 14.0005 0.505404 14.0005 0.57707V21.4231C14.0005 21.4946 13.9851 21.5654 13.9554 21.6305C13.9257 21.6956 13.8824 21.7536 13.8284 21.8005C13.7743 21.8474 13.7108 21.8822 13.6422 21.9025C13.5736 21.9228 13.5014 21.9281 13.4305 21.9181L0.858512 20.1231C0.620131 20.0891 0.402004 19.9703 0.2442 19.7884C0.0863969 19.6066 -0.000485971 19.3739 -0.000488281 19.1331V2.86707C-0.000485971 2.62628 0.0863969 2.39358 0.2442 2.21171C0.402004 2.02984 0.620131 1.91102 0.858512 1.87707H0.859512ZM2.00051 3.73507V18.2651L12.0005 19.6941V2.30607L2.00051 3.73507ZM15.0005 18.0001H18.0005V4.00007H15.0005V2.00007H19.0005C19.2657 2.00007 19.5201 2.10543 19.7076 2.29296C19.8952 2.4805 20.0005 2.73485 20.0005 3.00007V19.0001C20.0005 19.2653 19.8952 19.5196 19.7076 19.7072C19.5201 19.8947 19.2657 20.0001 19.0005 20.0001H15.0005V18.0001ZM8.20051 11.0001L11.0005 15.0001H8.60051L7.00051 12.7141L5.40051 15.0001H3.00051L5.80051 11.0001L3.00051 7.00007H5.40051L7.00051 9.28607L8.60051 7.00007H11.0005L8.20051 11.0001Z" fill="#1F674F"></path>
                    </svg>
                    </div>
                    <p className='text-sm w-2/3 my-2 sm:my-0 sm:w-[88%]'>Download sample excel sheet as a example and fill product details and upload.</p>
                    </div>
                    <div className=' bg-[#c8e3da] py-3 px-7 rounded-xl'>
                        <button className='text-[#1f674f] font-semibold'>Download</button>
                    </div>
       </div>
        
    </div>
  )
}

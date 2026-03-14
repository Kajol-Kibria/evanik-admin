import React from 'react'

export default function ChromeExtension() {
  return (
    <div className='w-full sm:w-2/3'>
        <div className='my-4 sm:my-0 sm:flex items-center justify-between p-4 rounded-3xl bg-[#f1f8f6]'>
                    <div className='flex items-center gap-5'>
                    <div className='bg-[#c8e3da] h-[60px] w-[60px] content-center flex items-center justify-center contain-content rounded-full'>
                    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M19.381 10.4762H17.8096V6.28572C17.8096 5.1281 16.8719 4.19047 15.7143 4.19047H11.5238V2.61905C11.5238 1.17333 10.3505 0 8.90476 0C7.45905 0 6.28572 1.17333 6.28572 2.61905V4.19047H2.09525C0.937626 4.19047 0.0104821 5.1281 0.0104821 6.28572L0.00522838 10.2667H1.57142C3.13236 10.2667 4.39998 11.5343 4.39998 13.0952C4.39998 14.6562 3.13236 15.9238 1.57142 15.9238H0.00525371L0 19.9048C0 21.0624 0.937626 22 2.09525 22H6.0762V20.4286C6.0762 18.8676 7.34382 17.6 8.90476 17.6C10.4657 17.6 11.7333 18.8676 11.7333 20.4286V22H15.7143C16.8719 22 17.8095 21.0624 17.8095 19.9048V15.7143H19.381C20.8267 15.7143 22 14.541 22 13.0953C22 11.6495 20.8267 10.4762 19.381 10.4762H19.381Z" fill="#1F674F"></path>
                    </svg>
                    </div>
                    <p className='text-[17px]'>Link to install chrome extension.</p>
                    </div>
                    <div className='text-center sm:text-left'>
                        <button className='font-semibold text-[#1f674f] bg-[#c8e3da] px-6 py-3 rounded-xl'>Click Here</button>
                    </div>
                  </div>
    </div>
  )
}

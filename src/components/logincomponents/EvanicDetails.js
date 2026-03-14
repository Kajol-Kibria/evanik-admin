import Image from 'next/image'
import React from 'react'

export default function EvanicDetails() {
  return (
    <div>
         <div className='flex items-center justify-center'>
    <div className="">
      <h1 className="text-3xl font-bold  mb-2">eVanik</h1>
      <p className="text-xl font-semibold  mb-6">E-commerce Management software for online sellers</p>
      <ul className=" text-lg">
        <li className="flex items-center gap-4 mb-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6 23.8006C5.2 23.8006 0 18.6006 0 12.2006C0 5.80059 5.2 0.600586 11.6 0.600586C18 0.600586 23.2 5.80059 23.2 12.2006C23.2 18.6006 18 23.8006 11.6 23.8006ZM11.6 2.10059C6 2.10059 1.5 6.60059 1.5 12.2006C1.5 17.8006 6 22.3006 11.6 22.3006C17.2 22.3006 21.7 17.8006 21.7 12.2006C21.7 6.60059 17.2 2.10059 11.6 2.10059Z" fill="white"></path>
            <path d="M9.7 16.5004L6.5 13.3004L7.6 12.3004L9.7 14.4004L15.6 8.40039L16.7 9.50039L9.7 16.5004Z" fill="white"></path>
        </svg>
          Recovery against leakages
        </li>
        <li className="flex items-center gap-4 mb-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6 23.8006C5.2 23.8006 0 18.6006 0 12.2006C0 5.80059 5.2 0.600586 11.6 0.600586C18 0.600586 23.2 5.80059 23.2 12.2006C23.2 18.6006 18 23.8006 11.6 23.8006ZM11.6 2.10059C6 2.10059 1.5 6.60059 1.5 12.2006C1.5 17.8006 6 22.3006 11.6 22.3006C17.2 22.3006 21.7 17.8006 21.7 12.2006C21.7 6.60059 17.2 2.10059 11.6 2.10059Z" fill="white"></path>
            <path d="M9.7 16.5004L6.5 13.3004L7.6 12.3004L9.7 14.4004L15.6 8.40039L16.7 9.50039L9.7 16.5004Z" fill="white"></path>
        </svg>
          On-time accurate GST compliance
        </li>
        <li className="flex items-center gap-4 mb-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6 23.8006C5.2 23.8006 0 18.6006 0 12.2006C0 5.80059 5.2 0.600586 11.6 0.600586C18 0.600586 23.2 5.80059 23.2 12.2006C23.2 18.6006 18 23.8006 11.6 23.8006ZM11.6 2.10059C6 2.10059 1.5 6.60059 1.5 12.2006C1.5 17.8006 6 22.3006 11.6 22.3006C17.2 22.3006 21.7 17.8006 21.7 12.2006C21.7 6.60059 17.2 2.10059 11.6 2.10059Z" fill="white"></path>
            <path d="M9.7 16.5004L6.5 13.3004L7.6 12.3004L9.7 14.4004L15.6 8.40039L16.7 9.50039L9.7 16.5004Z" fill="white"></path>
        </svg>
          Automated Claims
        </li>
        <li className="flex items-center gap-4 mb-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6 23.8006C5.2 23.8006 0 18.6006 0 12.2006C0 5.80059 5.2 0.600586 11.6 0.600586C18 0.600586 23.2 5.80059 23.2 12.2006C23.2 18.6006 18 23.8006 11.6 23.8006ZM11.6 2.10059C6 2.10059 1.5 6.60059 1.5 12.2006C1.5 17.8006 6 22.3006 11.6 22.3006C17.2 22.3006 21.7 17.8006 21.7 12.2006C21.7 6.60059 17.2 2.10059 11.6 2.10059Z" fill="white"></path>
            <path d="M9.7 16.5004L6.5 13.3004L7.6 12.3004L9.7 14.4004L15.6 8.40039L16.7 9.50039L9.7 16.5004Z" fill="white"></path>
        </svg>
          Business insights to plan better
        </li>
      </ul>
      <div className="flex mt-8 space-x-4">
        <button className="bg-white text-blue font-semibold hover:text-black hover:bg-gray-100/80 px-10 py-3 rounded-xl transition-all duration-300">Watch Demo</button>
        <button className="bg-white text-blue font-semibold hover:text-black hover:bg-gray-100/80 px-10 py-3 rounded-xl transition-all duration-300">Free Trial</button>
      </div>
      <div>
        <div className='relative mt-10 flex items-center justify-center mb-10'>
        <Image src='/images/login-video-thumb.png' alt="" width={570} height={570}/>
        <div className='absolute content-center p-5 cursor-pointer rounded-full bg-white/70 hover:bg-white transition-all duration-30'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M10 20.2275C4.477 20.2275 0 15.7505 0 10.2275C0 4.70454 4.477 0.227539 10 0.227539C15.523 0.227539 20 4.70454 20 10.2275C20 15.7505 15.523 20.2275 10 20.2275ZM10 18.2275C12.1217 18.2275 14.1566 17.3847 15.6569 15.8844C17.1571 14.3841 18 12.3493 18 10.2275C18 8.10581 17.1571 6.07098 15.6569 4.57068C14.1566 3.07039 12.1217 2.22754 10 2.22754C7.87827 2.22754 5.84344 3.07039 4.34315 4.57068C2.84285 6.07098 2 8.10581 2 10.2275C2 12.3493 2.84285 14.3841 4.34315 15.8844C5.84344 17.3847 7.87827 18.2275 10 18.2275ZM8.622 6.64254L13.501 9.89454C13.5559 9.93105 13.6009 9.98056 13.632 10.0387C13.6631 10.0967 13.6794 10.1616 13.6794 10.2275C13.6794 10.2934 13.6631 10.3583 13.632 10.4164C13.6009 10.4745 13.5559 10.524 13.501 10.5605L8.621 13.8125C8.56083 13.8524 8.49098 13.8753 8.41887 13.8787C8.34676 13.8821 8.27507 13.8659 8.21141 13.8319C8.14774 13.7979 8.09448 13.7472 8.05726 13.6854C8.02004 13.6235 8.00025 13.5527 8 13.4805V6.97454C8.00013 6.90219 8.01989 6.83123 8.05716 6.76922C8.09443 6.70721 8.14782 6.65647 8.21165 6.6224C8.27547 6.58833 8.34734 6.57221 8.41961 6.57576C8.49187 6.57931 8.56182 6.60239 8.622 6.64254Z" fill="#626BCC"></path>
        </svg>
        </div>

        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

import React from 'react'
import CompanyLogos from './CompanyLogos';
import LoginCard from './LoginCard';

import 'react-multi-carousel/lib/styles.css';
import SideCarousel from './SideCarousel';

export default function Login() {
  return (
    <div className='z-[100] absolute top-0 bottom-0 left-0 right-0 bg-white px-5'>
      <div className='flex sm:h-screen sm:w-screen'>
        <div className='sm:w-1/2 flex flex-col justify-between my-7'>
          <CompanyLogos />
          <LoginCard />
          <CompanyLogos />
        </div>
        <div className='text-base bg-blue text-white w-1/2 content-center  hidden sm:block'>
          <SideCarousel />
        </div>
      </div>
    </div>
  )
}

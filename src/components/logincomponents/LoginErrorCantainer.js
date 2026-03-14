import React from 'react'
import ErrorTopBanner from './ErrorTopBanner';
import LoginErrorCard from './LoginErrorCard';
import SideCarousel from './SideCarousel';
import CompanyLogos from './CompanyLogos';
export default function LoginErrorCantainer() {
  return (
    <div>
    <div className='z-[100] absolute top-0 bottom-0 left-0 right-0 bg-white '>
      <ErrorTopBanner/>
        <div className='flex sm:h-screen sm:w-screen'>
            <div className='sm:w-1/2 flex flex-col justify-between my-4'>
            <CompanyLogos/>
            <LoginErrorCard/>    
            <CompanyLogos/>
            </div>
            <div className='text-base bg-blue text-white w-1/2 content-center  hidden sm:block'>
              <SideCarousel/>
            </div> 
            
        </div>

    </div>
    </div>
  )
}

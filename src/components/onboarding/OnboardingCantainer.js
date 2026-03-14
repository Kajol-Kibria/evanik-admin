'use client'
import React from 'react'
import Link from 'next/link'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import OneOnboad from './OneOnboad';
import TwoOnboard from './TwoOnboard';
import ThreeOnboard from './ThreeOnboard';
import FourOnboard from './FourOnboard';
import FiveOnboard from './FiveOnboard';
import SixOnboard from './SixOnboard';
import SevenOnboard from './SevenOnboard';
import EightOnboard from './EightOnboard';
import NineOnboard from './NineOnboard';
import TenOnboard from './TenOnboard';

export default function OnboardingCantainer() {
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className=' fixed left-0 right-0 bottom-0 sm:pb-16 pb-12 pt-5 bg-white'>

          <div className="carousel-button-group flex items-center justify-center gap-8 bottom-0"> 
            <div className={`${currentSlide === 0 ? 'disable' : ''} cursor-pointer rounded-xl h-12 w-28 font-semibold flex items-center justify-center border  border-blue text-blue `} onClick={() => previous()}>
                Prev
                </div>
            <div className={`${currentSlide >= 9?'hidden':'block'} rounded-xl h-12 w-28 font-semibold cursor-pointer flex items-center justify-center border  border-blue text-white bg-blue`} onClick={() => next()}>
                Next
            </div>
            <Link href='/dashboard'  className={`${currentSlide >= 9?'block':'hidden'} rounded-xl h-12 w-28 font-semibold cursor-pointer flex items-center justify-center border  border-blue text-white bg-blue`} >
            Next
            </Link>
          </div>
            </div>
        );
      };


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 260 },
          items: 1,
        },
       
      };
  return (
    
        <div className=' p-5 z-[100] absolute top-0 bottom-0 left-0 right-0 bg-[#fcfeff] '>
      <Carousel
        arrows={false} 
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
        autoPlay={false}>
          <OneOnboad/>
          <TwoOnboard/>
          <ThreeOnboard/>
          <FourOnboard/>
          <FiveOnboard/>
          <SixOnboard/>
          <SevenOnboard/>
          <EightOnboard/>
          <NineOnboard/>
          <TenOnboard/>
      </Carousel>
  </div>
   
  )
}

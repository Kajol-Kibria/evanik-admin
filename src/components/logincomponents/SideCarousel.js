'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Testimonial from '../onboarding/Testimonial';
import EvanicDetails from './EvanicDetails';

export default function SideCarousel() {

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    const carouselItems = [
      <div key={1} className='w-2 h-2  rounded-full'>
        
      </div>,
      <div key={2} className='w-2 h-2 -mt-1 rounded-full'>
        
      </div>
    ];
   
    return (
      <button
        className={active ? "active bg-white/60 rounded-full  mx-1" : "inactive bg-white/20 rounded-full mx-1"}
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </button>
    );
  };



  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
   
  };


  return (
    <div>
       <div className=''>
        <Carousel
  swipeable={true}
  infinite={true}
  arrows={false}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  
  autoPlay={true}
  autoPlaySpeed={6900}
  keyBoardControl={true}
  customDot={<CustomDot />}
>

 <Testimonial/>
 <EvanicDetails/> 

   
</Carousel>
    </div>
    </div>
  )
}

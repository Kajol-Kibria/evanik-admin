import React from 'react'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function CustomSelect({options}) {
  return (
    <div className='sm:w-44 w-full'>
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
    />
    </div>
  )
}

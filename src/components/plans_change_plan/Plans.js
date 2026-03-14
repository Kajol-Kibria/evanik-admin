import React from 'react'
import Image from '../../../node_modules/next/image';
import { data ,pricingData, planNames} from '../../../alldatafiles/PlansChangePlandata';
export default function Plans() {
    
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
        {data.map((d, i)=>(
        <div key={i} className='shd rounded-lg p-8 text-center relative mt-10 bg-white'>
            <div className='absolute -top-8 left-4'>
                <div className='border border-[#e0e1ff] w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white'><Image src={d.image} alt='' width={20} height={20}/></div>
            </div>
            <div className='absolute -top-[18px] right-4'>
                <p className={`bg-[${d.creditsColor}] text-sm py-2 px-4 rounded-full`}>{d.credits} credits</p>
            </div>
                <p className='font-semibold pb-3'>BLUE</p>
                <p className='text-blue text-4xl font-bold flex items-center justify-center gap-2'><span className='text-xl'>₹ </span>{d.price}</p>
                <p className='text-xs text-gray-700 pt-2 pb-6'>Excl GST</p>
                <button className='blueButton w-full'>Choose Plan</button>
        </div>
        ))}
    </div>
    <div className='sm:flex items-center gap-5'>
    <div className='shd rounded-lg p-8 text-center relative mt-10 bg-white sm:w-1/2'>
            <div className='absolute -top-8 left-4'>
                <div className='border border-[#e0e1ff] w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white'><Image src='/images/icon-plan-professional.png' alt='' width={20} height={20}/></div>
            </div>
            <div className='absolute -top-[18px] right-4'>
                <p className={`bg-[#F1F8F6] text-sm py-2 px-4 rounded-full`}>200 credits</p>
            </div>
            <p className='font-semibold pb-3'>Professional</p>
            <p className='text-blue text-4xl font-bold flex items-center justify-center gap-2'><span className='text-xl'>₹ </span>120000</p>
            <p className='text-xs text-gray-700 pt-2 pb-6'>Excl GST</p>
            <button className='blueButton w-full'>Choose Plan</button>
    </div>
    <div className='shd rounded-lg p-8 flex flex-col items-center relative mt-10 bg-white sm:w-1/2'>
            <div className='absolute -top-8'>
                <div className='border border-[#e0e1ff] w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white'><Image src='/images/icon-plan-enterprise.png' alt='' width={13} height={13}/></div>
            </div>
            <p className='font-semibold pb-3'>Enterprise</p>
            <button className='blueButton w-full'>Contact Sales</button>
            <div className='flex items-center justify-center gap-2 font-medium my-3'><span>Mr Rahul</span><p className='text-blue '>8882863792</p></div>
            <p className='text-blue  py-2 font-medium'>rahul@evanik.com</p>
    </div>
    </div>
    <div className='shd rounded-lg p-5 bg-white my-6 w-full overflow-auto'>
        <table className='w-[800px] sm:w-full'>
        <thead>
            <tr className='text-gray-500 text-left text-sm border-b'>
            <th className='font-semibold py-2'>Features</th>
            {planNames.map((plan, index) => (
                <th key={index} className='font-semibold py-2 sm:w-[10%]'>{plan}</th>
            ))}
            </tr>
        </thead>
        <tbody>
        {pricingData.map((row, rowIndex) => (
          <tr key={rowIndex} className='border-b text-sm'>
            <td className='font-semibold py-3'>{row.feature}</td>
            {row.plans.map((plan, planIndex) => (
              <td key={planIndex}>
                {plan === '' ? <Image src='/images/check.svg' alt='' width={16} height={16}/> : plan}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
        </table>
    </div>
    </>
  )
}

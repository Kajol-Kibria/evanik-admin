import React from 'react'
import Image from '../../../node_modules/next/image'

export default function StateTable({data}) {
  return (
    <div className='relative'>
        <div>
            <Image src='/images/india-map.svg' alt='' width={900} height={900}/>
        </div>
        <div className='fixed bottom-10 right-10 bg-white shd py-5 px-6 rounded-lg text-sm font-medium'>
        <p className='text-blue text-center text-lg font-semibold'>Gujarat (2023)</p>
        <table>
            <thead>
                <tr>
                <th className='text-gray-500 text-[13px] font-semibold py-1.5'>Metric</th>
                <th className='text-gray-500 text-[13px] font-semibold py-1.5'>Value</th>
                </tr>
            </thead>
            <tbody >
                {data.metrics.map((metric, i) => (
                <tr key={i}>
                    <td className='py-1.5 pr-10'>{metric.name}</td>
                    <td className='py-1.5'>{metric.value}</td>
                </tr>
                ))}
            </tbody>
        </table>
        <table className='border-t w-full'>
            <thead>
                <tr>
                <th className='text-gray-500 text-[13px] font-semibold py-2'>Quarter</th>
                <th className='text-gray-500 text-[13px] font-semibold py-2'>Net Revenue</th>
                <th className='text-gray-500 text-[13px] font-semibold py-2'>Units Sold</th>
                </tr>
            </thead>
            <tbody>
                {data.quarters.map((quarter, i) => (
                <tr key={i}>
                    <td className='py-1'>{quarter.quarter}</td>
                    <td className='py-1'>{quarter.netRevenue}</td>
                    <td className='py-1'>{quarter.unitsSold}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}
